const text = document.querySelector('#text')
const ans = document.querySelector('#ans')
const OK = document.querySelector('#OK')

ans.addEventListener('keyup', () => {
    console.log('key')
    if (text.textContent === ans.value) {
        OK.textContent = 'OK'
    }
})