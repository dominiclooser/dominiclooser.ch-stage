(function() {
  var $list;

  $list = $('.performance-list');

  $list.find('time').each(function() {
    var formatted, raw;
    raw = this.innerHTML;
    if (moment(raw).isValid()) {
      formatted = moment(raw).format('DD.MM.YY');
      return this.innerHTML = formatted;
    }
  });

}).call(this);
