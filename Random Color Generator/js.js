const containerEl = document.querySelector('.container')

for (let i = 0; i<50; i++){
    let colorEl = document.createElement('div');
    colorEl.classList.add('color');
    containerEl.append(colorEl)
}
const colors = document.querySelectorAll('.color');

generateColor()

function generateColor(){
    colors.forEach((color)=>{
        let newColor = randomColor()
        color.style.cssText = 'background-color: #'+ newColor;
        color.innerHTML = '#' +newColor
    })
}

function randomColor(){
    const pallete = '0123456789abcdef';
    let colorLength = 6;
    let color = ''
    for (let i=0; i<6 ; i++){
        let random = Math.floor(Math.random()*pallete.length)
        color += pallete.substring(random, random+1)
    }
    return color
}
