var form = document.querySelector("form");

var totalMarks = 550;

form.addEventListener("submit", function(e){
    e.preventDefault()
   MarkSheet()
})

function MarkSheet (){
    let math = parseInt(document.getElementById("math").value);
    let english = parseInt(document.getElementById("english").value);
    let physics = parseInt(document.getElementById("physics").value);
    let urdu = parseInt(document.getElementById("urdu").value);
    let islamiat = parseInt(document.getElementById("islamiat").value);
    let computer = parseInt(document.getElementById("computer").value);
   let totalObtained = math + english + physics + urdu + islamiat + computer 
   if(totalObtained > totalMarks){
    Swal.fire({
        title: "Something Went Wrong",
        text: "Please Enter Correct Marks",
        icon: "error"
      });
   }else{
    let percentage = (totalObtained / totalMarks) * 100;
    let fixesPercantages = percentage.toFixed(2)
 
    Swal.fire({
     title: `Obtained Marks is ${totalObtained} and Percantages is ${fixesPercantages}`,
     showClass: {
       popup: `
         animate__animated
         animate__fadeInUp
         animate__faster
       `
     },
     hideClass: {
       popup: `
         animate__animated
         animate__fadeOutDown
         animate__faster
       `
     }
   });
   }
 
}