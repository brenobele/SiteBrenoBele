// The following code is based off a toggle menu by @Bradcomp
// source: https://gist.github.com/Bradcomp/a9ef2ef322a8e8017443b626208999c1
(function() {
    var burger = document.querySelector('.burger');
    var menu = document.querySelector('#'+burger.dataset.target);
    burger.addEventListener('click', function() {
        burger.classList.toggle('is-active');
        menu.classList.toggle('is-active');
    });
})();

function sendMail() {
  var email = $('#email').val();

  if(email.length <= 5) {
    alert('Informe seu e-mail.');
    return false;
  }

  var urlData = "&email=" + email;

  $.ajax({
    type: "POST",
    url: "sendmail.php",
    async: true,
    data: urlData,
    success: function(data) {
      $('#retornHTML').html(data);
    },
    beforeSend: function() {
      $('.loading').fadeIn('fast');
    },
    complete: function() {
      $('.loading').fadeOut('fast');
    }
  });
};
