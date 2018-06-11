<template>
<!--
  <div id="book" class="android-content mdl-layout__content">

    <carousel :per-page="1" :mouse-drag="true" :navigationEnabled="true">
        <slide v-for="page in pages" v-bind:key="page.url">
          <div class='full-layout__content'>
            <img v-bind:src="page.url" v-on:load="load">
          </div>
        </slide>
    </carousel>
  </div>

-->
    <slideshow :content-images="content.imageList" :content-index="1" :content-base="content.uploadBase">
    </slideshow>    
</template>
<script>
    import Slideshow from '@/components/Slideshow'
    //var view = {viewWidth:0, viewHeight:0};
    export default {
        name : "guide",
        components: {
            Slideshow
        },
        props : ["contentId"],
        data () {
            return {
                content : {
                    id : "CONTENT_32",
                    name : "name",
                    level : "level",
                    category1 : "초등",
                    category2 : "wedo",
                    productName : "lego",
                    uploadBase : "4e39cd9c-fbe9-4f92-a5cc-559473767419",
                    imageList : ["0066792221.png","0066792442.png","0066792617.png","0066792710.png","0066792806.png","0066792911.png","0066793000.png","0066793082.png","0066793188.png","0066793296.png","0066793388.png","0066793483.png","0066793572.png","0066793662.png","0066793752.png","0066793839.png","0066793931.png","0066794019.png","0066794099.png","0066794188.png","0066794286.png","0066794378.png","0066794465.png","0066794559.png","0066794666.png","0066794765.png","0066794851.png","0066794918.png","0066794992.png","0066795088.png","0066795192.png","0066795468.png"]
                }
            }
        },
        methods: {
            fullscreen() {
                var element = document.getElementById("book");
                if (element.requestFullscreen) {
                    element.requestFullscreen()
                } else if (element.mozRequestFullScreen) {
                    element.mozRequestFullScreen()
                } else if (element.webkitRequestFullscreen) {
                    element.webkitRequestFullscreen()
                } else if (element.msRequestFullscreen) {
                    element.msRequestFullscreen()
                }
            },
            load : function(event) {
                
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
                img.style.left  = left + "px";
                img.style.marginTop  = top + "px";
            }
        },
        mounted : function() {
            //view.viewWidth = document.getElementById('book').naturalWidth;
        },
        created : function() {
            /*
            let self = this;
            const BASE_URL = 'http://localhost:8000';
            axios.get(`${BASE_URL}/contents/model/${this.content.id}`)
            .then((result) => {
                if( result.data ) {
                    self.content = result.data;
                }
            })
            */
        }
    }
</script>

<style>
.full-layout__content{
    max-width:100%;
    max-height:100%;
    display:table;
    margin: 0 auto;
}

.full-layout__content img{
    max-width: 100%;
    max-height: 100%;
    bottom: 0;
    left: 0;
    margin: auto;
    overflow: auto;    
    right: 0;
    /*top: 0;*/
}
</style>