<template>
  <div class="site-content">
    <div class="columns">
      <div class="column">
        <div class="project-list">
          <div class="project">
            <div class="project__card">
              <a href="" class="project__image"><img src="../assets/img/mine.jpg" width=600   height=400   alt=""></a>
              <div class="project__detail">
                <div class="project__title"><a href="#">刘仁朋</a></div>
                <small class="project__category"><a href="#">查看更多</a></small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import $ from 'jquery'

  export default {
    data() {
      return {
      }
    },
    mounted(){
      (function($){
        $.fn.hover3d = function(options){
          var settings = $.extend({
            selector      : null,
            perspective   : 1000,
            sensitivity   : 20,
            invert        : false,
            shine         : false,
            hoverInClass  : "hover-in",
            hoverOutClass : "hover-out",
            hoverClass    : "hover-3d"
          }, options);

          return this.each(function(){

            var $this = $(this),
              $card = $this.find(settings.selector);

            if( settings.shine ){
              $card.append('<div class="shine"></div>');
            }
            var $shine = $(this).find(".shine");

            // Set perspective and transformStyle value
            // for element and 3d object
            $this.css({
              perspective: settings.perspective+"px",
              transformStyle: "preserve-3d"
            });

            $card.css({
              perspective: settings.perspective+"px",
              transformStyle: "preserve-3d",
            });

            $shine.css({
              position  : "absolute",
              top       : 0,
              left      : 0,
              bottom    : 0,
              right     : 0,
              "z-index" : 9
            });

            // Mouse Enter function, this will add hover-in
            // Class so when mouse over it will add transition
            // based on hover-in class
            function enter(){
              $card.addClass(settings.hoverInClass+" "+settings.hoverClass);

              setTimeout(function(){
                $card.removeClass(settings.hoverInClass);
              }, 1000);
            }

            // Mouse movement Parallax effect
            function move(event){
              var w      = $this.innerWidth(),
                h      = $this.innerHeight(),
                ax 	   = settings.invert ?  ( w / 2 - event.offsetX)/settings.sensitivity : -( w / 2 - event.offsetX)/settings.sensitivity,
                ay     = settings.invert ? -( h / 2 - event.offsetY)/settings.sensitivity :  ( h / 2 - event.offsetY)/settings.sensitivity;
              dy     = event.offsetY - h / 2,
                dx     = event.offsetX - w / 2,
                theta  = Math.atan2(dy, dx),
                angle  = theta * 180 / Math.PI - 90;

              if (angle < 0) {
                angle  = angle + 360;
              }


              $card.css({
                perspective    : settings.perspective+"px",
                transformStyle : "preserve-3d",
                transform      : "rotateY("+ax+"deg) rotateX("+ay+"deg)"
              });

              $shine.css('background', 'linear-gradient(' + angle + 'deg, rgba(255,255,255,' + event.offsetY / h * .5 + ') 0%,rgba(255,255,255,0) 80%)');
            }

            // Mouse leave function, will set the transform
            // property to 0, and add transition class
            // for exit animation
            function leave(){
              $card.addClass(settings.hoverOutClass+" "+settings.hoverClass);
              $card.css({
                perspective    : settings.perspective+"px",
                transformStyle : "preserve-3d",
                transform      : "rotateX(0) rotateY(0)"
              });
              setTimeout( function(){
                $card.removeClass(settings.hoverOutClass+" "+settings.hoverClass);
              }, 1000 );
            }

            // Mouseenter event binding
            $this.on( "mouseenter", function(){
              return enter();
            });

            // Mousemove event binding
            $this.on( "mousemove", function(event){
              return move(event);
            });

            // Mouseleave event binding
            $this.on( "mouseleave", function(){
              return leave();
            });

          });

        };

      }($));
        $(".project").hover3d({
          selector: ".project__card",
          shine: false,
        });
    },

  }
</script>
<style scoped>
  * {
    box-sizing: border-box; }
  *:before, *:after {
    box-sizing: border-box; }

  body {
    font-family: "Noto Sans", sans-serif;
    line-height: 1.8;
    color: #666; }

  h1, h2, h3, h4, h5, h6 {
    font-family: Hind, sans-serif;
    color: #333;
    margin: 2em 0 1em; }

  a {
    text-decoration: none;
    color: #9999ff; }

  .site-content {
    width: 990px;
    max-width: 100%;
    margin: 0 auto;
    padding: 100px 0; }
  .site-content:after {
    content: " ";
    display: block;
    clear: both; }

  .columns:after {
    content: " ";
    display: block;
    clear: both; }

  .columns .column {
    width: 50%;
    float: left; }

  .project {
    width: 90%;
    float: left; }
  .project:not(:last-child) {
    margin-right: 4%; }
  .project-list:after {
    content: " ";
    display: block;
    clear: both; }
  .project__image {
    display: block;
    position: relative; }
  .project__image img {
    width: 100%;
    max-width: 100%;
    height: auto;
    display: block; }
  .project__image:after {
    content: " ";
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    background: linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.4));
    transition: opacity .3s ease;
    opacity: 0; }
  .project__card {
    position: relative;
    will-change: transform;
    transition: box-shadow .3s ease;
    box-shadow: 0 10px 30px transparent; }
  .project__card.hover-in {
    transition: -webkit-transform .2s ease-out;
    transition: transform .2s ease-out;
    transition: transform .2s ease-out, -webkit-transform .2s ease-out; }
  .project__card.hover-out {
    transition: -webkit-transform .2s ease-in;
    transition: transform .2s ease-in;
    transition: transform .2s ease-in, -webkit-transform .2s ease-in; }
  .project:hover .project__card {
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.4); }
  .project:hover .project__image:after {
    opacity: 1; }
  .project:hover .project__detail {
    border-width: 10px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.4); }
  .project:hover .project__title, .project:hover .project__category {
    -webkit-transform: translateY(0) scale(1);
    -ms-transform: translateY(0) scale(1);
    transform: translateY(0) scale(1);
    opacity: 1; }
  .project__detail {
    position: absolute;
    left: 30px;
    right: 30px;
    top: 30px;
    bottom: 30px;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-flex-direction: column;
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-justify-content: center;
    -ms-flex-pack: center;
    justify-content: center;
    text-align: center;
    pointer-events: none;
    -webkit-transform: translateZ(30px);
    transform: translateZ(30px);
    border: 0 solid #CCC;
    transition: border .4s ease; }
  .project__title {
    margin: 0 0 10px;
    font-size: 36px;
    font-weight: 700;
    transition: .4s ease;
    opacity: 0;
    -webkit-transform: translateY(40px) scale(0);
    -ms-transform: translateY(40px) scale(0);
    transform: translateY(40px) scale(0);
    will-change: transform; }
  .project__title a {
    color: white; }
  .project__category {
    opacity: 0;
    transition: .4s ease;
    transition-delay: .1s;
    -webkit-transform: translateY(40px) scale(0);
    -ms-transform: translateY(40px) scale(0);
    transform: translateY(40px) scale(0);
    will-change: transform; }
  .project__category a {
    color: rgba(255, 255, 255, 0.8);
    font-size: 1.3em; }



</style>
