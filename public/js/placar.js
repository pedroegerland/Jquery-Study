var usuario = $("#jogador");
var name = '';

function inserePlacar() {
    var corpoTabela = $(".placar").find("tbody");
    var numPalavras = $("#contador-palavras").text();

    var linha = novaLinha(usuario, numPalavras);
    linha.find(".botao-remover").click(removeLinha);

    corpoTabela.append(linha);
}

usuario.on("input", function() {
    name = usuario.val();
});

function novaLinha(usuario, palavras) {
    usuario.on("input", function() {
        name = usuario.val();
    });
    
    var linha = $("<tr>");
    var colunaUsuario = $("<td>").text(name);
    var colunaPalavras = $("<td>").text(palavras);
    var colunaRemover = $("<td>");

    var link = $("<a>").addClass("botao-remover").attr("href", "#");
    var icone = $("<i>").addClass("small").addClass("material-icons").text("delete");

    link.append(icone);

    colunaRemover.append(link);

    linha.addClass("listaJogadores");
    linha.append(colunaUsuario.addClass("nomeJogador"));
    linha.append(colunaPalavras.addClass("acharContador"));
    linha.append(colunaRemover);
    return linha;
}

function Ordernar(){
    $('tbody > tr').sort(function (a, b) {
        return parseInt($(b).find('td.acharContador').text()) - parseInt($(a).find('td.acharContador').text());
    }).appendTo('tbody');
};

function removeLinha() {
    event.preventDefault();
    $(this).parent().parent().remove();
}
