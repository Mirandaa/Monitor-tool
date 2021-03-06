const data = {
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
      "id": "appID1-serverID6",
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
};

export default data;