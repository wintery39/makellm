chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === "getHTML") {
      console.log("HTML Content:", request.data);
      sendResponse({status: "success"});
    }
  });
  