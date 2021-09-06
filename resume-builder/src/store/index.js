import { createStore } from "vuex";

export default createStore({
  state: {
    Resume: {
      SectionsVisiblity: [],
      PersonalInfo: {},
      Education: [],
      Experiance: [],
      Project: [],
      Certificattion: [],
      Publication: [],
      Interest: [],
      Skill: [],
      Language: [],
      ProfilePic: {},
    },
    personalInfo: {
      fullName: "",
      designation: "",
      phoneNo: "",
      email: "",
      links: "",
      objective: "",
      profilePic: "",
    },
    Educations: {
      degree: "",
      schoolName: "",
      grade: "",
      startDate: "",
      endDate: "",
      current: "",
    },
    Experiances: {
      designation: "",
      companyName: "",
      description: "",
      stack: [],
      startDate: "",
      endDate: "",
      current: "",
    },
    Projects: {
      designation: "",
      companyName: "",
      description: "",
      stack: [],
      startDate: "",
      endDate: "",
      current: "",
    },
  },
  mutations: {
    UPDATE_SECTIONS(state, sections) {
      state.Resume.SectionsVisiblity = sections;
    },
    UPDATE_PERSONAL(state, personalInfo) {
      state.Resume.PersonalInfo = personalInfo;
    },
    UPDATE_EDUCATION(state, education) {
      const _education = state.Educations.find(
        (item) => item.id === education.id
      );
      Object.assign(_education, education);
    },
  },
  actions: {},
  modules: {},
});
