

//Butterfly主题自带样式提示弹窗
function SnackbarIMGES(text, time) {
  const { position, bgLight, bgDark } = GLOBAL_CONFIG.Snackbar
  const bg = document.documentElement.getAttribute('data-theme') === 'light' ? bgLight : bgDark
  Snackbar.show({
    text: '✨ ' + text + ' ✨',
    backgroundColor: bg,
    pos: position,
    actionText: '🍭🔮🎨🎊🍬',
    duration: time,
    // showAction: false,
    // onActionClick: function(e) {
    // location.reload()
    // },
  });
};

// function randomSelectionPIUS(obj) {
//   return Array.isArray(obj) ? obj[Math.floor(Math.random() * obj.length)] : obj
// }



// function getElementsById(arrs) {
//   var arrEls = new Array(arrs);
//   for (var i = 0; i < arrEls.length; i++) {
//     var node = document.getElementById(arrEls[i]);
//     arrEls[i] = node;
//   }
// }

//动图背景切换
var fruItsIMGes = [
  "https://img.zcool.cn/community/012dfd5ecefc97a8012066216406ca.gif",
  "https://img.zcool.cn/community/0141af608011ad11013e3b7d148380.gif",
  "https://img.zcool.cn/community/01ba835acab6f5a801212573c70956.gif",
  "https://img.zcool.cn/community/01930f5acab717a80121257389449d.gif",
  "https://img.zcool.cn/community/014dea5acab731a801212573876fdc.gif",
  "https://img.zcool.cn/community/0147015acab724a8012062e339de1b.gif",
  "https://img.zcool.cn/community/01cf2a5acab726a8012062e39c7a6b.gif",
  "https://img.zcool.cn/community/014c8f5acab701a801212573a1515a.gif",
  "https://img.zcool.cn/community/01fa806100b8e211013f4720d1793b.gif",
  "https://img.zcool.cn/community/016f146100b8ea11013eaf7055e47b.gif",
  "https://img.zcool.cn/community/0100036100b8ea11013eaf701a9fc1.gif",
  "https://img.zcool.cn/community/018bdc6100b92f11013eaf70ff523d.gif",
  "https://img.zcool.cn/community/0104d16100b8ea11013f47208ce63e.gif",
  "https://img.zcool.cn/community/0130245d3e38cea80120695cbd5c36.gif",
  "https://img.zcool.cn/community/01dfbb5d3e38d0a8012187f46d3d9c.gif",
  "https://img.zcool.cn/community/014ab75d3e38d0a80120695c137b17.gif",
  "https://img.zcool.cn/community/0170145d3e38cba80120695ccc4669.gif",
  "https://img.zcool.cn/community/018b865d3e38c9a8012187f44eb478.gif",
  "https://img.zcool.cn/community/014b715d3e38c8a80120695c1c82d6.gif",
  "https://img.zcool.cn/community/019f835d3e38cba8012187f4d0b9bc.gif",
  "https://img.zcool.cn/community/01d71c5d3e38c8a8012187f4b5acc5.gif"
];

//简约背景切换
var fruItsIMGes2 = [
  "https://dogefs.s3.ladydaily.com/~/source/wallhaven/full/ex/wallhaven-ex9gwo.png?w=2560&h=1440&fmt=webp",
  "https://dogefs.s3.ladydaily.com/~/source/wallhaven/full/we/wallhaven-we628p.jpg?w=2560&h=1440&fmt=webp",
  "https://dogefs.s3.ladydaily.com/~/source/wallhaven/full/vq/wallhaven-vqo2ol.jpg?w=2560&h=1440&fmt=webp",
  "https://dogefs.s3.ladydaily.com/~/source/wallhaven/full/x6/wallhaven-x6p3y3.jpg?w=2560&h=1440&fmt=webp",
  "https://dogefs.s3.ladydaily.com/~/source/wallhaven/full/jx/wallhaven-jxyopy.png?w=2560&h=1440&fmt=webp",
  "https://dogefs.s3.ladydaily.com/~/source/wallhaven/full/gp/wallhaven-gp9god.jpg?w=2560&h=1440&fmt=webp",
  "https://dogefs.s3.ladydaily.com/~/source/wallhaven/full/rr/wallhaven-rrpp6m.png?w=2560&h=1440&fmt=webp",
  "https://dogefs.s3.ladydaily.com/~/source/wallhaven/full/d6/wallhaven-d6o77l.jpg?w=2560&h=1440&fmt=webp",
  "https://dogefs.s3.ladydaily.com/~/source/wallhaven/full/yx/wallhaven-yxgmll.png?w=2560&h=1440&fmt=webp",
  "https://dogefs.s3.ladydaily.com/~/source/wallhaven/full/p9/wallhaven-p97l5e.png?w=2560&h=1440&fmt=webp",
  "https://dogefs.s3.ladydaily.com/~/source/wallhaven/full/vq/wallhaven-vqy2jp.jpg?w=2560&h=1440&fmt=webp",
  "https://dogefs.s3.ladydaily.com/~/source/wallhaven/full/ex/wallhaven-exwgw8.png?w=2560&h=1440&fmt=webp",
  "https://dogefs.s3.ladydaily.com/~/source/wallhaven/full/2y/wallhaven-2yoo1m.jpg?w=2560&h=1440&fmt=webp",
  "https://dogefs.s3.ladydaily.com/~/source/wallhaven/full/d6/wallhaven-d6dvdl.png?w=2560&h=1440&fmt=webp",
  "https://dogefs.s3.ladydaily.com/~/source/wallhaven/full/d6/wallhaven-d6ov73.jpg?w=2560&h=1440&fmt=webp",
  "https://dogefs.s3.ladydaily.com/~/source/wallhaven/full/we/wallhaven-welokx.png?w=2560&h=1440&fmt=webp",
  "https://dogefs.s3.ladydaily.com/~/source/wallhaven/full/3l/wallhaven-3lrw69.jpg?w=2560&h=1440&fmt=webp",
  "https://dogefs.s3.ladydaily.com/~/source/wallhaven/full/l8/wallhaven-l82kpr.jpg?w=2560&h=1440&fmt=webp",
  "https://dogefs.s3.ladydaily.com/~/source/wallhaven/full/kx/wallhaven-kx1mgd.jpg?w=2560&h=1440&fmt=webp",
  "https://dogefs.s3.ladydaily.com/~/source/wallhaven/full/we/wallhaven-wed2qq.png?w=2560&h=1440&fmt=webp",
  "https://dogefs.s3.ladydaily.com/~/source/wallhaven/full/zy/wallhaven-zy5y1o.jpg?w=2560&h=1440&fmt=webp",
  "https://dogefs.s3.ladydaily.com/~/source/wallhaven/full/rr/wallhaven-rrozyw.jpg?w=2560&h=1440&fmt=webp",
  "https://dogefs.s3.ladydaily.com/~/source/wallhaven/full/yx/wallhaven-yxgx6l.jpg?w=2560&h=1440&fmt=webp",
  "https://dogefs.s3.ladydaily.com/~/source/wallhaven/full/7p/wallhaven-7prmdv.jpg?w=2560&h=1440&fmt=webp",
  "https://dogefs.s3.ladydaily.com/~/source/wallhaven/full/9d/wallhaven-9d89zw.jpg?w=2560&h=1440&fmt=webp",
  "https://dogefs.s3.ladydaily.com/~/source/wallhaven/full/x6/wallhaven-x6jo5o.jpg?w=2560&h=1440&fmt=webp",
  "https://dogefs.s3.ladydaily.com/~/source/wallhaven/full/2y/wallhaven-2y3qrg.png?w=2560&h=1440&fmt=webp",
  "https://dogefs.s3.ladydaily.com/~/source/wallhaven/full/x6/wallhaven-x6dj5z.png?w=2560&h=1440&fmt=webp",
  "https://dogefs.s3.ladydaily.com/~/source/wallhaven/full/kx/wallhaven-kxj3l1.jpg?w=2560&h=1440&fmt=webp",
  "https://dogefs.s3.ladydaily.com/~/source/wallhaven/full/yx/wallhaven-yxgyyx.jpg?w=2560&h=1440&fmt=webp",
  "https://dogefs.s3.ladydaily.com/~/source/wallhaven/full/5g/wallhaven-5gkk65.jpg?w=2560&h=1440&fmt=webp",
  "https://dogefs.s3.ladydaily.com/~/source/wallhaven/full/o5/wallhaven-o5l327.jpg?w=2560&h=1440&fmt=webp",
  "https://dogefs.s3.ladydaily.com/~/source/wallhaven/full/we/wallhaven-wem6mp.png?w=2560&h=1440&fmt=webp",
  "https://dogefs.s3.ladydaily.com/~/source/wallhaven/full/zy/wallhaven-zy552w.jpg?w=2560&h=1440&fmt=webp",
  "https://dogefs.s3.ladydaily.com/~/source/wallhaven/full/9d/wallhaven-9d8j98.jpg?w=2560&h=1440&fmt=webp",
  "https://dogefs.s3.ladydaily.com/~/source/wallhaven/full/x6/wallhaven-x6jrr3.png?w=2560&h=1440&fmt=webp",
  "https://dogefs.s3.ladydaily.com/~/source/wallhaven/full/l8/wallhaven-l8228q.jpg?w=2560&h=1440&fmt=webp",
  "https://dogefs.s3.ladydaily.com/~/source/wallhaven/full/we/wallhaven-wed376.jpg?w=2560&h=1440&fmt=webp",
  "https://dogefs.s3.ladydaily.com/~/source/wallhaven/full/we/wallhaven-wexlgx.png?w=2560&h=1440&fmt=webp",
  "https://dogefs.s3.ladydaily.com/~/source/wallhaven/full/3l/wallhaven-3l5m1d.png?w=2560&h=1440&fmt=webp",
  "https://dogefs.s3.ladydaily.com/~/source/wallhaven/full/d6/wallhaven-d6wgmo.png?w=2560&h=1440&fmt=webp",
  "https://dogefs.s3.ladydaily.com/~/source/wallhaven/full/m3/wallhaven-m3w6pk.png?w=2560&h=1440&fmt=webp",
  "https://dogefs.s3.ladydaily.com/~/source/wallhaven/full/qz/wallhaven-qzmgjq.jpg?w=2560&h=1440&fmt=webp",
  "https://dogefs.s3.ladydaily.com/~/source/wallhaven/full/qz/wallhaven-qz3e17.jpg?w=2560&h=1440&fmt=webp",
  "https://dogefs.s3.ladydaily.com/~/source/wallhaven/full/x6/wallhaven-x6jlgl.png?w=2560&h=1440&fmt=webp",
  "https://dogefs.s3.ladydaily.com/~/source/wallhaven/full/9d/wallhaven-9d9111.jpg?w=2560&h=1440&fmt=webp",
  "https://dogefs.s3.ladydaily.com/~/source/wallhaven/full/yx/wallhaven-yx2eqx.png?w=2560&h=1440&fmt=webp",
  "https://dogefs.s3.ladydaily.com/~/source/wallhaven/full/we/wallhaven-wempvr.jpg?w=2560&h=1440&fmt=webp",
  "https://dogefs.s3.ladydaily.com/~/source/wallhaven/full/d6/wallhaven-d6w763.jpg?w=2560&h=1440&fmt=webp",
  "https://dogefs.s3.ladydaily.com/~/source/wallhaven/full/rr/wallhaven-rry6gw.png?w=2560&h=1440&fmt=webp",
  "https://dogefs.s3.ladydaily.com/~/source/wallhaven/full/d6/wallhaven-d6edoj.png?w=2560&h=1440&fmt=webp",
  "https://dogefs.s3.ladydaily.com/~/source/wallhaven/full/gp/wallhaven-gpqye7.jpg?w=2560&h=1440&fmt=webp",
  "https://dogefs.s3.ladydaily.com/~/source/wallhaven/full/5g/wallhaven-5gkgv8.jpg?w=2560&h=1440&fmt=webp",
  "https://dogefs.s3.ladydaily.com/~/source/wallhaven/full/l8/wallhaven-l8jo3p.png?w=2560&h=1440&fmt=webp",
  "https://dogefs.s3.ladydaily.com/~/source/wallhaven/full/gp/wallhaven-gpmg53.jpg?w=2560&h=1440&fmt=webp",
  "https://dogefs.s3.ladydaily.com/~/source/wallhaven/full/x6/wallhaven-x69l7v.jpg?w=2560&h=1440&fmt=webp",
  "https://dogefs.s3.ladydaily.com/~/source/wallhaven/full/p9/wallhaven-p9jx2e.png?w=2560&h=1440&fmt=webp",
  "https://dogefs.s3.ladydaily.com/~/source/wallhaven/full/l8/wallhaven-l8kwpr.jpg?w=2560&h=1440&fmt=webp",
  "https://dogefs.s3.ladydaily.com/~/source/wallhaven/full/l8/wallhaven-l8jxe2.jpg?w=2560&h=1440&fmt=webp",
  "https://dogefs.s3.ladydaily.com/~/source/wallhaven/full/6d/wallhaven-6d5r5x.jpg?w=2560&h=1440&fmt=webp",
  "https://dogefs.s3.ladydaily.com/~/source/wallhaven/full/6d/wallhaven-6dp6ox.jpg?w=2560&h=1440&fmt=webp",
  "https://dogefs.s3.ladydaily.com/~/source/wallhaven/full/we/wallhaven-we6gmx.jpg?w=2560&h=1440&fmt=webp",
  "https://dogefs.s3.ladydaily.com/~/source/wallhaven/full/l8/wallhaven-l8kw5p.png?w=2560&h=1440&fmt=webp",
  "https://dogefs.s3.ladydaily.com/~/source/wallhaven/full/qz/wallhaven-qzmzvd.jpg?w=2560&h=1440&fmt=webp",
  "https://dogefs.s3.ladydaily.com/~/source/wallhaven/full/85/wallhaven-85r1m1.png?w=2560&h=1440&fmt=webp",
  "https://dogefs.s3.ladydaily.com/~/source/wallhaven/full/l8/wallhaven-l82wjy.jpg?w=2560&h=1440&fmt=webp",
  "https://dogefs.s3.ladydaily.com/~/source/wallhaven/full/kx/wallhaven-kx2k76.jpg?w=2560&h=1440&fmt=webp",
  "https://dogefs.s3.ladydaily.com/~/source/wallhaven/full/vq/wallhaven-vqyz3p.jpg?w=2560&h=1440&fmt=webp",
  "https://dogefs.s3.ladydaily.com/~/source/wallhaven/full/o5/wallhaven-o5ldk5.png?w=2560&h=1440&fmt=webp",
  "https://dogefs.s3.ladydaily.com/~/source/wallhaven/full/jx/wallhaven-jx1gxy.jpg?w=2560&h=1440&fmt=webp",
  "https://dogefs.s3.ladydaily.com/~/source/wallhaven/full/1p/wallhaven-1p22m9.png?w=2560&h=1440&fmt=webp",
  "https://dogefs.s3.ladydaily.com/~/source/wallhaven/full/gp/wallhaven-gpmjxe.png?w=2560&h=1440&fmt=webp"
];


//动漫背景切换
var fruItsIMGes3 = [
  "https://cdn.jsdelivr.net/gh/XXKDB/bloglmage/img/iTab-3z7vzy2.jfif",
  "https://dogefs.s3.ladydaily.com/~/source/wallhaven/full/e7/wallhaven-e7pwdw.jpg",
  "https://dogefs.s3.ladydaily.com/~/source/wallhaven/full/8o/wallhaven-8o6rmo.jpg",
  "https://dogefs.s3.ladydaily.com/~/source/wallhaven/full/1k/wallhaven-1kmk39.jpg",
  "https://dogefs.s3.ladydaily.com/~/source/wallhaven/full/9m/wallhaven-9m7kwd.png",
  "https://dogefs.s3.ladydaily.com/~/source/wallhaven/full/9m/wallhaven-9mex11.jpg",
  "https://dogefs.s3.ladydaily.com/~/source/wallhaven/full/1k/wallhaven-1kl36v.png",
  "https://dogefs.s3.ladydaily.com/~/source/wallhaven/full/1k/wallhaven-1kmg19.jpg",
  "https://dogefs.s3.ladydaily.com/~/source/wallhaven/full/3z/wallhaven-3zj6q3.jpg",
  "https://dogefs.s3.ladydaily.com/~/source/wallhaven/full/o3/wallhaven-o3edql.png",
  "https://dogefs.s3.ladydaily.com/~/source/wallhaven/full/z8/wallhaven-z865pw.jpg",
  "https://dogefs.s3.ladydaily.com/~/source/wallhaven/full/e7/wallhaven-e71v2l.jpg",
  "https://dogefs.s3.ladydaily.com/~/source/wallhaven/full/v9/wallhaven-v92r2m.jpg",
  "https://dogefs.s3.ladydaily.com/~/source/wallhaven/full/57/wallhaven-57q6r5.jpg",
  "https://dogefs.s3.ladydaily.com/~/source/wallhaven/full/pk/wallhaven-pkxwwe.png",
  "https://dogefs.s3.ladydaily.com/~/source/wallhaven/full/g7/wallhaven-g7kzjl.jpg",
  "https://dogefs.s3.ladydaily.com/~/source/wallhaven/full/y8/wallhaven-y8l89d.png",
  "https://dogefs.s3.ladydaily.com/~/source/wallhaven/full/72/wallhaven-72o6ze.jpg",
  "https://dogefs.s3.ladydaily.com/~/source/wallhaven/full/28/wallhaven-28mkg9.jpg"
];



  //动图背景切换
  var openImag3 = 0;
  var openIMAgesQU = 0;
  var iMAgesQU = 1;
  function openImageGif() {
    SnackbarIMGES('你已切换动态背景：第' + iMAgesQU + '张', 2000);
    document.getElementById("web_bg").style.backgroundImage = "url(" + fruItsIMGes[openImag3] + ")";
    openIMAgesQU = fruItsIMGes.length;
    if (openImag3 >= openIMAgesQU - 1) {
      openImag3 = 0;
      iMAgesQU = 1;
    } else {
      openImag3++;
      iMAgesQU++;
    }
  }


  ///简约背景切换
  var openImag31 = 0;
  var openIMAgesQU2 = 0;
  var iMAgesQU2 = 1;
  function openImageApi() {
    SnackbarIMGES('你已切换简约背景：第' + iMAgesQU2 + '张', 2000);
    document.getElementById("web_bg").style.backgroundImage = "url(" + fruItsIMGes2[openImag31] + ")";
    openIMAgesQU2 = fruItsIMGes2.length;
    if (openImag31 >= openIMAgesQU2 - 1) {
      openImag31 = 0;
      iMAgesQU2 = 1;
    } else {
      openImag31++;
      iMAgesQU2++;
    }
  }



  ///动漫背景切换
  var openImag33 = 0;
  var openIMAgesQU3 = 0;
  var iMAgesQU3 = 1;
  function openImage() {
    SnackbarIMGES('你已切换动漫背景：第' + iMAgesQU3 + '张', 2000);
    document.getElementById("web_bg").style.backgroundImage = "url(" + fruItsIMGes3[openImag33] + ")";
    openIMAgesQU3 = fruItsIMGes3.length;
    if (openImag33 >= openIMAgesQU3 - 1) {
      openImag33 = 0;
      iMAgesQU3 = 1;
    } else {
      openImag33++;
      iMAgesQU3++;
    }
  }
