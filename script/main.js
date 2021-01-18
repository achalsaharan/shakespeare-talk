
// adding event listener on the button
const translateButton = document.querySelector('#translate-button');
translateButton.addEventListener('click', handleClick);

// getting hold of the input and output elements
const translateInput = document.querySelector('#translate-input');
const translateOutput = document.querySelector('#translate-output');

// api url
const url = "https://api.funtranslations.com/translate/shakespeare.json";

function handleClick(event){

    console.log('clicked');

    let input = translateInput.value;

    // constructing the url
    const finalUrl = `${url}?text=${encodeURI(input)}`
    console.log(finalUrl);

    fetch(finalUrl)
        .then(response => response.json())
        .then(json => {
            translateOutput.innerText = json.contents.translated;
        })
        .catch(() => alert('something went wrong'))
}