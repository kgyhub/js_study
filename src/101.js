import { question } from 'readline-sync';

/* 100번 프로그램을 사용하여 사용자에게 이름과 지역을 입력하라고 요청하고 그와 관련된 데이터를 출력한다.
사용자에게 변경하려는 데이터의 이름과 지역을 사용자에게 묻고 매출 수치를 변경할 수 있도록 한다.
선택한 이름에 대한 모든 지역의 매출을 출력하라. */
const salesData = {
  John: { N: 3056, S: 8463, E: 8441, W: 2694 },
  Tom: { N: 4832, S: 6786, E: 4737, W: 3612 },
  Anne: { N: 5239, S: 4802, E: 5802, W: 1859 },
  Fiona: { N: 3904, S: 3645, E: 8821, W: 2451 },
};
console.log(salesData);

const userName = question('이름을 입력하세요. : ');
const userLocation = question('지역을 입력하세요 (N/S/E/W) : ');

console.log(salesData[userName][userLocation]);

const userSales = Number(question('새로운 매출수치를 입력해주세요.'));
salesData[userName][userLocation] = userSales;

console.log(salesData[userName]);
