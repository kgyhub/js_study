// 정수들을 저장할 배열을 생성한다. 임의의 수 다섯 개를 생성하고 배열에 저장한다. 배열의 항목을 한 줄에 하나씩 출력하라.

const arrayNumbers = [];
for (let i = 0; i < 5; i++) {
  arrayNumbers.push(Math.floor(Math.random() * 1000) + 1);
}

for (const one of arrayNumbers) {
  console.log(one);
}

for (const one of arrayNumbers) console.log(one);
