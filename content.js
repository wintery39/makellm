// 예: 특정 클래스에 스타일 변경 적용
const htmlContent = document.documentElement.outerHTML;
console.log(htmlContent);

const cssLinks = [...document.styleSheets]
  .filter(sheet => sheet.href)  // href가 있는 외부 CSS 파일만 필터링
  .map(sheet => sheet.href);

console.log(cssLinks);


const scriptLinks = [...document.scripts]
  .filter(script => script.src)  // src가 있는 외부 JavaScript 파일만 필터링
  .map(script => script.src);

console.log(scriptLinks);


document.querySelectorAll('.specific-class').forEach(function(element) {
  element.style.fontSize = '20px';
  element.style.color = 'blue';
});