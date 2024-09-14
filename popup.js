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
