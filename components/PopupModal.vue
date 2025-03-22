<template>
  <div v-if="show" class="popup-backdrop" @click="close">
    <div class="popup-content" @click.stop>
      <button class="close-button" @click="close">X</button>
      <!-- Replace the image src and text to match your content -->
      <img
        class="warning-image"
        src="public/PT TOPAZ MARITIME - 2025-03-20T080357.656.jpg"
        alt="BULL Recruitment Warning"
      />
      <!-- <h2>Waspada Terhadap Penipuan!</h2>
      <p>
        PT Buana Lintas Lautan Tbk (BULL) <strong>TIDAK</strong> pernah memungut
        biaya apapun dalam proses rekrutmen. Apabila ada pihak yang meminta
        transfer dana terkait proses seleksi, mohon diabaikan.
      </p>
      <p>
        Apabila Bapak/Ibu menerima informasi mencurigakan, silakan hubungi email
        resmi: <strong>recruiter@bull.co.id</strong>.
      </p> -->
    </div>
  </div>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue'

const props = defineProps({
  show: {
    type: Boolean,
    default: false
  }
})

const emits = defineEmits(['close'])

function close() {
  emits('close')
}
</script>

<style scoped>
.popup-backdrop {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
}

.popup-content {
  background-color: #fff;
  padding: 1.5rem;
  border-radius: 4px;
  width: 90%;
  max-width: 600px;
  position: relative;
  text-align: center;
}

.close-button {
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
  background: transparent;
  border: none;
  font-size: 1.2rem;
  cursor: pointer;
}

.warning-image {
  max-width: 100%;
  height: auto;
  margin-bottom: 1rem;
}
</style>
