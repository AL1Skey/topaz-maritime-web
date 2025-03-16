<template>
    <div class="min-vh-100 bg-light">
      <div class="container py-5">
        <div class="card shadow">
          <div class="card-header bg-primary text-white p-4">
            <div class="d-flex align-items-center">
              <div class="me-3">
                <i class="bi bi-anchor fs-1"></i>
              </div>
              <div>
                <h1 class="fs-3 fw-bold mb-0">Maritime Recruitment Form</h1>
                <p class="text-white-50 mb-0">Please complete all required information</p>
              </div>
            </div>
          </div>
          
          <Form2ComponentsFormNavigation 
            :steps="steps" 
            :activeStep="activeStep" 
            @set-active-step="setActiveStep" 
          />
          
          <div class="card-body p-4">
            <form @submit.prevent="handleSubmit">
              <component 
                :is="steps[activeStep].component" 
                :formData="formData" 
                @update-form-data="updateFormData" 
              />
              
              <div class="mt-4 d-flex justify-content-between">
                <button 
                  v-if="activeStep > 0" 
                  type="button" 
                  class="btn btn-outline-primary d-flex align-items-center"
                  @click="handlePrevious"
                >
                  <i class="bi bi-chevron-left me-2"></i>
                  Previous
                </button>
                
                <button 
                  v-if="activeStep < steps.length - 1" 
                  type="button" 
                  class="btn btn-primary ms-auto d-flex align-items-center"
                  @click="handleNext"
                >
                  Next
                  <i class="bi bi-chevron-right ms-2"></i>
                </button>
                
                <button 
                  v-else 
                  type="submit" 
                  class="btn btn-success ms-auto d-flex align-items-center"
                >
                  Submit Application
                  <i class="bi bi-check-lg ms-2"></i>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, reactive } from 'vue';
  
  const activeStep = ref(0);
  const formData = reactive({
    // Personal Data
    candidateId: "",
    agentId: "",
    name: "",
    birthPlace: "",
    birthDate: "",
    sex: true,
    maritalStatusId: "",
    numberOfChild: 0,
    address: "",
    city: "",
    zipCode: "",
    countryId: "",
    phoneNo: "",
    handPhone: "",
    email: "",
    religionId: "",
    bloodType: "",
    nationalityId: "",
    rankToApply: "",
    rankApplyDate: "",
    certificateId: "",
    certificateNo: "",
    certificateStatusId: "",
    certificateIssued: "",
    certificateIssuedDate: "",
    certificateExpiryDate: "",
    certificateDoc: null,
    photo: null,
    height: "",
    weight: "",
    whiteShirt: "",
    bluePants: "",
    overall: "",
    safetyShoes: "",
    winterJacket: "",
    
    // Documents, Trainings, Experiences
    documents: [],
    trainings: [],
    experiences: []
  });
  
  const steps = [
    { title: "Personal Data", component: resolveComponent('Form2ComponentsPersonalDataForm') },
    { title: "Documents", component: resolveComponent('Form2ComponentsDocumentsForm') },
    { title: "Trainings", component: resolveComponent('Form2ComponentsTrainingsForm') },
    { title: "Experiences", component: resolveComponent('Form2ComponentsExperiencesForm') }
  ];
  
  const handleNext = () => {
    if (activeStep.value < steps.length - 1) {
      activeStep.value++;
      window.scrollTo(0, 0);
    }
  };
  
  const handlePrevious = () => {
    if (activeStep.value > 0) {
      activeStep.value--;
      window.scrollTo(0, 0);
    }
  };
  
  const setActiveStep = (step) => {
    activeStep.value = step;
    window.scrollTo(0, 0);
  };
  
  const updateFormData = (sectionData) => {
    Object.assign(formData, sectionData);
  };
  
  const handleSubmit = () => {
    console.log("Form submitted:", formData);
    // Here you would typically send the data to your API
    alert("Form submitted successfully!");
  };
  </script>
  
  <style>
  /* Import Bootstrap Icons */
  @import url("https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.1/font/bootstrap-icons.css");
  
  /* Custom styles for maritime theme */
  .bg-primary {
    background-color: #0d6efd !important;
  }
  
  .btn-primary {
    background-color: #0d6efd;
    border-color: #0d6efd;
  }
  
  .btn-primary:hover {
    background-color: #0b5ed7;
    border-color: #0a58ca;
  }
  
  .btn-success {
    background-color: #198754;
    border-color: #198754;
  }
  
  .btn-success:hover {
    background-color: #157347;
    border-color: #146c43;
  }
  
  .text-primary {
    color: #0d6efd !important;
  }
  
  .border-primary {
    border-color: #0d6efd !important;
  }
  </style>
  
  