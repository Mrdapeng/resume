<template>
  <div class="skill">
    <nav-bar></nav-bar>
    <div class="carousel">
      <div class="carousel__stage">
        <div class="spinner spinner--left">
          <div class="spinner__face js-active" data-bg="#d85b26">
            <div class="content" data-type="iceland">
              <div class="content__left">
              </div>
              <div class="content__right ">
                <div class="content__main ">
                  <p>1.熟练掌握 DIV+CSS 以及弹性盒和响应式局，能进行语义化的标签书写</p>
                  <p>2.理解 WEB 标准化开发。掌握 html5 的新特性。</p>
                  <p>3.能运用jade ejs</p>
                  <p>4.对html5.2也有一些了解</p>
                </div>
                <h3 class="content__index">Html</h3>
              </div>
            </div>
          </div>
          <div class="spinner__face" data-bg="#13468e">
            <div class="content" data-type="china">
              <div class="content__left">

              </div>
              <div class="content__right">
                <div class="content__main">
                  <p class="animated ">1.熟练运用 css 及 css3 新属性。</p>
                  <p>2.注重浏览器兼容性，掌握常见的 css hack。</p>
                  <p>3.掌握并熟练运用 bootstrap 框架并尝试阅读过其源码实现。掌握 css 预编译:Sass、Less、stylus.</p>
                  <p> 4.掌握flex布局，了解Grid Layout</p>
                  <p> 5.对css4也有一些了解</p>
                </div>
                <h3 class="content__index">Css</h3>
              </div>
            </div>
          </div>
          <div class="spinner__face" data-bg="#8492A6">
            <div class="content" data-type="usa">
              <div class="content__left">
              </div>
              <div class="content__right">
                <div class="content__main">
                  <p>1.熟练掌握原生JS</p>
                  <p>2.掌握js面向对象编程方法</p>
                  <p>3.熟悉并能应用es6的新特性</p>
                  <p>4.掌握一些性能优化的方法。</p>
                  <p>5.能熟练运用jQuery</p>
                  <p>6.掌握并熟练运用vue框架，拥有工程化开发的思想，对angular和react也有一定的了解.</p>
                </div>
                <h3 class="content__index">03</h3>
              </div>
            </div>
          </div>
          <div class="spinner__face" data-bg="#000">
            <div class="content" data-type="peru">
              <div class="content__left">
              </div>
              <div class="content__right">
                <div class="content__main">
                  <p>1.Node:熟练运用npm进行开发，熟悉包管理机制</p>
                  <p>2.能使用 gulp、webpack 進行工程化的前端开发</p>
                  <p>3.熟悉 express 框架。</p>
                  <p>4.熟练使用git，gitlab等版本控制工具</p>
                  <p>5.掌握ejs</p>
                </div>
                <h3 class="content__index">04</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="carousel__control">
      </div>
    </div>

    <!--  Poor man's preloader -->
    <div style="height: 0; width: 0; overflow: hidden">
      <img src="../assets/img/css3.jpg">
      <img src="../assets/img/html5.png">
      <img src="../assets/img/js.png">
      <img src="../assets/img/map.png">
    </div>
  </div>
</template>
<script>
  import $ from 'jquery'
  import navBar from '../components/navBar.vue'

  export default {

    mounted() {
      var activeIndex = 0;
      var limit = 0;
      var disabled = false;
      var $stage = undefined;
      var $controls = undefined;
      var canvas = false;

      var SPIN_FORWARD_CLASS = 'js-spin-fwd';
      var SPIN_BACKWARD_CLASS = 'js-spin-bwd';
      var DISABLE_TRANSITIONS_CLASS = 'js-transitions-disabled';
      var SPIN_DUR = 1000;

      var appendControls = function appendControls() {
        for (var i = 0; i < limit; i++) {
          $('.carousel__control').append('<a href="#" data-index="' + i + '"></a>');
        }


        var height = $('.carousel__control').children().last().outerHeight();

        $('.carousel__control').css('height', 30 + limit * height);
        $controls = $('.carousel__control').children();
        $controls.eq(activeIndex).addClass('active');
      };

      var setIndexes = function setIndexes() {
        $('.spinner').children().each(function (i, el) {
          $(el).attr('data-index', i);
          limit++;
        });
      };

      var duplicateSpinner = function duplicateSpinner() {
        var $el = $('.spinner').parent();
        var html = $('.spinner').parent().html();
        $el.append(html);
        $('.spinner').last().addClass('spinner--right');
        $('.spinner--right').removeClass('spinner--left');
      };

      var paintFaces = function paintFaces() {
        $('.spinner__face').each(function (i, el) {
          var $el = $(el);
          var color = $(el).attr('data-bg');
          $el.children().css('backgroundImage', 'url(' + getBase64PixelByColor(color) + ')');
        });
      };

      var getBase64PixelByColor = function getBase64PixelByColor(hex) {
        if (!canvas) {
          canvas = document.createElement('canvas');
          canvas.height = 1;
          canvas.width = 1;
        }
        if (canvas.getContext) {
          var ctx = canvas.getContext('2d');
          ctx.fillStyle = hex;
          ctx.fillRect(0, 0, 1, 1);
          return canvas.toDataURL();
        }
        return false;
      };

      var prepareDom = function prepareDom() {
        setIndexes();
        paintFaces();
        duplicateSpinner();
        appendControls();
      };

      var spin = function spin() {
        var inc = arguments.length <= 0 || arguments[0] === undefined ? 1 : arguments[0];

        if (disabled) return;
        if (!inc) return;
        activeIndex += inc;
        disabled = true;

        if (activeIndex >= limit) {
          activeIndex = 0;
        }

        if (activeIndex < 0) {
          activeIndex = limit - 1;
        }

        var $activeEls = $('.spinner__face.js-active');
        var $nextEls = $('.spinner__face[data-index=' + activeIndex + ']');
        $nextEls.addClass('js-next');

        if (inc > 0) {
          $stage.addClass(SPIN_FORWARD_CLASS);
        } else {
          $stage.addClass(SPIN_BACKWARD_CLASS);
        }

        $controls.removeClass('active');
        $controls.eq(activeIndex).addClass('active');

        setTimeout(function () {
          spinCallback(inc);
        }, SPIN_DUR, inc);
      };

      var spinCallback = function spinCallback(inc) {

        $('.js-active').removeClass('js-active');
        $('.js-next').removeClass('js-next').addClass('js-active');
        $stage.addClass(DISABLE_TRANSITIONS_CLASS).removeClass(SPIN_FORWARD_CLASS).removeClass(SPIN_BACKWARD_CLASS);

        $('.js-active').each(function (i, el) {
          var $el = $(el);
          $el.prependTo($el.parent());
        });
        setTimeout(function () {
          $stage.removeClass(DISABLE_TRANSITIONS_CLASS);
          disabled = false;
        }, 100);
      };

      var attachListeners = function attachListeners() {

        document.onkeyup = function (e) {
          switch (e.keyCode) {
            case 38:
              spin(-1);
              break;
            case 40:
              spin(1);
              break;
          }
        };

        $controls.on('click', function (e) {
          e.preventDefault();
          if (disabled) return;
          var $el = $(e.target);
          var toIndex = parseInt($el.attr('data-index'), 10);
          spin(toIndex - activeIndex);
        });
      };

      var assignEls = function assignEls() {
        $stage = $('.carousel__stage');
      };

      var init = function init() {
        assignEls();
        prepareDom();
        attachListeners();
      };

      $(function () {
        init();
      });
    },
    components: {
      navBar: navBar
    }
  }
</script>
<style>
  html,
  body {
    width: 100%;
    height: 100%;
    padding: 0;
    margin: 0;
    position: relative;
    left: 0;
    top: 0;
  }

  body {
    background: #fff;
    font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
  }

  .skill {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }

  .js-transitions-disabled * {
    -webkit-transition: none !important;
    transition: none !important;
  }

  .carousel {
    position: relative;
    width: 100%;
    height: 100%;
    overflow: hidden;
    -webkit-perspective: 50vw;
    perspective: 50vw;
    -webkit-perspective-origin: 50% 50%;
    perspective-origin: 50% 50%;
  }

  .carousel__control {
    position: absolute;
    height: 300px;
    width: 40px;
    background: #fff;
    right: 0;
    top: 0;
    bottom: 0;
    margin: auto;
    z-index: 1;
  }

  .carousel__control a {
    position: relative;
    display: block;
    width: 100%;
    padding-top: 75%;
    box-sizing: border-box;
  }

  .carousel__control a:hover:before {
    background-color: rgba(0, 0, 0, 0.4);
  }

  .carousel__control a.active:before,
  .carousel__control a.active:hover:before {
    background-color: rgba(0, 0, 0, 0.6);
  }

  .carousel__control a:first-child {
    margin-top: 15px;
  }

  .carousel__control a:before {
    position: absolute;
    top: 50%;
    left: 0;
    right: 0;
    margin: auto;
    border-radius: 50%;
    padding-top: 25%;
    width: 25%;
    background: rgba(0, 0, 0, 0.2);
    content: '';
    display: block;
    margin-top: -12.5%;
  }

  .carousel__stage {
    position: absolute;
    top: 20px;
    bottom: 20px;
    left: 20px;
    right: 20px;
    margin: auto;
    -webkit-transform-style: preserve-3d;
    transform-style: preserve-3d;
    -webkit-transform: translateZ(calc(-50vh + 20px));
    transform: translateZ(calc(-50vh + 20px));
  }

  .spinner {
    position: absolute;
    width: calc(50vw - (20px));
    height: calc(100vh - 40px);
    top: 0;
    left: 0;
    right: auto;
    bottom: 0;
    margin: auto;
    -webkit-transform-style: preserve-3d;
    transform-style: preserve-3d;
    -webkit-transition: -webkit-transform 1s;
    transition: -webkit-transform 1s;
    transition: transform 1s;
    transition: transform 1s, -webkit-transform 1s;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    -webkit-transform-origin: 50% 50%;
    transform-origin: 50% 50%;
    -webkit-transform: rotateX(0);
    transform: rotateX(0);
  }

  .js-spin-fwd .spinner {
    -webkit-transform: rotateX(-90deg);
    transform: rotateX(-90deg);
  }

  .js-spin-bwd .spinner {
    -webkit-transform: rotateX(90deg);
    transform: rotateX(90deg);
  }

  .js-spin-fwd .spinner--right {
    -webkit-transform: rotateX(90deg);
    transform: rotateX(90deg);
  }

  .js-spin-bwd .spinner--right {
    -webkit-transform: rotateX(-90deg);
    transform: rotateX(-90deg);
  }

  .spinner--right {
    right: 0;
    left: auto;
  }

  .spinner__face {
    display: none;
    position: absolute;
    width: 100%;
    height: 100%;
    overflow: hidden;
  }

  .spinner__face.js-next {
    display: block;
    -webkit-transform: rotateX(90deg) translateZ(calc(50vh - 20px));
    transform: rotateX(90deg) translateZ(calc(50vh - 20px));
  }

  .spinner--right .spinner__face.js-next {
    -webkit-transform: rotateX(270deg) translateZ(calc(50vh - 20px));
    transform: rotateX(270deg) translateZ(calc(50vh - 20px));
  }

  .js-spin-bwd .spinner__face.js-next {
    -webkit-transform: rotateX(-90deg) translateZ(calc(50vh - 20px));
    transform: rotateX(-90deg) translateZ(calc(50vh - 20px));
  }

  .js-spin-bwd .spinner--right .spinner__face.js-next {
    -webkit-transform: rotateX(-270deg) translateZ(calc(50vh - 20px));
    transform: rotateX(-270deg) translateZ(calc(50vh - 20px));
  }

  .js-active {
    display: block;
    -webkit-transform: translateZ(calc(50vh - 20px));
    transform: translateZ(calc(50vh - 20px));
  }

  .content {
    position: absolute;
    width: 200%;
    height: 100%;
    left: 0;
  }

  .spinner--right .content {
    left: -100%;
  }

  .content__left,
  .content__right {
    position: absolute;
    left: 0;
    top: 0;
    width: 50%;
    height: 100%;
  }

  .content__right {
    right: 0;
    left: auto;
  }

  .content__left {
    background-repeat: no-repeat;
    background-size: cover;
  }

  .content__left:after {
    position: absolute;
    display: block;
    content: "";
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.1);
  }

  .content__left h1 {
    position: absolute;
    top: 50%;
    margin-top: -3vw;
    text-align: center;
    font-family: oswald;
    font-size: 5vw;
    height: 10vw;
    opacity: 1;
    color: #fff;
    width: 100%;
    letter-spacing: 0.15em;
    line-height: 0.6;
  }

  .content__left span {
    font-size: 1vw;
    font-weight: 300;
    letter-spacing: 0.2em;
    opacity: 0.9;
    font-family: Merriweather;
  }

  .content__right {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
  }

  .content__right .content__main {
    font-family: Merriweather, serif;
    text-align: left;
    color: #fff;
    font-size: 1.3vw;
    padding: 0 8vw;
    line-height: 1.65;
    font-weight: 300;
    margin: 0;
    opacity: 0.8;
  }



  .content__right .content__index {
    font-size: 30vh;
    position: absolute;
    right: -1vh;
    top: 35vh;
    opacity: 0.04;
    font-family: oswald;
    color: #fff;
  }
  .content__main p{
    font-size: 30px;
  }
  [data-type="iceland"] .content__left {

    background-image: url("../assets/img/html5.png");

    background-repeat: no-repeat;
    background-position: 50% 20%;
  }

  .spinner--right [data-type="iceland"] .content__left {
    background-image: none;
  }

  [data-type="china"] .content__left {
    background-image: url("../assets/img/css3.jpg");
    background-repeat: no-repeat;
    background-position: 50% 20%;
  }

  .spinner--right [data-type="china"] .content__left {
    background-image: none;
  }

  [data-type="usa"] .content__left {
    background-image: url("../assets/img/js.png");
    background-repeat: no-repeat;
    background-size: 100%;
    background-position: 50% 20%;
  }

  .spinner--right [data-type="usa"] .content__left {
    background-image: none;
  }

  [data-type="peru"] .content__left {
    background-image: url("../assets/img/map.png");
    background-size: 90%;
    background-position: 50% 50%;
  }

  .spinner--right [data-type="peru"] .content__left {
    background-image: none;
  }
</style>
