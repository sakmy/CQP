window.onload = function() {
  var ch1 = echarts.init(document.getElementById('ch1'));
  var ch2 = echarts.init(document.getElementById('ch2'));
  var ch3 = echarts.init(document.getElementById('ch3'));
  var ch4 = echarts.init(document.getElementById('ch4'));
  // var ch5 = echarts.init(document.getElementById('ch5'));
  // var ch6 = echarts.init(document.getElementById('ch6'));
  var op1 = {
    title: {
      show: false
    },
    tooltip: {
      trigger: 'item'
    },
    polar: {
      center: ['50%', '50%'],
    },
    angleAxis: {
      max: 100,
      show: false,
    },
    radiusAxis: {
      type: 'category',
      show: true,
      axisLabel: {
        show: false,
      },
      axisLine: {
        show: false,
      },
      axisTick: {
        show: false
      },
    },
    series: [{
      name: '',
      type: 'pie',
      roundCap: true,
      radius: ['40%', '70%'],
      showBackground: false,
      backgroundStyle: {
        color: 'rgba(0, 100, 220, 0.3)',
      },
      label: {
        normal: {
          formatter: '{d}%', //图形外文字上下显示
          borderWidth: 20,
          borderRadius: 4,
          padding: [0, -10], //文字和图的边距
          fontSize: 14,
        }
      },
      data: [{
        value: 1048,
        name: '国药控股',
        itemStyle: {
          normal: {
            borderRadius: 10,
            borderColor: '#fff',
            borderWidth: 2,
            color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
              offset: 0,
              color: '#47E3FF'
            }, {
              offset: 1,
              color: '#1E6EFF'
            }]),
          }
        }
      }, {
        value: 735,
        name: '九州通',
        itemStyle: {
          normal: {
            borderRadius: 10,
            borderColor: '#fff',
            borderWidth: 2,
            color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
              offset: 0,
              color: '#72EEB9'
            }, {
              offset: 1,
              color: '#72EEB9'
            }]),
          }
        }
      }, {
        value: 580,
        name: '国药一致',
        itemStyle: {
          normal: {
            borderRadius: 10,
            borderColor: '#fff',
            borderWidth: 2,
            color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
              offset: 0,
              color: '#0CC5FF'
            }, {
              offset: 1,
              color: '#0CC5FF'
            }]),
          }
        }
      }, {
        value: 580,
        name: '重药控股',
        itemStyle: {
          normal: {
            borderRadius: 10,
            borderColor: '#fff',
            borderWidth: 2,
            color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
              offset: 0,
              color: '#7C59FF'
            }, {
              offset: 1,
              color: '#7C59FF'
            }]),
          }
        }
      }, {
        value: 580,
        name: '中国医药',
        itemStyle: {
          normal: {
            borderRadius: 10,
            borderColor: '#fff',
            borderWidth: 2,
            color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
              offset: 0,
              color: '#FF7DD9'
            }, {
              offset: 1,
              color: '#FF7DD9'
            }]),
          }
        }
      }, {
        value: 580,
        name: '医药股份',
        itemStyle: {
          normal: {
            borderRadius: 10,
            borderColor: '#fff',
            borderWidth: 2,
            color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
              offset: 0,
              color: '#FF597D'
            }, {
              offset: 1,
              color: '#FF597D'
            }]),
          }
        }
      }, {
        value: 580,
        name: '瑞康医药',
        itemStyle: {
          normal: {
            borderRadius: 10,
            borderColor: '#fff',
            borderWidth: 2,
            color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
              offset: 0,
              color: '#FF9959'
            }, {
              offset: 1,
              color: '#FF9959'
            }]),
          }
        }
      }, {
        value: 580,
        name: '英特集团',
        itemStyle: {
          normal: {
            borderRadius: 10,
            borderColor: '#fff',
            borderWidth: 2,
            color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
              offset: 0,
              color: '#F7E940'
            }, {
              offset: 1,
              color: '#F7E940'
            }]),
          }
        }
      }],
      coordinateSystem: 'polar',
    }]
  };
  var op2 = {
    title: {
      show: false
    },
    tooltip: {
      trigger: 'item'
    },
    polar: {
      center: ['50%', '50%'],
    },
    angleAxis: {
      max: 100,
      show: false,
    },
    radiusAxis: {
      type: 'category',
      show: true,
      axisLabel: {
        show: false,
      },
      axisLine: {
        show: false,
      },
      axisTick: {
        show: false
      },
    },
    series: [{
      name: '',
      type: 'pie',
      roundCap: true,
      radius: ['40%', '70%'],
      showBackground: false,
      backgroundStyle: {
        color: 'rgba(0, 100, 220, 0.3)',
      },
      label: {
        normal: {
          formatter: '{d}%', //图形外文字上下显示
          borderWidth: 20,
          borderRadius: 4,
          padding: [0, -10], //文字和图的边距
          fontSize: 14,
        }
      },
      data: [{
        value: 1048,
        name: '国药控股',
        itemStyle: {
          normal: {
            borderRadius: 10,
            borderColor: '#fff',
            borderWidth: 2,
            color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
              offset: 0,
              color: '#47E3FF'
            }, {
              offset: 1,
              color: '#1E6EFF'
            }]),
          }
        }
      }, {
        value: 735,
        name: '九州通',
        itemStyle: {
          normal: {
            borderRadius: 10,
            borderColor: '#fff',
            borderWidth: 2,
            color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
              offset: 0,
              color: '#72EEB9'
            }, {
              offset: 1,
              color: '#72EEB9'
            }]),
          }
        }
      }, {
        value: 580,
        name: '国药一致',
        itemStyle: {
          normal: {
            borderRadius: 10,
            borderColor: '#fff',
            borderWidth: 2,
            color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
              offset: 0,
              color: '#0CC5FF'
            }, {
              offset: 1,
              color: '#0CC5FF'
            }]),
          }
        }
      }, {
        value: 580,
        name: '重药控股',
        itemStyle: {
          normal: {
            borderRadius: 10,
            borderColor: '#fff',
            borderWidth: 2,
            color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
              offset: 0,
              color: '#7C59FF'
            }, {
              offset: 1,
              color: '#7C59FF'
            }]),
          }
        }
      }, {
        value: 580,
        name: '中国医药',
        itemStyle: {
          normal: {
            borderRadius: 10,
            borderColor: '#fff',
            borderWidth: 2,
            color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
              offset: 0,
              color: '#FF7DD9'
            }, {
              offset: 1,
              color: '#FF7DD9'
            }]),
          }
        }
      }, {
        value: 580,
        name: '医药股份',
        itemStyle: {
          normal: {
            borderRadius: 10,
            borderColor: '#fff',
            borderWidth: 2,
            color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
              offset: 0,
              color: '#FF597D'
            }, {
              offset: 1,
              color: '#FF597D'
            }]),
          }
        }
      }, {
        value: 580,
        name: '瑞康医药',
        itemStyle: {
          normal: {
            borderRadius: 10,
            borderColor: '#fff',
            borderWidth: 2,
            color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
              offset: 0,
              color: '#FF9959'
            }, {
              offset: 1,
              color: '#FF9959'
            }]),
          }
        }
      }, {
        value: 580,
        name: '英特集团',
        itemStyle: {
          normal: {
            borderRadius: 10,
            borderColor: '#fff',
            borderWidth: 2,
            color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
              offset: 0,
              color: '#F7E940'
            }, {
              offset: 1,
              color: '#F7E940'
            }]),
          }
        }
      }],
      coordinateSystem: 'polar',
    }]
  };
  var op3x = {
    // 图表标题
    title: {
      show: true, //显示策略，默认值true,可选为：true（显示） | false（隐藏）
      text: '综合毛利率', //主标题文本，'\n'指定换行

    },
    tooltip: {},
    grid: {
        left: '50%',
        right: 90,
        top: '18%',
        bottom: '10%'
    },
    color: ['#fff', '#fff', '#fff'],
    series: [{
      type: 'graph',
      layout: 'force',
      force: {
        repulsion: 260,
        edgeLength: 10
      },
      roam: true,
      label: {
        normal: {
          show: true,
          position: 'bottom',
          color: '#111'
        }
      },
      data: [{
        "name": "国药控股",
        "value": 1373,
        "symbolSize": 48,
        "draggable": true,
        "itemStyle": {
          "normal": {
            "color": '#1560FF'
          }
        }
      }, {
        "name": "九州通",
        "value": 5449,
        "symbolSize": 73,
        "draggable": true,
        "itemStyle": {
          "normal": {
            "color": '#72EEB9'
          }
        }
      }, {
        "name": "国药一致",
        "value": 2289,
        "symbolSize": 67,
        "draggable": true,
        "itemStyle": {
          "normal": {
            "color": '#0CC5FF'
          }
        }
      }, {
        "name": "重药控股",
        "value": 12518,
        "symbolSize": 160,
        "draggable": true,
        "itemStyle": {
          "normal": {
            "color": '#7C59FF'
          }
        }
      }, {
        "name": "中国医药",
        "value": 4730,
        "symbolSize": 38,
        "draggable": true,
        "itemStyle": {
          "normal": {
            "color": '#FF7DD9'
          }
        }
      }, {
        "name": "医药股份",
        "value": 1952,
        "symbolSize": 15,
        "draggable": true,
        "itemStyle": {
          "normal": {
            "color": '#FF597D'
          }
        }
      }, {
        "name": "瑞康医药",
        "value": 926,
        "symbolSize": 70,
        "draggable": true,
        "itemStyle": {
          "normal": {
            "color": '#FF9959'
          }
        }
      }, {
        "name": "英特集团",
        "value": 4536,
        "symbolSize": 67,
        "draggable": true,
        "itemStyle": {
          "normal": {
            "color": '#F7E940'
          }
        }
      }, {
        "name": "111",
        "value": 536,
        "symbolSize": 20,
        "draggable": true,
        "itemStyle": {
          "normal": {
            "color": '#FF7DD9'
          }
        }
      }]
    }]
  }

  var op3 = {
    color: [
        '#dd4444', '#fec42c', '#80F1BE'
    ],
    legend: {
       show: false,
    },
    grid: {
        left: '15%',
        right: 90,
        top: '18%',
        bottom: '10%'
    },
    tooltip: {
        show: false
    },
    xAxis: {
        type: 'value',
        name: '营业收入',
        nameGap: 16,
        nameTextStyle: {
            fontSize: 16
        },
        max: 31,
        splitLine: {
            show: false
        },
    },
    yAxis: {
        type: 'value',
        name: '综合毛利率',
        nameLocation: 'end',
        nameGap: 20,
        nameTextStyle: {
            fontSize: 16
        },
        splitLine: {
            show: false
        }
    },
    visualMap: [
        {
            left: 'right',
            top: '10%',
            dimension: 2,
            min: 0,
            max: 350,
            show: false,
            itemWidth: 30,
            itemHeight: 120,
            calculable: true,
            precision: 0.1,

            textGap: 30,
            inRange: {
                symbolSize: [10, 70]
            },
            outOfRange: {
                symbolSize: [10, 70],
                color: ['rgba(255,255,255,0.4)']
            },
            controller: {
                inRange: {
                    color: ['#c23531']
                },
                outOfRange: {
                    color: ['#999']
                }
            }
        },

    ],
    series: [

        {
            name: '国药控股',
            type: 'scatter',
            label: {
              normal: {
                formatter: '国药控股',
                show: true,
                position: 'bottom',
                color: '#111'
              }
            },
            color:'#1560FF',
            data:  [
                [21,250,139],

            ]
        },
        {
            name: '九州通',
            type: 'scatter',
            label: {
              normal: {
                formatter: '九州通',
                show: true,
                position: 'bottom',
                color: '#111'
              }
            },
            color:'#72EEB9',
            data:  [
                [31,115,99],

            ]
        },{
            name: '国药一致',
            type: 'scatter',
            label: {
              normal: {
                formatter: '国药一致',
                show: true,
                position: 'bottom',
                color: '#111'
              }
            },
            color:'#0CC5FF',
            data:  [
                [6,122,119],

            ]
        },{
            name: '重药控股',
            type: 'scatter',
            label: {
              normal: {
                formatter: '重药控股',
                show: true,
                position: 'bottom',
                color: '#111'
              }
            },
            color:'#7C59FF',
            data:  [
                [16,155,350],

            ]
        },{
            name: '中国医药',
            type: 'scatter',
            label: {
              normal: {
                formatter: '中国医药',
                show: true,
                position: 'bottom',
                color: '#111'
              }
            },
            color:'#FF7DD9',
            data:  [
                [28,85,79],

            ]
        },{
            name: '医药股份',
            type: 'scatter',
            label: {
              normal: {
                formatter: '医药股份',
                show: true,
                position: 'bottom',
                color: '#111'
              }
            },
            color:'#FF597D',
            data:  [
                [11,165,99],

            ]
        },{
            name: '瑞康医药',
            type: 'scatter',
            label: {
              normal: {
                formatter: '瑞康医药',
                show: true,
                position: 'bottom',
                color: '#111'
              }
            },
            color:'#FF9959',
            data:  [
                [7,175,119],

            ]
        },{
            name: '英特集团',
            type: 'scatter',
            label: {
              normal: {
                formatter: '英特集团',
                show: true,
                position: 'bottom',
                color: '#111'
              }
            },
            color:'#F7E940',
            data:  [
                [6,45,99],

            ]
        },

    ]
};
  var op4 = {
    title: {
      show: false,
      text: '折线图堆叠'
    },
    tooltip: {
      trigger: 'axis',
      axisPointer: { // 坐标轴指示器，坐标轴触发有效
        show: false,
        type: 'shadow', // 默认为直线，可选为：'line' | 'shadow'
      }
    },
    legend: {
      show: false,
      data: ['期末库存品规数', '销售品规数', '动销比']
    },
    grid: {
      left: '8%',
      top: '8%',
      right: '7%',
      bottom: '25%',
      containLabel: false
    },
    toolbox: {
      show: false,
      feature: {
        saveAsImage: {}
      }
    },
    xAxis: {
      type: 'category',
      boundaryGap: true,
      axisTick: {
        alignWithLabel: true
      },
      axisLabel: {
         interval:0,
         rotate:40,
         margin:20,

      },
      data: ['瑞康医药', '中国医药', '柳药股份', '国药一致', '嘉事堂', '重药控股', '九州通', '国药控股 ', '鹭燕医药', '国药股份', '南京医药', '英特集团']
    },
    yAxis: {
     type: 'value',
      axisTick: {
        show: false
      },
    },
    series: [{
      name: '综合毛利率',
      type: 'bar',
      barWidth: '5',
      itemStyle: {
        normal: {

          barBorderRadius: [3, 3, 0, 0],
          color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
            offset: 0,
            color: '#00B6FF'
          }, {
            offset: 1,
            color: '#38FBFF'
          }]),
        }
      },
      data: [140, 132, 101, 134, 90, 230, 210, 101, 134, 90, 230, 210]
    }, {
      name: '净利率',
      type: 'bar',
      barWidth: '5',
      itemStyle: {
        normal: {

          barBorderRadius: [3, 3, 0, 0],
          color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
            offset: 0,
            color: '#47E3FF'
          }, {
            offset: 1,
            color: '#1E6EFF'
          }]),
        }
      },
      data: [240, 232, 101, 134, 90, 230, 210, 101, 134, 90, 230, 210]
    }, {
      name: '净资产收益率',
      type: 'bar',
      barWidth: '5',
      itemStyle: {
        normal: {

          barBorderRadius: [3, 3, 0, 0],
          color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
            offset: 0,
            color: '#71EEB7'
          }, {
            offset: 1,
            color: '#00BEC5'
          }]),
        }
      },
      data: [50, 42, 11, 44, 100, 240, 220, 111, 144, 100, 240, 220]
    }]
  };
  ch1.setOption(op1);
  ch2.setOption(op2);
  ch3.setOption(op3);
  ch4.setOption(op4);
  // ch5.setOption(op5);
  // ch6.setOption(op6);
}