// Make URL parameters readable

var getUrlParameter=function(r){var t,e,n=decodeURIComponent(window.location.search.substring(1)).split("&");for(e=0;e<n.length;e++)if((t=n[e].split("="))[0]===r)return void 0===t[1]||t[1]};

// Get Step

if ( getUrlParameter("step") == "1") {
  step = "1";
};

// On Load Actions

$("body").addClass("loaded");

function updateParameters() {
  window.history.replaceState(null, null, "?pub=DGPDSFACEVID14425&ch=paid-social&mdm=video&tac=persona&src=%7B%7Bsite_source_name%7D%7D&plc=fb-%7B%7Bplacement%7D%7D&cmp=fb-%7B%7Bcampaign.name%7D%7D&con=fb-%7B%7Badset.id%7D%7D-%7B%7Bad.id%7D%7D&cnt=general&d=%7Bdevice%7D&re=national&aud=int-HLM&bdt=corporate&bud=usa&lan=en&FBCLID=%7B%7Bfbclid%7D%7D&utm_kxconfig=u9h6wiuzt");
}

updateParameters(); 

// Form Submission

window.addEventListener("load", function() {
  const form = document.getElementById("form");
  form.addEventListener("submit", function(e) {
    e.preventDefault();
    const data = new FormData(form);
    const action = e.target.action;
    fetch(action, {
      method: 'POST',
      body: data,
    })
    .then(() => {
      window.location.href = "/confirmation/";
    })
  });
});