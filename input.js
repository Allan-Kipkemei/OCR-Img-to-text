let Lead=[]
const lead=document.getElementById("input")
const btn=document.getElementById("input-btn")
const btn2=document.getElementById("btn-el")

btn.addEventListener("click",function(){
    Lead.push(lead.value)
    console.log(Lead)
})

function renderList(){
    list=""
    for(let i=0;i<Lead.length;i++){
        List+= "<li>"Lead[i] "</li>"
    }
btn2.innerHTML=list
}
