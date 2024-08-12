const mensajeEncriptado = document.querySelector(".evaluar")
const textEncriptar = document.querySelector(".encriptar")
const botonCopiar = document.querySelector(".btn__copiar")
const msgCopiar = document.querySelector(".msg__copiar")


function replaceBgImg(){
    const textarea = document.querySelector(".evaluar")  
    const screenWidht = window.innerWidth;

    if (screenWidht < 1024) {
        textarea.style.backgroundImage = "none"
        textarea.value = "Ningun mensaje fue encontrado"
        textarea.style.textAlign = "center"
    } else{
        textarea.style.backgroundImage = url('./images/Muñeco.png')
        textarea.value = ""
    }

}
window.onload = replaceBgImg;

window.onresize = replaceBgImg;


function btnEncriptar() {
    const texto = textEncriptar.value;
    if (texto) { 
        const textoEncriptado = encriptar(texto);
        mensajeEncriptado.value = textoEncriptado;
        textEncriptar.value = "";
        mensajeEncriptado.style.backgroundImage = "none";
    } else {
        console.error("No hay texto para encriptar");
    }
}




function encriptar(strEncriptado){
    let arrayEncriptador = [
        ["e","enter"],
            ["i","imes"],
            ["a", "ai"],
            ["o","ober"],
            ["u","ufat"]
        ]
    strEncriptado = strEncriptado.toLowerCase()

    for (let i = 0; i < arrayEncriptador.length; i++) {
       if (strEncriptado.includes(arrayEncriptador[i][0])) {
        
        strEncriptado = strEncriptado.replaceAll(arrayEncriptador[i][0], arrayEncriptador[i][1])
       }
        
    }
    return strEncriptado
}

function desencriptar(msjEncriptado){

    let arrayDesencriptador = [
        ["enter","e"],
            ["imes","i"],
            ["ai","a" ],
            ["ober","o"],
            ["ufat","u"]
        ]
    msjEncriptado = msjEncriptado.toLowerCase()

    for (let i = 0; i < arrayDesencriptador.length; i++) {
       if (msjEncriptado.includes(arrayDesencriptador[i][0])) {
        
        msjEncriptado = msjEncriptado.replaceAll(arrayDesencriptador[i][0], arrayDesencriptador[i][1])
       }
        
    }
    return msjEncriptado

}

function btnDesencriptar() {
    const texto = textEncriptar.value;
    if (texto) { 
        const textoEncriptado = desencriptar(texto);
        mensajeEncriptado.value = textoEncriptado;
        textEncriptar.value = "";

    } else {
        console.error("No hay texto para encriptar");
    }
}

async function btnCopiar(){
    const msjFinal = mensajeEncriptado.value
   try {
      await navigator.clipboard.writeText(msjFinal) 
   } catch (error) {
      console.error('error al intentar encriptar el texto', error)
   }

 msgCopiar.innerHTML = "¡Mensaje copiado con éxito!"
 
  setTimeout(()=>{
    msgCopiar.innerHTML = "Aprentado el botón podes copiar el texto encriptado"
  },3000)
   


  }








