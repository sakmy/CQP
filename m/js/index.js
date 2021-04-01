$(function() {
  function biliFn() {
    var oWidth = document.documentElement.clientWidth || document.body.clientWidth;
    var oHeight = document.documentElement.clientHeight || document.body.clientHeight;
    var bili = oWidth / 1920;
    var gaodu = 1080 * bili;
    var minH = oHeight / bili;
    minH = minH > oHeight ? minH : oHeight;
    $('.index').css({
      "transform": "scale(" + bili + ")",
      "min-height": minH,
      "height": 1080,
      "width": 1920,
    })
    $(".indexwa").height(gaodu);
  }
  biliFn();
  window.onresize = function() {
    biliFn();
  }
  $(".tabtitle span,.smtab em").click(function() {
    var x = $(this).index();
    $(this).addClass("cur").siblings().removeClass("cur");
    $(this).parents('.cont').find('.tabDiv').eq(x).show().siblings('.tabDiv').hide();
    $(this).parents('.cont').find('.ynshtab').eq(x).show().siblings('.ynshtab').hide();
  })
  $(".loading").fadeOut(200)

  $('body').on("click",".dituicon .icondian",function(){
     $(".dituk").removeClass("cur")
     $(this).parents(".dituk").addClass("cur")
  })

  $(".tabsandv").click(function(){
    $(this).find(".tabsp").toggleClass("cur");
    $(this).find(".tabla").toggle();
    $(this).siblings().find(".tabsp").removeClass("cur");
    $(this).siblings().find(".tabla").hide();

  })

  $(".tablaqie>ul>li").click(function(){
     $(this).addClass("cur").siblings().removeClass("cur");
     var obj = $(this).parents('.tablaqie').find('li.cur');
     var str = '';
     var x = $(this).parents(".tabla").attr('qiedata');
     obj.each(function(index){
       var val = $(this).text();
       if(index != obj.length-1){
         str = str+val+'-';
       }else{
         str = str+val
       }
       $(this).parents(".tabbox").find('[qie="'+x+'"]>span').html(str)
     })


   })
  // $('[qie]').click(function(){
  //   var x = $(this).attr('qie')
  //   $(this).parents(".tabbox").attr('qie',x);

  //   $(this).parents(".tabbox").find('.tabla').eq(x).toggle().siblings(".tabla").hide();
  // })

  $(".fuji").click(function(){
    $(this).parent().toggleClass("cur")
  })
})


