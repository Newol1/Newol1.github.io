function circle_animation() {

  $('.first.circle:eq(0)').circleProgress({
    value: 0.75,
    animation: true,
    fill: {gradient: ['#00a99d', '#00a99d']},
    emptyFill: "#e4e4e4",
    thickness: "4.5",
    size: 120,
    animation: { duration: 2000}
  }).on('circle-animation-progress', function(event, progress) {
    $(this).find('strong').html(Math.round(75 * progress) + '<i>%</i>');
  });


    $('.first.circle:eq(1)').circleProgress({
    value: 0.92,
    animation: true,
    fill: {gradient: ['#00a99d', '#00a99d']},
    emptyFill: "#e4e4e4",
    thickness: "4.5",
    size: 120,
    animation: { duration: 2000}
  }).on('circle-animation-progress', function(event, progress) {
    $(this).find('strong').html(Math.round(92 * progress) + '<i>%</i>');
  });

      $('.first.circle:eq(2)').circleProgress({
    value: 0.68,
    animation: true,
    fill: {gradient: ['#00a99d', '#00a99d']},
    emptyFill: "#e4e4e4",
    thickness: "4.5",
    size: 120,
    animation: { duration: 2000}
  }).on('circle-animation-progress', function(event, progress) {
    $(this).find('strong').html(Math.round(68 * progress) + '<i>%</i>');
  });

      $('.first.circle:eq(3)').circleProgress({
    value: 1,
    animation: true,
    fill: {gradient: ['#00a99d', '#00a99d']},
    emptyFill: "#e4e4e4",
    thickness: "4.5",
    size: 120,
    animation: { duration: 2000}
  }).on('circle-animation-progress', function(event, progress) {
    $(this).find('strong').html(Math.round(100 * progress) + '<i>%</i>');
  });

      $('.first.circle:eq(4)').circleProgress({
    value: 0.83,
    animation: true,
    fill: {gradient: ['#00a99d', '#00a99d']},
    emptyFill: "#e4e4e4",
    thickness: "4.5",
    size: 120,
    animation: { duration: 2000}
  }).on('circle-animation-progress', function(event, progress) {
    $(this).find('strong').html(Math.round(83 * progress) + '<i>%</i>');
  });

      $('.first.circle:eq(5)').circleProgress({
    value: 0.5,
    animation: true,
    fill: {gradient: ['#00a99d', '#00a99d']},
    emptyFill: "#e4e4e4",
    thickness: "4.5",
    size: 120,
    animation: { duration: 2000}
  }).on('circle-animation-progress', function(event, progress) {
    $(this).find('strong').html(Math.round(50 * progress) + '<i>%</i>');
  });
};

function isVisible(tag) {
    var t = $(tag);
    var w = $(window);
    var wt = w.scrollTop();
    var tt = t.offset().top;
    var tb = tt + t.height();
    return ((tb <= wt + w.height()) && (tt >= wt));
}

$(function () {
    $(window).scroll(function () {
        var b = $("#our_powerful_skills");
        if (!b.prop("shown") && isVisible(b)) {
            b.prop("shown", true);
            circle_animation();
        }
    });
});

circle_animation();