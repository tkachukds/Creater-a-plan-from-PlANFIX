// подключаем  скрипты для ДОМ откытой страницы
chrome.tabs.executeScript(null, {file: 'fromDom.js'});

 //вызываем функцию из fromDom.js для изменения элемента  ДОМе открытой страницы
 function executeFunctiononDOM(txt){
     //вызываем функцию из fromDom.js для изменения элемента  ДОМе открытой страницы
     chrome.tabs.executeScript(null,  {code:txt});
 }
 
/////////////////////////////////////////////////////

snow.addEventListener("click", async () => {
     // executeFunctiononDOM("loadID();");
     executeFunctiononDOM("writeinID('txtstandart', 'hellooo')");
});









function selectedText() {	
	chrome.tabs.executeScript( null, {"code": "window.getSelection().toString()"}, function(selection) {
 var selectedText = selection[0];
		  document.getElementById("output").innerHTML = selectedText;
		});
     }

document.addEventListener('DOMContentLoaded',  selectedText());

