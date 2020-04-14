<template>
<div>
    <!-- <p  @click="onChange" class="comments">Comments</p>
        <v-col cols="12" style="width:85%; margin:0 auto; " >
        <textarea id="commentVAL" style="border-radius:16px; width:90%; height:135px; padding:7px; box-shadow: 0px 4px 4px rgba(184, 184, 184, 0.25); border: 0.5px solid #C4C4C4;"
        
        type="text"
         @change="showContact"
          name="input"
          placeholder="  Write your comment here"
        />
            <v-btn @click="submitComment()"  rounded color="#2496FF" dark style="width:130px; border-radius:16px; margin-top:10px;">Submit</v-btn>
        <hr/>

      </v-col>
      <div style="width:85%; margin: 0 auto; height: fit-content;">
          <v-col  v-for="(item,i) in commentOutput" :key="i" cols="12">
              <div style="display:flex">
                <i class="fas fa-user fa-2x" style="margin-right:15px"></i>
                <p>{{item}}</p>
               </div>
              <hr />
          </v-col>
         
      </div> -->
      <div style="width:75%; margin: 0px auto;">
      <div  class="fb-comments" data-href="https://developers.facebook.com/docs/plugins/comments#labdecabits" data-width="10px" data-numposts="5"></div>
      </div>
</div>

</template>
<script>
export default {
  beforeMount(){
    
    for(let i=0;i<3;i++){
      this.commentOutput[i]=localStorage.getItem("comments"+i)
    }
  },
    methods: {
         showContact(e){
           console.log(e.target.value)
           let com = {
             comment:e.target.value
           }
       this.commentInput.push(com)
    },
         submitComment(){
           console.log(this.commentInput)
       this.commentInput.map((comment,index) => [
          localStorage.setItem("comments"+index,comment.comment)
       ])
    },
    },
    data(){
      return{
        commentInput:[],
        commentOutput:[],
       
      }
    }
}
</script>