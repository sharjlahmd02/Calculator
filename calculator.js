let input = document.getElementById('inputValue');
let buttons = document.querySelectorAll('button');
let string = "";
let x = Array.from(buttons);

x.forEach(button => {
    button.addEventListener(
        'click', (n) => {
            if(n.target.innerHTML == '='){
            string = eval(string);
            input.value = string;
            }

            else if(n.target.innerHTML == 'AC'){
                string = "";
                input.value = string;
            }

            else if(n.target.innerHTML == 'DEL'){
                string = string.substring(0, string.length-1);
                input.value = string;
            }
            
            else{ string += n.target.innerHTML;
            input.value = string;}

        } 
    )
})