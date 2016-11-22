var acc = $('.accordion');
var panel = $('.panel');
// default: hidden current playing & panels
var currentPlaying = $('.current-playing').hide();
var hiddenPanel = panel.hide();

// after clicking
acc.on('click', function() {
  //catch name of radio station
  var stationPlaying = $(this).find('.radio-name').text();

  //toggle the panel - player
  var p = $(this).prev().slideToggle();
  //prevents from another panel to show up
  panel.not(p).slideUp();

  //show current radio name in footer
  var displayCurrent = $('.current-name').text(stationPlaying);
  var currentPlaying = $('.current-playing').show();
});