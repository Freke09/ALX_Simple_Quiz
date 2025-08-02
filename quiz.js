function checkAnswer(){
    const correctAnswer = "4";
    
    let  checked = document.querySelector('input[name="quiz"]');
    let feedback = document.getElementById('feedback');
    
    userAnswer = checked.value;
    if(userAnswer === correctAnswer){
        feedback.textContent = "Correct! Well done.";
    } else {
        feedback.textContent = "That's incorrect. Try again!";
    }
}
document.addEventListener("DOMContentLoaded", function() {

    let submitAnswer = document.getElementById('submit-answer');
    submitAnswer.addEventListener("click", checkAnswer)
});

