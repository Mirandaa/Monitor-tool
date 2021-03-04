import React, { useState, useEffect } from "react";
import ReactECharts from "echarts-for-react";
import { withRouter } from 'react-router-dom';
import { getExampleData } from "../../api";
import data from './example-data';

const Page = (props) => {
  const [option, setOption] = useState({});
  useEffect(() => {
    getExampleData().then((graph) => {
      graph = data;
      setOption({
        tooltip: {
          trigger: 'item',
          formatter: function (params) {
            var res = `
            <p style="font-weight: bold; line-height: 20px;">${params.data.name}</p>
            <p style="height: 16px;"><label style="width: 50px; text-overflow: ellipsis">Server</label><span style="font-weight: bold;">${params.data.server}</span></p>
            <p style="height: 16px;"><label style="width: 50px; text-overflow: ellipsis">Owner</label><span style="font-weight: bold;">${params.data.owner}</span></p>
            `;
            return res;
          }
        },
        legend: [{
          data: graph.categories.map(function (a) {
            return a.name;
          })
        }],
        series: [
          {
            type: 'graph',
            layout: 'force',
            data: graph.nodes,
            links: graph.links,
            categories: graph.categories,
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
    });
  }, []);

  const onClick = (e) => {
    props.history.push('/dashboard/123');
  };

  const onEvents = {
    'click': onClick
  };

  return (
    <ReactECharts
      option={option}
      style={{ height: "700px", width: "100%" }}
      onEvents={onEvents}
    />
  );
};

export default withRouter(Page);
