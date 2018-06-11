<template>
    <div class="android-more-section">
        <div class="android-card-container mdl-grid">
            <div v-for="picture in this.pictures" v-bind:key="picture.url" class="mdl-cell mdl-cell--3-col mdl-cell--4-col-tablet mdl-cell--4-col-phone mdl-card mdl-shadow--3dp "  @click="displayDetails('CONTENT_32')">
                <div class="mdl-card__media">
                    <img :src="picture.url" />
                </div>
                <div class="mdl-card__title material-icons mdl-badge mdl-badge--overlap" data-badge="123">
                    <h4 class="mdl-card__title-text">{{ picture.title }}</h4>
                </div>
                <div class="mdl-card__supporting-text">
                    <star-rating v-bind:rating="3" v-bind:star-size="15"></star-rating>
                    <span class="mdl-typography--font-light mdl-typography--subhead">{{ picture.comment }}</span>
                </div>
                <div class="mdl-card__actions">
                    <a class="android-link mdl-button mdl-js-button mdl-typography--text-uppercase" href="">
                        Make the switch
                        <i class="material-icons">chevron_right</i>
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>
    
<script>
    export default {
        name : "gallery",
        data : function() {
            return {
                pictures : [
                  {key:1,title:'more-from-1', url:'/static/images/more-from-2.jpg', comment: 'aaa'},
                  {key:2,title:'more-from-2', url:'/static/images/more-from-1.jpg', comment: 'aaa'},
                  {key:3,title:'more-from-3', url:'/static/images/more-from-4.jpg', comment: 'aaa'},
                  {key:4,title:'more-from-4', url:'/static/images/more-from-3.jpg', comment: 'aaa'},
                ]
            }
        },
        methods: {
            displayDetails (id) {
                //this.$router.push({name: 'detail', params: { id: id }})
                this.$eventBus.$emit('popup', id);
            },
            getCats () {
                return this.pictures
            },
            saveCatsToCache () {
                localStorage.setItem('cats', JSON.stringify(cachedCats));
            }
        },
        mounted : function() {
            //this.saveCatsToCache()
        }
    }
</script>
<style>
.android-more-section{
    padding: 0;
}
.mdl-card__media {
    max-height:180px;
}
</style>