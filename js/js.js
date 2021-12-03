let diferencialesVitta = document.querySelector('#diferencialesVitta')
let diferencialesVittaRio = document.querySelector('#diferencialesVittaRio')
let diferencialesVittaUrbano = document.querySelector('#diferencialesVittaUrbano')

let botonVitta = document.querySelector('#vitta')
let botonVittaRio = document.querySelector('#vittaRio')
let botonVittaUrbano = document.querySelector('#vittaUrbano')

let btnSomosVitta = document.querySelector('#somosVitta')
let btnSomosVittaVittaRio = document.querySelector('#somosVittaRio')
let btnSomosVittaVittaUrbano = document.querySelector('#somosVittaUrbano')


// let menu = document.getAttribute('data-bs-toggle')


document.querySelector('.arriba').addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    })
})

//

// const observer = new IntersectionObserver((entries)=>{
//     entries.forEach(entry =>{
//         const id = entry.target.getAttribute('id')
//         const menuLink= document.querySelector(`.menu a[href="#${id}"]`)

//         if(entry.isIntersecting){
//             menuLinks.classList.add("selected")
//         }else{
//             menuLink.classList.remove("selected")
//         }
      
//     })
// })

//

//ver menu links cerrar
// let menuLinks = document.querySelectorAll('.cerrar a[href^="#"]')



// menuLinks.forEach(menuLink =>{
//     menuLink.addEventListener("click", function(){
//         menu.classList.remove("collapse")
//     })

//     const hash = menuLink.getAttribute("href")
//     const target = document.querySelector(hash)

//     if(target){
//         observer.observe(target)
//     }
// })


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




function setIframeBorder(){
    let iframeBorder = document.getElementsByTagName('iframe-border');
    for(let i = 0; i < iframeBorder.length; i++){
        let iframe = iframeBorder[i].getElementsByTagName('iframe')[0];
        let width = iframeBorder[i].getAttribute('width'); let height = iframeBorder[i].getAttribute('height');
        if(width){iframeBorder[i].style['width'] = width;} if(height){iframeBorder[i].style['height'] = height;}
        iframe.style['width'] = '100%'; iframe.style['height'] = '100%';
        iframeBorder[i].style['overflow'] = 'hidden'; iframeBorder[i].style['display'] = 'inline-block';
        iframe.style['position'] = 'relative'; iframe.style['margin'] = '0';
    }
}
setInterval(setIframeBorder, 10);








