
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
///////////////////////////////////////////////////
const homepage = ()=>{
    window.open("cmanger.html", "_self");
}
///////////////////////////////////////////////////

let nameid = localStorage.getItem("idCard")
let namearray = null;
Companies.map((ele,ind)=>{
    if(ele.id === nameid){
        namearray = ind
    }
})
let contentComp = document.querySelector(".content-comp");
let titlecomp = `
<div class="divtitle">
    <h3>${Companies[namearray].infcomp.namecomp}</h3>
    <h4>${Companies[namearray].infcomp.management}</h4>
</div>
`
contentComp.innerHTML += titlecomp;
let cont = `
<div class="divcont">
<!-- Nav tabs -->
<ul class="nav nav-tabs">
    <li class="nav-item">
    <a class="nav-link active bg-success" data-bs-toggle="tab" href="#home">هيكل الإدارة</a>
    </li>
    <li class="nav-item">
    <a class="nav-link bg-primary" data-bs-toggle="tab" href="#menu1">العاملين بالإدارة</a>
    </li>
    <li class="nav-item">
    <a class="nav-link bg-info" data-bs-toggle="tab" href="#menu2">المخصصات المالية</a>
    
    </li>
</ul>

<!-- Tab panes -->
<div class="tab-content">
    <div class="tab-pane container active" id="home">
        <div class="structure">
            <div>
                <h4 data-bs-toggle="modal" data-bs-target="#myModal">رئيس مجلس الإدارة والعضو المنتدب</h4>
                <i class="fa-solid fa-arrow-down fa-2xl"></i>
            </div>
            <div>
                <h4 data-bs-toggle="modal" data-bs-target="#myModal">المكتب الفني</h4>
                <i class="fa-solid fa-arrow-down fa-2xl"></i>
            </div>
            <div>
                <h4 data-bs-toggle="modal" data-bs-target="#myModal">إدارة البحوث والتطوير</h4>
                <i class="fa-solid fa-arrow-down fa-2xl"></i>
            </div>
            <div class="cont-struc">
                <h4 data-bs-toggle="modal" data-bs-target="#myModal">إدارة بحوث مياه</h4>
                <h4 class="mx-2" data-bs-toggle="modal" data-bs-target="#myModal">إدارة الاتصال العلمى ونقل التكنولوجيا</h4>
                <h4 data-bs-toggle="modal" data-bs-target="#myModal">إدارة بحوث صرف</h4>
            </div>
        </div>
    </div>
    <div class="tab-pane container fade" id="menu1">
        <div class="admin_staff">
            <div class="table-responsive">          
                <table class="table table-bordered text-center table-hover">
                  <thead>
                    <tr>
                      <th>م</th>
                      <th>الاسم</th>
                      <th>المؤهل</th>
                      <th>سنة التخرج</th>
                      <th>التخصص</th>
                      <th>الدرجة الوظيفية</th>
                      <th>الوظيفة الحالية</th>
                      <th>بيانات الاتصال</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>مروان ابراهيم مروان</td>
                      <td>بكالوريوس هندسة</td>
                      <td>2019</td>
                      <td>قسم كهرباء (قوى وتحكم)</td>
                      <td>الثالثه</td>
                      <td>مدير إدارة البحوث والتطوير</td>
                      <td>
                        <a href="tel:+01554449498" class="ms-3 text-primary call text-decoration-none">
                            <i class="fa-solid fa-square-phone-flip fa-2xl"></i>
                        </a>
                        <a href="https://wa.link/1ouud7" class="ms-1 text-success whats" target="_blank">
                            <i class="fa-brands fa-square-whatsapp fa-2xl"></i>
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>راندا مختار محمد</td>
                      <td>ماجستير الميكروبيولوجي</td>
                      <td>2020</td>
                      <td>الميكروبيولوجي</td>
                      <td>الثالثه</td>
                      <td>كميائية بإدارة البحوث والتطوير</td>
                      <td>
                        <a href="tel:+01211935857" class="ms-3 text-primary call text-decoration-none">
                            <i class="fa-solid fa-square-phone-flip fa-2xl"></i>
                        </a>
                        <a href="https://wa.link/3cl6og" class="ms-1 text-success whats" target="_blank">
                            <i class="fa-brands fa-square-whatsapp fa-2xl"></i>
                        </a>
                      </td>
                    </tr>
                  </tbody>
                </table>
                </div>
        </div>
    </div>
    <div class="tab-pane container fade" id="menu2">
        <h5 class="text-center mb-4 pt-3"> القيم المالية المستحقة لإدارة البحوث والتطوير للعام المالى 2023 - 2024 </h5>
        <div class="table-responsive">          
            <table class="table table-bordered text-center table-hover">
              <thead>
                <tr>
                  <th>م</th>
                  <th>الأهداف الإستراتيجية</th>
                  <th>مؤشر الاداء</th>
                  <th>القيمة المالية المستحقة (جم)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>(المنصة الرقمية) Digital Platform</td>
                  <td>
                      <span>30%</span>
                    <div class="progress">
                        <div class="progress-bar" style="width:30%"></div>
                    </div>
                  </td>
                  <td>30,000</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>معالجة مياه الابار لعدد محطه بإستخدام Nano Chitozan للتخلصمن الحديد والمنجنيز</td>
                  <td>
                    <span>15%</span>
                    <div class="progress">
                        <div class="progress-bar bg-info" style="width:15%"></div>
                    </div>
                  </td>
                  <td>150,000</td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>معالجة الحمأة باستخدام الكمر لتحويلها الى كمبوست 
                    لعدد محطه</td>
                  <td>
                    <span>15%</span>
                    <div class="progress">
                        <div class="progress-bar bg-info" style="width:15%"></div>
                    </div>
                  </td>
                  <td>120,000</td>
                </tr>
                <tr>
                  <td>4</td>
                  <td>استخدام قشور الارز فى معالجة الصرف الصحي لازالة المعادن الثقيلة السامه
                    لعدد محطة</td>
                  <td>
                    <span>5%</span>
                    <div class="progress">
                        <div class="progress-bar bg-success" style="width:5%"></div>
                    </div>
                  </td>
                  <td>150,000</td>
                </tr>
              </tbody>
              <tfoot class="bg-success text-white h6">
                <tr>
                    <td colspan="3">اجمالى القيم المالية المستحقة</td>
                    <td colspan="1">450,000</td>
                </tr>
              </tfoot>
            </table>
            </div>
    </div>
</div>
</div>
`
if(namearray === 0){
    contentComp.innerHTML += cont;
}
let Modelinfo =`
    <div class="modal" id="myModal">
    <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">

        <!-- Modal Header -->
        <div class="modal-header">
            <h4 class="modal-title"></h4>
            <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
        </div>
        <!-- Modal body -->
        <div class="modal-body d-flex justify-content-between align-items-center">
            <h3 class="d-flex"></h3>
            <div class="d-flex">
                <a href="" class="ms-1 text-primary call">
                <i class="fa-solid fa-square-phone-flip fa-2xl"></i>
                </a>
                <a href="" class="ms-1 text-success whats" target="_blank">
                    <i class="fa-brands fa-square-whatsapp fa-2xl"></i>
                </a>
            </div>
        </div>

        <!-- Modal footer -->
        <div class="modal-footer">
            <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Close</button>
        </div>

        </div>
    </div>
    </div>
`


contentComp.innerHTML += Modelinfo;


let namestruc = document.querySelectorAll(".content-comp .structure h4")
console.log(namestruc)
let modalTitle = document.querySelector(".content-comp .modal-title")
let modalBody = document.querySelector(".content-comp .modal-body h3")
let call = document.querySelector(".content-comp .modal-body .call")
let whats = document.querySelector(".content-comp .modal-body .whats")
namestruc.forEach((ele,index)=>{
    ele.onclick = function(){
        if(index > 2){
            modalTitle.innerHTML = Companies[namearray].infcomp.structure[3][index-3].partname2;
            modalBody.innerHTML = Companies[namearray].infcomp.structure[3][index-3].name;
            call.href = Companies[namearray].infcomp.structure[3][index-3].Lphone;
            whats.href = Companies[namearray].infcomp.structure[3][index-3].Lwhats;
        }else{
            modalTitle.innerHTML = Companies[namearray].infcomp.structure[index].partname2;
            modalBody.innerHTML = Companies[namearray].infcomp.structure[index].name;
            call.href = Companies[namearray].infcomp.structure[index].Lphone;
            whats.href = Companies[namearray].infcomp.structure[index].Lwhats;
        }
        console.log(call.href)
        if (modalBody.innerHTML ==="لا يوجد"){
            call.setAttribute("hidden","")
            whats.setAttribute("hidden","")
        }else{
            call.removeAttribute("hidden")
            whats.removeAttribute("hidden")
        }
    }

})

