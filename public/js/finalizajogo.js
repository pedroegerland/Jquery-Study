function verificarVencedor(){
    if($('tr').length > 2){
        displayModal();
    }
    else return;
}

function displayModal() {
    var rowCount = $('player-list tr').length;
    var revelarModal = $('#overlay');
    var nomeGanhador = $('tr:first-of-type td:first-of-type').text();
    revelarModal.toggleClass("displayNone");
    $("#vencedor").text(nomeGanhador);
    var close = $('#close');
    close.on("click", function(event) {
        if (event) {
            $("body").find("#overlay").toggleClass("displayNone");
        }
    });
};
