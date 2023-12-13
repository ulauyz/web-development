const goTopBtn = document.querySelector (".scroll__up");

goTopBtn.addEventListener("click", goTop);
window.addEventListener("scroll", trackScroll);
function trackScroll() {
   const offset = window.pageYOffset;
   const coords = document.documentElement.clientHeight;
   if (offset > coords) {
      goTopBtn.classList.add("scroll__up--show");

   } else {
      goTopBtn.classList.remove("scroll__up--show");
   }
}
function goTop() {
   if (window.pageYOffset > 0) {
      window.scrollBy(0, -80);
      setTimeout(goTop, 0);
   }
}




$(document).ready(function () {
   $('#comment-add').on('click', function () {
      var name = $('#comment-name').val();
      var comment = $('#comment-body').val();

      $.ajax({
         url: 'add_comment.php',
         method: 'POST',
         data: {
            name: name,
            comment: comment
         },
         success: function (response) {
            $('#comment-field').empty(); 
            $('#comment-field').append(response); 
            $('#comment-name').val('');
            $('#comment-body').val('');
         }
      });
   });
});

$(document).ready(function () {
   $.ajax({
      url: 'get_comments.php',
      method: 'GET',
      success: function (response) {
         $('#comment-field').html(response);
      }
   });
});

