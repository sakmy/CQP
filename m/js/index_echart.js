
window.onload = function() {


  var ch1 = echarts.init(document.getElementById('ch1'));
  var ch2 = echarts.init(document.getElementById('ch2'));
  var ch3 = echarts.init(document.getElementById('ch3'));
  var ch4 = echarts.init(document.getElementById('ch4'));
  var ch5 = echarts.init(document.getElementById('ch5'));
  var ch6 = echarts.init(document.getElementById('ch6'));
  //var ch7 = echarts.init(document.getElementById('ch7'));
  var ch8 = echarts.init(document.getElementById('ch8'));
  //var ch9 = echarts.init(document.getElementById('ch9'));
  var ch10 = echarts.init(document.getElementById('ch10'));
  var ch11 = echarts.init(document.getElementById('ch11'));


  var chx1 = echarts.init(document.getElementById('chx1'));
  var chx2 = echarts.init(document.getElementById('chx2'));


  var chx3 = echarts.init(document.getElementById('chx3'));
  var chx4 = echarts.init(document.getElementById('chx4'));



  var chv1 = echarts.init(document.getElementById('chv1'));
  var chv2 = echarts.init(document.getElementById('chv2'));


  var chv3 = echarts.init(document.getElementById('chv3'));
  var chv4 = echarts.init(document.getElementById('chv4'));

  var op1 = {
    title: {
      show: false
    },
    polar: {
      radius: ['85%', '72%'],
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
      type: 'bar',
      roundCap: true,
      barWidth: 60,
      showBackground: false,
      backgroundStyle: {
        color: 'rgba(0, 100, 220, 0.3)',
      },
      data: [20],
      coordinateSystem: 'polar',
      itemStyle: {
        normal: {
          color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
            offset: 0,
            color: 'rgba(73, 137, 243, 1)'
          }, {
            offset: 1,
            color: 'rgba(62, 195, 251, 1)'
          }]),
        }
      }
    }, ]
  };
  var op2 = {
    title: {
      show: false
    },
    polar: {
      radius: ['85%', '72%'],
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
      type: 'bar',
      roundCap: true,
      barWidth: 60,
      showBackground: false,
      backgroundStyle: {
        color: 'rgba(0, 100, 220, 0.3)',
      },
      data: [20],
      coordinateSystem: 'polar',
      itemStyle: {
        normal: {
          color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
            offset: 0,
            color: 'rgba(243, 92, 73, 1)'
          }, {
            offset: 1,
            color: 'rgba(251, 212, 62, 1)'
          }]),
        }
      }
    }, ]
  };
  var op3 = {
    title: {
      show: false,
      text: '折线图堆叠'
    },
    tooltip: {
      trigger: 'axis'
    },
    legend: {
      show: false,
      data: ['邮件营销', '联盟广告', '视频广告', '直接访问']
    },
    grid: {
      left: '3%',
      top: '5%',
      right: '4%',
      bottom: '15%',
      containLabel: true
    },
    toolbox: {
      show: false,
      feature: {
        saveAsImage: {}
      }
    },
    color: ['#4D8EDE', '#FFB066', '#00C7C3', '#9F00CA'],
    xAxis: {
      type: 'category',
      boundaryGap: false,
      axisLabel: {
        show: false
      },
      data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
    },
    yAxis: {
      type: 'value',
      axisTick: {
        show: false
      },
    },
    series: [{
      name: '邮件营销',
      type: 'line',
      symbol: 'circle',
      symbolSize: 8,
      smooth: true,
      data: [240, 232, 101, 134, 90, 230, 210]
    }, {
      name: '联盟广告',
      type: 'line',
      symbol: 'circle',
      symbolSize: 8,
      smooth: true,
      data: [220, 182, 191, 234, 290, 330, 310]
    }, {
      name: '视频广告',
      type: 'line',
      symbol: 'circle',
      symbolSize: 8,
      smooth: true,
      data: [250, 232, 201, 154, 190, 330, 410]
    }, ]
  };
  var op4 = {
    title: {
      show: false,
      text: '折线图堆叠'
    },
    tooltip: {
        trigger: "axis",
        confine: true,

        position: function(point, params, dom, rect, size) {
          dom.style.transform = "translateZ(0)";
        }
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
  var op5 = {
    title: {
      show: false,
      text: '折线图堆叠'
    },
    tooltip: {
      trigger: 'axis'
    },
    legend: {
      show: false,
      data: ['应收净额', '应收周转率', '周转天数']
    },
    grid: {
      left: '5%',
      top: '5%',
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
      data: ['应收净额', '应收周转率', '周转天数']
    },
    yAxis: {
      axisLabel: {
        show: false
      },
      show: false,
      axisTick: {
        show: false
      },
    },
    series: [{
      name: '本期完成',
      type: 'bar',
      barWidth: '10%',
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
      data: [240, 232, 101]
    }, {
      name: '上年同期',
      type: 'bar',
      barWidth: '10%',
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
      data: [240, 232, 101]
    }, {
      name: '上年同期',
      type: 'bar',
      barWidth: '10%',
      itemStyle: {
        normal: {
          barBorderRadius:[3, 3, 0, 0],
          color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
            offset: 0,
            color: '#73EAFF'
          }, {
            offset: 1,
            color: '#00A4FF'
          }]),
        }
      },
      data: [240, 232, 101]
    }, {
      name: '上年同期',
      type: 'bar',
      barWidth: '10%',
      itemStyle: {
        normal: {
          barBorderRadius:[3, 3, 0, 0],
          color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
            offset: 0,
            color: '#B8A5FF'
          }, {
            offset: 1,
            color: '#4C2AFF'
          }]),
        }
      },
      data: [240, 232, 101]
    }]
  };
  var op6 = {
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
  ch1.setOption(op1);
  ch2.setOption(op2);
  ch3.setOption(op1);
  ch4.setOption(op2);
  ch5.setOption(op1);
  ch6.setOption(op2);
  // //ch7.setOption(op3);
  ch8.setOption(op4);
  // //ch9.setOption(op5);
  ch10.setOption(op6);
  ch11.setOption(op6);


  chx1.setOption(op1);
  chx2.setOption(op2);


  chx3.setOption(op1);
  chx4.setOption(op2);


  chv1.setOption(op1);
  chv2.setOption(op2);


  chv3.setOption(op1);
  chv4.setOption(op2);




}