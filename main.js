// Get DOM element
let btnbold = document.getElementById("btnToggleBold");
let btnitalics = document.getElementById("btnToggleItalics");
let btnunderline = document.getElementById("btnToggleUnderline");
let txt = document.getElementById("txtInput");

//the DOM element is called here which actives once the button is clicked
btnbold.addEventListener("click", function(){
  //the function is called which actives the bold function from the css
  txt.classList.toggle("bold");
});
//the DOM element is called here which actives once the button is clicked
btnitalics.addEventListener("click", function(){
  //the function is called which actives the italic function from the css
  txt.classList.toggle("italic");

});

//the DOM element is called here which actives once the button is clicked
btnunderline.addEventListener("click", function(){
  //the function is called which actives the underline function from the css
  txt.classList.toggle("underline");

});

// The variables are called which are link to class name
const clearButton = document.getElementsByClassName('clear-button')[0],
  fontsSelect = document.getElementsByClassName('fonts-select')[0],
  styledTextArea = document.getElementsByClassName('styled-text-area')[0];
  
//when clear button is click it will active function empty string
clearButton.addEventListener('click', function() {
  styledTextArea.value = '';
});

// This changes the font when the option is changed in the website and will active the function
fontsSelect.addEventListener('change', function() {
  styledTextArea.style.fontFamily = fontsSelect.value;
});

//this makes the input field a variable which links with the textarea via its ID
let inputField = document.getElementById('txtInput');

//changing fontsize, DOM is used here to call the element by it's ID and by using an event listener linked to the action taken (change)
document.getElementById("textareafontsize").addEventListener("change", function(){
  //once the incput field has been changed, it will link this with the html
  inputField.style.fontSize = this.value + "pt";
});

//changing font color
document.getElementById("textareafontcolor").addEventListener("change",function(){
  inputField.style.color =this.value;
})


//save function
function saveFile()
{
    const output = document.getElementById ('txtInput');

    let data = output.value;

    const textToBlob = new Blob([data],{type : 'text/plain'})

    const sFileName = "saveFile.txt";

    let newFileLink = document.createElement("a");
    newFileLink.download = sFileName;

    if(window.webkitURL != null)
    {
        newFileLink.href = window.webkitURL.createObjectURL(textToBlob);
    }
    else
    {
        newFileLink.href = window.URL.createObjectURL(textToBlob);
        newFileLink.style.display = "none";
        document.body.appendChild(newFileLink);
    }

    newFileLink.click();
}
 //load function

function loadFileAsText()
{
    var fileToLoad = document.getElementById("fileToLoad").files[0];
 
    var fileReader = new FileReader();
    fileReader.onload = function(fileLoadedEvent) 
    {
        var textFromFileLoaded = fileLoadedEvent.target.result;
        document.getElementById("txtInput").value = textFromFileLoaded;
    };
    fileReader.readAsText(fileToLoad, "UTF-8");
}