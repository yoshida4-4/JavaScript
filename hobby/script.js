const idC = document.getElementById('C')
const C = idC.getContext('2d')

// C.strokeRect(250, 150, 50, 100)

// widthがなぜか150になっている
// 横軸(y)のループ
for (i=0; i<5; i++) {
    // 縦軸(x)のループ
    for (j=0; j<5; j++) {
        C.strokeRect(j*60+30, i*50+25, 60, 50)
    }
}
// C.beginPath();
// C.arc(60, 25, 15, 0, Math.PI*2)
// C.fill()
// C.beginPath();
// C.arc(300, 275, 15, 0, Math.PI*2)
// C.fill()

// 押さえ位置を[弦,フレット]で指定しリストに格納
const list = [[2, 1],[4, 3],[5, 4]]
for (i=0; i<list.length; i++) {
    C.beginPath();
    C.arc(list[i][1]*60, (list[i][0]-1)*50+25, 15, 0, Math.PI*2)
    C.fill()
}

// [[2, 1],[4, 3],[5, 4]]
