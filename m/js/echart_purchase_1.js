window.onload = function() {
  var ch1 = echarts.init(document.getElementById('ch1'));
  var ch2 = echarts.init(document.getElementById('ch2'));
  var ch4 = echarts.init(document.getElementById('ch4'));
  var ch5 = echarts.init(document.getElementById('ch5'));
  var ch6 = echarts.init(document.getElementById('ch6'));







 var op1  = {
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
          bottom: '3%',
      top:'7%',
          containLabel: true
      },
      xAxis: [
          {
              type: 'category',
              data: ['江苏恒瑞医', '苏阿斯利康', '江苏豪森药','德国西门医','宜昌人福'],
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
      data: [23, 21,21,20,20],
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
          left: '3%',
          right: '4%',
          bottom: '3%',
      top:'7%',
          containLabel: true
      },
      xAxis: [
          {
              type: 'category',
              data: ['江苏恒瑞医', '苏阿斯利康', '江苏豪森药','德国西门医','宜昌人福'],
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
      data: [23, 21,21,20,20],
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
          left: '1%',
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
        barWidth:35,
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
          left: '1%',
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
        barWidth:35,
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



 var op6 = {
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








ch1.setOption(op1);
ch2.setOption(op2);
ch4.setOption(op4);
ch5.setOption(op5);
ch6.setOption(op6);





}