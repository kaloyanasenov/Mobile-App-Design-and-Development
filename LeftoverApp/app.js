const storageInput = document.getElementById('input-text');
const saveTextLocal = document.getElementById('btn-saveL');
const getTextLocal = document.getElementById('btn-getL');


//Local Storage
saveTextLocal.addEventListener('click', saveToLocalStorage);
getTextLocal.addEventListener('click', getLocalStorage);


function saveToLocalStorage(){
    localStorage.setItem('textInput', storageInput.value);
    console.log("Saved to Local Storage");
}

function getLocalStorage(){
    const localData = localStorage.getItem('textInput');
    //this puts out the text
    document.getElementById("output-text").innerHTML = localData;
    console.log("Local data is ", localData);
}







