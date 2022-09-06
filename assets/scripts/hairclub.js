console.log("👨 https://getstarted.hairclub.com/ge-men/" + "\n" + "👩 https://getstarted.hairclub.com/ge-women/")

// Set variables from URL parameters
if ( getUrlParameter("pub") ) {
  var sourceCode = getUrlParameter("pub");
} else {
  var sourceCode = "DGTXTORGFMT00016743";
};
if ( getUrlParameter("utm_id") ) {
  var campaignId = getUrlParameter("utm_id");
} else {
  var campaignId = "";
};
if ( getUrlParameter("referralCode") ) {
  var referralCode = getUrlParameter("referralCode");
} else {
  var referralCode = "";
};
console.log("Source Code: " + sourceCode);
console.log("Campaign ID: " + campaignId);
console.log("Referral Code: " + referralCode);

$(".lp").attr("data-internal-id", internal_id);      
$(".lp").attr("data-public-id", public_id);
$(".lp").attr("data-hairclub-center-id", hairclub_center_id);

$(".lp .header .logo a").attr("href",window.location.href);

var today = moment();
var inOneDay = moment().add(1, 'days');
var inTwoDays = moment().add(2, 'days');
var inThreeDays = moment().add(3, 'days');
var inFourDays = moment().add(4, 'days');
var inFiveDays = moment().add(5, 'days');
var inSixDays = moment().add(6, 'days');
var inSevenDays = moment().add(7, 'days');

$("#in-one-day").attr("data-day", inOneDay.format("YYYY-MM-DD"));
$("#in-one-day .label").html(inOneDay.format("ddd") + "<br><span>" + inOneDay.format("MMM DD") + "</span>");
$("#in-two-days").attr("data-day", inTwoDays.format("YYYY-MM-DD"));
$("#in-two-days .label").html(inTwoDays.format("ddd") + "<br><span>" + inTwoDays.format("MMM DD") + "</span>");
$("#in-three-days").attr("data-day", inThreeDays.format("YYYY-MM-DD"));
$("#in-three-days .label").html(inThreeDays.format("ddd") + "<br><span>" + inThreeDays.format("MMM DD") + "</span>");
$("#in-four-days").attr("data-day", inFourDays.format("YYYY-MM-DD"));
$("#in-four-days .label").html(inFourDays.format("ddd") + "<br><span>" + inFourDays.format("MMM DD") + "</span>");
$("#in-five-days").attr("data-day", inFiveDays.format("YYYY-MM-DD"));
$("#in-five-days .label").html(inFiveDays.format("ddd") + "<br><span>" + inFiveDays.format("MMM DD") + "</span>");
$("#in-six-days").attr("data-day", inSixDays.format("YYYY-MM-DD"));
$("#in-six-days .label").html(inSixDays.format("ddd") + "<br><span>" + inSixDays.format("MMM DD") + "</span>");
$("#in-seven-days").attr("data-day", inSevenDays.format("YYYY-MM-DD"));
$("#in-seven-days .label").html(inSevenDays.format("ddd") + "<br><span>" + inSevenDays.format("MMM DD") + "</span>");

var initialDate = today.format('YYYY-MM-DD');
      
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
          
  var createLeadSettings = {
    "url": "https://smsportal.gymlaunchsecrets.com/webhooks/create_lead/" + public_id,
    "method": "POST",
    "data": JSON.stringify({
      "first_name": firstName,
      "last_name": lastName,
      "phone": phone,
      "email": email,
      "utm_source": "HairClub Landing Pages"
    }),
  };
  
  // Create lead in ALAN
  
  $.ajax(createLeadSettings).done(function (response) {
    if (response.status == "success") {
      var lead_id = response.data.contact_id;
      $(".lp").attr("data-alan-lead-id", lead_id);
      $(".lp").addClass("show-grid");
    } else {
      console.log(response.status);
    }
  });

  // HairClub
  
  var lookupHairClubLead = {
    "url": "https://leads-api-prod.hairclub.com/api/Authentication/email?Email=" + email,
    "method": "GET",
    "timeout": 0,
    "headers": {
      "Authorization": "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczovL2NvcmVzZXJ2aWNlcy1hcGktcHJvZC5henVyZXdlYnNpdGVzLm5ldC8iLCJpYXQiOm51bGwsImV4cCI6bnVsbCwiYXVkIjoiaHR0cHM6Ly9jb3Jlc2VydmljZXMtYXBpLXByb2QuYXp1cmV3ZWJzaXRlcy5uZXQvIiwic3ViIjoiIn0.sFasu1GnH1rdp48mj-wjMuBlZCswQp-UBXXWvhxyUtA"
    },
  };

  var createHairClubLead = {
    "url": "https://leads-api-prod.hairclub.com/api/Authentication/signup",
    "method": "POST",
    "timeout": 0,
    "headers": {
      "Authorization": "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczovL2NvcmVzZXJ2aWNlcy1hcGktcHJvZC5henVyZXdlYnNpdGVzLm5ldC8iLCJpYXQiOm51bGwsImV4cCI6bnVsbCwiYXVkIjoiaHR0cHM6Ly9jb3Jlc2VydmljZXMtYXBpLXByb2QuYXp1cmV3ZWJzaXRlcy5uZXQvIiwic3ViIjoiIn0.sFasu1GnH1rdp48mj-wjMuBlZCswQp-UBXXWvhxyUtA",
      "Content-Type": "application/json"
    },
    "data": JSON.stringify({
      "zipCode": hairclub_zip_code,
      "email": email,
      "phone": phone,
      "firstName": "Test_" + firstName,
      "lastName": lastName,
      "sourceCode": sourceCode
    }),
  };

  var getHairClubAppointments = {
    "url": "https://leads-api-prod.hairclub.com/api/Appointment?IdCenter=" + hairclub_center_id + "&appointmentType=0&initialDate=" + initialDate,
    "method": "GET",
    "timeout": 0,
    "headers": {
      "Authorization": "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczovL2NvcmVzZXJ2aWNlcy1hcGktcHJvZC5henVyZXdlYnNpdGVzLm5ldC8iLCJpYXQiOm51bGwsImV4cCI6bnVsbCwiYXVkIjoiaHR0cHM6Ly9jb3Jlc2VydmljZXMtYXBpLXByb2QuYXp1cmV3ZWJzaXRlcy5uZXQvIiwic3ViIjoiIn0.sFasu1GnH1rdp48mj-wjMuBlZCswQp-UBXXWvhxyUtA"
    },
  }; 
    
  // Check if lead exists in HC
  $.ajax(lookupHairClubLead).done(function (response) {
    if (response.isSuccess == true) {
      if ($.parseJSON(response.message).Id) {
        var leadId = $.parseJSON(response.message).Id;
        $(".lp").attr("data-hairclub-lead-id", leadId);
        console.log(response);
        console.log("HairClub lead already exists: " + leadId);              
      } else {
        $.ajax(createHairClubLead).done(function (response) {
          console.log(response);
          var leadId = response.message;
          $(".lp").attr("data-hairclub-lead-id", leadId);
          console.log("HairClub lead created: " + leadId);
        });
      }
    } else {
      // Create HairClub Lead if lead is not found.
      $.ajax(createHairClubLead).done(function (response) {
        console.log(response);
        var leadId = response.message;
        $(".lp").attr("data-hairclub-lead-id", leadId);
        console.log("HairClub lead created: " + leadId);
      });
    }
  });

  $.ajax(getHairClubAppointments).done(function (response) {
    var data = response;
    $.each(data, function (index) {
      var slot = data[index];
      if (slot.isAvailable == true) {
        $("ul#raw-list").append("\
          <li data-day='" + slot.appointmentDay + "' data-time='" + slot.initialTime + "'>\
            <span>" + slot.appointmentDay + slot.initialTime + "</span>" + moment(slot.initialTime, "HH:mm").format("LT") + "\
          </li>\
        ");
      }
    });
    setTimeout(function(){
      // Remove duplicates            
      var uniqueLi = {};
      $("ul#raw-list li").each(function () {
        var thisVal = $(this).text();
        if ( !(thisVal in uniqueLi) ) {
          uniqueLi[thisVal] = "";
        } else {
          $(this).remove();
        }
      })
      // Sort
      var ul = document.getElementById("raw-list");
      Array.from(ul.getElementsByTagName("li"))
        .sort((a, b) => a.textContent.localeCompare(b.textContent))
        .forEach(li => ul.appendChild(li));
    }, 1000);
    setTimeout(function(){
      $("#raw-list li[data-day='" + inOneDay.format("YYYY-MM-DD") + "']").each(function(){
        $(this).clone().appendTo(".grid .day-block[data-day='" + inOneDay.format("YYYY-MM-DD") + "'] .list");
      });
      $("#raw-list li[data-day='" + inTwoDays.format("YYYY-MM-DD") + "']").each(function(){
        $(this).clone().appendTo(".grid .day-block[data-day='" + inTwoDays.format("YYYY-MM-DD") + "'] .list");
      });
      $("#raw-list li[data-day='" + inThreeDays.format("YYYY-MM-DD") + "']").each(function(){
        $(this).clone().appendTo(".grid .day-block[data-day='" + inThreeDays.format("YYYY-MM-DD") + "'] .list");
      });
      $("#raw-list li[data-day='" + inFourDays.format("YYYY-MM-DD") + "']").each(function(){
        $(this).clone().appendTo(".grid .day-block[data-day='" + inFourDays.format("YYYY-MM-DD") + "'] .list");
      });
      $("#raw-list li[data-day='" + inFiveDays.format("YYYY-MM-DD") + "']").each(function(){
        $(this).clone().appendTo(".grid .day-block[data-day='" + inFiveDays.format("YYYY-MM-DD") + "'] .list");
      });
      $("#raw-list li[data-day='" + inSixDays.format("YYYY-MM-DD") + "']").each(function(){
        $(this).clone().appendTo(".grid .day-block[data-day='" + inSixDays.format("YYYY-MM-DD") + "'] .list");
      });
      $("#raw-list li[data-day='" + inSevenDays.format("YYYY-MM-DD") + "']").each(function(){
        $(this).clone().appendTo(".grid .day-block[data-day='" + inSevenDays.format("YYYY-MM-DD") + "'] .list");
      });
    }, 2000);
    setTimeout(function(){
      $(".grid .day-block[data-day='" + inOneDay.format("YYYY-MM-DD") + "']").attr("data-available-slots", $(".grid .day-block[data-day='" + inOneDay.format("YYYY-MM-DD") + "'] .list li").length);
      $(".grid .day-block[data-day='" + inTwoDays.format("YYYY-MM-DD") + "']").attr("data-available-slots", $(".grid .day-block[data-day='" + inTwoDays.format("YYYY-MM-DD") + "'] .list li").length);
      $(".grid .day-block[data-day='" + inThreeDays.format("YYYY-MM-DD") + "']").attr("data-available-slots", $(".grid .day-block[data-day='" + inThreeDays.format("YYYY-MM-DD") + "'] .list li").length);
      $(".grid .day-block[data-day='" + inFourDays.format("YYYY-MM-DD") + "']").attr("data-available-slots", $(".grid .day-block[data-day='" + inFourDays.format("YYYY-MM-DD") + "'] .list li").length);
      $(".grid .day-block[data-day='" + inFiveDays.format("YYYY-MM-DD") + "']").attr("data-available-slots", $(".grid .day-block[data-day='" + inFiveDays.format("YYYY-MM-DD") + "'] .list li").length);
      $(".grid .day-block[data-day='" + inSixDays.format("YYYY-MM-DD") + "']").attr("data-available-slots", $(".grid .day-block[data-day='" + inSixDays.format("YYYY-MM-DD") + "'] .list li").length);
      $(".grid .day-block[data-day='" + inSevenDays.format("YYYY-MM-DD") + "']").attr("data-available-slots", $(".grid .day-block[data-day='" + inSevenDays.format("YYYY-MM-DD") + "'] .list li").length);
      
      // Select appointment date time
      
      $(".lp .grid .day-block .list li").click(function() {
        var hairClubLeadId = $("body").attr("data-hairclub-lead-id");
        var selectedDatetime = $(this).attr("data-day") + " " + $(this).attr("data-time");
        $("body").attr("data-selected-datetime", selectedDatetime);
        var selectedDatetimeText = moment(selectedDatetime).format("MMMM DD, YYYY") + " at " + moment(selectedDatetime).format("LT");
        $(".modal .summary .value.name").text($("body").attr("data-first-name") + " " + $("body").attr("data-last-name"));
        $(".modal .summary .value.date-time").text(selectedDatetimeText);
        $(".lp").addClass("show-modal");
        $(".modal .close").click(function() {
          $(".lp").removeClass("show-modal");
        });
        $(".modal button.confirm").click(function() {
          $(this).prepend("<span class='mdi mdi-loading mdi-spin' style='margin-right: 10px'></span>");
          $(".ac").removeClass("show-modal");
          var createHairClubAppointment = {
            "url": "https://leads-api-prod.hairclub.com/api/Appointment",
            "method": "POST",
            "timeout": 0,
            "headers": {
              "Authorization": "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczovL2NvcmVzZXJ2aWNlcy1hcGktcHJvZC5henVyZXdlYnNpdGVzLm5ldC8iLCJpYXQiOm51bGwsImV4cCI6bnVsbCwiYXVkIjoiaHR0cHM6Ly9jb3Jlc2VydmljZXMtYXBpLXByb2QuYXp1cmV3ZWJzaXRlcy5uZXQvIiwic3ViIjoiIn0.sFasu1GnH1rdp48mj-wjMuBlZCswQp-UBXXWvhxyUtA",
              "Content-Type": "application/json"
            },
            "data": JSON.stringify({
              "startDate": selectedDatetime,
              "leadId": hairClubLeadId,
              "appointmentType": 0,
              "centerId": hairclub_center_id
            }),
          };
          $.ajax(createHairClubAppointment).done(function (response) {
            console.log(response);
            if (response.isSuccess == true) {
              $(".confirmation").html("\
                <span class='mdi mdi-check-circle' style='display: block'></span>\
                <h3>Appointment confirmed!</h3>\
                <p>Thank you, you're all set! We look forward to seeing you on " + selectedDatetimeText + ".</p>\
              ");
              $(".lp").removeClass("show-modal");
              $(".lp").removeClass("show-grid");
              $(".lp").addClass("show-confirmation");
              console.log("Appointment schedule successfully! We'll see on " + selectedDatetimeText + ".");
            } else {
              alert("We encountered an error scheduling your appointment. Please try again.")
            }
          });
        });
      });
      
      
    }, 3000);
    setTimeout(function(){
      $(".grid").removeClass("loading");
    }, 4000);
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