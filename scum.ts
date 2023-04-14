function Scum(numbers: number[],value:number){
    let count = 0
    for(let i = 0 ; i<numbers.length;i++){
        if (value===numbers[i]){
            count++
        }

    }

    console.log("số lần xuất hiện trong mảng là: "+count)
}
let numbers = [1,2,3,4,1,8,2,1,9,54,1,5,8,1]
let value = 1
let find = Scum(numbers,value)
