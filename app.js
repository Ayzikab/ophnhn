let game = document.querySelector('.game'),
 res = document.querySelector('.res'),
 btnGame = document.querySelector('.new-game'),
 fields = document.querySelectorAll('.field'),
 step = false,
 count = 0,
 circle = `<svg class="circle">
 <circle r="45" cx="58" cy="58" stroke="blue"
 stroke-width="10" fill="none" stroke-linecap="round" />
</svg>`,
cross = `<svg class="cross">
<line class="first" x1="15" y1="15" x2="100" y2="100"
stroke="red" stroke-width="10" stroke-linecap="round"/>
<line class="second" x1="100" y1="15" x2="15" y2="100"
stroke="red" stroke-width="10" stroke-linecap="round"/>
</svg>`;

function stepCross(target){
  target.innerHTML = cross;
  target.classList.add('x');
  let crossAudio = new Audio('audio/11.mp3');
  crossAudio.play();
  count++
  

}
function stepZero(target){
    target.innerHTML = circle;
    target.classList.add('o');
    let crossAudio = new Audio('audio/7.mp3');
crossAudio.play();
count++
}function init(e){
    if (!step) stepCross(e.target);
    else stepZero(e.target)
    step = !step;
    win();
    
}function newGame(){
    step = false;
    count = 0;
    res.innerText = '';
    fields.forEach(item => {
        item.innerHTML = '';
        item.classList.remove('x', 'o', 'active');

    });
    game.addEventListener('click', init)
}function win(){
    let comb = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
    ];

    for (let i = 0; i < comb.length; i++) {
        if (fields[comb[i][0]].classList.contains('x') && fields[comb[i][1]].classList.contains('x') && fields[comb[i][2]].classList.contains('x')) {
            setTimeout(() => {
                fields[comb[i][0]].classList.add('active');fields[comb[i][1]].classList.add('active');fields[comb[i][2]].classList.add('active');
                res.innerHTML = 'Выйграли X';
            }, 1500);
            game.removeEventListener('click',init);
            
        }else if (fields[comb[i][0]].classList.contains('o') && fields[comb[i][1]].classList.contains('o') && fields[comb[i][2]].classList.contains('o')) {
            setTimeout(() => {
                fields[comb[i][0]].classList.add('active');fields[comb[i][1]].classList.add('active');fields[comb[i][2]].classList.add('active');
                res.innerHTML = 'Выйграли o';
            }, 1500);
            game.removeEventListener('click',init);
            
        }
        else if(count == 9){
            res.innerText = 'Ничья';
        }
        
    }

}
btnGame.addEventListener('click', newGame);
game.addEventListener('click', init);






// var arrs = ['audio/1.mp3', 'audio/2.mp3','audio/3.mp3','audio/4.mp3','audio/5.mp3','audio/6.mp3','audio/7.mp3','audio/8.mp3','audio/9.mp3','audio/10.mp3','audio/11.mp3','audio/111.mp3','audio/1111.mp3','audio/11111.mp3','audio/111111.mp3']



function randomVoice() {
    var a = new Array()
a[0] = 'audio/1.mp3'
a[1] = 'audio/2.mp3'
a[2] = 'audio/3.mp3'
a[3] = 'audio/4.mp3'
a[4] = 'audio/5.mp3'
a[5] = 'audio/6.mp3'
a[6] = 'audio/7.mp3'
a[7] = 'audio/8.mp3'
a[8] = 'audio/9.mp3'
a[9] = 'audio/10.mp3'
a[10] = 'audio/11.mp3'
a[11] = 'audio/111.mp3'
a[12] = 'audio/11111.mp3'
a[13] = 'audio/1111.mp3'
a[14] = 'audio/111111.mp3'



    return a[Math.floor(Math.random() * 15)]

}

