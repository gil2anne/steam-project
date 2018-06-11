<template>
<div class="mdl-layout mdl-js-layout mdl-layout--fixed-header">
  <div class="android-header mdl-layout__header mdl-layout__header--waterfall">
    <div class="mdl-layout__header-row">
      <span class="android-title mdl-layout-title">
        <img class="android-logo-image" src="/static/images/android-logo.png">
      </span>
      <!-- Add spacer, to align navigation to the right in desktop -->
      <div class="android-header-spacer mdl-layout-spacer"></div>
      <div class="android-search-box mdl-textfield mdl-js-textfield mdl-textfield--expandable mdl-textfield--floating-label mdl-textfield--align-right mdl-textfield--full-width">
        <label class="mdl-button mdl-js-button mdl-button--icon" for="search-field">
          <i class="material-icons">search</i>
        </label>
        <div class="mdl-textfield__expandable-holder">
          <input class="mdl-textfield__input" type="text" id="search-field">
        </div>
      </div>
      <!-- Navigation -->
      <div class="android-navigation-container">
        <nav class="android-navigation mdl-navigation">
          <a class="mdl-navigation__link mdl-typography--text-uppercase" href="/login">Login</a>
          <a class="mdl-navigation__link mdl-typography--text-uppercase" href="/login/google">Google</a>
          <a class="mdl-navigation__link mdl-typography--text-uppercase" href="/login/naver">Naver</a>
          <a class="mdl-navigation__link mdl-typography--text-uppercase" href="/accounts/sign-up">Sign-up</a>
          <a class="mdl-navigation__link mdl-typography--text-uppercase" href="/accounts/me">Me</a>
          <span class="mdl-navigation__link mdl-typography--text-uppercase" v-on:click="goto()">Upload</span>
        </nav>
      </div>
      <span class="android-mobile-title mdl-layout-title">
        <img class="android-logo-image" src="/static/images/android-logo.png">
      </span>
      <button class="android-more-button mdl-button mdl-js-button mdl-button--icon mdl-js-ripple-effect" id="more-button">
        <i class="material-icons">more_vert</i>
      </button>
      <ul class="mdl-menu mdl-js-menu mdl-menu--bottom-right mdl-js-ripple-effect" for="more-button">
        <li class="mdl-menu__item">Login</li>
        <li class="mdl-menu__item">Google</li>
        <li class="mdl-menu__item">Naver</li>
        <li disabled class="mdl-menu__item">Me</li>
        <li class="mdl-menu__item">Assign</li>
      </ul>
    </div>
  </div>
  <div class="android-drawer mdl-layout__drawer">
    <span class="mdl-layout-title">
      <img class="android-logo-image" src="/static/images/android-logo-white.png">
    </span>
    <nav class="mdl-navigation">
      <a class="mdl-navigation__link" href="/login">Login</a>
      <a class="mdl-navigation__link" href="/login/google">Google</a>
      <a class="mdl-navigation__link" href="/login/naver">Naver</a>
      <a class="mdl-navigation__link" href="/accounts/sign-up">Sign-up</a>
      <a class="mdl-navigation__link" href="/accounts/me">Me</a>
      <div class="android-drawer-separator"></div>
      <span class="mdl-navigation__link" v-on:click="goto()">Upload</span>
    </nav>
  </div>
  <div class="android-content mdl-layout__content">
  <router-view></router-view>
  </div>
  <!--@click="isShow=!modalclose" -->
  <div ref="lightbox" class="lightbox" v-show="isShow" style="display:block;"> 
    <guide v-show='isShow' v-bind:contentId="contentId"></guide>
  </div>
</div>
</template>
<script>
import Guide from './components/Guide.vue'

export default {
  name: 'app',
  components : {Guide},
  data : function() {
    return {
        isShow : false,
        contentId : -1
    }
  },
  created : function() {
    self = this;
    this.$eventBus.$on('popup', function(value){
      
      self.isShow = true
      self.contentId = value
    });
  },
  methods: {
    goto : function() {
      this.$router.push({name: 'product', query:{contentId:'1'}});
    },
    modalClose : function() {

    }
  }
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