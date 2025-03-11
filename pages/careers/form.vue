<template>
  <div class="container my-5">
    <div class="card shadow-lg border-0">
      <div class="card-header bg-primary text-white py-3">
        <h2 class="mb-0">Registration Form</h2>
      </div>
      <div class="card-body p-4">
        <form @submit.prevent="submitForm">
          <!-- Progress bar -->
          <div class="progress mb-4" style="height: 10px;">
            <div class="progress-bar" role="progressbar" :style="`width: ${progress}%`" 
                 :aria-valuenow="progress" aria-valuemin="0" aria-valuemax="100"></div>
          </div>

          <!-- Navigation tabs -->
          <ul class="nav nav-tabs mb-4">
            <li class="nav-item" v-for="(section, index) in sections" :key="index">
              <button class="nav-link" :class="{ active: currentSection === index }" 
                      @click.prevent="currentSection = index">
                {{ section }}
              </button>
            </li>
          </ul>

          <!-- 1. Personal Data Section -->
          <div v-if="currentSection === 0" class="section-content">
            <h3 class="mb-4 border-bottom pb-2">1. Personal Data</h3>
            
            <div class="row mb-3">
              <div class="col-md-6">
                <div class="form-group mb-3">
                  <label for="fullName" class="form-label">Full Name <span class="text-danger">*</span></label>
                  <input type="text" class="form-control" id="fullName" v-model="formData.personalData.fullName" required>
                </div>
              </div>
              <div class="col-md-6">
                <div class="form-group mb-3">
                  <label for="email" class="form-label">Email Address <span class="text-danger">*</span></label>
                  <input type="email" class="form-control" id="email" v-model="formData.personalData.email" required>
                </div>
              </div>
            </div>

            <div class="row mb-3">
              <div class="col-md-6">
                <div class="form-group mb-3">
                  <label for="phone" class="form-label">Phone Number <span class="text-danger">*</span></label>
                  <input type="tel" class="form-control" id="phone" v-model="formData.personalData.phone" required>
                </div>
              </div>
              <div class="col-md-6">
                <div class="form-group mb-3">
                  <label for="dateOfBirth" class="form-label">Date of Birth <span class="text-danger">*</span></label>
                  <input type="date" class="form-control" id="dateOfBirth" v-model="formData.personalData.dateOfBirth" required>
                </div>
              </div>
            </div>

            <div class="row mb-3">
              <div class="col-md-6">
                <div class="form-group mb-3">
                  <label for="gender" class="form-label">Gender <span class="text-danger">*</span></label>
                  <select class="form-select" id="gender" v-model="formData.personalData.gender" required>
                    <option value="">Select Gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>
              <div class="col-md-6">
                <div class="form-group mb-3">
                  <label for="nationality" class="form-label">Nationality <span class="text-danger">*</span></label>
                  <input type="text" class="form-control" id="nationality" v-model="formData.personalData.nationality" required>
                </div>
              </div>
            </div>

            <div class="form-group mb-3">
              <label for="address" class="form-label">Current Address <span class="text-danger">*</span></label>
              <textarea class="form-control" id="address" rows="3" v-model="formData.personalData.address" required></textarea>
            </div>

            <div class="row mb-3">
              <div class="col-md-6">
                <div class="form-group mb-3">
                  <label for="city" class="form-label">City <span class="text-danger">*</span></label>
                  <input type="text" class="form-control" id="city" v-model="formData.personalData.city" required>
                </div>
              </div>
              <div class="col-md-6">
                <div class="form-group mb-3">
                  <label for="postalCode" class="form-label">Postal Code <span class="text-danger">*</span></label>
                  <input type="text" class="form-control" id="postalCode" v-model="formData.personalData.postalCode" required>
                </div>
              </div>
            </div>
          </div>

          <!-- 2. Document Section -->
          <div v-if="currentSection === 1" class="section-content">
            <h3 class="mb-4 border-bottom pb-2">2. Document</h3>
            
            <div class="row mb-3">
              <div class="col-md-6">
                <div class="form-group mb-3">
                  <label for="idType" class="form-label">ID Type <span class="text-danger">*</span></label>
                  <select class="form-select" id="idType" v-model="formData.document.idType" required>
                    <option value="">Select ID Type</option>
                    <option value="passport">Passport</option>
                    <option value="nationalId">National ID</option>
                    <option value="drivingLicense">Driving License</option>
                  </select>
                </div>
              </div>
              <div class="col-md-6">
                <div class="form-group mb-3">
                  <label for="idNumber" class="form-label">ID Number <span class="text-danger">*</span></label>
                  <input type="text" class="form-control" id="idNumber" v-model="formData.document.idNumber" required>
                </div>
              </div>
            </div>

            <div class="row mb-3">
              <div class="col-md-6">
                <div class="form-group mb-3">
                  <label for="issueDate" class="form-label">Issue Date <span class="text-danger">*</span></label>
                  <input type="date" class="form-control" id="issueDate" v-model="formData.document.issueDate" required>
                </div>
              </div>
              <div class="col-md-6">
                <div class="form-group mb-3">
                  <label for="expiryDate" class="form-label">Expiry Date <span class="text-danger">*</span></label>
                  <input type="date" class="form-control" id="expiryDate" v-model="formData.document.expiryDate" required>
                </div>
              </div>
            </div>

            <div class="form-group mb-3">
              <label for="documentUpload" class="form-label">Upload Document (PDF or Image) <span class="text-danger">*</span></label>
              <input type="file" class="form-control" id="documentUpload" @change="handleFileUpload($event, 'document')" accept=".pdf,.jpg,.jpeg,.png">
              <div class="form-text">Maximum file size: 5MB</div>
            </div>
          </div>

          <!-- 3. Trainings Section -->
          <div v-if="currentSection === 2" class="section-content">
            <h3 class="mb-4 border-bottom pb-2">3. Trainings</h3>
            
            <div v-for="(training, index) in formData.trainings" :key="index" class="card mb-3 border-light shadow-sm">
              <div class="card-body">
                <div class="d-flex justify-content-between align-items-center mb-3">
                  <h5 class="card-title mb-0">Training #{{ index + 1 }}</h5>
                  <button type="button" class="btn btn-sm btn-outline-danger" @click="removeTraining(index)">
                    <i class="bi bi-trash"></i> Remove
                  </button>
                </div>

                <div class="row mb-3">
                  <div class="col-md-6">
                    <div class="form-group mb-3">
                      <label :for="`trainingName${index}`" class="form-label">Training Name <span class="text-danger">*</span></label>
                      <input type="text" class="form-control" :id="`trainingName${index}`" v-model="training.name" required>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="form-group mb-3">
                      <label :for="`institution${index}`" class="form-label">Institution <span class="text-danger">*</span></label>
                      <input type="text" class="form-control" :id="`institution${index}`" v-model="training.institution" required>
                    </div>
                  </div>
                </div>

                <div class="row mb-3">
                  <div class="col-md-6">
                    <div class="form-group mb-3">
                      <label :for="`startDate${index}`" class="form-label">Start Date <span class="text-danger">*</span></label>
                      <input type="date" class="form-control" :id="`startDate${index}`" v-model="training.startDate" required>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="form-group mb-3">
                      <label :for="`endDate${index}`" class="form-label">End Date <span class="text-danger">*</span></label>
                      <input type="date" class="form-control" :id="`endDate${index}`" v-model="training.endDate" required>
                    </div>
                  </div>
                </div>

                <div class="form-group mb-3">
                  <label :for="`certificateUpload${index}`" class="form-label">Upload Certificate (if available)</label>
                  <input type="file" class="form-control" :id="`certificateUpload${index}`" @change="handleFileUpload($event, 'training', index)" accept=".pdf,.jpg,.jpeg,.png">
                  <div class="form-text">Maximum file size: 5MB</div>
                </div>
              </div>
            </div>

            <button type="button" class="btn btn-success" @click="addTraining">
              <i class="bi bi-plus-circle"></i> Add Another Training
            </button>
          </div>

          <!-- 4. Experiences Section -->
          <div v-if="currentSection === 3" class="section-content">
            <h3 class="mb-4 border-bottom pb-2">4. Experiences</h3>
            
            <div v-for="(experience, index) in formData.experiences" :key="index" class="card mb-3 border-light shadow-sm">
              <div class="card-body">
                <div class="d-flex justify-content-between align-items-center mb-3">
                  <h5 class="card-title mb-0">Experience #{{ index + 1 }}</h5>
                  <button type="button" class="btn btn-sm btn-outline-danger" @click="removeExperience(index)">
                    <i class="bi bi-trash"></i> Remove
                  </button>
                </div>

                <div class="row mb-3">
                  <div class="col-md-6">
                    <div class="form-group mb-3">
                      <label :for="`jobTitle${index}`" class="form-label">Job Title <span class="text-danger">*</span></label>
                      <input type="text" class="form-control" :id="`jobTitle${index}`" v-model="experience.jobTitle" required>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="form-group mb-3">
                      <label :for="`company${index}`" class="form-label">Company <span class="text-danger">*</span></label>
                      <input type="text" class="form-control" :id="`company${index}`" v-model="experience.company" required>
                    </div>
                  </div>
                </div>

                <div class="row mb-3">
                  <div class="col-md-6">
                    <div class="form-group mb-3">
                      <label :for="`expStartDate${index}`" class="form-label">Start Date <span class="text-danger">*</span></label>
                      <input type="date" class="form-control" :id="`expStartDate${index}`" v-model="experience.startDate" required>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="form-group mb-3">
                      <label :for="`expEndDate${index}`" class="form-label">End Date</label>
                      <input type="date" class="form-control" :id="`expEndDate${index}`" v-model="experience.endDate" 
                             :disabled="experience.currentlyWorking">
                      <div class="form-check mt-2">
                        <input class="form-check-input" type="checkbox" :id="`currentlyWorking${index}`" 
                               v-model="experience.currentlyWorking">
                        <label class="form-check-label" :for="`currentlyWorking${index}`">
                          I currently work here
                        </label>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="form-group mb-3">
                  <label :for="`responsibilities${index}`" class="form-label">Responsibilities <span class="text-danger">*</span></label>
                  <textarea class="form-control" :id="`responsibilities${index}`" rows="3" 
                            v-model="experience.responsibilities" required></textarea>
                </div>
              </div>
            </div>

            <button type="button" class="btn btn-success" @click="addExperience">
              <i class="bi bi-plus-circle"></i> Add Another Experience
            </button>
          </div>

          <!-- Navigation buttons -->
          <div class="d-flex justify-content-between mt-4">
            <button type="button" class="btn btn-secondary" @click="prevSection" :disabled="currentSection === 0">
              <i class="bi bi-arrow-left"></i> Previous
            </button>
            
            <button v-if="currentSection < sections.length - 1" type="button" class="btn btn-primary" @click="nextSection">
              Next <i class="bi bi-arrow-right"></i>
            </button>
            
            <button v-else type="submit" class="btn btn-success">
              <i class="bi bi-check-circle"></i> Submit Form
            </button>
          </div>
        </form>
      </div>
    </div>

    <!-- Success Modal -->
    <div class="modal fade" id="successModal" tabindex="-1" aria-labelledby="successModalLabel" aria-hidden="true" ref="successModal">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header bg-success text-white">
            <h5 class="modal-title" id="successModalLabel">Form Submitted Successfully</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <p>Thank you for submitting your information. Your registration has been received successfully.</p>
            <p>We will review your application and contact you soon.</p>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';
import { Modal } from 'bootstrap';

// Define sections
const sections = ['Personal Data', 'Document', 'Trainings', 'Experiences'];
const currentSection = ref(0);

// Form data structure
const formData = ref({
  personalData: {
    fullName: '',
    email: '',
    phone: '',
    dateOfBirth: '',
    gender: '',
    nationality: '',
    address: '',
    city: '',
    postalCode: ''
  },
  document: {
    idType: '',
    idNumber: '',
    issueDate: '',
    expiryDate: '',
    documentFile: null
  },
  trainings: [
    {
      name: '',
      institution: '',
      startDate: '',
      endDate: '',
      certificateFile: null
    }
  ],
  experiences: [
    {
      jobTitle: '',
      company: '',
      startDate: '',
      endDate: '',
      currentlyWorking: false,
      responsibilities: ''
    }
  ]
});

// Calculate progress percentage
const progress = computed(() => {
  return ((currentSection.value + 1) / sections.length) * 100;
});

// Modal reference
const successModal = ref(null);
let bsModal = null;

onMounted(() => {
  // Initialize Bootstrap modal
  bsModal = new Modal(successModal.value);
});

// Navigation methods
const nextSection = () => {
  if (currentSection.value < sections.length - 1) {
    currentSection.value++;
    window.scrollTo(0, 0);
  }
};

const prevSection = () => {
  if (currentSection.value > 0) {
    currentSection.value--;
    window.scrollTo(0, 0);
  }
};

// Add/remove training entries
const addTraining = () => {
  formData.value.trainings.push({
    name: '',
    institution: '',
    startDate: '',
    endDate: '',
    certificateFile: null
  });
};

const removeTraining = (index) => {
  if (formData.value.trainings.length > 1) {
    formData.value.trainings.splice(index, 1);
  }
};

// Add/remove experience entries
const addExperience = () => {
  formData.value.experiences.push({
    jobTitle: '',
    company: '',
    startDate: '',
    endDate: '',
    currentlyWorking: false,
    responsibilities: ''
  });
};

const removeExperience = (index) => {
  if (formData.value.experiences.length > 1) {
    formData.value.experiences.splice(index, 1);
  }
};

// Handle file uploads
const handleFileUpload = (event, type, index) => {
  const file = event.target.files[0];
  if (!file) return;
  
  // Check file size (5MB limit)
  if (file.size > 5 * 1024 * 1024) {
    alert('File size exceeds 5MB limit');
    event.target.value = '';
    return;
  }
  
  if (type === 'document') {
    formData.value.document.documentFile = file;
  } else if (type === 'training' && index !== undefined) {
    formData.value.trainings[index].certificateFile = file;
  }
};

// Form submission
const submitForm = () => {
  // Here you would typically send the form data to your backend
  console.log('Form submitted:', formData.value);
  
  // Show success modal
  bsModal.show();
  
  // Reset form after submission (optional)
  // resetForm();
};

// Reset form (optional)
const resetForm = () => {
  formData.value = {
    personalData: {
      fullName: '',
      email: '',
      phone: '',
      dateOfBirth: '',
      gender: '',
      nationality: '',
      address: '',
      city: '',
      postalCode: ''
    },
    document: {
      idType: '',
      idNumber: '',
      issueDate: '',
      expiryDate: '',
      documentFile: null
    },
    trainings: [
      {
        name: '',
        institution: '',
        startDate: '',
        endDate: '',
        certificateFile: null
      }
    ],
    experiences: [
      {
        jobTitle: '',
        company: '',
        startDate: '',
        endDate: '',
        currentlyWorking: false,
        responsibilities: ''
      }
    ]
  };
  currentSection.value = 0;
};
</script>

<style>
/* Import Bootstrap CSS */
@import 'bootstrap/dist/css/bootstrap.min.css';
/*@import 'bootstrap-icons/font/bootstrap-icons.css';
*/

/* Custom styles */
.section-content {
  animation: fadeIn 0.3s ease-in-out;
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
}

.form-label {
  font-weight: 500;
}

.card {
  transition: all 0.3s ease;
}

.card:hover {
  box-shadow: 0 10px 20px rgba(0,0,0,0.1) !important;
}

.nav-tabs .nav-link {
  color: #6c757d;
  font-weight: 500;
}

.nav-tabs .nav-link.active {
  color: #0d6efd;
  font-weight: 600;
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .card-header h2 {
    font-size: 1.5rem;
  }
  
  h3 {
    font-size: 1.3rem;
  }
}
</style>