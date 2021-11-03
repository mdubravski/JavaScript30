let sounds = document.querySelectorAll('audio');
let keys = document.querySelectorAll('.key');
console.log(keys);

document.addEventListener('keydown', function(event){
    switch(event.key){
        case 'a': 
            keys[0].classList.add("playing");
            sounds[0].play();
            break;
        case 's':
            keys[1].classList.add("playing");
            sounds[1].play();
            break;
        case 'd': 
            keys[2].classList.add("playing");
            sounds[2].play();
            break;
        case 'f':
            keys[3].classList.add("playing");
            sounds[3].play();
            break;
        case 'g':
            keys[4].classList.add("playing");
            sounds[4].play();
            break;
        case 'h':
            keys[5].classList.add("playing"); 
            sounds[5].play();
            break;
        case 'j':
            keys[6].classList.add("playing");
            sounds[6].play();
            break;        
        case 'k':
            keys[7].classList.add("playing"); 
            sounds[7].play();
            break;
        case 'l':
            keys[8].classList.add("playing");
            sounds[8].play();
            break;
    }
});

document.addEventListener('keyup', function(event){
    switch(event.key){
        case 'a': 
            keys[0].classList.remove("playing");
            break;
        case 's':
            keys[1].classList.remove("playing");
            break;
        case 'd': 
            keys[2].classList.remove("playing");
            break;
        case 'f':
            keys[3].classList.remove("playing");
            break;
        case 'g':
            keys[4].classList.remove("playing");
            break;
        case 'h': 
            keys[5].classList.remove("playing");
            break;
        case 'j':
            keys[6].classList.remove("playing");
            break;       
        case 'k': 
            keys[7].classList.remove("playing");
            break;
        case 'l':
            keys[8].classList.remove("playing");
            break;
    }
});