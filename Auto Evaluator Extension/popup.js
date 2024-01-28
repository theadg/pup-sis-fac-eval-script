document.getElementById("evaluate").addEventListener("click", triggerEvaluation);

function getSelected() {
  return document.querySelector('.arrange input[name="automatedChoices"]:checked').value;
}

function triggerEvaluation() {
  const selectedValue = getSelected();

  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    const activeTab = tabs[0];

    chrome.scripting.executeScript({
      target: { tabId: activeTab.id },
      function: (selectedValue) => {
        document.querySelectorAll(".form-group").forEach((form) => {
          if (form.children.length === 5) {
            const index = selectedValue == 5 ? Math.floor(Math.random() * 5) : selectedValue
            Array.from(form.children[index].children)[1].click();
          }
        });
      },
      args: [selectedValue], 
    });
  });
}
