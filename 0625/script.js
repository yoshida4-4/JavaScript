const btn = document.querySelector('#button');
const btn2 = document.querySelector('#button2');

const colorBg = () => {
    if (btn.style.backgroundColor === 'red'){
        btn.style.backgroundColor = 'green'
        btn.style.borderRadius = '0%'
        textAlign = 'center'


    } else {
        btn.style.backgroundColor = 'red'
        btn.style.borderRadius = '50%'
        btn.style.textAlign = 'center'
    } 

}
const colorBg2 = () => {
    if (btn2.style.backgroundColor === 'blue'){
        btn2.style.backgroundColor = 'green'
        btn2.style.borderRadius = '0%'
        textAlign = 'center'


    } else {
        btn2.style.backgroundColor = 'blue'
        // btn2.style.clipPath =  polygon();
        btn2.style.textAlign = 'center'
    } 

}

btn.addEventListener('click',colorBg)
btn2.addEventListener('click',colorBg2)