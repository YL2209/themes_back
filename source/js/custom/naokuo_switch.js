
// 读取主题模式数值
window.addEventListener("DOMContentLoaded", function () {
  var NaokuoMode2 = localStorage.getItem("naokuotheme")
  switch (NaokuoMode2) {
    case "mode1":
      document.documentElement.setAttribute('naokuo-theme', 'mode1')
      // alert(localStorage.getItem("naokuotheme"))
      break;
    case "mode2":
      document.documentElement.setAttribute('naokuo-theme', 'mode2')
      // alert(localStorage.getItem("naokuotheme"))
      break;
    default:
      break;
  }
})

function naokuo_SwitcMode() {
  const NaokuoMode = document.documentElement.getAttribute('naokuo-theme')
  switch (NaokuoMode) {
    case "mode1":
      document.documentElement.setAttribute('naokuo-theme', 'mode2')
      localStorage.setItem("naokuotheme", document.documentElement.getAttribute('naokuo-theme'))
      // alert(localStorage.getItem("naokuotheme"))
      break;
    case "mode2":
      document.documentElement.setAttribute('naokuo-theme', 'mode1')
        // 存储主题模式数值
      localStorage.setItem("naokuotheme", document.documentElement.getAttribute('naokuo-theme'))
      // alert(localStorage.getItem("naokuotheme"))
      break;
    default:
      break;
  }
}

