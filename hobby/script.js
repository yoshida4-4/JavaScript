const classC = document.querySelector('.C')
const C = classC.getContext('2d')
const classD = document.querySelector('.D')
const D = classD.getContext('2d')
const classB7 = document.querySelector('.B7')
const B7 = classB7.getContext('2d')
const classEm = document.querySelector('.Em')
const Em = classEm.getContext('2d')

// 指板を描画
// 横軸(y)のループ
for (i=0; i<5; i++) {
    // 縦軸(x)のループ
    for (j=0; j<5; j++) {
        C.strokeRect(j*60+30, i*50+25, 60, 50)
        D.strokeRect(j*60+30, i*50+25, 60, 50)
        B7.strokeRect(j*60+30, i*50+25, 60, 50)
        Em.strokeRect(j*60+30, i*50+25, 60, 50)
    }
}

// 押さえ位置を[弦,フレット]で指定しリストに格納
// C
let list = [[2, 1],[4, 3],[5, 4]]
const draw = (cord, list) => {
    for (i=0; i<list.length; i++) {
        cord.beginPath();
        cord.arc(list[i][1]*60, (list[i][0]-1)*50+25, 15, 0, Math.PI*2)
        cord.fill()
    }
}
draw(C, list)
// 開放弦の扱い、関数化する予定
// xは5で固定、yは1弦が32で+50ずつ
C.font = '20px serif'
C.fillText('〇', 5, 32)
C.fillText('〇', 5, 132)
C.fillText('×', 5, 282)

let numOpen = [[4, 1], [5, 0], [6, 0]]
const openIO = (cord, numOpen) => {
    let num
    for (i=0; i<numOpen.length; i++) {
        // yの値を計算
        num = (numOpen[i][0] - 1) * 50 + 32
        cord.font = '20px serif'
        if (numOpen[i][1] === 1) {
            // 開放弦の場合
            cord.fillText('〇', 5, num)
        } else {
            cord.fillText('×', 5, num)
        }
    }
}

// C
list = [[2, 1],[4, 3],[5, 4]]
numOpen = [[1, 1], [3, 1], [6, 0]]
draw(C, list)
openIO(C, numOpen)

// D
list = [[1, 2],[2, 3],[3, 2]]
numOpen = [[4, 1], [5, 0], [6, 0]]
draw(D, list)
openIO(D, numOpen)

// B7
list = [[1, 2],[3, 2], [4, 1], [5, 2]]
numOpen = [[2, 1], [6, 0]]
draw(B7, list)
openIO(B7, numOpen)

// Em
list = [[4, 2],[5, 2]]
numOpen = [[1, 1], [2, 1], [3, 1], [6, 1]]
draw(Em, list)
openIO(Em, numOpen)