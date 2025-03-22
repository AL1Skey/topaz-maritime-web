<template>
  <div class="step-content">
    <div class="section-container mb-4">
      <h4 class="section-title">
        <i class="bi bi-water me-2"></i>Sea Experience
      </h4>
      
      <div class="table-responsive mb-4">
        <table class="table table-bordered table-hover">
          <thead class="table-light">
            <tr>
              <th>Vessel Name</th>
              <th style="width:15rem;">Rank</th>
              <th>Vessel Type</th>
              <th>Vessel Company</th>
              <th style="width:6rem;">DWT</th>
              <th style="width:6rem;">KWH</th>
              <th>Sign On</th>
              <th>Sign Off</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(exp, index) in formData.experiences" :key="index">
              <td><input type="text" class="form-control" v-model="exp.vessel"></td>
              <td>
                <select class="form-select" v-model="exp.rank">
                  <option value="MASTER">MASTER</option>
                  <option value="SECOND OFFICER">SECOND OFFICER</option>
                  <option value="THIRD OFFICER">THIRD OFFICER</option>
                  <option value="SENIOR DECK CADET">SENIOR DECK CADET</option>
                  <option value="CHIEF ENGINEER">CHIEF ENGINEER</option>
                  <option value="SECOND ENGINEER">SECOND ENGINEER</option>
                  <option value="THIRD ENGINEER">THIRD ENGINEER</option>
                  <option value="FOURTH ENGINEER">FOURTH ENGINEER</option>
                  <option value="SENIOR ENGINE CADET">SENIOR ENGINE CADET</option>
                  <option value="ELECTRICIAN">ELECTRICIAN</option>
                  <option value="CADET ELECTRICIAN">CADET ELECTRICIAN</option>
                  <option value="CADET NAUTIC">CADET NAUTIC</option>
                  <option value="CADET TEHNIK">CADET TEHNIK</option>
                  <option value="MESS BOY">MESS BOY</option>
                  <option value="CHIEF COOK">CHIEF COOK</option>
                  <option value="FITTER">FITTER</option>
                  <option value="WIPER">WIPER</option>
                  <option value="OILER">OILER</option>
                  <option value="BOSUN">BOSUN</option>
                  <option value="SAILOR">SAILOR</option>
                  <option value="Q/MASTER">Q/MASTER</option>
                  <option value="PUMPMAN">PUMPMAN</option>
                  <option value="AB Seaman">AB Seaman</option>
                  <option value="Ordinary Seaman">Ordinary Seaman</option>
                </select>
              </td>
              <td>
                <select class="form-select" v-model="exp.vesselType">
                  <option value="bulkCarrier">Bulk Carrier</option>
                  <option value="container">Container Ship</option>
                  <option value="tanker">Tanker</option>
                  <option value="lpg">LPG Carrier</option>
                  <option value="lng">LNG Carrier</option>
                  <option value="roro">Ro-Ro</option>
                  <option value="passenger">Passenger Ship</option>
                  <option value="generalCargo">General Cargo</option>
                </select>
              </td>
              <td><input type="text" class="form-control" v-model="exp.company"></td>
              <td><input type="number" class="form-control" v-model="exp.dwt"></td>
              <td><input type="number" class="form-control" v-model="exp.kwh"></td>
              <td><input type="date" class="form-control" v-model="exp.signOn"></td>
              <td><input type="date" class="form-control" v-model="exp.signOff"></td>
              <td>
                <button type="button" class="btn btn-danger btn-sm" @click="$emit('remove-experience', index)">
                  <i class="bi bi-trash"></i>Delete
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <div class="section-container mb-4" style="background-color: white;box-shadow:none;">
      <button type="button" class="btn btn-primary" style="padding:0.6rem" @click="$emit('add-experience')">
        <i class="bi bi-plus-circle"></i> Add Experience
      </button>
    </div>
  </div>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue';

defineProps({
  formData: {
    type: Object,
    required: true
  }
});

defineEmits(['add-experience', 'remove-experience']);
</script>

<style scoped>
.section-container {
  background-color: #f8f9fa;
  border-radius: 8px;
  padding: 1.5rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
  margin-bottom: 1.5rem;
}

.section-title {
  color: #0066cc;
  border-bottom: 2px solid #0066cc;
  padding-bottom: 0.5rem;
  margin-bottom: 1.5rem;
}

@media (max-width: 768px) {
  .section-container {
    padding: 1rem;
  }
}
</style>