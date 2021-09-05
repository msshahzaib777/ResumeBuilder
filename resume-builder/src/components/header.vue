<template>
  <div class="header">
    <div class=header-bg> 
      <MDBIcon iconStyle="far" icon="address-card" class="icon"></MDBIcon>
      <h1>Resume Builder</h1>
    </div>
  </div>
</template>


<script>
import { MDBIcon } from "mdb-vue-ui-kit";
export default {
  name: "Header",
  props: {
    msg: String,
  },
  components: {
      MDBIcon
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.header-bg{
    background-color: #111d4a;
    color: #fff8f0;
    padding:  2%;
    text-align:center;
    margin: 0px !important;
}
.icon{
    font-size:3em;
}
</style>
