<template>
  <div class="bg-light border-bottom">
    <div class="container">
      <div class="nav nav-tabs flex-nowrap overflow-hidden">
        <button
          v-for="(step, index) in steps"
          :key="index"
          @click="$emit('set-active-step', index)"
          class="nav-link px-4 py-3 text-nowrap"
          :class="{
            'active': activeStep === index,
            'text-primary': activeStep === index,
            'text-muted': activeStep !== index
          }"
        >
          <div class="d-flex align-items-center">
            <div
              class="rounded-circle d-flex align-items-center justify-content-center me-2 text-center"
              :class="{
                'bg-primary text-white': activeStep === index,
                'bg-success text-white': index < activeStep,
                'bg-light text-muted': index > activeStep
              }"
              style="width: 32px; height: 32px;"
            >
              <i v-if="index < activeStep" class="bi bi-check"></i>
              <span v-else>{{ index + 1 }}</span>
            </div>
            {{ step.title }}
          </div>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  steps: {
    type: Array,
    required: true
  },
  activeStep: {
    type: Number,
    required: true
  }
});

defineEmits(['set-active-step']);
</script>

