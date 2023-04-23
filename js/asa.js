$(function () {
    'use strict';

    $('.nosotros div:first').show();
    $('.nosotros div').addClass('top-right');

    $('.servicios nav a:first').addClass('activo');

    $('.servicios nav a').on('click', mostrarTabs);
    console.log($('.servicios nav a'));
    function mostrarTabs() {
        $('.servicios nav a').removeClass('activo');
        $(this).addClass('activo');
        var enlace = $(this).attr('href');
        $('.nosotros div').hide();
        $(enlace).show();
        $('.nosotros div').removeClass('top-right');
        $('.nosotros div').removeClass('top');
        $('.nosotros div').removeClass('top-left');

        if ($(this).attr('href') == '#diseno') {
            $('.nosotros div').addClass('top-right');
        } else if ($(this).attr('href') == '#act') {
            $('.nosotros div').addClass('top');
        } else if ($(this).attr('href') == '#precio') {
            $('.nosotros div').addClass('top-left');
        }
        return false;
    }
});
