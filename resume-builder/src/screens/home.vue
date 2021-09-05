<template>
  <div class="home">
    <Header class="header" />
    <SelectSection />
    <div class="pb-5 px-5">
      <MDBBtn
        style="display: block; margin-left: auto; margin-right: 5%"
        class="btn-custom"
        >Next</MDBBtn
      >
    </div>
  </div>
</template>

<script>
import Header from "../components/header";
import SelectSection from "../components/selectSections";
import { MDBBtn } from "mdb-vue-ui-kit";

export default {
  name: "Home",
  props: {
    msg: String,
  },
  components: {
    Header,
    SelectSection,
    MDBBtn,
  },
};
</script>

<style scoped>
.btn-custom {
  background-color: #111d4a;
  color: #fff8f0;
  align-self: flex-end;
}
.home {
  background: #fff8f0 !important;
}
</style>
