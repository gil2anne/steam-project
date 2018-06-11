<!--
<template>
  <div class="android-content mdl-layout__content">
    <carousel :per-page="1" mouse-drag="false" navigationEnabled="true">
        <slide v-for="page in pages" v-bind:key="page.url">
          <div style="width:100%;height:100%;margin: 10 auto;">
            <img :src="page.url" style="max-width:100%;max-height:100%">
          </div>
        </slide>
    </carousel>
  </div>
</template>

<script>
  export default {
      
    data () {
      return {
        pages:[
            {url:'/static/images/6003560-02.jpg', style:''},
            {url:'/static/images/6003560-03.jpg', style:''},
            {url:'/static/images/6003560-04.jpg', style:''},
            {url:'/static/images/6003560-05.jpg', style:''}
        ]
      }
    },
    methods: {
      resizeImage : function(item) {
		 
        var image = new Image();
        image.src = item.url;
        image.onload = function() {
          var scaleX = 1000 / this.width;
          var scaleY = 600 / this.height;

          item.style= ( scaleX < scaleY )? 'max-width:100%;':'max-height:100%;';
//          item.style = ( scaleX < scaleY )? 'width:{width}px'.replace('{width}', 1000)
//          :'height:{height}px'.replace('{height}', 600) ;
          
        }
      
        return item.url;
      }
    },
    mounted () {
      //this.cat = find(this.$root.cat, (cat) => cat['.key'] === this.$route.params.id)
    }
  }
</script>
-->

<template>
  <div class="android-content mdl-layout__content">
    <slideshow :content-images="content.imageList" :content-index="1" :content-base="content.id">
    </slideshow>
  </div>
</template>

<script>

  import Slideshow from './Slideshow.vue'
  import * as axios from 'axios'

  export default {
    components : {
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
    },
    created : function(){
      let self = this;
        const BASE_URL = 'http://localhost:8000';
        axios.get(`${BASE_URL}/contents/model/${this.content.id}`)
        .then((result) => {
            if( result.data ) {
                self.content = result.data;
            }
        })
    },
    mounted () {
      //this.cat = find(this.$root.cat, (cat) => cat['.key'] === this.$route.params.id)
    }
  }
</script>