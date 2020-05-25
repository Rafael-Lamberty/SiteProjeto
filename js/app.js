$(document).ready(function(){
    $('#btn-modal-footer').modal();
    $('#btn-dropdown-topico-1').dropdown({
        hover:true
    });
    $('#btn-dropdown-topico-2').dropdown({
        hover:true
    });
    $('#btn-dropdown-topico-3').dropdown({
        hover:true
    }); 
});

function callParalax(){
    $('.parallax').parallax();
}

window.load = callParalax();//quandoreenderizar todos os elementos (window.load) ele vai chamar a function call paralax