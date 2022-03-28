function scrollToTop() {
  window.scrollTo(0, 0);
}

$("h4")

$(document).ready(function(){
     $('.food2').waypoint(function(direction){
      $('.food2').addClass('animate__bounceIn');
     },{offset : '400px'
     })
});