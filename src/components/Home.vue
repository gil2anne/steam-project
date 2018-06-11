<template>
    <div>
        <a name="top"></a>
        <promotion></promotion>
        <!--
        <gallery @popup='popup($event)'></gallery>
        -->
        <gallery></gallery>
    </div>
</template>

<script>
    import Promotion from './Promotion.vue'
    import Gallery from './Gallery.vue'
    //import Guide from './Guide.vue'

    export default {
        name : "home",
        props : {
            modalclose: Boolean
        },
        data : function() {
            return {
                isShow : false,
                contentId : -1
            }
        },
        methods : {
            popup(id) {
                this.isShow = true
                this.contentId = id
            }
        },
        
        mounted : function() {
            
        },
        components : {Promotion, Gallery}
        //components: {Promotion, Gallery, Guide},
    }
</script>
<style>
  .lightbox {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 9999;
    width: 100%;
    height: 100%;
    padding: 2px;
    background: rgba(0, 0, 0, 0.8);
    box-sizing: border-box;
    font-size: 0;
    font-family: "Helvetica Neue", Helvetica, Arial, sans-serif
  }
</style>

