$(".lp").attr("data-internal-id", internal_id);
$(".lp").attr("data-public-id", public_id);

$(".lp .header .logo a").attr("href",window.location.href);
      
// Form submission
      
$("#form").submit(function(e) {
  e.preventDefault();
  
  $("button[type=submit]").html("<span class='mdi mdi-loading mdi-spin' style='margin-right: 10px'></span>Sign Up");
  
  var firstName = $("#first-name").val();
  var lastName  = $("#last-name").val();
  var email     = $("#email").val();
  var phone     = $("#phone").val();
  var campaign  = $("#campaign").val();
  
  $(".lp").attr("data-first-name", firstName);
  $(".lp").attr("data-last-name", lastName);
  $(".lp").attr("data-email", email);
  $(".lp").attr("data-phone", phone);
  $(".grid h3 strong").text(firstName);
  
  // Create lead in ALAN
    
  var createLeadSettings = {
    "url": "https://smsportal.usealan.com/webhooks/create_lead/" + public_id,
    "method": "POST",
    "data": JSON.stringify({
      "first_name": firstName,
      "last_name": lastName,
      "phone": phone,
      "email": email,
      "utm_source": "HairClub Landing Pages"
    }),
  };
    
  $.ajax(createLeadSettings).done(function (response) {
    if (response.status == "success") {
      var lead_id = response.data.contact_id;
      $(".lp").attr("data-alan-lead-id", lead_id);
      $(".lp").addClass("show-grid");
    } else {
      console.log(response.status);
    }
  });

}); // End form submission

// Comparison

$("#slider").on("input change", (e) => {
  const sliderPos = e.target.value;
  // Update the width of the foreground image
  $(".foreground-img").css("width", `${sliderPos}%`);
  // Update the position of the slider button
  $(".slider-button").css("left", `${sliderPos}%`);
});

// Scroll to Top

$(".footer-cta-button").click(function() {
  $("html, body").animate({
    scrollTop: 0
  }, 500);
  return false;
});

// Make it easy to identify dev vs. prod

if (window.location.host !== "pages.usealan.com") {
  var originalTitle = document.title;
  document.title = "🚧 " + originalTitle;
}