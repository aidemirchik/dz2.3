let red = document.querySelector('.red')
let yellow = document.querySelector('.yellow')
let green = document.querySelector('.green')
let reset = document.querySelector('.reset')
let fonk = document.querySelector('.fonk')

const qwe = setInterval(()=>{

    red.addEventListener('click', ()=>{
        red.disabled = true;
        yellow.disabled = false;
        green.disabled = false;
        let fos = setTimeout(()=>{
            fonk.style.background = 'red';
            console.log('red');
        }, 1015)
        reset.addEventListener('click', ()=>{
            fonk.style.background = 'white';
            console.log('cleared');
            clearInterval(fos);
            red.disabled = false;   
            // fos.style.background = 'none';
        })
    })

    yellow.addEventListener('click', ()=>{
        yellow.disabled = true;
        red.disabled = false;
        green.disabled = false;
        let fod = setTimeout(()=>{
            fonk.style.background = 'yellow'
            console.log('yellow');
        }, 1015)
        reset.addEventListener('click', ()=>{
            fonk.style.background = 'white';
            console.log('cleared');
            clearInterval(fod);
            yellow.disabled = false;   ;
            // fod.style.background = 'none';
        })
    })

    green.addEventListener('click', ()=>{
        green.disabled = true;
        yellow.disabled = false;
        red.disabled = false;
        let fof = setTimeout(()=>{
            fonk.style.background = 'green';
            console.log('green');
        }, 1015)
        reset.addEventListener('click', ()=>{
            fonk.style.background = 'white';
            console.log('cleared');
            clearInterval(fof);
            green.disabled = false;   
            // fof.style.background = 'none';
        })
    })

})



    // let fos = setInterval(()=>{
    // red.addEventListener('click', ()=>{
    //     fonk.style.background = 'red'
    // })
    // yellow.addEventListener('click', ()=>{
    //     fonk.style.background = 'yellow'
    // })
    // green.addEventListener('click', ()=>{
    //     fonk.style.background = 'green'
    // })
    // reset.addEventListener('click', ()=>{
    //     clearInterval(fos)
    // })
// }, 3000)


    // let btnred = sv fcd x cvdzxb nhjcvudzxfm xcetTimeout(() => {
    // red.addEventListener('clicl', ()=>{
    //     fonk.style.background = 'red'
    // })
    // }, 2000)

    // yellow.addEventListener('click', ()=>{
    //     clearInterval(fos)
    //     red.disabled = false;
    //     yellow.disabled = true;
    //     green.disabled = false;
    //     fos.style.background = 'none'
    //     let fod = setInterval(()=>{
    //         fonk.style.background = 'yellow'
    //     })
    //     yellow.style.background = 'none'
    //     green.style.background = 'none'
    
    // green.addEventListener('click', ()=>{
    //     clearInterval(fos)
    //     red.disabled = false;
    //     yellow.disabled = false;
    //     green.disabled = true;
    //     red.style.background = 'none'
    //     yellow.style.background = 'none'
    //     green.style.background = 'none'
    // })

// reset.addEventListener('click', ()=>{
//     // reset.disabled = true;
//     reset = setInterval(()=>{
//         clearInterval(red, yellow, green)
//     }, 3000);
// })

// red.addEventListener('click', ()=>{
//     fonk.style.background = 'red'
//     // reset.disabled = true;   
// }, 3000);





// green.addEventListener('click', ()=>{
//     fonk.style.background = 'green'
//     // reset.disabled = true;
// }, 3000);