'use strict';

function naokuopostSiteCardGroup(args, content) {
  if (args.length > 0) {
    return `<div class="site-card-group"><p class='p h2'>${args}</p>${content}</div>`;
  } else {
    return `<div class="site-card-group">${content}</div>`;
  }
}

function naokuoflink(args) {
  args = args.join(' ').split(', ')
  // 所有支持的参数
  let 名称 = args[0].trim();
  let 链接 = '';
  let 背景 = '';
  let 头像 = '';
  let 描述 = '';
  // 解析
  if (args.length > 1) {
    for (let i = 1; i < args.length; i++) {
      let tmp = args[i].trim();
      if (tmp.includes('链接=')) {
        链接 = tmp.substring(3, tmp.length);
      } else if (tmp.includes('背景=')) {
        背景 = tmp.substring(3, tmp.length);
      } else if (tmp.includes('头像=')) {
        头像 = tmp.substring(3, tmp.length);
      } else if (tmp.includes('描述=')) {
        描述 = tmp.substring(3, tmp.length);
      }
    }
  }
  // 布局
  let result = '';
  result += '<a class="naokuo_flink-list-card" href="' + 链接 + '" data-title="' + 描述 + '" >';
  result += '<div class="wrapper cover"><img class="no-lightbox cover fadeIn entered loaded" src="' + 背景 + '"/></div>';
  result += '<div class="info">';
  if (头像.length > 0) {
    result += '<img class="no-lightbox entered loaded" src="' + 头像 + '"/>';
  } else {

  }

  result += '<span class="flink-sitename">' + 名称 + '</span>';
  result += '</div></a>';
  return result;
}

// {% site link, img, title, description %}
hexo.extend.tag.register('友链', naokuoflink);
hexo.extend.tag.register('友链组', naokuopostSiteCardGroup, {ends: true});