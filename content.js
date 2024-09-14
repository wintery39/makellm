// 페이지의 HTML을 가져오기
const pageHTML = document.documentElement.outerHTML;

// 백그라운드로 HTML을 전송
chrome.runtime.sendMessage({
  action: "getHTML",
  data: pageHTML
}, (response) => {
  console.log("Background response:", response.status);
});
