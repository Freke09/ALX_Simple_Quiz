function checkAnswer(){
    const correctAnswer = "4";
    
    let userAnswer = document.querySelector('input[name="quiz"]').value;
    let feedback = document.getElementById('feedback');
    
    
    if(userAnswer == correctAnswer){
        feedback.textContent = "Correct! Well done.";
    } else {
        feedback.textContent = "That's incorrect. Try again!";
    }
}
document.addEventListener("DOMContentLoaded", function() {

    let submitAnswer = document.getElementById('submit-answer');
    submitAnswer.addEventListener("click", checkAnswer)
});

