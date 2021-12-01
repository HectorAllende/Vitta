let diferencialesVitta = document.querySelector('#diferencialesVitta')
let diferencialesVittaRio = document.querySelector('#diferencialesVittaRio')
let diferencialesVittaUrbano = document.querySelector('#diferencialesVittaUrbano')

let botonVitta = document.querySelector('#vitta')
let botonVittaRio = document.querySelector('#vittaRio')
let botonVittaUrbano = document.querySelector('#vittaUrbano')

let btnSomosVitta = document.querySelector('#somosVitta')
let btnSomosVittaVittaRio = document.querySelector('#somosVittaRio')
let btnSomosVittaVittaUrbano = document.querySelector('#somosVittaUrbano')


document.querySelector('.arriba').addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    })
})




//Botones Diferenciales

document.querySelector('#vitta').addEventListener('click',()=>{
    
    diferencialesVitta.classList.remove("d-none")
    diferencialesVitta.classList.add("d-block")
    diferencialesVittaRio.classList.add("d-none")
    diferencialesVittaUrbano.classList.add("d-none")
    botonVitta.src = './imagenes/diferenciales/vitta/vittaActivado.png'
    botonVittaRio.src = './imagenes/diferenciales/vittaRio/vittaRioDesactivado.png'
    botonVittaUrbano.src ='./imagenes/diferenciales/vittaUrbano/VIttaUrbanoDesactivado.png'    
} )

document.querySelector('#vittaRio').addEventListener('click',()=>{

    diferencialesVittaRio.classList.remove("d-none")
    diferencialesVittaRio.classList.add("d-block")
    diferencialesVitta.classList.add("d-none")
    diferencialesVittaUrbano.classList.add("d-none")
    botonVittaRio.src = './imagenes/diferenciales/vittaRio/vittaRioActivado.png'
    botonVitta.src = './imagenes/diferenciales/vitta/vittaDesactivado.png'
    botonVittaUrbano.src =  './imagenes/diferenciales/vittaUrbano/VIttaUrbanoDesactivado.png'  
} )

document.querySelector('#vittaUrbano').addEventListener('click',()=>{

    diferencialesVittaUrbano.classList.remove("d-none")
    diferencialesVittaUrbano.classList.add("d-block")
    diferencialesVittaRio.classList.add("d-none")
    diferencialesVitta.classList.add("d-none")
    botonVitta.src = './imagenes/diferenciales/vitta/vittaDesactivado.png'
    botonVittaRio.src ='./imagenes/diferenciales/vittaRio/vittaRioDesactivado.png'
    botonVittaUrbano.src = './imagenes/diferenciales/vittaUrbano/vittaUrbanoActivado.png'
} )


//Botones Somos



document.querySelector('#somosVitta').addEventListener('click', ()=>{
    btnSomosVitta.src = "./imagenes/somos/vitta/vittaAct.png"
    btnSomosVittaVittaRio.src = "./imagenes/somos/vittaRio/rioDesactivado.png"
    btnSomosVittaVittaUrbano.src = "./imagenes/somos/vittaUrbano/vittaUrbanoDesactivado.png"
})

document.querySelector('#somosVittaRio').addEventListener('click', ()=>{
    btnSomosVitta.src = "./imagenes/somos/vitta/vittadesactivado.png"
    btnSomosVittaVittaRio.src = "./imagenes/somos/vittaRio/VittaRioAct.png"
    btnSomosVittaVittaUrbano.src = "./imagenes/somos/vittaUrbano/vittaUrbanoDesactivado.png"
})

document.querySelector('#somosVittaUrbano').addEventListener('click', ()=>{
    btnSomosVitta.src = "./imagenes/somos/vitta/vittadesactivado.png"
    btnSomosVittaVittaRio.src = "./imagenes/somos/vittaRio/rioDesactivado.png"
    btnSomosVittaVittaUrbano.src = src="./imagenes/somos/vittaUrbano/UrbanoAct.png" 
})




