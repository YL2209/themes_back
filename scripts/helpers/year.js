hexo.extend.helper.register('getAnimalIcon', function (year) {
    var index = parseInt(year) % 12;
    var icon = {
        0: 'icon-shengxiaohou',
        1: 'icon-shengxiaoji',
        2: 'icon-shengxiaogou',
        3: 'icon-shengxiaozhu',
        4: 'icon-shengxiaoshu',
        5: 'icon-shengxiaoniu',
        6: 'icon-shengxiaohu',
        7: 'icon-shengxiaotu',
        8: 'icon-shengxiaolong',
        9: 'icon-shengxiaoshe',
        10: 'icon-shengxiaoma',
        11: 'icon-shengxiaoyang',
    }
    return icon[index]
});