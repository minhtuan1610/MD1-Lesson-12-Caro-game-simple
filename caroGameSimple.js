let b = document.getElementById("caroGame");
let board = [];
let data = "";
for (let i = 0; i < 5; i++) {
    board[i] = new Array(0, 0, 0, 0, 0);
}
for (let i = 0; i < 5; i++) {
    data += "<br>";
    for (let j = 0; j < 5; j++) {
        data += board[i][j] + "&nbsp;&nbsp;";
    }
}
data += "<br><br>" + "<input onClick='changeValue()' type='button' value='Change Value'>";
b.innerHTML = data;

function changeValue() {
    let positionX = prompt("X: ");
    let positionY = prompt("Y: ");
    board[positionX][positionY] = "x";
    for (let i = 0; i < 5; i++) {
        data += "<br>";
        for (let j = 0; j < 5; j++) {
            data += board[i][j] + "&nbsp;&nbsp;&nbsp;&nbsp;";
        }
    }
    data += "<br><br>" + "<input onClick='changeValue()' type='button' value='Change Value'>";
    b.innerHTML = "<br><br>" + data;
}