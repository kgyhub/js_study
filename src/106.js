// ‘Names.txt’라는 이름의 새로운 파일을 생성한다. 다섯 명의 이름을 한 줄에 하나씩 문서에 추가한다.
// 프로그램을 실행한 후에 이 프로그램이 저장된 위치에 해당 파일이 제대로 생성되었는지 확인하라.
import wf from 'node:fs';

let content = 'john \n';
content += 'sujan \n';
content += 'kim \n';
content += 'park \n';
content += 'hyun \n';

wf.writeFile('Names.txt', content, (error) => console.log(error));
