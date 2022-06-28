let sel_opt = document.getElementById("sel-opt")

let btn = document.getElementById("btn")

let p = document.getElementById("display")

btn.addEventListener("click",function(){
    let val = sel_opt.value;
    console.log(val);
    if(val == "open"){
        console.log("We are Open");
        p.textContent = "We are Open"
    }
    else{
        console.log("We are Closed");
        p.textContent = "We are Closed"
    }
})