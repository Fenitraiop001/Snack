let speed = 200

function anim() {
    if(pos != 0) {
        let x = parseInt(snack[0].style.left)
        let y = parseInt(snack[0].style.top)
        
        switch(pos) {
            case 1:
                snack[0].style.top = (y-L) + 'px'
                break
        
            case 2:
                snack[0].style.left = (x+L) + 'px'
                break
        
            case 3:
                snack[0].style.top = (y+L) + 'px'
                break

            case 4:
                snack[0].style.left = (x-L) + 'px'
                break

        }

        pos_forbidden = pos



        let xt, yt
    
        for(var i=1; i<snack.length; i++) {
            xt = parseInt(snack[i].style.left)
            yt = parseInt(snack[i].style.top)
            snack[i].style.left = x + 'px'
            snack[i].style.top = y + 'px'
            //snack[i].innerHTML = '<img src="../skin/body.png" />'
            /*if(x != parseInt(snack[i-1].style.left) && y != parseInt(snack[i-1].style.top)) {
                snack[i].innerHTML = '<img src="../skin/body_turn.png" />'
            } else if(x == 0) {
                
            } else if(y != yt) {
                snack[i].style.rotate = '90deg'
            } else {
                snack[i].style.rotate = '0deg'
            }*/
            x = xt
            y = yt
        }
        
        if(snack[0].style.left == point.style.left && snack[0].style.top == point.style.top) {
            snack.push(check_point(x, y))
            if((snack.length-1)%(colorSpace[0]*2) >= colorSpace[0]) {
                snack[snack.length-1].style.backgroundColor = colorSpace[1]
            }
            snacks.appendChild(snack[snack.length-1])
            
            var point_position = new_point(field, snack)
            point.style.left = point_position[0]
            point.style.top = point_position[1]

            currentScore++;
            score[0].innerHTML = 'score : ' + currentScore
            if(currentScore > bestScore) {
                bestScore = currentScore
                score[1].innerHTML = 'best : ' + bestScore
                score[1].style.opacity = '1'
                score[1].style.fontWeight = 'bold'
                score[1].style.color = '#56da3f'
                score[0].style.opacity = '1'
                score[0].style.fontWeight = 'bold'
                score[0].style.color = '#e3e3e3'
            }
        }
        
        x = parseInt(snack[0].style.left)
        y = parseInt(snack[0].style.top)

        failed(x, y, snack, 'crash')
        failed(x, y, field, 'out')


        setTimeout(anim, speed)
    }
}
