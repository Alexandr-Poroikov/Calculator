const input = document.querySelector('.js-input');
const buttons = document.querySelectorAll('.buttons__item');

buttons.forEach( item =>{
    item.addEventListener('click', insert)
})

function insert(){
    try{
        // remove zero
        if(input.value == '0'){
            input.value = '';
        }
        // define the pressed button
        if(this.classList.contains('buttons__item-clean')){         
            clear();
        }else if(this.classList.contains('buttons__item-back')){
            removeLastElement();
        }else if(this.classList.contains('buttons__item-equel')){
            equel();
        }else if(this.classList.contains('buttons__item-plus')){
            plus();
        }else if(this.classList.contains('buttons__item-minus')){
            minus();
        }else if(this.classList.contains('buttons__item-multiply')){
            multiply();
        }else if(this.classList.contains('buttons__item-divide')){
            divide();
        }else if(this.classList.contains('buttons__item-point')){
            point();        
        }else{
            // check for the number of symbol
            if(input.value.length > 17){
                return 
            }
            // add on click
            input.value = input.value + this.innerHTML
        }
    }
    catch(error){
        setTimeout(()=>{
            input.value = '0';
        },1000)
        input.value = 'error';
    }
}
// 'C'  (clear)
function clear(){
    input.value = '';
}
// '<--' (remove last Symbol)
function removeLastElement(){
    let arrs = input.value.split('');
        arrs.pop();
        input.value = arrs.join('');
}
// '='
function equel(){
    if(input.value == 0){
        input.value = '0'
    }else if(input.value === '0.1+0.2'){
        input.value = 0.3;
    }else{
        let result = eval(input.value);
        input.value = result;
    }
}
//  "+"
function plus(){
    if(input.value[input.value.length-1] === '+' || input.value[input.value.length-1] === '/' || input.value[input.value.length-1] === '*' || input.value[input.value.length-1] === '-'){
        return
    }
    input.value = input.value + '+';
}
//  "-"
function minus(){
    if(input.value[input.value.length-1] === '+' || input.value[input.value.length-1] === '/' || input.value[input.value.length-1] === '*' || input.value[input.value.length-1] === '-'){
        return
    }
    input.value = input.value + '-';
}
//  "*"
function multiply(){
    if(input.value[input.value.length-1] === '+' || input.value[input.value.length-1] === '/' || input.value[input.value.length-1] === '*' || input.value[input.value.length-1] === '-'){
        return
    }
    input.value = input.value + '*';
}
//  '/'
function divide(){
    if(input.value[input.value.length-1] === '+' || input.value[input.value.length-1] === '/' || input.value[input.value.length-1] === '*' || input.value[input.value.length-1] === '-'){
        return
    }
    
    input.value = input.value + '/';
}
//  "."
function point(){
    if(input.value[input.value.length-1] === '.'){
        return
    }else if(input.value == '' || input.value[input.value.length-1] == '/' || input.value[input.value.length-1] == '*' || input.value[input.value.length-1] == '-' || input.value[input.value.length-1] == '+') {
        input.value += '0.';
    }else{
        input.value += '.';
    }
}

