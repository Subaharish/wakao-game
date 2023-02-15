const box1 = document.querySelector('.component-1')
const box2 = document.querySelector('.component-2')
const fullBox1 = document.querySelector('.component-1 .b4-knife-img')
const cutBox1 = document.querySelector('.component-1 .after-knife-img')
const fullBox2 = document.querySelector('.component-2 .b4-knife-img')
const cutBox2 = document.querySelector('.component-2 .after-knife-img')
const fullBox3 = document.querySelector('.component-3 .b4-knife-img')
const cutBox3 = document.querySelector('.component-3 .after-knife-img')
const box3 = document.querySelector('.component-3')
const score = document.querySelector('.score-component span')

console.log("hello")
cutBox1.style.display='none'
cutBox2.style.display='none'
cutBox3.style.display='none'

let count = 0

box1.addEventListener('click',()=>{
    count++
    console.log('h1')
    fullBox1.style.display = 'none'
    cutBox1.style.display = 'block'
    cutBox1.classList.add('slide-down')
    score.textContent = count
})
box2.addEventListener('click',()=>{
    count++
    console.log('h2')
    fullBox2.style.display = 'none'
    cutBox2.style.display = 'block'
    cutBox2.classList.add('slide-down')
    score.textContent = count
})
box3.addEventListener('click',()=>{
    count++
    console.log('h3')
    fullBox3.style.display = 'none'
    cutBox3.style.display = 'block'
    cutBox3.classList.add('slide-down')
    score.textContent = count
})