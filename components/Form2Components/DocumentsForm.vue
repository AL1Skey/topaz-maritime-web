<template>
  <div>
    <div class="d-flex justify-content-between align-items-center mb-3">
      <h2 class="fs-4 fw-semibold text-primary d-flex align-items-center">
        <i class="bi bi-file-earmark-text me-2"></i>
        Documents
      </h2>
      <button 
        @click="addDocument" 
        type="button" 
        class="btn btn-outline-primary d-flex align-items-center"
      >
        <i class="bi bi-plus-circle me-2"></i>
        Add Document
      </button>
    </div>
    
    <p class="text-muted mb-4">
      Please provide details of all your maritime documents, certificates, and identification.
    </p>
    
    <div v-if="documents.length === 0" class="card">
      <div class="card-body p-5 text-center">
        <div class="mx-auto rounded-circle bg-light d-flex align-items-center justify-content-center mb-3" style="width: 64px; height: 64px;">
          <i class="bi bi-file-earmark-text fs-1 text-primary"></i>
        </div>
        <h3 class="fs-5 fw-medium mb-2">No Documents Added</h3>
        <p class="text-muted mb-4">
          Add your maritime documents such as passport, seaman book, and certificates.
        </p>
        <button @click="addDocument" class="btn btn-primary">
          Add Your First Document
        </button>
      </div>
    </div>
    
    <div v-else class="card mb-3" v-for="(document, index) in documents" :key="index">
      <div class="card-body position-relative">
        <button
          @click="removeDocument(index)"
          type="button"
          class="btn btn-sm btn-link text-danger position-absolute top-0 end-0"
          style="font-size: 1.25rem;"
        >
          <i class="bi bi-trash"></i>
        </button>
        
        <div class="row g-3">
          <div class="col-md-6">
            <label :for="`docId-${index}`" class="form-label">Document Type</label>
            <select
              :id="`docId-${index}`"
              class="form-select"
              v-model="document.docId"
            >
              <option value="">Select document type</option>
              <option 
                v-for="type in documentTypes" 
                :key="type.id" 
                :value="type.id"
              >
                {{ type.name }}
              </option>
            </select>
          </div>
          
          <div class="col-md-6">
            <label :for="`docNo-${index}`" class="form-label">Document Number</label>
            <input
              :id="`docNo-${index}`"
              type="text"
              class="form-control"
              v-model="document.docNo"
              placeholder="Enter document number"
            />
          </div>
          
          <div class="col-md-6">
            <label :for="`issued-${index}`" class="form-label">Issued By</label>
            <input
              :id="`issued-${index}`"
              type="text"
              class="form-control"
              v-model="document.issued"
              placeholder="Issuing authority"
            />
          </div>
          
          <div class="col-md-6">
            <label :for="`validDate-${index}`" class="form-label">Valid Date</label>
            <input
              :id="`validDate-${index}`"
              type="date"
              class="form-control"
              v-model="document.validDate"
            />
          </div>
          
          <div class="col-md-6">
            <label :for="`expiredDate-${index}`" class="form-label">Expiry Date</label>
            <input
              :id="`expiredDate-${index}`"
              type="date"
              class="form-control"
              v-model="document.expiredDate"
            />
          </div>
          
          <div class="col-md-6">
            <label :for="`docFile-${index}`" class="form-label">Document File</label>
            <div class="border border-2 border-dashed rounded p-3 text-center">
              <input
                type="file"
                class="d-none"
                :id="`docFile-${index}`"
                accept=".pdf,.doc,.docx,.jpg,.png"
                @change="(e) => handleFileChange(index, e)"
              />
              <label :for="`docFile-${index}`" class="cursor-pointer">
                <div class="d-flex flex-column align-items-center">
                  <i class="bi bi-file-earmark-text fs-2 text-muted mb-2"></i>
                  <span class="text-primary fw-medium">Upload Document</span>
                  <small class="text-muted">PDF, DOC, JPG (Max. 5MB)</small>
                </div>
              </label>
            </div>
          </div>
          
          <div class="col-12">
            <label :for="`remark-${index}`" class="form-label">Remarks</label>
            <textarea
              :id="`remark-${index}`"
              class="form-control"
              v-model="document.remark"
              placeholder="Additional information about this document"
              rows="3"
            ></textarea>
          </div>
        </div>
      </div>
    </div>
    
    <div v-if="documents.length > 0" class="text-center mt-4">
      <button 
        @click="addDocument" 
        type="button" 
        class="btn btn-outline-primary d-flex align-items-center mx-auto"
      >
        <i class="bi bi-plus-circle me-2"></i>
        Add Another Document
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

const documents = reactive(props.formData.documents || []);

// Watch for changes in documents array
watch(documents, () => {
  emit('update-form-data', { documents: [...documents] });
}, { deep: true });

// Watch for changes in props.formData to update local state
watch(() => props.formData.documents, (newVal) => {
  if (newVal) {
    documents.splice(0, documents.length, ...newVal);
  }
}, { deep: true, immediate: true });

const addDocument = () => {
  documents.push({
    docId: "",
    docNo: "",
    docFile: null,
    issued: "",
    validDate: "",
    expiredDate: "",
    remark: ""
  });
};

const removeDocument = (index) => {
  documents.splice(index, 1);
};

const handleFileChange = (index, event) => {
  if (event.target.files && event.target.files[0]) {
    documents[index].docFile = event.target.files[0];
  }
};

const documentTypes = [
  { id: "1", name: "Passport" },
  { id: "2", name: "Seaman Book" },
  { id: "3", name: "Yellow Fever" },
  { id: "4", name: "Medical Certificate" },
  { id: "5", name: "Visa" },
  { id: "6", name: "Other" }
];
</script>

<style scoped>
.cursor-pointer {
  cursor: pointer;
}
</style>

