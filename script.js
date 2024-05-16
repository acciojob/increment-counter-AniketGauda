//your JS code here. If required.
let cnt=0;

let p = document.getElementById("counter");
let btn = document.getElementById("incrementBtn");

btn.addEventListener("click",()=>{
    alert(cnt);
    cnt++;
    p.textContent = `${cnt}`;
})