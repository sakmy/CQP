window.onload = function() {
  var ch1 = echarts.init(document.getElementById('ch1'));
  var ch2 = echarts.init(document.getElementById('ch2'));
  var ch4 = echarts.init(document.getElementById('ch4'));

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
        name: '总部销…',
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
        name: '南部销…',
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
        name: '北部销…',
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
  
  var op2  = {
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
        containLabel: true
    },
    xAxis: [
        {
            type: 'category',
            data: ['总部销市场', '北部销售市场', '南部销售市场'],
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
	  data: [23, 21,21],
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
        show:false,
        data: ['促销','近效','失效','正常']
    },
    grid: {
		top:'10%',
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: {
        type: 'category',
        data: ['化学药品','中成药','医疗器械','生物制品','其他','中药饮片','其他器具设备','日用品'],
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
            name: '促销',
            type: 'bar',
            stack: 'total',
			barWidth:86,
            label: {
                show: false
            },
            emphasis: {
                focus: 'series'
            },
            data: [320, 302, 301, 334, 390, 330, 320,200],
			itemStyle:{
				normal:{color:'#2073FF'}
			}
        },
        {
            name: '近效',
            type: 'bar',
            stack: 'total',
            label: {
                show: false
            },
            emphasis: {
                focus: 'series'
            },
            data: [120, 132, 101, 134, 90, 230, 210,200],
			itemStyle:{
				normal:{color:'#FFC600'}
			}
        },
        {
            name: '失效',
            type: 'bar',
            stack: 'total',
            label: {
                show: false
            },
            emphasis: {
                focus: 'series'
            },
            data: [220, 182, 191, 234, 290, 330, 310,200],
			itemStyle:{
				normal:{color:'#FE6200'}
			}
        },
        {
            name: '正常',
            type: 'bar',
            stack: 'total',
            label: {
                show: false
            },
            emphasis: {
                focus: 'series'
            },
            data: [150, 212, 201, 154, 190, 330, 410,200],
			itemStyle:{
				normal:{color:'#71EEB7'}
			}
        },
        
    ]
};
  
  
  
  ch1.setOption(op1);
  ch2.setOption(op2);
  ch4.setOption(op4);
}