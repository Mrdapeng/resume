<template>
  <div class="connect">
    <navbar></navbar>
    <div class="content">
      <div class="card">
        <div class="fsbanner" id="demo-1">
          <div class="card-item" id="phone">
            <p class="title">Phone:   18811462052</p>
            <p class="content"></p>
          </div>
          <div class="card-item" id="email" >
            <p class="title">Email:   liurenpeng666@163.com</p>
          </div>
          <div class="card-item" id="github">
            <p class="title">github:   https://github.com/Mrdapeng/</p>
          </div>
          <div class="card-item" id="blog" >
            <p class="title">blog:   http://www.jianshu.com/u/832961e6b5fc</p>
          </div>
        </div>

      </div>
    </div>

  </div>

</template>
<script>
  import navbar from '../components/navBar.vue'
  import $ from 'jquery'

  export default {
    data() {
      return {}
    },
    mounted() {
      var fsBanner = function (container, options) {
        var self = this;

        var defaults = {
          'showName': true,
          'toUpdate': {},
          'whenEmpty': {},
          'trigger': 'click',
          'hideParent': null,
          'onChanged': null
        }

        this.options = $.extend({}, defaults, options);

        this.ilast = -1;

        this.setup = function () {
          this.container = $(container);
          this.items = this.container.find('div');

          if (!this.container.width()) this.container.width(this.container.parent().width());

          this.part = this.container.width() / this.items.length;
          this.mini = this.part / 4;
          this.widmain = this.container.width() - (this.mini * this.items.length - 1);

          this.items.css({'height': this.container.height(), 'width': this.widmain + this.mini});

          if (!this.options.showName) this.items.find('.name').hide();

          this.items.each(function (i) {
            var $item = $(this);
            $item.css({'z-index': i});
            if (self.options.trigger == 'click') $item.on('click', function () {
              self.selectItem($item, i);
            });
            if (self.options.trigger == 'mouse') $item.on('mouseenter', function () {
              self.selectItem($item, i, true);
            });
          });

          if (self.options.trigger == 'mouse') {
            this.container.on('mouseleave', function () {
              self.resetcss();
            });
          }

          this.resetcss();
          this.container.show();
        }

        this.resetcss = function () {
          this.items.each(function (i) {
            var $item = $(this);
            $item.stop().animate({'left': i * self.part});

            if (self.options.showName) {
              var $name = $item.find('.name');
              if ($name.hasClass('minimized')) $name.hide().removeClass('minimized').fadeIn('fast');
            }
          });
          this.ilast = null;
          this.updateHtml();
        };

        this.selectItem = function ($expanded, iexpanded, forceClick) {
          this.$lastexpanded = this.$expanded;

          if (forceClick) this.ilast = null;
          if (iexpanded == this.ilast) {
            this.$expanded = null;
            this.resetcss();
          } else {
            this.$expanded = $expanded;
            this.items.each(function (i) {
              var $item = $(this);
              if (i <= iexpanded) {
                $item.stop().animate({'left': i * self.mini});
              } else {
                $item.stop().animate({'left': i * self.mini + self.widmain});
              }
              if (self.options.showName) {
                var $name = $item.find('.name');
                var method = (i == iexpanded) ? 'removeClass' : 'addClass';
                if (method == 'addClass' && $name.hasClass('minimized')) method = '';
                if (method) $name.hide()[method]('minimized').fadeIn('fast');
              }
            });
            this.ilast = iexpanded;
            this.updateHtml($expanded);
          }
          this.fireChanged();
        };

        this.updateHtml = function ($expanded) {
          this.$expanded = $expanded;

          var $parent = $(self.options.hideParent);
          $.each(this.options.toUpdate, function (field, selector) {
            var $obj = $(selector);
            var showit = false;
            var value = '';
            if ($expanded) {
              $parent.show();
              value = $expanded.find('.' + field).html();
              showit = true;
            } else {
              if ($parent.length) {
                showit = false;
                $parent.hide();
              } else {
                if (self.options.whenEmpty[field]) {
                  value = self.options.whenEmpty[field];
                  showit = true;
                }
              }
            }
            $obj.hide();
            if (showit) $obj.html(value).fadeIn('fast');
          });
        };

        this.fireChanged = function () {
          if (this.options.onChanged) {
            this.options.onChanged(this.$expanded, this.$lastexpanded);
          }
        };

        this.setup();
      };

      $.fn.fsBanner = function (options) {
        return new fsBanner(this, options);
      };
      $('#demo-1').fsBanner({'trigger': 'mouse'})

    },
    components: {
      'navbar': navbar
    }

  }

</script>
<style scoped>

  .fsbanner, .fsbanner > div > span {
    /* obrigatório */
    display:none;
  }
  div.fsbanner {
    /* obrigatorio */
    position:relative;
    overflow:hidden;
    /* opcional */
    height:300px;
    color:#fff;
    font-size:20px;
    font-family:Verdana;
    font-weight:bold;
    border-radius:5px;
    -webkit-text-stroke: 1px black;
  }


  .fsbanner > div {
    position:absolute;
    background-size:cover;
    cursor:pointer;
    top:0px;
    left:0px;
  }
  .fsbanner > div .name {
    display:block;
    position:absolute;
    left:10px;
    bottom:10px;
  }
  .fsbanner > div .name.minimized {
    /* css3 */
    transform: rotate(-90deg);
    transform-origin: left top 0;
    /* pode ser necessário ajustar isso dependendo da fonte escolhida */
    bottom: -13px;
    left: 7px;
  }
  .content{
    margin-top: 20%;
  }
  .card-item {
    position: relative;
    left: 0;
    top: 0;
  }
  .card-item p{
    position: absolute;
    left: 25%;
    top: 10%;
  }

  #phone{
    background-image: url("../assets/img/a1.png");
  }
  #email{
    background-image: url("../assets/img/a2.png");

  }
  #github{
    background-image: url("../assets/img/a3.png");
  }
  #blog{
    background-image: url("../assets/img/a4.png");

  }
</style>
