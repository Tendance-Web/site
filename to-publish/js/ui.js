$(document).ready(function() {
        $('#pageContenu .bt_close').click(function() {
          location.href = '../';
        });

        $("html").easeScroll({
          frameRate: 120,
          animationTime: 1500,
          stepSize: 150,
          pulseAlgorithm: 1,
          pulseScale: 8,
          pulseNormalize: 1,
          accelerationDelta: 20,
          accelerationMax: 1,
          keyboardSupport: true,
          arrowScroll: 50,
          touchpadSupport: true,
          fixedBackground: true
        });



        var Nb_image = $('.image').length;
        $('.image').eq(0).addClass('FirstImage');
        $('.image').eq(Nb_image-1).addClass('LastImage');


        var Bt_next = "<a href= class=\"Suivant\"> Suivant ->  </a>";
        var Bt_prev = "<a href= class=\"Precedent\"> <- Précédent </a>";

        $('.LastImage').append(Bt_prev);
        $('.FirstImage').append(Bt_next);

        $('.image').not(".FirstImage,.LastImage").append(Bt_prev,Bt_next);


        });

$(window).load(function(){
  $(".to-fix").sticky({ topSpacing: 0 });
});
