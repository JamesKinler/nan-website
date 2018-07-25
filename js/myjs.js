$(document).ready(function () {
  //scroll magic
var controller = new ScrollMagic.Controller();


new ScrollMagic.Scene({
        triggerElement: ".firstsection",
        triggerHook: "onLeave",
    })
    .setPin(".firstsection")
    .addTo(controller);


    new ScrollMagic.Scene({
      triggerElement: ".secondsection",
      triggerHook: "onLeave",
    })
    .setPin(".secondsection")
    .addTo(controller);


  new ScrollMagic.Scene({
    triggerElement: ".thirdsection",
    triggerHook: "onLeave"
  })
  .setPin(".thirdsection")
  .addTo(controller);


  new ScrollMagic.Scene({
        triggerElement: '.third_header',
        // triggerHook: 'onBottom',
        offset: 10,
    })
    // .addIndicators()
    // .setPin('.counter')
    .on('enter', function(e){
      setTimeout(function(){
    odometer.innerHTML = 3000;
      }, 1000)
    })


    .addTo(controller);



});
