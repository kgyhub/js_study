// 교과목 여섯 개가 담긴 배열을 생성하라.
// 이들 중 사용자가 좋아하지 않는 과목을 묻고
// 그 과목을 배열에서 삭제한 후에 배열을 다시 출력하라.
import { question } from 'readline-sync';

const arraySubjects = [
  'English',
  'Math',
  'Science',
  'Korean',
  'History',
  'Music',
];
console.log(arraySubjects);
const userSub = question('위의 과목 중 좋아하지 않는 과목은? ');

const unlikeIndex = arraySubjects.indexOf(userSub); // 싫은 과목 배열 숫자 찾기
arraySubjects.splice(unlikeIndex, 1); // 싫은 과목 배열 삭제
console.log(unlikeIndex);
// For (let i = 0; i < arraySubjects.length; i++) {
//   // Console.log(arraySubjects[i]);
//   // console.log(userSub);
//   if (arraySubjects[i].toString() === userSub.toString()) {
//     // Console.log(i);
//     arraySubjects.splice(i, 1);
//   }
// }

console.log(arraySubjects);
