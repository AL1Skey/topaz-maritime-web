<template>
  <div class="step-content">
    <div class="section-container mb-4">
      <h4 class="section-title">
        <i class="bi bi-mortarboard me-2"></i>Trainings & Certifications
      </h4>
      
      <h5 class="mb-3">Standard Trainings</h5>
      <div class="table-responsive mb-4">
        <table class="table table-bordered table-hover">
          <thead class="table-light">
            <tr>
              <th>Training</th>
              <th>Qualification No.</th>
              <th>Issued Date</th>
              <th>Expiration Date</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(training, index) in formData.standardTrainings" :key="`std-${index}`">
              <td>{{ training.name }}</td>
              <td><input type="text" class="form-control" v-model="training.qualificationNo"></td>
              <td><input type="date" class="form-control" v-model="training.issuedDate"></td>
              <td><input type="date" class="form-control" v-model="training.expiredDate"></td>
            </tr>
          </tbody>
        </table>
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