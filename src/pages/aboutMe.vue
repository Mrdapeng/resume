<template>
  <div class="aboutme">
    <navbar></navbar>
    <div class="myimg">
      <my-img></my-img>
    </div>
    <div class="type-js headline">
      <div class="text-js">
        &nbsp;&nbsp;姓名:刘仁朋
        性别:男
        出生年月: 1996-08-24
        爱好：看书，听音乐，看电影
        自我评价: 喜欢研究新的前端知识，热爱前端开发， 愿意与志同道合的小伙伴们一起工作学习。喜欢深究问题，自学能力较强，不怕 困难，钻研到底。热爱分享并探讨技术,求真求准。对生活和工作充满了热情的前端开发人员</span>
      </div>
    </div>

  </div>

</template>
<script>
  import $ from 'jquery'
  import navbar from '../components/navBar.vue'
  import myimg from '../components/myimg.vue'
  export default {
    data() {
      return {}
    },
    components: {
      'navbar': navbar,
      'my-img': myimg
    },
    mounted() {

      function autoType(elementClass, typingSpeed) {
        var thhis = $(elementClass);
        thhis.css({
          "position": "relative",
          "display": "inline-block"
        });
        thhis.prepend('<div class="cursor" style="right: initial; left:0;"></div>');
        thhis = thhis.find(".text-js");
        var text = thhis.text().trim().split('');
        var amntOfChars = text.length;
        var newString = "";
        thhis.text("|");
        setTimeout(function () {
          thhis.css("opacity", 1);
          thhis.prev().removeAttr("style");
          thhis.text("");
          for (var i = 0; i < amntOfChars; i++) {
            (function (i, char) {
              setTimeout(function () {
                newString += char;
                thhis.text(newString);
              }, i * typingSpeed);
            })(i + 1, text[i]);
          }
        }, 1000);
      }

      // Now to start autoTyping just call the autoType function with the
      // class of outer div
      // The second paramter is the speed between each letter is typed.
      // autoType(".type-js",200);
      autoType(".type-js", 120)

    }
  }
</script>
<style scoped>
  @import url("https://fonts.googleapis.com/css?family=Open+Sans:300,400");

  html {
    width: 100%;
    height: 100%;
  }

  body {
    width: 100%;
    height: 100%;
  }

  .aboutme {
    width: 100%;
    height: 100%;
    position: relative;
    left: 0;
    top: 0;
  }

  .text-js {
    opacity: 0;
    font-size: 30px;
    font-weight: 300;

  }

  .cursor {
    display: block;
    position: absolute;
    height: 100%;
    top: 0;
    right: -5px;
    width: 2px;
    /* Change colour of Cursor Here */
    background-color: black;
    z-index: 1;
    -webkit-animation: flash 0.5s none infinite alternate;
    animation: flash 0.5s none infinite alternate;
  }

  .myimg {
    height: 400px;
    float: left;
    margin-left: 10%;
  }

  .type-js {
    max-width: 800px;
    float: left;
    margin-left: 40%;
    top: 5%;
  }
</style>
