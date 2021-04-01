window.onload = function() {
  var ch1 = echarts.init(document.getElementById('ch1'));
  var ch2 = echarts.init(document.getElementById('ch2'));
  var ch4 = echarts.init(document.getElementById('ch4'));
  var ch4_1 = echarts.init(document.getElementById('ch4_1'));
  var ch5 = echarts.init(document.getElementById('ch5'));
  var ch5_1 = echarts.init(document.getElementById('ch5_1'));
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
      data: [  '重庆器械' ,'重庆医贸' ,'重药药分','重药新特药…','重药和平批…','重庆药品销…']
    },
    series: [{
      name: '2011年',
      type: 'bar',
      data: [18203, 23489, 29034, 104970, 24970, 24970],
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
      data: [  '重庆器械' ,'重庆医贸' ,'重药药分','重药新特药…','重药和平批…','重庆药品销…']
    },
    series: [{
      name: '2011年',
      type: 'bar',
      data: [18203, 23489, 29034, 104970, 24970, 24970],
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
  var op4_1 = {
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
      data: [  '重庆器械' ,'重庆医贸' ,'重药药分','重药新特药…','重药和平批…','重庆药品销…']
    },
    series: [{
      name: '2011年',
      type: 'bar',
      data: [18203, 23489, 29034, 104970, 24970, 24970],
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
  
  var op5_1 = {
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
      data: [  '重庆器械' ,'重庆医贸' ,'重药药分','重药新特药…','重药和平批…','重庆药品销…']
    },
    series: [{
      name: '2011年',
      type: 'bar',
      data: [18203, 23489, 29034, 104970, 24970, 24970],
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
  
  ch1.setOption(op1);
  ch2.setOption(op2);
  ch4.setOption(op4);
  ch4_1.setOption(op4_1);
  ch5.setOption(op5);
  ch5_1.setOption(op5_1);
  // ch6.setOption(op6);
}