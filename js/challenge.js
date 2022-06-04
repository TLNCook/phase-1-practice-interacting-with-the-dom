// Declare variables
let counter = document.getElementById('counter');
const minus = document.getElementById('minus');
const plus = document.getElementById('plus');
const heart = document.getElementById('heart');
const pauseResumeButton = document.getElementById('pause');
const commentButton = document.getElementById('submit');

// Declare event listeners
minus.addEventListener('click', minusButton);
plus.addEventListener('click', plusButton);
heart.addEventListener('click', likeButton);
pause.addEventListener('click', pauseResume);

// Starts the interval 
function start() {
    startCount = setInterval(() => {
        let currentCount = parseInt(counter.textContent)
        counter.textContent = currentCount + 1;
    }, 1000);
}

// Subtracts one from the current counter
function minusButton() {
    let currentCount = parseInt(counter.textContent);
    counter.textContent = currentCount - 1;
}

// Adds one to the current counter
function plusButton() {
    let currentCount = parseInt(counter.textContent);
    counter.textContent = currentCount + 1;
}

// Adds a like under comments for the current number
function likeButton() {
    const likes = document.querySelector('.likes');
    const li = document.createElement('li');
    let currentCount = parseInt(counter.textContent);
    li.textContent = `${currentCount} has been liked 1 time`;
    likes.append(li);
}

// Pauses and resumes the counter and enables/disables all other buttons
function pauseResume() {
    if(pauseResumeButton.innerText === 'pause') {
        minus.disabled = true;
        plus.disabled = true;
        heart.disabled = true;
        commentButton.disabled = true;
        pause.textContent = "resume";
        clearInterval(startCount);
    } else {
        minus.disabled = false;
        plus.disabled = false;
        heart.disabled = false;
        commentButton.disabled = false;
        pause.textContent = "pause";
        start();
    }
}

// Allows the user to add a comment
function listenForSubmitButton() {
    const form = document.getElementById('comment-form');
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const comment = document.getElementById('list');
        const commentDiv = document.createElement('div');
        commentDiv.textContent = e.target['comment'].value;
        comment.append(commentDiv);
        form.reset();
    });
}

// Invoke starting functions
start();
listenForSubmitButton();