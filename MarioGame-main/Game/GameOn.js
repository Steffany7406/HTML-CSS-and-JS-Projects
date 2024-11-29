const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');

const start = document.querySelector('.start');
const gameOver = document.querySelector('.game-over');

audioStart = new Audio();
audioGameOver = new Audio();

const startGame = () => {
    pipe.classList.add('pipe-animation');
    start.style.display = 'none';
    start.classList.add('start-animation');

    audioStart.play();
}

const restartGame = () => {
    gameOver.style.display = 'none';
    pipe.style.left = '';
    pipe.style.right = '';
    mario.src = './img/mario.gif';
    mario.style.width = '150px';
    mario.style.bottom = '0px';

    start.style.display = 'none';
}

const jump = () => {
    mario.classList.add('jump');

    setTimeout(() => {
        mario.classList.remove('jump');
    }, 800);
}

const loop = () => {
    setInterval(() => {
        const pipePosition = pipe.offsetLeft;
        const marioPosition = parseInt(window.getComputedStyle(mario).bottom);

        if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 80) {
            pipe.classList.remove('pipe-animation');
            pipe.style.left = `${pipePosition}px`;

            mario.classList.remove('jump');
            mario.style.bottom = `${marioPosition}px`;

            mario.src = './game-over.png';
            mario.style.width = '80px';
            mario.style.marginLeft = '50px';

            pipe.style.animation = '';
            mario.style.animation = '';
        }
    }, 10);
}

loop();

document.addEventListener('keypress', e => {
    const tecla = e.key;
    if (tecla === 'j') {
        jump();
    } else if (tecla === 'Enter') {
        startGame();
    }
});

document.addEventListener('touchstart', e => {
    if (e.touches.length) {
        jump();
    }
});