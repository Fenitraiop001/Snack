const field = document.getElementById('container')
const snacks = document.getElementById('snack')
const point = document.getElementById('check_point')
const score = document.querySelectorAll('#score div')

const u = document.querySelector('.up')
const r = document.querySelector('.right')
const d = document.querySelector('.down')
const l = document.querySelector('.left')

let L = 20
let snack = []

for(var i=1; i<5; i++) {
    snack[i] = check_point((4-i)*20, 0)
    snack[i].style.backgroundColor = 'red'
    snacks.appendChild(snack[i])
}

snack[0] = document.createElement('div')
snack[0].setAttribute('class', 'snack')
snack[0].setAttribute('style', 'left:' + 20*4 + 'px; top: 0px; height: ' + 20 + 'px;')
snacks.appendChild(snack[0])

snack[0].classList.add('head')



var point_position = new_point(field, snack)
point.style.left = point_position[0]
point.style.top = point_position[1]









let pos = 0
let pos_forbidden = 2
let animation = false

const colorSpace = [5, 'hsl(250, 80%, 60%)']
let snackStyle = 0


let x = 100
let y = 0






let currentScore = score[0].innerHTML.split(":")[1].trim()
let bestScore = score[1].innerHTML.split(":")[1].trim()








//======================================
// UP
//======================================

u.addEventListener('click', () => {
    if(pos_forbidden != 3) {
        pos = 1
        if(!animation) {
            animation = true
            anim()
            //p.innerHTML = ''
        }
    }
})




//======================================
// RIGHT
//======================================
r.addEventListener('click', () => {
    if(pos_forbidden != 4) {
        pos = 2
        if(!animation) {
            animation = true
            anim()
            //p.innerHTML = ''
        }
    }
})




//======================================
// DOWN
//======================================
d.addEventListener('click', () => {
    if(pos_forbidden != 1) {
        pos = 3
        if(!animation) {
            animation = true
            anim()
            //p.innerHTML = ''
        }
    }
})




//======================================
// LEFT
//======================================
l.addEventListener('click', () => {
    if(pos_forbidden != 2) {
        pos = 4
        if(!animation) {
            animation = true
            anim()
            //p.innerHTML = ''
        }
    }
})


