window.document.oncontextmenu = function (event) {
  if (event.ctrlKey) return true; //ctrl+右键 使用原生右键
  if (/android|Android|webOS|BlackBerry/i.test(navigator.userAgent)) return true; //媒体选择
  if (localStorage.getItem("SAOSwitch") === 'turnOff') return true //若持续关闭标记值为turnoff则使用原生菜单
  return popMenu(event); //打开右键菜单
};

//监听位移动作，实现拖动效果
var dvMEnu = document.getElementById("SAO-menu");
var xMenu = 0;
var yMenu = 0;
var lMenu = 0;
var tMenu = 0;
var isDownMEnu = false;
dvMEnu.onmousedown = function (e) {
  xMenu = e.clientX;
  yMenu = e.clientY;
  lMenu = dvMEnu.offsetLeft;
  tMenu = dvMEnu.offsetTop;
  isDownMEnu = true;
  dvMEnu.style.cursor = "move"
};
window.onmousemove = function (e) {
  if (isDownMEnu == false) {
    return
  }
  var nx = e.clientX;
  var ny = e.clientY;
  var nl = nx - (xMenu - lMenu);
  var nt = ny - (yMenu - tMenu);
  dvMEnu.style.left = nl + "px";
  dvMEnu.style.top = nt + "px"
};
dvMEnu.onmouseup = function () {
  isDownMEnu = false;
  dvMEnu.style.cursor = "default"
};
//监听鼠标点击动作，点击空白处关闭菜单
document.addEventListener("click", function (event) {
  if (event.target.id === 'SAO-back') {
    SAOclose()
  }
});
//关闭菜单
function SAOclose() {
  var mymenu = document.getElementById('SAO-back');
  mymenu.style.display = "none";
}

//初始化，隐藏所有active类
function SAOinit() {
  var activedItems = document.querySelectorAll('.active');
  if (activedItems) {
    for (i = 0; i < activedItems.length; i++) {
      activedItems[i].classList.remove('active');
    }
  }
}
//二级菜单初始化，隐藏所有三级菜单的active类
function Menuinit(menu) {
  var activedChild = menu.querySelectorAll('.active');
  if (activedChild) {
    for (i = 0; i < activedChild.length; i++) {
      activedChild[i].classList.remove('active');
    }
  }
}
//link start,处理链接跳转的pjax请求；调用了主题自带的pjax对象。其他主题需要另外适配。
function linkStart(link) {
  if (link.includes('https://') || link.includes('http://')) {
    window.location.href = link;
  }
  else {
    if (pjax) {
      pjax.loadUrl(link);
    }
    else {
      window.location.href = link;
    }
  }
}
//点击菜单内元素播放点击音频
//无子菜单时，点击音效
function clickAudio() {
  var clickAudio = document.getElementById("SAOClick");
  if (clickAudio) {
    clickAudio.play();//有音频时播放
  }
}
//背景切换时，点击音效
function imgeAudio() {
  var imgeAudio = document.getElementById("SAOImge");
  if (imgeAudio) {
    imgeAudio.play();//有音频时播放
  }
}
//关闭窗口时，点击音效
function LogoffAudio() {
  var LogoffAudio = document.getElementById("SAOLogoff");
  if (LogoffAudio) {
    LogoffAudio.play();//有音频时播放
  }
}
//取消关闭窗口时，点击音效
function LogonAudio() {
  var LogonAudio = document.getElementById("SAOLogon");
  if (LogonAudio) {
    LogonAudio.play();//有音频时播放
  }
}
//有子菜单时，展开音效
function panelAudio() {
  var panelAudio = document.getElementById("SAOPanel");
  if (panelAudio) {
    panelAudio.play();//有音频时播放
  }
}
//警告音效
function alertAudio() {
  var alertAudio = document.getElementById("SAOAlert");
  if (alertAudio) {
    alertAudio.play();//有音频时播放
  }
}
//关闭当前页面
function confirmLogout() {
  setTimeout(function () {
    window.opener = null;
    window.open('', '_self');
    window.close();
  }, 500);
}
function openLogout() {
  SAOclose();
  var logoutWindow = document.getElementById('SAO-logout');
  logoutWindow.classList.add('activeLogout');
}
function cancelLogout() {
  var logoutWindow = document.getElementById('SAO-logout');
  logoutWindow.classList.remove('activeLogout');
}

//监听一级菜单点击动作，控制二级菜单显隐
function UtilsClick() {
  var thisElement = event.target;
  // console.log('click at', thisElement);
  var hasMenu = thisElement.parentElement.querySelector('.menu-list');
  var hasPanel = thisElement.parentElement.querySelector('.user-panel');
  var hasActived = thisElement.parentElement.querySelector('.active');
  //当有二级菜单或属性栏被激活时
  if (hasActived) {
    // console.log('hasmenu or haspanel]');
    //如果有二级菜单且已经激活，则重新隐藏二级菜单
    if (hasMenu && (hasMenu.className.indexOf('active') > -1)) {
      hasMenu.classList.remove('active');
    }
    //如果有属性栏且已经激活，则重新隐藏属性栏
    if (hasPanel && (hasPanel.className.indexOf('active') > -1)) {
      hasPanel.classList.remove('active');
    }
  }
  else {
    SAOinit();//先初始化以清除其他的激活项
    //若有二级菜单就显示二级菜单
    if (hasMenu) {
      hasMenu.classList.add('active');
    }
    //若有属性栏，就显示属性栏
    if (hasPanel) {
      hasPanel.classList.add('active');
    }
  }
}
//监听二级菜单点击动作，控制三级菜单显隐
function MenusClick() {
  var thisElement = event.target;
  // console.log('click at', thisElement);
  //当前按钮指向的三级菜单
  var hasChild = thisElement.parentElement.querySelector('.menu-child');
  //当前按钮所在的二级菜单
  var menuParent = thisElement.parentElement.parentElement;
  if (hasChild) {
    //若已经激活了，则再点击就隐藏；
    if (hasChild.className.indexOf('active') > -1) {
      hasChild.classList.remove('active');
    }
    //若未激活
    else {
      Menuinit(menuParent);//先初始化以清除其他的激活项
      hasChild.classList.add('active');//再给当前子菜单添加激活
    }
  }
}

function popMenu(event) {
  //播放菜单打开音乐
  SAOinit();
  var audio = document.getElementById("SAOlauncher");
  if (audio) {
    audio.play();//有音乐时打开
  }
  document.getElementById('SAO-back').style.display = "block";
  var mymenu = document.getElementById('SAO-menu');
  var screenWidth = document.documentElement.clientWidth || document.body.clientWidth;
  var screenHeight = document.documentElement.clientHeight || document.body.clientHeight;
  // 菜单显示
  mymenu.style.display = 'block';

  //---- start 点击位置旁边生成。不自动判断位置
  // mymenu.style.left = (event.clientX + mymenu.clientWidth/2) + "px";
  // mymenu.style.top = (event.clientY - mymenu.clientHeight/2) + "px";
  //--- end 点击位置旁边生成。不自动判断位置
  //---- start 自动判断确保给菜单边缘留下足够位置
  //根据当前位置决定菜单出现位置，确保菜单可完整显示
  var currentX = event.clientX;
  var currentY = event.clientY;
  //X轴判断
  //偏左
  if (currentX < 230) {
    mymenu.style.left = (mymenu.clientWidth / 2 + 230) + "px";
  }
  //偏右
  else if ((screenWidth - currentX) < 320) {
    mymenu.style.left = (mymenu.clientWidth / 2 - 320 + screenWidth) + "px";
  }
  //默认情况
  else {
    mymenu.style.left = (currentX + mymenu.clientWidth / 2) + "px";
  }
  //Y轴判断
  //偏高
  if (currentY < (mymenu.clientHeight / 2 + 130)) {
    mymenu.style.top = "130px";
  }
  //偏低
  else if ((screenHeight - currentY) < (80 + mymenu.clientHeight / 2)) {
    mymenu.style.top = (screenHeight - mymenu.clientHeight - 80) + "px";
  }
  //默认情况
  else {
    mymenu.style.top = (event.clientY - mymenu.clientHeight / 2) + "px";
  }
  //---- end 自动判断确保给菜单边缘留下足够位置
  //屏蔽原生菜单
  return false;
}

//自定义动作
//搜索按钮动作
function openSearch() {
  document.body.style.cssText = 'width: 100%;overflow: hidden'
  document.querySelector('#local-search .search-dialog').style.display = 'block'
  document.querySelector('#local-search-input input').focus()
  btf.fadeIn(document.getElementById('search-mask'), 0.5)
  if (!loadFlag) {
    search(GLOBAL_CONFIG.localSearch.path)
    loadFlag = true
  }
  // shortcut: ESC
  document.addEventListener('keydown', function f(event) {
    if (event.code === 'Escape') {
      closeSearch()
      document.removeEventListener('keydown', f)
    }
  })
}

//深前色模式切换
function openDarkMode() { // Switch Between Light And Dark Mode
  const nowMode = document.documentElement.getAttribute('data-theme') === 'dark' ? 'dark' : 'light';
  if (nowMode === 'light') {
    activateDarkMode();
    saveToLocal.set('theme', 'dark', 2);
    GLOBAL_CONFIG.Snackbar !== undefined && btf.snackbarShow(GLOBAL_CONFIG.Snackbar.day_to_night);
  } else {
    activateLightMode();
    saveToLocal.set('theme', 'light', 2);
    GLOBAL_CONFIG.Snackbar !== undefined && btf.snackbarShow(GLOBAL_CONFIG.Snackbar.night_to_day);
  }
  // handle some cases
  typeof utterancesTheme === 'function' && utterancesTheme();
  typeof changeGiscusTheme === 'function' && changeGiscusTheme();
  typeof FB === 'object' && window.loadFBComment();
  window.DISQUS && document.getElementById('disqus_thread').children.length && setTimeout(() => window.disqusReset(), 200);
  typeof runMermaid === 'function' && window.runMermaid();
}


//单栏和双栏切换
function openhideAsideBtn() { // Hide aside
  const $htmlDom = document.documentElement.classList;
  $htmlDom.contains('hide-aside')
    ? saveToLocal.set('aside-status', 'show', 2) || SnackbarIMGES('你已切换为双栏', 2000)
    : saveToLocal.set('aside-status', 'hide', 2) || SnackbarIMGES('你已切换为单栏', 2000);
  $htmlDom.toggle('hide-aside');
}

//看板娘开关切换
function openlive2d() {
  var w = document.getElementById("waifu-toggle");
  var wa = document.getElementById("waifu").style;
  if (w.classList == "waifu-toggle-active") {
    SnackbarIMGES('你好，我是Naokuo的小助手！', 10000);
    w.classList.remove("waifu-toggle-active");
    document.getElementById("waifu-times1").classList.remove("waifu-times1-active")
    document.getElementById("waifu-daichuli1").classList.remove("waifu-daichuli1-active")
    // wa.bottom = "0px";
    if (w.getAttribute("first-time")) {
      loadWidget(config);
      w.removeAttribute("first-time");
    } else {
      localStorage.removeItem("waifu-display");
      wa.display = "";
      setTimeout(() => {
        wa.bottom = 0;
      }, 0);
    }
  } else {
    localStorage.setItem("waifu-display", Date.now());
    SnackbarIMGES('愿有一天能与你再次重逢！', 10000);
    // showMessage("愿你有一天能与重要的人重逢。", 2000, 11);
    wa.bottom = "-500px";
    setTimeout(() => {
      wa.display = "none";
      document.getElementById("waifu-times1").classList.add("waifu-times1-active")
      document.getElementById("waifu-daichuli1").classList.add("waifu-daichuli1-active")  
      w.classList.add("waifu-toggle-active");
    }, 3000);
  }
}
//阅读模式开关切换
// function openreadmode(){
//   var r = document.body.classList;
//   if (r=="read-mode") {
//     r.remove('read-mode');
//   } else {
//     r.add('read-mode');
//   }
// }
function openReadMode() { // read-mode
  const $body = document.body;
  const newEle = document.createElement('button');
  // var r = document.body.classList;
  if ($body.classList=="read-mode") {
    SnackbarIMGES('你已关闭阅读模式', 2000);
    $body.classList.remove('read-mode');
    newEle.remove();
    newEle.removeEventListener('click', clickFn);
  } else {
    SnackbarIMGES('你已打开阅读模式', 2000);
    $body.classList.add('read-mode');
    newEle.type = 'button';
    newEle.className = 'fas fa-sign-out-alt exit-readmode';
    $body.appendChild(newEle);
    newEle.addEventListener('click', clickFn)
  }
}
//在线聊天按钮动作
// function openTidio() {
// window.tidioChatApi.show();window.tidioChatApi.open();
// }
//镜像站跳转动作
// function Mirror() {
//   let pathname;
//   let hostname;
//   let url;
//   pathname = window.location.pathname;
//   hostname = window.location.hostname;
//   if (hostname === 'akilar.top') {
//     url = "https://akilar.gitee.io" + pathname;
//     window.alert("即将前往糖果屋分店🍬");
//     window.location.href = url;
//   }
//   else if (hostname === 'akilar.gitee.io') {
//     url = "https://akilar.top" + pathname;
//     window.alert("正在返回糖果屋本部🍭！");
//     window.location.href = url;
//   }
//   else {
//     window.alert("Master，本地调试不需要跳转哦！🍫");
//   }
// }

//评论窗口跳转
function ToComment() {
  var hasComment = document.getElementById('post-comment');
  if (hasComment) {
    window.location.href = '#post-comment'; //如果有评论区就跳转到评论区
  }
  else {
    linkStart('/comments/');//如果没有，就跳转到留言板
  };
}
// 回到顶部
function openToTop() { // Back to top
  btf.scrollToDest(0, 500);
}

//评论窗口跳转
// function ToComment(){
//   var hasComment = document.getElementById('post-comment');
//   if (hasComment){
//     window.location.href = '#post-comment'; //如果有评论区就跳转到评论区
//   }
//   else{
//     linkStart('/comments/');//如果没有，就跳转到留言板
//   };
// }

//固化关闭右键菜单效果
function SAOKeepOff() {
  localStorage.setItem("SAOSwitch", "turnOff");//将关闭状态激活
  SAOclose();
}

//控制开关右键菜单效果
function SAOSwitch() {
  var SAOSwitch = localStorage.getItem("SAOSwitch");
  // 若键值存在且为turnoff，则转为turn；同时打开右键菜单
  if (SAOSwitch === "turnOff") {
    localStorage.setItem("SAOSwitch", "turnOn");
    popMenu(event); // 打开右键菜单
  } else { //否则，持续关闭右键菜单
    SAOKeepOff()
  }
}