document.addEventListener('DOMContentLoaded', function () {
    const buttons = document.querySelectorAll('.color-btn');
  
    buttons.forEach(button => {
      button.addEventListener('click', function () {
        const color = this.id;
        changeBackgroundColor(color);
      });
    });
  
    function changeBackgroundColor(color) {
      chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        chrome.scripting.executeScript({
          target: { tabId: tabs[0].id },
          function: setColor,
          args: [color]
        });
      });
    }
  
    function setColor(color) {
      document.body.style.backgroundColor = color;
    }
  });
  