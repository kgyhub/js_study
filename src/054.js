import { question } from 'readline-sync';
console.log('앞면(h)과 뒷면(t) 서택하세요 (h or t)? ');
var select =  question() ;

var ramdomNumber = Math.floor(Math.random()*(2) );
var ramdomValue = "h";
console.log("ramdomNumber : "+ramdomNumber);
if(ramdomNumber === 0){
    ramdomValue = "h";
    
}else{
    ramdomValue = "t";
}
console.log("select : "+select);
console.log("ramdomValue : "+ramdomValue);

if(select == ramdomValue){
    console.log("You win");
}else{
    console.log("Bad luck");
}

