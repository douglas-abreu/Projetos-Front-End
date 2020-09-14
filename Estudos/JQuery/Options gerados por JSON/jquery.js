$(document).ready(function(){
    $.getJSON('http://www.geonames.org/childrenJSON?geonameId=3469034', function(data){
        var estados = data.geonames;

        for(var indexEstado in estados){
            var estado = estados[indexEstado];
            var nomeEstado = estado.name;
            var idEstado = estado.geonameId;
            $("#estados").append(new Option(nomeEstado, idEstado));
        }
    });

    

    $("#estados").change (function(){
        $("#cidades").empty();
        var idEstadoSelecionado = $("#estados").find('option:selected')[0] ;
        $.getJSON('http://www.geonames.org/childrenJSON?geonameId='+idEstadoSelecionado.getAttribute("value"), function(data){
            
        var cidades = data.geonames;

            for(var indexCidade in cidades){
                var cidade = cidades[indexCidade];
                var nomeCidade = cidade.name;
                var idCidade = cidade.geonameId;
                $("#cidades").append(new Option(nomeCidade, idCidade));
            }
        });
    });
});