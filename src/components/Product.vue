<template>
<form id="productForm" @submit.prevent="savePost">
    <div class="mdl-grid">
        <div class="mdl-cell mdl-cell--12-col">
            <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label" style="width:100%;">            
                <input id="contentId" type="text" class="mdl-textfield__input" v-model="content.id"/>
                <label class="mdl-textfield__label" for="contentId">번호</label>
            </div>

            <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label" style="width:100%;">  
                <input id="contentName" type="text" class="mdl-textfield__input" v-model="content.name"/>
                <label class="mdl-textfield__label" for="contentName">이름</label>
            </div>

            <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label" style="width:100%;">  
                <input id="contentName" type="text" class="mdl-textfield__input" v-model="content.level"/>
                <label class="mdl-textfield__label" for="contentLabel">난이도</label>
            </div>
            
            <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label" style="width:100%;"> 
                <input id="category1" type="text" class="mdl-textfield__input" v-model="content.category1"/>
                <label class="mdl-textfield__label" for="category1">카테고리1</label>
            </div>

            <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label" style="width:100%;"> 
                <input id="category2" type="text" class="mdl-textfield__input" v-model="content.category2"/>
                <label class="mdl-textfield__label" for="category2">카테고리2</label>
            </div>

            <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label" style="width:100%;"> 
                <input id="productName" type="text" class="mdl-textfield__input" v-model="content.productName"/>
                <label class="mdl-textfield__label" for="productName">제품명</label>
            </div>
        </div>
        <div class="mdl-cell mdl-cell--12-col mdl-cell--4-col-phone">
            <content-upload v-bind:contentBase="content.uploadBase" 
                v-bind:contentImages="content.imageList" 
                @uploadedImages="uploadedImages">
            </content-upload>
        </div>
        <p>
            <button type="submit" class="mdl-button mdl-js-button mdl-button--raised mdl-button--colored">
                저장
            </button>
        </p>
    </div>
</form>    
</template>

<script>
import ContentUpload from './ContentUpload.vue'
import * as axios from 'axios'

export default {
    name : "product",
    components: {
        ContentUpload
    },
    props : {
        contentId : String
    },
    data : function() {
        return {
            content : {
                id : this.contentId,
                name : "name",
                level : "level",
                category1 : "초등",
                category2 : "wedo",
                productName : "lego",
                uploadBase : "",
                imageList : []
            }
        }
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
    computed : {
        status : function() {
            return this.imageList.length > 0? 2 : 0;
        }
    },
    methods : {
        
        uploadedImages : function(event) {
            console.log(event);
            this.content.uploadBase = event.uploadBase;
            this.content.imageList = event.uploadImages;
        },
        savePost: function () {
            const BASE_URL = 'http://localhost:8000';
            let data = this.content;
            this.content.imageList.forEach((img,i,arr)=>{
                data.imageList[i] = img.id;
            });
            axios.post(`${BASE_URL}/contents/model`, data)
            .then(function(res) {
                console.log(res.data)
            }, function() {
                console.log('failed')
            })
        }        
    },
    render : h=>h(ContentUpload)
}
</script>