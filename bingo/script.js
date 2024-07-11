const card = document.querySelector('#card')

for (let i = 1; i <= 25; i++) {
    // htmlでマス目作成
    card.insertAdjacentHTML('beforeend', `
        <div id=c${i} class="areas">${i}</div>
    `)
}

const field = document.querySelectorAll('.areas')

// 初期想定
// 13は「free」左列から15区切り
// textcontentを5で割った余りで列を判定
// 列に応じてランダムの範囲を設定

// for変数と列に応じてランダムな値を返す
const randomCreate = (i) => {
    return Math.floor(Math.random()*15+1)+(i%5*15)
}

// 同じ値を入れないよう保持しておく
const colVarList = []
// 被り判定用に値を入れる
let temp = 0
// 被り判定（while文）
const returnVar = (i) => {
    temp = randomCreate(i)
    while (colVarList.includes(temp)) {
        temp = randomCreate(i)
    }
    colVarList.push(temp)
    return temp
}

// 被り判定（再帰処理）
const returnVarSaiki = (i) => {
    temp = randomCreate(i)
    if (colVarList.includes(temp)) {
        returnVarSaiki(i)
    }
    colVarList.push(temp)
    return temp
}

// 値を反映
for (let i = 0; i < 25; i++) {
    if (i === 12) {
        field[i].textContent = 'free'
    } else {
        field[i].textContent = returnVarSaiki(i)
    }
}



