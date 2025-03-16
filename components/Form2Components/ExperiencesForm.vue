<template>
  <div>
    <div class="d-flex justify-content-between align-items-center mb-3">
      <h2 class="fs-4 fw-semibold text-primary d-flex align-items-center">
        <i class="bi bi-compass me-2"></i>
        Sea Experience
      </h2>
      <button 
        @click="addExperience" 
        type="button" 
        class="btn btn-outline-primary d-flex align-items-center"
      >
        <i class="bi bi-plus-circle me-2"></i>
        Add Experience
      </button>
    </div>
    
    <p class="text-muted mb-4">
      Please provide details of your previous sea experience, starting with the most recent.
    </p>
    
    <div v-if="experiences.length === 0" class="card">
      <div class="card-body p-5 text-center">
        <div class="mx-auto rounded-circle bg-light d-flex align-items-center justify-content-center mb-3" style="width: 64px; height: 64px;">
          <i class="bi bi-compass fs-1 text-primary"></i>
        </div>
        <h3 class="fs-5 fw-medium mb-2">No Sea Experience Added</h3>
        <p class="text-muted mb-4">
          Add your previous vessel experience including vessel details and your role.
        </p>
        <button @click="addExperience" class="btn btn-primary">
          Add Your First Experience
        </button>
      </div>
    </div>
    
    <div v-else class="card mb-3" v-for="(experience, index) in experiences" :key="index">
      <div class="card-body position-relative">
        <button
          @click="removeExperience(index)"
          type="button"
          class="btn btn-sm btn-link text-danger position-absolute top-0 end-0"
          style="font-size: 1.25rem;"
        >
          <i class="bi bi-trash"></i>
        </button>
        
        <div class="row g-3">
          <div class="col-md-4">
            <label :for="`vessel-${index}`" class="form-label">Vessel Name</label>
            <input
              :id="`vessel-${index}`"
              type="text"
              class="form-control"
              v-model="experience.vessel"
              placeholder="Vessel name"
            />
          </div>
          
          <div class="col-md-4">
            <label :for="`vesselType-${index}`" class="form-label">Vessel Type</label>
            <select
              :id="`vesselType-${index}`"
              class="form-select"
              v-model="experience.vesselType"
            >
              <option value="">Select vessel type</option>
              <option 
                v-for="(type, i) in vesselTypes" 
                :key="i" 
                :value="type"
              >
                {{ type }}
              </option>
            </select>
          </div>
          
          <div class="col-md-4">
            <label :for="`flag-${index}`" class="form-label">Flag</label>
            <select
              :id="`flag-${index}`"
              class="form-select"
              v-model="experience.flag"
            >
              <option value="">Select flag</option>
              <option 
                v-for="(flag, i) in flags" 
                :key="i" 
                :value="flag"
              >
                {{ flag }}
              </option>
            </select>
          </div>
          
          <div class="col-md-4">
            <label :for="`tradingAreaId-${index}`" class="form-label">Trading Area</label>
            <select
              :id="`tradingAreaId-${index}`"
              class="form-select"
              v-model="experience.tradingAreaId"
            >
              <option value="">Select trading area</option>
              <option 
                v-for="area in tradingAreas" 
                :key="area.id" 
                :value="area.id"
              >
                {{ area.name }}
              </option>
            </select>
          </div>
          
          <div class="col-md-4">
            <label :for="`rank-${index}`" class="form-label">Rank</label>
            <select
              :id="`rank-${index}`"
              class="form-select"
              v-model="experience.rank"
            >
              <option value="">Select rank</option>
              <option 
                v-for="(rank, i) in ranks" 
                :key="i" 
                :value="rank"
              >
                {{ rank }}
              </option>
            </select>
          </div>
          
          <div class="col-md-4">
            <label :for="`dwt-${index}`" class="form-label">DWT (Deadweight Tonnage)</label>
            <input
              :id="`dwt-${index}`"
              type="number"
              class="form-control"
              v-model="experience.dwt"
              placeholder="Vessel DWT"
            />
          </div>
          
          <div class="col-md-4">
            <label :for="`kwh-${index}`" class="form-label">Engine Power (kWh)</label>
            <input
              :id="`kwh-${index}`"
              type="number"
              class="form-control"
              v-model="experience.kwh"
              placeholder="Engine power"
            />
          </div>
          
          <div class="col-md-4">
            <label :for="`owner-${index}`" class="form-label">Owner/Company</label>
            <input
              :id="`owner-${index}`"
              type="text"
              class="form-control"
              v-model="experience.owner"
              placeholder="Vessel owner or company"
            />
          </div>
          
          <div class="col-md-4">
            <label :for="`signOn-${index}`" class="form-label">Sign On Date</label>
            <input
              :id="`signOn-${index}`"
              type="date"
              class="form-control"
              v-model="experience.signOn"
            />
          </div>
          
          <div class="col-md-4">
            <label :for="`signOff-${index}`" class="form-label">Sign Off Date</label>
            <input
              :id="`signOff-${index}`"
              type="date"
              class="form-control"
              v-model="experience.signOff"
            />
          </div>
          
          <div class="col-12">
            <label :for="`signOffReason-${index}`" class="form-label">Sign Off Reason</label>
            <textarea
              :id="`signOffReason-${index}`"
              class="form-control"
              v-model="experience.signOffReason"
              placeholder="Reason for signing off"
              rows="2"
            ></textarea>
          </div>
        </div>
      </div>
    </div>
    
    <div v-if="experiences.length > 0" class="text-center mt-4">
      <button 
        @click="addExperience" 
        type="button" 
        class="btn btn-outline-primary d-flex align-items-center mx-auto"
      >
        <i class="bi bi-plus-circle me-2"></i>
        Add Another Experience
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

const experiences = reactive(props.formData.experiences || []);

// Watch for changes in experiences array
watch(experiences, () => {
  emit('update-form-data', { experiences: [...experiences] });
}, { deep: true });

// Watch for changes in props.formData to update local state
watch(() => props.formData.experiences, (newVal) => {
  if (newVal) {
    experiences.splice(0, experiences.length, ...newVal);
  }
}, { deep: true, immediate: true });

const addExperience = () => {
  experiences.push({
    vessel: "",
    vesselType: "",
    flag: "",
    tradingAreaId: "",
    rank: "",
    dwt: 0,
    kwh: 0,
    owner: "",
    signOn: "",
    signOff: "",
    signOffReason: ""
  });
};

const removeExperience = (index) => {
  experiences.splice(index, 1);
};

const vesselTypes = [
  "Bulk Carrier",
  "Container Ship",
  "Crude Oil Tanker",
  "Chemical Tanker",
  "LNG Carrier",
  "LPG Carrier",
  "General Cargo",
  "Ro-Ro",
  "Passenger Ship",
  "Cruise Ship",
  "Offshore Supply Vessel",
  "AHTS",
  "Jack-up Rig",
  "Semi-submersible",
  "Drillship",
  "Other"
];

const flags = [
  "Indonesia",
  "Singapore",
  "Panama",
  "Liberia",
  "Marshall Islands",
  "Bahamas",
  "Malta",
  "Cyprus",
  "Hong Kong",
  "Greece",
  "Japan",
  "Norway",
  "United Kingdom",
  "Other"
];

const tradingAreas = [
  { id: "1", name: "Worldwide" },
  { id: "2", name: "Asia Pacific" },
  { id: "3", name: "Europe" },
  { id: "4", name: "Americas" },
  { id: "5", name: "Africa" },
  { id: "6", name: "Middle East" },
  { id: "7", name: "Coastal" },
  { id: "8", name: "Inland Waters" },
  { id: "9", name: "Other" }
];

const ranks = [
  "Master",
  "Chief Officer",
  "Second Officer",
  "Third Officer",
  "Chief Engineer",
  "Second Engineer",
  "Third Engineer",
  "Fourth Engineer",
  "Electrician",
  "Bosun",
  "Able Seaman",
  "Ordinary Seaman",
  "Fitter",
  "Oiler",
  "Wiper",
  "Cook",
  "Steward",
  "Cadet",
  "Other"
];
</script>

