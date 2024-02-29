let body=document.querySelector("body");
let btn=document.querySelector("button");
let heading=document.querySelectorAll("h1");
let para=document.querySelectorAll("p");
let mode=0;
btn.addEventListener("click",()=>{
    if(mode==0){
        body.style.backgroundColor="#000";
        heading.forEach(h1=>{
            h1.style.color="#fff";
        });
        para.forEach(p=>{
            p.style.color="#fff";
        })
        mode=1;
    }
    else{
        body.style.backgroundColor="#f0f8ff";
        heading.forEach(h1=>{
            h1.style.color="";
        });
        para.forEach(p=>{
            p.style.color="";
        })
        mode=0;
    }
    
})