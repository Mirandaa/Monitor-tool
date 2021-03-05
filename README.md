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
    "error": {
      "code": ,
      "message": 
    },
    "data": {
      
    }
  }
  ```

  ## Application Page

  ### 0. Create a new node

  > Description: Create a new node (app-server)

  API

  Request

  ```json
  method: POST
  url: /createNode
  params: {
    "appName": "pricer_ui",
    "hostName": "5fb7cce0-33d0-110",
    "owner": "Rates Sales",
    "groupEmail": "dl.gt.cn.icg@imcap.ssmb.com",
    "description": "Web tool for sales to pricing"
  }
  ```

  Response

  ```json
  {
    "error": {
      "code": 200,
      "message": "create node success"
    },
    "data": {
      
    }
  }
  ```

  ### 1. Create a new trace

  > Description: Create a new trace, from, to 

  API

  Request

  ```json
  method: POST
  url: /createTrace
  params: {
    "mainNode": "pricer_ui",
    "fromNode": "blotter",
    "toNode": "vvr"
  }
  ```

  Response

  ```json
  {
    "error": {
      "code": 200,
      "message": "create trace success"
    },
    "data": {
      
    }
  }
  ```

  ### 2. Get all nodes (app-server)

  > Description: Get all nodes (app-server)

  API

  Request

  ```json
  method: GET
  url: /getNodes
  params: {}
  ```

  Response

  ```json
  {
    "error": {
      "code": 200,
      "message": ""
    },
    "data": {
      "nodes": [
        {
          "id": "appID1-serverID1",
          "name": "Myriel",
          "server": "159.323.12.15",
          "category": 0,
          "owner": "Rates Sales"
        },
        {
          "id": "appID2-serverID2",
          "name": "Napoleon",
          "server": "159.323.12.15",
          "category": 0,
          "owner": "Rates Sales"
        },
        {
          "id": "appID3-serverID3",
          "name": "MlleBaptistine",
          "server": "159.323.12.15",
          "category": 1,
          "owner": "Rates Sales"
        },
        {
          "id": "appID4-serverID4",
          "name": "MmeMagloire",
          "server": "159.323.12.15",
          "category": 1,
          "owner": "Rates Sales"
        },
        {
          "id": "appID5-serverID5",
          "name": "CountessDeLo",
          "server": "159.323.12.15",
          "category": 1,
          "owner": "Rates Sales"
        },
        {
          "id": "appID1-serverID1",
          "name": "Geborand",
          "server": "159.323.12.15",
          "category": 1,
          "owner": "Rates Sales"
        }
      ],
      "links": [
        {
          "source": "appID5-serverID5",
          "target": "appID1-serverID1"
        },
        {
          "source": "appID3-serverID3",
          "target": "appID4-serverID4"
        },
        {
          "source": "appID1-serverID1",
          "target": "appID2-serverID2"
        }
      ],
      "categories": [
        {
          "name": "app1"
        },
        {
          "name": "app2"
        },
        {
          "name": "app3"
        }
      ]
    }
  }
  ```

  Return code:

  ```son
  200 - OK
  ```

  ## Dashboard Page

  ### 0. Get each app's basic index

  > Description: After user click into
  >
  > 传递某个app-server (node) 具体的basic index，rule
  >

  API

  Request

  ```json
  method: GET
  url: /getBasicIndex
  params: {
    "id": "appID1-serverID1"
  }
  ```

  Return data:

  ```json
  {
    "basicIndex": {
      "cpu": {
        "usage": "20%",
        "process": 120
      },
      "memory": {
        "usage": "1239 MB",
        "total": "111203 MB"
      },
      "jvm": {},
      "disk": {
        "usage": "60 GB",
        "total": "256 GB"
      }
    },
    "rules": {}
  }
  ```

  Return code:

  ```son
  200 - OK
  ```
