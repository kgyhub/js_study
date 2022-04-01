import { question } from 'readline-sync';

var ramdomNumber = Math.floor((Math.random()*(10-1))+1 );

while(true){
    console.log('1~10 숫자 입력하세요');
    var select =  question() ;
    if(ramdomNumber === Number(select) ){
        console.log('맞췄습니다.');
        break;
    }else {
        console.log('못 맞췄습니다. ');
    }
      
}


