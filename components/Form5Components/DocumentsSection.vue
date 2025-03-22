<template>
  <div class="step-content">
    <div class="section-container mb-4">
      <h4 class="section-title">
        <i class="bi bi-file-earmark-text me-2"></i>Documents
      </h4>
      
      <div class="table-responsive mb-4">
        <table class="table table-bordered table-hover">
          <thead class="table-light">
            <tr>
              <th>Document</th>
              <th>Document Number</th>
              <th>Place of Issued</th>
              <th>Issued Date</th>
              <th>Expired Date</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <div class="flex">
                  <p>COC Type</p>
                  <select class="form-select" v-model="formData.cocType">
                    <option v-for="option in cocOptions" :key="option.value" :value="option.value">{{ option.text }}</option>
                  </select>
                  <!-- <div class="mt-2">
                    <input type="file" name="certificateDoc" @change="$emit('handle-certificate-upload', $event)" accept="application/pdf,image/*">
                    <div v-if="certificateUploaded" class="text-success mt-1">
                      <i class="bi bi-check-circle"></i> Certificate uploaded
                    </div>
                  </div> -->
                </div>
              </td>
              <td>
                <input style="transform:translateY(1.2rem)" type="text" class="form-control" v-model="formData.docNo">
              </td>
              <td><input style="transform:translateY(1.2rem)" type="text" class="form-control" v-model="formData.certificateIssued"></td>
              <td><input style="transform:translateY(1.2rem)" type="date" class="form-control" v-model="formData.certificateIssuedDate"></td>
              <td><input style="transform:translateY(1.2rem)" type="date" class="form-control" v-model="formData.certificateExpiryDate"></td>
            </tr>
            <tr>
              <td>
                <p>Passport</p>
                <input type="file" name="passportFile" @change="$emit('handle-passport-upload', $event)" accept="application/pdf,image/*">
                <div v-if="passportUploaded" class="text-success mt-1">
                  <i class="bi bi-check-circle"></i> Passport uploaded
                </div>
              </td>
              <td><input style="transform:translateY(1.2rem)" type="text" class="form-control" v-model="formData.passport.docNo"></td>
              <td><input style="transform:translateY(1.2rem)" type="text" class="form-control" v-model="formData.passport.issued"></td>
              <td><input style="transform:translateY(1.2rem)" type="date" class="form-control" v-model="formData.passport.issuedDate"></td>
              <td><input style="transform:translateY(1.2rem)" type="date" class="form-control" v-model="formData.passport.expiredDate"></td>
            </tr>
            <tr>
              <td>
                <p>Seamen Book</p>
                <input type="file" name="seamenBookFile" @change="$emit('handle-seamen-book-upload', $event)" accept="application/pdf,image/*">
                <div v-if="seamenBookUploaded" class="text-success mt-1">
                  <i class="bi bi-check-circle"></i> Seamen Book uploaded
                </div>
              </td>
              <td><input style="transform:translateY(1.2rem)" type="text" class="form-control" v-model="formData.seamen.docNo"></td>
              <td><input style="transform:translateY(1.2rem)" type="text" class="form-control" v-model="formData.seamen.issued"></td>
              <td><input style="transform:translateY(1.2rem)" type="date" class="form-control" v-model="formData.seamen.issuedDate"></td>
              <td><input style="transform:translateY(1.2rem)" type="date" class="form-control" v-model="formData.seamen.expiredDate"></td>
            </tr>
            <tr>
              <td>USA Visa</td>
              <td><input type="text" class="form-control" v-model="formData.usaVisa.docNo"></td>
              <td><input type="text" class="form-control" v-model="formData.usaVisa.issued"></td>
              <td><input type="date" class="form-control" v-model="formData.usaVisa.issuedDate"></td>
              <td><input type="date" class="form-control" v-model="formData.usaVisa.expiredDate"></td>
            </tr>
            <tr>
              <td>Singapore Visa</td>
              <td><input type="text" class="form-control" v-model="formData.singaporeVisa.docNo"></td>
              <td><input type="text" class="form-control" v-model="formData.singaporeVisa.issued"></td>
              <td><input type="date" class="form-control" v-model="formData.singaporeVisa.issuedDate"></td>
              <td><input type="date" class="form-control" v-model="formData.singaporeVisa.expiredDate"></td>
            </tr>
            <tr>
              <td>Certificate of Endorsement State (COE)</td>
              <td><input type="text" class="form-control" v-model="formData.coe.docNo"></td>
              <td><input type="text" class="form-control" v-model="formData.coe.issued"></td>
              <td><input type="date" class="form-control" v-model="formData.coe.issuedDate"></td>
              <td><input type="date" class="form-control" v-model="formData.coe.expiredDate"></td>
            </tr>
            <tr>
              <td>Certificate of Endorsement State (GOC)</td>
              <td><input type="text" class="form-control" v-model="formData.goc.docNo"></td>
              <td><input type="text" class="form-control" v-model="formData.goc.issued"></td>
              <td><input type="date" class="form-control" v-model="formData.goc.issuedDate"></td>
              <td><input type="date" class="form-control" v-model="formData.goc.expiredDate"></td>
            </tr>
            <tr>
              <td>NPWP</td>
              <td><input type="text" class="form-control" v-model="formData.npwp.docNo"></td>
              <td><input type="text" class="form-control" v-model="formData.npwp.issued"></td>
              <td><input type="date" class="form-control" v-model="formData.npwp.issuedDate"></td>
              <td><input type="date" class="form-control" v-model="formData.npwp.expiredDate"></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    
    <div class="section-container mb-4">
      <h4 class="section-title">
        <i class="bi bi-file-earmark-person me-2"></i>Photo Upload
      </h4>
      <div class="row">
        <div class="col-md-6">
          <div class="mb-3">
            <label for="photoUpload" class="form-label">Candidate Photo</label>
            <input type="file" class="form-control" id="photoUpload" name="photo" @change="$emit('handle-photo-upload', $event)" accept="image/*">
            <div class="form-text">Upload a recent passport-style photo (JPG, PNG, max 2MB)</div>
          </div>
        </div>
        <div class="col-md-6">
          <div class="text-center">
            <div v-if="photoPreview" class="photo-preview mb-2">
              <img :src="photoPreview" alt="Candidate Photo" class="img-fluid rounded" style="max-height: 150px;">
            </div>
            <div v-else class="photo-placeholder mb-2">
              <i class="bi bi-person-circle fs-1"></i>
              <p class="text-muted">No photo uploaded</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps, defineEmits, computed } from 'vue';
import { useFormStore } from '../stores/formStore';

const store = useFormStore();

const props = defineProps({
  formData: {
    type: Object,
    required: true
  },
  photoPreview: {
    type: String,
    default: null
  }
});

defineEmits(['handle-passport-upload', 'handle-seamen-book-upload', 'handle-photo-upload', 'handle-certificate-upload']);

// Computed properties to check if files are uploaded
const certificateUploaded = computed(() => store.previews.certificate);
const passportUploaded = computed(() => store.files.passportFile !== null);
const seamenBookUploaded = computed(() => store.files.seamenBookFile !== null);

const cocOptions = computed(() => {
  switch (props.formData.rankToApply) {
    case 'MASTER': // MASTER
      return [
        { value: 'M1', text: 'D CLASS I' },
        { value: 'M2', text: 'D CLASS II' }
      ];
    case 'CHIEF OFFICER': // CHIEF OFFICER
      return [
        { value: 'M1', text: 'D CLASS I' },
        { value: 'M2', text: 'D CLASS II' }
      ];
    case 'SECOND OFFICER': // SECOND OFFICER
      return [
        { value: 'M2', text: 'D CLASS II' },
        { value: 'M3', text: 'D CLASS III' }
      ];
    case 'THIRD OFFICER': // THIRD OFFICER
      return [
        { value: 'M2', text: 'D CLASS II' },
        { value: 'M3', text: 'D CLASS III' }
      ];
    case 'SENIOR DECK CADET': // SENIOR DECK CADET
      return [
        { value: 'M3', text: 'D CLASS III' },
        { value: 'OT', text: 'OTHER' }
      ];
    case 'CHIEF ENGINEER': // CHIEF ENGINEER
      return [
        { value: 'KC', text: 'E CLASS I' },
        { value: 'KB', text: 'E CLASS II' }
      ];
    case 'SECOND ENGINEER': // SECOND ENGINEER
      return [
        { value: 'KC', text: 'E CLASS I' },
        { value: 'KB', text: 'E CLASS II' }
      ];
    case 'THIRD ENGINEER': // THIRD ENGINEER
      return [
        { value: 'KB', text: 'E CLASS II' },
        { value: 'KA', text: 'E CLASS III' }
      ];
    case 'FOURTH ENGINEER': // FOURTH ENGINEER
      return [
        { value: 'KB', text: 'E CLASS II' },
        { value: 'KA', text: 'E CLASS III' }
      ];
    case 'SENIOR ENGINE CADET': // SENIOR ENGINE CADET
      return [
        { value: 'KA', text: 'E CLASS III' },
        { value: 'OT', text: 'OTHER' }
      ];
    case 'ELECTRICIAN': // ELECTRICIAN
      return [
        { value: 'ET', text: 'ETO' },
        { value: 'KS', text: 'E WATCHKEEPING' },
        { value: 'OT', text: 'OTHER' }
      ];
    case 'PUMPMAN': // PUMPMAN
      return [
        { value: 'KD', text: 'D WATCHKEEPING' },
        { value: 'OT', text: 'OTHER' }
      ];
    case 'Q/MASTER': // Q/MASTER
      return [
        { value: 'KD', text: 'D WATCHKEEPING' },
        { value: 'OT', text: 'OTHER' }
      ];
    case 'SAILOR': // SAILOR
      return [
        { value: 'KD', text: 'D WATCHKEEPING' },
        { value: 'OT', text: 'OTHER' }
      ];
    case 'BOSUN': // BOSUN
      return [
        { value: 'KS', text: 'E WATCHKEEPING' },
        { value: 'OT', text: 'OTHER' }
      ];
    case 'OILER': // OILER
      return [
        { value: 'KS', text: 'E WATCHKEEPING' },
        { value: 'OT', text: 'OTHER' }
      ];
    case 'WIPER': // WIPER
      return [
        { value: 'KS', text: 'E WATCHKEEPING' },
        { value: 'OT', text: 'OTHER' }
      ];
    case 'FITTER': // FITTER
      return [
        { value: 'KS', text: 'E WATCHKEEPING' },
        { value: 'OT', text: 'OTHER' }
      ];
    case 'CHIEF COOK': // CHIEF COOK
      return [
        { value: 'NA', text: 'NONE' },
        { value: 'OT', text: 'OTHER' }
      ];
    case 'MESS BOY': // MESS BOY
      return [
        { value: 'NA', text: 'NONE' },
        { value: 'OT', text: 'OTHER' }
      ];
    case 'CADET TEHNIK': // CADET TEHNIK
      return [
        { value: 'NA', text: 'NONE' }
      ];
    case 'CADET NAUTIC': // CADET NAUTIC
      return [
        { value: 'NA', text: 'NONE' }
      ];
    case 'CADET ELECTRICIAN': // CADET ELECTRICIAN
      return [
        { value: 'NA', text: 'NONE' }
      ];
    default:
      return [];
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

.photo-placeholder {
  width: 150px;
  height: 150px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #f8f9fa;
  border: 1px dashed #ced4da;
  border-radius: 5px;
  margin: 0 auto;
}

.photo-preview {
  width: 150px;
  height: 150px;
  border-radius: 5px;
  overflow: hidden;
  margin: 0 auto;
  border: 1px solid #ced4da;
}

@media (max-width: 768px) {
  .section-container {
    padding: 1rem;
  }
}
</style>