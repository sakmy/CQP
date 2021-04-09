window.onload = function() {
  var ch1 = echarts.init(document.getElementById('ch1'));
  var ch2 = echarts.init(document.getElementById('ch2'));
  var ch4 = echarts.init(document.getElementById('ch4'));
  var ch5 = echarts.init(document.getElementById('ch5'));
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
          name: '纯购',
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
          name: '商购',
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
          name: '空白',
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
          name: '其他',
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
          name: '自然人（仅指…）',
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
        }],
        coordinateSystem: 'polar',
      }]
    };
	
	
	
var op4 ={
	color: ['#47E3FF', '#71EEB7'],
    title: {
        text: '堆叠区域图',
		show:false
    },
    tooltip: {
        trigger: 'axis',
		
        axisPointer: {
            type: 'cross',
            label: {
                backgroundColor: '#6a7985'
            }
        }
    },
    legend: {
        
		show:false
    },
    toolbox: {
		show:false,
        feature: {
            saveAsImage: {}
        }
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '0%',
		top:'12%',
        containLabel: true
    },
    xAxis: [
        {
            type: 'category',
            boundaryGap: false,
            data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月'	,'8月','9月','10月','11月','12月']
        }
    ],
    yAxis: [
        {
          type: 'value',
          "axisLine":{       //y轴
            
          },
          splitLine: {
          	lineStyle: {
          		type: 'dashed' // y轴分割线类型
          	}
          },
          "axisTick":{       //y轴刻度线
            
          },
			
        }
    ],
    series: [
        {
            name: '含税购进金额',
            type: 'line',
			symbol: "none", 
			smooth: true,
            stack: '总量',
            areaStyle: {},
            emphasis: {
                focus: 'series'
            },
			lineStyle: {color: '#1E6EFF'}, 
            data: [120, 132, 101, 134, 90, 230, 210,123,66,34,56,120],
			areaStyle: {
				opacity: 0.4,
				color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
					offset: 0,
					color: '#1E6EFF'
				}, {
					offset: 1,
					color: '#47E3FF'
				}])
			},
        },
        {
            name: '含税销售额',
			symbol: "none", 
            type: 'line',
			smooth: true,
            stack: '总量',
            areaStyle: {},
            emphasis: {
                focus: 'series'
            },
			lineStyle: {color: '#07C1C3'}, 
            data: [220, 182, 191, 234, 290, 330, 310,123,66,34,56,120],
			areaStyle: {
				opacity: 0.4,
				color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
					offset: 0,
					color: '#00BEC5'
				}, {
					offset: 1,
					color: '#71EEB7'
				}])
			},
        }
    ]
};
  

  
  var op5  = {
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
		top:"5%",
        containLabel: true
    },
    xAxis: [
        {
            type: 'category',
            data: ['化学药品', '中成药', '生物制品','医疗器械','中药饮片','保健食品','化妆品','食品','中药材'],
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
	  data: [23, 21,21,32,34,34,45,67,34],
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
}