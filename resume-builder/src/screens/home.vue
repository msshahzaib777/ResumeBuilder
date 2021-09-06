<template>
  <div class="home">
    <Header class="header" />
    <!-- <SelectSection /> -->
    <PersonalInfoForm />
  </div>
</template>

<script>
import Header from "../components/header";
// import SelectSection from "../components/selectSections";
import PersonalInfoForm from "../components/PersoanlInfoForm.vue";

export default {
  name: "Home",
  props: {
    msg: String,
  },
  components: {
    Header,
    // SelectSection,
    PersonalInfoForm,
  },
};
</script>

<style scoped>
.home {
  background: #fff8f0 !important;
}
</style>
