console.log("Hello");

let answers = document.getElementsByClassName("answer");
let flag = false;
let btnSubmit = document.getElementById("btn-submit");
let btnContinue = document.getElementById("continue");
let btnShowExplanation = document.getElementById("btn-show-explanation");
let showExplanation = document.getElementById("show-explanation");
let msg = document.getElementById("msg");
const correctAnswer = "a2";

console.log(btnShowExplanation);
console.log(showExplanation);

for (let answer of answers) {
    // console.log(answer)
    answer.addEventListener("focus", () => {
        if(answer.id == correctAnswer) {
            console.log("Correct!");
            flag = true;
        } else {
            console.log("Incorrect :/");
            flag = false;
        }
    });
}

btnSubmit.addEventListener("click", () => {
    if(flag) {
        // alert("Correcto, la respuesta es la 2.");
        msg.innerHTML = `Correcto, la respuesta es la ${correctAnswer}. :)`;
        btnContinue.classList.add("active");
        btnContinue.classList.remove("hidden");
        btnSubmit.classList.add("hidden");
    } else {
        msg.innerHTML = "Incorrecto :/ intentalo de nuevo.";
    }
    
});

btnShowExplanation.addEventListener("click", () => {
    showExplanation.classList.toggle("hidden");
});



