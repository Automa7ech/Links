$(function () {
    'use strict';
    
    $('.nosotros div:first').show();
    
    $('.servicios nav a:first').addClass('activo');
    
    $('.servicios nav a').on('click', mostrarTabs);
    console.log($('.servicios nav a'));
    function mostrarTabs(){
        $('.servicios nav a').removeClass('activo');
        $(this).addClass('activo');
        var enlace = $(this).attr('href');
        $('.nosotros div').hide();
        $(enlace).show();
        return false;
    }
});
