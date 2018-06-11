<template>
  <div>
    <div class="container horizontal">
      <ul class="list">
        <li class="wrapper ratio" v-for="item in uploadImages" v-bind:key="item">
          <img :src="'http://localhost:8000/contents/model/' + uploadBase + '/thumb/' + item" class="img-responsive img-thumbnail" :alt="item">
        </li>
        <li class="list">
          <!--UPLOAD-->
          <form enctype="multipart/form-data" novalidate>
            <div class="dropbox">
              <input type="hidden" id="uploadBase" :uploadBase="contentBase"/>
              <input type="file" name="content" :disabled="isSaving" 
                @change="filesChange($event.target.name, $event.target.files)"
                accept="image/*,application/pdf" class="input-file">
                <p v-if="isInitial">
                  Drag your file(s) here to begin<br> or click to browse
                </p>
                <p v-if="isSaving">
                  Uploading files...
                </p>
            </div>
          </form>
        </li>
      </ul>
      <!--SUCCESS-->
      <div v-if="isSuccess">
        <h2>Uploaded {{ uploadImages.length }} file(s) successfully.</h2>
      </div>
      <!--FAILED-->
      <div v-if="isFailed">
        <h2>Uploaded failed.</h2>
        <pre>{{ uploadError }}</pre>
      </div>
    </div>
  </div>
</template>

<script>
  // swap as you need
  import { upload } from './file-upload';   // real service
  const STATUS_INITIAL = 0, STATUS_SAVING = 1, STATUS_SUCCESS = 2, STATUS_FAILED = 3;
  const BASE_URL = 'http://localhost:8000';
  export default {
    name: 'fileUpload',
    data : function() {
      return {
        uploadImages: this.contentImages,
        uploadBase : this.contentBase,
        uploadError: null,
        currentStatus: STATUS_INITIAL
      }
    },
    props : ['contentBase', 'contentImages'],
    watch: {
      contentImages: function () {
        this.uploadImages= this.contentImages
      },
      contentBase: function() {
        this.uploadBase = this.contentBase
      }
    },
    computed: {
      isInitial() {
        return this.currentStatus === STATUS_INITIAL;
      },
      isSaving() {
        return this.currentStatus === STATUS_SAVING;
      },
      isSuccess() {
        return this.currentStatus === STATUS_SUCCESS;
      },
      isFailed() {
        return this.currentStatus === STATUS_FAILED;
      }
    },
    methods: {
      reset() {
        // reset form to initial state
        this.currentStatus = STATUS_INITIAL;
        this.uploadImages = [];
        this.uploadError = null;
      },
      save(formData) {
        // upload data to the server
        this.currentStatus = STATUS_SAVING;
        let self = this;
        upload(formData)
          .then((data) => {
            self.uploadImages = data.uploadedImages;
            self.uploadBase = data.uploadBase;
            self.currentStatus = STATUS_SUCCESS;
            self.$emit('uploadedImages', self);
          })
          .catch(err => {
            console.log(err);
            self.uploadError = err.response;
            self.currentStatus = STATUS_FAILED;
          });
      },
      filesChange(fieldName, fileList) {
        // handle file changes
        const formData = new FormData();

        if (!fileList.length) return;

        // append the files to FormData
        Array
          .from(Array(fileList.length).keys())
          .map(x => {
            formData.append(fieldName, fileList[x], fileList[x].name);
          });

        // save it
        this.save(formData);
      },
      itemUrl(item) {
        let uploadBase = this.uploadBase;
        return `${BASE_URL}/contents/model/${uploadBase}/thumb/${item}`
      }
    },
    mounted() {
      this.reset();
    }
  }
</script>

<style>
  .ratio{
    padding-bottom:10%;
    background-color: #1E1E1E;
    height: 50px;
    width: 100%;
    /*overflow: hidden;
    position: relative;*/
  }
  .container {
    background-color: #1E1E1E;
    height:60px;
    padding-bottom:10%;
  }
  .horizontal.container{
    overflow-x: scroll;
    overflow-y: scroll;/*hidden*/
  }
  .horizontal .list{
    font-size:0;
    /*width:300%;*/
  }
  .horizontal .list .wrapper {
    display: inline-block;
    width:10%;
  }
  .dropbox {
    outline: 2px dashed grey; /* the dash box */
    outline-offset: -10px;
    background: lightcyan;
    color: dimgray;
    padding: 10px 10px;
    min-height: 60px; /* minimum height 200px*/
    position: relative;
    cursor: pointer;
  }
  
  .input-file {
    opacity: 0; /* invisible but it's there! */
    width:100%;/*width: 100%;*/
    height:200px;/*height: 200px;*/
    position: absolute;
    cursor: pointer;
  }
  
  .dropbox:hover {
    background: lightblue; /* when mouse over to the drop zone, change color */
  }
  
  .dropbox p {
    font-size: 1.2em;
    text-align: center;
    padding: 50px 0;
  }
</style>