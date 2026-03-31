const passchars = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',
    'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z',
    '0', '1', '2', '3', '4', '5', '6', '7', '8', '9',
    '!', '@', '#', '$', '%', '^', '&', '*', '(', ')'
]

let pass1 = document.getElementById('password1');
let pass2 = document.getElementById('password2');

function generate(){
    let length = document.getElementById('length').value;

    if(length < 1 || length > 20){
        alert('Please enter a number between 1 and 20');
    } else {
        generatePassword(length);
    }
}

function generatePassword(length){

    let passwordOne = '';
    let passwordTwo = '';

    for(let i = 0; i<length; i++){
        passwordOne += passchars[Math.floor(Math.random() * passchars.length)];        
    }
    pass1.value = passwordOne;

    for(let i = 0; i<length; i++){
        passwordTwo += passchars[Math.floor(Math.random() * passchars.length)];        
    }
    pass2.value = passwordTwo;
    
}

async function copyToClipboard(elementId) {
    let copyText = document.getElementById(elementId).value;
    
    // Check if there is actually a password generated
    if (copyText) {
        try {
            await navigator.clipboard.writeText(copyText);
            alert("Password copied to clipboard: " + copyText);
        } catch (err) {
            console.error('Failed to copy: ', err);
        }
    }
}