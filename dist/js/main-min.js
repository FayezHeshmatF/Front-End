$(function(){$(".toggle-sidebar").on("click",function(){$(".content-area, .sidebar").toggleClass("no-sidebar")}),$(".toggle-submenu").on("click",function(){$(this).find(".fa-angle-right").toggleClass("down"),$(this).next(".child-links").slideToggle()}),$(".toggle-fullscreen").on("click",function(){$(this).toggleClass("full-screen"),$(this).hasClass("full-screen")?openFullscreen():closeFullscreen()}),$(".toggle-setting").on("click",function(){$(this).find("i").toggleClass("fa-spin"),$(this).parent().toggleClass("hide-settings")});var e=[];$(".colors-options li").on("click",function(){e.push($(this).data("theme"))}),$(".colors-options li").on("click",function(){$(this).addClass("active").siblings().removeClass("active"),$("body").removeClass(e.join(" ")).addClass($(this).data("theme"))});var l=[];$(".font-options select option").each(function(){l.push($(this).val())}),$(".font-options select").on("change",function(){$("body").removeClass(l.join(" ")).addClass($(this).find("option:selected").val())})});var elem=document.documentElement;function openFullscreen(){elem.requestFullscreen?elem.requestFullscreen():elem.mozRequestFullScreen?elem.mozRequestFullScreen():elem.webkitRequestFullscreen?elem.webkitRequestFullscreen():elem.msRequestFullscreen&&elem.msRequestFullscreen()}function closeFullscreen(){document.exitFullscreen?document.exitFullscreen():document.mozCancelFullScreen?document.mozCancelFullScreen():document.webkitExitFullscreen?document.webkitExitFullscreen():document.msExitFullscreen&&document.msExitFullscreen()}