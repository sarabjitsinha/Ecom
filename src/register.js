const inputEl=document.getElementById("Fullname")

inputEl.addEventListener("keyup",function(e){
    localStorage.setItem("Name",inputEl.value)
    })

let val=localStorage.getItem("Name")
console.log(val);
    