/**
 * colorAlpha
 * A jQuery plugin to set the alpha channel of a CSS color or background-color.
 * 
 * Latest version: https://github.com/seyDoggy/colorAlpha
 * 
 * License <https://github.com/seyDoggy/colorAlpha/blob/master/LICENSE.txt>
 */
 ;(function($, undefined) {
	'use strict';

	var pluginName = 'colorAlpha',
		pluginVersion = '1.0.2';

	$.fn.colorAlpha = function(options) {

		/*
		 * OPTIONS
		 */
		var settings = $.extend({
			property:'background-color',
			percent:'100'
		}, options);

		var match = /rgba?\((\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(,\s*\d+[\.\d+]*)*\)/g.exec(this.css(settings.property));

        settings.percent = settings.percent > 1 ? (settings.percent / 100) : settings.percent;

        this.css(settings.property, "rgba(" + [match[1],match[2],match[3],settings.percent].join(',') +")");
      
		return this;
	};
})(jQuery);