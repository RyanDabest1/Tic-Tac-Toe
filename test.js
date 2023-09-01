let array1 = [[1, 2, 3],[1, 1, 1],[2, 2, 2],[3, 3, 3],[3, 2, 1],]
let array2 = [1, 0, 10, 3, 2, 5]

function check(){
    for(let i = 0; i < array1.length; i++){
       for(let x = 0; x < array1[i].length; x++){
        return array2.includes(array1[i][x])
       }
    }
    
}
console.log((check()))