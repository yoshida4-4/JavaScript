let count = 0;

const btnLists = document.querySelectorAll('div div')
console.log(btnLists)

const maruLists = [];
const batuLists = [];

// 勝利判定
// winLists に勝利パターンのリストを格納（二重のリスト）
// maruLists batuLists 手番ごとに取得している番地をリストで保持
// 勝利パターンのリストから手番のリストの要素を消す
// 消し終わって空のリストがあれば勝利

for (let i = 0; i < btnLists.length; i++) {
    btnLists[i].addEventListener('click', () => {
        // count変数を増加
        count++;
        // すでにクリックした箇所を判定させない
        if (btnLists[i].textContent === '') {
            if (count % 2 === 0) {
                // 番地の表示を変更
                btnLists[i].textContent = "×";
                // 手番の表示を変更
                document.querySelector('#turn').textContent = '先手　〇'
                // 番地の見た目を変更
                btnLists[i].classList.add('batu')
                // 手番のリストに番地を追加
                batuLists.push(i)

                const winLists = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [2, 4, 6], [0, 4, 8]]
                // winLists の中のリストをループ
                for (let j = 0; j < winLists.length; j++) {
                    // batuLists の中をループ
                    for (let k = 0; k < batuLists.length; k++) {
                        // batuLists の要素と一致したものをwinLists[][]から消したい（ループが一つ足りない+配列からの消去がうまくいかない）
                        deleteIndex = winLists[j][l].findIndex(function(k){
                            return winLists[j][l] === batuLists[k]
                        });
                        winLists[j][l].slice(deleteIndex);
                    }
                }
                for (let j = 0; j < winLists.length; j++) {
                    if (winLists[j][0] === "") {
                        document.querySelector('#turn').textContent = '勝利！'
                    }
                }

            } else {
                btnLists[i].textContent = "〇"
                document.querySelector('#turn').textContent = '後手　×'
                btnLists[i].classList.add('maru')
                maruLists.push(i)

                const winLists = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [2, 4, 6], [0, 4, 8]]
                for (let j = 0; j < winLists.length; j++) {
                    for (let k = 0; k < batuLists.length; k++) {
                        deleteIndex = winLists[j].findIndex(() => k === k);
                        winLists[j].slice(0, deleteIndex);
                    }
                }
                for (let j = 0; j < winLists.length; j++) {
                    if (winLists[j][0] === "") {
                        document.querySelector('#turn').textContent = '勝利！'
                    }
                }
            }
        }
    })
};


// const winLists = [[1, 2, 3], [4, 5, 6], [7, 8, 9], [1, 4, 7], [2, 5, 8], [3, 6, 9], [3, 5, 7], [1, 5, 9]]

// btn1-9のマスを定義(for文)
// クリックすると、した場所と同じ関数を実行(for文)

// btn1.addEventListener('click', () => {
//     count++;
//     console.log('a')
//     if (count % 2 === 0) {
//         btn1.textContent = "〇";
//     } else {
//         btn1.textContent = "×"
//     }
// })
// btn2.addEventListener('click', () => {
//     count++;
//     console.log('a')
//     if (count % 2 === 0) {
//         btn2.textContent = "〇";
//     } else {
//         btn2.textContent = "×"
//     }
// })
// btn3.addEventListener('click', () => {
//     count++;
//     console.log('a')
//     if (count % 2 === 0) {
//         btn3.textContent = "〇";
//     } else {
//         btn3.textContent = "×"
//     }
// })
// btn4.addEventListener('click', () => {
//     count++;
//     console.log('a')
//     if (count % 2 === 0) {
//         btn4.textContent = "〇";
//     } else {
//         btn4.textContent = "×"
//     }
// })
// btn5.addEventListener('click', () => {
//     count++;
//     console.log('a')
//     if (count % 2 === 0) {
//         btn5.textContent = "〇";
//     } else {
//         btn5.textContent = "×"
//     }
// })
// btn6.addEventListener('click', () => {
//     count++;
//     console.log('a')
//     if (count % 2 === 0) {
//         btn6.textContent = "〇";
//     } else {
//         btn6.textContent = "×"
//     }
// })
// btn7.addEventListener('click', () => {
//     count++;
//     console.log('a')
//     if (count % 2 === 0) {
//         btn7.textContent = "〇";
//     } else {
//         btn7.textContent = "×"
//     }
// })
// btn8.addEventListener('click', () => {
//     count++;
//     console.log('a')
//     if (count % 2 === 0) {
//         btn8.textContent = "〇";
//     } else {
//         btn8.textContent = "×"
//     }
// })
// btn9.addEventListener('click', () => {
//     count++;
//     console.log('a')
//     if (count % 2 === 0) {
//         btn9.textContent = "〇";
//     } else {
//         btn9.textContent = "×"
//     }
// })
