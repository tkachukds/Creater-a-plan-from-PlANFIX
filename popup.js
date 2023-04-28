chrome.runtime.sendMessage('start');
btn.addEventListener("click", btnClick);
let classes = "b-task-title-wrapper";
let word = document.getElementsByClassName(classes).innerText;
function btnClick() {
     alert(word);
}