document.addEventListener('DOMContentLoaded', (event) => {
    const playText = document.getElementById('playText');
    const myAudio = document.getElementById('myAudio');

    playText.addEventListener('click', () => {
        if (myAudio.paused) {
            myAudio.play();
        } else {
            myAudio.pause();
        }
    });
});