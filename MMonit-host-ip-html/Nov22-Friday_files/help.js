(function(b){var a=function(c,e){var d=this;d.$element=c;d.$container=e;d.w=c.width();d.h=c.height();d.ishidden=true;d.show=function(){d.$element.addClass("active");if(ISPHONE){b("html, body").scrollTop(0);b("#title h1, .add-button").addClass("hideOnHelp");d.$container.fadeIn(300).css("top",-6)}else{d.$container.fadeIn(300).css("top",(c.offset().top-d.h/2+4));d.$container.css("right",(b(window).width()-c.position().left-d.w-d.w/2+8))}d.ishidden=false};d.hide=function(){d.$element.removeClass("active");d.$container.hide(200);d.ishidden=true;if(ISPHONE){b("html, body").scrollTop(0);b("#title h1, .add-button").removeClass("hideOnHelp")}};d.toggle=function(){if(d.ishidden){d.show()}else{d.hide()}}};b(document).on("vclick.help.data-api","[data-help]",function(f){f.stopImmediatePropagation();f.preventDefault();var c=b(f.target);var g=b(c.data("help"));var d=c.data("cached");if(!d){c.data("cached",(d=new a(c,g)))}d.toggle()});b(document).on("resize orientationchange",function(f){var c=b("[data-help]");var d=c.data("cached");if(d){d.offset=c.offset()}})})(jQuery);