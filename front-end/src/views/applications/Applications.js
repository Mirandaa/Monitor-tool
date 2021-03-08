import React, { useState, useEffect } from "react";
import { useDispatch } from 'react-redux'
import ReactECharts from "echarts-for-react";
import { withRouter } from 'react-router-dom';
import { getAllNodes, getAllTraces } from "../../api";

const Page = (props) => {
  const dispatch = useDispatch()
  const [option, setOption] = useState({});
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

  const getAllNodesData = async () => {
    try {
      let graphNodes = []
      let graphLinks = []
      let allNodes = await getAllNodes()
      
      if (allNodes) {
        for (let i = 0; i < allNodes.length; i++) {
          graphNodes.push({
            id: allNodes[i].nodeId,
            name: allNodes[i].nodeId,
            owner: allNodes[i].addOwner,
            group: allNodes[i].appGroup,
            email: allNodes[i].appGroupEmail,
            category: getNodeHealth(allNodes[i].status)
          })
          let allTraces = await getAllTraces(allNodes[i].nodeId)
          if (allTraces !== []) {
            allTraces.map((trace) => {
              trace.spans.map(span => {
                graphLinks.push({
                  source: span.fromNodeId,
                  target: span.toNodeId
                })
              })
            })
          }
        }
      }
      const newOption = {
        darkMode: true,
        tooltip: {
          trigger: 'item',
          formatter: function (params) {
            if (params.data.id) {
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
            } else {
              return params.data.source + " -> " + params.data.target
            }
          }
        },
        legend: [{
          data: categories.map(function (a, index) {
            if (index === 0) {
              return;
            }
            return a.name;
          }),
          textStyle: {
            color: '#B9B8CE'
          }
        }],
        series: [
          {
            type: 'graph',
            layout: 'force',
            data: graphNodes,
            links: graphLinks,
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
      }
      setOption(newOption)
    } catch (err) {
      console.error(err.message);
    }
  }

  function getNodeHealth(nodeStatus) {
    return nodeStatus === 'green' ? 1
      : nodeStatus === 'yellow' ? 2
      : 3
  }

  useEffect(() => {
    getAllNodesData()
  }, []);

  const onClick = (e) => {
    props.history.push('/dashboard');
    dispatch({type: 'SET_CURRENT_NODE', nodeId: e.data.id})
    dispatch({type: 'SET_NODE_STATUS', nodeStatus: e.data.category})
  };

  const onEvents = {
    'click': onClick
  };

  return (
    <ReactECharts
      option={option}
      style={{ height: "500px", width: "100%" }}
      onEvents={onEvents}
    />
  );
};

export default withRouter(Page);
