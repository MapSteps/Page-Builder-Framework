"use strict";var WPBFSite=function(n){var e,a=!(!window.wp||!wp.customize),s={desktop:1024,tablet:768,mobile:480},t="desktop",i=n(".wpbf-navigation").data("sub-menu-animation-duration");function o(){var e=n(window).width(),a="";t=e>s.desktop?(a="wpbf-is-desktop","desktop"):e>s.tablet?(a="wpbf-is-tablet","tablet"):(a="wpbf-is-mobile","mobile"),document.body.classList.remove("wpbf-is-desktop"),document.body.classList.remove("wpbf-is-tablet"),document.body.classList.remove("wpbf-is-mobile"),document.body.classList.add(a)}function u(e){var a="wpbf-"+e+"-breakpoint-[\\w-]*\\b",t=n("body").attr("class").match(a);null!=t&&(s[e]=t.toString().match(/\d+/),s[e]=Array.isArray(s[e])?s[e][0]:s[e])}function r(){n(".wpbf-menu-item-search").hasClass("active")&&(n(".wpbf-menu-search").stop().animate({opacity:"0",width:"0px"},250,function(){n(this).css({display:"none"})}),setTimeout(function(){n(".wpbf-menu-item-search").removeClass("active").attr("aria-expanded","false")},400))}u("desktop"),u("tablet"),u("mobile"),o(),c(),a&&wp.customize.bind("preview-ready",function(){wp.customize.selectiveRefresh.bind("partial-content-rendered",function(e){i=n(".wpbf-navigation").data("sub-menu-animation-duration"),c()})}),window.addEventListener("resize",function(e){o()}),n(".scrolltop").length&&(e=n(".scrolltop").attr("data-scrolltop-value"),n(window).scroll(function(){n(this).scrollTop()>e?n(".scrolltop").fadeIn():n(".scrolltop").fadeOut()}),n(document).on("click",".scrolltop",function(){n("body").attr("tabindex","-1").focus(),n(this).blur(),n("body, html").animate({scrollTop:0},500)})),n(document).on("click",".wpbf-menu-item-search",function(e){e.stopPropagation(),n(".wpbf-navigation .wpbf-menu > li").slice(-3).addClass("calculate-width");var a=0;n(".calculate-width").each(function(){a+=n(this).outerWidth()}),a<200&&(a=250),this.classList.contains("active")||(n(this).addClass("active").attr("aria-expanded","true"),n(".wpbf-menu-search",this).stop().css({display:"block"}).animate({width:a,opacity:"1"},200),n("input[type=search]",this).val("").focus())}),window.addEventListener("click",function(e){r()}),document.addEventListener("keyup",function(e){"Escape"===e.key||"Esc"===e.key?r():"Tab"===e.key&&(e.target.classList.contains("wpbff-search")||r())}),n(".wpcf7-form-control-wrap").on("mouseenter",function(){n(".wpcf7-not-valid-tip",this).fadeOut()});var m=n(".wpbf-page").css("margin-top");function c(){var e;document.querySelector(".wpbf-menu-centered")&&(e=n(".wpbf-navigation .wpbf-menu-centered .wpbf-menu > li > a").length/2,e=(e=Math.floor(e))-1,n(".wpbf-menu-centered .logo-container").insertAfter(".wpbf-navigation .wpbf-menu-centered .wpbf-menu >li:eq("+e+")").css({display:"block"}))}return n(window).on("resize",function(){n(".wpbf-page").width()>=n(window).width()?n(".wpbf-page").css({"margin-top":"0","margin-bottom":"0"}):n(".wpbf-page").css({"margin-top":m,"margin-bottom":m})}),n(document).on("mouseenter",".wpbf-sub-menu > .menu-item-has-children:not(.wpbf-mega-menu) .menu-item-has-children",function(){n(".sub-menu",this).first().stop().css({display:"block"}).animate({opacity:"1"},i)}).on("mouseleave",".wpbf-sub-menu > .menu-item-has-children:not(.wpbf-mega-menu) .menu-item-has-children",function(){n(".sub-menu",this).first().stop().animate({opacity:"0"},i,function(){n(this).css({display:"none"})})}),n(document).on("mouseenter",".wpbf-sub-menu-animation-fade > .menu-item-has-children",function(){n(".sub-menu",this).first().stop().fadeIn(i)}).on("mouseleave",".wpbf-sub-menu-animation-fade > .menu-item-has-children",function(){n(".sub-menu",this).first().stop().fadeOut(i)}),n(".menu-item-has-children").each(function(){n(this).attr("aria-haspopup","true")}),n("body").mousedown(function(){n(this).addClass("using-mouse"),n(".menu-item-has-children").removeClass("wpbf-sub-menu-focus")}),n("body").keydown(function(){n(this).removeClass("using-mouse")}),n(document).on("mouseenter",".wpbf-sub-menu > .menu-item-has-children:not(.wpbf-sub-menu-focus)",function(){document.body.classList.add("using-mouse"),n(".menu-item-has-children").removeClass("wpbf-sub-menu-focus"),n(this).find("> a").focus()}).on("mouseleave",".wpbf-sub-menu > .menu-item-has-children.wpbf-sub-menu-focus",function(){n(this).removeClass("wpbf-sub-menu-focus")}),n(document).on("focus","#navigation a",function(){n("body").hasClass("using-mouse")||n("#navigation > ul").hasClass("wpbf-sub-menu")&&(n(".menu-item-has-children").removeClass("wpbf-sub-menu-focus"),n("#navigation > ul > .menu-item-has-children > .sub-menu").stop().hide(),n(this).parents(".menu-item-has-children").addClass("wpbf-sub-menu-focus"))}),n(window).on("load",function(){n(".opacity").delay(200).animate({opacity:"1"},200),n(".display-none").show(),n(window).trigger("resize"),n(window).trigger("scroll")}),{breakpoints:s,activeBreakpoint:t}}(jQuery),WPBFMobile=function(i){var o,u=WPBFSite.breakpoints;function e(){var e=document.querySelector(".wpbf-mobile-menu-hamburger");o=e?"hamburger":(e=document.querySelector(".wpbf-mobile-menu-default"),e?"default":"premium")}function t(e){var a;"premium"!==e&&((a=i(".wpbf-mobile-menu-toggle")).hasClass("active")?(i(".wpbf-mobile-menu-container").removeClass("active").slideUp(),a.removeClass("active"),"hamburger"===e?a.removeClass("wpbff-times").addClass("wpbff-hamburger").attr("aria-expanded","false"):a.attr("aria-expanded","false")):(i(".wpbf-mobile-menu-container").addClass("active").slideDown(),a.addClass("active"),"hamburger"===e?a.removeClass("wpbff-hamburger").addClass("wpbff-times").attr("aria-expanded","true"):a.attr("aria-expanded","true")))}function a(e){var a="hamburger"===e?".wpbf-mobile-menu-hamburger .wpbf-submenu-toggle":".wpbf-mobile-menu-default .wpbf-submenu-toggle";i(document).on("click",a,function(e){var a;e.preventDefault(),i(a=this).hasClass("active")?(i("i",a).removeClass("wpbff-arrow-up").addClass("wpbff-arrow-down"),i(a).removeClass("active").attr("aria-expanded","false").siblings(".sub-menu").slideUp()):(i("i",a).removeClass("wpbff-arrow-down").addClass("wpbff-arrow-up"),i(a).addClass("active").attr("aria-expanded","true").siblings(".sub-menu").slideDown())})}window.addEventListener("resize",function(e){u=WPBFSite.breakpoints}),e(),i(document).on("click",".wpbf-mobile-menu-toggle",function(){e(),t(o)}),i(document).on("click",".wpbf-mobile-menu a",function(){var e,a=this.parentNode.classList.contains("menu-item-has-children");(this.href.match("#")||this.href.match("/#"))&&(a?(e=i(this).siblings(".wpbf-submenu-toggle")).hasClass("active")?(i("i",e).removeClass("wpbff-arrow-up").addClass("wpbff-arrow-down"),e.removeClass("active").attr("aria-expanded","false").siblings(".sub-menu").slideUp()):(i("i",e).removeClass("wpbff-arrow-down").addClass("wpbff-arrow-up"),e.addClass("active").attr("aria-expanded","true").siblings(".sub-menu").slideDown()):t(o))}),i(window).resize(function(){var e,a,t=i(window).height(),n=i(window).width(),s=i(".wpbf-mobile-nav-wrapper").outerHeight();i(".wpbf-mobile-menu-container.active nav").css({"max-height":t-s}),n>u.desktop&&(e=o,(a=i(".wpbf-mobile-menu-toggle")).hasClass("active")&&(i(".wpbf-mobile-menu-container").removeClass("active").slideUp(),a.removeClass("active"),"hamburger"===e?a.removeClass("wpbff-times").addClass("wpbff-hamburger").attr("aria-expanded","false"):a.attr("aria-expanded","false")))}),a("default"),a("hamburger")}(jQuery);