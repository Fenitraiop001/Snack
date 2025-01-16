function check_point(x, y) {
    var part = document.createElement('div')
    part.setAttribute('class', 'snack')
    part.setAttribute('style', 'left:'+x+'px;top:'+y+'px')
    
    return part
}

function new_point(field, snack) {
    var point = []
    var max = (parseInt(field.style.width) / L) - 1
    do {
        point[0] = getRandomIntInclusive(0, max)
        point[1] = getRandomIntInclusive(0, max)
        
        var test = true
        
        for(var i=0; i<snack.length; i++) {
            if(point[0]*L == parseInt(snack[i].style.left) && point[1]*20 == parseInt(snack[i].style.top)) {
                test = false
            }
        }
    }
    while(!test)
    
    point[0] = (point[0] * L) + 'px'
    point[1] = (point[1] * L) + 'px'
    
    
    return point
}


function failed(x, y, element, type) {
    switch(type) {
        case 'out':
            width = parseInt(element.style.width)
            height = parseInt(element.style.height)
            if(x < 0 || x >= width || y < 0 || y >= height) {
                alert('out')
                game_over()
            }
            break;
            
        case 'crash':
            var crash = false
            for(var i=1; i<element.length; i++) {
                if(x == parseInt(element[i].style.left) && y == parseInt(element[i].style.top)) {
                    crash = true
                }
            }
            if(crash) {
                alert('crash')
                game_over()
            }
            break;
    }
    
}








function game_over() {
    animation = false
    pos = 0
    pos_forbidden = 2
    snacks.innerHTML = ''
    currentScore = 0
    score[0].innerHTML = 'score : 0'
    score[1].style.opacity = '1'
    score[1].style.fontWeight = 'none'
    score[1].style.color = 'black'
    score[0].style.opacity = '1'
    score[0].style.fontWeight = 'none'
    score[0].style.color = 'black'

    snack = []

    for(var i=1; i<5; i++) {
        snack[i] = check_point((4-i)*20, 0)
        snack[i].style.backgroundColor = 'red'
        snacks.appendChild(snack[i])
    }

    snack[0] = document.createElement('div')
    snack[0].setAttribute('class', 'snack')
    snack[0].setAttribute('style', 'left:' + L*4 + 'px; top: 0px; height: ' + L + 'px;')
    snacks.appendChild(snack[0])

    snack[0].classList.add('head')

    point_position = new_point(field, snack)
    point.style.left = point_position[0]
    point.style.top = point_position[1]

    x = 100
    y = 0

}








function pause() {
    if(animation == true) {
        pos = 0
        animation = false
        var div = document.createElement('div')
        div.innerHTML = 'PAUSE'

        p.appendChild(div)
    }
}







// génération d'une Hazard en nombre entier
function getRandomIntInclusive(min, max) {
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled); // The maximum is inclusive and the minimum is inclusive
}
