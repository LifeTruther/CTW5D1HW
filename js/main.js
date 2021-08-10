/*
    Code Wars 1st question:
    https://www.codewars.com/kata/515e271a311df0350d00000f    
    function squareSum(numbers){
    let sum = 0;
    for(let i = 0; i < numbers.length; i++){
        numbers[i] = numbers[i] ** 2;
        sum += numbers[i];
    }
    return sum;
    }

    Code Wars 2nd question:
    https://www.codewars.com/kata/55908aad6620c066bc00002a/train/javascript
    function XO(str) {
    //code here
    let xcount = 0
    let ocount = 0
    for (let i = 0; i < str.length; i++){
        if (str[i].toLowerCase() == 'o'){
        ocount += 1
        } else if (str[i].toLowerCase() == 'x'){
        xcount += 1
        }
    } if (xcount == ocount){
        return true
    } else {
        return false
    }
    }
*/

//==================Exercise #1 ==========//
/*Write a function that takes in the string and the list of dog names, loops through 
the list and checks that the current name is in the string passed in. The output should be:
"Matched dog_name" if name is in the string, if no matches are present console.log "No Matches"
*/
let dog_string = "Hello Max, my name is Dog, and I have purple eyes!"
let dog_names = ["Max","HAS","PuRple","Dog"]

let findWords = (stringx, listx) =>{
    //Your code goes here
    let count = 0;
    for (let i = 0; i < listx.length; i ++){
        if (stringx.includes(dog_names[i])){
            console.log(`Matched ${dog_names[i]}`)
            count ++
        } 
    } if (count == 0){
        console.log("No Matches")
    } else{
        console.log("That's all the matches!")
    }
};
console.log(findWords(dog_string, dog_names))


//Call method here with parameters

//============Exercise #2 ============//
/*Write a fucntion that takes in an array and removes every value that's double is over 50.
*/

let given_arr = [13, 22, 26, 40, 1, 10]

let replaceBigs = (arr) =>{
    //code goes here
    let x = arr.length
    for (let i = 0; i < x; i ++){
        if (arr[i] * 2 > 50){
            arr.splice(i,1)
            x -= 1
            i -= 1
        }
    }
}
replaceBigs(given_arr)
console.log(given_arr)
//Expected output
//Given arr == [13, 22, 26, 40, 1, 10]
//Output arr == [13, 22, 1, 10]
//Explanation: 13*2 < 50, 22*2 < 50, 26*2 > 50, etc...