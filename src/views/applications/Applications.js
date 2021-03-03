import React, { useState, useEffect } from 'react';
import ReactECharts from 'echarts-for-react';
import { getExampleData } from '../../api';
const Page = () => {
  const [option, setOption] = useState({});
  useEffect(() => {
    getExampleData().then((graph) => {
      setOption({
        tooltip: {},
        legend: [{
          data: graph.categories.map(function (a) {
            return a.name;
          })
        }],
        series: [
          {
            name: 'Les Miserables',
            type: 'graph',
            layout: 'none',
            data: graph.nodes,
            links: graph.links,
            categories: graph.categories,
            roam: true,
            label: {
              show: true,
              position: 'right',
              formatter: '{b}'
            },
            labelLayout: {
              hideOverlap: true
            },
            scaleLimit: {
              min: 0.4,
              max: 2
            },
            lineStyle: {
              color: 'source',
              curveness: 0.3
            }
          }
        ]
      })
    })
  }, []);


  return <ReactECharts
    option={option}
    style={{ height: '700px', width: '100%' }}
  />;
};

export default Page;