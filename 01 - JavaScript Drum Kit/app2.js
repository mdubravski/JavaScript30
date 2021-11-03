// handle audio and add .playing css
window.addEventListener('keydown', function(e){
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    if(!audio || !key) return; // stop function from running
    audio.currentTime = 0;
    audio.play();
    key.classList.add('playing');
});

function removeTransition(e){
    if(e.propertyName !== 'transform') return; // skip if not a transform
    this.classList.remove('playing');
}

// remove .playing css
const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));