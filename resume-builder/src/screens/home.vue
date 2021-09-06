<template>
  <div class="home">
    <Header class="header" />
    <SelectSection />
  </div>
</template>

<script>
import Header from "../components/header";
import SelectSection from "../components/selectSections";

export default {
  name: "Home",
  props: {
    msg: String,
  },
  components: {
    Header,
    SelectSection,
  },
};
</script>

<style scoped>
.home {
  background: #fff8f0 !important;
}
</style>
