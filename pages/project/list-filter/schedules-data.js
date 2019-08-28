const schedules = [  
  {  
    "csRouteID":0,
    "csPointPairID":0,
    "carrierScac":"OOLU",
    "por":{  
      "location":{  
        "locationID":"P189",
        "name":"Hong Kong",
        "facility":{  
          "name":"River Trade Terminal Co., Ltd",
          "code":"HKG13",
          "id":1010,
          "type":"Terminal"
        }
      },
      "etd":"2019-09-09T08:00:00.000Z"
    },
    "fnd":{  
      "location":{  
        "locationID":"P426",
        "name":"Los Angeles",
        "facility":{  
          "name":"Long Beach Container Terminal (Pier E)",
          "code":"LGB10",
          "id":3080,
          "type":"Terminal"
        }
      },
      "eta":"2019-09-28T13:00:00.000Z"
    },
    "transitTime":16,
    "direct":true,
    "importHaulage":"BOTH",
    "exportHaulage":"BOTH",
    "leg":[  
      {  
        "fromPoint":{  
          "location":{  
            "locationID":"P189",
            "name":"Hong Kong",
            "facility":{  
              "name":"HIT - Hongkong International Terminals",
              "code":"HKG02",
              "id":2900,
              "type":"Terminal"
            }
          },
          "defaultCutoff":"2019-09-08T12:00:00.000Z",
          "etd":"2019-09-09T08:00:00.000Z"
        },
        "toPoint":{  
          "location":{  
            "locationID":"P425",
            "name":"Long Beach",
            "facility":{  
              "name":"Long Beach Container Terminal (Pier E)",
              "code":"LGB10",
              "id":3080,
              "type":"Terminal"
            }
          },
          "eta":"2019-09-24T18:00:00.000Z"
        },
        "transportMode":"VESSEL",
        "service":{  
          "serviceID":10024548,
          "code":"PVCS",
          "name":"Pacific Vietnam China South"
        },
        "vessel":{  
          "vesselGID":"V000009501",
          "name":"OOCL HO CHI MINH CITY"
        },
        "imoNumber":9613599,
        "externalVoyageNumber":"036E",
        "svvdContent":"PVCS ~ OOCL HO CHI MINH CITY ~ 036E",
        "transitTime":0
      }
    ],
    "transportSummary":"TRUCK/VESSEL:10024548:V000009501:036E/TRUCK",
    "defaultCutoff":{  
      "cutoffTime":"2019-09-08T12:00:00.000Z"
    },
    "isPossibleDirect":true,
    "showSubscribeIcon":true,
    "showTransitTimeTips":false
  },
  {  
    "csRouteID":0,
    "csPointPairID":0,
    "carrierScac":"OOLU",
    "por":{  
      "location":{  
        "locationID":"P189",
        "name":"Hong Kong",
        "facility":{  
          "name":"River Trade Terminal Co., Ltd",
          "code":"HKG13",
          "id":1010,
          "type":"Terminal"
        }
      },
      "etd":"2019-08-31T10:00:00.000Z"
    },
    "fnd":{  
      "location":{  
        "locationID":"P426",
        "name":"Los Angeles",
        "facility":{  
          "name":"Pacific Container Terminal (PCT)",
          "code":"LGB23",
          "id":5386,
          "type":"Terminal"
        }
      },
      "eta":"2019-09-19T08:00:00.000Z"
    },
    "transitTime":15,
    "direct":true,
    "importHaulage":"BOTH",
    "exportHaulage":"BOTH",
    "leg":[  
      {  
        "fromPoint":{  
          "location":{  
            "locationID":"P189",
            "name":"Hong Kong",
            "facility":{  
              "name":"HIT - Hongkong International Terminals",
              "code":"HKG02",
              "id":2900,
              "type":"Terminal"
            }
          },
          "defaultCutoff":"2019-08-29T23:00:00.000Z",
          "etd":"2019-08-31T10:00:00.000Z"
        },
        "toPoint":{  
          "location":{  
            "locationID":"P425",
            "name":"Long Beach",
            "facility":{  
              "name":"Pacific Container Terminal (PCT)",
              "code":"LGB23",
              "id":5386,
              "type":"Terminal"
            }
          },
          "eta":"2019-09-15T16:00:00.000Z"
        },
        "transportMode":"VESSEL",
        "service":{  
          "serviceID":10033782,
          "code":"VCS",
          "name":"VIETNAM CHINA SOUTH"
        },
        "vessel":{  
          "vesselGID":"V000021562",
          "name":"KOTA PERABU"
        },
        "imoNumber":9793909,
        "externalVoyageNumber":"E013",
        "svvdContent":"VCS ~ KOTA PERABU ~ E013",
        "transitTime":0
      }
    ],
    "transportSummary":"TRUCK/VESSEL:10033782:V000021562:E013/TRUCK",
    "defaultCutoff":{  
      "cutoffTime":"2019-08-29T23:00:00.000Z"
    },
    "isPossibleDirect":true,
    "showSubscribeIcon":true,
    "showTransitTimeTips":false
  },
  {  
    "csRouteID":0,
    "csPointPairID":0,
    "carrierScac":"OOLU",
    "por":{  
      "location":{  
        "locationID":"P189",
        "name":"Hong Kong",
        "facility":{  
          "name":"River Trade Terminal Co., Ltd",
          "code":"HKG13",
          "id":1010,
          "type":"Terminal"
        }
      },
      "etd":"2019-09-03T01:00:00.000Z"
    },
    "fnd":{  
      "location":{  
        "locationID":"P426",
        "name":"Los Angeles",
        "facility":{  
          "name":"Pacific Container Terminal (PCT)",
          "code":"LGB23",
          "id":5386,
          "type":"Terminal"
        }
      },
      "eta":"2019-09-20T05:00:00.000Z"
    },
    "transitTime":15,
    "direct":true,
    "importHaulage":"BOTH",
    "exportHaulage":"BOTH",
    "leg":[  
      {  
        "fromPoint":{  
          "location":{  
            "locationID":"P189",
            "name":"Hong Kong",
            "facility":{  
              "name":"HIT - Hongkong International Terminals",
              "code":"HKG02",
              "id":2900,
              "type":"Terminal"
            }
          },
          "defaultCutoff":"2019-09-01T12:00:00.000Z",
          "etd":"2019-09-03T01:00:00.000Z"
        },
        "toPoint":{  
          "location":{  
            "locationID":"P425",
            "name":"Long Beach",
            "facility":{  
              "name":"Long Beach Container Terminal (Pier E)",
              "code":"LGB10",
              "id":3080,
              "type":"Terminal"
            }
          },
          "eta":"2019-09-18T06:00:00.000Z"
        },
        "transportMode":"VESSEL",
        "service":{  
          "serviceID":2302,
          "code":"SC2",
          "name":"SOUTH CHINA 2"
        },
        "vessel":{  
          "vesselGID":"V000000208",
          "name":"COSCO VENICE"
        },
        "imoNumber":9484405,
        "externalVoyageNumber":"036E",
        "svvdContent":"SC2 ~ COSCO VENICE ~ 036E",
        "transitTime":0
      }
    ],
    "transportSummary":"TRUCK/VESSEL:2302:V000000208:036E/TRUCK",
    "defaultCutoff":{  
      "cutoffTime":"2019-09-01T12:00:00.000Z"
    },
    "isPossibleDirect":true,
    "showSubscribeIcon":true,
    "showTransitTimeTips":false
  },
  {  
    "csRouteID":0,
    "csPointPairID":0,
    "carrierScac":"OOLU",
    "por":{  
      "location":{  
        "locationID":"P189",
        "name":"Hong Kong",
        "facility":{  
          "name":"River Trade Terminal Co., Ltd",
          "code":"HKG13",
          "id":1010,
          "type":"Terminal"
        }
      },
      "etd":"2019-09-07T10:00:00.000Z"
    },
    "fnd":{  
      "location":{  
        "locationID":"P426",
        "name":"Los Angeles",
        "facility":{  
          "name":"Pacific Container Terminal (PCT)",
          "code":"LGB23",
          "id":5386,
          "type":"Terminal"
        }
      },
      "eta":"2019-09-26T08:00:00.000Z"
    },
    "transitTime":15,
    "direct":true,
    "importHaulage":"BOTH",
    "exportHaulage":"BOTH",
    "leg":[  
      {  
        "fromPoint":{  
          "location":{  
            "locationID":"P189",
            "name":"Hong Kong",
            "facility":{  
              "name":"Goodman DP World Hong Kong Limited",
              "code":"HKG06",
              "id":2909,
              "type":"Terminal"
            }
          },
          "defaultCutoff":"2019-09-05T23:00:00.000Z",
          "etd":"2019-09-07T10:00:00.000Z"
        },
        "toPoint":{  
          "location":{  
            "locationID":"P425",
            "name":"Long Beach",
            "facility":{  
              "name":"Pacific Container Terminal (PCT)",
              "code":"LGB23",
              "id":5386,
              "type":"Terminal"
            }
          },
          "eta":"2019-09-22T16:00:00.000Z"
        },
        "transportMode":"VESSEL",
        "service":{  
          "serviceID":10033782,
          "code":"VCS",
          "name":"VIETNAM CHINA SOUTH"
        },
        "vessel":{  
          "vesselGID":"V000015798",
          "name":"KOTA PAHLAWAN"
        },
        "imoNumber":9786712,
        "externalVoyageNumber":"0016E",
        "svvdContent":"VCS ~ KOTA PAHLAWAN ~ 0016E",
        "transitTime":0
      }
    ],
    "transportSummary":"TRUCK/VESSEL:10033782:V000015798:0016E/TRUCK",
    "defaultCutoff":{  
      "cutoffTime":"2019-09-05T23:00:00.000Z"
    },
    "isPossibleDirect":true,
    "showSubscribeIcon":true,
    "showTransitTimeTips":false
  },
  {  
    "csRouteID":0,
    "csPointPairID":0,
    "carrierScac":"OOLU",
    "por":{  
      "location":{  
        "locationID":"P189",
        "name":"Hong Kong",
        "facility":{  
          "name":"River Trade Terminal Co., Ltd",
          "code":"HKG13",
          "id":1010,
          "type":"Terminal"
        }
      },
      "etd":"2019-09-05T03:00:00.000Z"
    },
    "fnd":{  
      "location":{  
        "locationID":"P426",
        "name":"Los Angeles",
        "facility":{  
          "name":"Fenix Marine Services Los Angeles",
          "code":"LAS02",
          "id":1279,
          "type":"Terminal"
        }
      },
      "eta":"2019-09-26T18:00:00.000Z"
    },
    "transitTime":17,
    "direct":true,
    "importHaulage":"BOTH",
    "exportHaulage":"BOTH",
    "leg":[  
      {  
        "fromPoint":{  
          "location":{  
            "locationID":"P189",
            "name":"Hong Kong",
            "facility":{  
              "name":"HIT - Hongkong International Terminals",
              "code":"HKG02",
              "id":2900,
              "type":"Terminal"
            }
          },
          "defaultCutoff":"2019-09-03T17:00:00.000Z",
          "etd":"2019-09-05T03:00:00.000Z"
        },
        "toPoint":{  
          "location":{  
            "locationID":"P426",
            "name":"Los Angeles",
            "facility":{  
              "name":"Fenix Marine Services Los Angeles",
              "code":"LAS02",
              "id":1279,
              "type":"Terminal"
            }
          },
          "eta":"2019-09-21T18:00:00.000Z"
        },
        "transportMode":"VESSEL",
        "service":{  
          "serviceID":10024544,
          "code":"PCS1",
          "name":"Pacific China South 1"
        },
        "vessel":{  
          "vesselGID":"V000013526",
          "name":"CMA CGM G. WASHINGTON"
        },
        "imoNumber":9780847,
        "externalVoyageNumber":"0TX3XE1MA",
        "svvdContent":"PCS1 ~ CMA CGM G. WASHINGTON ~ 0TX3XE1MA",
        "transitTime":0
      }
    ],
    "transportSummary":"TRUCK/VESSEL:10024544:V000013526:0TX3XE1MA/TRUCK",
    "defaultCutoff":{  
      "cutoffTime":"2019-09-03T17:00:00.000Z"
    },
    "isPossibleDirect":true,
    "showSubscribeIcon":true,
    "showTransitTimeTips":false
  },
  {  
    "csRouteID":0,
    "csPointPairID":0,
    "carrierScac":"OOLU",
    "por":{  
      "location":{  
        "locationID":"P189",
        "name":"Hong Kong",
        "facility":{  
          "name":"River Trade Terminal Co., Ltd",
          "code":"HKG13",
          "id":1010,
          "type":"Terminal"
        }
      },
      "etd":"2019-09-09T07:30:00.000Z"
    },
    "fnd":{  
      "location":{  
        "locationID":"P426",
        "name":"Los Angeles",
        "facility":{  
          "name":"Long Beach Container Terminal (Pier E)",
          "code":"LGB10",
          "id":3080,
          "type":"Terminal"
        }
      },
      "eta":"2019-09-25T17:00:00.000Z"
    },
    "transitTime":15,
    "direct":true,
    "importHaulage":"BOTH",
    "exportHaulage":"BOTH",
    "leg":[  
      {  
        "fromPoint":{  
          "location":{  
            "locationID":"P189",
            "name":"Hong Kong",
            "facility":{  
              "name":"HIT - Hongkong International Terminals",
              "code":"HKG02",
              "id":2900,
              "type":"Terminal"
            }
          },
          "defaultCutoff":"2019-09-08T12:00:00.000Z",
          "etd":"2019-09-09T07:30:00.000Z"
        },
        "toPoint":{  
          "location":{  
            "locationID":"P425",
            "name":"Long Beach",
            "facility":{  
              "name":"Long Beach Container Terminal (Pier E)",
              "code":"LGB10",
              "id":3080,
              "type":"Terminal"
            }
          },
          "eta":"2019-09-23T18:00:00.000Z"
        },
        "transportMode":"VESSEL",
        "service":{  
          "serviceID":2302,
          "code":"SC2",
          "name":"SOUTH CHINA 2"
        },
        "vessel":{  
          "vesselGID":"V000005253",
          "name":"XIN YING KOU"
        },
        "imoNumber":9312585,
        "externalVoyageNumber":"089E",
        "svvdContent":"SC2 ~ XIN YING KOU ~ 089E",
        "transitTime":0
      }
    ],
    "transportSummary":"TRUCK/VESSEL:2302:V000005253:089E/TRUCK",
    "defaultCutoff":{  
      "cutoffTime":"2019-09-08T12:00:00.000Z"
    },
    "isPossibleDirect":true,
    "showSubscribeIcon":true,
    "showTransitTimeTips":false
  },
  {  
    "csRouteID":0,
    "csPointPairID":0,
    "carrierScac":"OOLU",
    "por":{  
      "location":{  
        "locationID":"P189",
        "name":"Hong Kong",
        "facility":{  
          "name":"River Trade Terminal Co., Ltd",
          "code":"HKG13",
          "id":1010,
          "type":"Terminal"
        }
      },
      "etd":"2019-09-02T08:00:00.000Z"
    },
    "fnd":{  
      "location":{  
        "locationID":"P426",
        "name":"Los Angeles",
        "facility":{  
          "name":"Long Beach Container Terminal (Pier E)",
          "code":"LGB10",
          "id":3080,
          "type":"Terminal"
        }
      },
      "eta":"2019-09-21T03:00:00.000Z"
    },
    "transitTime":16,
    "direct":true,
    "importHaulage":"BOTH",
    "exportHaulage":"BOTH",
    "leg":[  
      {  
        "fromPoint":{  
          "location":{  
            "locationID":"P189",
            "name":"Hong Kong",
            "facility":{  
              "name":"HIT - Hongkong International Terminals",
              "code":"HKG02",
              "id":2900,
              "type":"Terminal"
            }
          },
          "defaultCutoff":"2019-09-01T12:00:00.000Z",
          "etd":"2019-09-02T08:00:00.000Z"
        },
        "toPoint":{  
          "location":{  
            "locationID":"P425",
            "name":"Long Beach",
            "facility":{  
              "name":"Long Beach Container Terminal (Pier E)",
              "code":"LGB10",
              "id":3080,
              "type":"Terminal"
            }
          },
          "eta":"2019-09-17T18:00:00.000Z"
        },
        "transportMode":"VESSEL",
        "service":{  
          "serviceID":10024548,
          "code":"PVCS",
          "name":"Pacific Vietnam China South"
        },
        "vessel":{  
          "vesselGID":"V000000211",
          "name":"OOCL MEMPHIS"
        },
        "imoNumber":9486075,
        "externalVoyageNumber":"051E",
        "svvdContent":"PVCS ~ OOCL MEMPHIS ~ 051E",
        "transitTime":0
      }
    ],
    "transportSummary":"TRUCK/VESSEL:10024548:V000000211:051E/TRUCK",
    "defaultCutoff":{  
      "cutoffTime":"2019-09-01T12:00:00.000Z"
    },
    "isPossibleDirect":true,
    "showSubscribeIcon":true,
    "showTransitTimeTips":false
  }
];

export default {
	schedules
}