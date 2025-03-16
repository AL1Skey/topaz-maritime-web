<template>
  <div class="maritime-form-container">
    <div class="container py-5">
      <div class="card shadow-lg border-0">
        <div class="card-header bg-primary text-white">
          <div class="d-flex align-items-center">
            <i class="bi bi-ship me-2 fs-3"></i>
            <h2 class="mb-0">Maritime Crew Application Form</h2>
          </div>
        </div>
        <div class="card-body">
          <form @submit.prevent="submitForm">
            <!-- Personal Information Section -->
            <div class="section-container mb-4">
              <h4 class="section-title">
                <i class="bi bi-person-badge me-2"></i>Personal Information
              </h4>
              <div class="row g-3">
                <div class="col-md-4">
                  <div class="form-floating">
                    <input type="text" class="form-control" id="name" v-model="formData.name" required>
                    <label for="name">Full Name</label>
                  </div>
                </div>
                <div class="col-md-4">
                  <div class="form-floating">
                    <input type="text" class="form-control" id="birthPlace" v-model="formData.birthPlace" required>
                    <label for="birthPlace">Birth Place</label>
                  </div>
                </div>
                <div class="col-md-4">
                  <div class="form-floating">
                    <input type="date" class="form-control" id="birthDate" v-model="formData.birthDate" required>
                    <label for="birthDate">Birth Date</label>
                  </div>
                </div>
                <div class="col-md-4">
                  <div class="form-floating">
                    <select class="form-select" id="sex" v-model="formData.sex" required>
                      <option :value="true">Male</option>
                      <option :value="false">Female</option>
                    </select>
                    <label for="sex">Sex</label>
                  </div>
                </div>
                <div class="col-md-4">
                  <div class="form-floating">
                    <select class="form-select" id="maritalStatusId" v-model="formData.maritalStatusId" required>
                      <option value="single">Single</option>
                      <option value="married">Married</option>
                      <option value="divorced">Divorced</option>
                      <option value="widowed">Widowed</option>
                    </select>
                    <label for="maritalStatusId">Marital Status</label>
                  </div>
                </div>
                <div class="col-md-4">
                  <div class="form-floating">
                    <input type="number" class="form-control" id="numberOfChild" v-model="formData.numberOfChild" min="0">
                    <label for="numberOfChild">Number of Children</label>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="form-floating">
                    <textarea class="form-control" id="address" v-model="formData.address" style="height: 100px" required></textarea>
                    <label for="address">Address</label>
                  </div>
                </div>
                <div class="col-md-3">
                  <div class="form-floating">
                    <input type="text" class="form-control" id="city" v-model="formData.city" required>
                    <label for="city">City</label>
                  </div>
                </div>
                <div class="col-md-3">
                  <div class="form-floating">
                    <input type="text" class="form-control" id="zipCode" v-model="formData.zipCode" required>
                    <label for="zipCode">Zip Code</label>
                  </div>
                </div>
                <div class="col-md-4">
                  <div class="form-floating">
                    <select class="form-select" id="countryId" v-model="formData.countryId" required>
                      <option value="id">Indonesia</option>
                      <option value="sg">Singapore</option>
                      <option value="my">Malaysia</option>
                      <option value="ph">Philippines</option>
                      <!-- Add more countries as needed -->
                    </select>
                    <label for="countryId">Country</label>
                  </div>
                </div>
                <div class="col-md-4">
                  <div class="form-floating">
                    <input type="tel" class="form-control" id="phoneNo" v-model="formData.phoneNo">
                    <label for="phoneNo">Phone Number</label>
                  </div>
                </div>
                <div class="col-md-4">
                  <div class="form-floating">
                    <input type="tel" class="form-control" id="handPhone" v-model="formData.handPhone" required>
                    <label for="handPhone">Mobile Phone</label>
                  </div>
                </div>
                <div class="col-md-4">
                  <div class="form-floating">
                    <input type="email" class="form-control" id="email" v-model="formData.email" required>
                    <label for="email">Email</label>
                  </div>
                </div>
                <div class="col-md-4">
                  <div class="form-floating">
                    <select class="form-select" id="religionId" v-model="formData.religionId">
                      <option value="islam">Islam</option>
                      <option value="christian">Christian</option>
                      <option value="catholic">Catholic</option>
                      <option value="hindu">Hindu</option>
                      <option value="buddhist">Buddhist</option>
                      <option value="other">Other</option>
                    </select>
                    <label for="religionId">Religion</label>
                  </div>
                </div>
                <div class="col-md-4">
                  <div class="form-floating">
                    <select class="form-select" id="bloodType" v-model="formData.bloodType">
                      <option value="A">A</option>
                      <option value="B">B</option>
                      <option value="AB">AB</option>
                      <option value="O">O</option>
                    </select>
                    <label for="bloodType">Blood Type</label>
                  </div>
                </div>
                <div class="col-md-4">
                  <div class="form-floating">
                    <select class="form-select" id="nationalityId" v-model="formData.nationalityId" required>
                      <option value="id">Indonesian</option>
                      <option value="sg">Singaporean</option>
                      <option value="my">Malaysian</option>
                      <option value="ph">Filipino</option>
                      <!-- Add more nationalities as needed -->
                    </select>
                    <label for="nationalityId">Nationality</label>
                  </div>
                </div>
              </div>
            </div>

            <!-- Professional Information Section -->
            <div class="section-container mb-4">
              <h4 class="section-title">
                <i class="bi bi-briefcase me-2"></i>Professional Information
              </h4>
              <div class="row g-3">
                <div class="col-md-4">
                  <div class="form-floating">
                    <select class="form-select" id="rankToApply" v-model="formData.rankToApply" required>
                      <!-- Deck Department -->
                      <optgroup label="Deck Department">
                        <option value="2110">MASTER</option>
                        <option value="2120">CHIEF OFFICER</option>
                        <option value="2130">SECOND OFFICER</option>
                        <option value="2140">THIRD OFFICER</option>
                        <option value="2150">SENIOR DECK CADET</option>
                      </optgroup>
                      
                      <!-- Engine Department -->
                      <optgroup label="Engine Department">
                        <option value="2210">CHIEF ENGINEER</option>
                        <option value="2220">SECOND ENGINEER</option>
                        <option value="2230">THIRD ENGINEER</option>
                        <option value="2240">FOURTH ENGINEER</option>
                        <option value="2250">SENIOR ENGINE CADET</option>
                        <option value="2260">ELECTRICIAN</option>
                      </optgroup>
                      
                      <!-- Deck Ratings -->
                      <optgroup label="Deck Ratings">
                        <option value="2300">PUMPMAN</option>
                        <option value="2320">Q/MASTER</option>
                        <option value="2330">SAILOR</option>
                        <option value="2340">BOSUN</option>
                      </optgroup>
                      
                      <!-- Engine Ratings -->
                      <optgroup label="Engine Ratings">
                        <option value="2420">OILER</option>
                        <option value="2430">WIPER</option>
                        <option value="2440">FITTER</option>
                      </optgroup>
                      
                      <!-- Catering/Other -->
                      <optgroup label="Catering & Other">
                        <option value="2510">CHIEF COOK</option>
                        <option value="2530">MESS BOY</option>
                        <option value="2560">CADET TEHNIK</option>
                        <option value="2570">CADET NAUTIC</option>
                        <option value="2580">CADET ELECTRICIAN</option>
                      </optgroup>
                    </select>
                    <label for="rankToApply">Rank to Apply</label>
                  </div>
                </div>
                <!-- Add this after the rankToApply select element -->
                <div class="col-md-12" v-if="formData.rankToApply">
                  <div class="alert alert-info">
                    <h6 class="alert-heading"><i class="bi bi-info-circle me-2"></i>Required Certificates:</h6>
                    <div class="row">
                      <div class="col-md-6">
                        <strong>COC ID:</strong> 
                        <span class="badge bg-primary me-1" v-for="(id, index) in requiredCertificates.cocId" :key="'id-'+index">
                          {{ id }}
                        </span>
                      </div>
                      <div class="col-md-6">
                        <strong>COC Type:</strong>
                        <span class="badge bg-secondary me-1" v-for="(type, index) in requiredCertificates.coc" :key="'type-'+index">
                          {{ type }}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-md-4">
                  <div class="form-floating">
                    <input type="date" class="form-control" id="rankApplyDate" v-model="formData.rankApplyDate">
                    <label for="rankApplyDate">Rank Apply Date</label>
                  </div>
                </div>
                <div class="col-md-4">
                  <div class="form-floating">
                    <select class="form-select" id="certificateId" v-model="formData.certificateId">
                      <option value="coc">Certificate of Competency (COC)</option>
                      <option value="goc">General Operator Certificate (GOC)</option>
                      <option value="stcw">STCW Certificate</option>
                      <!-- Add more certificate types as needed -->
                    </select>
                    <label for="certificateId">Certificate Type</label>
                  </div>
                </div>
                <div class="col-md-4">
                  <div class="form-floating">
                    <input type="text" class="form-control" id="certificateNo" v-model="formData.certificateNo">
                    <label for="certificateNo">Certificate Number</label>
                  </div>
                </div>
                <div class="col-md-4">
                  <div class="form-floating">
                    <select class="form-select" id="certificateStatusId" v-model="formData.certificateStatusId">
                      <option value="valid">Valid</option>
                      <option value="expired">Expired</option>
                      <option value="pending">Pending</option>
                    </select>
                    <label for="certificateStatusId">Certificate Status</label>
                  </div>
                </div>
                <div class="col-md-4">
                  <div class="form-floating">
                    <input type="text" class="form-control" id="certificateIssued" v-model="formData.certificateIssued">
                    <label for="certificateIssued">Certificate Issued By</label>
                  </div>
                </div>
                <div class="col-md-4">
                  <div class="form-floating">
                    <input type="date" class="form-control" id="certificateIssuedDate" v-model="formData.certificateIssuedDate">
                    <label for="certificateIssuedDate">Certificate Issue Date</label>
                  </div>
                </div>
                <div class="col-md-4">
                  <div class="form-floating">
                    <input type="date" class="form-control" id="certificateExpiryDate" v-model="formData.certificateExpiryDate">
                    <label for="certificateExpiryDate">Certificate Expiry Date</label>
                  </div>
                </div>
                <div class="col-md-4">
                  <label for="certificateDoc" class="form-label">Certificate Document</label>
                  <input type="file" class="form-control" id="certificateDoc" @change="handleFileUpload($event, 'certificateDoc')">
                </div>
              </div>
            </div>

            <!-- Physical Information Section -->
            <div class="section-container mb-4">
              <h4 class="section-title">
                <i class="bi bi-rulers me-2"></i>Physical Information & Uniform Sizes
              </h4>
              <div class="row g-3">
                <div class="col-md-3">
                  <div class="form-floating">
                    <input type="text" class="form-control" id="height" v-model="formData.height">
                    <label for="height">Height (cm)</label>
                  </div>
                </div>
                <div class="col-md-3">
                  <div class="form-floating">
                    <input type="text" class="form-control" id="weight" v-model="formData.weight">
                    <label for="weight">Weight (kg)</label>
                  </div>
                </div>
                <div class="col-md-3">
                  <label for="photo" class="form-label">Photo (4x6)</label>
                  <input type="file" class="form-control" id="photo" @change="handleFileUpload($event, 'photo')">
                </div>
                <div class="col-md-3">
                  <div class="form-floating">
                    <select class="form-select" id="whiteShirt" v-model="formData.whiteShirt">
                      <option value="S">S</option>
                      <option value="M">M</option>
                      <option value="L">L</option>
                      <option value="XL">XL</option>
                      <option value="XXL">XXL</option>
                    </select>
                    <label for="whiteShirt">White Shirt Size</label>
                  </div>
                </div>
                <div class="col-md-3">
                  <div class="form-floating">
                    <select class="form-select" id="bluePants" v-model="formData.bluePants">
                      <option value="S">S</option>
                      <option value="M">M</option>
                      <option value="L">L</option>
                      <option value="XL">XL</option>
                      <option value="XXL">XXL</option>
                    </select>
                    <label for="bluePants">Blue Pants Size</label>
                  </div>
                </div>
                <div class="col-md-3">
                  <div class="form-floating">
                    <select class="form-select" id="overall" v-model="formData.overall">
                      <option value="S">S</option>
                      <option value="M">M</option>
                      <option value="L">L</option>
                      <option value="XL">XL</option>
                      <option value="XXL">XXL</option>
                    </select>
                    <label for="overall">Overall Size</label>
                  </div>
                </div>
                <div class="col-md-3">
                  <div class="form-floating">
                    <select class="form-select" id="safetyShoes" v-model="formData.safetyShoes">
                      <option value="39">39</option>
                      <option value="40">40</option>
                      <option value="41">41</option>
                      <option value="42">42</option>
                      <option value="43">43</option>
                      <option value="44">44</option>
                      <option value="45">45</option>
                    </select>
                    <label for="safetyShoes">Safety Shoes Size</label>
                  </div>
                </div>
                <div class="col-md-3">
                  <div class="form-floating">
                    <select class="form-select" id="winterJacket" v-model="formData.winterJacket">
                      <option value="S">S</option>
                      <option value="M">M</option>
                      <option value="L">L</option>
                      <option value="XL">XL</option>
                      <option value="XXL">XXL</option>
                    </select>
                    <label for="winterJacket">Winter Jacket Size</label>
                  </div>
                </div>
              </div>
            </div>

            <!-- Documents Section -->
            <div class="section-container mb-4">
              <h4 class="section-title">
                <i class="bi bi-file-earmark-text me-2"></i>Documents
              </h4>
              <div v-for="(doc, index) in formData.documents" :key="index" class="document-item p-3 mb-3 border rounded">
                <div class="d-flex justify-content-between align-items-center mb-3">
                  <h5 class="mb-0">Document #{{ index + 1 }}</h5>
                  <button type="button" class="btn btn-danger btn-sm" @click="removeDocument(index)">
                    <i class="bi bi-trash"></i> Remove
                  </button>
                </div>
                <div class="row g-3">
                  <div class="col-md-4">
                    <div class="form-floating">
                      <select class="form-select" :id="`docId-${index}`" v-model="doc.docId" required>
                        <option value="passport">Passport</option>
                        <option value="seamenBook">Seamen Book</option>
                        <option value="yellowFever">Yellow Fever</option>
                        <option value="visa">Visa</option>
                        <!-- Add more document types as needed -->
                      </select>
                      <label :for="`docId-${index}`">Document Type</label>
                    </div>
                  </div>
                  <div class="col-md-4">
                    <div class="form-floating">
                      <input type="text" class="form-control" :id="`docNo-${index}`" v-model="doc.docNo" required>
                      <label :for="`docNo-${index}`">Document Number</label>
                    </div>
                  </div>
                  <div class="col-md-4">
                    <label :for="`docFile-${index}`" class="form-label">Document File</label>
                    <input type="file" class="form-control" :id="`docFile-${index}`" @change="handleDocFileUpload($event, index)">
                  </div>
                  <div class="col-md-4">
                    <div class="form-floating">
                      <input type="text" class="form-control" :id="`issued-${index}`" v-model="doc.issued">
                      <label :for="`issued-${index}`">Issued By</label>
                    </div>
                  </div>
                  <div class="col-md-4">
                    <div class="form-floating">
                      <input type="date" class="form-control" :id="`validDate-${index}`" v-model="doc.validDate">
                      <label :for="`validDate-${index}`">Valid Date</label>
                    </div>
                  </div>
                  <div class="col-md-4">
                    <div class="form-floating">
                      <input type="date" class="form-control" :id="`expiredDate-${index}`" v-model="doc.expiredDate">
                      <label :for="`expiredDate-${index}`">Expiry Date</label>
                    </div>
                  </div>
                  <div class="col-md-12">
                    <div class="form-floating">
                      <textarea class="form-control" :id="`remark-${index}`" v-model="doc.remark" style="height: 80px"></textarea>
                      <label :for="`remark-${index}`">Remarks</label>
                    </div>
                  </div>
                </div>
              </div>
              <button type="button" class="btn btn-primary" @click="addDocument">
                <i class="bi bi-plus-circle"></i> Add Document
              </button>
            </div>

            <!-- Trainings Section -->
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
                  <div class="col-md-4">
                    <div class="form-floating">
                      <select class="form-select" :id="`trainingId-${index}`" v-model="training.trainingId" required>
                        <option value="basicSafety">Basic Safety Training</option>
                        <option value="advancedFireFighting">Advanced Fire Fighting</option>
                        <option value="medicalFirst">Medical First Aid</option>
                        <option value="survivalCraft">Survival Craft & Rescue Boats</option>
                        <option value="tankerFamiliarization">Tanker Familiarization</option>
                        <!-- Add more training types as needed -->
                      </select>
                      <label :for="`trainingId-${index}`">Training Type</label>
                    </div>
                  </div>
                  <div class="col-md-4">
                    <div class="form-floating">
                      <input type="text" class="form-control" :id="`referenceId-${index}`" v-model="training.referenceId">
                      <label :for="`referenceId-${index}`">Reference ID</label>
                    </div>
                  </div>
                  <div class="col-md-4">
                    <div class="form-floating">
                      <input type="text" class="form-control" :id="`certificateNo-${index}`" v-model="training.certificateNo">
                      <label :for="`certificateNo-${index}`">Certificate Number</label>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="form-floating">
                      <input type="date" class="form-control" :id="`validDate-${index}`" v-model="training.validDate">
                      <label :for="`validDate-${index}`">Valid Date</label>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="form-floating">
                      <input type="date" class="form-control" :id="`expiredDate-${index}`" v-model="training.expiredDate">
                      <label :for="`expiredDate-${index}`">Expiry Date</label>
                    </div>
                  </div>
                </div>
              </div>
              <button type="button" class="btn btn-primary" @click="addTraining">
                <i class="bi bi-plus-circle"></i> Add Training
              </button>
            </div>

            <!-- Sea Experience Section -->
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
                  <div class="col-md-4">
                    <div class="form-floating">
                      <input type="text" class="form-control" :id="`vessel-${index}`" v-model="exp.vessel" required>
                      <label :for="`vessel-${index}`">Vessel Name</label>
                    </div>
                  </div>
                  <div class="col-md-4">
                    <div class="form-floating">
                      <select class="form-select" :id="`vesselType-${index}`" v-model="exp.vesselType" required>
                        <option value="bulkCarrier">Bulk Carrier</option>
                        <option value="container">Container Ship</option>
                        <option value="tanker">Tanker</option>
                        <option value="lpg">LPG Carrier</option>
                        <option value="lng">LNG Carrier</option>
                        <option value="roro">Ro-Ro</option>
                        <option value="passenger">Passenger Ship</option>
                        <option value="generalCargo">General Cargo</option>
                        <!-- Add more vessel types as needed -->
                      </select>
                      <label :for="`vesselType-${index}`">Vessel Type</label>
                    </div>
                  </div>
                  <div class="col-md-4">
                    <div class="form-floating">
                      <select class="form-select" :id="`flag-${index}`" v-model="exp.flag">
                        <option value="id">Indonesia</option>
                        <option value="sg">Singapore</option>
                        <option value="pa">Panama</option>
                        <option value="li">Liberia</option>
                        <option value="mh">Marshall Islands</option>
                        <!-- Add more flags as needed -->
                      </select>
                      <label :for="`flag-${index}`">Flag</label>
                    </div>
                  </div>
                  <div class="col-md-4">
                    <div class="form-floating">
                      <select class="form-select" :id="`tradingAreaId-${index}`" v-model="exp.tradingAreaId">
                        <option value="worldwide">Worldwide</option>
                        <option value="asia">Asia</option>
                        <option value="europe">Europe</option>
                        <option value="americas">Americas</option>
                        <option value="africa">Africa</option>
                        <option value="domestic">Domestic</option>
                      </select>
                      <label :for="`tradingAreaId-${index}`">Trading Area</label>
                    </div>
                  </div>
                  <div class="col-md-4">
                    <div class="form-floating">
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
                      <label :for="`rank-${index}`">Rank</label>
                    </div>
                  </div>
                  <div class="col-md-4">
                    <div class="form-floating">
                      <input type="number" class="form-control" :id="`dwt-${index}`" v-model="exp.dwt">
                      <label :for="`dwt-${index}`">DWT (Deadweight Tonnage)</label>
                    </div>
                  </div>
                  <div class="col-md-4">
                    <div class="form-floating">
                      <input type="number" class="form-control" :id="`kwh-${index}`" v-model="exp.kwh">
                      <label :for="`kwh-${index}`">Engine Power (kWh)</label>
                    </div>
                  </div>
                  <div class="col-md-4">
                    <div class="form-floating">
                      <input type="text" class="form-control" :id="`owner-${index}`" v-model="exp.owner">
                      <label :for="`owner-${index}`">Ship Owner/Company</label>
                    </div>
                  </div>
                  <div class="col-md-4">
                    <div class="form-floating">
                      <input type="date" class="form-control" :id="`signOn-${index}`" v-model="exp.signOn" required>
                      <label :for="`signOn-${index}`">Sign On Date</label>
                    </div>
                  </div>
                  <div class="col-md-4">
                    <div class="form-floating">
                      <input type="date" class="form-control" :id="`signOff-${index}`" v-model="exp.signOff" required>
                      <label :for="`signOff-${index}`">Sign Off Date</label>
                    </div>
                  </div>
                  <div class="col-md-12">
                    <div class="form-floating">
                      <input type="text" class="form-control" :id="`signOffReason-${index}`" v-model="exp.signOffReason">
                      <label :for="`signOffReason-${index}`">Sign Off Reason</label>
                    </div>
                  </div>
                </div>
              </div>
              <button type="button" class="btn btn-primary" @click="addExperience">
                <i class="bi bi-plus-circle"></i> Add Sea Experience
              </button>
            </div>

            <!-- Submit Button -->
            <div class="d-grid gap-2 col-md-6 mx-auto mt-4">
              <button type="submit" class="btn btn-success btn-lg">
                <i class="bi bi-send-check me-2"></i>Submit Application
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';

const formData = ref({
  name: '',
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
  email: '',
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

const positionRequirements = {
  '2110': { cocId: ['M1', 'M2'], coc: ['D CLASS I', 'D CLASS II'] },
  '2120': { cocId: ['M1', 'M2'], coc: ['D CLASS I', 'D CLASS II'] },
  '2130': { cocId: ['M2', 'M3'], coc: ['D CLASS II', 'D CLASS III'] },
  '2140': { cocId: ['M2', 'M3'], coc: ['D CLASS II', 'D CLASS III'] },
  '2150': { cocId: ['M3', 'OT'], coc: ['D CLASS III', 'OTHER'] },
  '2210': { cocId: ['KC', 'KB'], coc: ['E CLASS I', 'E CLASS II'] },
  '2220': { cocId: ['KC', 'KB'], coc: ['E CLASS I', 'E CLASS II'] },
  '2230': { cocId: ['KB', 'KA'], coc: ['E CLASS II', 'E CLASS III'] },
  '2240': { cocId: ['KA'], coc: ['E CLASS III'] },
  '2250': { cocId: ['KA', 'OT'], coc: ['E CLASS III', 'OTHER'] },
  '2260': { cocId: ['ET', 'KS', 'OT'], coc: ['ETO', 'E WATCHKEEPING', 'OTHER'] },
  '2300': { cocId: ['KD', 'OT'], coc: ['D WATCHKEEPING', 'OTHER'] },
  '2320': { cocId: ['KD', 'OT'], coc: ['D WATCHKEEPING', 'OTHER'] },
  '2330': { cocId: ['KD', 'OT'], coc: ['D WATCHKEEPING', 'OTHER'] },
  '2340': { cocId: ['KS', 'OT'], coc: ['E WATCHKEEPING', 'OTHER'] },
  '2420': { cocId: ['KS', 'OT'], coc: ['E WATCHKEEPING', 'OTHER'] },
  '2430': { cocId: ['KS', 'OT'], coc: ['E WATCHKEEPING', 'OTHER'] },
  '2440': { cocId: ['KS', 'OT'], coc: ['E WATCHKEEPING', 'OTHER'] },
  '2510': { cocId: ['NA', 'OT'], coc: ['NONE', 'OTHER'] },
  '2530': { cocId: ['NA', 'OT'], coc: ['NONE', 'OTHER'] },
  '2560': { cocId: ['NA'], coc: ['NONE'] },
  '2570': { cocId: ['NA'], coc: ['NONE'] },
  '2580': { cocId: ['NA'], coc: ['NONE'] }
};

const requiredCertificates = computed(() => {
  return positionRequirements[formData.value.rankToApply] || { cocId: [], coc: [] };
});

const handleFileUpload = (event, field) => {
  formData.value[field] = event.target.files[0];
};

const handleDocFileUpload = (event, index) => {
  formData.value.documents[index].docFile = event.target.files[0];
};

const addDocument = () => {
  formData.value.documents.push({
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
  formData.value.documents.splice(index, 1);
  if (formData.value.documents.length === 0) {
    addDocument();
  }
};

const addTraining = () => {
  formData.value.trainings.push({
    trainingId: '',
    referenceId: '',
    certificateNo: '',
    validDate: '',
    expiredDate: ''
  });
};

const removeTraining = (index) => {
  formData.value.trainings.splice(index, 1);
  if (formData.value.trainings.length === 0) {
    addTraining();
  }
};

const addExperience = () => {
  formData.value.experiences.push({
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
  formData.value.experiences.splice(index, 1);
  if (formData.value.experiences.length === 0) {
    addExperience();
  }
};

const submitForm = () => {
  // Here you would typically send the form data to your backend
  console.log('Form submitted:', formData.value);
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
  background: linear-gradient(135deg, #1e3c72 0%, #2a5298 100%);
  padding: 1.5rem;
}

.section-container {
  background-color: #f8f9fa;
  border-radius: 8px;
  padding: 1.5rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
}

.section-title {
  color: #1e3c72;
  border-bottom: 2px solid #1e3c72;
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
  background-color: #1e3c72;
  border-color: #1e3c72;
}

.btn-primary:hover {
  background-color: #2a5298;
  border-color: #2a5298;
}

.btn-success {
  background: linear-gradient(135deg, #1e8449 0%, #27ae60 100%);
  border: none;
  font-weight: bold;
  padding: 12px 24px;
  transition: all 0.3s ease;
}

.btn-success:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 12px rgba(39, 174, 96, 0.3);
}

@media (max-width: 768px) {
  .card-header {
    padding: 1rem;
  }
  
  .section-container {
    padding: 1rem;
  }
  
  .btn-success {
    padding: 10px 20px;
  }
}
</style>

