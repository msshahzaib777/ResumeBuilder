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
        label="Grade"
        v-model="grade"
        type="tel"
        name="grade"
      />
      <span style="color: red" class="form-control">{{ error["grade"] }}</span>
    </div>
    <div class="form-control">
      <input type="checkbox" id="current" value="Current" v-model="current" />
      <label class="mx-2" for="current">Current</label>
    </div>
    <MDBRow class="justify-content-evenly">
      <MDBCol col="6">
        <div class="form-control">
          <label>Start Date</label>
          <Datepicker v-model="startDate" />
          <span style="color: red" class="form-control">{{
            error["startDate"]
          }}</span>
        </div>
      </MDBCol>
      <MDBCol col="6"
        ><div class="form-control"  v-if="!current">
          <label>End Date</label>
          <Datepicker v-model="endDate" />
          <span style="color: red" class="form-control">{{
            error["endDate"]
          }}</span>
        </div></MDBCol
      >
    </MDBRow>
    <div class="pb-5 px-5">
      <MDBBtn
        style="display: block; margin-left: auto; margin-right: 5%"
        class="btn-custom"
        @click="setEducation"
        >Add</MDBBtn
      >
    </div>
  </div>
</template>

<script>
import { MDBInput, MDBBtn, MDBRow, MDBCol } from "mdb-vue-ui-kit";
import Datepicker from "vue3-datepicker";

export default {
  name: "education-form",
  components: {
    MDBInput,
    MDBBtn,
    MDBRow,
    MDBCol,
    Datepicker,
  },
  data: () => {
    return {
      error: {},
      id: null,
      degree: null,
      schoolName: null,
      grade: null,
      startDate: null,
      endDate: null,
      current: null,
    };
  },
  methods: {
    setEducation() {
      if (!this.checkForm()) {
        console.log("Setting setEducation");
        this.$store.commit("UPDATE_EDUCATION", {
          id:
            this.id == null
              ? this.$store.state.Resume.Education.length
              : this.id,
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
          ? "Please enter your Grades"
          : null;
      for (const property in this.error) {
        if (this.error[property] != null) {
          return false;
        }
      }
      return true;
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
<style>
.v3dp__datepicker input {
  width: 100%;
}
</style>
