(function() {
  var $list, latestDate, now;

  $list = $('.performance-list');

  latestDate = $list.find('li:first-child').children('time').html();

  now = moment();

  if (moment(latestDate).isBefore(now)) {
    $list.parents('section').remove();
  } else {
    $list.find('li').each(function() {
      var $entry, date;
      $entry = $(this);
      date = $entry.children('time').html();
      if (moment(date).isBefore(moment())) {
        $entry.nextAll().each(function() {
          return $(this).remove();
        });
        return $entry.remove();
      }
    });
  }

}).call(this);
