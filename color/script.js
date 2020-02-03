const colorBtn = document.querySelector('.colorBtn');
const bodyBcg =document.querySelector('body');

const colors = ['red', 'pink', 'brown','yellow', 'green', 'blue'];
colorBtn.addEventListener('click',changeColor);

function changeColor()
{
    let random= Math.floor(Math.random()*colors.length);
    bodyBcg.style.backgroundColor = colors[random];
    //bodyBcg.style.backgroundColor = 'blue';

}