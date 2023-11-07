let waste= document.querySelectorAll("body .waste")
let water= document.querySelectorAll("body .water")
let typeWater= document.querySelector(".type-water .form-select")
let fillter= document.querySelector("input[type='submit']")

let checkbox = document.querySelector(".btn-aside")
let aside = document.querySelector("aside")
checkbox.onclick = function(){
    if (checkbox.checked == true){
        aside.removeAttribute("hidden")
    } else {
        aside.setAttribute("hidden","")
        contacts.setAttribute("hidden","")
        shownoti.setAttribute("hidden","")
      }
}
let showNote = document.querySelectorAll(".show-note")
let divCont = document.querySelectorAll(".div-cont")

showNote.forEach(function(ele,ind){
    ele.onmouseover = function(){
        divCont[ind].removeAttribute("hidden")
    }
    ele.onmouseout = function(){
        divCont[ind].setAttribute("hidden","")
    }
})

let  leftLinecont = document.querySelector(".divcontacts .left-line i")
let  leftLinenote = document.querySelector(".notification .left-line i")
let contacts = document.querySelector(".divcontacts")
let numbers = document.querySelector(".numbers")
let shownoti = document.querySelector(".notification")
let notifications = document.querySelector(".notifications")
leftLinecont.onclick =function(){
    contacts.setAttribute("hidden","")
}
leftLinenote.onclick =function(){
    shownoti.setAttribute("hidden","")
}
numbers.onclick = function(){
    contacts.removeAttribute("hidden")
}
notifications.onclick = function(){
    shownoti.removeAttribute("hidden")
};
localStorage.clear();
////////////////////////////////////////////////
let contentPage = document.querySelector(".content-page")
for(let i = 0; i<Companies.length;i++){
    contentPage.innerHTML += `
    <div class="card card-RD shadow" style="border-radius:15px;height:350px">
            <img class="card-img-top h-50" src="${Companies[i].img}" alt="Card image" style="border-radius:15px;">
        <div class="card-body text-center py-0">
            <h3 class="card-title">${Companies[i].name}</h3>
            <div class="update">
                <span class="badge bg-success mb-2">اخر تحديث</span><br>
                <span class="badge bg-secondary">11:35<span class="me-1">AM</span></span>
                <span class="badge bg-secondary">5/11/2023</span>
            </div>
            <a href="#" class="btn btn-primary mt-3 linkcard" id="${Companies[i].id}">عرض البيانات</a>
        </div>
    </div>
    `
}
let Cards = document.querySelectorAll(".content-page .card")
let linkCard = document.querySelectorAll(".content-page .card .linkcard")
console.log(linkCard)
linkCard.forEach((ele)=>{
    ele.onclick = ()=>{
        localStorage.setItem("idCard",ele.id)
        window.open("companydata.html", "_self");
    }
})
////////////////////////////////////////////////////////
const homepage = ()=>{
    window.open("cmanger.html", "_self");
}
///////////////////////////////////////////////////
let subMenue = document.querySelector(".sub-menue .submenue");
let showMenue = document.querySelector(".sub-menue .showmenue");
let faangledown = document.querySelector(".sub-menue .fa-angle-down")
let faangleup = document.querySelector(".sub-menue .fa-angle-up")
subMenue.onclick = ()=>{
    console.log("htisss")
    if(showMenue.hasAttribute("hidden")){
        showMenue.removeAttribute("hidden")
        faangleup.removeAttribute("hidden")
        faangledown.setAttribute("hidden","")
    }else{
        showMenue.setAttribute("hidden","")
        faangledown.removeAttribute("hidden")
        faangleup.setAttribute("hidden","")
    }
}
