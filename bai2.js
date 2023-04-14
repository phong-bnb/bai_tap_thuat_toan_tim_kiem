// function numberphone(numbers:number[],value:number){
//     let viettel = []
//     let vina = []
//     let mobi = []
//     for (let i = 0;i<numbers.length;i++){
//        if(value===383){
//            viettel.push(nu)
//        }
//     }
// }
// let numbers = [0942903433, 0383299536,0372792019]
// let value = 0383299536
var numbers = ["0942903433", "0383299536", "0372792019", "0856789012"];
var viettel = [];
var vina = [];
var mobi = [];
for (var i = 0; i < numbers.length; i++) {
    var scum = numbers[i].substring(0, 3);
    switch (scum) {
        case "089":
        case "090":
        case "093":
        case "070":
        case "079":
            mobi.push(numbers[i]);
            break;
        case "086":
        case "096":
        case "097":
        case "098":
        case "038":
        case "037":
            viettel.push(numbers[i]);
            break;
        case "088":
        case "091":
        case "094":
        case "083":
        case "084":
            vina.push(numbers[i]);
            break;
        default:
            console.log("Số điện thoại không thuộc bất kỳ nhà mạng nào" + numbers[i]);
            break;
    }
}
console.log("nhà mạng vina: " + vina);
console.log("nhà mạng vittel: " + viettel);
console.log("nhà mạng mobi: " + mobi);
