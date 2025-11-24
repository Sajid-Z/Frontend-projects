function calculator(operation){
    const num1 = document.getElementById("num1").value;
    const num2 = document.getElementById("num2").value;

    const result = document.getElementById("final_result");

    if(num1 === '' || num2 === ''){
        result.textContent = "Please Enter both numbers"; 
        result.classList.add("error");
        return;
    }

    if(operation === 'add'){
        result.value = parseFloat(num1) + parseFloat(num2);
    }
    else if(operation === 'sub'){
        result.value = parseFloat(num1) - parseFloat(num2);
    }
    else if(operation === 'mul'){
        result.value = parseFloat(num1) * parseFloat(num2);
    }
    else if(operation === 'div'){
        if(num2 == 0){
            result.textContent = "Cannot divide by zero";
            result.classList.add("error");
            return;
        }
        result.value = parseFloat(num1) / parseFloat(num2);
    }
    else if(operation === 'mod'){
        result.value = parseFloat(num1) % parseFloat(num2);
    }
    else if(operation === 'pow'){
        result.value = Math.pow(parseFloat(num1), parseFloat(num2));
    }

    result.textContent = result.value;
    result.classList.remove("error");
    
}

function clearFields(){
    document.getElementById("num1").value = '';
    document.getElementById("num2").value = '';
    const result = document.getElementById("final_result");
    result.textContent = '0';
    result.classList.remove("error");
}