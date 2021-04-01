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
      data: ['鹭燕医药','柳药股份','嘉事堂', '英特集团', '瑞康医药', '南京医药', '国药股份', '中国医药', '重药控股', '国药一致', '九州通', '国药控股'],
    },
    series: [{
      name: '2011年',
      type: 'bar',
      data: [
        1,2,3,4,5,6,7,8,{
          value: 9,
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

        },10,11,12
      ],
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
      data: ['鹭燕医药','柳药股份','嘉事堂', '英特集团', '瑞康医药', '南京医药', '国药股份', '中国医药', '重药控股', '国药一致', '九州通', '国药控股'],
    },
    series: [{
      name: '2011年',
      type: 'bar',
      data: [
        1,2,3,4,5,6,7,8,{
          value: 9,
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

        },10,11,12
      ],
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
  var op3 = {
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
      data: ['鹭燕医药','柳药股份','嘉事堂', '英特集团', '瑞康医药', '南京医药', '国药股份', '中国医药', '重药控股', '国药一致', '九州通', '国药控股'],
    },
    series: [{
      name: '2011年',
      type: 'bar',
      data: [
        1,2,3,4,5,6,7,8,{
          value: 9,
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

        },10,11,12
      ],
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

  var op4 = {
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
      data: ['鹭燕医药','柳药股份','嘉事堂', '英特集团', '瑞康医药', '南京医药', '国药股份', '中国医药', '重药控股', '国药一致', '九州通', '国药控股'],
    },
    series: [{
      name: '2011年',
      type: 'bar',
      data: [
        1,2,3,4,5,6,7,8,{
          value: 9,
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

        },10,11,12
      ],
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
    show:false
    },
    yAxis: {
      type: 'category',
      data: ['鹭燕医药','柳药股份','嘉事堂', '英特集团', '瑞康医药', '南京医药', '国药股份', '中国医药', '重药控股', '国药一致', '九州通', '国药控股'],
    },
    series: [{
      name: '2011年',
      type: 'bar',
      data: [
        1,2,3,4,5,6,7,8,{
          value: 9,
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

        },10,11,12
      ],
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
  ch3.setOption(op3);
   ch4.setOption(op4);
   ch5.setOption(op5);
  // ch6.setOption(op6);
}