const botonNumeros = document.getElementsByName("data-number")
const botonOperadores = document.getElementsByName("data-opera")
const botonIgual = document.getElementsByName("data-igual")[0]
const botonExterminar = document.getElementsByName("data-shinraTensei")[0]
let result = document.getElementById("result")
let opeActual = "";
let opeAnterior = "";
let operacion = undefined;

botonNumeros.forEach((boton)=>{
    boton.addEventListener('click', () => {
        agregarNumero(boton.innerText)
    })
})

botonOperadores.forEach((boton)=>{
    boton.addEventListener('click', () => {
        seleccionarOperacion(boton.innerText)
    })
})

botonIgual.addEventListener('click', () => {
    calcular();
    actualizaDisplay();
    

})

botonExterminar.addEventListener('click', ()=> {  
    clear();
    actualizaDisplay();
        
})

function agregarNumero(num){
    opeActual = opeActual.toString() + num.toString()
    actualizaDisplay()

}

function actualizaDisplay(){
    result.value = opeActual;
}

function clear (){
    opeActual = ''
    opeAnterior = ''
    operacion = undefined
}

function seleccionarOperacion (op){
    if(opeActual === ''){
        return;
    }

    if(opeAnterior !== ''){
        calcular();
    }

    operacion = op.toString()
    opeAnterior = opeActual;
    opeActual = ''
    
}

function calcular(){
    var calculo;
    const anterior = parseFloat(opeAnterior)
    const actual = parseFloat(opeActual)
    if(isNaN(anterior) || isNaN(actual)) return;
    switch(operacion){
        case '+':
            calculo = anterior + actual;
            break;
        case '-':
            calculo = anterior - actual;
            break;
        case 'x':
            calculo = anterior * actual;
            break;
        case '/':
            calculo = anterior / actual;
            break;
        default:
            
            break;
        
    }
    
    opeActual = calculo;
    operacion = undefined;
    opeAnterior = ''
}

