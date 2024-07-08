const ansok = document.querySelector('#answer');
const ansng = document.querySelector('.ng')
 
const ansOk = () => {
    if (ansok.textContent === '北岳') {
        ansok.textContent = `${ansok.textContent}　〇`
        ansok.style.color = 'red'
        ansok.style.fontSize = '180%'

    } else {
        ansok.textContent = '北岳'
        ansok.style.color = 'black'
        ansok.style.fontSize = '150%'
    }
}

const ansNg = () => {
    if (ansng.style.color === 'black') {
        ansng.textContent = ``
    }
}

ansok.addEventListener('click', ansOk)

