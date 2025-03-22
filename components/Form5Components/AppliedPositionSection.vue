<template>
  <div class="step-content">
    <div class="section-container mb-4">
      <h4 class="section-title">
        <i class="bi bi-briefcase me-2"></i>Applied Position
      </h4>
      <div class="row g-3">
        <div class="col-md-6">
          <label for="rankToApply" class="form-label">Rank to Apply</label>
          <select class="form-select" id="rankToApply" disabled="true" v-model="formData.rankToApply" required>
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
        </div>
        <div class="col-md-6">
          <label for="rankApplyDate" class="form-label">Application Date</label>
          <input type="date" class="form-control" id="rankApplyDate" disabled="true" v-model="formData.rankApplyDate" readonly>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from 'vue';

defineProps({
  formData: {
    type: Object,
    required: true
  }
});
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