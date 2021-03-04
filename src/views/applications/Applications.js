import React, { useState, useEffect } from "react";
import ReactECharts from "echarts-for-react";
import { getExampleData } from "../../api";
import data from './example-data';

const Page = () => {
  const [option, setOption] = useState({});
  useEffect(() => {
    getExampleData().then((graph) => {
      graph = data;
      setOption({
        tooltip: {
          trigger: 'item',
          formatter: function (params,ticket,callback) {
            var res = '<p>' + params.name + '</p>';
            setTimeout(function () {
              callback(ticket, res);
            });
            return 'loading';
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
            layout: 'none',
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
    console.log(e);
  };

  const onEvents = {
    'click': (e) => {
      console.log(123, e);
    }
  };

  return (
    <ReactECharts
      option={option}
      style={{ height: "700px", width: "100%" }}
      onEvents={onEvents}
    />
  );
};

export default Page;
