'use strict'
// 全局声明依赖
const urlFor = require('hexo-util').url_for.bind(hexo)

hexo.extend.filter.register('after_generate', function (locals) {
  // 首先获取整体的配置项名称
  const config = hexo.config.electric_clock ? hexo.config.electric_clock : hexo.theme.config.electric_clock
  // 如果配置开启
  if (!(config && config.enable)) return
  // 集体声明配置项
    const data = {
      // enable_page: config.enable_page ? config.enable_page : "all",
      // exclude: config.exclude,
      layout_type: config.layout.type,
      layout_name: config.layout.name,
      layout_index: config.layout.index ? config.layout.index : 0,
      loading: config.loading ? urlFor(config.loading) : "https://cdn.cbd.int/hexo-butterfly-clock-anzhiyu/lib/loading.gif",
      // clock_css: config.clock_css ? urlFor(config.clock_css) : "https://cdn.cbd.int/hexo-butterfly-clock-anzhiyu/lib/clock.min.css",
      clock_js: config.clock_js ? urlFor(config.clock_js) : "https://cdn.cbd.int/hexo-butterfly-clock-anzhiyu/lib/clock.min.js",
      ip_api: config.ip_api ? urlFor(config.ip_api) : "https://widget.qweather.net/simple/static/js/he-simple-common.js?v=2.0",
      qweather_key: config.qweather_key ? config.qweather_key : "b16a1fa0e63c46a4b8f28abfb06ae3fe",
      gaud_map_key: config.gaud_map_key ? config.gaud_map_key : "e2b04289e870b005374ee030148d64fd&s=rsv3",
      default_rectangle_enable: config.default_rectangle ? config.default_rectangle : false,
      rectangle: config.rectangle ? config.rectangle : "112.6534116,27.96920845",
    }
    
    //脚本资源
  const js_text = `<script defer src="${data.ip_api}"></script><script defer data-pjax src="${data.clock_js}"></script>`

  //挂载容器脚本
  var user_info_js = `<script data-pjax>
  var elist = '${data.exclude}'.split(',');
  var cpage = location.pathname;
  var qweather_key = '${data.qweather_key}';
  var gaud_map_key = '${data.gaud_map_key}';
  var baidu_ak_key = '${data.baidu_ak_key}';
  var flag = 0;
  var clock_rectangle = '${data.rectangle}';
  var clock_default_rectangle_enable = '${data.default_rectangle_enable}';
  for (var i=0;i<elist.length;i++){
    if (cpage.includes(elist[i])){
      flag++;
    }
  }
  </script>`
  
  // 注入用户脚本
  // 此处利用挂载容器实现了二级注入
  hexo.extend.injector.register('body_end', user_info_js, "default");
  // 注入样式资源
  hexo.extend.injector.register('body_end', js_text, "default");
  // 注入脚本资源
  // hexo.extend.injector.register('head_end', css_text, "default");
},
hexo.extend.helper.register('priority', function(){
  // 过滤器优先级，priority 值越低，过滤器会越早执行，默认priority是10
  const pre_priority = hexo.config.electric_clock.priority ?  hexo.config.electric_clock.priority : hexo.theme.config.electric_clock.priority
  const priority = pre_priority ? pre_priority : 10
  return priority
})
)
