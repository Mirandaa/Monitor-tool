import request from '../utils/request';

export function getExampleData() {
  return request({
    url: 'https://cdn.jsdelivr.net/gh/apache/echarts-website@asf-site/examples/data/asset/data/les-miserables.json',
    method: 'get'
  })
}
