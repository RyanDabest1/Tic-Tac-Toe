let boxes = document.querySelectorAll('#box')
let gameboard = {
    rows : 3,
    col : 3,
    takenList : [],
    list : ['b10','b11','b12',
            'b20','b21','b22',
            'b30','b31','b32'
],
    botTargets : []


}
let playerturn = false;
boxes.forEach(box => {
    box.addEventListener('click', () => {
        if(document.querySelector('#choseSide').value == 'circle'){
            box.innerHTML = `<img src="circle.png" id="icons">`
            gameboard.takenList.push(box.className)
            botPlay()
        } else {
            box.innerHTML = `<img src="Cross.png" id="icons">`
            gameboard.takenList.push(box.className)
            botPlay()
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
        console.log(botTarget)
        gameboard.botTargets.push(botTarget)
            if(document.querySelector('#choseSide').value == 'circle'){
                document.querySelector('.'+botTarget).innerHTML = `<img src="Cross.png" id="icons">`
                gameboard.botTargets.push(botTarget)
            } else {
                document.querySelector('.'+botTarget).innerHTML = `<img src="circle.png" id="icons">`
                gameboard.botTargets.push(botTarget)
            }
        
        break

}
return false;

    }
}