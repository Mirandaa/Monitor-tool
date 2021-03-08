import request from '../utils/request';

export function getExampleData() {
  return request({
    url: 'https://cdn.jsdelivr.net/gh/apache/echarts-website@asf-site/examples/data/asset/data/les-miserables.json',
    method: 'get'
  })
}

export async function getAllNodes() {
  return await request({
    url: '/all',
    method: 'get'
  })
}

export async function getAllTraces(nodeId) {
  return await request({
    url: '/node/' + nodeId.replace("#","%23"),
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
    url: '/commonMetrics',
    method: 'get',
    params: {
      nodeId: nodeId
    }
  })
  let responseData = res.data ? res.data[res.data.length - 1] : undefined

  return responseData ? {
    hostname: responseData.hostname || '',
    hostIP: responseData.hostIP || '',
    cpuCores: responseData.cpuCores || 0,
    cpuCount: responseData.cpuCount || 0,
    cpuProcessors: responseData.cpuProcessors || 0,
    date: responseData.date || '',
    diskUsed: responseData.diskUsed || 0,
    diskTotal: responseData.diskTotal || 0,
    idleRation: responseData.idleRation || 0,
    memoryUsed: responseData.memoryUsed || 0,
    memoryTotal: responseData.memoryTotal || 0,
    systemRation: responseData.systemRation || 0,
    userRatio: responseData.userRatio || 0
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

export async function createDashboard(data) {
  return request({
    url: '/createDashboard',
    method: 'post',
    data
  })
}
