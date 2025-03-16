<template>
  <div>
    <div class="d-flex justify-content-between align-items-center mb-3">
      <h2 class="fs-4 fw-semibold text-primary d-flex align-items-center">
        <i class="bi bi-mortarboard-fill me-2"></i>
        Trainings & Certifications
      </h2>
      <button 
        @click="addTraining" 
        type="button" 
        class="btn btn-outline-primary d-flex align-items-center"
      >
        <i class="bi bi-plus-circle me-2"></i>
        Add Training
      </button>
    </div>
    
    <p class="text-muted mb-4">
      Please provide details of all maritime trainings and certifications you have completed.
    </p>
    
    <div v-if="trainings.length === 0" class="card">
      <div class="card-body p-5 text-center">
        <div class="mx-auto rounded-circle bg-light d-flex align-items-center justify-content-center mb-3" style="width: 64px; height: 64px;">
          <i class="bi bi-mortarboard-fill fs-1 text-primary"></i>
        </div>
        <h3 class="fs-5 fw-medium mb-2">No Trainings Added</h3>
        <p class="text-muted mb-4">
          Add your maritime trainings such as Basic Safety Training, Firefighting, etc.
        </p>
        <button @click="addTraining" class="btn btn-primary">
          Add Your First Training
        </button>
      </div>
    </div>
    
    <div v-else class="card mb-3" v-for="(training, index) in trainings" :key="index">
      <div class="card-body position-relative">
        <button
          @click="removeTraining(index)"
          type="button"
          class="btn btn-sm btn-link text-danger position-absolute top-0 end-0"
          style="font-size: 1.25rem;"
        >
          <i class="bi bi-trash"></i>
        </button>
        
        <div class="row g-3">
          <div class="col-md-6">
            <label :for="`trainingId-${index}`" class="form-label">Training Type</label>
            <select
              :id="`trainingId-${index}`"
              class="form-select"
              v-model="training.trainingId"
            >
              <option value="">Select training type</option>
              <option 
                v-for="type in trainingTypes" 
                :key="type.id" 
                :value="type.id"
              >
                {{ type.name }}
              </option>
            </select>
          </div>
          
          <div class="col-md-6">
            <label :for="`referenceId-${index}`" class="form-label">Reference ID</label>
            <input
              :id="`referenceId-${index}`"
              type="text"
              class="form-control"
              v-model="training.referenceId"
              placeholder="Training reference ID"
            />
          </div>
          
          <div class="col-md-6">
            <label :for="`certificateNo-${index}`" class="form-label">Certificate Number</label>
            <input
              :id="`certificateNo-${index}`"
              type="text"
              class="form-control"
              v-model="training.certificateNo"
              placeholder="Certificate number"
            />
          </div>
          
          <div class="col-md-6">
            <label :for="`validDate-${index}`" class="form-label">Valid Date</label>
            <input
              :id="`validDate-${index}`"
              type="date"
              class="form-control"
              v-model="training.validDate"
            />
          </div>
          
          <div class="col-md-6">
            <label :for="`expiredDate-${index}`" class="form-label">Expiry Date</label>
            <input
              :id="`expiredDate-${index}`"
              type="date"
              class="form-control"
              v-model="training.expiredDate"
            />
          </div>
        </div>
      </div>
    </div>
    
    <div v-if="trainings.length > 0" class="text-center mt-4">
      <button 
        @click="addTraining" 
        type="button" 
        class="btn btn-outline-primary d-flex align-items-center mx-auto"
      >
        <i class="bi bi-plus-circle me-2"></i>
        Add Another Training
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive, watch } from 'vue';

const props = defineProps({
  formData: {
    type: Object,
    required: true
  }
});

const emit = defineEmits(['update-form-data']);

const trainings = reactive(props.formData.trainings || []);

// Watch for changes in trainings array
watch(trainings, () => {
  emit('update-form-data', { trainings: [...trainings] });
}, { deep: true });

// Watch for changes in props.formData to update local state
watch(() => props.formData.trainings, (newVal) => {
  if (newVal) {
    trainings.splice(0, trainings.length, ...newVal);
  }
}, { deep: true, immediate: true });

const addTraining = () => {
  trainings.push({
    trainingId: "",
    referenceId: "",
    certificateNo: "",
    validDate: "",
    expiredDate: ""
  });
};

const removeTraining = (index) => {
  trainings.splice(index, 1);
};

const trainingTypes = [
  { id: "1", name: "Basic Safety Training (BST)" },
  { id: "2", name: "Advanced Firefighting" },
  { id: "3", name: "Proficiency in Survival Craft and Rescue Boats" },
  { id: "4", name: "Medical First Aid" },
  { id: "5", name: "Medical Care" },
  { id: "6", name: "Security Awareness Training" },
  { id: "7", name: "Designated Security Duties" },
  { id: "8", name: "Ship Security Officer" },
  { id: "9", name: "GMDSS" },
  { id: "10", name: "Radar Observer" },
  { id: "11", name: "ARPA" },
  { id: "12", name: "Bridge Resource Management" },
  { id: "13", name: "Engine Resource Management" },
  { id: "14", name: "Tanker Familiarization" },
  { id: "15", name: "Advanced Training for Oil Tanker" },
  { id: "16", name: "Advanced Training for Chemical Tanker" },
  { id: "17", name: "Advanced Training for Gas Tanker" },
  { id: "18", name: "Crowd Management" },
  { id: "19", name: "Crisis Management and Human Behavior" },
  { id: "20", name: "Passenger Safety" },
  { id: "21", name: "Other" }
];
</script>

