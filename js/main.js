$(document).ready(function(){
    $('#carousel_imagens').slick({
        autoplay:true,
    }); 
    $('.menu_hamburguer').click(function(){
        $('nav').slideToggle();
    });
    $('#telefone').mask('(00) 00000-0000',{placeholder: '(00)00000-0000'});
    
    $('form').validate({
        rules: {
        nome: {
            required: true
        },
        telefone: {
            required: true
        },
        email: {
            required: true,
            email: true
        },
        veiculoInteresse: {
            required: true
        },
        mensagem:{
            required:false
        }
        
    }, messages:{
        nome:'Por favor insira o seu nome',
        email:'Por favor insira o seu e-mail.'
    },submitHandler: function(form){
        console.log(form)
    },
    invalidHandler: function(evento,validador){
        let camposIncorretos = validador.numberOfInvalids();
        if (camposIncorretos){
            alert(`Existem ${camposIncorretos} campos incorretos.`)
        }
    }
});
$('.lista-veiculos button').click(function(){
    const destino = $('#contato');
    const nomeVeiculo =$(this).parent().find('h3').text();

    $('#veiculoInteresse').val(nomeVeiculo);
    //Este código gaz o scroll até a section com id= contato
    $('html').animate({
        scrollTop: destino.offset().top
    },1000)
})

    
})