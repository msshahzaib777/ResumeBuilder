<template>
  <div class="form-control">
    <h2>Personal Info</h2>
    <img
      :src="
        profilePic != NULL
          ? profilePic
          : 'https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/default-avatar.png'
      "
      class="img-fluid rounded-circle uploading-image"
      style="margin-left: 3%; margin-bottom: 1%; width: 200px"
      alt=""
    />
    <br />
    <div class="form-control">
      <MDBInput type="file" accept="image/jpeg" @change="uploadImage" />
      <span style="color: red" class="form-control">{{ error["image"] }}</span>
    </div>
    <div class="form-control">
      <MDBInput
        id="fullName"
        v-model="fullName"
        label="Full Name"
        type="text"
        name="fullName"
      />
      <span style="color: red" class="form-control">{{
        error["fullName"]
      }}</span>
    </div>
    <div class="form-control">
      <MDBInput
        label="Job Title"
        id="designation"
        v-model="designation"
        type="text"
        name="designation"
      />
      <span style="color: red" class="form-control">{{
        error["designation"]
      }}</span>
    </div>
    <div class="form-control">
      <MDBInput
        id="email"
        v-model="email"
        name="email"
        type="email"
        label="Email"
        required
        @blur="validateEmail"
      />
      <span style="color: red" class="form-control">{{ error["email"] }}</span>
    </div>
    <div class="form-control">
      <MDBInput
        id="phoneNo"
        label="Phone No."
        v-model="phoneNo"
        type="tel"
        name="phoneNo"
      />
      <span style="color: red" class="form-control">{{
        error["phoneNo"]
      }}</span>
    </div>
    <div class="form-control">
      <MDBInput
        id="links"
        label="links"
        v-model="links"
        type="text"
        name="links"
      />
      <span v-show="links == '' || links == null"
        >please enter comma seperated values</span
      >
      <span style="color: red" class="form-control">{{ error["links"] }}</span>
      <div :v-if="links.split(', ').length > 1">
        <MDBBadge
          v-for="link in links.split(', ')"
          :key="link"
          style="background-color: #111d4a; padding: 0.4%"
          class="ms-2"
          pill
          >{{ link }}</MDBBadge
        >
      </div>
    </div>
    <div class="form-control">
      <MDBTextarea
        id="objective"
        label="Objective"
        rows="3"
        v-model="objective"
      ></MDBTextarea>
      <span style="color: red" class="form-control">{{
        error["objective"]
      }}</span>
    </div>
    <div class="pb-5 px-5">
      <MDBBtn
        style="display: block; margin-left: auto; margin-right: 5%"
        class="btn-custom"
        @click="setPersonalInfo"
        >Next</MDBBtn
      >
    </div>
  </div>
</template>

<script>
import { MDBInput, MDBBadge, MDBTextarea, MDBBtn } from "mdb-vue-ui-kit";

export default {
  name: "personal-info-form",
  components: {
    MDBInput,
    MDBBadge,
    MDBTextarea,
    MDBBtn,
  },
  data: () => {
    return {
      error: {},
      fullName: null,
      designation: null,
      phoneNo: null,
      email: null,
      links: "",
      objective: null,
      profilePic: null,
    };
  },
  methods: {
    setPersonalInfo() {
      if (!this.checkForm()) {
        console.log("Setting PersonalInfo");
        this.$store.commit("UPDATE_PERSONAL", {
          fullName: this.fullName,
          designation: this.designation,
          phoneNo: this.phoneNo,
          email: this.email,
          links: this.links.split(" "),
          objective: this.objective,
          profilePic: this.profilePic,
        });
      } else {
        console.log("errors in the Form");
      }
    },
    checkForm: function () {
      this.fullName =
        this.error["fullName"] == "" || this.error["fullName"] == null
          ? "Please enter a valid Full Name"
          : null;
      this.error["designation"] =
        this.designation == "" || this.error["designation"] == null
          ? "Please enter a valid Designation/Job Title"
          : null;
      this.phoneNo =
        this.error["phoneNo"] == "" || this.error["phoneNo"] == null
          ? "Please enter a valid Phone No."
          : null;
      this.links =
        this.error["links"] == "" || this.error["links"] == null
          ? "Please enter a links"
          : null;
      this.error["image"] =
        this.profilePic == null ? "Please upload an Image" : null;
      this.error["email"] =
        /^(([^<>()\\[\]\\.,;:\s@"]+(\.[^<>()\\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,24}))$/.test(
          this.email
        )
          ? "Please enter a valid email address"
          : null;

      for (const property in this.error) {
        if (this.error[property] != null) {
          return false;
        }
      }
      return true;
    },
    uploadImage(e) {
      const image = e.target.files[0];
      const reader = new FileReader();
      reader.readAsDataURL(image);
      reader.onload = (e) => {
        this.profilePic = e.target.result;
        console.log(this.profilePic);
      };
    },
  },
};
</script>

<style scoped>
.form-control {
  border-width: 0px;
  margin-bottom: 1%;
  margin-right: auto;
  margin-left: auto;
}
.btn-custom {
  background-color: #111d4a;
  color: #fff8f0;
  align-self: flex-end;
}
</style>
