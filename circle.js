console.log(document.getElementsByName('nam').values)
var a, myh2, result;
myh2 = document.getElementById("MyH2");
result = document.getElementById("Result");
let r, g, b = 0
document.getElementById("btn").addEventListener('click', () => {

    document.body.style.color = `rgb(${r},${g},${b})`
    r = Math.floor(Math.random() * 254 + 1)
    g = Math.floor(Math.random() * 254 + 1)
    b = Math.floor(Math.random() * 254 + 1)
    document.body.style.backgroundColor = `rgb(${r},${g},${b})`

    document.title = `rgb(${r},${g},${b})`



})

//let myp = document.getElementsByClassName("c1")[1].getAttributeNode('d').specified
console.log(document.activeElement.tagName);
document.addEventListener('click', e =>
    console.log(document.hasFocus()))