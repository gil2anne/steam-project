<template>
    <carousel :per-page="1" :mouse-drag="true" :navigationEnabled="true">
        <slide v-for="promotion in promotions" v-bind:key="promotion.image">
            <div class="android-be-together-section mdl-typography--text-center" v-bind:style='promotion.image'>
            <div class="logo-font android-slogan">{{ promotion.slogan }}</div>
            <div class="logo-font android-sub-slogan">{{ promotion.subSlogan }}</div>
            </div>
        </slide>
    </carousel>
</template>
<script>
 
  export default {
    name: 'promotion',
    data () {
      return {
        promotions:[
            {   
                image:'background-image:url(/static/images/slide01.jpg);',
                slogan: 'be together. ',
                subSlogan: 'welcome to .... what do you want'
            },
            {
                image:'background-image:url(/static/images/slide02.png);',
                slogan: 'be yourself',
                subSlogan: 'do your thing. see what\'s going on.'
            }
        ]
      }
    },
    methods: {
    },
    mounted () {
      //this.cat = find(this.$root.cat, (cat) => cat['.key'] === this.$route.params.id)
    }
  }
</script>
<style>
.android-be-together-section {
  height: 350px;
}
.android-slogan {
  padding-top: 50px;
}

.VueCarousel-pagination {
  position: absolute;
  bottom:0;
}
.mdl-card__title {
  padding:10px;
}
.android-card-container .mdl-card__supporting-text {
  padding-top: 0px;
  padding-bottom : 30px;
}
/**** Mobile layout 
@media (max-width: 900px) {
  .android-be-together-section {
    height: 200px;
  }
  .android-slogan {
  padding-top: 15px;
  }
}
****/
</style>
