const menu = document.querySelector('#menu');

const strawberry = {
    name: 'イチゴ',
    img: 'strawberry.jpg',
    price: 450,
}

console.log(strawberry)
console.log(strawberry.name)
console.log(strawberry['img'])
console.log(strawberry.price)

const key = 'name'
console.log(strawberry.key)
console.log(strawberry[key])

const lists = [
    {
        name: 'イチゴ',
        img: 'strawberry.jpg',
        price: 450,
    },
    {
        name: 'ライム',
        img: 'lime.jpg',
        price: 400,
    },
    {
        name: 'マンゴー',
        img: 'mango.jpg',
        price: 500,
    },
    {
        name: 'レモン',
        img: 'lemon.jpg',
        price: 400,
    },
    {
        name: 'イチジク',
        img: 'fig.jpg',
        price: 500,
    },
    {
        name: 'リンゴ',
        img: 'apple.jpg',
        price: 400,
    },
]

// console.log(lists[0])
// console.log(lists[4])
// console.log(lists[7])



// menu.textContent = content



for (let i = 0; i < lists.length; i++) {
    const content = `
    <div>
        <img src="images/${lists[i].img}" alt="">
        <h2>${lists[i].name}</h2>
        <p>${lists[i].price}円</p>
    </div>
    `
    menu.insertAdjacentHTML('beforeend', content)
}

// const apple = {
//     // key: value
//     name: 'リンゴ',
//     color: '赤',
//     price: 100,
//     size: 'small',
//     area: '青森県'
// }

const taberogu = {
    name: '店名',
    region: '地域',
    area: '都道府県',
    address: '住所',
    tel: '電話番号',
    evaluation: '評価',
    price: '価格帯',
    type: '食事の種類',
    menu: 'メニュー',
    foodimg: 'ごはんの画像',
    restaurantimg: '店の画像',
    yasumi: '休み'
}