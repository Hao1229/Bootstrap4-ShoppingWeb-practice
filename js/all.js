$(document).ready(function () {
    $('#removeModal').on('show.bs.modal', function (event) {
      var button = $(event.relatedTarget) // 選擇當初觸發事件的按鈕
      var title = button.data('title') // 使用 data-* 來取得特定內容
      console.log(title);
      var modal = $(this)
      modal.find('.modal-title').text('確認' + title) // 寫入資料
    });
    //回到頂部jQuery
    // $('.gototop').click(function (e) { 
    //   e.preventDefault();
    //   $('html,body').animate({scrollTop:0},1500);
    // });
  });


//認證功能
  (function() {
    'use strict';
    window.addEventListener('load', function() {
      // Fetch all the forms we want to apply custom Bootstrap validation styles to
      var forms = document.getElementsByClassName('needs-validation');
      // Loop over them and prevent submission
      var validation = Array.prototype.filter.call(forms, function(form) {
        form.addEventListener('submit', function(event) {
          if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
          }
          form.classList.add('was-validated');
        }, false);
      });
    }, false);
  })();


