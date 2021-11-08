$(function(){

	$(".datepicker").datepicker({
        showOn: "button",
	    nextText: 'Следующий',
        prevText: 'Предыдущий',
    });

    var header_height = $('header').height();
    var footer_height = $('footer').height();
    $('body').css({
        'padding-top': header_height,
        'padding-bottom': footer_height
    });

    $('.view li').on('click', function(){
        var view = $(this).data('view');
        $('.view li').removeClass('active');
        $(this).addClass('active');
        $('.product').removeClass('columns');
        $('.product').removeClass('strings');
        $('.product').addClass(view);
    });

});

$(window).resize(function(){

    var header_height = $('header').height();
    var footer_height = $('footer').height();
    $('body').css({
        'padding-top': header_height,
        'padding-bottom': footer_height
    });

});