$(document).ready(function() {

    $("#botaoCopiar").click(function() {
      $("#conteudo").append($("#texto").val());
      $("#texto").val("");
    });
    

  });