import React, { useState, useEffect } from "react";
import { useDispatch } from 'react-redux'
import ReactECharts from "echarts-for-react";
import { withRouter } from 'react-router-dom';
import { getAllNodes, getAllTraces } from "../../api";

const Page = (props) => {
  const dispatch = useDispatch()

  const [option, setOption] = useState({});
  const [nodes, setNodes] = useState([]);
  const [links, setLinks] = useState([]);
  const [categories, setCategories] = useState([
    {
      name: "Blue"
    },
    {
      name: "Green"
    },
    {
      name: "Yellow"
    },
    {
      name: "Red"
    }
  ]);

  const [showLoading, setShowLoading] = useState(true)

  const getAllNodesData = async () => {
    let allNodes = await getAllNodes()
    let graphNodes = []
    let graphLinks = []

    if (allNodes) {
      allNodes.map(async (node) => {
        graphNodes.push({
          id: node.nodeId,
          name: node.nodeId,
          owner: node.addOwner,
          group: node.appGroup,
          email: node.appGroupEmail,
          category: getNodeHealth(node.status)
        })
        let allTraces = await getAllTraces(node.nodeId)
        if (allTraces) {
          allTraces.map((trace) => {
            trace.spans.map(span => {
              graphLinks.push({
                source: span.fromNodeId,
                target: span.toNodeId
              })
            })
          })
        }
      })
      setNodes(graphNodes)
      setLinks(graphLinks)
    }
  }

  function getNodeHealth(nodeStatus) {
    return nodeStatus === 'green' ? 1
      : nodeStatus === 'yellow' ? 2
      : 3
  }

  useEffect(() => {
    const fetchData = async () => {
      await getAllNodesData()
      setShowLoading(false)
      setOption({
        tooltip: {
          trigger: 'item',
          formatter: function (params) {
            var nodeStatus = params.data.category === 1 ? '<span class="badge badge-success">Green</span>'
              : params.data.category === 2 ? '<span class="badge badge-warning">Yellow</span>'
              : '<span class="badge badge-danger">Red</span>'
            var res = `
            <p style="font-weight: bold; line-height: 20px;">${params.data.id}</p>
            <p style="height: 16px;"><label style="width: 50px; text-overflow: ellipsis">Owner</label><span style="font-weight: bold;">${params.data.owner}</span></p>
            <p style="height: 16px;"><label style="width: 50px; text-overflow: ellipsis">Group</label><span style="font-weight: bold;">${params.data.group}</span></p>
            <p style="height: 16px;"><label style="width: 50px; text-overflow: ellipsis">Email</label><span style="font-weight: bold;">${params.data.email}</span></p>
            <p style="height: 16px;"><label style="width: 50px; text-overflow: ellipsis">Health</label><span style="font-weight: bold;">${nodeStatus}</span></p>
            `;
            return res;
          }
        },
        legend: [{
          data: categories.map(function (a) {
            return a.name;
          })
        }],
        series: [
          {
            type: 'graph',
            layout: 'force',
            data: nodes,
            links: links,
            categories: categories,
            roam: true,
            label: {
              show: true,
              position: "right",
              formatter: "{b}",
            },
            labelLayout: {
              hideOverlap: true,
            },
            scaleLimit: {
              min: 0.4,
              max: 2,
            },
            lineStyle: {
              color: "source",
              curveness: 0.3,
            },
            force: {
              repulsion: 300
            }
          },
        ]
      });
    }
    fetchData()
  }, []);

  const onClick = (e) => {
    // console.log('click event', e)
    dispatch({type: 'SET_CURRENT_NODE', nodeId: e.data.id})
    dispatch({type: 'SET_NODE_STATUS', nodeStatus: e.data.category})
    props.history.push('/dashboard');
  };

  const onEvents = {
    'click': onClick
  };

  return (
    <ReactECharts
      option={option}
      style={{ height: "500px", width: "100%" }}
      onEvents={onEvents}
      showLoading={showLoading}
    />
  );
};

export default withRouter(Page);
