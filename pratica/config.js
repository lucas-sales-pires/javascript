
function tabuada(){
    let numero=document.getElementById('numero')
    let tabuada=document.getElementById('tabuada')
    if (numero.value.length == 0){
        window.alert('digite ao menos um número')
    }
    else{
        tabuada.innerHTML=''
        let n=Number(numero.value)
        let c = 1
        tabuada.style.display='block'
        for(c;c<=10;c++){
            let resposta=document.createElement('option')
            resposta.text=`${n}x${c}=${n*c}`
            tabuada.appendChild(resposta)
            
        }
    }
}
