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
      type: 'value',
      boundaryGap: [0, 0.01]
    },
    yAxis: {
      axisLabel:{

      },
      type: 'category',
      data: [  '自然人 ' ,'纯购','商购','其他']
    },
    series: [{
      name: '2011年',
      type: 'bar',
      data: [18203, 23489, 29034, 104970],
      label: {
        show: true,
        position: 'right',
      },
      barWidth: 24,
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
      trigger: 'axis',
      axisPointer: {
        type: 'shadow'
      }
    },
    legend: {
      show: false
    },
    grid: {
      left: '6%',
      right: '6%',
      top: '4%',
      bottom: '0%',
      containLabel: true
    },
    xAxis: {
      type: 'value',
      boundaryGap: [0, 0.01]
    },
    yAxis: {
      type: 'category',
      data: [  '药特分公司' ,'药特分公司' ,'新特药品','渝医贸药品','药品料']
    },
    series: [{
      name: '2011年',
      type: 'bar',
      data: [18203, 23489, 29034, 104970, 24970],
      label: {
        show: true,
        position: 'right',
      },
      barWidth: 24,
      itemStyle: {

        normal: {
         // barBorderRadius:[3, 3, 0, 0],
          color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
            offset: 0,
            color: '#FFC600'
          }, {
            offset: 1,
            color: '#FFC600'
          }]),
        }
      },
    }, ]
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
      data: ['同期期末应付账款', '期末应付账款', '期末应付账款同比增长率']
    },
    grid: {
      left: '5%',
      top: '8%',
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
      name: '同期期末应付账款',
      type: 'bar',
      barWidth: '30%',
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
      data: [140, 132, 101, 134, 90, 230, 210, 101, 134, 90, 230, 210]
    }, {
      name: '期末应付账款',
      type: 'bar',
      barWidth: '30%',
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
      data: [240, 232, 101, 134, 90, 230, 210, 101, 134, 90, 230, 210]
    }, {
      name: '期末应付账款同比增长率',
      type: 'line',
      //symbol: 'circle',
      symbolSize: 10,
      smooth: true,
      color: '#0064DC',
      data: [50, 42, 11, 44, 100, 240, 220, 111, 144, 100, 240, 220]
    }]
  };
  var op5 = {
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
      top: '4%',
      bottom: '0%',
      containLabel: true
    },
    xAxis: {
      type: 'value',
      boundaryGap: [0, 0.01]
    },
    yAxis: {
      type: 'category',
      data: ['重庆医药集团药特…', '重庆医药集团药特…', '重庆医药集团医贸…', '重庆医药新特药品…', '重庆医药（集团）…']
    },
    series: [{
      name: '2011年',
      type: 'bar',
      data: [18203, 23489, 29034, 104970, 131744],
      label: {
        show: true,
        position: 'right',
      },
      barWidth: 24,
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
  var op6 = {
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
      top: '4%',
      bottom: '0%',
      containLabel: true
    },
    xAxis: {
      type: 'value',
      boundaryGap: [0, 0.01]
    },
    yAxis: {
      type: 'category',
      data: ['化学药品', '空白', '中成药', '医疗器械', '生物制品']
    },
    series: [{
      name: '2011年',
      type: 'bar',
      data: [18203, 23489, 29034, 104970, 131744],
      label: {
        show: true,
        position: 'right',
      },
      barWidth: 24,
      itemStyle: {

        normal: {
         // barBorderRadius:[3, 3, 0, 0],
          color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
            offset: 0,
            color: '#FFDE00'
          }, {
            offset: 1,
            color: '#FD5900'
          }]),
        }
      },
    }, ]
  };
  ch1.setOption(op1);
  ch2.setOption(op2);
  ch3.setOption(op3);
  ch4.setOption(op4);
  // ch5.setOption(op5);
  // ch6.setOption(op6);
}