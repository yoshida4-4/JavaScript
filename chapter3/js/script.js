const text = document.querySelector('#colorText')
const color = document.querySelector('#colorPicker')

// text.textContent = 'カラーコード：' + color.value;


function func() {
}

const colorBg = () => {
    document.body.style.backgroundColor = color.value

    if (color.value === '#ffffff'){
        text.textContent = `カラーコード：${color.value}(white)`
    } else if (color.value === '#000000'){
        text.textContent = `カラーコード：${color.value} (black)`
    } else {
        text.textContent = `カラーコード：${color.value}`
    }

    // text.textContent = `カラーコード： ${color.value}`
}

color.addEventListener('click', colorBg)

const message = (name, weather) => {
    console.log(`${name}さん、こんにちは！今日は${weather}です`);
};
message('a','いい天気');
message('b','雨');
message('c','雷');