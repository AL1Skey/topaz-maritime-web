<template>
  <div class="step-content">
    <div class="row">
      <div class="">
        <div class="section-container mb-4">
          <h4 class="section-title">
            <i class="bi bi-person-badge me-2"></i>Personal Information
          </h4>
          <div class="row g-3">
            <div class="col-md-6">
              <label for="name" class="form-label">Full Name</label>
              <input type="text" class="form-control" id="name" v-model="formData.name" required>
            </div>
            <div class="col-md-6">
              <label for="email" class="form-label">Email</label>
              <input type="email" class="form-control" id="email" v-model="formData.email" required>
            </div>
            <div class="col-md-6">
              <label for="birthPlace" class="form-label">Birth Place</label>
              <input type="text" class="form-control" id="birthPlace" v-model="formData.birthPlace" required>
            </div>
            <div class="col-md-6">
              <label for="birthDate" class="form-label">Birth Date</label>
              <input type="date" class="form-control" id="birthDate" v-model="formData.birthDate" required>
            </div>
            <div class="col-md-6">
              <label class="form-label">Gender</label>
              <div>
                <div class="form-check form-check-inline">
                  <input class="form-check-input" type="radio" name="sex" id="male" :value="true" v-model="formData.sex">
                  <label class="form-check-label" for="male">Male</label>
                </div>
                <div class="form-check form-check-inline">
                  <input class="form-check-input" type="radio" name="sex" id="female" :value="false" v-model="formData.sex">
                  <label class="form-check-label" for="female">Female</label>
                </div>
              </div>
            </div>
            <div class="col-md-6">
              <label for="maritalStatusId" class="form-label">Marital Status</label>
              <select class="form-select" id="maritalStatusId" v-model="formData.maritalStatusId" required>
                <option value="1">Single</option>
                <option value="2">Married</option>
                <option value="3">Spouse</option>
              </select>
            </div>
            <div class="col-md-6">
              <label for="numberOfChild" class="form-label">Number of Children</label>
              <input type="number" class="form-control" id="numberOfChild" v-model="formData.numberOfChild" min="0">
            </div>
            <div class="col-md-6">
              <label for="religionId" class="form-label">Religion</label>
              <select class="form-select" id="religionId" v-model="formData.religionId">
                <option value="R01">Moslem</option>
                <option value="R02">Catholic</option>
                <option value="R03">Christian</option>
                <option value="R04">Hinduism</option>
                <option value="R05">Buddhist</option>
                <option value="R06">Orthodox</option>
                <option value="R07">Other</option>
              </select>
            </div>
            <div class="col-md-6">
              <label for="bloodType" class="form-label">Blood Type</label>
              <select class="form-select" id="bloodType" v-model="formData.bloodType">
                <option value="A">A</option>
                <option value="B">B</option>
                <option value="AB">AB</option>
                <option value="O">O</option>
              </select>
            </div>
            <div class="col-md-6">
              <label for="weight" class="form-label">Weight (kg)</label>
              <div class="input-group">
                <input type="text" class="form-control" id="weight" v-model="formData.weight">
                <span class="input-group-text">Kg</span>
              </div>
            </div>
            <div class="col-md-6">
              <label for="height" class="form-label">Height (cm)</label>
              <div class="input-group">
                <input type="text" class="form-control" id="height" v-model="formData.height">
                <span class="input-group-text">Cm</span>
              </div>
            </div>
            <div class="col-md-6">
              <div class="form-check mt-4">
                <input class="form-check-input" type="checkbox" id="isElementary" v-model="formData.isElementary">
                <label class="form-check-label" for="isElementary">Elementary</label>
              </div>
            </div>
            <div class="col-md-6">
              <label for="rank" class="form-label">Rank</label>
              <select class="form-select" id="rank" v-model="formData.rank" required>
                <option value="2210">MASTER</option>
                <option value="2110">CHIEF OFFICER</option>
                <option value="2120">SECOND OFFICER</option>
                <option value="2130">THIRD OFFICER</option>
                <option value="2140">SENIOR DECK CADET</option>
                <option value="2150">CHIEF ENGINEER</option>
                <option value="2220">SECOND ENGINEER</option>
                <option value="2230">THIRD ENGINEER</option>
                <option value="2240">FOURTH ENGINEER</option>
                <option value="2250">SENIOR ENGINE CADET</option>
                <option value="2260">ELECTRICIAN</option>
                <option value="2440">PUMPMAN</option>
                <option value="2510">SAILOR</option>
                <option value="2530">Q/MASTER</option>
                <option value="2300">BOSUN</option>
                <option value="2320">OILER</option>
                <option value="2330">WIPER</option>
                <option value="2340">FITTER</option>
                <option value="2420">CHIEF COOK</option>
                <option value="2430">MESS BOY</option>
              </select>
            </div>
          </div>
        </div>
        
        <div class="section-container mb-4">
          <h4 class="section-title">
            <i class="bi bi-geo-alt me-2"></i>Contact Information
          </h4>
          <div class="row g-3">
            <div class="col-md-12">
              <label for="address" class="form-label">Address</label>
              <textarea class="form-control" id="address" v-model="formData.address" rows="2" required></textarea>
            </div>
            <div class="col-md-4">
              <label for="city" class="form-label">City</label>
              <input type="text" class="form-control" id="city" v-model="formData.city" required>
            </div>
            <div class="col-md-4">
              <label for="zipCode" class="form-label">Zip Code</label>
              <input type="text" class="form-control" id="zipCode" v-model="formData.zipCode" required>
            </div>
            <div class="col-md-4">
              <label for="countryId" class="form-label">Country</label>
              <select class="form-select" id="countryId" v-model="formData.countryId" required>
                <option value="id">Indonesia</option>
                <option value="sg">Singapore</option>
                <option value="my">Malaysia</option>
                <option value="ph">Philippines</option>
              </select>
            </div>
            <div class="col-md-6">
              <label for="phoneNo" class="form-label">Phone Number</label>
              <input type="tel" class="form-control" id="phoneNo" v-model="formData.phoneNo">
            </div>
            <div class="col-md-6">
              <label for="handPhone" class="form-label">Mobile Phone</label>
              <input type="tel" class="form-control" id="handPhone" v-model="formData.handPhone" required>
            </div>
            <div class="col-md-6">
              <label for="email2" class="form-label">Email Address</label>
              <input type="email" class="form-control" id="email2" v-model="formData.email" required>
            </div>
            <div class="col-md-6">
              <label for="nationalityId" class="form-label">Nationality</label>
              <select class="form-select" id="nationalityId" v-model="formData.nationalityId" required>
                <option value="">Select Nationality</option>
                <option value="IDN">Indonesian</option>
                <option value="AUS">Australian</option>
                <option value="BGD">Bangladeshi</option>
                <option value="BHS">Bahamian</option>
                <option value="CHN">Chinese</option>
                <option value="GBR">British</option>
                <option value="IND">Indian</option>
                <option value="JPN">Japanese</option>
                <option value="KOR">Korean</option>
                <option value="MYS">Malaysian</option>
                <option value="PHL">Filipino</option>
                <option value="SGP">Singaporean</option>
                <option value="THA">Thai</option>
                <option value="USA">American</option>
                <option value="VNM">Vietnamese</option>
              </select>
            </div>
          </div>
        </div>
        
        <div class="section-container mb-4">
          <h4 class="section-title">
            <i class="bi bi-people me-2"></i>Next of Kin Information
          </h4>
          <div class="row g-3">
            <div class="col-md-6">
              <label for="nextOfKinName" class="form-label">Name of Next of Kin</label>
              <input type="text" class="form-control" id="nextOfKinName" v-model="formData.nextOfKinName">
            </div>
            <div class="col-md-6">
              <label for="relationship" class="form-label">Relationship</label>
              <select class="form-select" id="relationship" v-model="formData.relationship">
                <option value="K00">Father</option>
                <option value="K01">Mother</option>
                <option value="K02">Wife</option>
                <option value="K03">Husband</option>
                <option value="K04">Son</option>
                <option value="K05">Daughter</option>
                <option value="K06">Brother</option>
                <option value="K07">Sister</option>
                <option value="K08">Uncle</option>
                <option value="K09">Aunty</option>
                <option value="K10">Other</option>
              </select>
            </div>
            <div class="col-md-12">
              <label for="nextOfKinAddress" class="form-label">Address of Next of Kin</label>
              <textarea class="form-control" id="nextOfKinAddress" v-model="formData.nextOfKinAddress" rows="2"></textarea>
            </div>
            <div class="col-md-6">
              <label for="nextOfKinCity" class="form-label">City</label>
              <input type="text" class="form-control" id="nextOfKinCity" v-model="formData.nextOfKinCity">
            </div>
            <div class="col-md-6">
              <label for="nextOfKinZipCode" class="form-label">ZIP Code</label>
              <input type="text" class="form-control" id="nextOfKinZipCode" v-model="formData.nextOfKinZipCode">
            </div>
            <div class="col-md-6">
              <label for="nextOfKinPhone" class="form-label">NOK Phone No</label>
              <input type="tel" class="form-control" id="nextOfKinPhone" v-model="formData.nextOfKinPhone">
            </div>
          </div>
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