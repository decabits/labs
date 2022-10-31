<template>
  <div v-if="pname.description">
    <p class="project-desc">Project  <span style="color: #2174DF" > Description</span> </p>

    <template class="col-6"  v-if="pname.description.paragraphs.length">
      <p  class="project-content" v-for="p in pname.description.paragraphs" :key="p">
        {{p}}
      </p>
    </template>
  </div>
</template>

<script>
</script>
<style>
.project-desc {
  font-size: 46px;
  color: #fff;
  margin-bottom: 4vh;
}

.project-content {
  font-size: 1.12rem;
  font-style: normal;
  color: #fff;
  margin-bottom: 1.25rem;
  letter-spacing: 0.15px;
}

@media only screen and (max-width: 786px){
  .project-desc {
    font-size: 36px;
  }
  .project-content {
    font-size: 0.975rem;
    font-weight: 400;
    line-height: 1.25rem;
  }
}
@media only screen and (max-width: 420px){
  .project-desc {
    font-size: 30px;
  }
  .project-content {
    font-size: 0.95rem;
    font-weight: 400;
    line-height: 1rem;
  }
}

</style>
<script>
import Cards from "./Cards";
export default {
  components: {
    Cards,
  },
  data: () => ({
    review: ["Good", "Awesome", "Loved it", "Not Good"],
    comment: "",
  }),
  props: {
    pname: Object,
    stringProp: String,
    title: String,
  },
  methods: {
    vclick() {
      console.log(this.props);
    },
  },
};

</script>
