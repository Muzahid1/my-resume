window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById("navbar").style.padding = "15px 10px";
    document.getElementById("logo").style.fontSize = "25px";
    document.getElementById("navbar").style.backgroundColor = "#f1f1f1";
  } else {
    document.getElementById("navbar").style.padding = "80px 10px";
    document.getElementById("logo").style.fontSize = "35px";
    document.getElementById("navbar").style.backgroundColor = "#ddd";
  }
}

function nav () {
   console.log("jd");
  let nav =  document.getElementById("navbar-right");
  if (nav.style.display == "none") {
    nav.style.display = "block"
    
  }
  else {
    nav.style.display = "none"
  }
}