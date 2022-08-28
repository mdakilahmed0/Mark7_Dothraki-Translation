var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input");
var outputDiv = document.querySelector("#output");

var serverURL = "https://api.funtranslations.com/translate/dothraki.json";

function getServerURL(text) {
  return serverURL + "?" + "text=" + text;
}

function errorHandler(error) {
  console.log("Error Occured", error);
}

function clickHandler() {
  var inputText = txtInput.value;

  fetch(getServerURL(inputText))
    .then((response) => response.json())
    .then((json) => {
      var translatedText = json.contents.translated;
      outputDiv.innerText = translatedText;
    })
    .catch(errorHandler);
}

btnTranslate.addEventListener("click", clickHandler);