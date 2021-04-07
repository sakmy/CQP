window.onload = function() {
  var ch1 = echarts.init(document.getElementById('ch1'));
  var ch2 = echarts.init(document.getElementById('ch2'));
   //var ch4 = echarts.init(document.getElementById('ch4'));
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
      top: '4%',
      bottom: '0%',
      containLabel: true
    },
    xAxis: {
      type: 'value',
      boundaryGap: [0, 0.01],
	  show:false
    },
    yAxis: {
      type: 'category',
      data: ['总部销售市场','南部销售市场','北部销售市场'],
    },
    series: [{
      name: '2011年',
      type: 'bar',
      data: [0.4, 0.5, 0.6],
      label: {
        show: true,
        position: 'right',
      },
      barWidth: 20,
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
      left: '3%',
      right: '4%',
      top: '4%',
      bottom: '0%',
      containLabel: true
    },
    xAxis: {
      type: 'value',
      boundaryGap: [0, 0.01],
	  show:false
    },
    yAxis: {
      type: 'category',
      data: ['化学药品','医疗器械','中成药', '其他', '中药饮片', '其他器具设…', '江苏恒瑞医'],
    },
    series: [{
      name: '2011年',
      type: 'bar',
      data: [0.4, 0.5, 0.6, 0.3, 0.4, 0.1, 0.8],
      label: {
        show: true,
        position: 'right',
      },
      barWidth: 20,
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
  var op4 = {
      tooltip: {
          trigger: 'axis',
          axisPointer: {
              type: 'shadow'
          }
      },
      legend: {
          show:false
      },
      grid: {
  		top:'10%',
          left: '3%',
          right: '4%',
          bottom: '0%',
          containLabel: true
      },
      xAxis: {
          type: 'category',
          data: ['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月'],
  		"axisLine":{       //y轴
  		    "show":false

  		},
      },
      yAxis: {

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
      },
      series: [
          {
              name: '赊帐金额',
              type: 'bar',
              stack: 'total',
  			barWidth:20,
              label: {
                  show:true
              },
              emphasis: {
                  focus: 'series'
              },
              data: [320, 302, 301, 334, 390, 330, 320,200,200,200,200,200],
  			itemStyle:{
  				normal:{color:'#FFC600'}
  			}
          },
          {
              name: '预付款金额',
              type: 'bar',
              stack: 'total',
              label: {
                  show:true
              },
              emphasis: {
                  focus: 'series'
              },
              data: [120, 132, 101, 134, 90, 230, 210,200,200,200,200,200],
  			itemStyle:{
  				normal:{color:'#FE6200'}
  			}
          }

      ]
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
      boundaryGap: [0, 0.01],

    },
    yAxis: {
      type: 'category',
      data: ['拜耳医药保…','诺和诺德（中…','宜昌人福药…', '江苏豪森药…', '阿斯利康（无…', '江苏恒瑞医药…', '江苏恒瑞医'],
    },
    series: [{
      name: '2011年',
      type: 'bar',
      data: [0.4, 0.5, 0.6, 0.3, 0.4, 0.1, 0.8],
      label: {
        show: true,
        position: 'right',
      },
      barWidth: 20,
      itemStyle: {

        normal: {
         // barBorderRadius:[3, 3, 0, 0],
          color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
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
      boundaryGap: [0, 0.01],

    },
    yAxis: {
      type: 'category',
      data: ['拜耳医药保…','诺和诺德（中…','宜昌人福药…', '江苏豪森药…', '阿斯利康（无…', '江苏恒瑞医药…', '江苏恒瑞医'],
    },
    series: [{
      name: '2011年',
      type: 'bar',
      data: [0.4, 0.5, 0.6, 0.3, 0.4, 0.1, 0.8],
      label: {
        show: true,
        position: 'right',
      },
      barWidth: 20,
      itemStyle: {

        normal: {
         // barBorderRadius:[3, 3, 0, 0],
          color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
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
  // //ch4.setOption(op4);
  ch5.setOption(op5);
  ch6.setOption(op6);
}