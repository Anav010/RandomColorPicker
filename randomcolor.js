let btn = document.querySelector("button");


btn.addEventListener("click" , function(){
    let h3 = document.querySelector("h3");
    let randomcolorselect = getcolor();
    h3.innerText = randomcolorselect;

    let div = document.querySelector(".innerbox");
    div.style.backgroundColor = randomcolorselect;
})


function getcolor(){
    let red = Math.floor(Math.random()*255);
    let green = Math.floor(Math.random()*255);
    let blue = Math.floor(Math.random()*255);

    let color = (`rgb(${red},${green},${blue})`);
    return color;
}