window.onload = function() {
  var ch1 = echarts.init(document.getElementById('ch1'));
  var ch2 = echarts.init(document.getElementById('ch2'));
  var ch3 = echarts.init(document.getElementById('ch3'));
  var ch4 = echarts.init(document.getElementById('ch4'));
  // var ch5 = echarts.init(document.getElementById('ch5'));
  // var ch6 = echarts.init(document.getElementById('ch6'));
  var op1 = {
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



  var op3 = {
    tooltip: {
        trigger: 'axis',
        axisPointer: {            // 坐标轴指示器，坐标轴触发有效
      show:false,
            type: 'shadow',// 默认为直线，可选为：'line' | 'shadow'
        }
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '0%',
    top:'10%',
        containLabel: true
    },
    xAxis: [
        {
            type: 'category',
           data: ['多潘立酮…', '注射用头…', '阿莫西林…','门冬胰岛…','布洛芬缓…','阿托伐他…'],
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
    data: [1371, 282,157,112,78,51],
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
          color: '#1E6EFF'
        }, {
          offset: 1,
          color: '#47E3FF'
        }]),
      }
    },
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