hexo.extend.helper.register('arkIcon', function () {
  var icon = [
      '#icon-macaw',
      '#icon-Macaron',
      '#icon-ESPRESSOMACHINE',
      '#icon-light-machine-gun',
      '#icon-h_machine_maintenance'
  ]
  var index = Math.floor(Math.random()*icon.length);
  return icon[index]
});