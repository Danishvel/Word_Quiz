function LoIn() {
    P1 = document.getElementById("player1_name").value;
    P2 = document.getElementById("player2_name").value;

    localStorage.setItem("Player 1", P1);
    localStorage.setItem("Player 2", P2);

    window.location = "game_page.html";
}