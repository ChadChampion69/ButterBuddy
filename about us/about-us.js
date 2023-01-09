window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 1000 || document.documentElement.scrollTop > 100) {
    document.getElementById("navbar").style.height = "7%";
    document.getElementById("logo").style.width = "50px";
    document.getElementById("navbar").style.backdropFilter = "blur(50px)";
    document.getElementById("logo").src = "/HTML/Produktutveckling/IMG/hexagon.png";
    document.getElementById("logo").style.paddingInline = "25px";
    document.getElementById("nav2").style.borderBottom = "none";
  } else {
    document.getElementById("navbar").style.backdropFilter = "blur(0px)";
    document.getElementById("navbar").style.height = "13%";
    document.getElementById("logo").style.width = "100px";
    document.getElementById("logo").src = "https://logos-world.net/wp-content/uploads/2021/04/Rolls-Royce-Logo.png";
    document.getElementById("logo").style.paddingInline = "0px";
    document.getElementById("nav2").style.borderBottom = "1px solid white";
  }
}