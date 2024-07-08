$(document).ready(function(){
  // Sab span elements ko initially hide kar diya
  $(".span").hide();

  // Jab #audio-1 pe mouse enter kare to #span-1 show ho jaye aur mouse leave karne par hide ho jaye
  $("#audio-1").mouseenter(function(){
      $("#span-1").show();
      $(".audio-1").mouseleave(function(){
          $("#span-1").hide();
      });
  });

  // Jab #audio-2 pe mouse enter kare to #span-2 show ho jaye aur mouse leave karne par hide ho jaye
  $("#audio-2").mouseenter(function(){
      $("#span-2").show();
      $(".audio-2").mouseleave(function(){
          $("#span-2").hide();
      });
  });

  // Jab #audio-3 pe mouse enter kare to #span-3 show ho jaye aur mouse leave karne par hide ho jaye
  $("#audio-3").mouseenter(function(){
      $("#span-3").show();
      $(".audio-3").mouseleave(function(){
          $("#span-3").hide();
      });
  });

  // Jab #audio-4 pe mouse enter kare to #span-4 show ho jaye aur mouse leave karne par hide ho jaye
  $("#audio-4").mouseenter(function(){
      $("#span-4").show();
      $(".audio-4").mouseleave(function(){
          $("#span-4").hide();
      });
  });

  // Jab #audio-5 pe mouse enter kare to #span-5 show ho jaye aur mouse leave karne par hide ho jaye
  $("#audio-5").mouseenter(function(){
      $("#span-5").show();
      $(".audio-5").mouseleave(function(){
          $("#span-5").hide();
      });
  });

  // Jab #audio-6 pe mouse enter kare to #span-6 show ho jaye aur mouse leave karne par hide ho jaye
  $("#audio-6").mouseenter(function(){
      $("#span-6").show();
      $(".audio-6").mouseleave(function(){
          $("#span-6").hide();
      });
  });

  // Jab #audio-7 pe mouse enter kare to #span-7 show ho jaye aur mouse leave karne par hide ho jaye
  $("#audio-7").mouseenter(function(){
      $("#span-7").show();
      $(".audio-7").mouseleave(function(){
          $("#span-7").hide();
      });
  });

  // Jab #audio-8 pe mouse enter kare to #span-8 show ho jaye aur mouse leave karne par hide ho jaye
  $("#audio-8").mouseenter(function(){
      $("#span-8").show();
      $(".audio-8").mouseleave(function(){
          $("#span-8").hide();
      });
  });

  // Jab #audio-9 pe mouse enter kare to #span-9 show ho jaye aur mouse leave karne par hide ho jaye
  $("#audio-9").mouseenter(function(){
      $("#span-9").show();
      $(".audio-9").mouseleave(function(){
          $("#span-9").hide();
      });
  });

  // Jab #audio-10 pe mouse enter kare to #span-10 show ho jaye aur mouse leave karne par hide ho jaye
  $("#audio-10").mouseenter(function(){
      $("#span-10").show();
      $(".audio-10").mouseleave(function(){
          $("#span-10").hide();
      });
  });

  // Jab #audio-11 pe mouse enter kare to #span-11 show ho jaye aur mouse leave karne par hide ho jaye
  $("#audio-11").mouseenter(function(){
      $("#span-11").show();
      $(".audio-11").mouseleave(function(){
          $("#span-11").hide();
      });
  });

  // Jab #audio-12 pe mouse enter kare to #span-12 show ho jaye aur mouse leave karne par hide ho jaye
  $("#audio-12").mouseenter(function(){
      $("#span-12").show();
      $(".audio-12").mouseleave(function(){
          $("#span-12").hide();
      });
  });

  // Audio buttons click hone par corresponding song page open karna

  // Audio-1 button click hone par song-1.html open hoga
  $('.audio-1').on('click', function() {
      var newPageUrl = 'song-1.html';
      window.location.href = newPageUrl;
  });

  // Audio-2 button click hone par song-2.html open hoga
  $('.audio-2').on('click', function() {
      var newPageUrl = 'song-2.html';
      window.location.href = newPageUrl;
  });

  // Audio-3 button click hone par song-3.html open hoga
  $('.audio-3').on('click', function() {
      var newPageUrl = 'song-3.html';
      window.location.href = newPageUrl;
  });

  // Audio-4 button click hone par song-4.html open hoga
  $('.audio-4').on('click', function() {
      var newPageUrl = 'song-4.html';
      window.location.href = newPageUrl;
  });

  // Audio-5 button click hone par song-5.html open hoga
  $('.audio-5').on('click', function() {
      var newPageUrl = 'song-5.html';
      window.location.href = newPageUrl;
  });

  // Audio-6 button click hone par song-6.html open hoga
  $('.audio-6').on('click', function() {
      var newPageUrl = 'song-6.html';
      window.location.href = newPageUrl;
  });

  // Audio-7 button click hone par song-7.html open hoga
  $('.audio-7').on('click', function() {
      var newPageUrl = 'song-7.html';
      window.location.href = newPageUrl;
  });

  // Audio-8 button click hone par song-8.html open hoga
  $('.audio-8').on('click', function() {
      var newPageUrl = 'song-8.html';
      window.location.href = newPageUrl;
  });

  // Audio-9 button click hone par song-9.html open hoga
  $('.audio-9').on('click', function() {
      var newPageUrl = 'song-9.html';
      window.location.href = newPageUrl;
  });

  // Audio-10 button click hone par song-10.html open hoga
  $('.audio-10').on('click', function() {
      var newPageUrl = 'song-10.html';
      window.location.href = newPageUrl;
  });

  // Audio-11 button click hone par song-11.html open hoga
  $('.audio-11').on('click', function() {
      var newPageUrl = 'song-11.html';
      window.location.href = newPageUrl;
  });

  // Audio-12 button click hone par song-12.html open hoga
  $('.audio-12').on('click', function() {
      var newPageUrl = 'song-12.html';
      window.location.href = newPageUrl;
  });

  // Best button click hone par song-13.html open hoga
  $('.bestbtn').on('click', function() {
      var newPageUrl = 'song-13.html';
      window.location.href = newPageUrl;
  });

  // New button click hone par song-14.html open hoga
  $('.newbtn').on('click', function() {
      var newPageUrl = 'song-14.html';
      window.location.href = newPageUrl;
  });

  // Login button click hone par login.html open hoga
  $('.inlog').on('click', function() {
      var newPageUrl = 'login.html';
      window.location.href = newPageUrl;
  });


// Yeh function search karne ke liye hai
function performSearch(query) {
  // Sab 'audio' class wale elements ko select kar ke ek ek pe iterate karega
  $('.audio').each(function() {
      // Current 'audio' element ke andar <h2> tag ka text nikaal raha hai (maan ke chal rahe hain ke isme album ka naam hai)
      var album = $(this).find('h2').text();
      
      // Current 'audio' element ke andar <p> tag ka text nikaal raha hai (maan ke chal rahe hain ke isme artist ka naam aur release date hai)
      var artist = $(this).find('p').text();

      // Check kar raha hai ke query (jo user ne search me daali hai) album ya artist me se kisi ek me hai ya nahi (case insensitive comparison ke sath)
      if (album.toLowerCase().includes(query.toLowerCase()) ||
          artist.toLowerCase().includes(query.toLowerCase())) {
          // Agar query match karti hai toh current 'audio' element ko dikhaye ga
          $(this).show();
      } else {
          // Agar query match nahi karti toh current 'audio' element ko chhupa dega
          $(this).hide();
      }
  });
}

// Search functionality ko input field ke sath bind kar raha hai
$('input[type="text"]').on('input', function() {
  // Input field ka current value (jo search query hai) nikaal raha hai
  var query = $(this).val();
  
  // performSearch function ko current query ke sath call kar raha hai
  performSearch(query);
});

// Jab page load hota hai, toh sab 'audio' elements ko show karega
$('.audio').show();


  });