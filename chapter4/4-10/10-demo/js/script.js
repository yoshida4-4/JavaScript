// チェックボックスをクリックしたら、submitボタンを利用可能にする

// 使うタグを取得する
const isAgreed = document.querySelector('#check')
const btn = document.querySelector('#btn')

isAgreed.addEventListener('change', () => {
  console.log(isAgreed.checked)

  // // もしチェックボックスにチェックが入っているなら
  // if (isAgreed.checked === true) {
  //   // 送信するボタンの無効化を解除する
  //   btn.disabled = false;
  // } else {
  //   btn.disabled = true
  // }

  btn.disabled = !isAgreed.checked
})