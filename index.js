let size = prompt();

const container = document.querySelector(".container")

let v = 1

for(let i=0;i<size;i++){

    const flex = document.createElement("div");
    flex.classList.add("divs");
    for(let j=0;j<size;j++){
        const div = document.createElement("div");
        div.classList.add("inside-div");
        div.addEventListener("mouseover",function(){
            this.classList.add("draw");
        })
        flex.appendChild(div);
    }
    container.appendChild(flex);
}



function trail(size){
    v=1
    const container = document.querySelector(".container")
    container.innerHTML = "";
    for(let i=0;i<size;i++){
        const flex = document.createElement("div");
        flex.classList.add("divs");
        for(let j=0;j<size;j++){
            const div = document.createElement("div");
            div.classList.add("inside-div");
            div.addEventListener("mouseover",function(){
                this.classList.add("draw");
            })
            flex.appendChild(div);
        }
        container.appendChild(flex);
    }    
}

function trailColor(size){
    v=2
    const container = document.querySelector(".container")
    container.innerHTML = "";
    for(let i=0;i<size;i++){
        const flex = document.createElement("div");
        flex.classList.add("divs");
        for(let j=0;j<size;j++){
            const div = document.createElement("div");
            div.classList.add("inside-div");

            div.addEventListener("mouseover",function(){
                
                let r = Math.round(Math.random()*255);
                let g = Math.round(Math.random()*255);
                let b = Math.round(Math.random()*255);
                this.style.backgroundColor = `rgb(${r},${g},${b})`
                
            })
            flex.appendChild(div);
        }
        container.appendChild(flex);
    }    
}

function opacity(size){
    const container = document.querySelector(".container")
    container.innerHTML = "";
    for(let i=0;i<size;i++){
        const flex = document.createElement("div");
        flex.classList.add("divs");
        for(let j=0;j<size;j++){
            const div = document.createElement("div");
            div.classList.add("inside-div");
            div.style.opacity = 0.1

            div.addEventListener("mouseover",function(){
                if(this.style.opacity<=+1.0){
                    this.style.backgroundColor = "black"
                    this.style.opacity = +this.style.opacity + 0.1;
                }
                })
            flex.appendChild(div);
        }
        container.appendChild(flex);
    }   
} 


const shade = document.querySelector(".shade");

shade.addEventListener("click",()=>{
    opacity(size);
})



const clear = document.querySelector(".clear");


clear.addEventListener("click",function(e){
    // const blocks = document.querySelectorAll(".draw");
    // blocks.forEach(block=>{
    //     block.classList.remove("draw");
    // })
        trail(size);
})


const number = document.querySelector(".number");

number.addEventListener("click",()=>{
    size = prompt();
    if(size>100){
        size=100;
    }
    trail(size);
});


const multiColor = document.querySelector(".multi-color");

multiColor.addEventListener("click",function(){
    
        trailColor(size);
        
    });