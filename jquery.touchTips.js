/*
   __                   __  _______                _     
  / /_____  __  _______/ /_/_  __(_)___  _____    (_)____
 / __/ __ \/ / / / ___/ __ \/ / / / __ \/ ___/   / / ___/
/ /_/ /_/ / /_/ / /__/ / / / / / / /_/ (__  )   / (__  ) 
\__/\____/\__,_/\___/_/ /_/_/ /_/ .___/____(_)_/ /____/  
                               /_/          /___/        

A responsive and mobile-friendly jQuery tool-tip plug-in based on a function created by 
Osvaldas Valutis [http://osvaldas.info/elegant-css-and-jquery-tooltip-responsive-mobile-friendly].

cornerstoneUX.touchTips Plug-In
Version: 1.0.0
Author: Matt Zimmermann
Website & Documentation: http://influxweb.github.io/cornerstoneUX.touchTips/
Repo: https://github.com/influxweb/cornerstoneUX.touchTips
Issues: https://github.com/influxweb/cornerstoneUX.touchTips/issues
License: MIT
*/

;(function(w, $, d){
	if (!$.cornerstoneUX) {
		$.cornerstoneUX = {};
	};

	$.cornerstoneUX.touchTips = function(el, options){
		var base = this;
		
		// Access to jQuery and DOM versions of element
		base.$el = $(el);
		base.el = el;
		
		// Add a reverse reference to the DOM object
		base.$el.data('cornerstoneUX.touchTips', base);
		
		base.init = function () {
			base.target = false;
			base.tooltip = false;

			base.options = $.extend({},$.cornerstoneUX.touchTips.defaultOptions, options);

			base.$el.on('mouseenter', function () {
				base.target = $(this);
				tip = base.options.tip;
				titleSaver = base.target.attr('title');
				base.tooltip = $('<div id="js-touchTips" class="' + base.options.tipClass + '"></div>');
				
				if (!tip || tip === '') {
					if (base.target.attr('data-touchTips') === null) {
						return false;
					}
					else if ($(base.target.attr('data-touchTips')).length > 0) {
						tip = $(base.target.attr('data-touchTips')).html();
					}
					else {
						tip = base.target.attr('data-touchTips');
					};
				}
				else {
					if (tip instanceof Object) {
						tip = tip.html();
					};
				};
				
				base.target.removeAttr('title');
				base.tooltip.html(tip).appendTo('body');
		
				var init_tooltip = function () {
					if ($(w).width() < base.tooltip.outerWidth() * 1.5 ) {
						base.tooltip.css('max-width', $(w).width() / 2);
					}
					else {
						base.tooltip.css('max-width', base.options.maxWidth);
					};
					
					var pos_left = base.target.offset().left + (base.target.outerWidth() / 2) - (base.tooltip.outerWidth() / 2),
						pos_top = base.target.offset().top - base.tooltip.outerHeight() - 5;
						
					if (pos_left < 0) {
						pos_left = base.target.offset().left + base.target.outerWidth() / 2 - 20;
						base.tooltip.addClass('left');
					}
					else {
						base.tooltip.removeClass('left');
					};
		
					if (pos_left + base.tooltip.outerWidth() > $(w).width()) {
						pos_left = base.target.offset().left - base.tooltip.outerWidth() + base.target.outerWidth() / 2 + 20;
						base.tooltip.addClass('right');
					}
					else {
						base.tooltip.removeClass('right');
					};
		
					if (pos_top < 0) {
						pos_top = base.target.offset().top + base.target.outerHeight() + 8;
						base.tooltip.addClass('top');
					}
					else {
						base.tooltip.removeClass('top');
					};
		
					base.tooltip.css({
						top: pos_top,
						left: pos_left
					}).addClass('touchTips--show');
				};
		
				init_tooltip();
				$(w).resize(init_tooltip);
		
				var remove_tooltip = function () {
					base.tooltip.removeClass('touchTips--show').delay(500).remove();
					base.target.attr('title', titleSaver);
				};
		
				base.target.on('mouseleave', remove_tooltip);
				base.tooltip.on('click', remove_tooltip);
			});
		};
		
		base.init();
	};
	
	$.cornerstoneUX.touchTips.defaultOptions = {
		maxWidth: 360,
		tip: null,
		tipClass: 'touchTips'
	};
	
	$.fn.touchTips = function(options){
		return this.each(function(){
			(new $.cornerstoneUX.touchTips(this, options));
		});
	};
	
	// This function breaks the chain, but returns
	// touchTips if it has been attached to the object.
	$.fn.getcornerstoneUX_touchTips = function(){
		this.data('cornerstoneUX.touchTips');
	};
})(window, jQuery, document);
