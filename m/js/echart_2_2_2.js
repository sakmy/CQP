window.onload = function() {
  var ch1 = echarts.init(document.getElementById('ch1'));
  var ch4 = echarts.init(document.getElementById('ch4'));
  var ch2 = echarts.init(document.getElementById('ch2'));
  var ch5 = echarts.init(document.getElementById('ch5'));
  var ch6 = echarts.init(document.getElementById('ch6'));









  var op1 = {
    title: {
      show: false
    },
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow'
      }
    },
    legend: {
      show: false
    },
    grid: {
      left: '3%',
      right: '4%',
      top: '6%',
      bottom: '0%',
      containLabel: true
    },
    xAxis: {
      type: 'category',
      data: [  '促销 ' ,'正常','近效','失效','（空白）'],
      boundaryGap: [0, 0.01]
    },
    yAxis: {
      axisLabel:{

      },
      type: 'value',

    },
    series: [{
      name: '2011年',
      type: 'bar',
      data: [18203, 23489, 29034, 104970,104970],
      label: {
        show: true,
        position: 'top',
      },
      barWidth: 40,
      itemStyle: {

        normal: {
         // barBorderRadius:[3, 3, 0, 0],
          color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
            offset: 0,
            color: '#1E6EFF'
          }, {
            offset: 1,
            color: '#47E3FF'
          }]),
        }
      },
    }, ]
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
        name: '药品',
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
        name: '器械',
        itemStyle: {
          normal: {
            borderRadius: 10,
            borderColor: '#fff',
            borderWidth: 2,
            color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
              offset: 0,
              color: '#71EEB7'
            }, {
              offset: 1,
              color: '#00BEC5'
            }]),
          }
        }
      }, {
        value: 580,
        name: '零售',
        itemStyle: {
          normal: {
            borderRadius: 10,
            borderColor: '#fff',
            borderWidth: 2,
            color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
              offset: 0,
              color: '#73EAFF'
            }, {
              offset: 1,
              color: '#00A4FF'
            }]),
          }
        }
      }, {
        value: 484,
        name: '储备',
        itemStyle: {
          normal: {
            borderRadius: 10,
            borderColor: '#fff',
            borderWidth: 2,
            color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
              offset: 0,
              color: '#B8A5FF'
            }, {
              offset: 1,
              color: '#4C2AFF'
            }]),
          }
        }
      }],
      coordinateSystem: 'polar',
    }]
  };

 var op4 = {
    title: {
      show: false,
      text: '折线图堆叠'
    },
    tooltip: {
      trigger: 'axis'
    },
    legend: {
      show: false,
      data: ['本期完成', '上年完成', '同比增幅']
    },
    grid: {
      left: '5%',
      top: '12%',
      right: '4%',
      bottom: '15%',
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
      data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月']
    },
    yAxis: {
      axisTick: {
        show: false
      },
    },
    series: [{
      name: '本期完成',
      type: 'bar',
      barWidth: '30%',
      itemStyle: {
        normal: {
          barBorderRadius:[3, 3, 0, 0],
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
      name: '上年完成',
      type: 'bar',
      barWidth: '30%',
      itemStyle: {
        normal: {
          barBorderRadius:[3, 3, 0, 0],
          color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
            offset: 0,
            color: '#71EEB7'
          }, {
            offset: 1,
            color: '#00BEC5'
          }]),
        }
      },
      data: [240, 232, 101, 134, 90, 230, 210, 101, 134, 90, 230, 210]
    },{
      name: '同比增幅',
      type: 'line',
      //symbol: 'circle',
      symbolSize: 10,
      smooth: true,
      color: '#0064DC',
      data: [250, 242, 111, 144, 100, 240, 220, 111, 144, 100, 240, 220]
    }]
  };








  var op3 = {
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
        name: '0-3月',
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
        name: '4-6月',
        itemStyle: {
          normal: {
            borderRadius: 10,
            borderColor: '#fff',
            borderWidth: 2,
            color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
              offset: 0,
              color: '#71EEB7'
            }, {
              offset: 1,
              color: '#00BEC5'
            }]),
          }
        }
      }, {
        value: 580,
        name: '7-9月',
        itemStyle: {
          normal: {
            borderRadius: 10,
            borderColor: '#fff',
            borderWidth: 2,
            color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
              offset: 0,
              color: '#73EAFF'
            }, {
              offset: 1,
              color: '#00A4FF'
            }]),
          }
        }
      }, {
        value: 484,
        name: '10月',
        itemStyle: {
          normal: {
            borderRadius: 10,
            borderColor: '#fff',
            borderWidth: 2,
            color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
              offset: 0,
              color: '#B8A5FF'
            }, {
              offset: 1,
              color: '#4C2AFF'
            }]),
          }
        }
      }, {
        value: 484,
        name: '11月',
        itemStyle: {
          normal: {
            borderRadius: 10,
            borderColor: '#fff',
            borderWidth: 2,
            color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
              offset: 0,
              color: '#D259FF'
            }, {
              offset: 1,
              color: '#D259FF'
            }]),
          }
        }
      }, {
        value: 484,
        name: '12月',
        itemStyle: {
          normal: {
            borderRadius: 10,
            borderColor: '#fff',
            borderWidth: 2,
            color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
              offset: 0,
              color: '#FF5998'
            }, {
              offset: 1,
              color: '#FF5998'
            }]),
          }
        }
      }, {
        value: 484,
        name: '1-2年',
        itemStyle: {
          normal: {
            borderRadius: 10,
            borderColor: '#fff',
            borderWidth: 2,
            color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
              offset: 0,
              color: '#FFB459'
            }, {
              offset: 1,
              color: '#FFB459'
            }]),
          }
        }
      }],
      coordinateSystem: 'polar',
    }]
  };


  var op5  = {
      tooltip: {
          trigger: 'axis',
          axisPointer: {            // 坐标轴指示器，坐标轴触发有效
        show:false,
              type: 'line',// 默认为直线，可选为：'line' | 'shadow'
          }
      },
      grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
        top:'10%',
          containLabel: true
      },
      xAxis: [
          {
              type: 'category',
              data: ['11月','12月'],
        
        
              axisTick: {
                  alignWithLabel: true
              },
        "axisLine":{       //y轴
            "show":false
        
        },
          }
      ],
    
      yAxis: [
          {
              type: 'value',
        "axisLine":{       //y轴
          "show":false
        },
        splitLine: {
          lineStyle: {
            type: 'dashed' // y轴分割线类型
          }
        },
        "axisTick":{       //y轴刻度线
          "show":false
        },
          }
      ],
    series: [{
        data: [120, 200],
        type: 'bar',
    label: {
        show: true,
        position: 'top',
        },
         showBackground: false,
        barMaxWidth:'34',
        itemStyle: {
            normal: {
                color: function(params) {
                    //设置默认某一行颜色以及点击之后颜色变化，颜色均为渐变色
                    if (params.name === "11月" ) {
                        return new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                offset: 0,
                                color: "#47E3FF" // 0% 处的颜色
                            },
                            {
                                offset: 1,
                                color: "#1E6EFF" // 100% 处的颜色
                            }
                        ], false)
                    } else {
                        return new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                offset: 0,
                                color: "#71EEB7" // 0% 处的颜色
                            },
                            {
                                offset: 1,
                                color: "#00BEC5" // 100% 处的颜色
                            }
                        ], false)
                    }

                },
            },

        },
    }]
  };




var op6  = {
    tooltip: {
        trigger: 'axis',
        axisPointer: {            // 坐标轴指示器，坐标轴触发有效
      show:false,
            type: 'shadow',// 默认为直线，可选为：'line' | 'shadow'
        }
    },
    grid: {
        left: '1%',
        right: '1%',
        bottom: '0%',
    top:'10%',
        containLabel: true
    },
    xAxis: [
        {
            type: 'category',
            data: ['日用品', '包材类', '其他','其他器具设备','初级农产品','中药饮片','化妆品','保健食品','化学药品','中成药','生物制品','医疗器械','中药材','食品','化学和诊断试剂','（空白）','原辅料类'],
      axisLabel: {
         interval:0,
         rotate:40,
         margin:20,
         
      },
      
            axisTick: {
                alignWithLabel: true
            },
      "axisLine":{       //y轴
          "show":false
      
      },
        }
    ],
  
    yAxis: [
        {
            type: 'value',
      "axisLine":{       //y轴
        "show":false
      },
      splitLine: {
        lineStyle: {
          type: 'dashed' // y轴分割线类型
        }
      },
      "axisTick":{       //y轴刻度线
        "show":false
      },
        }
    ],
  series: [{
    type: 'bar',
    data: [1371, 282,157,112,78,51,41,24,22,21,21,17,13,13,13,12,2],
    label: {
      show: true,
      position: 'top',
    },
    barWidth: 34,
    itemStyle: {
  
      normal: {
       // barBorderRadius:[3, 3, 0, 0],
        color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
          offset: 0,
          color: '#FD5900'
        }, {
          offset: 1,
          color: '#FFDE00'
        }]),
      }
    },
  }, ]
};
  



ch1.setOption(op1);
ch2.setOption(op2);
ch4.setOption(op4);
ch5.setOption(op5);
ch6.setOption(op6);





}