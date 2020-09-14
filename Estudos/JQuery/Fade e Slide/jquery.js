$(document).ready(function(){
    var indice1 = 1;
    var indice2 = 1;
    var botao1 = $("#botao1");
    var botao2 = $("#botao2");
    
    

    botao1.click(function() {
        var conteudo1 = $("#conteudo1");
        if(indice1 == 1){
            conteudo1.fadeOut();
            indice1 = 0
        }else{
            conteudo1.fadeIn();
            indice1 = 1
        }
    });

    botao2.click(function() {
        var conteudo2 = $("#conteudo2");
        if(indice2 == 1){
            conteudo2.slideUp();
            indice2 = 0
        }else{
            conteudo2.slideDown();
            indice2 = 1
        }
    });
});