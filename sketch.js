
const body = document.querySelector("body");
const div  = document.querySelector("#container");
const button = document.createElement("button");
button.textContent = "change square per rows";
button.style.cssText = 'width: 30%; height: 30px; background-color: green;';
body.appendChild(button);
let user = 4;
let userLarge = 4;
let opacity = 1;
button.addEventListener("click", () => {
    div.innerHTML = "";
    user = prompt("Please give me the number of square you want to see for each row : ");
    userLarge = prompt("give the number of square for each columns");
    opacity -= 0.1;
    if(opacity == 0.1){
        opacity += 0.5;
    }
    if( user < 100){
        start();
    }else{
        alert("Your number is very big!");
    }
    
});
//let usr = prompt("Please give me the number of square you want to see for each row : ");

function start(){
    for(let i = 0; i < userLarge; i++) {
        let div1 = document.createElement("div");
        div1.style.cssText = 'display: flex; float: left; width: 100%; height: 90px'
        div.appendChild(div1);
        for(let j = 0; j < user; j++) {
            let div2 = document.createElement("div");
            div2.style.cssText = 'height: 100%; width: 25%; background-color: red; border: 2px solid yellow;';
            let colorSquare = `rgba(${Math.random()*100}, ${Math.random()*50}, ${Math.random()*90 + 30}, ${opacity} )`;
            div2.onmouseover = function() {
                this.style.backgroundColor = colorSquare;
            }
            div2.onmouseleave = function() {
                this.style.backgroundColor = colorSquare;
            }
            div1.appendChild(div2);
        }
    }
}


addEventListener("load", start);
