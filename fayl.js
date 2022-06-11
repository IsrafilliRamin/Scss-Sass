const menuclick = document.querySelector('.heada');
const menubar = document.querySelector('.menubar');
const close = document.querySelector('.menua');
const icon = document.querySelector('.icon');

window.addEventListener('scroll',()=>{
    mesa = window.scrollY;
    if(mesa>0){
        menubar.style.display='none';
    }
    
})

menuclick.addEventListener('click',()=>{
    menubar.style = 'left: 0';
})
close.addEventListener('click',()=>{
    menubar.style = 'left: -110';
})

window.addEventListener('scroll', ()=>{
    const mesafe = window.scrollY;
    console.log(window.scrollY)
    if(mesafe>1000){
        icon.classList.add('goster');
    }
    else{
        icon.classList.remove('goster')

    };
    
});

icon.addEventListener('click',()=>{
    window.scrollTo(0,0);
})

// icon.addEventListener('mousemove',()=>{
//     icon.innerHTML='&#8593;';
// });
// icon.addEventListener('mouseout',()=>{
//     icon.classList.add('goster');
// });

