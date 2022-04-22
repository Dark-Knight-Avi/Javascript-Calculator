let screen = document.getElementById('screen');
display = document.getElementById('display');
buttons = document.querySelectorAll('button');
let screenValue = '';
for(item of buttons){
    item.addEventListener('click', (e) => {
        buttonText = e.target.innerText;
        // console.log('Button Text is ', buttonText);
        if(buttonText == '+' || buttonText == '-' ||buttonText == '×' ||buttonText == '÷' ||buttonText == '%'){
            if(buttonText == '×'){
                buttonText = '*';
            }
            screenValue += buttonText;
            display.innerText = screenValue;
            screen.value = '';
        }
        else if(buttonText == '×'){
            buttonText = '*';
        }
        else if(buttonText == 'AC'){
            display.innerText = '';
            screen.value = '';
            screenValue = ''
        }
        else if(buttonText == 'C'){
            screen.value = '';
        }
        else if(buttonText == '='){
            screen.value = eval(screenValue);
            screenValue = screen.value;
            display.innerText = ''; 
        }
        else{
            screen.value += buttonText;
            screenValue += buttonText;
        }
    })
}