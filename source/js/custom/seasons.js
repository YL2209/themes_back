!function () {
    var stopbiaoluo, staticxbiaoluo;
    var Imgbiaoluo = new Image();
    var todaybiaoluo = new Date();
    var monthbiaoluo = todaybiaoluo.getMonth() + 1;
    if (monthbiaoluo >= 3 && monthbiaoluo <= 5) {
        Imgbiaoluo.src = "https://s2.loli.net/2023/10/22/YKGxV71kMg2wsbe.png"
    } else if (monthbiaoluo >= 6 && monthbiaoluo <= 8) {
        Imgbiaoluo.src = "https://s2.loli.net/2023/10/22/Xx5uU1KAbkLoN82.png"
    } else if (monthbiaoluo >= 9 && monthbiaoluo <= 11) {
        Imgbiaoluo.src = "https://s2.loli.net/2023/10/22/ijvoGYa7SLCrBOu.png"
    } else {
        Imgbiaoluo.src = "https://s2.loli.net/2023/10/22/uqL2TsraQVWt3kA.png"
    }

    function Sakura(x, y, s, r, fn) {
        this.x = x;
        this.y = y;
        this.s = s;
        this.r = r;
        this.fn = fn;
    }
    Sakura.prototype.draw = function (cxt) {
        cxt.save();
        var xc = 40 * this.s / 4;
        cxt.translate(this.x, this.y);
        cxt.rotate(this.r);
        cxt.drawImage(Imgbiaoluo, 0, 0, 40 * this.s, 40 * this.s)
        cxt.restore();
    }
    Sakura.prototype.update = function () {
        this.x = this.fn.x(this.x, this.y);
        this.y = this.fn.y(this.y, this.y);
        this.r = this.fn.r(this.r);
        if (this.x > window.innerWidth || this.x < 0 || this.y > window.innerHeight || this.y < 0) {
            this.r = getRandom('fnr');
            if (Math.random() > 0.4) {
                this.x = getRandom('x');
                this.y = 0;
                this.s = getRandom('s');
                this.r = getRandom('r');
            } else {
                this.x = window.innerWidth;
                this.y = getRandom('y');
                this.s = getRandom('s');
                this.r = getRandom('r');
            }
        }
    }
    SakuraList = function () {
        this.list = [];
    }
    SakuraList.prototype.push = function (sakura) {
        this.list.push(sakura);
    }
    SakuraList.prototype.update = function () {
        for (var i = 0, len = this.list.length; i < len; i++) {
            this.list[i].update();
        }
    }
    SakuraList.prototype.draw = function (cxt) {
        for (var i = 0, len = this.list.length; i < len; i++) {
            this.list[i].draw(cxt);
        }
    }
    SakuraList.prototype.get = function (i) {
        return this.list[i];
    }
    SakuraList.prototype.size = function () {
        return this.list.length;
    }

    function getRandom(option) {
        var ret, random;
        switch (option) {
            case 'x':
                ret = Math.random() * window.innerWidth;
                break;
            case 'y':
                ret = Math.random() * window.innerHeight;
                break;
            case 's':
                ret = Math.random();
                break;
            case 'r':
                ret = Math.random() * 6;
                break;
            case 'fnx':
                random = -0.5 + Math.random() * 1;
                ret = function (x, y) {
                    return x + 0.5 * random - 1.7;
                };
                break;
            case 'fny':
                random = 1.5 + Math.random() * 0.7
                ret = function (x, y) {
                    return y + random;
                };
                break;
            case 'fnr':
                random = Math.random() * 0.03;
                ret = function (r) {
                    return r + random;
                };
                break;
        }
        return ret;
    }

    function startSakura() {
        requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame || window.oRequestAnimationFrame;
        var canvas = document.createElement('canvas'),
            cxt;
        staticxbiaoluo = true;
        canvas.height = window.innerHeight;
        canvas.width = window.innerWidth;
        canvas.setAttribute('style', 'position: fixed;left: 0;top: 0;pointer-events: none;z-index:-10;');
        canvas.setAttribute('id', 'canvas_sakura');
        document.getElementsByTagName('body')[0].appendChild(canvas);
        cxt = canvas.getContext('2d');
        var sakuraList = new SakuraList();
        for (var i = 0; i < 25; i++) {
            var sakura, randomX, randomY, randomS, randomR, randomFnx, randomFny;
            randomX = getRandom('x');
            randomY = getRandom('y');
            randomR = getRandom('r');
            randomS = getRandom('s');
            randomFnx = getRandom('fnx');
            randomFny = getRandom('fny');
            randomFnR = getRandom('fnr');
            sakura = new Sakura(randomX, randomY, randomS, randomR, {
                x: randomFnx,
                y: randomFny,
                r: randomFnR
            });
            sakura.draw(cxt);
            sakuraList.push(sakura);
        }
        stopbiaoluo = requestAnimationFrame(function () {
            cxt.clearRect(0, 0, canvas.width, canvas.height);
            sakuraList.update();
            sakuraList.draw(cxt);
            stopbiaoluo = requestAnimationFrame(arguments.callee);
        })
    }
    window.onresize = function () {
        var canvasSnow = document.getElementById('canvas_snow');
    }
    Imgbiaoluo.onload = function () {
        startSakura();
    }

    function stopp() {
        if (staticxbiaoluo) {
            var child = document.getElementById("canvas_sakura");
            child.parentNode.removeChild(child);
            window.cancelAnimationFrame(stopbiaoluo);
            staticxbiaoluo = false;
        } else {
            startSakura();
        }
    }
}();