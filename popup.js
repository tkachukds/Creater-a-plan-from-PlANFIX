// получаем кнопку
let pars = document.getElementById("btnparse");
snow.addEventListener("click", async () => {
onExtensionClick();
alert('hi');
});


function convert(n){
	var parts = n.split("/");
	var gramm =  ( ( (parts.length == 1) ? parseInt(parts[0]) : parseInt(parts[0]) / parseInt(parts[1]) ) * 28.3495231 ).toFixed(2);
	return  isNaN(gramm) ? "--" : gramm;
}

document.addEventListener('DOMContentLoaded', function() {	
	chrome.tabs.executeScript( null, {"code": "window.getSelection().toString()"}, function(selection) {
		  var selectedText = selection[0];
		  var result = "";
		  document.getElementById("output").innerHTML = selectedText;
		});
});

