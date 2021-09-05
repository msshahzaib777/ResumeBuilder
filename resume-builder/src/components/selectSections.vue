<template>
  <div class="select-section p-5 pb-0">
    <h1 class="mt-3">Sections to Include in Resume</h1>
    <ol class="py-3 mx-5">
      <li v-for="item in SectionsVisiblity" :key="item">
        <input
          type="checkbox"
          :id="index"
          :value="item.section"
          v-model="item.visbility"
          :disabled="defaults.includes(item.section) ? true : false"
        />
        <label class="mx-2" :for="index">{{ item.section }}</label>
      </li>
    </ol>
  </div>
</template>

<script>
import utils from "../utils/index";
export default {
  name: "select-section",
  props: {
    msg: String,
  },
  data: () => {
    return {
      SectionsVisiblity: utils.sections.map((x) => {
        return {
          section: x,
          visbility: utils.defaults.includes(x) ? true : false,
        };
      }),
      defaults: utils.defaults,
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.select-section {
  height: 100%;
}
ol {
  text-align: left;
}
h1 {
  color: #1e1e24;
  text-align: "left";
}
</style>
