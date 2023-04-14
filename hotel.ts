let matrix = [[0,1,1,2],[0,5,0,0],[2,0,3,3]]
for(let i = 0; i<matrix.length;i++){
     for(let j = 0;j<matrix.length;j++){
         if (matrix[i][j] === 0) {
             matrix[i].splice(j, 1)
             j--
}





     }

//     console.log(matrix[1][1])
//     break;
//
}
console.log(matrix)
let sum = matrix.reduce((tota,current)=>
{
    // @ts-ignore
    let total = current.reduce((ar, tr) => ar + tr, 0);

    return total + total
},0)
console.log(sum)
