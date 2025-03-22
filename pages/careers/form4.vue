<template>
  <div class="maritime-form-container">
    <div class=" py-5" style="width:80%; margin:auto;">
      <div class="card shadow-lg border-0">
        <div class="card-header bg-primary text-white">
          <div class="d-flex align-items-center">
            <i class="bi bi-ship me-2 fs-3"></i>
            <div>
              <h2 class="mb-0">Maritime Recruitment Form</h2>
              <p class="mb-0">Please complete all required information</p>
            </div>
          </div>
        </div>
        
        <!-- Steps Navigation -->
        <div class="steps-container">
          <div class="step-item" :class="{ 'active': currentStep === 1 }" @click="goToStep(1)">
            <div class="step-number">1</div>
            <div class="step-text">Applied Position</div>
          </div>
          <div class="step-item" :class="{ 'active': currentStep === 2 }" @click="goToStep(2)">
            <div class="step-number">2</div>
            <div class="step-text">Personal Data</div>
          </div>
          <div class="step-item" :class="{ 'active': currentStep === 3 }" @click="goToStep(3)">
            <div class="step-number">3</div>
            <div class="step-text">Documents</div>
          </div>
          <div class="step-item" :class="{ 'active': currentStep === 4 }" @click="goToStep(4)">
            <div class="step-number">4</div>
            <div class="step-text">Trainings</div>
          </div>
          <div class="step-item" :class="{ 'active': currentStep === 5 }" @click="goToStep(5)">
            <div class="step-number">5</div>
            <div class="step-text">Experiences</div>
          </div>
        </div>
        
        <div class="card-body">
          <form @submit.prevent="submitForm">

            <!-- Step 1: Applied Position -->
            <div v-if="currentStep === 1" class="step-content">
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
            
            <!-- Step 2: Personal Information -->
            <div v-if="currentStep === 2" class="step-content">
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
                        <label for="email" class="form-label">Email Address</label>
                        <input type="email" class="form-control" id="email" v-model="formData.email" required>
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

            <!-- Step 3: Documents -->
            <div v-if="currentStep === 3" class="step-content">
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
                                <option v-for="option in cocOptions" :value="option.value">{{ option.text }}</option>
                                </select>
                            </div>
                        </td>
                        <td >
                          <input style="transform:translateY(1.2rem)" type="text" class="form-control" v-model="formData.docNo">
                        </td>
                        <td><input style="transform:translateY(1.2rem)" type="text" class="form-control" v-model="formData.certificateIssued"></td>
                        <td><input style="transform:translateY(1.2rem)" type="date" class="form-control" v-model="formData.certificateIssuedDate"></td>
                        <td><input style="transform:translateY(1.2rem)" type="date" class="form-control" v-model="formData.certificateExpiryDate"></td>
                      </tr>
                      <tr>
                        <td>
                          <p>Passport</p>
                          <input type="file" name="passportFile" @change="handlePassportUpload" accept="application/pdf,image/*">
                        </td>
                        <td><input style="transform:translateY(1.2rem)" type="text" class="form-control" v-model="formData.passport.docNo"></td>
                        <td><input style="transform:translateY(1.2rem)" type="text" class="form-control" v-model="formData.passport.issued"></td>
                        <td><input style="transform:translateY(1.2rem)" type="date" class="form-control" v-model="formData.passport.issuedDate"></td>
                        <td><input style="transform:translateY(1.2rem)" type="date" class="form-control" v-model="formData.passport.expiredDate"></td>
                      </tr>
                      <tr>
                        <td>
                          <p>Seamen Book</p>
                          <input type="file" name="seamenBookFile" @change="handleSeamenBookUpload" accept="application/pdf,image/*">
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
                      <input type="file" class="form-control" id="photoUpload" name="photo" @change="handlePhotoUpload" accept="image/*">
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
            
            <!-- Step 4: Trainings -->
            <div v-if="currentStep === 4" class="step-content">
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
            
            <!-- Step 5: Experiences -->
            <div v-if="currentStep === 5" class="step-content">
              <div class="section-container mb-4">
                <h4 class="section-title">
                  <i class="bi bi-water me-2"></i>Sea Experience
                </h4>
                
                <div class="table-responsive mb-4">
                  <table class="table table-bordered table-hover">
                    <thead class="table-light">
                      <tr>
                        <th>Vessel Name</th>
                        <th style="width:15rem;">Rank</th>
                        <th>Vessel Type</th>
                        <th>Vessel Company</th>
                        <th style="width:6rem;">DWT</th>
                        <th style="width:6rem;">KWH</th>
                        <th>Sign On</th>
                        <th>Sign Off</th>
                        <th>Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr v-for="(exp, index) in formData.experiences" :key="index">
                        <td><input type="text" class="form-control" v-model="exp.vessel"></td>
                        <td>
                          <select class="form-select" v-model="exp.rank">
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
                        </td>
                        <td>
                          <select class="form-select" v-model="exp.vesselType">
                            <option value="bulkCarrier">Bulk Carrier</option>
                            <option value="container">Container Ship</option>
                            <option value="tanker">Tanker</option>
                            <option value="lpg">LPG Carrier</option>
                            <option value="lng">LNG Carrier</option>
                            <option value="roro">Ro-Ro</option>
                            <option value="passenger">Passenger Ship</option>
                            <option value="generalCargo">General Cargo</option>
                          </select>
                        </td>
                        <td><input type="text" class="form-control" v-model="exp.company"></td>
                        <td><input type="number" class="form-control" v-model="exp.dwt"></td>
                        <td><input type="number" class="form-control" v-model="exp.kwh"></td>
                        <td><input type="date" class="form-control" v-model="exp.signOn"></td>
                        <td><input type="date" class="form-control" v-model="exp.signOff"></td>
                        <td>
                          <button type="button" class="btn btn-danger btn-sm" @click="removeExperience(index)">
                            <i class="bi bi-trash"></i>Delete
                          </button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div class="section-container mb-4" style="background-color: white;box-shadow:none;">
                <button type="button" class="btn btn-primary" style="padding:0.6rem" @click="addExperience">
                  <i class="bi bi-plus-circle"></i> Add Experience
                </button>
              </div>
            </div>
            
            <!-- Navigation Buttons -->
            <div class="d-flex justify-content-between mt-4">
              <button 
                type="button" 
                class="btn btn-secondary" 
                @click="prevStep" 
                v-if="currentStep > 1"
              >
                <i class="bi bi-arrow-left me-2"></i>Previous
              </button>
              <div class="ms-auto">
                <button 
                  type="button" 
                  class="btn btn-primary me-2" 
                  @click="nextStep" 
                  v-if="currentStep < 5"
                >
                  Next<i class="bi bi-arrow-right ms-2"></i>
                </button>
                <button 
                  type="submit" 
                  class="btn btn-success" 
                  style="padding:15px 30px;"
                  v-if="currentStep === 5"
                >
                  <i class="bi bi-send-check me-2"></i>Submit
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive, onMounted, computed } from 'vue';

const api = useApi(null,'multipart/form-data',false);
const currentStep = ref(1);
const photoPreview = ref(null);
const certificatePreview = ref(null);
const photoInput = ref(null);
const certificateInput = ref(null);

// Update the formData object in the script section to include the new fields
const formData = reactive({
  // Existing fields
  candidateId: '',
  agentId: '',
  name: '',
  email: '',
  birthPlace: '',
  birthDate: '',
  sex: true,
  maritalStatusId: '',
  numberOfChild: 0,
  address: '',
  city: '',
  zipCode: '',
  countryId: '',
  phoneNo: '',
  handPhone: '',
  religionId: '',
  bloodType: '',
  nationalityId: '',
  rankToApply: '',
  rankApplyDate: '',
  certificateId: '',
  certificateNo: '',
  certificateStatusId: '',
  certificateIssued: '',
  certificateIssuedDate: '',
  certificateExpiryDate: '',
  certificateDoc: null,
  photo: null,
  height: '',
  weight: '',
  whiteShirt: '',
  bluePants: '',
  overall: '',
  safetyShoes: '',
  winterJacket: '',
  
  // New fields for Personal Data
  manningAgent: '',
  nextOfKinName: '',
  nextOfKinAddress: '',
  nextOfKinCity: '',
  nextOfKinZipCode: '',
  nextOfKinPhone: '',
  relationship: '',
  isElementary: false,
  rank: '',
  
  // New fields for Documents
  cocType: '',
  passport: {
    docNo: '',
    issued: '',
    issuedDate: '',
    expiredDate: '',
    file: null
  },
  seamen: {
    docNo: '',
    issued: '',
    issuedDate: '',
    expiredDate: '',
    file: null
  },
  usaVisa: {
    docNo: '',
    issued: '',
    issuedDate: '',
    expiredDate: ''
  },
  singaporeVisa: {
    docNo: '',
    issued: '',
    issuedDate: '',
    expiredDate: ''
  },
  coe: {
    docNo: '',
    issued: '',
    issuedDate: '',
    expiredDate: ''
  },
  goc: {
    docNo: '',
    issued: '',
    issuedDate: '',
    expiredDate: ''
  },
  npwp: {
    docNo: '',
    issued: '',
    issuedDate: '',
    expiredDate: ''
  },
  
  // New fields for Trainings - Updated based on PDF
  standardTrainings: [
    { trainingId: 'TN000', name: 'BASIC SAFETY TRAINING (Reg.VI/1-4)', qualificationNo: '', issuedDate: '', expiredDate: '' },
    { trainingId: 'TN001', name: 'Advanced Fire Fighting (Reg. VI/3)', qualificationNo: '', issuedDate: '', expiredDate: '' },
    { trainingId: 'TN016', name: 'Adv training for chemical tanker cargo operations (Table A-V/1-1-3)', qualificationNo: '', issuedDate: '', expiredDate: '' },
    { trainingId: 'TN017', name: 'Adv training for oil tanker cargo operations (Table A-V/1-1-2)', qualificationNo: '', issuedDate: '', expiredDate: '' },
    { trainingId: 'TN089', name: 'GMDSS COURSE', qualificationNo: '', issuedDate: '', expiredDate: '' },
    { trainingId: 'TN018', name: 'GMDSS - ENDORSEMENT', qualificationNo: '', issuedDate: '', expiredDate: '' },
    { trainingId: 'TN022', name: 'SURVIVAL CRAFT & RESCUE BOAT', qualificationNo: '', issuedDate: '', expiredDate: '' },
    { trainingId: 'TN035', name: 'Adv training for gas tanker cargo operations (Table A-V/1-2-2)', qualificationNo: '', issuedDate: '', expiredDate: '' },
    { trainingId: 'TN302', name: 'BRIDGE RESOURCE MANAGEMENT (BRM) (Table A-II/1)', qualificationNo: '', issuedDate: '', expiredDate: '' },
    { trainingId: 'TN324', name: 'FOOD HANDLING CERT', qualificationNo: '', issuedDate: '', expiredDate: '' },
    { trainingId: 'TN374', name: 'ENGINE RESOURCE MANAGEMENT (ERM) (Table A-III/1)', qualificationNo: '', issuedDate: '', expiredDate: '' },
    { trainingId: 'TN082', name: 'RISK MANAGEMENT TRAINING', qualificationNo: '', issuedDate: '', expiredDate: '' },
    { trainingId: 'TN083', name: 'DANGEROUS CARGO ENDORSEMENTS - PETROLEUM', qualificationNo: '', issuedDate: '', expiredDate: '' },
    { trainingId: 'TN096', name: 'DANGEROUS CARGO ENDORSEMENTS - CHEMICAL', qualificationNo: '', issuedDate: '', expiredDate: '' },
    { trainingId: 'TN097', name: 'DANGEROUS ENDORSEMENTS GAS', qualificationNo: '', issuedDate: '', expiredDate: '' },
    { trainingId: 'TN238', name: 'BASIC SEA SURVIVAL (BSS)', qualificationNo: '', issuedDate: '', expiredDate: '' },
    { trainingId: 'TN023', name: 'MEDICAL FIRST AID', qualificationNo: '', issuedDate: '', expiredDate: '' },
    { trainingId: 'TN024', name: 'MEDICAL CARE', qualificationNo: '', issuedDate: '', expiredDate: '' },
    { trainingId: 'TN025', name: 'BRIDGE TEAM MANAGEMENT', qualificationNo: '', issuedDate: '', expiredDate: '' },
    { trainingId: 'TN028', name: 'ISM-CODE', qualificationNo: '', issuedDate: '', expiredDate: '' },
    { trainingId: 'TN019', name: 'TANKER FAMILIARIZATION', qualificationNo: '', issuedDate: '', expiredDate: '' },
    { trainingId: 'TN005', name: 'NCC', qualificationNo: '', issuedDate: '', expiredDate: '' },
    { trainingId: 'TN015', name: 'SHIP HANDLING & MANEUVERING COURSE', qualificationNo: '', issuedDate: '', expiredDate: '' },
  ],
  
  // Existing fields
  documents: [],
  trainings: [],
  experiences: [
    {
      vessel: '',
      vesselType: '',
      flag: '',
      tradingAreaId: '',
      rank: '',
      dwt: 0,
      kwh: 0,
      grt: 0,
      owner: '',
      company: '',
      signOn: '',
      signOff: '',
      signOffReason: ''
    }
  ]
});

onMounted(() => {
  // Set default application date to today
  const today = new Date();
  const formattedDate = today.toISOString().split('T')[0]; // Format as YYYY-MM-DD
  formData.rankApplyDate = formattedDate;
  
  // Parse URL query parameters
  const urlParams = new URLSearchParams(window.location.search);
  const applyParam = urlParams.get('apply')?.toString();
  if (applyParam) {
    // Map the URL parameter to the corresponding value in the dropdown
    const rankMap = {
      'MASTER': 'MASTER',
      'CHIEF OFFICER': 'CHIEF OFFICER',
      'SECOND OFFICER': 'SECOND OFFICER',
      'THIRD OFFICER': 'THIRD OFFICER',
      'SENIOR DECK CADET': 'SENIOR DECK CADET',
      'CHIEF ENGINEER': 'CHIEF ENGINEER',
      'SECOND ENGINEER': 'SECOND ENGINEER',
      'THIRD ENGINEER': 'THIRD ENGINEER',
      'FOURTH ENGINEER': 'FOURTH ENGINEER',
      'SENIOR ENGINE CADET': 'SENIOR ENGINE CADET',
      'ELECTRICIAN': 'ELECTRICIAN',
      'PUMPMAN': 'PUMPMAN',
      'Q/MASTER': 'Q/MASTER',
      'SAILOR': 'SAILOR',
      'BOSUN': 'BOSUN',
      'OILER': 'OILER',
      'WIPER': 'WIPER',
      'FITTER': 'FITTER',
      'CHIEF COOK': 'CHIEF COOK',
      'MESS BOY': 'MESS BOY',
      'CADET TEHNIK': 'CADET TEHNIK',
      'CADET NAUTIC': 'CADET NAUTIC',
      'CADET ELECTRICIAN': 'CADET ELECTRICIAN'
    };
    
    // Try to match exactly, then try case-insensitive match
    if (rankMap[applyParam]) {
      formData.rankToApply = rankMap[applyParam];
    } else {
      // Try to find a partial match
      const lowerParam = applyParam.toLowerCase();
      for (const [key, value] of Object.entries(rankMap)) {
        if (key.toLowerCase().includes(lowerParam) || value.toLowerCase().includes(lowerParam)) {
          formData.rankToApply = value;
          break;
        }
      }
    }
  }
});

const nextStep = () => {
  if (currentStep.value < 5) {
    currentStep.value++;
    window.scrollTo(0, 0);
  }
};

const prevStep = () => {
  if (currentStep.value > 1) {
    currentStep.value--;
    window.scrollTo(0, 0);
  }
};

const goToStep = (step) => {
  if (step >= 1 && step <= 5) {
    currentStep.value = step;
    window.scrollTo(0, 0);
  }
};

const triggerPhotoUpload = () => {
  photoInput.value.click();
};

const triggerCertificateUpload = () => {
  certificateInput.value.click();
};

const handlePhotoUpload = (event) => {
  const file = event.target.files[0];
  if (file) {
    formData.photo = file;
    const reader = new FileReader();
    reader.onload = (e) => {
      photoPreview.value = e.target.result;
    };
    reader.readAsDataURL(file);
  }
};

const handleCertificateUpload = (event) => {
  const file = event.target.files[0];
  if (file) {
    formData.certificateDoc = file;
    certificatePreview.value = true;
  }
};

const handleFileUpload = (event, field) => {
  formData[field] = event.target.files[0];
};

const handlePassportUpload = (event) => {
  formData.passport.file = event.target.files[0];
};

const handleSeamenBookUpload = (event) => {
  formData.seamen.file = event.target.files[0];
};

const handleDocFileUpload = (event, index) => {
  formData.documents[index].docFile = event.target.files[0];
};

const addDocument = () => {
  formData.documents.push({
    docId: '',
    docNo: '',
    docFile: null,
    issued: '',
    validDate: '',
    expiredDate: '',
    remark: ''
  });
};

const removeDocument = (index) => {
  formData.documents.splice(index, 1);
  if (formData.documents.length === 0) {
    addDocument();
  }
};

const addTraining = () => {
  formData.trainings.push({
    trainingId: '',
    referenceId: '',
    certificateNo: '',
    validDate: '',
    expiredDate: ''
  });
};

const removeTraining = (index) => {
  formData.trainings.splice(index, 1);
  if (formData.trainings.length === 0) {
    addTraining();
  }
};

const addExperience = () => {
  formData.experiences.push({
    vessel: '',
    vesselType: '',
    flag: '',
    tradingAreaId: '',
    rank: '',
    dwt: 0,
    kwh: 0,
    grt: 0,
    owner: '',
    company: '',
    signOn: '',
    signOff: '',
    signOffReason: ''
  });
};

const removeExperience = (index) => {
  formData.experiences.splice(index, 1);
  if (formData.experiences.length === 0) {
    addExperience();
  }
};

// Submit form using FormData for multipart/form-data
const submitForm = async() => {
  // Create a new FormData object
  const formDataObj = new FormData();
  
  // Add basic fields
  formDataObj.append('candidateId', formData.candidateId || '');
  formDataObj.append('agentId', formData.agentId || '');
  formDataObj.append('name', formData.name);
  formDataObj.append('birthPlace', formData.birthPlace);
  formDataObj.append('birthDate', formData.birthDate);
  formDataObj.append('sex', formData.sex);
  formDataObj.append('maritalStatusId', formData.maritalStatusId);
  formDataObj.append('numberOfChild', formData.numberOfChild);
  formDataObj.append('address', formData.address);
  formDataObj.append('city', formData.city);
  formDataObj.append('zipCode', formData.zipCode);
  formDataObj.append('countryId', formData.countryId);
  formDataObj.append('phoneNo', formData.phoneNo);
  formDataObj.append('handPhone', formData.handPhone);
  formDataObj.append('email', formData.email);
  formDataObj.append('religionId', formData.religionId);
  formDataObj.append('bloodType', formData.bloodType);
  formDataObj.append('nationalityId', formData.nationalityId);
  formDataObj.append('rankToApply', formData.rankToApply);
  formDataObj.append('rankApplyDate', formData.rankApplyDate);
  formDataObj.append('certificateId', formData.certificateId);
  formDataObj.append('certificateNo', formData.certificateNo);
  formDataObj.append('certificateStatusId', formData.certificateStatusId);
  formDataObj.append('certificateIssued', formData.certificateIssued);
  formDataObj.append('certificateIssuedDate', formData.certificateIssuedDate);
  formDataObj.append('certificateExpiryDate', formData.certificateExpiryDate);
  formDataObj.append('height', formData.height);
  formDataObj.append('weight', formData.weight);
  formDataObj.append('whiteShirt', formData.whiteShirt);
  formDataObj.append('bluePants', formData.bluePants);
  formDataObj.append('overall', formData.overall);
  formDataObj.append('safetyShoes', formData.safetyShoes);
  formDataObj.append('winterJacket', formData.winterJacket);
  
  // Add file uploads
  if (formData.photo) {
    formDataObj.append('photo', formData.photo);
  }
  
  if (formData.certificateDoc) {
    formDataObj.append('certificateDoc', formData.certificateDoc);
  }
  
  // Add passport details
  // formDataObj.append('passport.docNo', formData.passport.docNo);
  // formDataObj.append('passport.issued', formData.passport.issued);
  // formDataObj.append('passport.issuedDate', formData.passport.issuedDate);
  // formDataObj.append('passport.expiredDate', formData.passport.expiredDate);
  // if (formData.passport.file) {
  //   formDataObj.append('passport.docFile', formData.passport.file);
  // }
  formDataObj.append('passport', formData.passport.file);
  
  // Add seamen book details
  // formDataObj.append('seamen.docNo', formData.seamen.docNo);
  // formDataObj.append('seamen.issued', formData.seamen.issued);
  // formDataObj.append('seamen.issuedDate', formData.seamen.issuedDate);
  // formDataObj.append('seamen.expiredDate', formData.seamen.expiredDate);
  // if (formData.seamen.file) {
  //   formDataObj.append('seamen.docFile', formData.seamen.file);
  // }
  formDataObj.append('seamen', formData.seamen.file);
  // Add documents array as JSON string
  const documents = [
    {
      docId: "passport",
      docNo: formData.passport.docNo,
      issued: formData.passport.issued,
      validDate: formData.passport.issuedDate,
      expiredDate: formData.passport.expiredDate,
      file: formData.passport.file,
      remark: "Passport"
    },
    {
      docId: "seamenBook",
      docNo: formData.seamen.docNo,
      issued: formData.seamen.issued,
      validDate: formData.seamen.issuedDate,
      expiredDate: formData.seamen.expiredDate,
      file: formData.seamen.file,
      remark: "Seamen Book"
    }
  ];
  
  formDataObj.append('documents', JSON.stringify(documents));
  
  // Add trainings array as JSON string
  const trainings = formData.standardTrainings
    .filter(training => training.qualificationNo || training.issuedDate || training.expiredDate)
    .map(training => ({
      trainingId: training.trainingId,
      referenceId: training.qualificationNo || "",
      certificateNo: training.qualificationNo || "",
      validDate: training.issuedDate,
      expiredDate: training.expiredDate
    }));
  
  formDataObj.append('trainings', JSON.stringify(trainings));
  
  // Add experiences array as JSON string
  const experiences = formData.experiences.map(exp => ({
    vessel: exp.vessel,
    vesselType: exp.vesselType,
    flag: exp.flag || "",
    tradingAreaId: exp.tradingAreaId || "",
    rank: exp.rank,
    dwt: parseInt(exp.dwt) || 0,
    kwh: parseInt(exp.kwh) || 0,
    owner: exp.company || exp.owner || "",
    signOn: exp.signOn,
    signOff: exp.signOff,
    signOffReason: exp.signOffReason || ""
  }));
  
  formDataObj.append('experiences', JSON.stringify(experiences));
  
  // Send the form data to the server
  console.log('Submitting form data:', formDataObj);
  try{
    const res = await api.post('candidates',formDataObj)
    alert('Application submitted successfully!');
    console.log(res)
  }
  catch(e){
    alert('Error submitting application. Please try again.');
    console.log(e)
  }
  // Here you would typically use fetch or axios to send the data
  // fetch('http://127.0.0.1:8000/api/candidates', {
  //   method: 'POST',
  //   body: formDataObj,
  //   headers: {
  //     'Content-Type': 'multipart/form-data'
  //   }
  // })
  // .then(response => {
  //   if (!response.ok) {
  //     throw new Error('Network response was not ok');
  //   }
  //   return response.json();
  // })
  // .then(data => {
  //   console.log('Success:', data);
  //   alert('Application submitted successfully!');
  // })
  // .catch((error) => {
  //   console.error('Error:', error);
  //   alert('Error submitting application. Please try again.');
  // });

};

const cocOptions = computed(() => {
    switch (formData.rankToApply) {
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
.maritime-form-container {
  background-color: #f0f8ff;
  min-height: 100vh;
  background-image: url('https://img.freepik.com/free-photo/container-cargo-freight-ship-with-working-crane-bridge-shipyard-twilight-sky_44353-2505.jpg');
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  position: relative;
}

.maritime-form-container::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(255, 255, 255, 0.85);
  z-index: 0;
}

.container {
  position: relative;
  z-index: 1;
}

.card {
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
  border-radius: 10px;
  overflow: hidden;
}

.card-header {
  background: linear-gradient(135deg, #0066cc 0%, #0052a3 100%);
  padding: 1.5rem;
}

/* Steps Navigation */
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

.document-item, .training-item, .experience-item {
  background-color: #fff;
  transition: all 0.3s ease;
}

.document-item:hover, .training-item:hover, .experience-item:hover {
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.btn-primary {
  background-color: #0066cc;
  border-color: #0066cc;
}

.btn-primary:hover {
  background-color: #0052a3;
  border-color: #0052a3;
}

.btn-success {
  background: linear-gradient(135deg, #1e8449 0%, #27ae60 100%);
  border: none;
  font-weight: bold;
  padding: 10px 20px;
  transition: all 0.3s ease;
}

.btn-success:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 12px rgba(39, 174, 96, 0.3);
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
  .card-header {
    padding: 1rem;
  }
  
  .section-container {
    padding: 1rem;
  }
  
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