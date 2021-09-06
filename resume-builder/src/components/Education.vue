<template>
  <div class="form-control">
    <h2>Education</h2>
    <div class="form-control">
      <MDBInput
        id="degree"
        v-model="degree"
        label="Degree"
        type="text"
        name="degree"
      />
      <span style="color: red" class="form-control">{{ error["degree"] }}</span>
    </div>
    <div class="form-control">
      <MDBInput
        label="Institute Name"
        id="schoolName"
        v-model="schoolName"
        type="text"
        name="schoolName"
      />
      <span style="color: red" class="form-control">{{
        error["schoolName"]
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
        id="grade"
        label="Phone No."
        v-model="grade"
        type="tel"
        name="grade"
      />
      <span style="color: red" class="form-control">{{
        error["grade"]
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
      <span style="color: red" class="form-control">{{ error["links"] }}</span>
      <div :v-if="links.split(' ').length > 1">
        <MDBBadge
          v-for="link in links.split(' ')"
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
  name: "education-form",
  components: {
    MDBInput,
    MDBBadge,
    MDBTextarea,
    MDBBtn,
  },
  data: () => {
    return {
      error: {},
      degree: "",
      schoolName: "",
      grade: "",
      startDate: "",
      endDate: "",
      current: "",
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
          degree: this.degree,
          schoolName: this.schoolName,
          grade: this.grade,
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
      this.degree =
        this.error["degree"] == "" || this.error["degree"] == null
          ? "Please enter your Degree"
          : null;
      this.error["schoolName"] =
        this.schoolName == "" || this.error["schoolName"] == null
          ? "Please enter a valid schoolName/Job Title"
          : null;
      this.grade =
        this.error["grade"] == "" || this.error["grade"] == null
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
