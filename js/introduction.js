let dialogue = 1;

function suivant (){
    if (dialogue < 3)
    {
document.getElementById("dial" + dialogue).style.display = "none"; // desactive le dialogue actuellement present
dialogue++;
document.getElementById("dial" + dialogue).style.display = "block"; // active le dialogue suivant
}
else
{
    window.location.href = "./jeu.html";
}
}
function precedent (){
    if (dialogue <= 3)
    {
    document.getElementById("dial" + dialogue).style.display = "none"; // desactive le dialogue present
dialogue--;
document.getElementById("dial" + dialogue).style.display = "block"; // active le dialogue precedent
}


}