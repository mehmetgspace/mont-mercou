const MontMercou = {
  Helper: {},
  UI: {}
};

/**
 * @define DOMContentLoaded
 * @description default actions when page ready
 */
document.addEventListener('DOMContentLoaded', function() {
  MontMercou.Helper = new Helper();
  MontMercou.UI = new UI();

  MontMercou.UI.init();
});