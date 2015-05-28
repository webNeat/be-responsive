/**
 * responsiveTable jQuery plugin
 * @author Amine Ben hammou (webneat@gmail.com)
 */
(function($){
	$.fn.responsiveTable = function(options) {
		return this.each(function(){
			var withTitles = $(this).attr('data-with-titles');
			if(withTitles){
				$(this).addClass('responsive-with-titles');
				var id = $(this).attr('id');
				if(id === undefined){
					id = 'responsive-table-' + $.fn.responsiveTable.nextId;
					$.fn.responsiveTable.nextId ++;
					$(this).attr('id', id);
				}

				var css = '';
				var i = 1;
				$(this).find('th').each(function(){
					css += '#' + id + ' > tbody > tr > td:nth-of-type(' + i + '):before { content: "' + $(this).html() + '"; } ';
					i ++;
				});
				$('head').append('<style> @media only screen and (max-width: 760px), (min-device-width: 760px) and (max-device-width: 1024px) { ' + css + ' } </style>');
			}
		});
	};

	$.fn.responsiveTable.nextId = 1;

}(jQuery));
