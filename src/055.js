import { question } from 'readline-sync';

var ramdomNumber = Math.floor((Math.random()*(5-1))+1 );

console.log('1~5 숫자 입력하세요');
var select =  question() ;
if(ramdomNumber === Number(select) ){
    console.log("Well done");

}else {
    if(ramdomNumber > Number(select)){
        console.log("up!!");
        console.log("다시 입력해주세요.");
        select =  question() ;
        if(ramdomNumber === Number(select) ){
            console.log("Correct");
        }else{
            console.log("You lose");
        }
    }else{
        console.log("down!!");
        console.log("다시 입력해주세요.");
        select =  question() ;
        if(ramdomNumber === Number(select)){
            console.log("Correct");
        }else{
            console.log("You lose");
        }
    }
}
  


