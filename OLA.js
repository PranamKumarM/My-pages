
let btn = document.getElementById("button1")
btn.addEventListener("click", ()=>{
    let un = Number(document.querySelector("#Bike").value)

    let div=document.getElementById("s1")
    let ttl=un*5;
    div.innerHTML=`The total Charges is Rs${ttl}/-`
    div.style.color="coral"
    div.style.fontWeight="bolder"
})
let btn2 = document.getElementById("button2")
btn2.addEventListener("click", ()=>{
    let un = Number(document.querySelector("#auto").value)


    let div =document.getElementById("s1")
    let ttl=un*20;
    div.innerHTML=`The total Charges is Rs${ttl}/-`
    div.style.color="coral"
    div.style.fontWeight="bolder"
})

let btn3 = document.getElementById("button3")
btn3.addEventListener("click", ()=>{
    let un = Number(document.querySelector("#car").value)
    let div=document.getElementById("s1")
    let ttl=un*40;
    div.innerHTML=`The total Charges is Rs${ttl}/-`
    div.style.color="coral"
    div.style.fontWeight="bolder"
})



