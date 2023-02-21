const multiply = (first,second,third) => first*second*third;
const mulSum = multiply(1,2,3);
// console.log(total);

// backtick 

const text = `I am a web developer
I love to code
I love to eat biriani
`
// console.log(text);

const add = (num1, num2 = 0) =>num1+num2;
const sum = add(5);
// console.log(`sum of two given numbers is: ${sum}`);

const friendNames = ['rafiqul', 'khaled mussarof rubel', 'rahim','pithun','hasan','azad'];
const longName = [];
friendNames.map((name) => {
    if(name.length %2 ===0){
        longName.push(name);
        return longName;
    }
});
// console.log(longName);

const numbers = [2,2];

const averageIt = (arr)=>{
    const squareIt = arr.map(num =>num**2);
    const total = squareIt.reduce((acc,cur)=>acc+cur,0);
    const average = total/ arr.length;
    return [...squareIt,total, average];
}
const finalValues = averageIt(numbers);
// console.log(finalValues);

const names = [1,2,3,4,5];
const colors = [6,7,8,9,10];
const combinedElement = (names, colors)=>{
    const newArray = [...names,...colors];
    const maxNum = Math.max(...newArray);
    return maxNum;
}
const finalArray = combinedElement(names,colors);
console.log(finalArray);






