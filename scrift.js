const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
  const navAuto=document.querySelector(".navigation-auto");
  navAuto.classList.toggle("none");
  const navMan=document.querySelector(".navigation-manual");
  navMan.classList.toggle("none");
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
});

document.querySelectorAll(".nav-link").forEach((n) =>
  n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
  })
);

//slider auto//
let count=2;
 
setInterval(()=>{
    document.querySelector("#radio"+count).checked=true;
    count++;
  
    if(count>4){
        count=1;
    }
},5000);

const enterdate=document.querySelector(".bookSelect #enter");
const exitdate=document.querySelector(".bookSelect #exit");
const selectDate=document.querySelector("input[type=date]");
const year1=document.querySelector(".year1");
const year2=document.querySelector(".year2");
const month1=document.querySelector(".month1");
const month2=document.querySelector(".month2");
const day1=document.querySelector(".day1");
const day2=document.querySelector(".day2");
const departureDate=document.querySelector(".departure");

selectDate.addEventListener("input",()=>{
  let inputDate=new Date(selectDate.value);
  enterdate.innerHTML=inputDate.getDate();
  console.log(inputDate.getMonth());
 switch(inputDate.getMonth()){
  case (0):
   month1.innerHTML="January";
    break;
    case (1):
    month1.innerHTML="February";
    break;
  case (2):
  month1.innerHTML="March";
    break;
  case (3):
  month1.innerHTML="April";
    break;
  case (4):
  month1.innerHTML="May";
    break;
  case (5):
  month1.innerHTML="June";
    break;
  case (6):
  month1.innerHTML="July";
    break;
  case (7):
  month1.innerHTML="August";
    break;
  case (8):
  month1.innerHTML="September";
    break;
  case (9):
  month1.innerHTML="October";
    break;
  case (10):
  month1.innerHTML="November";
    break;
  case (11):
  month1.innerHTML="December";
 }


 switch (inputDate.getDay()) {
  case (1):
    day1.innerHTML="Monday";
    break;
     case (2):
    day1.innerHTML="Tuesday";
    break;
    case (3):
    day1.innerHTML="Wednesday";
    break; case (4):
    day1.innerHTML="Thursday";
    break; case (5):
    day1.innerHTML="Friday";
    break; case (6):
    day1.innerHTML="Saturday";
    break; case (0):
    day1.innerHTML="Sunday";
    break;
 
  default:
    break;
 }


  
});
departureDate.addEventListener("input",()=>{
  let inputDate=new Date(departureDate.value);
  exitdate.innerHTML=inputDate.getDate();
   
  switch(inputDate.getMonth()){
  case (0):
   month2.innerHTML="January";
    break;
    case (1):
    month2.innerHTML="February";
    break;
  case (2):
  month2.innerHTML="March";
    break;
  case (3):
  month2.innerHTML="April";
    break;
  case (4):
  month2.innerHTML="May";
    break;
  case (5):
  month2.innerHTML="June";
    break;
  case (6):
  month2.innerHTML="July";
    break;
  case (7):
  month2.innerHTML="August";
    break;
  case (8):
  month2.innerHTML="September";
    break;
  case (9):
  month2.innerHTML="October";
    break;
  case (10):
  month2.innerHTML="November";
    break;
  case (11):
  month2.innerHTML="December";
 }



 switch (inputDate.getDay()) {
  case (1):
    day2.innerHTML="Monday";
    break;
     case (2):
    day2.innerHTML="Tuesday";
    break;
    case (3):
    day2.innerHTML="Wednesday";
    break; case (4):
    day2.innerHTML="Thursday";
    break; case (5):
    day2.innerHTML="Friday";
    break; case (6):
    day2.innerHTML="Saturday";
    break; case (0):
    day2.innerHTML="Sunday";
    break;
 
  default:
    break;
 }



  
});


const plus=document.querySelector(".plus");
     const minus=document.querySelector(".minus");
     const plus1=document.querySelector(".plus1");
     const minus1=document.querySelector(".minus1");
       const plus2=document.querySelector(".plus2");
     const minus2=document.querySelector(".minus2");
       
        

       let increase=1;
       const inc=()=>{
        increase=increase+1;    
        document.querySelector(".change").textContent=increase;  
       }
        plus.addEventListener("click",inc);
        
        let increas=1;
       const incr=()=>{
        increas=increas+1;    
        document.querySelector(".change1").textContent=increas;  
       }
        plus1.addEventListener("click",incr);



        minus.addEventListener("click",()=>{
            if(increase>0){
              increase=increase-1;
            document.querySelector(".change").textContent=increase;
            } });
            
            minus1.addEventListener("click",()=>{
            if(increas>0){
              increas=increas-1;
            document.querySelector(".change1").textContent=increas;
            }
            
           });
    let incream=1;
       const incrm=()=>{
        incream=incream+1;    
        document.querySelector(".change2").textContent=incream;  
       }
        plus2.addEventListener("click",incrm);



        minus2.addEventListener("click",()=>{
            if(incream>0){
              incream=incream-1;
            document.querySelector(".change2").textContent=incream;
            } });
            
            minus1.addEventListener("click",()=>{
            if(incream>0){
              increas=increas-1;
            document.querySelector(".change2").textContent=incream;
            }
            
           });
    

           const add=document.querySelectorAll(".fun");
 
          add.forEach((add)=>{
             add.addEventListener("click",()=>{
            add.classList.add('clicked');

            setTimeout(()=>{
            add.classList.remove('clicked');
            },300);
          });
          });

          const click=document.querySelector("#click");

          click.addEventListener("click",()=>{
            click.classList.add("options");

            setTimeout(()=>{
              click.classList.remove("options");
            },300)
          })


          /*-----CODE FOR extra DECORATION----*/

          