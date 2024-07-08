const btn = document.querySelector('#btn')

btn.addEventListener('click', () => {
    console.log('ボタンが押されました')
    document.body.classList.toggle('dark-theme')

    if (btn.textContent === 'ダークモードにする') {
        btn.textContent = 'ライトモードにする'
    } else {
        btn.textContent = 'ダークモードにする'
    }
})