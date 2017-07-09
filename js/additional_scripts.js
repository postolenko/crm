$(window).on("load",function(){

	$(".scroll").mCustomScrollbar({
		scrollInertia:350
	});

});

$(document).ready(function() {

//  --- Select ---

	$("select").select2();

	$(".user-select").select2({
		templateResult: formatOption,
		templateSelection: formatOption
	});

	$(".user-select-2").select2({
		templateResult:formatOptionTwo,
		templateSelection: formatOptionTwo
	});

	function formatOption (opt) {

		if (!opt.id) { return opt.text; }

			var optimage = $(opt.element).attr('data-img-url');

		if(!optimage) {

			return opt.text;

		} else {

		var $opt = $(

			'<span class="select-tmpl"> \
				<span class="col col-1"> \
					<span class="img-box"><img src="'+ optimage +'"></span> \
				</span>\
				<span class="col-2">  ' + opt.text + '</span>\
			</span>'
		);

			return $opt;

		}

	};


	function formatOptionTwo (opt) {

		if (!opt.id) { return opt.text; }

			var optimage = $(opt.element).attr('data-img-url');
			var optUser = $(opt.element).parent("select").attr('data-user');

		if(!optimage) {

			return opt.text;

		} else {

		var $opt = $(

			'<span class="select-tmpl select-tmpl-2"> \
				<span class="col col-1"> \
					<span class="img-box"><img src="'+ optimage +'"></span> \
				</span>\
				<span class="col-2"><span class="small">'+ optUser +'</span><span class="p-1">  ' + opt.text + '</span></span>\
			</span>'
		);

			return $opt;

		}

	};

// --- Календарь  ----

	$('.datepicker-here').data({inline: false});
	$('.datepicker-here.inline-datepicker').data({inline: true});

	$('.form-control').datepicker({
		language: "ru",
		todayHighlight: true,
		format: "dd/mm"
	});

// --- График ----

if( $(".ct-chart").length > 0 ) {

		new Chartist.Bar('.ct-chart', {
			labels: ['01 Мая' , '02 Мая' , '03 Мая' , '04 Мая' , '05 Мая' , '06 Мая' , '07 Мая' ],
			series: [
					[600000, 400000, 800000, 700000, 800000, 900000, 1000000],
					[400000, 300000, 700000, 500000, 900000, 700000, 1000000],
					[500000, 700000, 500000, 600000, 700000, 600000, 1000000]
				]
			}, {
				seriesBarDistance: 15,
			axisX: {
				offset: 40
			},
			axisY: {
				offset: 70,
				scaleMinSpace: 25
			}
		});

		$(".ct-chart .ct-label.ct-vertical.ct-start").each(function() {

			$(this).append('<i class="fa fa-rub" aria-hidden="true"></i>');

		});

}

//  --- Fancybox ---

$("[data-fancybox='group']").fancybox({

});

});
