window.onscroll = function () {
       scrollFunction()
};


function scrollFunction() {
       var btn = document.getElementById("home")
       if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
              btn.style.display = "block"
              document.getElementById("navbar").style.padding = "15px 10px";
              document.getElementById("logo").style.fontSize = "25px";
              document.getElementById("navbar").style.backgroundColor = "#fff";
       } else {
              document.getElementById("navbar").style.padding = "80px 10px";
              document.getElementById("logo").style.fontSize = "35px";
              document.getElementById("navbar").style.backgroundColor = "#f8f9fa";
              btn.style.display = "none"
       }
}

function nav() {
       console.log("jd");
       let nav = document.getElementById("navbar-right");
       if (nav.style.display == "none") {
              nav.style.display = "block"

       }
       else {
              nav.style.display = "none"
       }
}



// fade in 
