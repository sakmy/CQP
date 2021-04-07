window.onload = function() {
  var ch1 = echarts.init(document.getElementById('ch1'));
  var ch2 = echarts.init(document.getElementById('ch2'));
  var ch3 = echarts.init(document.getElementById('ch3'));
  var ch4 = echarts.init(document.getElementById('ch4'));
  var ch5 = echarts.init(document.getElementById('ch5'));
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
        name: '总部销售市场',
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
        name: '南部销售市场',
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
        name: '北部销售市场',
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
        name: '总部销售市场',
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
        name: '南部销售市场',
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
        name: '北部销售市场',
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
      }],
      coordinateSystem: 'polar',
    }]
  };



var op3 ={
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
      type: 'category',
      data: ['鲁齐鲁制药','诺和诺得','宜昌人福', '德国西门医', '江苏豪森药', '苏阿斯利康', '江苏恒瑞医'],

    },
    yAxis: {
       type: 'value',
      boundaryGap: [0, 0.01],
    },
    series: [{
      name: '2011年',
      type: 'bar',
      data: [0.4, 0.5, 0.6, 0.3, 0.4, 0.1, 0.8],
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





var op4 ={
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
      type: 'category',
      data: ['鲁齐鲁制药','诺和诺得','宜昌人福', '德国西门医', '江苏豪森药', '苏阿斯利康', '江苏恒瑞医'],

    },
    yAxis: {
       type: 'value',
      boundaryGap: [0, 0.01],
    },
    series: [{
      name: '2011年',
      type: 'bar',
      data: [0.4, 0.5, 0.6, 0.3, 0.4, 0.1, 0.8],
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





var op5  = {
      title: {
        show: false,
        text: '折线图堆叠'
      },
      tooltip: {
        trigger: 'axis',
    axisPointer: {            // 坐标轴指示器，坐标轴触发有效
            show:false,
        type: 'shadow',// 默认为直线，可选为：'line' | 'shadow'
    }
      },
      legend: {
        show: false,
        data: ['期末库存品规数', '销售品规数', '动销比']
      },
      grid: {
        left: '1%',
        top: '8%',
        right: '1%',
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
      show:false,
        axisTick: {
          show: false
        },
      },
      series: [{
        name: '含税购进金额',
        type: 'bar',

        barWidth: '30%',
        itemStyle: {
          normal: {
       label: {
         show: true,    //开启显示
         position: 'top',  //在上方显示
         textStyle: {      //数值样式
           color: 'black',
           fontSize: 12
         }
       },
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
        name: '同期含税购进金额',
        type: 'bar',
        barWidth: '30%',
        itemStyle: {
          normal: {
        label: {
                 show: true,    //开启显示
                 position: 'top',  //在上方显示
                 textStyle: {      //数值样式
                   color: 'black',
                   fontSize: 12
                 }
        },
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
      },
    {
        name: '含税购进金额同比增长率',
        type: 'line',
        //symbol: 'circle',
        symbolSize: 10,
        //smooth: true,
        color: '#0064DC',
        data: [50, 42, 11, 44, 100, 240, 220, 111, 144, 100, 240, 220]
      }]
    };







  ch1.setOption(op1);
  ch2.setOption(op2);
  ch3.setOption(op3);
  ch4.setOption(op4);
  ch5.setOption(op5);
  // ch6.setOption(op6);
}