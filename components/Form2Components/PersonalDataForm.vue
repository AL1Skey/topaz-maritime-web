<template>
  <div class="mb-4">
    <div class="row g-4">
      <div class="col-md-8">
        <div class="card">
          <div class="card-body">
            <h2 class="fs-4 fw-semibold text-primary mb-4 d-flex align-items-center">
              <i class="bi bi-person-fill me-2"></i>
              Personal Information
            </h2>
            
            <div class="row g-3">
              <div class="col-md-6">
                <label for="name" class="form-label">Full Name</label>
                <input 
                  type="text" 
                  class="form-control" 
                  id="name" 
                  v-model="personalData.name" 
                  placeholder="Enter your full name"
                  required
                />
              </div>
              
              <div class="col-md-6">
                <label for="email" class="form-label">Email</label>
                <input 
                  type="email" 
                  class="form-control" 
                  id="email" 
                  v-model="personalData.email" 
                  placeholder="your.email@example.com"
                  required
                />
              </div>
              
              <div class="col-md-6">
                <label for="birthPlace" class="form-label">Birth Place</label>
                <input 
                  type="text" 
                  class="form-control" 
                  id="birthPlace" 
                  v-model="personalData.birthPlace" 
                  placeholder="City of birth"
                  required
                />
              </div>
              
              <div class="col-md-6">
                <label for="birthDate" class="form-label">Birth Date</label>
                <input 
                  type="date" 
                  class="form-control" 
                  id="birthDate" 
                  v-model="personalData.birthDate"
                  required
                />
              </div>
              
              <div class="col-md-6">
                <label class="form-label">Gender</label>
                <div class="d-flex">
                  <div class="form-check me-3">
                    <input 
                      class="form-check-input" 
                      type="radio" 
                      id="male" 
                      name="gender" 
                      :value="true" 
                      v-model="personalData.sex"
                    />
                    <label class="form-check-label" for="male">Male</label>
                  </div>
                  <div class="form-check">
                    <input 
                      class="form-check-input" 
                      type="radio" 
                      id="female" 
                      name="gender" 
                      :value="false" 
                      v-model="personalData.sex"
                    />
                    <label class="form-check-label" for="female">Female</label>
                  </div>
                </div>
              </div>
              
              <div class="col-md-6">
                <label for="maritalStatusId" class="form-label">Marital Status</label>
                <select 
                  class="form-select" 
                  id="maritalStatusId" 
                  v-model="personalData.maritalStatusId"
                >
                  <option value="">Select marital status</option>
                  <option 
                    v-for="(status, index) in maritalStatuses" 
                    :key="index" 
                    :value="String(index + 1)"
                  >
                    {{ status }}
                  </option>
                </select>
              </div>
              
              <div class="col-md-6">
                <label for="numberOfChild" class="form-label">Number of Children</label>
                <input 
                  type="number" 
                  class="form-control" 
                  id="numberOfChild" 
                  v-model="personalData.numberOfChild" 
                  min="0"
                />
              </div>
              
              <div class="col-md-6">
                <label for="religionId" class="form-label">Religion</label>
                <select 
                  class="form-select" 
                  id="religionId" 
                  v-model="personalData.religionId"
                >
                  <option value="">Select religion</option>
                  <option 
                    v-for="(religion, index) in religions" 
                    :key="index" 
                    :value="String(index + 1)"
                  >
                    {{ religion }}
                  </option>
                </select>
              </div>
              
              <div class="col-md-6">
                <label for="bloodType" class="form-label">Blood Type</label>
                <select 
                  class="form-select" 
                  id="bloodType" 
                  v-model="personalData.bloodType"
                >
                  <option value="">Select blood type</option>
                  <option 
                    v-for="type in bloodTypes" 
                    :key="type" 
                    :value="type"
                  >
                    {{ type }}
                  </option>
                </select>
              </div>
            </div>
            
            <hr class="my-4" />
            
            <h2 class="fs-4 fw-semibold text-primary mb-4 d-flex align-items-center">
              <i class="bi bi-geo-alt-fill me-2"></i>
              Contact Information
            </h2>
            
            <div class="row g-3">
              <div class="col-12">
                <label for="address" class="form-label">Address</label>
                <input 
                  type="text" 
                  class="form-control" 
                  id="address" 
                  v-model="personalData.address" 
                  placeholder="Your full address"
                  required
                />
              </div>
              
              <div class="col-md-6">
                <label for="city" class="form-label">City</label>
                <input 
                  type="text" 
                  class="form-control" 
                  id="city" 
                  v-model="personalData.city" 
                  placeholder="City"
                  required
                />
              </div>
              
              <div class="col-md-6">
                <label for="zipCode" class="form-label">Zip Code</label>
                <input 
                  type="text" 
                  class="form-control" 
                  id="zipCode" 
                  v-model="personalData.zipCode" 
                  placeholder="Zip code"
                  required
                />
              </div>
              
              <div class="col-md-6">
                <label for="countryId" class="form-label">Country</label>
                <select 
                  class="form-select" 
                  id="countryId" 
                  v-model="personalData.countryId"
                >
                  <option value="">Select country</option>
                  <option 
                    v-for="(country, index) in countries" 
                    :key="index" 
                    :value="String(index + 1)"
                  >
                    {{ country }}
                  </option>
                </select>
              </div>
              
              <div class="col-md-6">
                <label for="nationalityId" class="form-label">Nationality</label>
                <select 
                  class="form-select" 
                  id="nationalityId" 
                  v-model="personalData.nationalityId"
                >
                  <option value="">Select nationality</option>
                  <option 
                    v-for="(country, index) in countries" 
                    :key="index" 
                    :value="String(index + 1)"
                  >
                    {{ country }}
                  </option>
                </select>
              </div>
              
              <div class="col-md-6">
                <label for="phoneNo" class="form-label">Phone Number</label>
                <input 
                  type="text" 
                  class="form-control" 
                  id="phoneNo" 
                  v-model="personalData.phoneNo" 
                  placeholder="Home phone number"
                />
              </div>
              
              <div class="col-md-6">
                <label for="handPhone" class="form-label">Mobile Phone</label>
                <input 
                  type="text" 
                  class="form-control" 
                  id="handPhone" 
                  v-model="personalData.handPhone" 
                  placeholder="Mobile phone number"
                  required
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div class="col-md-4">
        <div class="card">
          <div class="card-body">
            <h2 class="fs-4 fw-semibold text-primary mb-4 d-flex align-items-center">
              <i class="bi bi-file-earmark-fill me-2"></i>
              Photo & Documents
            </h2>
            
            <div class="mb-3">
              <label for="photo" class="form-label">Photo (Passport Size)</label>
              <div class="border border-2 border-dashed rounded p-3 text-center">
                <input
                  type="file"
                  class="d-none"
                  id="photo"
                  accept="image/*"
                  @change="handleFileChange('photo', $event)"
                />
                <label for="photo" class="cursor-pointer">
                  <div class="d-flex flex-column align-items-center">
                    <div class="rounded-circle bg-light d-flex align-items-center justify-content-center mb-2" style="width: 96px; height: 96px;">
                      <i class="bi bi-person fs-1 text-muted"></i>
                    </div>
                    <span class="text-primary fw-medium">Upload Photo</span>
                    <small class="text-muted">JPG, PNG (Max. 2MB)</small>
                  </div>
                </label>
              </div>
            </div>
            
            <div class="mb-3">
              <label for="certificateDoc" class="form-label">Certificate Document</label>
              <div class="border border-2 border-dashed rounded p-3 text-center">
                <input
                  type="file"
                  class="d-none"
                  id="certificateDoc"
                  accept=".pdf,.doc,.docx"
                  @change="handleFileChange('certificateDoc', $event)"
                />
                <label for="certificateDoc" class="cursor-pointer">
                  <div class="d-flex flex-column align-items-center">
                    <i class="bi bi-file-earmark-text fs-1 text-muted mb-2"></i>
                    <span class="text-primary fw-medium">Upload Certificate</span>
                    <small class="text-muted">PDF, DOC (Max. 5MB)</small>
                  </div>
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <div class="card mt-4">
      <div class="card-body">
        <h2 class="fs-4 fw-semibold text-primary mb-4 d-flex align-items-center">
          <i class="bi bi-award-fill me-2"></i>
          Professional Information
        </h2>
        
        <div class="row g-3">
          <div class="col-md-6">
            <label for="rankToApply" class="form-label">Rank to Apply</label>
            <select 
              class="form-select" 
              id="rankToApply" 
              v-model="personalData.rankToApply"
              @change="handleRankChange"
            >
              <option value="">Select rank to apply</option>
              <option 
                v-for="rank in rankOptions" 
                :key="rank.id" 
                :value="rank.id"
              >
                {{ rank.description }}
              </option>
            </select>
          </div>
          
          <div class="col-md-6">
            <label for="certificateId" class="form-label">Certificate Type</label>
            <select 
              class="form-select" 
              id="certificateId" 
              v-model="personalData.certificateId"
            >
              <option value="">Select certificate type</option>
              <option 
                v-for="coc in availableCocs" 
                :key="coc.id" 
                :value="coc.id"
              >
                {{ coc.description }}
              </option>
            </select>
          </div>
          
          <div class="col-md-6">
            <label for="rankApplyDate" class="form-label">Application Date</label>
            <input 
              type="date" 
              class="form-control" 
              id="rankApplyDate" 
              v-model="personalData.rankApplyDate"
              required
            />
          </div>
          
          <div class="col-md-6">
            <label for="certificateNo" class="form-label">Certificate Number</label>
            <input 
              type="text" 
              class="form-control" 
              id="certificateNo" 
              v-model="personalData.certificateNo" 
              placeholder="Enter certificate number"
            />
          </div>
          
          <div class="col-md-6">
            <label for="certificateIssued" class="form-label">Certificate Issued By</label>
            <input 
              type="text" 
              class="form-control" 
              id="certificateIssued" 
              v-model="personalData.certificateIssued" 
              placeholder="Issuing authority"
            />
          </div>
          
          <div class="col-md-6">
            <label for="certificateIssuedDate" class="form-label">Certificate Issue Date</label>
            <input 
              type="date" 
              class="form-control" 
              id="certificateIssuedDate" 
              v-model="personalData.certificateIssuedDate"
            />
          </div>
          
          <div class="col-md-6">
            <label for="certificateExpiryDate" class="form-label">Certificate Expiry Date</label>
            <input 
              type="date" 
              class="form-control" 
              id="certificateExpiryDate" 
              v-model="personalData.certificateExpiryDate"
            />
          </div>
          
          <div class="col-md-6">
            <label for="certificateStatusId" class="form-label">Certificate Status</label>
            <select 
              class="form-select" 
              id="certificateStatusId" 
              v-model="personalData.certificateStatusId"
            >
              <option value="">Select status</option>
              <option value="1">Valid</option>
              <option value="2">Expired</option>
              <option value="3">Pending</option>
            </select>
          </div>
        </div>
      </div>
    </div>
    
    <div class="card mt-4">
      <div class="card-body">
        <h2 class="fs-4 fw-semibold text-primary mb-4 d-flex align-items-center">
          <i class="bi bi-rulers me-2"></i>
          Physical Measurements
        </h2>
        
        <div class="row g-3">
          <div class="col-md-4">
            <label for="height" class="form-label">Height (cm)</label>
            <input 
              type="text" 
              class="form-control" 
              id="height" 
              v-model="personalData.height" 
              placeholder="Height in cm"
            />
          </div>
          
          <div class="col-md-4">
            <label for="weight" class="form-label">Weight (kg)</label>
            <input 
              type="text" 
              class="form-control" 
              id="weight" 
              v-model="personalData.weight" 
              placeholder="Weight in kg"
            />
          </div>
          
          <div class="col-md-4">
            <label for="whiteShirt" class="form-label">White Shirt Size</label>
            <input 
              type="text" 
              class="form-control" 
              id="whiteShirt" 
              v-model="personalData.whiteShirt" 
              placeholder="Shirt size"
            />
          </div>
          
          <div class="col-md-4">
            <label for="bluePants" class="form-label">Blue Pants Size</label>
            <input 
              type="text" 
              class="form-control" 
              id="bluePants" 
              v-model="personalData.bluePants" 
              placeholder="Pants size"
            />
          </div>
          
          <div class="col-md-4">
            <label for="overall" class="form-label">Overall Size</label>
            <input 
              type="text" 
              class="form-control" 
              id="overall" 
              v-model="personalData.overall" 
              placeholder="Overall size"
            />
          </div>
          
          <div class="col-md-4">
            <label for="safetyShoes" class="form-label">Safety Shoes Size</label>
            <input 
              type="text" 
              class="form-control" 
              id="safetyShoes" 
              v-model="personalData.safetyShoes" 
              placeholder="Shoe size"
            />
          </div>
          
          <div class="col-md-4">
            <label for="winterJacket" class="form-label">Winter Jacket Size</label>
            <input 
              type="text" 
              class="form-control" 
              id="winterJacket" 
              v-model="personalData.winterJacket" 
              placeholder="Jacket size"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive, computed, watch } from 'vue';

const props = defineProps({
  formData: {
    type: Object,
    required: true
  }
});

const emit = defineEmits(['update-form-data']);

const personalData = reactive({ ...props.formData });

// Watch for changes in personalData and emit updates to parent
watch(personalData, (newVal) => {
  emit('update-form-data', newVal);
}, { deep: true });

// Watch for changes in props.formData to update local state
watch(() => props.formData, (newVal) => {
  Object.assign(personalData, newVal);
}, { deep: true, immediate: true });

const handleFileChange = (field, event) => {
  if (event.target.files && event.target.files[0]) {
    personalData[field] = event.target.files[0];
  }
};

const rankOptions = [
  { id: "2110", description: "MASTER", cocs: [{ id: "M1", description: "D CLASS I" }, { id: "M2", description: "D CLASS II" }] },
  { id: "2120", description: "CHIEF OFFICER", cocs: [{ id: "M1", description: "D CLASS I" }, { id: "M2", description: "D CLASS II" }] },
  { id: "2130", description: "SECOND OFFICER", cocs: [{ id: "M2", description: "D CLASS II" }, { id: "M3", description: "D CLASS III" }] },
  { id: "2140", description: "THIRD OFFICER", cocs: [{ id: "M2", description: "D CLASS II" }, { id: "M3", description: "D CLASS III" }] },
  { id: "2150", description: "SENIOR DECK CADET", cocs: [{ id: "M3", description: "D CLASS III" }, { id: "OT", description: "OTHER" }] },
  { id: "2210", description: "CHIEF ENGINEER", cocs: [{ id: "KC", description: "E CLASS I" }, { id: "KB", description: "E CLASS II" }] },
  { id: "2220", description: "SECOND ENGINEER", cocs: [{ id: "KC", description: "E CLASS I" }, { id: "KB", description: "E CLASS II" }] },
  { id: "2230", description: "THIRD ENGINEER", cocs: [{ id: "KB", description: "E CLASS II" }, { id: "KA", description: "E CLASS III" }] },
  { id: "2240", description: "FOURTH ENGINEER", cocs: [{ id: "KB", description: "E CLASS II" }, { id: "KA", description: "E CLASS III" }] },
  { id: "2250", description: "SENIOR ENGINE CADET", cocs: [{ id: "KA", description: "E CLASS III" }, { id: "OT", description: "OTHER" }] },
  { id: "2260", description: "ELECTRICIAN", cocs: [{ id: "ET", description: "ETO" }, { id: "KS", description: "E WATCHKEEPING" }, { id: "OT", description: "OTHER" }] },
  { id: "2300", description: "PUMPMAN", cocs: [{ id: "KD", description: "D WATCHKEEPING" }, { id: "OT", description: "OTHER" }] },
  { id: "2320", description: "Q/MASTER", cocs: [{ id: "KD", description: "D WATCHKEEPING" }, { id: "OT", description: "OTHER" }] },
  { id: "2330", description: "SAILOR", cocs: [{ id: "KD", description: "D WATCHKEEPING" }, { id: "OT", description: "OTHER" }] },
  { id: "2340", description: "BOSUN", cocs: [{ id: "KS", description: "E WATCHKEEPING" }, { id: "OT", description: "OTHER" }] },
  { id: "2420", description: "OILER", cocs: [{ id: "KS", description: "E WATCHKEEPING" }, { id: "OT", description: "OTHER" }] },
  { id: "2430", description: "WIPER", cocs: [{ id: "KS", description: "E WATCHKEEPING" }, { id: "OT", description: "OTHER" }] },
  { id: "2440", description: "FITTER", cocs: [{ id: "KS", description: "E WATCHKEEPING" }, { id: "OT", description: "OTHER" }] },
  { id: "2510", description: "CHIEF COOK", cocs: [{ id: "NA", description: "NONE" }, { id: "OT", description: "OTHER" }] },
  { id: "2530", description: "MESS BOY", cocs: [{ id: "NA", description: "NONE" }, { id: "OT", description: "OTHER" }] },
  { id: "2560", description: "CADET TEHNIK", cocs: [{ id: "NA", description: "NONE" }] },
  { id: "2570", description: "CADET NAUTIC", cocs: [{ id: "NA", description: "NONE" }] },
  { id: "2580", description: "CADET ELECTRICIAN", cocs: [{ id: "NA", description: "NONE" }] }
];

const bloodTypes = ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"];
const maritalStatuses = ["Single", "Married", "Divorced", "Widowed"];
const religions = ["Islam", "Christianity", "Catholicism", "Hinduism", "Buddhism", "Other"];
const countries = ["Indonesia", "Singapore", "Malaysia", "Philippines", "Vietnam", "Thailand", "Other"];

const availableCocs = computed(() => {
  if (!personalData.rankToApply) return [];
  const selectedRank = rankOptions.find(r => r.id === personalData.rankToApply);
  return selectedRank ? selectedRank.cocs : [];
});

const handleRankChange = () => {
  // Reset certificate ID when rank changes
  personalData.certificateId = "";
};
</script>

<style scoped>
.cursor-pointer {
  cursor: pointer;
}
</style>

