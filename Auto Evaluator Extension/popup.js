document
  .getElementById("evaluate")
  .addEventListener("click", triggerEvaluation);

function triggerEvaluation() {
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    const activeTab = tabs[0];

    chrome.scripting.executeScript({
      target: { tabId: activeTab.id },
      function: () => {
        document.querySelectorAll(".form-group").forEach((form) => {
          if (form.children.length === 5) {
            const randomChildIndex = Math.floor(Math.random() * 5);
            Array.from(form.children[randomChildIndex].children)[1].click();
          }
        });
      },
    });
  });
}
