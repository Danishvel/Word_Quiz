P1_n = localStorage.getItem("Player 1");
P2_n = localStorage.getItem("Player 2");

P1_s = 0;
P2_s = 0;

document.getElementById("P1").innerHTML = P1_n + " :";
document.getElementById("P2").innerHTML = P2_n + " :";

document.getElementById("P1_S").innerHTML = " "+P1_s;
document.getElementById("P2_S").innerHTML = " "+P2_s;

document.getElementById("Q_T").innerHTML = "Question Turn : " + P1_n;
document.getElementById("A_T").innerHTML = "Answer Turn : " + P2_n;


function send() {
    
    in_word = document.getElementById("word").value;

    q_word = in_word.toLowerCase();

    L_1 = q_word.charAt(1);
    console.log(L_1);

    mid = Math.floor(q_word.length/2);
    L_2 = q_word.charAt(mid);
    console.log(L_2);

    end = q_word.length - 1;
    L_3 = q_word.charAt(end);
    console.log(L_3);

    r_1 = q_word.replace(L_1, "_");
    r_2 = r_1.replace(L_2, "_");
    Final_w = r_2.replace(L_3, "_");

    Question = "<h4 id='word_display'> Q.  " + Final_w + "</h4>";
    input = "<br> Answer : <input type='text' id='A_in'>";
    button = "<br><br> <button onclick='check()' class='btn btn-info btn-md'>Check</button>";
    Finaloutput = Question + input + button ;

    document.getElementById("output").innerHTML = Finaloutput;
    document.getElementById("word").value = "";
}
Q_T = "Player1";
A_T = "Player2";
function check() {
    aa_word = document.getElementById("A_in").value;
    a_word = aa_word.toLowerCase();

    if (q_word == a_word) {
        if (A_T == "Player1") {
            P1_s = P1_s + 1;
            document.getElementById("P1_S").innerHTML = " "+P1_s;
            } 
        else {
            P2_s = P2_s + 1;
            document.getElementById("P2_S").innerHTML = " "+P2_s;
        }
    }
    if (Q_T == "Player1"){
        Q_T = "Player2"
        document.getElementById("Q_T").innerHTML = "Question Turn : " + P2_n;
    }
    else{
        Q_T = "Player1"
        document.getElementById("Q_T").innerHTML = "Question Turn : " + P1_n;
    }

    if (A_T == "Player1"){
        A_T = "Player2"
        document.getElementById("A_T").innerHTML = "Answer Turn : " + P2_n;
    }
    else{
       A_T = "Player1"
        document.getElementById("A_T").innerHTML = "Answer Turn : " + P1_n;
    }
    document.getElementById("output").innerHTML = "";

}