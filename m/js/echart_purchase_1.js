window.onload = function() {
  var ch1 = echarts.init(document.getElementById('ch1'));
  var ch2 = echarts.init(document.getElementById('ch2'));
  var ch4 = echarts.init(document.getElementById('ch4'));
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
      data: ['鲁齐鲁制药','诺和诺得','宜昌人福', '德国西门医', '江苏豪森药', '苏阿斯利康', '江苏恒瑞医'],
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
      data: ['许昌先周司','拜耳医保','诺和诺得', '宜昌人福', '江苏豪森药', '锡阿斯贸易', '江苏恒瑞医'],
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
  			barWidth:45,
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
      data: ['鲁齐鲁制药','诺和诺得','宜昌人福', '德国西门医', '江苏豪森药', '苏阿斯利康', '江苏恒瑞医'],
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
				 show: true,		//开启显示
				 position: 'top',	//在上方显示
				 textStyle: {	    //数值样式
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
			  				 show: true,		//开启显示
			  				 position: 'top',	//在上方显示
			  				 textStyle: {	    //数值样式
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
        smooth: true,
        color: '#0064DC',
        data: [50, 42, 11, 44, 100, 240, 220, 111, 144, 100, 240, 220]
      }]
    };
	
	
	

  ch1.setOption(op1);
  ch2.setOption(op2);
  ch4.setOption(op4);
  ch5.setOption(op5);
  ch6.setOption(op6);
}