//
// $().ready(function() {
//     $('#edit').click(function() {
//
//           $('input').not('#disabled').not('input[type=hidden]').each(function() {
//                 if ($(this).attr('disabled')) {
//                     $(this).removeAttr('disabled');
//                     document.getElementById('edit').innerHTML='<i class="material-icons">create</i> Edit';
//                 }
//                 else {
//                     $(this).attr({'disabled': 'disabled'});
//                     document.getElementById('edit').innerHTML='<i class="material-icons">cancel</i> Batal';
//                 }
//           });
//
//           $('select').each(function() {
//                 if ($(this).attr('disabled')) {
//                     $(this).removeAttr('disabled');
//                     $(this).material_select();
//                 }
//                 else {
//                     $(this).attr({'disabled': 'disabled'});
//                 }
//           });
//
//           $('textarea').each(function() {
//                 if ($(this).attr('disabled')) {
//                     $(this).removeAttr('disabled');
//                 }
//                 else {
//                     $(this).attr({'disabled': 'disabled'});
//                 }
//           });
//
//           $('button').each(function() {
//                 if ($(this).attr('disabled')) {
//                     $(this).removeAttr('disabled');
//                 }
//                 else {
//                     $(this).attr({'disabled': 'disabled'});
//                 }
//           });
//     });
// });



$().ready(function() {
    $('#reply').click(function(){
        $('#reply_div').toggle();
        $(window).scrollTop($('#reply_div').offset().top-20);
    });

    $('#edit').click(function() {

          $('input').not('#disabled').not('input[type=hidden]').each(function() {
                if ($(this).attr('readonly')) {
                    $(this).removeAttr('readonly');
                    document.getElementById('edit').innerHTML='<i class="material-icons">create</i> Edit';
                }
                else {
                    $(this).attr({'readonly': 'readonly'});
                    document.getElementById('edit').innerHTML='<i class="material-icons">cancel</i> Batal';
                }
          });

          $('select').each(function() {
                if ($(this).attr('readonly')) {
                    $(this).removeAttr('readonly');
                    $(this).material_select();
                }
                else {
                    $(this).attr({'readonly': 'readonly'});
                }
          });

          $('textarea').each(function() {
                if ($(this).attr('readonly')) {
                    $(this).removeAttr('readonly');
                }
                else {
                    $(this).attr({'readonly': 'readonly'});
                }
          });

          $('button').each(function() {
                if ($(this).attr('readonly')) {
                    $(this).removeAttr('readonly');
                }
                else {
                    $(this).attr({'readonly': 'readonly'});
                }
          });
    });
});


//modal
$(document).ready(function(){
  // the "href" attribute of .modal-trigger must specify the modal ID that wants to be triggered
  $('.modal').modal();

  $('.modal').modal({
      dismissible: true, // Modal can be dismissed by clicking outside of the modal
      opacity: .5, // Opacity of modal background
      inDuration: 300, // Transition in duration
      outDuration: 200, // Transition out duration
      startingTop: '4%', // Starting top style attribute
      endingTop: '10%', // Ending top style attribute
      // ready: function(modal, trigger) { // Callback for Modal open. Modal and trigger parameters available.
      //   alert("Ready");
      //   console.log(modal, trigger);
      // },
      // complete: function() { alert('Closed'); } // Callback for Modal close
    }
  );

});






//preview upload foto

 function tampilkanPreview(gambar,idpreview){
     var gb = gambar.files;
     for (var i = 0; i < gb.length; i++){
         var gbPreview = gb[i];
         var imageType = /image.*/;
         var preview=document.getElementById(idpreview);
         var reader = new FileReader();

         if (gbPreview.type.match(imageType)) {
             preview.file = gbPreview;
             reader.onload = (function(element) {
                 return function(e) {
                     element.src = e.target.result;
                 };
             })(preview);
             reader.readAsDataURL(gbPreview);
         }else{
             alert("file yang anda upload tidak sesuai. Khusus mengunakan image.");
         }

     }
 }



 function batalUpload(gambar){
    //  document.getElementById('input1').value=null;
     $("#preview").attr("src",gambar);
 }