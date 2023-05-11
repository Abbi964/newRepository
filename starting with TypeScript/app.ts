const num1Element = document.getElementById('num1') as HTMLInputElement;
const num2Element = document.getElementById('num2') as HTMLInputElement;
const buttonElement = document.querySelector('#addbtn')!;

const resultArray : Array<number> = []
const textArray : string[] = []

type numOrString = number | string
type Result = {val:number, timestamp:Date}

interface resultObj {
    val : number,
    timestamp : Date,
}

function sum(num1 : numOrString, num2 : numOrString){
    if(typeof num1 === 'number' && typeof num2 === 'number'){
        return num1 + num2
    }
    else if(typeof num1 === 'string' && typeof num2 === 'string'){
        return num1 + "  " + num2
    }
    return  +num1 + +num2
}

function printResults(resultObj : Result ){
    console.log(resultObj.val)
}

buttonElement.addEventListener('click',()=>{
    let result = +num1Element.value + +num2Element.value
    let resultStr = num1Element.value + num2Element.value
    console.log(resultStr) 
    console.log(result)
    resultArray.push(result);
    textArray.push(resultStr);
    console.log(resultArray)
    console.log(textArray)
    printResults({val:result,timestamp:new Date})
})


const myPromise = new Promise<string>((resolve,reject)=>{
    setTimeout(()=>{
        resolve('it worked')
    },1000)
})

myPromise.then((result)=>{
    console.log(result.split('w'))
})