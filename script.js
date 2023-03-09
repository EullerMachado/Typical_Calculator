function add(valor){
    document.querySelector('.display').innerHTML += valor;
};

function clean(){
    document.querySelector('.display').innerHTML = '';
};

function backspace(){
    var display = document.getElementById('display').innerHTML;
    document.getElementById('display').innerHTML = display.substring(0, display.length -1);
};

function enter(){
    if (document.getElementById('display').textContent != 'erro'){
        document.getElementById('display').innerHTML = eval(display.innerHTML);
    }
};
