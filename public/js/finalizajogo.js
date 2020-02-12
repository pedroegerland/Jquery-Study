function verificarVencedor(){
    if($('tr').length > 3){
        displayModal();
    }
    else return;
}

function displayModal() {
    var rowCount = $('player-list tr').length;
    var revelarModal = $('#overlay');
    revelarModal.toggleClass("displayNone");
    $("#vencedor").text($('td:nth-child(2)'));
};