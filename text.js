console.log("hello");

function showName(){
  console.log("john wick");
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
  
}
  
(()=> {
    console.log("arrow function");
})()

function getName(e){
     const cl=e.target.value;
      document.getElementById("box").style.backgroundColor=cl;

}
 

