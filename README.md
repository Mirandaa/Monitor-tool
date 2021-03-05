- # Teamwork
  Technology:

  >Front end: 
  >
  >- ReactJS + CoreUI
  >
  >Back end:
  >
  >- xxx
  >
  >Database:
  >
  >- xxx
  >
  >API style:
  >
  >- RESTful

  ### API Response Standards

  ```json
  {
    "code": ,
    "message": ,
    "data": {
      
    }
  }
  ```

  Status Code & Message

  | Code | Message                       |
  | ---- | ----------------------------- |
  | 200  | "success"                     |
  | 401  | "unauthorized"                |
  | 404  | "can't find reqeust resource" |
  | 408  | "request time out"            |
  | 461  | "invalid input parameters"    |
  | 500  | "server error"                |
  | 503  | "server unavailable"          |
  | 521  | "cache exception"             |

  ## Application Page

  ### 0. Create a new node

  > 创建一个新的node

  API

  Request

  ```json
  method: POST
  url: /createNode
  params: {
    "appName": "应用名称",
    "hostName": "server名称",
    "owner": "app拥有者，一般是app的leader",
    "group": "开发和运维app的小组",
    "groupEmail": "小组联系方式",
    "description": "应用的简单描述"
  }
  ```

  >  *后端根据appName和hostName对nodeID命名：*
  >
  > **nodeID = appName#hostName**

  Response

  ```json
  {
    "code": 200,
    "message": "create node success",
    "data": {
      
    }
  }
  ```

  ### 1. Create a new trace

  > 创建一个新的trace

  API

  Request

  ```json
  method: POST
  url: /createTrace
  params: {
    "traceName": "用户命名",
    "mainNodeId": "主节点",
    "fromNodeId": "上游节点",
    "toNodeId": "下游节点"
  }
  ```

  Response

  ```json
  {
    "code": 200,
    "message": "create trace success",
    "data": {
      
    }
  }
  ```

  ### 2. Get all nodes

  > 获取所有节点及其信息

  API

  Request

  ```json
  method: GET
  url: /getAllNodes
  params: {}
  ```

  Response

  ```json
  {
    "code": 200,
    "message": "Get all nodes",
    "data": {
      "nodes": [
        {
          "id": "nodeID1",
          "appName": "app名称",
    		"hostName": "server名称",
    		"owner": "app拥有者，一般是app的leader",
    		"group": "开发和运维app的小组",
    		"groupEmail": "小组联系方式",
          "category": 0
        },
        {
          "id": "nodeID2",
          "appName": "app名称",
    		"hostName": "server名称",
    		"owner": "app拥有者，一般是app的leader",
    		"group": "开发和运维app的小组",
    		"groupEmail": "小组联系方式",
          "category": 1
        },
        {
          "id": "nodeID3",
          "appName": "app名称",
    		"hostName": "server名称",
    		"owner": "app拥有者，一般是app的leader",
    		"group": "开发和运维app的小组",
    		"groupEmail": "小组联系方式",
          "category": 0
        }
      ],
      "links": [
        {
          "source": "nodeID3",
          "target": "nodeID2"
        },
        {
          "source": "nodeID1",
          "target": "nodeID2"
        }
      ],
      "categories": [
        {
          "name": "green"
        },
        {
          "name": "yellow"
        },
        {
          "name": "red"
        }
      ]
    }
  }
  ```

  ## Dashboard Page

  ### 0. Get each app's basic index

  > 传递某个node (app#server) 具体的basic index
  >

  API

  Request

  ```json
  method: GET
  url: /getNodeBasicMetrics
  params: {
    "nodeId": "nodeID"
  }
  ```

  Response

  ```json
  {
    "code": 200,
    "message": "success",
    "data": {
      "hostName": "xxx",
      "basicMetrics": {
        "cpu": {
          "process": 120,
          "cores": 2
        },
        "memory": {
          "used": 1239,
          "total": 111203
        },
        "userRatio": 20,
        "systemRatio": 20,
        "idleRatio": 60,
        "disk": {
          "used": 60,
          "total": 256
        }
      },
      "rules": {}
    }
  }
  ```

  ### 1. Get Node's Related Trace

  > 获取某个节点相关的trace

  API

  Request

  ```json
  method: GET
  url: /getNodeRelatedTrace
  params: {
    "id": "nodeID"
  }
  ```

  Response

  ```
  {
    "code": 200,
    "message": "success",
    "data": {
      TBD
    }
  }
  ```

  ## Visualize Page

  ### 0. Get Rule list

  > 根据用户权限，获取已创建的所有Rules

  API

  Request

  ```json
  method: GET
  url: /getRuleList
  params: {
    "user": "soeid"
  }
  ```

  Response

  ```json
  {
    "code": 200,
    "message": "success",
    "data": {
      "ruleList": [
        {
          "ruleName": "",
          "nodeId": "nodeID",
          "type": "metric",
          "app": "appName",
          "server": "serverName"
        },
        {
          "ruleName": "",
          "nodeId": "nodeID",
          "type": "metric",
          "app": "appName",
          "server": "serverName"
        },
        {
          "ruleName": "",
          "type": "metric",
          "nodeId": "nodeID",
          "app": "appName",
          "server": "serverName"
        }
      ]
    }
  }
  ```

  ### 1. Create a new rule

  > 创建一条新的rule

  API

  Request

  ```
  method: POST
  url: /createRule
  params: {
    TBD
  }
  ```

  Response

  ```
  {
    "code": 200,
    "message": "success",
    "data": {
      TBD
    }
  }
  ```

  ​
