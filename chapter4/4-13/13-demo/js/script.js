// 関数の定義
const getScrollPercent = () => {
  console.log('スクロールされました')
  const scrolled = window.scrollY;

  // ページ全体の高さ
  const pageHeight = document.documentElement.scrollHeight;

  // 表示領域の高さ
  const viewHeight = document.documentElement.clientHeight;

  // console.log('ページ全体の高さ' + pageHeight)
  // console.log('表示領域の高さ' + viewHeight)

  const percentage = scrolled / (pageHeight - viewHeight) * 100;
  console.log(percentage)

  // プログレスバーに幅を指定
  document.querySelector('#bar').style.width = percentage + '%';
}


// イベントの設定
// 画面全体(window)に対して、スクロールイベントを設定
window.addEventListener('scroll', getScrollPercent)