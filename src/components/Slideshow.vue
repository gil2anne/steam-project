<template>
  <div id="model" style="z-index:9999;">
  <div class="slideshow-container">

    <!-- Full-width images with number and caption text -->
    <div class="mySlides fade" v-for="(item, index) in slideImages" v-bind:key="item">
        <div class="numbertext">{{index}} / {{slideImages.length}}</div>
        <pinch-image :src="'/contents/model/' + uploadBase + '/' + item" style="max-width:100%;max-height:100%"/>
        <div class="text">Caption Text</div>
    </div>

    <!-- Next and previous buttons -->
    <a class="prev" @click="plusSlides(-1)">&#10094;</a>
    <a class="next" @click="plusSlides(1)">&#10095;</a>
  </div>
  <div class="display-bottommiddle">
    <carousel :perPage="5" :paginationEnabled="false" :navigationEnabled="true" mouseDrag="false">
        <slide v-for="(item, index) in slideImages" v-bind:key="item">
          <div style="width:100%;height:100%;margin: 10 auto;" @click="handleSlideClick(index)">
            <img :src="'/contents/model/' + uploadBase + '/thumb/' + item" style="max-width:100%;max-height:100%"/>
          </div>
        </slide>
    </carousel>
  </div>
  
</div>
</template>
<script>
    function showSlides(n) {
        var i;  
        var slides = document.getElementsByClassName("mySlides");
        //if (n > slides.length) {slideIndex = 1} 
        //if (n < 1) {slideIndex = slides.length}
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none"; 
        }
        /*
        var dots = document.getElementsByClassName("dot");
        for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active", "");
        }
        */
        slides[n].style.display = "block"; 
        //dots[slideIndex-1].className += " active";
    }
    var view = {viewWidth:0, viewHeight:0};

    import PinchImage from './PinchImage.vue'

    export default {
        name : "slideshow",
        components : {PinchImage},
        props : {
            contentImages : {
                default : [],
                type : Array
            },
            contentIndex : {
                default : 1,
                type : Number
            },
            contentBase : {
                type : String
            }
        },
        data : function() {
            return {
                slideIndex : this.contentIndex,
                slideImages : this.contentImages,
                uploadBase : this.contentBase
            }
        },
        created : function(){
            //showSlides(slideIndex)
        },
        mounted : function() {
            view.viewWidth = document.getElementById('model').naturalWidth;
        },
        watch: {
            slideIndex : function(){
                showSlides(this.slideIndex);
            }
        },
        methods : {
            
            // Next/previous controls
            plusSlides: function(n) {
                this.slideIndex += n;
            },

            // Thumbnail image controls
            currentSlide: function(n) {
                this.slideIndex = n;
            },
            load: function(event) {
                
                let img = event.target;
                let naturalWidth = img.naturalWidth;
                let naturalHeight = img.naturalHeight;

                const aspectRatio = naturalWidth / naturalHeight;

                let viewerWidth = window.innerWidth;
                let viewerHeight = window.innerHeight;

                let width = viewerWidth;
                let height = viewerHeight;
                let left = 0;
                let top = 0;

                if (viewerHeight * aspectRatio > viewerWidth) {
                    height = viewerWidth / aspectRatio;
                } else {
                    width = viewerHeight * aspectRatio;
                }

                width = Math.min(width * 0.9, naturalWidth);
                height = Math.min(height * 0.9, naturalHeight);
                left = (viewerWidth - width) / 2;
                top = (viewerHeight - height) / 2;
                
                img.style.width = width + "px";
                img.style.height= height+ "px";
                img.style.marginLeft  = left + "px";
                img.style.marginTop  = top + "px";
            },
            handleSlideClick : function(index) {
              
                this.slideIndex = index;
                
            }
        }

    }
</script>
<style>
* {box-sizing:border-box}

/* Slideshow container */
.slideshow-container {
  /*max-width: 1000px;*/
  width: 100%;
  height:100%;
  /*position: relative;*/
  margin: auto;
}

/* Hide the images by default */
.mySlides {
    display: none;
}
.mySlides img {
    left:50%;
    top:50%;
    margin: auto;
}

/* Next & previous buttons */
.prev, .next {
  cursor: pointer;
  position: absolute;
  top: 50%;
  width: auto;
  margin-top: -22px;
  padding: 16px;
  color: white;
  font-weight: bold;
  font-size: 18px;
  transition: 0.6s ease;
  border-radius: 0 3px 3px 0;
}

/* Position the "next button" to the right */
.next {
  right: 0;
  border-radius: 3px 0 0 3px;
}

/* On hover, add a black background color with a little bit see-through */
.prev:hover, .next:hover {
  background-color: rgba(0,0,0,0.8);
}

/* Caption text */
.text {
  color: #f2f2f2;
  font-size: 15px;
  padding: 8px 12px;
  position: absolute;
  bottom: 8px;
  width: 100%;
  text-align: center;
}

/* Number text (1/3 etc) */
.numbertext {
  /*color: #f2f2f2;*/
  font-size: 12px;
  padding: 8px 12px;
  position: absolute;
  top: 0;
  z-index:99;
}

/* The dots/bullets/indicators */
.dot {
  cursor: pointer;
  height: 15px;
  width: 15px;
  margin: 0 2px;
  background-color: #bbb;
  border-radius: 50%;
  display: inline-block;
  transition: background-color 0.6s ease;
}

.active, .dot:hover {
  background-color: #717171;
}

/* Fading animation */
.fade {
  -webkit-animation-name: fade;
  -webkit-animation-duration: 1.5s;
  animation-name: fade;
  animation-duration: 1.5s;
}

.display-bottommiddle {
    position: absolute;
    left: 50%;
    bottom: 0;
    transform: translate(-50%,0%);
    -ms-transform: translate(-50%,0%);
}
@-webkit-keyframes fade {
  from {opacity: .4} 
  to {opacity: 1}
}

@keyframes fade {
  from {opacity: .4} 
  to {opacity: 1}
}
</style>