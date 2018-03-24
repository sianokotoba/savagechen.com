$(document).ready(() => {
  console.log("HIT")
  var addclass = 'rsvp-color';
  var $rsvpItem = $('.flexbox-item').click(function(e) {
    console.log("CLICKED")
    $rsvpItem.removeClass(addclass);
    $(this).addClass(addclass);
  });
})
