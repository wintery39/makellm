document.getElementById('getStyle').addEventListener('click', function() {
    // 현재 활성 탭을 가져옵니다.
    chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
      let activeTab = tabs[0]; // 활성화된 탭 정보
  
      // 스크립트를 실행합니다.
      chrome.scripting.executeScript({
        target: { tabId: activeTab.id },
        files: ['content.js']
      });
    });
});
