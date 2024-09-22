document.addEventListener('DOMContentLoaded', () => {
  const loadHtmlButton = document.getElementById('load-html');
  const htmlContentElement = document.getElementById('html-content');

  loadHtmlButton.addEventListener('click', () => {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      chrome.scripting.executeScript({
        target: { tabId: tabs[0].id },
        function: getHtmlContent
      }, (results) => {
        console.log(results);
        if (results && results[0] && results[0].result) {
          htmlContentElement.textContent = results[0].result;
        }
      });
    });
  });

  function getHtmlContent() {
    return document.documentElement.outerHTML;
  }
});

document.addEventListener('DOMContentLoaded', () => {
  const changeHtmlButton = document.getElementById('change-html');
  
  // change-html 버튼이 존재하는지 확인
  if (changeHtmlButton) {
    changeHtmlButton.addEventListener('click', () => {
      chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        chrome.scripting.executeScript({
          target: { tabId: tabs[0].id },
          function: modifyHtmlAndCss
        });
      });
    });
  } else {
    console.error("change-html 버튼을 찾을 수 없습니다.");
  }
});

function modifyHtmlAndCss() {
  const specificTkBoxDiv = document.querySelector('div.tk_box > fieldset.box01');
  if (specificTkBoxDiv) {
    const parentDiv = specificTkBoxDiv.closest('.tk_box');
    if (parentDiv) {
      parentDiv.classList.remove('tk_box'); 
      parentDiv.classList.add('mynewcss');
      console.log('tk_box div found:', parentDiv);
    }
  }
}