console.log("hello");

function showName(){
  // console.log("john wick");
//   console.log (document.getElementsByClassName("gangofthree")[0].style.color="green") 


 
  document.getElementById("img").src="https://www.mydomaine.com/thmb/PFdlNGqEI8Tdi9ME3npVP1NbthI=/1080x0/filters:no_upscale():strip_icc()/109279009_351396605853902_7295779758661156090_n-d9f39c14c3054865927cd9f8deb1d548.jpg"
 let btncolor;
   btncolor = document.getElementById("changed")
  if(btncolor.style.backgroundColor=="red"){
     btncolor.style.backgroundColor="green";
  }
  else{

    btncolor.style.backgroundColor="red";
  }
  // console.log(`random number is ${Math.floor(Math.random()*255)}`);  //random number generation math.random
  
let r,g,b,color;  
r=Math.floor(Math.random()*255)
g=Math.floor(Math.random()*255)  //random color generation
b=Math.floor(Math.random()*255)
color=`rgb(${r},${g},${b})`
document.getElementById("box").style.backgroundColor=color;
}
  
(()=> {
    console.log("arrow function");
})()

function getName(e){
     const cl=e.target.value;
      document.getElementById("box").style.backgroundColor=cl;

}

// function sum(num1,num2,p){
 // p(num1+num2)
 //}
//function print(res){
//  console.log(res);   //higher order function,call back function
 //}
//sum(1,2,print) 
 
let student1 = {
  age: 22,
  phone: 678499045,
  name:"dhanush",
  address: {
    home: {place:"palakkad"},
    college:{place:"kochi"}
  }
}
let student2 = {
  age: 21,
  phone: 678499045,
  name:"deepu",
  address: {
    home: {place:"kollam"},
    college:{place:"kochi"}
  }
}
let students=[student1,student2]
console.log(students[0].address);

// name type validation check func
function checkname(e){
     let name = e.target.value;
     console.log(name.length);
     if(name.length <3 || name.length>12){
      console.log("nameError: name btw 3 & 12");
      document.getElementById("nameError").innerText="name must be btw 3-12 characters"
     }
     else{
      console.log("vaild")
      document.getElementById("nameError").innerText="vaild"
      document.getElementById("nameError").style.color="green"
     }
}
function checkemail(e){
  let email = e.target.value;
  const emailRegex=/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
  let emt=document.getElementById("mailError");
  (emailRegex.test(email)) ? (emt.innerText="vaild mail",emt.style.color="green") : (emt.innerText="invaild email",emt.style.color="red")
  console.log(emailRegex.test(email));

}
//function checkpass(e){
//  let pass=e.target.value;
//  const passRegex=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
//  console.log(passRegex.test(pass));
//  let p =document.getElementById("passError");
//(passRegex.test(pass)) ? (p.innerText="vaild password",p.style.color="green") : (p.innerText="invaild password",p.style.color="red")

 //}
