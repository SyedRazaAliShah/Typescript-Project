// calculator..

import inquirer from "inquirer";

let answerse:{
    numberone:number,
    numbertwo:number,
    operator:string
} = await inquirer.prompt([
    {
        type: "number",
        name: "numberone",
        message: "kindly enter your first number",

    },{
        type: "number",
        name: "numbertwo",
        message: "kindly enter your second number",
        
    },{
        type: "list",
        name: "operator",
        choices: ["addition(+)","substraction(-)","multiplication(*)","division(/)"],
        message: "select your operator:",
        
    }
])
console.log(answerse);



let {numberone,numbertwo,operator}=answerse
if (numberone && numbertwo && operator){
let result:number=1;
    if(operator==="addition(+)"){
        result=numberone+numbertwo
    }else if(operator === "substraction(-)"){
        result=numberone-numbertwo
    }else if (operator === "multipilication(*)"){
        result=numberone*numbertwo
    }else if(operator === "division(/)"){
        result=numberone/numbertwo
    }
    console.log("your result is:",result);
}else(console.log("kindly enter valid input"))
