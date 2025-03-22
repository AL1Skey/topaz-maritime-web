<template>
  <div class="steps-container">
    <div 
      v-for="step in 5" 
      :key="step"
      class="step-item" 
      :class="{ 'active': currentStep === step }" 
      @click="$emit('go-to-step', step)"
    >
      <div class="step-number">{{ step }}</div>
      <div class="step-text">{{ stepLabels[step-1] }}</div>
    </div>
  </div>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue';

defineProps({
  currentStep: {
    type: Number,
    required: true
  }
});

defineEmits(['go-to-step']);

const stepLabels = [
  'Applied Position',
  'Personal Data',
  'Documents',
  'Trainings',
  'Experiences'
];
</script>

<style scoped>
.steps-container {
  display: flex;
  background-color: #f8f9fa;
  border-bottom: 1px solid #dee2e6;
}

.step-item {
  flex: 1;
  text-align: center;
  padding: 15px 10px;
  position: relative;
  cursor: pointer;
  color: #6c757d;
  transition: all 0.3s ease;
}

.step-item:hover {
  background-color: #f0f4f8;
}

.step-item::after {
  content: '';
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  width: 1px;
  background-color: #dee2e6;
}

.step-item:last-child::after {
  display: none;
}

.step-item.active {
  background-color: #e9f0f8;
  color: #0066cc;
  font-weight: bold;
}

.step-number {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: #dee2e6;
  color: #6c757d;
  margin-bottom: 5px;
  font-weight: bold;
}

.step-item.active .step-number {
  background-color: #0066cc;
  color: white;
}

.step-text {
  font-size: 0.9rem;
}

@media (max-width: 768px) {
  .step-item {
    padding: 10px 5px;
  }
  
  .step-number {
    width: 25px;
    height: 25px;
    font-size: 0.8rem;
  }
  
  .step-text {
    font-size: 0.7rem;
  }
}
</style>