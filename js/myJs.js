//actualBlock is the section we are animation
var offset = $(window).scrollTop() - actualBlock.offset().top,
    windowHeight = $(window).height();

if( offset >= -windowHeight && offset <= 0 ) {
   // section entering the viewport
   translateY = (-offset)*100/windowHeight;
   scale = 1;
   opacity = 1;
} else if( offset > 0 && offset <= windowHeight ) {
   //section leaving the viewport 
   scale = (1 - ( offset * 0.3/windowHeight));
   opacity = ( 1 - ( offset/windowHeight) );
   translateY = 0;
   boxShadowBlur = 40*(offset/windowHeight);
}

$.Velocity
   .RegisterEffect("scaleDown", {
      defaultDuration: 800,
      calls: [ 
         [{ opacity: '0', scale: '0.7', boxShadowBlur: '40px' }, 1]
      ]
});