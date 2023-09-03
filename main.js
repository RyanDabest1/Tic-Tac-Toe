let boxes = document.querySelectorAll('#box')
let clearBtn = document.querySelector('.clear')
let choiceOpt = document.querySelector('#choseSide')
let choiceDiff = document.querySelector('#difficulties')

let gameboard = {
    userChoice : "undefined",
    rows : 3,
    toClear : [],
    col : 3,
    takenList : [],
    list : ['b10','b11','b12',
            'b20','b21','b22',
            'b30','b31','b32'
],  
    hits :[
        '','','',
        '','','',
        '','',''
    ],
    turnPermOff : false,
    botTargets : [],
    winCheck : function () {
        if(gameboard.hits[0] == 'hit' && gameboard.hits[1] == 'hit' && gameboard.hits[2] == 'hit'){
            alert('YOU WIN!')
            return true;
        } else if (gameboard.hits[0] == 'hit' && gameboard.hits[3] == 'hit' && gameboard.hits[6] == 'hit'){
            alert("YOU WIN!")
            return true;
        } else if (gameboard.hits[6] == 'hit' && gameboard.hits[7] == 'hit' && gameboard.hits[8] == 'hit'){
            alert("YOU WIN!")
            return true;
        } else if (gameboard.hits[6] == 'hit' && gameboard.hits[4] == 'hit' && gameboard.hits[2] == 'hit'){
            alert("YOU WIN!")
            return true;
        } else if (gameboard.hits[1] == 'hit' && gameboard.hits[4] == 'hit' && gameboard.hits[7] == 'hit'){
            alert("YOU WIN!")
            return true;
        } else if (gameboard.hits[2] == 'hit' && gameboard.hits[5] == 'hit' && gameboard.hits[8] == 'hit'){
            alert("YOU WIN!")
            return true;
        } else if (gameboard.hits[3] == 'hit' && gameboard.hits[4] == 'hit' && gameboard.hits[5] == 'hit'){
            alert("YOU WIN!")
            return true;
        } else if (gameboard.hits[0] == 'hit' && gameboard.hits[4] == 'hit' && gameboard.hits[8] == 'hit'){
            alert("YOU WIN!")
            return true;
        }
        
        
    
    },
    clear: (blockArr) => {
        for(let i = 0; i < blockArr.length; i++){
            document.querySelector('.'+blockArr[i]).removeChild(document.querySelector('.'+"c"+blockArr[i][1] + "" + blockArr[i][2]))
        }
        blockArr.length = 0;
        gameboard.botTargets.length = 0;
        gameboard.takenList.length = 0;
        gameboard.hits.length = 0;
    },
    gameStarted : false,
    difficulty : 'undefined',
    addHit : function(value){
        var index = gameboard.list.indexOf(value)
        if(index >= 0){
            gameboard.hits[index] = 'hit'
        }
        return false;
    }
 }
 window.onload = getUserChoice()
 window.onload = getDifficulty()
 choiceOpt.addEventListener('change', () => {
    if(choiceOpt.value == 'circle'){
        gameboard.clear(gameboard.toClear)
        gameboard.userChoice = 'circle'
        botPlay()
    } else {
        gameboard.userChoice = 'cross'
        gameboard.clear(gameboard.toClear)
    }
 })
 choiceDiff.addEventListener('change', ()=> {
    if(choiceDiff.value == 'easy'){
        gameboard.difficulty = 'easy'
    } else if(choiceDiff.value = 'medium'){
        gameboard.difficulty = 'medium'
    } else {
        gameboard.difficulty = 'hard'
    }
 })

clearBtn.addEventListener('click', () => {
    gameboard.clear(gameboard.toClear)
    getUserChoice()
})

function getUserChoice(){
    if(document.querySelector('#choseSide').value == 'circle'){
        gameboard.userChoice = 'circle'
        botPlay()
    } else {
        gameboard.userChoice = 'cross'
    }
}
function getDifficulty(){
    if(document.querySelector('#difficulties').value == 'easy'){
        gameboard.difficulty = 'easy'

    } else if (document.querySelector('#difficulties').value == 'medium'){
        gameboard.difficulty = 'medium'
    } else [
        gameboard.difficulty = 'hard'
    ]
}

let playerturn = false;
boxes.forEach(box => {
    box.addEventListener('click', () => {
            if(gameboard.takenList.find(elm => elm == box.className)){
              return false;
            } else {
            if(gameboard.botTargets.find(elm => elm == box.className)){
                return false
            } else {
            if(document.querySelector('#choseSide').value == 'circle'){
                box.innerHTML = `<img src="circle.png" id="icons" class ="${"c"+box.className[1] + "" +box.className[2]}">`
                gameboard.takenList.push(box.className)
                gameboard.addHit(box.className)
                if(gameboard.winCheck() !== true){botPlay()}
                gameboard.toClear.push(box.className)
            } else {
            box.innerHTML = `<img src="Cross.png" id="icons" class = "${"c"+box.className[1] + "" +box.className[2]}">`
            gameboard.takenList.push(box.className)
            gameboard.addHit(box.className)
            if(gameboard.winCheck() !== true){botPlay()}
            botPlay()
            gameboard.toClear.push(box.className)
            }
            }
            }
        box.style.padding = '34px'
    })
})
function generate(){
    let row = Math.floor(Math.random()* (4 - 1) + 1)
    let col = Math.floor(Math.random()* 3)
    return "b" + row + "" + col;

}
function botPlay(){
    for(let i = 0; i < gameboard.list.length; i++){
    let botTarget = generate()
    if(gameboard.takenList.find(elm => elm == botTarget)){
        continue
    } else if(gameboard.botTargets.find(elm => elm == botTarget)){
        continue
    } else {
            if(document.querySelector('#choseSide').value == 'circle'){
                document.querySelector('.'+botTarget).innerHTML = `<img src="Cross.png" id="icons" class ="${"c"+botTarget[1] + "" + botTarget[2]}">`
                gameboard.botTargets.push(botTarget)
                gameboard.toClear.push(botTarget)
            } else {
                document.querySelector('.'+botTarget).innerHTML = `<img src="circle.png" id="icons" class ="${"c"+botTarget[1] + "" + botTarget[2]}">`
                gameboard.botTargets.push(botTarget)
                gameboard.toClear.push(botTarget)

            }
        
        break

}
}
return false;
}
