// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require js/foundation/foundation.js
//= require js/foundation/foundation.abide.js
//= require js/foundation/foundation.accordion.js
//= require js/foundation/foundation.alert.js
//= require js/foundation/foundation.clearing.js
//= require js/foundation/foundation.dropdown.js
//= require js/foundation/foundation.equalizer.js
//= require js/foundation/foundation.interchange.js
//= require js/foundation/foundation.joyride.js
//= require js/foundation/foundation.magellan.js
//= require js/foundation/foundation.offcanvas.js
//= require js/foundation/foundation.orbit.js
//= require js/foundation/foundation.reveal.js
//= require js/foundation/foundation.slider.js
//= require js/foundation/foundation.tab.js
//= require js/foundation/foundation.tooltip.js
//= require js/foundation/foundation.topbar.js
//= require turbolinks
//= require_tree .

function hideMe(id) {
  var a = document.getElementById(id);
  a.style.display = 'none';
}

function showMe(id) {
  var b = document.getElementById(id);
  b.style.display = 'block';
}
