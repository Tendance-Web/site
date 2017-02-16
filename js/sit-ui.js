$(document).ready(function() {
    $('.open_GRD').click(function() {
      $('#GRD').toggleClass('GRD_opened');
      $('.bt_close').addClass('bt_close--show');
    });

    $('.bt_close').click(function() {
      $(this).removeClass('bt_close--show');
      //alert('bouton cliqué');
      $('#GRD').toggleClass('GRD_opened');
    });

});
