<template>
    <canvas id="canvas" style="display:block;margin: 50px auto; "></canvas>
</template>
<script>
  export default {
    data() {
      return {}
    },
    methods: {},
    mounted() {
      /*data 数字的数组*/
      var digit =
        [
          [
            [0, 0, 1, 1, 1, 0, 0],
            [0, 1, 1, 0, 1, 1, 0],
            [1, 1, 0, 0, 0, 1, 1],
            [1, 1, 0, 0, 0, 1, 1],
            [1, 1, 0, 0, 0, 1, 1],
            [1, 1, 0, 0, 0, 1, 1],
            [1, 1, 0, 0, 0, 1, 1],
            [1, 1, 0, 0, 0, 1, 1],
            [0, 1, 1, 0, 1, 1, 0],
            [0, 0, 1, 1, 1, 0, 0]
          ],//0
          [
            [0, 0, 0, 1, 1, 0, 0],
            [0, 1, 1, 1, 1, 0, 0],
            [0, 0, 0, 1, 1, 0, 0],
            [0, 0, 0, 1, 1, 0, 0],
            [0, 0, 0, 1, 1, 0, 0],
            [0, 0, 0, 1, 1, 0, 0],
            [0, 0, 0, 1, 1, 0, 0],
            [0, 0, 0, 1, 1, 0, 0],
            [0, 0, 0, 1, 1, 0, 0],
            [1, 1, 1, 1, 1, 1, 1]
          ],//1
          [
            [0, 1, 1, 1, 1, 1, 0],
            [1, 1, 0, 0, 0, 1, 1],
            [0, 0, 0, 0, 0, 1, 1],
            [0, 0, 0, 0, 1, 1, 0],
            [0, 0, 0, 1, 1, 0, 0],
            [0, 0, 1, 1, 0, 0, 0],
            [0, 1, 1, 0, 0, 0, 0],
            [1, 1, 0, 0, 0, 0, 0],
            [1, 1, 0, 0, 0, 1, 1],
            [1, 1, 1, 1, 1, 1, 1]
          ],//2
          [
            [1, 1, 1, 1, 1, 1, 1],
            [0, 0, 0, 0, 0, 1, 1],
            [0, 0, 0, 0, 1, 1, 0],
            [0, 0, 0, 1, 1, 0, 0],
            [0, 0, 1, 1, 1, 0, 0],
            [0, 0, 0, 0, 1, 1, 0],
            [0, 0, 0, 0, 0, 1, 1],
            [0, 0, 0, 0, 0, 1, 1],
            [1, 1, 0, 0, 0, 1, 1],
            [0, 1, 1, 1, 1, 1, 0]
          ],//3
          [
            [0, 0, 0, 0, 1, 1, 0],
            [0, 0, 0, 1, 1, 1, 0],
            [0, 0, 1, 1, 1, 1, 0],
            [0, 1, 1, 0, 1, 1, 0],
            [1, 1, 0, 0, 1, 1, 0],
            [1, 1, 1, 1, 1, 1, 1],
            [0, 0, 0, 0, 1, 1, 0],
            [0, 0, 0, 0, 1, 1, 0],
            [0, 0, 0, 0, 1, 1, 0],
            [0, 0, 0, 1, 1, 1, 1]
          ],//4
          [
            [1, 1, 1, 1, 1, 1, 1],
            [1, 1, 0, 0, 0, 0, 0],
            [1, 1, 0, 0, 0, 0, 0],
            [1, 1, 1, 1, 1, 1, 0],
            [0, 0, 0, 0, 0, 1, 1],
            [0, 0, 0, 0, 0, 1, 1],
            [0, 0, 0, 0, 0, 1, 1],
            [0, 0, 0, 0, 0, 1, 1],
            [1, 1, 0, 0, 0, 1, 1],
            [0, 1, 1, 1, 1, 1, 0]
          ],//5
          [
            [0, 0, 0, 0, 1, 1, 0],
            [0, 0, 1, 1, 0, 0, 0],
            [0, 1, 1, 0, 0, 0, 0],
            [1, 1, 0, 0, 0, 0, 0],
            [1, 1, 0, 1, 1, 1, 0],
            [1, 1, 0, 0, 0, 1, 1],
            [1, 1, 0, 0, 0, 1, 1],
            [1, 1, 0, 0, 0, 1, 1],
            [1, 1, 0, 0, 0, 1, 1],
            [0, 1, 1, 1, 1, 1, 0]
          ],//6
          [
            [1, 1, 1, 1, 1, 1, 1],
            [1, 1, 0, 0, 0, 1, 1],
            [0, 0, 0, 0, 1, 1, 0],
            [0, 0, 0, 0, 1, 1, 0],
            [0, 0, 0, 1, 1, 0, 0],
            [0, 0, 0, 1, 1, 0, 0],
            [0, 0, 1, 1, 0, 0, 0],
            [0, 0, 1, 1, 0, 0, 0],
            [0, 0, 1, 1, 0, 0, 0],
            [0, 0, 1, 1, 0, 0, 0]
          ],//7
          [
            [0, 1, 1, 1, 1, 1, 0],
            [1, 1, 0, 0, 0, 1, 1],
            [1, 1, 0, 0, 0, 1, 1],
            [1, 1, 0, 0, 0, 1, 1],
            [0, 1, 1, 1, 1, 1, 0],
            [1, 1, 0, 0, 0, 1, 1],
            [1, 1, 0, 0, 0, 1, 1],
            [1, 1, 0, 0, 0, 1, 1],
            [1, 1, 0, 0, 0, 1, 1],
            [0, 1, 1, 1, 1, 1, 0]
          ],//8
          [
            [0, 1, 1, 1, 1, 1, 0],
            [1, 1, 0, 0, 0, 1, 1],
            [1, 1, 0, 0, 0, 1, 1],
            [1, 1, 0, 0, 0, 1, 1],
            [0, 1, 1, 1, 0, 1, 1],
            [0, 0, 0, 0, 0, 1, 1],
            [0, 0, 0, 0, 0, 1, 1],
            [0, 0, 0, 0, 1, 1, 0],
            [0, 0, 0, 1, 1, 0, 0],
            [0, 1, 1, 0, 0, 0, 0]
          ],//9
          [
            [0, 0, 0, 0],
            [0, 0, 0, 0],
            [0, 1, 1, 0],
            [0, 1, 1, 0],
            [0, 0, 0, 0],
            [0, 0, 0, 0],
            [0, 1, 1, 0],
            [0, 1, 1, 0],
            [0, 0, 0, 0],
            [0, 0, 0, 0]
          ]
        ];
      /*常量设置*/
      var WINDOW_WIDTH = 1024
      var WINDOW_HEIGHT = 768
      var RADUIS = 8
      var MARGIN_LEFT = 60
      var MARGITN_TOP = 30
//    var endTime = new Date(2017, 6, 19, 18, 47, 52)
      var endTime = new Date()
      endTime.setTime(endTime.getTime() + 3600 * 1000 * Math.random() + 3600 * 1000)

      var curShowTimeSeconds = 0
      var balls = []
      const colors = ["#33B5E5", "#0099CC", "#AA66CC", "#9933CC", "#99CC00", "#669900", "#FFBB33", "#FF8800", "#FF4444", "#CC0000"]


      var canvas = document.getElementById('canvas')
      var context = canvas.getContext('2d')
      /*给canvas设置宽高*/

      canvas.width = WINDOW_WIDTH
      canvas.height = WINDOW_HEIGHT

      curShowTimeSeconds = getCurrentShowTimeSeconds()

      var interval = setInterval(function () {

        render(context)
        update()
      }, 50)


      function addBalls(x, y, num) {
        for (var i = 0; i < digit[num].length; i++) {
          for (var j = 0; j < digit[num][i].length; j++) {
            if (digit[num][i][j] == 1) {
              var aBall = {
                x: x + j * 2 * (RADUIS + 1) + (RADUIS + 1),
                y: y + i * 2 * (RADUIS + 1) + (RADUIS + 1),
                g: 1.5 + Math.random(),
                /*控制小球方向
                 * x方向速度
                 * y方向速度
                 * */
                vx: Math.pow(-1, Math.ceil(Math.random() * 1000)) * 4,
                vy: -5,
                color: colors[Math.floor(Math.random() * colors.length)]
              }
              balls.push(aBall)
            }
          }
        }
      }

      /*小球函数*/
      function step() {
        render(context)
        update()
      }

      function updateBalls() {
        for (let i = 0; i < balls.length; i++) {
          balls[i].x += balls[i].vx
          balls[i].y += balls[i].vy
          balls[i].vy += balls[i].g
//            balls[i].vx += balls[i].g

          if (balls[i].y >= WINDOW_HEIGHT - RADUIS) {
            balls[i].y = WINDOW_HEIGHT - RADUIS
            balls[i].vy = -balls[i].vy * 0.8
          }
        }
        var cnt = 0
        for (let i = 0; i < balls.length; i++) {
          if (balls[i].x + RADUIS > 0 && (balls[i].x - RADUIS) < WINDOW_WIDTH) {

            balls[cnt++] = balls[i]
          }
        }
        while (balls.length > Math.min(300, cnt)) {
          balls.pop()
        }


//        console.log(balls.length)
      }

      function update() {

        var nextShowTimeSeconds = getCurrentShowTimeSeconds()


        var nextHours = parseInt(nextShowTimeSeconds / 3600)
        var nextMinutes = parseInt((nextShowTimeSeconds - nextHours * 3600) / 60)
        var nextSeconds = nextShowTimeSeconds % 60

        var Curhours = parseInt(curShowTimeSeconds / 3600)
        var Curminutes = parseInt((curShowTimeSeconds - Curhours * 3600) / 60)
        var Curseconds = curShowTimeSeconds % 60

        if (Curseconds !== nextSeconds) {
          curShowTimeSeconds = nextShowTimeSeconds

          if (parseInt(Curhours / 10) !== parseInt(nextHours / 10)) {
            addBalls(MARGIN_LEFT, MARGITN_TOP, parseInt(Curhours / 10))
          }
          if (parseInt(Curhours % 10) !== parseInt(nextHours % 10)) {
            addBalls(MARGIN_LEFT + 15 * (RADUIS + 1), MARGITN_TOP, parseInt(Curhours % 10))
          }
          if (parseInt(Curminutes / 10) !== parseInt(nextMinutes / 10)) {
            addBalls(MARGIN_LEFT + 39 * (RADUIS + 1), MARGITN_TOP, parseInt(Curminutes / 10))
          }
          if (parseInt(Curminutes % 10) !== parseInt(nextMinutes % 10)) {
            addBalls(MARGIN_LEFT + 54 * (RADUIS + 1), MARGITN_TOP, parseInt(Curminutes % 10))
          }
          if (parseInt(Curseconds / 10) !== parseInt(nextSeconds / 10)) {
            addBalls(MARGIN_LEFT + 78 * (RADUIS + 1), MARGITN_TOP, parseInt(Curseconds / 10))
          }
          if (parseInt(Curseconds % 10) !== parseInt(nextSeconds % 10)) {
            addBalls(MARGIN_LEFT + 93 * (RADUIS + 1), MARGITN_TOP, parseInt(Curseconds % 10))
          }

        }
        updateBalls()

      }

      /*当前时间函数*/
      function getCurrentShowTimeSeconds() {

        var curTime = new Date()
        var ret = curTime.getHours() * 3600 + curTime.getMinutes() * 60 + curTime.getSeconds()
//        var ret = endTime.getTime() - curTime.getTime()
//        ret = Math.round(ret / 1000)
//        return ret > 0 ? ret : 0;
        return ret
      }

      //    function getTime() {
      //        var input = document.getElementById('input')
      //        var times = []
      //        input.onblur = function () {
      //            times.length = 0
      //            var strtimes = input.value;
      //            var atimes = strtimes.split(':')
      //            for (var i = 0; i < atimes.length; i++) {
      //                times.push(atimes[i])
      //            }
      //        }
      //    }

      /*主渲染函数*/
      function render(cxt) {

        cxt.clearRect(0, 0, WINDOW_WIDTH, WINDOW_HEIGHT)

        var hours = parseInt(curShowTimeSeconds / 3600)
        var minutes = parseInt((curShowTimeSeconds - hours * 3600) / 60)
        var seconds = curShowTimeSeconds % 60

        renderDigit(MARGIN_LEFT, MARGITN_TOP, parseInt(hours / 10), cxt)
        renderDigit(MARGIN_LEFT + 15 * (RADUIS + 1), MARGITN_TOP, parseInt(hours % 10), cxt)
        renderDigit(MARGIN_LEFT + 30 * (RADUIS + 1), MARGITN_TOP, 10, cxt)
        renderDigit(MARGIN_LEFT + 39 * (RADUIS + 1), MARGITN_TOP, parseInt(minutes / 10), cxt)
        renderDigit(MARGIN_LEFT + 54 * (RADUIS + 1), MARGITN_TOP, parseInt(minutes / 10), cxt)
        renderDigit(MARGIN_LEFT + 69 * (RADUIS + 1), MARGITN_TOP, 10, cxt)
        renderDigit(MARGIN_LEFT + 78 * (RADUIS + 1), MARGITN_TOP, parseInt(seconds / 10), cxt)
        renderDigit(MARGIN_LEFT + 93 * (RADUIS + 1), MARGITN_TOP, parseInt(seconds % 10), cxt)

        for (let i = 0; i < balls.length; i++) {
          cxt.fillStyle = balls[i].color

          cxt.beginPath()
          cxt.arc(balls[i].x, balls[i].y, RADUIS, 0, 2 * Math.PI, true)
          cxt.closePath()

          cxt.fill()
        }
      }

      function renderDigit(x, y, num, cxt) {
        // cxt.fillStyle = 'rgb(84,92,166)'
        cxt.fillStyle = '#8492A6'
        for (var i = 0; i < digit[num].length; i++) {
          for (var j = 0; j < digit[num][i].length; j++) {
            if (digit[num][i][j] == 1) {
              cxt.beginPath()
              cxt.arc(x + j * 2 * (RADUIS + 1) + (RADUIS + 1), y + i * 2 * (RADUIS + 1) + (RADUIS + 1), RADUIS, 0, 2 * Math.PI)
              cxt.closePath()
              cxt.fill()
            }
          }
        }
      }
    }
  }
</script>
