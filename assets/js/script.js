// navbar class add 
window.addEventListener('scroll', function() {
    var navbar = document.getElementById('navbar');
    if (window.scrollY > 120) {
      navbar.classList.add('sticky');
    } else {
      navbar.classList.remove('sticky');
    }
});



// read more js start 
function readMore(ele,eve){
  eve.preventDefault();
  var txt = document.querySelector(".read_more_text");
  txt.classList.toggle("show-few-lines");
  
  if(txt.classList.contains("show-few-lines")){
      ele.innerText = "Read More";
  }else{
      ele.innerText = "Read Less";
  }
}
// read more js end