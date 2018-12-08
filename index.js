var btn = document.querySelectorAll('button');

// document.addEventListener('keypress', function(e) {

//     if (e.keyCode === 119 || e.keyCode === 87) {
//         // w
//         var audi = new Audio('sounds/tom-1.mp3');
//         audi.play();
//     } else if (e.keyCode === 97 || e.keyCode === 65) {
//         // a
//         var audi = new Audio('sounds/tom-2.mp3');
//         audi.play();
//     } else if (e.keyCode === 115 || e.keyCode === 83) {
//         // s
//         var audi = new Audio('sounds/tom-3.mp3');
//         audi.play();
//     } else if (e.keyCode === 100 || e.keyCode === 68) {
//         // d
//         var audi = new Audio('sounds/tom-4.mp3');
//         audi.play();
//     } else if (e.keyCode === 106 || e.keyCode === 74) {
//         // j
//         var audi = new Audio('sounds/crash.mp3');
//         audi.play();
//     } else if (e.keyCode === 107 || e.keyCode === 75) {
//         // k
//         var audi = new Audio('sounds/kick-bass.mp3');
//         audi.play();
//     } else if (e.keyCode === 108 || e.keyCode === 76) {
//         // l
//         var audi = new Audio('sounds/snare.mp3');
//         audi.play();
//     } else {
//         console.log('hi');
//     }
// });


btn.forEach(function(btns) {
    btns.addEventListener('click', function() {
        // alert('hello');
        // this.style.color = '#fff';

        var button = this.innerHTML;
        // button.toLowerCase();
        makeSound(button);
        buttonAnimation(button);
    });
});


document.addEventListener('keypress', function(e) {
    makeSound(e.key.toLowerCase());
    buttonAnimation(e.key.toLowerCase());
})



function makeSound(key) {
    switch (key) {
        case 'w':
            var audi = new Audio('sounds/tom-1.mp3');
            audi.play();
            break;
        case 'a':
            var audi = new Audio('sounds/tom-2.mp3');
            audi.play();
            break;
        case 's':
            var audi = new Audio('sounds/tom-3.mp3');
            audi.play();
            break;
        case 'd':
            var audi = new Audio('sounds/tom-4.mp3');
            audi.play();
            break;
        case 'j':
            var audi = new Audio('sounds/crash.mp3');
            audi.play();
            break;
        case 'k':
            var audi = new Audio('sounds/kick-bass.mp3');
            audi.play();
            break;
        case 'l':
            var audi = new Audio('sounds/snare.mp3');
            audi.play();
            break;

        default:
            console.log(key);

    }
}

function buttonAnimation(currentK) {
    var btn = document.querySelector(`.${currentK}`);
    btn.classList.add('pressed');

    setTimeout(function() {
        btn.classList.remove('pressed');
    }, 100);
}





// var audi = new Audio('sounds/tom-1.mp3');
//         audi.play();