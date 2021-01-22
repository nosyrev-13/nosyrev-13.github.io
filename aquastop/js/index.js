
$(document).ready(function()
{$('#substrate-show-1').addClass('visibility-hidden');$('#Layer9').addClass('visibility-hidden');$('#Layer1').addClass('visibility-hidden');$('#Layer3').addClass('visibility-hidden');$('#Layer6').addClass('visibility-hidden');$('#Layer8').addClass('visibility-hidden');function onScrollhero()
{var $obj=$("#hero");if(!$obj.hasClass("in-viewport")&&$obj.inViewPort(true))
{$obj.addClass("in-viewport");ShowObjectWithEffect('features',1,'slideleft',1500);}}
onScrollhero();$(window).scroll(function(event)
{onScrollhero();});$('#hero').parallax();$("#nav-menu").panel({animate:true,animationDuration:200,animationEasing:'linear',dismissible:true,display:'overlay',position:'left',toggle:true});$('#problems').parallax();function onScrollsubstrate_show_1()
{var $obj=$("#substrate-show-1");if(!$obj.hasClass("in-viewport")&&$obj.inViewPort(false))
{$obj.addClass("in-viewport");AnimateCss('substrate-show-1','slide-right-in',0,1250);}
else
if($obj.hasClass("in-viewport")&&!$obj.inViewPort(true))
{$obj.removeClass("in-viewport");AnimateCss('substrate-show-1','animate-fade-out',0,0);}}
if(!$('#substrate-show-1').inViewPort(true))
{$('#substrate-show-1').addClass("in-viewport");}
onScrollsubstrate_show_1();$(window).scroll(function(event)
{onScrollsubstrate_show_1();});function onScrollLayer9()
{var $obj=$("#Layer9");if(!$obj.hasClass("in-viewport")&&$obj.inViewPort(false))
{$obj.addClass("in-viewport");AnimateCss('Layer9','slide-left-in',0,1250);}
else
if($obj.hasClass("in-viewport")&&!$obj.inViewPort(true))
{$obj.removeClass("in-viewport");AnimateCss('Layer9','animate-fade-out',0,0);}}
if(!$('#Layer9').inViewPort(true))
{$('#Layer9').addClass("in-viewport");}
onScrollLayer9();$(window).scroll(function(event)
{onScrollLayer9();});function onScrollLayer1()
{var $obj=$("#Layer1");if(!$obj.hasClass("in-viewport")&&$obj.inViewPort(false))
{$obj.addClass("in-viewport");AnimateCss('Layer1','slide-right-in',0,1250);}
else
if($obj.hasClass("in-viewport")&&!$obj.inViewPort(true))
{$obj.removeClass("in-viewport");AnimateCss('Layer1','animate-fade-out',0,0);}}
if(!$('#Layer1').inViewPort(true))
{$('#Layer1').addClass("in-viewport");}
onScrollLayer1();$(window).scroll(function(event)
{onScrollLayer1();});function onScrollLayer3()
{var $obj=$("#Layer3");if(!$obj.hasClass("in-viewport")&&$obj.inViewPort(false))
{$obj.addClass("in-viewport");AnimateCss('Layer3','slide-right-in',0,1250);}
else
if($obj.hasClass("in-viewport")&&!$obj.inViewPort(true))
{$obj.removeClass("in-viewport");AnimateCss('Layer3','animate-fade-out',0,0);}}
if(!$('#Layer3').inViewPort(true))
{$('#Layer3').addClass("in-viewport");}
onScrollLayer3();$(window).scroll(function(event)
{onScrollLayer3();});function onScrollLayer6()
{var $obj=$("#Layer6");if(!$obj.hasClass("in-viewport")&&$obj.inViewPort(false))
{$obj.addClass("in-viewport");AnimateCss('Layer6','slide-left-in',0,1250);}
else
if($obj.hasClass("in-viewport")&&!$obj.inViewPort(true))
{$obj.removeClass("in-viewport");AnimateCss('Layer6','animate-fade-out',0,0);}}
if(!$('#Layer6').inViewPort(true))
{$('#Layer6').addClass("in-viewport");}
onScrollLayer6();$(window).scroll(function(event)
{onScrollLayer6();});function onScrollLayer8()
{var $obj=$("#Layer8");if(!$obj.hasClass("in-viewport")&&$obj.inViewPort(false))
{$obj.addClass("in-viewport");AnimateCss('Layer8','slide-left-in',0,1250);}
else
if($obj.hasClass("in-viewport")&&!$obj.inViewPort(true))
{$obj.removeClass("in-viewport");AnimateCss('Layer8','animate-fade-out',0,0);}}
if(!$('#Layer8').inViewPort(true))
{$('#Layer8').addClass("in-viewport");}
onScrollLayer8();$(window).scroll(function(event)
{onScrollLayer8();});$("a[href*='#go-features']").click(function(event)
{event.preventDefault();$('html, body').stop().animate({scrollTop:$('#wb_go-features').offset().top},600,'linear');});$("a[href*='#go-main']").click(function(event)
{event.preventDefault();$('html, body').stop().animate({scrollTop:$('#wb_go-main').offset().top},600,'linear');});$("a[href*='#go-advice']").click(function(event)
{event.preventDefault();$('html, body').stop().animate({scrollTop:$('#wb_go-advice').offset().top},600,'linear');});$("a[href*='#go-share']").click(function(event)
{event.preventDefault();$('html, body').stop().animate({scrollTop:$('#wb_go-share').offset().top},600,'linear');});$("a[href*='#go-contact']").click(function(event)
{event.preventDefault();$('html, body').stop().animate({scrollTop:$('#wb_go-contact').offset().top},600,'linear');});var iOS=!!navigator.platform&&/iPad|iPhone|iPod/.test(navigator.platform);if(iOS)
{$('#hero,#services,#problems,#Layer12,#Layer19').css('background-attachment','scroll');}});