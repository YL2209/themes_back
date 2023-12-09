hexo.extend.generator.register("random", function (locals) {
  const config = hexo.config.random || {};
  const themeConfig = hexo.theme.config;
  const pjaxEn = themeConfig.pjax.enable;
  // const randomNumberFriend = themeConfig.footer.list.randomFriends || 0;
  const posts = [];
  const link = locals.data.link || [];
  for (const post of locals.posts.data) {
    if (post.random !== false) posts.push(post.path);
  }

  const link_list = [];

  link.forEach(element => {
    element.link_list.forEach(link_list_item => {
      link_list.push(link_list_item);
    });
  });

  let result = `var posts=${JSON.stringify(
    posts
  )};function toRandomPost(){
    ${pjaxEn ? "pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);" : "window.location.href='/'+posts[Math.floor(Math.random() * posts.length)];"}
  };`;
  return {
    path: config.path || "naokuo/random.js",
    data: result,
  };
});
