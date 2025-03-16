<template>
    <div class="maritime-form-container">
      <div class="container py-5">
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
              <div class="step-text">Personal Data</div>
            </div>
            <div class="step-item" :class="{ 'active': currentStep === 2 }" @click="goToStep(2)">
              <div class="step-number">2</div>
              <div class="step-text">Applied Position</div>
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
              <!-- Step 1: Personal Information -->
              <div v-if="currentStep === 1" class="step-content">
                <div class="row">
                  <div class="col-md-8">
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
                            <option value="single">Single</option>
                            <option value="married">Married</option>
                            <option value="divorced">Divorced</option>
                            <option value="widowed">Widowed</option>
                          </select>
                        </div>
                        <div class="col-md-6">
                          <label for="numberOfChild" class="form-label">Number of Children</label>
                          <input type="number" class="form-control" id="numberOfChild" v-model="formData.numberOfChild" min="0">
                        </div>
                        <div class="col-md-6">
                          <label for="religionId" class="form-label">Religion</label>
                          <select class="form-select" id="religionId" v-model="formData.religionId">
                            <option value="islam">Islam</option>
                            <option value="christian">Christian</option>
                            <option value="catholic">Catholic</option>
                            <option value="hindu">Hinduism</option>
                            <option value="buddhist">Buddhist</option>
                            <option value="other">Other</option>
                          </select>
                        </div>
                        <div class="col-md-6">
                          <label for="bloodType" class="form-label">Blood Type</label>
                          <select class="form-select" id="bloodType" v-model="formData.bloodType">
                            <option value="A">A</option>
                            <option value="B">B</option>
                            <option value="AB">AB</option>
                            <option value="O">O</option>
                            <option value="A+">A+</option>
                            <option value="A-">A-</option>
                            <option value="B+">B+</option>
                            <option value="B-">B-</option>
                            <option value="AB+">AB+</option>
                            <option value="AB-">AB-</option>
                            <option value="O+">O+</option>
                            <option value="O-">O-</option>
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
                          <label for="nationalityId" class="form-label">Nationality</label>
                          <select class="form-select" id="nationalityId" v-model="formData.nationalityId" required>
                            <option value="id">Indonesian</option>
                            <option value="sg">Singaporean</option>
                            <option value="my">Malaysian</option>
                            <option value="ph">Filipino</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div class="col-md-4">
                    <div class="section-container mb-4">
                      <h4 class="section-title">
                        <i class="bi bi-file-earmark-person me-2"></i>Photo & Documents
                      </h4>
                      <div class="text-center mb-4">
                        <div class="photo-upload-container">
                          <div v-if="photoPreview" class="photo-preview">
                            <img :src="photoPreview" alt="Candidate Photo" class="img-fluid rounded">
                          </div>
                          <div v-else class="photo-placeholder">
                            <i class="bi bi-person-circle"></i>
                          </div>
                          <div class="mt-2">
                            <button type="button" class="btn btn-outline-primary btn-sm" @click="triggerPhotoUpload">
                              Upload Photo
                            </button>
                            <p class="text-muted small mt-1">JPG, PNG (Max. 2MB)</p>
                            <input type="file" ref="photoInput" class="d-none" @change="handlePhotoUpload" accept="image/*">
                          </div>
                        </div>
                      </div>
                      
                      <div class="certificate-upload-container text-center">
                        <div v-if="certificatePreview" class="certificate-preview">
                          <i class="bi bi-file-earmark-check"></i>
                          <p class="mb-0">{{ formData.certificateDoc?.name || 'Certificate uploaded' }}</p>
                        </div>
                        <div v-else class="certificate-placeholder">
                          <i class="bi bi-file-earmark-text"></i>
                        </div>
                        <div class="mt-2">
                          <button type="button" class="btn btn-outline-primary btn-sm" @click="triggerCertificateUpload">
                            Upload Certificate
                          </button>
                          <p class="text-muted small mt-1">PDF, DOC (Max. 5MB)</p>
                          <input type="file" ref="certificateInput" class="d-none" @change="handleCertificateUpload" accept=".pdf,.doc,.docx">
                        </div>
                      </div>
                    </div>
                    
                    <div class="section-container mb-4">
                      <h4 class="section-title">
                        <i class="bi bi-rulers me-2"></i>Physical Information
                      </h4>
                      <div class="row g-3">
                        <div class="col-md-6">
                          <label for="height" class="form-label">Height (cm)</label>
                          <input type="text" class="form-control" id="height" v-model="formData.height">
                        </div>
                        <div class="col-md-6">
                          <label for="weight" class="form-label">Weight (kg)</label>
                          <input type="text" class="form-control" id="weight" v-model="formData.weight">
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <!-- Step 2: Applied Position -->
              <div v-if="currentStep === 2" class="step-content">
                <div class="section-container mb-4">
                  <h4 class="section-title">
                    <i class="bi bi-briefcase me-2"></i>Applied Position
                  </h4>
                  <div class="row g-3">
                    <div class="col-md-6">
                      <label for="rankToApply" class="form-label">Rank to Apply</label>
                      <select class="form-select" id="rankToApply" v-model="formData.rankToApply" required>
                        <option value="captain">Captain</option>
                        <option value="chiefOfficer">Chief Officer</option>
                        <option value="secondOfficer">Second Officer</option>
                        <option value="thirdOfficer">Third Officer</option>
                        <option value="chiefEngineer">Chief Engineer</option>
                        <option value="secondEngineer">Second Engineer</option>
                        <option value="thirdEngineer">Third Engineer</option>
                        <option value="fourthEngineer">Fourth Engineer</option>
                        <option value="bosun">Bosun</option>
                        <option value="abSeaman">AB Seaman</option>
                        <option value="ordinarySeaman">Ordinary Seaman</option>
                      </select>
                    </div>
                    <div class="col-md-6">
                      <label for="rankApplyDate" class="form-label">Application Date</label>
                      <input type="date" class="form-control" id="rankApplyDate" v-model="formData.rankApplyDate" readonly>
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
                  <div class="row mb-4">
                    <div class="col-md-6">
                      <div class="mb-3">
                        <label for="certificateId" class="form-label">Certificate Type</label>
                        <select class="form-select" id="certificateId" v-model="formData.certificateId">
                          <option value="coc">Certificate of Competency (COC)</option>
                          <option value="goc">General Operator Certificate (GOC)</option>
                          <option value="stcw">STCW Certificate</option>
                        </select>
                      </div>
                      <div class="mb-3">
                        <label for="certificateNo" class="form-label">Certificate Number</label>
                        <input type="text" class="form-control" id="certificateNo" v-model="formData.certificateNo">
                      </div>
                      <div class="mb-3">
                        <label for="certificateStatusId" class="form-label">Certificate Status</label>
                        <select class="form-select" id="certificateStatusId" v-model="formData.certificateStatusId">
                          <option value="valid">Valid</option>
                          <option value="expired">Expired</option>
                          <option value="pending">Pending</option>
                        </select>
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="mb-3">
                        <label for="certificateIssued" class="form-label">Certificate Issued By</label>
                        <input type="text" class="form-control" id="certificateIssued" v-model="formData.certificateIssued">
                      </div>
                      <div class="mb-3">
                        <label for="certificateIssuedDate" class="form-label">Certificate Issue Date</label>
                        <input type="date" class="form-control" id="certificateIssuedDate" v-model="formData.certificateIssuedDate">
                      </div>
                      <div class="mb-3">
                        <label for="certificateExpiryDate" class="form-label">Certificate Expiry Date</label>
                        <input type="date" class="form-control" id="certificateExpiryDate" v-model="formData.certificateExpiryDate">
                      </div>
                    </div>
                  </div>
                  
                  <h5 class="mb-3">Additional Documents</h5>
                  <div v-for="(doc, index) in formData.documents" :key="index" class="document-item p-3 mb-3 border rounded">
                    <div class="d-flex justify-content-between align-items-center mb-3">
                      <h5 class="mb-0">Document #{{ index + 1 }}</h5>
                      <button type="button" class="btn btn-danger btn-sm" @click="removeDocument(index)">
                        <i class="bi bi-trash"></i> Remove
                      </button>
                    </div>
                    <div class="row g-3">
                      <div class="col-md-6">
                        <label :for="`docId-${index}`" class="form-label">Document Type</label>
                        <select class="form-select" :id="`docId-${index}`" v-model="doc.docId" required>
                          <option value="passport">Passport</option>
                          <option value="seamenBook">Seamen Book</option>
                          <option value="yellowFever">Yellow Fever</option>
                          <option value="visa">Visa</option>
                        </select>
                      </div>
                      <div class="col-md-6">
                        <label :for="`docNo-${index}`" class="form-label">Document Number</label>
                        <input type="text" class="form-control" :id="`docNo-${index}`" v-model="doc.docNo" required>
                      </div>
                      <div class="col-md-6">
                        <label :for="`docFile-${index}`" class="form-label">Document File</label>
                        <input type="file" class="form-control" :id="`docFile-${index}`" @change="handleDocFileUpload($event, index)">
                      </div>
                      <div class="col-md-6">
                        <label :for="`issued-${index}`" class="form-label">Issued By</label>
                        <input type="text" class="form-control" :id="`issued-${index}`" v-model="doc.issued">
                      </div>
                      <div class="col-md-6">
                        <label :for="`validDate-${index}`" class="form-label">Valid Date</label>
                        <input type="date" class="form-control" :id="`validDate-${index}`" v-model="doc.validDate">
                      </div>
                      <div class="col-md-6">
                        <label :for="`expiredDate-${index}`" class="form-label">Expiry Date</label>
                        <input type="date" class="form-control" :id="`expiredDate-${index}`" v-model="doc.expiredDate">
                      </div>
                      <div class="col-md-12">
                        <label :for="`remark-${index}`" class="form-label">Remarks</label>
                        <textarea class="form-control" :id="`remark-${index}`" v-model="doc.remark" rows="2"></textarea>
                      </div>
                    </div>
                  </div>
                  <button type="button" class="btn btn-primary" @click="addDocument">
                    <i class="bi bi-plus-circle"></i> Add Document
                  </button>
                </div>
                
                <div class="section-container mb-4">
                  <h4 class="section-title">
                    <i class="bi bi-rulers me-2"></i>Uniform Sizes
                  </h4>
                  <div class="row g-3">
                    <div class="col-md-4">
                      <label for="whiteShirt" class="form-label">White Shirt Size</label>
                      <select class="form-select" id="whiteShirt" v-model="formData.whiteShirt">
                        <option value="S">S</option>
                        <option value="M">M</option>
                        <option value="L">L</option>
                        <option value="XL">XL</option>
                        <option value="XXL">XXL</option>
                      </select>
                    </div>
                    <div class="col-md-4">
                      <label for="bluePants" class="form-label">Blue Pants Size</label>
                      <select class="form-select" id="bluePants" v-model="formData.bluePants">
                        <option value="S">S</option>
                        <option value="M">M</option>
                        <option value="L">L</option>
                        <option value="XL">XL</option>
                        <option value="XXL">XXL</option>
                      </select>
                    </div>
                    <div class="col-md-4">
                      <label for="overall" class="form-label">Overall Size</label>
                      <select class="form-select" id="overall" v-model="formData.overall">
                        <option value="S">S</option>
                        <option value="M">M</option>
                        <option value="L">L</option>
                        <option value="XL">XL</option>
                        <option value="XXL">XXL</option>
                      </select>
                    </div>
                    <div class="col-md-4">
                      <label for="safetyShoes" class="form-label">Safety Shoes Size</label>
                      <select class="form-select" id="safetyShoes" v-model="formData.safetyShoes">
                        <option value="39">39</option>
                        <option value="40">40</option>
                        <option value="41">41</option>
                        <option value="42">42</option>
                        <option value="43">43</option>
                        <option value="44">44</option>
                        <option value="45">45</option>
                      </select>
                    </div>
                    <div class="col-md-4">
                      <label for="winterJacket" class="form-label">Winter Jacket Size</label>
                      <select class="form-select" id="winterJacket" v-model="formData.winterJacket">
                        <option value="S">S</option>
                        <option value="M">M</option>
                        <option value="L">L</option>
                        <option value="XL">XL</option>
                        <option value="XXL">XXL</option>
                      </select>
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
                  <div v-for="(training, index) in formData.trainings" :key="index" class="training-item p-3 mb-3 border rounded">
                    <div class="d-flex justify-content-between align-items-center mb-3">
                      <h5 class="mb-0">Training #{{ index + 1 }}</h5>
                      <button type="button" class="btn btn-danger btn-sm" @click="removeTraining(index)">
                        <i class="bi bi-trash"></i> Remove
                      </button>
                    </div>
                    <div class="row g-3">
                      <div class="col-md-6">
                        <label :for="`trainingId-${index}`" class="form-label">Training Type</label>
                        <select class="form-select" :id="`trainingId-${index}`" v-model="training.trainingId" required>
                          <option value="basicSafety">Basic Safety Training</option>
                          <option value="advancedFireFighting">Advanced Fire Fighting</option>
                          <option value="medicalFirst">Medical First Aid</option>
                          <option value="survivalCraft">Survival Craft & Rescue Boats</option>
                          <option value="tankerFamiliarization">Tanker Familiarization</option>
                        </select>
                      </div>
                      <div class="col-md-6">
                        <label :for="`referenceId-${index}`" class="form-label">Reference ID</label>
                        <input type="text" class="form-control" :id="`referenceId-${index}`" v-model="training.referenceId">
                      </div>
                      <div class="col-md-6">
                        <label :for="`certificateNo-${index}`" class="form-label">Certificate Number</label>
                        <input type="text" class="form-control" :id="`certificateNo-${index}`" v-model="training.certificateNo">
                      </div>
                      <div class="col-md-3">
                        <label :for="`validDate-${index}`" class="form-label">Valid Date</label>
                        <input type="date" class="form-control" :id="`validDate-${index}`" v-model="training.validDate">
                      </div>
                      <div class="col-md-3">
                        <label :for="`expiredDate-${index}`" class="form-label">Expiry Date</label>
                        <input type="date" class="form-control" :id="`expiredDate-${index}`" v-model="training.expiredDate">
                      </div>
                    </div>
                  </div>
                  <button type="button" class="btn btn-primary" @click="addTraining">
                    <i class="bi bi-plus-circle"></i> Add Training
                  </button>
                </div>
              </div>
              
              <!-- Step 5: Experiences -->
              <div v-if="currentStep === 5" class="step-content">
                <div class="section-container mb-4">
                  <h4 class="section-title">
                    <i class="bi bi-water me-2"></i>Sea Experience
                  </h4>
                  <div v-for="(exp, index) in formData.experiences" :key="index" class="experience-item p-3 mb-3 border rounded">
                    <div class="d-flex justify-content-between align-items-center mb-3">
                      <h5 class="mb-0">Experience #{{ index + 1 }}</h5>
                      <button type="button" class="btn btn-danger btn-sm" @click="removeExperience(index)">
                        <i class="bi bi-trash"></i> Remove
                      </button>
                    </div>
                    <div class="row g-3">
                      <div class="col-md-6">
                        <label :for="`vessel-${index}`" class="form-label">Vessel Name</label>
                        <input type="text" class="form-control" :id="`vessel-${index}`" v-model="exp.vessel" required>
                      </div>
                      <div class="col-md-6">
                        <label :for="`vesselType-${index}`" class="form-label">Vessel Type</label>
                        <select class="form-select" :id="`vesselType-${index}`" v-model="exp.vesselType" required>
                          <option value="bulkCarrier">Bulk Carrier</option>
                          <option value="container">Container Ship</option>
                          <option value="tanker">Tanker</option>
                          <option value="lpg">LPG Carrier</option>
                          <option value="lng">LNG Carrier</option>
                          <option value="roro">Ro-Ro</option>
                          <option value="passenger">Passenger Ship</option>
                          <option value="generalCargo">General Cargo</option>
                        </select>
                      </div>
                      <div class="col-md-4">
                        <label :for="`flag-${index}`" class="form-label">Flag</label>
                        <select class="form-select" :id="`flag-${index}`" v-model="exp.flag">
                          <option value="id">Indonesia</option>
                          <option value="sg">Singapore</option>
                          <option value="pa">Panama</option>
                          <option value="li">Liberia</option>
                          <option value="mh">Marshall Islands</option>
                        </select>
                      </div>
                      <div class="col-md-4">
                        <label :for="`tradingAreaId-${index}`" class="form-label">Trading Area</label>
                        <select class="form-select" :id="`tradingAreaId-${index}`" v-model="exp.tradingAreaId">
                          <option value="worldwide">Worldwide</option>
                          <option value="asia">Asia</option>
                          <option value="europe">Europe</option>
                          <option value="americas">Americas</option>
                          <option value="africa">Africa</option>
                          <option value="domestic">Domestic</option>
                        </select>
                      </div>
                      <div class="col-md-4">
                        <label :for="`rank-${index}`" class="form-label">Rank</label>
                        <select class="form-select" :id="`rank-${index}`" v-model="exp.rank" required>
                          <option value="captain">Captain</option>
                          <option value="chiefOfficer">Chief Officer</option>
                          <option value="secondOfficer">Second Officer</option>
                          <option value="thirdOfficer">Third Officer</option>
                          <option value="chiefEngineer">Chief Engineer</option>
                          <option value="secondEngineer">Second Engineer</option>
                          <option value="thirdEngineer">Third Engineer</option>
                          <option value="fourthEngineer">Fourth Engineer</option>
                          <option value="bosun">Bosun</option>
                          <option value="abSeaman">AB Seaman</option>
                          <option value="ordinarySeaman">Ordinary Seaman</option>
                        </select>
                      </div>
                      <div class="col-md-4">
                        <label :for="`dwt-${index}`" class="form-label">DWT (Deadweight Tonnage)</label>
                        <input type="number" class="form-control" :id="`dwt-${index}`" v-model="exp.dwt">
                      </div>
                      <div class="col-md-4">
                        <label :for="`kwh-${index}`" class="form-label">Engine Power (kWh)</label>
                        <input type="number" class="form-control" :id="`kwh-${index}`" v-model="exp.kwh">
                      </div>
                      <div class="col-md-4">
                        <label :for="`owner-${index}`" class="form-label">Ship Owner/Company</label>
                        <input type="text" class="form-control" :id="`owner-${index}`" v-model="exp.owner">
                      </div>
                      <div class="col-md-6">
                        <label :for="`signOn-${index}`" class="form-label">Sign On Date</label>
                        <input type="date" class="form-control" :id="`signOn-${index}`" v-model="exp.signOn" required>
                      </div>
                      <div class="col-md-6">
                        <label :for="`signOff-${index}`" class="form-label">Sign Off Date</label>
                        <input type="date" class="form-control" :id="`signOff-${index}`" v-model="exp.signOff" required>
                      </div>
                      <div class="col-md-12">
                        <label :for="`signOffReason-${index}`" class="form-label">Sign Off Reason</label>
                        <input type="text" class="form-control" :id="`signOffReason-${index}`" v-model="exp.signOffReason">
                      </div>
                    </div>
                  </div>
                  <button type="button" class="btn btn-primary" @click="addExperience">
                    <i class="bi bi-plus-circle"></i> Add Sea Experience
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
                    v-if="currentStep === 5"
                  >
                    <i class="bi bi-send-check me-2"></i>Submit Application
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
  import { ref, reactive, onMounted } from 'vue';
  
  const currentStep = ref(1);
  const photoPreview = ref(null);
  const certificatePreview = ref(null);
  const photoInput = ref(null);
  const certificateInput = ref(null);
  
  const formData = reactive({
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
    documents: [
      {
        docId: '',
        docNo: '',
        docFile: null,
        issued: '',
        validDate: '',
        expiredDate: '',
        remark: ''
      }
    ],
    trainings: [
      {
        trainingId: '',
        referenceId: '',
        certificateNo: '',
        validDate: '',
        expiredDate: ''
      }
    ],
    experiences: [
      {
        vessel: '',
        vesselType: '',
        flag: '',
        tradingAreaId: '',
        rank: '',
        dwt: 0,
        kwh: 0,
        owner: '',
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
    const applyParam = urlParams.get('apply');
    
    if (applyParam) {
      // Map the URL parameter to the corresponding value in the dropdown
      const rankMap = {
        'Captain': 'captain',
        'Chief Officer': 'chiefOfficer',
        'Second Officer': 'secondOfficer',
        'Third Officer': 'thirdOfficer',
        'Fourth Officer': 'fourthEngineer',
        'Chief Engineer': 'chiefEngineer',
        'Second Engineer': 'secondEngineer',
        'Third Engineer': 'thirdEngineer',
        'Fourth Engineer': 'fourthEngineer',
        'Engineer': 'chiefEngineer', // Default to Chief Engineer if just "Engineer" is specified
        'Bosun': 'bosun',
        'AB Seaman': 'abSeaman',
        'Ordinary Seaman': 'ordinarySeaman'
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
      owner: '',
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
  
  const submitForm = () => {
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData);
    alert('Application submitted successfully!');
    // You could also reset the form or redirect the user
  };
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
  
  /* Photo & Certificate Upload */
  .photo-upload-container, .certificate-upload-container {
    margin-bottom: 20px;
  }
  
  .photo-placeholder, .certificate-placeholder {
    width: 150px;
    height: 150px;
    border-radius: 5px;
    background-color: #e9ecef;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
  }
  
  .photo-placeholder i, .certificate-placeholder i {
    font-size: 3rem;
    color: #adb5bd;
  }
  
  .photo-preview {
    width: 150px;
    height: 150px;
    border-radius: 5px;
    overflow: hidden;
    margin: 0 auto;
  }
  
  .photo-preview img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  
  .certificate-preview {
    width: 150px;
    height: 150px;
    border-radius: 5px;
    background-color: #e9ecef;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
    padding: 10px;
  }
  
  .certificate-preview i {
    font-size: 3rem;
    color: #0066cc;
    margin-bottom: 10px;
  }
  
  .certificate-preview p {
    font-size: 0.8rem;
    text-align: center;
    word-break: break-word;
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