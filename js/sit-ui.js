$(document).ready(function() {

function ClassScroll() {
  $(window).scroll(function() {
    $('h1.card-title').addClass('disappear');
    $('.page .fixed').addClass('top');
    $('li:first-child .image').addClass('top');
  });
}

function WindowTest() {

        // Test de la largeur de la fenêtre
        var windowWidth= $(window).width();

        if(windowWidth < 520){
          $('h1.card-title').addClass('disappear');
          $('.page .fixed').addClass('top');
          $('li:first-child .image').addClass('top');
        }

}


  // Ouverture section GRD
    $('.open_GRD').click(function() {
    $('nav h1.card-title').next().append().load( "../bloc_html/GRD.html",function() {

      // Chargement des fonctions de test
      ClassScroll();
      WindowTest();

              // Rechargement du menu de la page d'accueil
              $('.bt_close').click(function() {
                  $('nav h1.card-title').next().append().load( "../bloc_html/menu__content.html");
                  location.reload();
              });
            });
    });

            // Ouverture section GE
              $('.open_GE').click(function() {
              $('nav h1.card-title').next().append().load( "../bloc_html/GE.html",function() {


                // Chargement des fonctions de test
                ClassScroll();
                WindowTest();
                // Rechargement du menu de la page accueil
                        $('.bt_close').click(function() {
                            $('nav h1.card-title').next().append().load( "../bloc_html/menu__content.html");
                            location.reload();
                        });

              });
              });


});
