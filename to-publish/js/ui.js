$(document).ready(function() {
        $('#pageContenu .bt_close').click(function() {
          location.href = '../';
        });
        $('#menu__content').append($("footer"));
});

$(window).load(function(){
  $(".to-fix").sticky({ topSpacing: 0 });
});
