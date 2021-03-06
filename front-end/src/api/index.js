import request from '../utils/request';

export function getExampleData() {
  return request({
    url: 'https://cdn.jsdelivr.net/gh/apache/echarts-website@asf-site/examples/data/asset/data/les-miserables.json',
    method: 'get'
  })
}

export function createNode(nodeParams) {
  return request({
    url: '/create',
    method: 'post',
    data: nodeParams
  })
}

export function createTrace(traceParams) {
  return request({
    url: '/createTrace',
    method: 'post',
    data: traceParams
  })
}

export async function getNodeInfo(nodeId) {
  let res = await request({
    url: 'http://chance2018.imwork.net/kafka/commonMetrics',
    method: 'post',
    params: {
      nodeId: nodeId
    }
  })
  return res.data ? {
    hostname: res.data.hostname || '',
    hostIP: res.data.hostIP || '',
    cpuCores: res.data.cpuCores || 0,
    cpuCount: res.data.cpuCount || 0,
    cpuProcessors: res.data.cpuProcessors || 0,
    date: res.data.date || '',
    diskUsed: res.data.diskUsed || 0,
    diskTotal: res.data.diskTotal || 0,
    idleRation: res.data.idleRation || 0,
    memoryUsed: res.data.memoryUsed || 0,
    memoryTotal: res.data.memoryTotal || 0,
    systemRation: res.data.systemRation || 0,
    userRatio: res.data.userRatio || 0
  } : {
    hostname: '',
    hostIP: '',
    cpuCores: 0,
    cpuCount: 0,
    cpuProcessors: 0,
    date: '',
    diskUsed: 0,
    diskTotal: 0,
    idleRation: 0,
    memoryUsed: 0,
    memoryTotal: 0,
    systemRation: 0,
    userRatio: 0
  }
}
