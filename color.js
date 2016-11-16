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
    ComputerChoice = colors[Math.floor(Math.random() * 8)];
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

            alert("Correct answer");

            myBody=document.getElementsByTagName("body")[0];

            myBody.style.background=ComputerChoice;


        }
        else if (userChoice < ComputerChoice){
            //('the answer is wrong')

            alert("userChoice is lower try again please!");
        }
        else if (userChoice > ComputerChoice){
            // ('the answer is wrong')

            alert("userChoice is higher try again please !");
        }

    }
    var textOut = document.getElementById("output");

}