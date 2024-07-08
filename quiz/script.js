const lists = [
    {
        Q:'日本で一番高い山は？',
        A:'富士山', 
        B:'生駒山',
        C:'日本海',
        D:'太平洋',
        ans:1, //正解の番号
    },
    {
        Q:'日本で一番高い山は？',
        A:'富士山', 
        B:'生駒山',
        C:'日本海',
        D:'太平洋',
        ans:2, //正解の番号
    }
];

const body = document.querySelector('body')

for (let i = 0; i < lists.length; i++) {
    // html記述
    body.insertAdjacentHTML('beforeend', `
        <div id=q${i}>
            <h3>${lists[i].Q}</h3>
            <p class=a${i}>${lists[i].A}</p>
            <p class=a${i}>${lists[i].B}</p>
            <p class=a${i}>${lists[i].C}</p>
            <p class=a${i}>${lists[i].D}</p>
        </div>
    `)
}

// 問題単位のループ
for (let j = 0; j < 2; j++) {
    // 選択肢単位のループ
    for (let i = 0; i < 4; i++) {
        // 選択肢を配列に格納
        const select = document.querySelectorAll(`.a${j}`)
        // 選択肢クリック時の関数
        select[i].addEventListener('click', () => {
            console.log(select[i].textContent)
            // 正解なら赤、不正解なら青に文字色変更
            if (lists[j].ans === i+1) {
                console.log('answer')
                select[i].style.color = 'red'
            } else {
                select[i].style.color = 'blue'
            }
        })
    }
}

// ↓正しく動く
// const select = document.querySelectorAll('p')
// for (let i = 0; i < select.length; i++) {
//     select[i].addEventListener('click', () => {
//         console.log(select[i].textContent)
//         // 正解なら赤、不正解なら青にする
//         if (lists[0].ans === i+1) {
//             console.log('answer')
//             select[i].style.color = 'red'
//         } else {
//             select[i].style.color = 'blue'
//         }
//     })
// }



// // const html = () => {
// //     if (i<1 && 3<i) {`
// //         <div class=a${i}>
// //             ${listsA}:${lists[i]}
// //         </div>
// //         `
// //     } else {`
// //         <div class=a${i}>
// //             ${lists[i]}
// //         </div>
// //         `
// //     }
// // }
// const body = document.querySelector('body')

// // for (let i = 0; i < lists.length; i++) {
// //     if (i = 0) {
// //         // body.insertAdjacentHTML('beforeend', `
// //         // <div class=a${i}>
// //         //     ${lists[i]}
// //         // </div>
// //         // `)
// //         console.log('b')
// //     // } else if (i = 1 ) {
// //         // body.insertAdjacentHTML('beforeend', `
// //         // <div class=a${i}>
// //         //     ${listsA[i - 1]}:${lists[i]}
// //         // </div>
// //         // `)
// //         console.log('a')
// //     // } else {
// //         // body.insertAdjacentHTML('beforeend', `
// //         // <div class=a${i}>
// //         //     ${lists[i]}
// //         // </div>
// //         // `)
// //     }
// // }
// const answer = document.querySelector('.a5')

// const onoff = () => {
//     answer.classList.toggle('a5')
// }

// document.querySelector('.a1').addEventListener('click', onoff)

// // document.querySelector('.a1').style.color = 'red'

