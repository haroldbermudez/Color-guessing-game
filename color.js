/**Created by harold.bermudez421 on 11/3/16.
 */
//declaration of global variables and arrays for
// colors - set initial values

var ComputerChoice;
var colors;
function pickComputerColor() {
    //alert("Page is loaded");
     colors = ["AliceBlue",
        "Coral",
        "Dark Gray",
        "GhostWhite",
        "Indian Red",
        "Lavender",
        "MediumPurple",
        "Olive",
        "Teal",
        "YellowGreen"];
    ComputerChoice = colors[Math.floor(Math.random() * 10)];
}

function getIndex() {
    var userChoice = document.getElementById("mySelect").value;

    //2. Make sure it compares to ComputerChoice
    alert(userChoice);

    if (colors.indexOf(userChoice) == -1) {
        //invalid choice
    }
    else {
        if (userChoice == ComputerChoice) {
            //('the answer is correct')

            alert("Congrats! You have found the correct answer");

            myBody=document.getElementsByTagName("body")[0];

            myBody.style.background=ComputerChoice;


        }
        else if (userChoice < ComputerChoice){
            //('the answer is wrong')

            alert("UserChoice is lower. Try again please!");
        }
        else if (userChoice > ComputerChoice){
            // ('the answer is wrong')

            alert("UserChoice is higher Try again please !");
        }

    }
    var textOut = document.getElementById("output");

}