<template>
  <div class="maritime-form-container">
    <div class="py-5" style="width: 80%; margin: auto">
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
          <div
            class="step-item"
            :class="{ active: currentStep === 1 }"
            @click="goToStep(1)"
          >
            <div class="step-number">1</div>
            <div class="step-text">Applied Position</div>
          </div>
          <div
            class="step-item"
            :class="{ active: currentStep === 2 }"
            @click="goToStep(2)"
          >
            <div class="step-number">2</div>
            <div class="step-text">Personal Data</div>
          </div>
          <div
            class="step-item"
            :class="{ active: currentStep === 3 }"
            @click="goToStep(3)"
          >
            <div class="step-number">3</div>
            <div class="step-text">Documents</div>
          </div>
          <div
            class="step-item"
            :class="{ active: currentStep === 4 }"
            @click="goToStep(4)"
          >
            <div class="step-number">4</div>
            <div class="step-text">Trainings</div>
          </div>
          <div
            class="step-item"
            :class="{ active: currentStep === 5 }"
            @click="goToStep(5)"
          >
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
                    <label for="rankToApply" class="form-label"
                      >Rank to Apply</label
                    >
                    <select
                      class="form-select"
                      id="rankToApply"
                      v-model="formData.rankToApply"
                      required
                    >
                      <option v-for="(key1, value) of rankMap" :value="key1">
                        {{ value }}
                      </option>
                    </select>
                  </div>
                  <div class="col-md-6">
                    <label for="rankApplyDate" class="form-label"
                      >Application Date</label
                    >
                    <input
                      type="date"
                      class="form-control"
                      id="rankApplyDate"
                      disabled="true"
                      v-model="formData.rankApplyDate"
                      readonly
                    />
                  </div>
                  <!-- Physical Information Section -->
                  <div class="section-container mb-4">
                    <h4 class="section-title">
                      <i class="bi bi-rulers me-2"></i>Physical Information &
                      Uniform Sizes
                    </h4>
                    <div class="row g-3">
                      <!-- <div class="col-md-3">
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
                      </div> -->
                      <!-- <div class="col-md-3">
                        <label for="photo" class="form-label">Photo (4x6)</label>
                        <input type="file" class="form-control" id="photo" @change="handleFileUpload($event, 'photo')">
                      </div> -->
                      <div class="col-md-3">
                        <div class="form-floating">
                          <select
                            class="form-select"
                            id="whiteShirt"
                            v-model="formData.whiteShirt"
                          >
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
                          <select
                            class="form-select"
                            id="bluePants"
                            v-model="formData.bluePants"
                          >
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
                          <select
                            class="form-select"
                            id="overall"
                            v-model="formData.overall"
                          >
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
                          <select
                            class="form-select"
                            id="safetyShoes"
                            v-model="formData.safetyShoes"
                          >
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
                          <select
                            class="form-select"
                            id="winterJacket"
                            v-model="formData.winterJacket"
                          >
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
                </div>
              </div>
            </div>

            <!-- Step 2: Personal Information -->
            <div v-if="currentStep === 2" class="step-content">
              <div class="row">
                <div class="">
                  <div class="section-container mb-4">
                    <h4 class="section-title">
                      <i class="bi bi-person-badge me-2"></i>Personal
                      Information
                    </h4>
                    <div class="row g-3">
                      <div class="col-md-6">
                        <label for="name" class="form-label">Full Name</label>
                        <input
                          type="text"
                          class="form-control"
                          id="name"
                          v-model="formData.name"
                          required
                        />
                      </div>
                      <div class="col-md-6">
                        <label for="email" class="form-label">Email</label>
                        <input
                          type="email"
                          class="form-control"
                          id="email"
                          v-model="formData.email"
                          required
                        />
                      </div>
                      <div class="col-md-6">
                        <label for="birthPlace" class="form-label"
                          >Birth Place</label
                        >
                        <input
                          type="text"
                          class="form-control"
                          id="birthPlace"
                          v-model="formData.birthPlace"
                          required
                        />
                      </div>
                      <div class="col-md-6">
                        <label for="birthDate" class="form-label"
                          >Birth Date</label
                        >
                        <input
                          type="date"
                          class="form-control"
                          id="birthDate"
                          v-model="formData.birthDate"
                          required
                        />
                      </div>
                      <div class="col-md-6">
                        <label class="form-label">Gender</label>
                        <div>
                          <div class="form-check form-check-inline">
                            <input
                              class="form-check-input"
                              type="radio"
                              name="sex"
                              id="male"
                              :value="true"
                              v-model="formData.sex"
                            />
                            <label class="form-check-label" for="male"
                              >Male</label
                            >
                          </div>
                          <div class="form-check form-check-inline">
                            <input
                              class="form-check-input"
                              type="radio"
                              name="sex"
                              id="female"
                              :value="false"
                              v-model="formData.sex"
                            />
                            <label class="form-check-label" for="female"
                              >Female</label
                            >
                          </div>
                        </div>
                      </div>
                      <div class="col-md-6">
                        <label for="maritalStatusId" class="form-label"
                          >Marital Status</label
                        >
                        <select
                          class="form-select"
                          id="maritalStatusId"
                          v-model="formData.maritalStatusId"
                          required
                        >
                          <option value="1">Single</option>
                          <option value="2">Married</option>
                          <option value="3">Spouse</option>
                        </select>
                      </div>
                      <div class="col-md-6">
                        <label for="numberOfChild" class="form-label"
                          >Number of Children</label
                        >
                        <input
                          type="number"
                          class="form-control"
                          id="numberOfChild"
                          v-model="formData.numberOfChild"
                          min="0"
                        />
                      </div>
                      <div class="col-md-6">
                        <label for="religionId" class="form-label"
                          >Religion</label
                        >
                        <select
                          class="form-select"
                          id="religionId"
                          v-model="formData.religionId"
                        >
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
                        <label for="bloodType" class="form-label"
                          >Blood Type</label
                        >
                        <select
                          class="form-select"
                          id="bloodType"
                          v-model="formData.bloodType"
                        >
                          <option value="A">A</option>
                          <option value="B">B</option>
                          <option value="AB">AB</option>
                          <option value="O">O</option>
                        </select>
                      </div>
                      <div class="col-md-6">
                        <label for="weight" class="form-label"
                          >Weight (kg)</label
                        >
                        <div class="input-group">
                          <input
                            type="text"
                            class="form-control"
                            id="weight"
                            v-model="formData.weight"
                          />
                          <span class="input-group-text">Kg</span>
                        </div>
                      </div>
                      <div class="col-md-6">
                        <label for="height" class="form-label"
                          >Height (cm)</label
                        >
                        <div class="input-group">
                          <input
                            type="text"
                            class="form-control"
                            id="height"
                            v-model="formData.height"
                          />
                          <span class="input-group-text">Cm</span>
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="form-check mt-4">
                          <input
                            class="form-check-input"
                            type="checkbox"
                            id="isElementary"
                            v-model="formData.isElementary"
                          />
                          <label class="form-check-label" for="isElementary"
                            >Elementary</label
                          >
                        </div>
                      </div>
                     <!--- <div class="col-md-6">
                        <label for="rank" class="form-label">Rank</label>
                        <select
                          class="form-select"
                          id="rank"
                          v-model="formData.rank"
                          required
                        >
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
                      </div>-->
                    </div>
                  </div>

                  <div class="section-container mb-4">
                    <h4 class="section-title">
                      <i class="bi bi-geo-alt me-2"></i>Contact Information
                    </h4>
                    <div class="row g-3">
                      <div class="col-md-12">
                        <label for="address" class="form-label">Address</label>
                        <textarea
                          class="form-control"
                          id="address"
                          v-model="formData.address"
                          rows="2"
                          required
                        ></textarea>
                      </div>
                      <div class="col-md-4">
                        <label for="city" class="form-label">City</label>
                        <input
                          type="text"
                          class="form-control"
                          id="city"
                          v-model="formData.city"
                          required
                        />
                      </div>
                      <div class="col-md-4">
                        <label for="zipCode" class="form-label">Zip Code</label>
                        <input
                          type="number"
                          class="form-control"
                          id="zipCode"
                          v-model="formData.zipCode"
                          maxlength="5"
                          required
                        />
                      </div>
                      <div class="col-md-4">
                        <label for="countryId" class="form-label"
                          >Country</label
                        >
                        <select
                          class="form-select"
                          id="countryId"
                          v-model="formData.countryId"
                          required
                        >
                          <option value="id">Indonesia</option>
                          <option value="sg">Singapore</option>
                          <option value="my">Malaysia</option>
                          <option value="ph">Philippines</option>
                        </select>
                      </div>
                      <div class="col-md-6">
                        <label for="phoneNo" class="form-label"
                          >Phone Number</label
                        >
                        <input
                          type="tel"
                          class="form-control"
                          id="phoneNo"
                          v-model="formData.phoneNo"
                        />
                      </div>
                      <div class="col-md-6">
                        <label for="handPhone" class="form-label"
                          >Mobile Phone</label
                        >
                        <input
                          type="tel"
                          class="form-control"
                          id="handPhone"
                          v-model="formData.handPhone"
                          required
                        />
                      </div>
                      <div class="col-md-6">
                        <label for="email" class="form-label"
                          >Email Address</label
                        >
                        <input
                          type="email"
                          class="form-control"
                          id="email"
                          v-model="formData.email"
                          required
                        />
                      </div>
                      <div class="col-md-6">
                        <label for="nationalityId" class="form-label"
                          >Nationality</label
                        >
                        <select
                          class="form-select"
                          id="nationalityId"
                          v-model="formData.nationalityId"
                          required
                        >
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
                        <label for="nextOfKinName" class="form-label"
                          >Name of Next of Kin</label
                        >
                        <input
                          type="text"
                          class="form-control"
                          id="nextOfKinName"
                          v-model="formData.nextOfKinName"
                        />
                      </div>
                      <div class="col-md-6">
                        <label for="relationship" class="form-label"
                          >Relationship</label
                        >
                        <select
                          class="form-select"
                          id="relationship"
                          v-model="formData.relationship"
                        >
                          <option
                            v-for="(key1, value) of relationshipOptions"
                            :value="value"
                          >
                            {{ key1 }}
                          </option>
                        </select>
                      </div>
                      <div class="col-md-12">
                        <label for="nextOfKinAddress" class="form-label"
                          >Address of Next of Kin</label
                        >
                        <textarea
                          class="form-control"
                          id="nextOfKinAddress"
                          v-model="formData.nextOfKinAddress"
                          rows="2"
                        ></textarea>
                      </div>
                      <div class="col-md-6">
                        <label for="nextOfKinCity" class="form-label"
                          >City</label
                        >
                        <input
                          type="text"
                          class="form-control"
                          id="nextOfKinCity"
                          v-model="formData.nextOfKinCity"
                        />
                      </div>
                      <div class="col-md-6">
                        <label for="nextOfKinZipCode" class="form-label"
                          >ZIP Code</label
                        >
                        <input
                          type="number"
                          class="form-control"
                          id="nextOfKinZipCode"
                          maxlength="5"
                          v-model="formData.nextOfKinZipCode"
                        />
                      </div>
                      <div class="col-md-6">
                        <label for="nextOfKinPhone" class="form-label"
                          >NOK Phone No</label
                        >
                        <input
                          type="tel"
                          class="form-control"
                          id="nextOfKinPhone"
                          v-model="formData.nextOfKinPhone"
                        />
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
                            <select
                              class="form-select"
                              v-model="formData.cocType"
                            >
                              <option
                                v-for="option in cocOptions"
                                :value="option.value"
                              >
                                {{ option.text }}
                              </option>
                            </select>
                          </div>
                        </td>
                        <td>
                          <input
                            style="transform: translateY(1.2rem)"
                            type="text"
                            class="form-control"
                            v-model="formData.docNo"
                          />
                        </td>
                        <td>
                          <input
                            style="transform: translateY(1.2rem)"
                            type="text"
                            class="form-control"
                            v-model="formData.certificateIssued"
                          />
                        </td>
                        <td>
                          <input
                            style="transform: translateY(1.2rem)"
                            type="date"
                            class="form-control"
                            v-model="formData.certificateIssuedDate"
                          />
                        </td>
                        <td>
                          <input
                            style="transform: translateY(1.2rem)"
                            type="date"
                            class="form-control"
                            v-model="formData.certificateExpiryDate"
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <p>Passport</p>
                          <input
                            type="file"
                            name="passportFile"
                            @change="handlePassportUpload"
                            accept="application/pdf,image/*"
                          />
                        </td>
                        <td>
                          <input
                            style="transform: translateY(1.2rem)"
                            type="text"
                            class="form-control"
                            v-model="formData.passport.docNo"
                          />
                        </td>
                        <td>
                          <input
                            style="transform: translateY(1.2rem)"
                            type="text"
                            class="form-control"
                            v-model="formData.passport.issued"
                          />
                        </td>
                        <td>
                          <input
                            style="transform: translateY(1.2rem)"
                            type="date"
                            class="form-control"
                            v-model="formData.passport.issuedDate"
                          />
                        </td>
                        <td>
                          <input
                            style="transform: translateY(1.2rem)"
                            type="date"
                            class="form-control"
                            v-model="formData.passport.expiredDate"
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <p>Seamen Book</p>
                          <input
                            type="file"
                            name="seamenBookFile"
                            @change="handleSeamenBookUpload"
                            accept="application/pdf,image/*"
                          />
                        </td>
                        <td>
                          <input
                            style="transform: translateY(1.2rem)"
                            type="text"
                            class="form-control"
                            v-model="formData.seamen.docNo"
                          />
                        </td>
                        <td>
                          <input
                            style="transform: translateY(1.2rem)"
                            type="text"
                            class="form-control"
                            v-model="formData.seamen.issued"
                          />
                        </td>
                        <td>
                          <input
                            style="transform: translateY(1.2rem)"
                            type="date"
                            class="form-control"
                            v-model="formData.seamen.issuedDate"
                          />
                        </td>
                        <td>
                          <input
                            style="transform: translateY(1.2rem)"
                            type="date"
                            class="form-control"
                            v-model="formData.seamen.expiredDate"
                          />
                        </td>
                      </tr>
                      <!-- <tr>
                        <td>USA Visa</td>
                        <td>
                          <input
                            type="text"
                            class="form-control"
                            v-model="formData.usaVisa.docNo"
                          />
                        </td>
                        <td>
                          <input
                            type="text"
                            class="form-control"
                            v-model="formData.usaVisa.issued"
                          />
                        </td>
                        <td>
                          <input
                            type="date"
                            class="form-control"
                            v-model="formData.usaVisa.issuedDate"
                          />
                        </td>
                        <td>
                          <input
                            type="date"
                            class="form-control"
                            v-model="formData.usaVisa.expiredDate"
                          />
                        </td>
                      </tr> -->
                      <!-- <tr>
                        <td>Singapore Visa</td>
                        <td>
                          <input
                            type="text"
                            class="form-control"
                            v-model="formData.singaporeVisa.docNo"
                          />
                        </td>
                        <td>
                          <input
                            type="text"
                            class="form-control"
                            v-model="formData.singaporeVisa.issued"
                          />
                        </td>
                        <td>
                          <input
                            type="date"
                            class="form-control"
                            v-model="formData.singaporeVisa.issuedDate"
                          />
                        </td>
                        <td>
                          <input
                            type="date"
                            class="form-control"
                            v-model="formData.singaporeVisa.expiredDate"
                          />
                        </td>
                      </tr> -->
                      <tr>
                        <td>Certificate of Endorsement State (COE)</td>
                        <td>
                          <input
                            type="text"
                            class="form-control"
                            v-model="formData.coe.docNo"
                          />
                        </td>
                        <td>
                          <input
                            type="text"
                            class="form-control"
                            v-model="formData.coe.issued"
                          />
                        </td>
                        <td>
                          <input
                            type="date"
                            class="form-control"
                            v-model="formData.coe.issuedDate"
                          />
                        </td>
                        <td>
                          <input
                            type="date"
                            class="form-control"
                            v-model="formData.coe.expiredDate"
                          />
                        </td>
                      </tr>
                      <!-- <tr>
                        <td>Certificate of Endorsement State (GOC)</td>
                        <td>
                          <input
                            type="text"
                            class="form-control"
                            v-model="formData.goc.docNo"
                          />
                        </td>
                        <td>
                          <input
                            type="text"
                            class="form-control"
                            v-model="formData.goc.issued"
                          />
                        </td>
                        <td>
                          <input
                            type="date"
                            class="form-control"
                            v-model="formData.goc.issuedDate"
                          />
                        </td>
                        <td>
                          <input
                            type="date"
                            class="form-control"
                            v-model="formData.goc.expiredDate"
                          />
                        </td>
                      </tr> -->
                      <tr>
                        <td>NPWP</td>
                        <td>
                          <input
                            type="text"
                            class="form-control"
                            v-model="formData.npwp.docNo"
                          />
                        </td>
                        <td>
                          <input
                            type="text"
                            class="form-control"
                            v-model="formData.npwp.issued"
                          />
                        </td>
                        <td>
                          <input
                            type="date"
                            class="form-control"
                            v-model="formData.npwp.issuedDate"
                          />
                        </td>
                        <td>
                          <input
                            type="date"
                            class="form-control"
                            v-model="formData.npwp.expiredDate"
                          />
                        </td>
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
                      <label for="photoUpload" class="form-label"
                        >Candidate Photo</label
                      >
                      <input
                        type="file"
                        class="form-control"
                        id="photoUpload"
                        name="photo"
                        @change="handlePhotoUpload"
                        accept="image/*"
                      />
                      <div class="form-text">
                        Upload a recent passport-style photo (JPG, PNG, max 2MB)
                      </div>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="text-center">
                      <div v-if="photoPreview" class="photo-preview mb-2">
                        <img
                          :src="photoPreview"
                          alt="Candidate Photo"
                          class="img-fluid rounded"
                          style="max-height: 150px"
                        />
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
                  <i class="bi bi-mortarboard me-2"></i>Trainings &
                  Certifications
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
                      <tr
                        v-for="(training, index) in formData.standardTrainings"
                        :key="`std-${index}`"
                      >
                        <td>{{ training.name }}</td>
                        <td>
                          <input
                            type="text"
                            class="form-control"
                            v-model="training.qualificationNo"
                          />
                        </td>
                        <td>
                          <input
                            type="date"
                            class="form-control"
                            v-model="training.issuedDate"
                          />
                        </td>
                        <td>
                          <input
                            type="date"
                            class="form-control"
                            v-model="training.expiredDate"
                          />
                        </td>
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
                        <th style="width: 15rem">Rank</th>
                        <th>Vessel Type</th>
                        <th>Vessel Company</th>
                        <th style="width: 6rem">DWT</th>
                        <th style="width: 6rem">KWH</th>
                        <th>Sign On</th>
                        <th>Sign Off</th>
                        <th>Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr
                        v-for="(exp, index) in formData.experiences"
                        :key="index"
                      >
                        <td>
                          <input
                            type="text"
                            class="form-control"
                            v-model="exp.vessel"
                          />
                        </td>
                        <td>
                          <select class="form-select" v-model="exp.rank">
                            <option
                              v-for="(key1, value) of rankMap"
                              :value="key1"
                            >
                              {{ value }}
                            </option>
                          </select>
                        </td>
                        <td>
                          <select class="form-select" v-model="exp.vesselType">
                            <option value="C0">Chemical</option>
                            <option value="C2">LPG</option>

                            <option value="C5">Bulk Carrier</option>

                            <option value="C6">General Cargo</option>

                            <option value="C7">Container</option>

                            <option value="C8">Ro-Ro</option>

                            <option value="C9">Tug Boat</option>

                            <option value="C4">Other</option>
                            <option value="C32">RIG Vessel</option>
                            <option value="C31">Fishing Boat</option>
                            <option value="C30">Reefer Carrier</option>
                            <option value="C29">Oil/Chemical</option>
                            <option value="C28">Offshore</option>
                            <option value="C27">Crane Barge</option>
                            <option value="C26">VLCC</option>
                            <option value="C25">Offshore Survey</option>
                            <option value="C24">Cement Carrier</option>
                            <option value="C23">Bunker</option>
                            <option value="C22">Floating Crane</option>
                            <option value="C21">Crew Boat</option>
                            <option value="C20">Utility</option>
                            <option value="C19">LCT</option>
                            <option value="C18">Bitumen</option>
                            <option value="C17">Asphalt</option>
                            <option value="C16">AHTS</option>
                            <option value="C15">Passenger</option>
                            <option value="C14">Cruisser</option>
                            <option value="C13">LNG</option>
                            <option value="C12">FSO</option>
                            <option value="C11">FPSO</option>
                            <option value="C10">Supply Vessel</option>
                          </select>
                        </td>
                        <td>
                          <input
                            type="text"
                            class="form-control"
                            v-model="exp.company"
                          />
                        </td>
                        <td>
                          <input
                            type="number"
                            class="form-control"
                            v-model="exp.dwt"
                          />
                        </td>
                        <td>
                          <input
                            type="number"
                            class="form-control"
                            v-model="exp.kwh"
                          />
                        </td>
                        <td>
                          <input
                            type="date"
                            class="form-control"
                            v-model="exp.signOn"
                          />
                        </td>
                        <td>
                          <input
                            type="date"
                            class="form-control"
                            v-model="exp.signOff"
                          />
                        </td>
                        <td>
                          <button
                            type="button"
                            class="btn btn-danger btn-sm"
                            @click="removeExperience(index)"
                          >
                            <i class="bi bi-trash"></i>Delete
                          </button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div
                class="section-container mb-4"
                style="background-color: white; box-shadow: none"
              >
                <button
                  type="button"
                  class="btn btn-primary"
                  style="padding: 0.6rem"
                  @click="addExperience"
                >
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
                  style="padding: 15px 30px"
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
import { ref, reactive, onMounted, computed } from "vue";

const api = useApi(null, "multipart/form-data", false);
const currentStep = ref(1);
const photoPreview = ref(null);
const certificatePreview = ref(null);
const photoInput = ref(null);
const certificateInput = ref(null);

// Update the formData object in the script section to include the new fields
const formData = reactive({
  // Existing fields
  candidateId: "",
  agentId: "",
  name: "",
  email: "",
  birthPlace: "",
  birthDate: "",
  sex: true,
  maritalStatusId: "",
  numberOfChild: 0,
  address: "",
  city: "",
  zipCode: "",
  countryId: "",
  phoneNo: "",
  handPhone: "",
  religionId: "",
  bloodType: "",
  nationalityId: "",
  rankToApply: "",
  rankApplyDate: "",
  certificateId: "",
  certificateNo: "",
  certificateStatusId: "",
  certificateIssued: "",
  certificateIssuedDate: "",
  certificateExpiryDate: "",
  certificateDoc: null,
  photo: null,
  height: "",
  weight: "",
  whiteShirt: "",
  bluePants: "",
  overall: "",
  safetyShoes: "",
  winterJacket: "",

  // New fields for Personal Data
  manningAgent: "TOPAZ MARITIME",
  nextOfKinName: "",
  nextOfKinAddress: "",
  nextOfKinCity: "",
  nextOfKinZipCode: "",
  nextOfKinPhone: "",
  relationship: "",
  isElementary: false,
  rank: "",

  // New fields for Documents
  cocType: "",
  passport: {
    docNo: "",
    issued: "",
    issuedDate: "",
    expiredDate: "",
    file: null,
  },
  seamen: {
    docNo: "",
    issued: "",
    issuedDate: "",
    expiredDate: "",
    file: null,
  },
  usaVisa: {
    docNo: "",
    issued: "",
    issuedDate: "",
    expiredDate: "",
  },
  singaporeVisa: {
    docNo: "",
    issued: "",
    issuedDate: "",
    expiredDate: "",
  },
  coe: {
    docNo: "",
    issued: "",
    issuedDate: "",
    expiredDate: "",
  },
  goc: {
    docNo: "",
    issued: "",
    issuedDate: "",
    expiredDate: "",
  },
  npwp: {
    docNo: "",
    issued: "",
    issuedDate: "",
    expiredDate: "",
  },

  // New fields for Trainings - Updated based on PDF
  standardTrainings: [
    {
      trainingId: "TN016",
      name: "ADV. TRAINING FOR CHEMICAL TRAINING CARGO OPERATIONS (Table A-V/1-1-3)",
      qualificationNo: "",
      issuedDate: "",
      expiredDate: "",
    },
    {
      trainingId: "TN035",
      name: "ADV. TRAINING FOR GAS TANKER CARGO OPERATIONS (Table A-V/1-2-2)",
      qualificationNo: "",
      issuedDate: "",
      expiredDate: "",
    },
    {
      trainingId: "TN017",
      name: "ADV. TRAINING FOR OIL TANKER CARGO OPERATIONS (Table A-V/1-1-2)",
      qualificationNo: "",
      issuedDate: "",
      expiredDate: "",
    },
    {
      trainingId: "TN370",
      name: "ADV. SCAFOLLDING",
      qualificationNo: "",
      issuedDate: "",
      expiredDate: "",
    },
    {
      trainingId: "TN001",
      name: "ADVANCED FIRE FIGHTING (Reg. VI/3)",
      qualificationNo: "",
      issuedDate: "",
      expiredDate: "",
    },
    {
      trainingId: "TN384",
      name: "AERONAUTICAL OFFICER (ARO)",
      qualificationNo: "",
      issuedDate: "",
      expiredDate: "",
    },
    {
      trainingId: "TN031",
      name: "ARPA SIMULATOR",
      qualificationNo: "",
      issuedDate: "",
      expiredDate: "",
    },
    {
      trainingId: "TN417",
      name: "AUTOMATIC RADAR PLOTTING AID",
      qualificationNo: "",
      issuedDate: "",
      expiredDate: "",
    },
    {
      trainingId: "TN291",
      name: "AUTOMATION",
      qualificationNo: "",
      issuedDate: "",
      expiredDate: "",
    },
    {
      trainingId: "TN285",
      name: "AUXILIARY ENGINE",
      qualificationNo: "",
      issuedDate: "",
      expiredDate: "",
    },
    {
      trainingId: "TN013",
      name: "BASIC COOKING (MLC 2006)",
      qualificationNo: "",
      issuedDate: "",
      expiredDate: "",
    },
    {
      trainingId: "TN250",
      name: "BASIC FIRE FIGHTING",
      qualificationNo: "",
      issuedDate: "",
      expiredDate: "",
    },
    {
      trainingId: "TN253",
      name: "BASIC FIRST AID & CPR",
      qualificationNo: "",
      issuedDate: "",
      expiredDate: "",
    },
    {
      trainingId: "TN234",
      name: "BASIC OFFSHORE SURVIVAL TRAINING (BOST)",
      qualificationNo: "",
      issuedDate: "",
      expiredDate: "",
    },
    {
      trainingId: "TN224",
      name: "BASIC PROPERTY OIL & CHEMICAL",
      qualificationNo: "",
      issuedDate: "",
      expiredDate: "",
    },
    {
      trainingId: "TN000",
      name: "BASIC SAFETY TRAINING (Reg.VI/1-4)",
      qualificationNo: "",
      issuedDate: "",
      expiredDate: "",
    },
    {
      trainingId: "TN238",
      name: "BASIC SEA SURVIVAL (BSS)",
      qualificationNo: "",
      issuedDate: "",
      expiredDate: "",
    },
    {
      trainingId: "TN207",
      name: "BASIC TRAINING FOR LIQUEFID GAS TANKER CARGO OPERATIONS (A-V/1-2-1)",
      qualificationNo: "",
      issuedDate: "",
      expiredDate: "",
    },
    {
      trainingId: "TN316",
      name: "BASIC TRAINING FOR OIL AND CHEMICAL TANKER CARGO OPERATIONS PROGAM",
      qualificationNo: "",
      issuedDate: "",
      expiredDate: "",
    },
    {
      trainingId: "TN267",
      name: "BOILER",
      qualificationNo: "",
      issuedDate: "",
      expiredDate: "",
    },
    {
      trainingId: "TN302",
      name: "BRIDGE RESOURCE MANAGEMENT (BRM) (Table A-II/1)",
      qualificationNo: "",
      issuedDate: "",
      expiredDate: "",
    },
    {
      trainingId: "TN160",
      name: "BRIDGE SIMULATOR",
      qualificationNo: "",
      issuedDate: "",
      expiredDate: "",
    },
    {
      trainingId: "TN025",
      name: "BRIDGE TEAM MANAGEMENT",
      qualificationNo: "",
      issuedDate: "",
      expiredDate: "",
    },
    {
      trainingId: "TN173",
      name: "BRIDGE WATCKEEPING",
      qualificationNo: "",
      issuedDate: "",
      expiredDate: "",
    },
    {
      trainingId: "TN132",
      name: "BUNKER PROCEDURE/HOT WORK",
      qualificationNo: "",
      issuedDate: "",
      expiredDate: "",
    },
    {
      trainingId: "TN088",
      name: "CAEGO SIMULATOR COURSE",
      qualificationNo: "",
      issuedDate: "",
      expiredDate: "",
    },
    {
      trainingId: "TN040",
      name: "CARGO HANDLING",
      qualificationNo: "",
      issuedDate: "",
      expiredDate: "",
    },
    {
      trainingId: "TN230",
      name: "CARGO PUMP OPERATION",
      qualificationNo: "",
      issuedDate: "",
      expiredDate: "",
    },
    {
      trainingId: "TN360",
      name: "CARGO TANK OVERFLOW TRAINING",
      qualificationNo: "",
      issuedDate: "",
      expiredDate: "",
    },
    {
      trainingId: "TN295",
      name: "CHART CORRECTION (T&P CORRECTION AND FIX CORRECTION)",
      qualificationNo: "",
      issuedDate: "",
      expiredDate: "",
    },
    {
      trainingId: "TN128",
      name: "CHARTERING SENIOR OFFICER",
      qualificationNo: "",
      issuedDate: "",
      expiredDate: "",
    },
    {
      trainingId: "TN067",
      name: "COLREG",
      qualificationNo: "",
      issuedDate: "",
      expiredDate: "",
    },
    {
      trainingId: "TN041",
      name: "COMPANY CULTURE & MOTIVATION",
      qualificationNo: "",
      issuedDate: "",
      expiredDate: "",
    },
    {
      trainingId: "TN349",
      name: "CONFINED SPACE",
      qualificationNo: "",
      issuedDate: "",
      expiredDate: "",
    },
    {
      trainingId: "TN218",
      name: "CONTROL SYSTEM",
      qualificationNo: "",
      issuedDate: "",
      expiredDate: "",
    },
    {
      trainingId: "TN331",
      name: "CRANE OPERATOR CLASS-A",
      qualificationNo: "",
      issuedDate: "",
      expiredDate: "",
    },
    {
      trainingId: "TN347",
      name: "CRANE OPERATOR CLASS-B",
      qualificationNo: "",
      issuedDate: "",
      expiredDate: "",
    },
    {
      trainingId: "TN348",
      name: "CRANE OPERATOR CLASS-C",
      qualificationNo: "",
      issuedDate: "",
      expiredDate: "",
    },
    {
      trainingId: "TN330",
      name: "CRISIS MANAGEMENT HUMAN BEHAVIOUR TRAINING",
      qualificationNo: "",
      issuedDate: "",
      expiredDate: "",
    },
    {
      trainingId: "TN156",
      name: "CRITICAL EQUIPMENT",
      qualificationNo: "",
      issuedDate: "",
      expiredDate: "",
    },
    {
      trainingId: "TN215",
      name: "CROSS CULTURE",
      qualificationNo: "",
      issuedDate: "",
      expiredDate: "",
    },
    {
      trainingId: "TN301",
      name: "CROWD MANAGEMENT TRAINING (Reg. V/2)",
      qualificationNo: "",
      issuedDate: "",
      expiredDate: "",
    },
    {
      trainingId: "TN176",
      name: "CRUDE OIL WASHING",
      qualificationNo: "",
      issuedDate: "",
      expiredDate: "",
    },
    {
      trainingId: "TN209",
      name: "CYBER SECURITY",
      qualificationNo: "",
      issuedDate: "",
      expiredDate: "",
    },
    {
      trainingId: "TN155",
      name: "DECK SIMULATOR",
      qualificationNo: "",
      issuedDate: "",
      expiredDate: "",
    },
    {
      trainingId: "TN368",
      name: "ECDIS CHART WORLD e GLOBE G2",
      qualificationNo: "",
      issuedDate: "",
      expiredDate: "",
    },
    {
      trainingId: "TN385",
      name: "ECDIS GENERIK",
      qualificationNo: "",
      issuedDate: "",
      expiredDate: "",
    },
    {
      trainingId: "TN371",
      name: "ECDIS SAM ELECTRONIC PILOT PLATINUM",
      qualificationNo: "",
      issuedDate: "",
      expiredDate: "",
    },
    {
      trainingId: "TN367",
      name: "ECDIS SPERRY MARINE",
      qualificationNo: "",
      issuedDate: "",
      expiredDate: "",
    },
    {
      trainingId: "TN012",
      name: "ELECTRICAL",
      qualificationNo: "",
      issuedDate: "",
      expiredDate: "",
    },
    {
      trainingId: "TN170",
      name: "ELECTICAL PRACTICE FOR MARINE USE",
      qualificationNo: "",
      issuedDate: "",
      expiredDate: "",
    },
    {
      trainingId: "TN308",
      name: "ELECTRO - TECHNICAL ENGINEER (Reg. III/6)",
      qualificationNo: "",
      issuedDate: "",
      expiredDate: "",
    },
    {
      trainingId: "TN307",
      name: "ELECTRO TEHNICAL RATINGS (Reg. III/7, table A-III/7)",
      qualificationNo: "",
      issuedDate: "",
      expiredDate: "",
    },
    {
      trainingId: "TN171",
      name: "ELECTRONIC CHART DISPLAY INFORMATON SYSTEM(ECDIS) (Table A-II/1 and A-III/1)",
      qualificationNo: "",
      issuedDate: "",
      expiredDate: "",
    },
    {
      trainingId: "TN354",
      name: "ELECTRONIC NAVIGATION SYSTEMS-ENS",
      qualificationNo: "",
      issuedDate: "",
      expiredDate: "",
    },
    {
      trainingId: "TN098",
      name: "ELEMENTARY FIRST AID ( A-VI/12.1.3 )",
      qualificationNo: "",
      issuedDate: "",
      expiredDate: "",
    },
    {
      trainingId: "TN134",
      name: "ENCLOSE SPACE ENTRY PERMIT",
      qualificationNo: "",
      issuedDate: "",
      expiredDate: "",
    },
    {
      trainingId: "TN383",
      name: "ENDORSEMENT GMDSS",
      qualificationNo: "",
      issuedDate: "",
      expiredDate: "",
    },
    {
      trainingId: "TN205",
      name: "ENERGY CONSERVATION",
      qualificationNo: "",
      issuedDate: "",
      expiredDate: "",
    },
    {
      trainingId: "TN374",
      name: "ENGINE RESOURCE MANAGEMENT (ERM) (Table A-III/1)",
      qualificationNo: "",
      issuedDate: "",
      expiredDate: "",
    },
    {
      trainingId: "TN300",
      name: "ENGINE ROOM RESOURCES MGMT",
      qualificationNo: "",
      issuedDate: "",
      expiredDate: "",
    },
    {
      trainingId: "TN130",
      name: "ENGINE SIMULATOR",
      qualificationNo: "",
      issuedDate: "",
      expiredDate: "",
    },
    {
      trainingId: "TN357",
      name: "ENGINE TEAM MANAGEMENT- ETM",
      qualificationNo: "",
      issuedDate: "",
      expiredDate: "",
    },
    {
      trainingId: "TN124",
      name: "EOHS",
      qualificationNo: "",
      issuedDate: "",
      expiredDate: "",
    },
    {
      trainingId: "TN158",
      name: "FAMILIARIZATION OF ECDIS",
      qualificationNo: "",
      issuedDate: "",
      expiredDate: "",
    },
    {
      trainingId: "TN217",
      name: "FAST RESCUE BOAT",
      qualificationNo: "",
      issuedDate: "",
      expiredDate: "",
    },
    {
      trainingId: "TN239",
      name: "FAST RESCUE CRAFT (FRC)",
      qualificationNo: "",
      issuedDate: "",
      expiredDate: "",
    },
    {
      trainingId: "TN214",
      name: "FIRE FIGHTING & ENCLOSED ENTRY SPACE",
      qualificationNo: "",
      issuedDate: "",
      expiredDate: "",
    },
    {
      trainingId: "TN066",
      name: "FIRE FIGHTING  -  (A-VI/1-2 & A- VI/3)",
      qualificationNo: "",
      issuedDate: "",
      expiredDate: "",
    },
    {
      trainingId: "TN324",
      name: "FOOD HANDLING CERT",
      qualificationNo: "",
      issuedDate: "",
      expiredDate: "",
    },
    {
      trainingId: "TN325",
      name: "FOOD SAFETY CERT",
      qualificationNo: "",
      issuedDate: "",
      expiredDate: "",
    },
    {
      trainingId: "TN352",
      name: "FORUNO TRAINING",
      qualificationNo: "",
      issuedDate: "",
      expiredDate: "",
    },
    {
      trainingId: "TN123",
      name: "FRAMO PUMPS",
      qualificationNo: "",
      issuedDate: "",
      expiredDate: "",
    },
    {
      trainingId: "TN269",
      name: "FRESH WATER GENERATOR",
      qualificationNo: "",
      issuedDate: "",
      expiredDate: "",
    },
    {
      trainingId: "TN181",
      name: "FUEL OIL",
      qualificationNo: "",
      issuedDate: "",
      expiredDate: "",
    },
    {
      trainingId: "TN243",
      name: "FURTHER OFFSHORE LIFEBOAT COXWAIN (OPITO)",
      qualificationNo: "",
      issuedDate: "",
      expiredDate: "",
    },
    {
      trainingId: "TN162",
      name: "GARBAGE MANAGEMENT PLAN",
      qualificationNo: "",
      issuedDate: "",
      expiredDate: "",
    },
    {
      trainingId: "TN064",
      name: "GAS MEASUREMENT",
      qualificationNo: "",
      issuedDate: "",
      expiredDate: "",
    },
    {
      trainingId: "TN002",
      name: "GAS TANKER SAFETY",
      qualificationNo: "",
      issuedDate: "",
      expiredDate: "",
    },
    {
      trainingId: "TN034",
      name: "GENERAL OPERATOR CERTIFICATE",
      qualificationNo: "",
      issuedDate: "",
      expiredDate: "",
    },
    {
      trainingId: "TN210",
      name: "GENERATOR OPERATION",
      qualificationNo: "",
      issuedDate: "",
      expiredDate: "",
    },
    {
      trainingId: "TN055",
      name: "GMDSS (MARITIME EDUCATION)",
      qualificationNo: "",
      issuedDate: "",
      expiredDate: "",
    },
    {
      trainingId: "TN018",
      name: "GMDSS - GOC",
      qualificationNo: "",
      issuedDate: "",
      expiredDate: "",
    },
    {
      trainingId: "TN089",
      name: "GMDSS COURSE",
      qualificationNo: "",
      issuedDate: "",
      expiredDate: "",
    },
    {
      trainingId: "TN221",
      name: "H2S TRAINING",
      qualificationNo: "",
      issuedDate: "",
      expiredDate: "",
    },
    {
      trainingId: "TN136",
      name: "HAND STEERING AIS,PERSONAL ASSESMENT",
      qualificationNo: "",
      issuedDate: "",
      expiredDate: "",
    },
    {
      trainingId: "TN036",
      name: "HARBOUR CRAFT MASTER",
      qualificationNo: "",
      issuedDate: "",
      expiredDate: "",
    },
    {
      trainingId: "TN283",
      name: "HAZARD INDETIFICATION AND RISK MANAGEMENT",
      qualificationNo: "",
      issuedDate: "",
      expiredDate: "",
    },
    {
      trainingId: "TN254",
      name: "HAZARD OF PETROLEUM",
      qualificationNo: "",
      issuedDate: "",
      expiredDate: "",
    },
    {
      trainingId: "TN094",
      name: "HAZARDOUS CARGOES",
      qualificationNo: "",
      issuedDate: "",
      expiredDate: "",
    },
    {
      trainingId: "TN127",
      name: "HEALTH CREW TRAINING",
      qualificationNo: "",
      issuedDate: "",
      expiredDate: "",
    },
    {
      trainingId: "TN231",
      name: "HEAVY RUNNING PROPELER",
      qualificationNo: "",
      issuedDate: "",
      expiredDate: "",
    },
    {
      trainingId: "TN245",
      name: "HELICOPTER LANDING OFFICER (HLO)",
      qualificationNo: "",
      issuedDate: "",
      expiredDate: "",
    },
    {
      trainingId: "TN259",
      name: "HELICOPTER UNDERWATER ESCAPE",
      qualificationNo: "",
      issuedDate: "",
      expiredDate: "",
    },
    {
      trainingId: "TN237",
      name: "HELICOPTER UNDERWATER ESCAPE TRAINING (HUET)",
      qualificationNo: "",
      issuedDate: "",
      expiredDate: "",
    },
    {
      trainingId: "TN380",
      name: "HELIDECK EMERGENCY RESPONSE",
      qualificationNo: "",
      issuedDate: "",
      expiredDate: "",
    },
    {
      trainingId: "TN247",
      name: "HELIDECK FIRE FIGHTING",
      qualificationNo: "",
      issuedDate: "",
      expiredDate: "",
    },
    {
      trainingId: "TN008",
      name: "HIGH RISK AREA AND WARLIKE AREA",
      qualificationNo: "",
      issuedDate: "",
      expiredDate: "",
    },
    {
      trainingId: "TN397",
      name: "HLO ASSISTANT (OFFSHORE)",
      qualificationNo: "",
      issuedDate: "",
      expiredDate: "",
    },
    {
      trainingId: "TN398",
      name: "HUET & BSS (OFFSHORE)",
      qualificationNo: "",
      issuedDate: "",
      expiredDate: "",
    },
    {
      trainingId: "TN299",
      name: "HUMAN RELATION",
      qualificationNo: "",
      issuedDate: "",
      expiredDate: "",
    },
    {
      trainingId: "TN069",
      name: "HUMAN RELATIONS  - ( A-VI/1-4)",
      qualificationNo: "",
      issuedDate: "",
      expiredDate: "",
    },
    {
      trainingId: "TN326",
      name: "IMDG CODE",
      qualificationNo: "",
      issuedDate: "",
      expiredDate: "",
    },
    {
      trainingId: "TN157",
      name: "INERT GAS SYSTEM",
      qualificationNo: "",
      issuedDate: "",
      expiredDate: "",
    },
    {
      trainingId: "TN046",
      name: "INSPECTIONS",
      qualificationNo: "",
      issuedDate: "",
      expiredDate: "",
    },
    {
      trainingId: "TN045",
      name: "INTERNATIONAL CONVENTIONS REGULATION",
      qualificationNo: "",
      issuedDate: "",
      expiredDate: "",
    },
    {
      trainingId: "TN298",
      name: "INTERNATIONAL PAINT INDONESIA",
      qualificationNo: "",
      issuedDate: "",
      expiredDate: "",
    },
    {
      trainingId: "TN028",
      name: "ISM-CODE",
      qualificationNo: "",
      issuedDate: "",
      expiredDate: "",
    },
    {
      trainingId: "TN072",
      name: "ISPS CODE",
      qualificationNo: "",
      issuedDate: "",
      expiredDate: "",
    },
    {
      trainingId: "TN292",
      name: "LEADERSHIP & MOTIVATION",
      qualificationNo: "",
      issuedDate: "",
      expiredDate: "",
    },
    {
      trainingId: "TN328",
      name: "MARINE HIGH VOLTAGE (MHV)",
      qualificationNo: "",
      issuedDate: "",
      expiredDate: "",
    },
    {
      trainingId: "TN138",
      name: "MARINE RESOURCE MANAGEMENT",
      qualificationNo: "",
      issuedDate: "",
      expiredDate: "",
    },
    {
      trainingId: "TN037",
      name: "MARITIME ENGLISH",
      qualificationNo: "",
      issuedDate: "",
      expiredDate: "",
    },
    {
      trainingId: "TN081",
      name: "MARPOL",
      qualificationNo: "",
      issuedDate: "",
      expiredDate: "",
    },
    {
      trainingId: "TN184",
      name: "MARPOL 73/78",
      qualificationNo: "",
      issuedDate: "",
      expiredDate: "",
    },
    {
      trainingId: "TN165",
      name: "MARPOL VIOLATION TRAINING",
      qualificationNo: "",
      issuedDate: "",
      expiredDate: "",
    },
    {
      trainingId: "TN289",
      name: "MEASUREMENT TECHNIC",
      qualificationNo: "",
      issuedDate: "",
      expiredDate: "",
    },
    {
      trainingId: "TN070",
      name: "MEDICAL CARE  - ( A-VI/4-2 )",
      qualificationNo: "",
      issuedDate: "",
      expiredDate: "",
    },
    {
      trainingId: "TN059",
      name: "MEDICAL FIRST AID  -  (A-VI/1-3, 4-1)",
      qualificationNo: "",
      issuedDate: "",
      expiredDate: "",
    },
    {
      trainingId: "TN043",
      name: "MEDICARE ONBOARD",
      qualificationNo: "",
      issuedDate: "",
      expiredDate: "",
    },
    {
      trainingId: "TN258",
      name: "MLC CULINARY",
      qualificationNo: "",
      issuedDate: "",
      expiredDate: "",
    },
    {
      trainingId: "TN151",
      name: "OIL & AIR POLLUTION TRAINING",
      qualificationNo: "",
      issuedDate: "",
      expiredDate: "",
    },
    {
      trainingId: "TN146",
      name: "OIL & CHEMICAL SPILL GEAR",
      qualificationNo: "",
      issuedDate: "",
      expiredDate: "",
    },
    {
      trainingId: "TN077",
      name: "OIL MAJOR INSPECTION",
      qualificationNo: "",
      issuedDate: "",
      expiredDate: "",
    },
    {
      trainingId: "TN189",
      name: "OIL POLLUTION PREVENTION",
      qualificationNo: "",
      issuedDate: "",
      expiredDate: "",
    },
    {
      trainingId: "TN379",
      name: "OIL TANKER CARGO & BALLAST HANDLING SIMULATOR",
      qualificationNo: "",
      issuedDate: "",
      expiredDate: "",
    },
    {
      trainingId: "TN228",
      name: "OIL TANKER FAMILIARIZATION",
      qualificationNo: "",
      issuedDate: "",
      expiredDate: "",
    },
    {
      trainingId: "TN095",
      name: "OIL TANKER SAFETY",
      qualificationNo: "",
      issuedDate: "",
      expiredDate: "",
    },
    {
      trainingId: "TN233",
      name: "OIL TANKER SPECIALIZED TRAINING PROGRAMME",
      qualificationNo: "",
      issuedDate: "",
      expiredDate: "",
    },
    {
      trainingId: "TN061",
      name: "OIL TANKER TRAINING SYSTEM IMO 1.01/1.02",
      qualificationNo: "",
      issuedDate: "",
      expiredDate: "",
    },
    {
      trainingId: "TN143",
      name: "OIL WATER SEPARATOR",
      qualificationNo: "",
      issuedDate: "",
      expiredDate: "",
    },
    {
      trainingId: "TN409",
      name: "OIL-CE (CONTROLLING EMERENCIES ASSESMENT)",
      qualificationNo: "",
      issuedDate: "",
      expiredDate: "",
    },
    {
      trainingId: "TN168",
      name: "OIL/CRUDE TANKER",
      qualificationNo: "",
      issuedDate: "",
      expiredDate: "",
    },
    {
      trainingId: "TN153",
      name: "OPERATION & MAINTENANCE ENGINE",
      qualificationNo: "",
      issuedDate: "",
      expiredDate: "",
    },
    {
      trainingId: "TN063",
      name: "OPERATION OF GENERATORS",
      qualificationNo: "",
      issuedDate: "",
      expiredDate: "",
    },
    {
      trainingId: "TN232",
      name: "OPERATIONAL LEADERSHIP TRAINING",
      qualificationNo: "",
      issuedDate: "",
      expiredDate: "",
    },
    {
      trainingId: "TN296",
      name: "OPERATIONAL USE OF ECDIS TRAINING",
      qualificationNo: "",
      issuedDate: "",
      expiredDate: "",
    },
    {
      trainingId: "TN147",
      name: "PERMIT TO WORK,HOT WORK,COLD WORK",
      qualificationNo: "",
      issuedDate: "",
      expiredDate: "",
    },
    {
      trainingId: "TN085",
      name: "PERS SAFETY & SOCIAL RESP (A-VI/12.14)",
      qualificationNo: "",
      issuedDate: "",
      expiredDate: "",
    },
    {
      trainingId: "TN050",
      name: "PERSONAL SAFETY",
      qualificationNo: "",
      issuedDate: "",
      expiredDate: "",
    },
    {
      trainingId: "TN222",
      name: "PERSONAL SAFETY PREVENTION",
      qualificationNo: "",
      issuedDate: "",
      expiredDate: "",
    },
    {
      trainingId: "TN068",
      name: "PERSONAL SURVIVAL  -  ( A-VI/1-1, 2-1 )",
      qualificationNo: "",
      issuedDate: "",
      expiredDate: "",
    },
    {
      trainingId: "TN309",
      name: "PERSONNEL OPERATING DYNAMIC POSITIONING SYSTEMS (STCW Seksi B-V/e)",
      qualificationNo: "",
      issuedDate: "",
      expiredDate: "",
    },
    {
      trainingId: "TN047",
      name: "PLANNED MAINTENANCE & REPAIR",
      qualificationNo: "",
      issuedDate: "",
      expiredDate: "",
    },
    {
      trainingId: "TN261",
      name: "PLEDGE TO ENVIRONMENT",
      qualificationNo: "",
      issuedDate: "",
      expiredDate: "",
    },
    {
      trainingId: "TN220",
      name: "PORT STATE CONTROL",
      qualificationNo: "",
      issuedDate: "",
      expiredDate: "",
    },
    {
      trainingId: "TN049",
      name: "PREVENTION OF POLLUTION",
      qualificationNo: "",
      issuedDate: "",
      expiredDate: "",
    },
    {
      trainingId: "TN190",
      name: "PROCEDURES FOR PREVENTING MARINE POLLUTION",
      qualificationNo: "",
      issuedDate: "",
      expiredDate: "",
    },
    {
      trainingId: "TN086",
      name: "PROFICIENCY FAST RESC BOAT (A-VI/258)",
      qualificationNo: "",
      issuedDate: "",
      expiredDate: "",
    },
    {
      trainingId: "TN004",
      name: "RADAR OBSERVER",
      qualificationNo: "",
      issuedDate: "",
      expiredDate: "",
    },
    {
      trainingId: "TN135",
      name: "RADAR PLOTTING",
      qualificationNo: "",
      issuedDate: "",
      expiredDate: "",
    },
    {
      trainingId: "TN032",
      name: "RADAR SIMULATOR",
      qualificationNo: "",
      issuedDate: "",
      expiredDate: "",
    },
    {
      trainingId: "TN329",
      name: "RATING AS ABLE SEAFARER ENGINE",
      qualificationNo: "",
      issuedDate: "",
      expiredDate: "",
    },
    {
      trainingId: "TN303",
      name: "RATING DUTY CERTIFIED TO BE PART OF A NAVIGATIONAL OR ENGINE ROOM WATCH (Reg. II/4, III/4)",
      qualificationNo: "",
      issuedDate: "",
      expiredDate: "",
    },
    {
      trainingId: "TN323",
      name: "RATINGS AS ABLE SEAFARER DECK",
      qualificationNo: "",
      issuedDate: "",
      expiredDate: "",
    },
    {
      trainingId: "TN125",
      name: "REFRIGERATOR SYSTEM & MURT GAS SYSTEM",
      qualificationNo: "",
      issuedDate: "",
      expiredDate: "",
    },
    {
      trainingId: "TN263",
      name: "RISK MANAGEMENT AWARENESS",
      qualificationNo: "",
      issuedDate: "",
      expiredDate: "",
    },
    {
      trainingId: "TN082",
      name: "RISK MANAGEMENT TRAINING",
      qualificationNo: "",
      issuedDate: "",
      expiredDate: "",
    },
    {
      trainingId: "TN192",
      name: "SAFETY",
      qualificationNo: "",
      issuedDate: "",
      expiredDate: "",
    },
    {
      trainingId: "TN271",
      name: "SAFETY EQUIPMENT",
      qualificationNo: "",
      issuedDate: "",
      expiredDate: "",
    },
    {
      trainingId: "TN264",
      name: "SAFETY IN ACTION",
      qualificationNo: "",
      issuedDate: "",
      expiredDate: "",
    },
    {
      trainingId: "TN166",
      name: "SAFETY IN CHEMICAL TANKERS",
      qualificationNo: "",
      issuedDate: "",
      expiredDate: "",
    },
    {
      trainingId: "TN223",
      name: "SAFETY IN ENGINE ROOM",
      qualificationNo: "",
      issuedDate: "",
      expiredDate: "",
    },
    {
      trainingId: "TN219",
      name: "SAFETY MANAGEMENT SYSTEM",
      qualificationNo: "",
      issuedDate: "",
      expiredDate: "",
    },
    {
      trainingId: "TN193",
      name: "SAFETY MNGT",
      qualificationNo: "",
      issuedDate: "",
      expiredDate: "",
    },
    {
      trainingId: "TN039",
      name: "SAFETY NAVIGATION",
      qualificationNo: "",
      issuedDate: "",
      expiredDate: "",
    },
    {
      trainingId: "TN044",
      name: "SAFETY OF OPERATIONS",
      qualificationNo: "",
      issuedDate: "",
      expiredDate: "",
    },
    {
      trainingId: "TN194",
      name: "SAFETY OFFICER COURSE",
      qualificationNo: "",
      issuedDate: "",
      expiredDate: "",
    },
    {
      trainingId: "TN152",
      name: "SAFETY ON BOARD TRAINING",
      qualificationNo: "",
      issuedDate: "",
      expiredDate: "",
    },
    {
      trainingId: "TN257",
      name: "SAFETY SECURITY POLLUTION",
      qualificationNo: "",
      issuedDate: "",
      expiredDate: "",
    },
    {
      trainingId: "TN195",
      name: "SAFETY WORK SHOP",
      qualificationNo: "",
      issuedDate: "",
      expiredDate: "",
    },
    {
      trainingId: "TN196",
      name: "SAFETY, ENVIRONMENT, SECURITY & EMERGENCY",
      qualificationNo: "",
      issuedDate: "",
      expiredDate: "",
    },
    {
      trainingId: "TN387",
      name: "SCAFFOLDING INSPECTION COURSE",
      qualificationNo: "",
      issuedDate: "",
      expiredDate: "",
    },
    {
      trainingId: "TN266",
      name: "SCOPE",
      qualificationNo: "",
      issuedDate: "",
      expiredDate: "",
    },
    {
      trainingId: "TN120",
      name: "SEAFARER HEALTH EDUCATION COURSE PROGRAM",
      qualificationNo: "",
      issuedDate: "",
      expiredDate: "",
    },
    {
      trainingId: "TN315",
      name: "SEAFARERS DESIGNATED SECURITY DUTIES",
      qualificationNo: "",
      issuedDate: "",
      expiredDate: "",
    },
    {
      trainingId: "TN311",
      name: "SECURITY AWARENESS TRAINING (STCW Seksi A-VI/6, Table A-VI/6-1, B-VI/6)",
      qualificationNo: "",
      issuedDate: "",
      expiredDate: "",
    },
    {
      trainingId: "TN197",
      name: "SENIOR OFFICER GATHERING",
      qualificationNo: "",
      issuedDate: "",
      expiredDate: "",
    },
    {
      trainingId: "TN051",
      name: "SHIP GENERAL SAFETY",
      qualificationNo: "",
      issuedDate: "",
      expiredDate: "",
    },
    {
      trainingId: "TN015",
      name: "SHIP HANDLING & MANEUVERING COURSE",
      qualificationNo: "",
      issuedDate: "",
      expiredDate: "",
    },
    {
      trainingId: "TN278",
      name: "SHIP INTRODUCTION",
      qualificationNo: "",
      issuedDate: "",
      expiredDate: "",
    },
    {
      trainingId: "TN126",
      name: "SHIP PERSONAL ASSESMENT REPORT",
      qualificationNo: "",
      issuedDate: "",
      expiredDate: "",
    },
    {
      trainingId: "TN038",
      name: "SHIP SECURITY OFFICERS TRAINING ( Table A-VI/5, B-VI/5 )",
      qualificationNo: "",
      issuedDate: "",
      expiredDate: "",
    },
    {
      trainingId: "TN255",
      name: "SHIP SHORE SAFETY CHECKLIST",
      qualificationNo: "",
      issuedDate: "",
      expiredDate: "",
    },
    {
      trainingId: "TN198",
      name: "SHIP/SHORE FAMILIARIZATION",
      qualificationNo: "",
      issuedDate: "",
      expiredDate: "",
    },
    {
      trainingId: "TN327",
      name: "SHIP'S COOK TRAINING",
      qualificationNo: "",
      issuedDate: "",
      expiredDate: "",
    },
    {
      trainingId: "TN145",
      name: "SHIPBOARD FAMILIARIZATION",
      qualificationNo: "",
      issuedDate: "",
      expiredDate: "",
    },
    {
      trainingId: "TN287",
      name: "SHIPBOARD MEDICAL",
      qualificationNo: "",
      issuedDate: "",
      expiredDate: "",
    },
    {
      trainingId: "TN150",
      name: "SHIPBOARD SAFETY OFFICER TRAINING",
      qualificationNo: "",
      issuedDate: "",
      expiredDate: "",
    },
    {
      trainingId: "TN090",
      name: "SIMULATOR BRIDGE TEAM MANAGEMENT",
      qualificationNo: "",
      issuedDate: "",
      expiredDate: "",
    },
    {
      trainingId: "TN226",
      name: "SIMULATOR DIESEL PROPULSION",
      qualificationNo: "",
      issuedDate: "",
      expiredDate: "",
    },
    {
      trainingId: "TN053",
      name: "SMS (ISM CODE)",
      qualificationNo: "",
      issuedDate: "",
      expiredDate: "",
    },
    {
      trainingId: "TN199",
      name: "SOLAS V",
      qualificationNo: "",
      issuedDate: "",
      expiredDate: "",
    },
    {
      trainingId: "TN052",
      name: "SOPEP",
      qualificationNo: "",
      issuedDate: "",
      expiredDate: "",
    },
    {
      trainingId: "TN388",
      name: "SPECIAL OIL TANKER TRAINING",
      qualificationNo: "",
      issuedDate: "",
      expiredDate: "",
    },
    {
      trainingId: "TN087",
      name: "SPECIAL OIL TANKER TRAINING (A-V/18)",
      qualificationNo: "",
      issuedDate: "",
      expiredDate: "",
    },
    {
      trainingId: "TN350",
      name: "STEWARD TRAINING",
      qualificationNo: "",
      issuedDate: "",
      expiredDate: "",
    },
    {
      trainingId: "TN022",
      name: "SURVIVAL CRAFT & RESCUE BOAT",
      qualificationNo: "",
      issuedDate: "",
      expiredDate: "",
    },
    {
      trainingId: "TN129",
      name: "SURVIVAL LIFE ONBOARD",
      qualificationNo: "",
      issuedDate: "",
      expiredDate: "",
    },
    {
      trainingId: "TN344",
      name: "T- BOSIET",
      qualificationNo: "",
      issuedDate: "",
      expiredDate: "",
    },
    {
      trainingId: "TN415",
      name: "T-FOET",
      qualificationNo: "",
      issuedDate: "",
      expiredDate: "",
    },
    {
      trainingId: "TN273",
      name: "TANK CLEANING",
      qualificationNo: "",
      issuedDate: "",
      expiredDate: "",
    },
    {
      trainingId: "TN020",
      name: "TANKER BASIC SAFETY",
      qualificationNo: "",
      issuedDate: "",
      expiredDate: "",
    },
    {
      trainingId: "TN019",
      name: "TANKER FAMILIARIZATION",
      qualificationNo: "",
      issuedDate: "",
      expiredDate: "",
    },
    {
      trainingId: "TN362",
      name: "WELDING",
      qualificationNo: "",
      issuedDate: "",
      expiredDate: "",
    },
  ],

  // Existing fields
  documents: [],
  trainings: [],
  experiences: [
    {
      vessel: "",
      vesselType: "",
      flag: "",
      tradingAreaId: "",
      rank: "",
      dwt: 0,
      kwh: 0,
      grt: 0,
      owner: "",
      company: "",
      signOn: "",
      signOff: "",
      signOffReason: "",
    },
  ],
});
const rankMap = {
  MASTER: "2110",
  "CHIEF OFFICER": "2120",
  "SECOND OFFICER": "2130",
  "THIRD OFFICER": "2140",
  "SENIOR DECK CADET": "2150",
  "CHIEF ENGINEER": "2210",
  "SECOND ENGINEER": "2220",
  "THIRD ENGINEER": "2230",
  "FOURTH ENGINEER": "2240",
  "SENIOR ENGINE CADET": "2250",
  ELECTRICIAN: "2260",
  PUMPMAN: "2300",
  "Q/MASTER": "2320",
  SAILOR: "2330",
  BOSUN: "2340",
  OILER: "2420",
  WIPER: "2430",
  FITTER: "2440",
  "CHIEF COOK": "2510",
  "MESS BOY": "2530",
  "CADET TEHNIK": "2560",
  "CADET NAUTIC": "2570",
  "CADET ELECTRICIAN": "2580",
};
onMounted(() => {
  // Set default application date to today
  const today = new Date();
  const formattedDate = today.toISOString().split("T")[0]; // Format as YYYY-MM-DD
  formData.rankApplyDate = formattedDate;

  // Parse URL query parameters
  const urlParams = new URLSearchParams(window.location.search);
  const applyParam = urlParams.get("apply")?.toString();
  if (applyParam) {
    // Map the URL parameter to the corresponding value in the dropdown

    // Try to match exactly, then try case-insensitive match
    if (rankMap[applyParam]) {
      formData.rankToApply = rankMap[applyParam];
    } else {
      // Try to find a partial match
      const lowerParam = applyParam.toLowerCase();
      for (const [key, value] of Object.entries(rankMap)) {
        if (
          key.toLowerCase().includes(lowerParam) ||
          value.toLowerCase().includes(lowerParam)
        ) {
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
    docId: "",
    docNo: "",
    docFile: null,
    issued: "",
    validDate: "",
    expiredDate: "",
    remark: "",
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
    trainingId: "",
    referenceId: "",
    certificateNo: "",
    validDate: "",
    expiredDate: "",
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
    vessel: "",
    vesselType: "",
    flag: "",
    tradingAreaId: "",
    rank: "",
    dwt: 0,
    kwh: 0,
    grt: 0,
    owner: "",
    company: "",
    signOn: "",
    signOff: "",
    signOffReason: "",
  });
};

const removeExperience = (index) => {
  formData.experiences.splice(index, 1);
  if (formData.experiences.length === 0) {
    addExperience();
  }
};
const relationshipOptions = {
  K00: "Father",
  K01: "Mother",
  K02: "Wife",
  K03: "Husband",
  K04: "Son",
  K05: "Daughter",
  K06: "Brother",
  K07: "Sister",
  K08: "Uncle",
  K09: "Aunty",
  K10: "Other",
};

const vesselTypeOptions = {
  NONE: "NONE",
  C0: "Chemical",
  C1: "Oil Product",
  C10: "Supply Vessel",
  C11: "FPSO",
  C12: "FSO",
  C13: "LNG",
  C14: "Cruisser",
  C15: "Passenger",
  C16: "AHTS",
  C17: "Asphalt",
  C18: "Bitumen",
  C19: "LCT",
  C2: "LPG",
  C20: "Utility",
  C21: "Crew Boat",
  C22: "Floating Crane",
  C23: "Bunker",
  C24: "Cement Carrier",
  C25: "Offshore Survey",
  C26: "VLCC",
  C27: "Crane Barge",
  C28: "Offshore",
  C29: "Oil/Chemical",
  C30: "Reefer Carrier",
  C31: "Fishing Boat",
  C32: "RIG Vessel",
  C4: "Other",
  C5: "Bulk Carrier",
  C6: "General Cargo",
  C7: "Container",
  C8: "Ro-Ro",
  C9: "Tug Boat",
};
// Submit form using FormData for multipart/form-data
const submitForm = async () => {
  const maritalStatusOptions = {
    1: "Single",
    2: "Married",
    3: "Spouse",
  };
  const countryOptions = {
    id: "Indonesia",
    sg: "Singapore",
    my: "Malaysia",
    ph: "Philippines",
  };

  const nationalityOptions = {
    IDN: "Indonesian",
    AUS: "Australian",
    BGD: "Bangladeshi",
    BHS: "Bahamian",
    CHN: "Chinese",
    GBR: "British",
    IND: "Indian",
    JPN: "Japanese",
    KOR: "Korean",
    MYS: "Malaysian",
    PHL: "Filipino",
    SGP: "Singaporean",
    THA: "Thai",
    USA: "American",
    VNM: "Vietnamese",
  };

  const religionOptions = {
    R01: "Moslem",
    R02: "Catholic",
    R03: "Christian",
    R04: "Hinduism",
    R05: "Buddhist",
    R06: "Orthodox",
    R07: "Other",
  };

  // Create a new FormData object
  const formDataObj = new FormData();

  // Add basic fields with character limits
  formDataObj.append("candidateId", formData.candidateId || "");
  formDataObj.append("agentId", formData.agentId || "");
  formDataObj.append("name", formData.name?.slice(0, 50)); // Max 50 characters
  formDataObj.append("birthPlace", formData.birthPlace?.slice(0, 50)); // Max 50 characters
  formDataObj.append("birthDate", formData.birthDate);
  formDataObj.append("sex", formData.sex);
  formDataObj.append("maritalStatusId", formData.maritalStatusId);
  formDataObj.append(
    "maritalStatusName",
    maritalStatusOptions[formData.maritalStatusId]
  );
  formDataObj.append("numberOfChild", formData.numberOfChild);
  formDataObj.append("address", formData.address); // No character limit
  formDataObj.append("city", formData.city?.slice(0, 20)); // Max 20 characters
  formDataObj.append("zipCode", formData.zipCode?.toString().slice(0, 8)); // Max 8 characters
  formDataObj.append("countryId", formData.countryId);
  formDataObj.append("countryName", countryOptions[formData.countryId]);
  formDataObj.append("phoneNo", formData.phoneNo?.slice(0, 50)); // Max 50 characters
  formDataObj.append("handPhone", formData.handPhone?.slice(0, 50)); // Max 50 characters
  formDataObj.append("email", formData.email?.slice(0, 100)); // Max 100 characters
  formDataObj.append("religionId", formData.religionId);
  formDataObj.append("religionName", religionOptions[formData.religionId]);
  formDataObj.append("bloodType", formData.bloodType);
  formDataObj.append("nationalityId", formData.nationalityId);
  formDataObj.append(
    "nationalityName",
    nationalityOptions[formData.nationalityId]
  );
  formDataObj.append("rankToApply", formData.rankToApply);
  formDataObj.append(
    "rankToApplyName",
    Object.keys(rankMap).find((key) => rankMap[key] === formData.rankToApply)
  );
  formDataObj.append("rankApplyDate", formData.rankApplyDate);
  formDataObj.append("nextOfKinName", formData.nextOfKinName?.slice(0, 80)); // Max 80 characters
  formDataObj.append("nextOfKinAddress", formData.nextOfKinAddress); // No character limit
  formDataObj.append("nextOfKinCity", formData.nextOfKinCity?.slice(0, 20)); // Max 20 characters
  formDataObj.append("nextOfKinZipCode", formData.nextOfKinZipCode?.slice(0, 8)); // Max 8 characters
  formDataObj.append("nextOfKinPhone", formData.nextOfKinPhone?.slice(0, 50)); // Max 50 characters
  formDataObj.append("relationship", formData.relationship);
  formDataObj.append(
    "relationship_name",
    relationshipOptions[formData.relationship]
  );
  formDataObj.append("certificateId", formData.certificateId);
  formDataObj.append("certificateNo", formData.certificateNo);
  formDataObj.append("certificateStatusId", formData.certificateStatusId);
  formDataObj.append("certificateIssued", formData.certificateIssued);
  formDataObj.append("certificateIssuedDate", formData.certificateIssuedDate);
  formDataObj.append("certificateExpiryDate", formData.certificateExpiryDate);
  formDataObj.append("height", formData.height);
  formDataObj.append("weight", formData.weight);
  formDataObj.append("whiteShirt", formData.whiteShirt);
  formDataObj.append("bluePants", formData.bluePants);
  formDataObj.append("overall", formData.overall);
  formDataObj.append("safetyShoes", formData.safetyShoes);
  formDataObj.append("winterJacket", formData.winterJacket);
  formDataObj.append("rank", formData.rankToApply);

  // Add file uploads
  if (formData.photo) {
    formDataObj.append("photo", formData.photo);
  }

  if (formData.certificateDoc) {
    formDataObj.append("certificateDoc", formData.certificateDoc);
  }

  // Add passport details
  // formDataObj.append('passport.docNo', formData.passport.docNo);
  // formDataObj.append('passport.issued', formData.passport.issued);
  // formDataObj.append('passport.issuedDate', formData.passport.issuedDate);
  // formDataObj.append('passport.expiredDate', formData.passport.expiredDate);
  // if (formData.passport.file) {
  //   formDataObj.append('passport.docFile', formData.passport.file);
  // }
  formDataObj.append("cocType", formData.cocType);
  formDataObj.append("passport", formData.passport.file);

  // Add seamen book details
  // formDataObj.append('seamen.docNo', formData.seamen.docNo);
  // formDataObj.append('seamen.issued', formData.seamen.issued);
  // formDataObj.append('seamen.issuedDate', formData.seamen.issuedDate);
  // formDataObj.append('seamen.expiredDate', formData.seamen.expiredDate);
  // if (formData.seamen.file) {
  //   formDataObj.append('seamen.docFile', formData.seamen.file);
  // }
  formDataObj.append("seamen", formData.seamen.file);
  // Add documents array as JSON string
  const documents = [
    {
      docId: "DO001",
      docName: "PASSPORT",
      docNo: formData.passport.docNo,
      issued: formData.passport.issued,
      validDate: formData.passport.issuedDate,
      expiredDate: formData.passport.expiredDate,
      file: formData.passport.file,
      remark: "Passport",
    },
    {
      docId: "DO003",
      docName: "SEAMEN BOOK",
      docNo: formData.seamen.docNo,
      issued: formData.seamen.issued,
      validDate: formData.seamen.issuedDate,
      expiredDate: formData.seamen.expiredDate,
      file: formData.seamen.file,
      remark: "Seamen Book",
    },
    {
      docId: "DO017",
      docName: "NATIONAL CERTIFICATE OF ENDORSTMENT",
      docNo: formData.coe.docNo,
      issued: formData.coe.issued,
      validDate: formData.coe.issuedDate,
      expiredDate: formData.coe.expiredDate,
      file: null,
      remark: "COE Certificate",
    },
    {
      docId: "DO026",
      docName: "NPWP",
      docNo: formData.npwp.docNo,
      issued: formData.npwp.issued,
      validDate: formData.npwp.issuedDate,
      expiredDate: formData.npwp.expiredDate,
      file: null,
      remark: "NPWP",
    },
  ];

  formDataObj.append("documents", JSON.stringify(documents));

  // Add trainings array as JSON string
  const trainings = formData.standardTrainings
    .filter(
      (training) =>
        training.qualificationNo || training.issuedDate || training.expiredDate
    )
    .map((training) => ({
      trainingId: training.trainingId,
      trainingName: training.name,
      referenceId: training.qualificationNo || "",
      certificateNo: training.qualificationNo || "",
      validDate: training.issuedDate,
      expiredDate: training.expiredDate,
    }));

  formDataObj.append("trainings", JSON.stringify(trainings));

  // Add experiences array as JSON string
  const experiences = formData.experiences.map((exp) => ({
    vessel: exp.vessel,
    vesselType: exp.vesselType,
    cargo_pool_id: vesselTypeOptions[exp.vesselType],
    flag: exp.flag || "",
    tradingAreaId: exp.tradingAreaId || "",
    rank: exp.rank,
    rank_name: rankMap[exp.rank],
    dwt: parseInt(exp.dwt) || 0,
    kwh: parseInt(exp.kwh) || 0,
    owner: exp.company || exp.owner || "",
    signOn: exp.signOn,
    signOff: exp.signOff,
    signOffReason: exp.signOffReason || "",
  }));

  formDataObj.append("experiences", JSON.stringify(experiences));

  // Send the form data to the server
  console.log("Submitting form data:", formDataObj);
  try {
    const res = await api.post("candidates", formDataObj);
    alert("Application submitted successfully!");
    console.log(res);
    if (typeof window !== "undefined") {
      window.location.href = `${window.location.origin}`;
    }
  } catch (e) {
    alert("Error submitting application. Please try again.");
    console.log(e);
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
  switch (
    Object.keys(rankMap).find((key) => rankMap[key] === formData.rankToApply)
  ) {
    case "MASTER": // MASTER
      return [
        { value: "M1", text: "D CLASS I" },
        { value: "M2", text: "D CLASS II" },
      ];
    case "CHIEF OFFICER": // CHIEF OFFICER
      return [
        { value: "M1", text: "D CLASS I" },
        { value: "M2", text: "D CLASS II" },
      ];
    case "SECOND OFFICER": // SECOND OFFICER
      return [
        { value: "M2", text: "D CLASS II" },
        { value: "M3", text: "D CLASS III" },
      ];
    case "THIRD OFFICER": // THIRD OFFICER
      return [
        { value: "M2", text: "D CLASS II" },
        { value: "M3", text: "D CLASS III" },
      ];
    case "SENIOR DECK CADET": // SENIOR DECK CADET
      return [
        { value: "M3", text: "D CLASS III" },
        { value: "OT", text: "OTHER" },
      ];
    case "CHIEF ENGINEER": // CHIEF ENGINEER
      return [
        { value: "KC", text: "E CLASS I" },
        { value: "KB", text: "E CLASS II" },
      ];
    case "SECOND ENGINEER": // SECOND ENGINEER
      return [
        { value: "KC", text: "E CLASS I" },
        { value: "KB", text: "E CLASS II" },
      ];
    case "THIRD ENGINEER": // THIRD ENGINEER
      return [
        { value: "KB", text: "E CLASS II" },
        { value: "KA", text: "E CLASS III" },
      ];
    case "FOURTH ENGINEER": // FOURTH ENGINEER
      return [
        { value: "KB", text: "E CLASS II" },
        { value: "KA", text: "E CLASS III" },
      ];
    case "SENIOR ENGINE CADET": // SENIOR ENGINE CADET
      return [
        { value: "KA", text: "E CLASS III" },
        { value: "OT", text: "OTHER" },
      ];
    case "ELECTRICIAN": // ELECTRICIAN
      return [
        { value: "ET", text: "ETO" },
        { value: "KS", text: "E WATCHKEEPING" },
        { value: "OT", text: "OTHER" },
      ];
    case "PUMPMAN": // PUMPMAN
      return [
        { value: "KD", text: "D WATCHKEEPING" },
        { value: "OT", text: "OTHER" },
      ];
    case "Q/MASTER": // Q/MASTER
      return [
        { value: "KD", text: "D WATCHKEEPING" },
        { value: "OT", text: "OTHER" },
      ];
    case "SAILOR": // SAILOR
      return [
        { value: "KD", text: "D WATCHKEEPING" },
        { value: "OT", text: "OTHER" },
      ];
    case "BOSUN": // BOSUN
      return [
        { value: "KS", text: "E WATCHKEEPING" },
        { value: "OT", text: "OTHER" },
      ];
    case "OILER": // OILER
      return [
        { value: "KS", text: "E WATCHKEEPING" },
        { value: "OT", text: "OTHER" },
      ];
    case "WIPER": // WIPER
      return [
        { value: "KS", text: "E WATCHKEEPING" },
        { value: "OT", text: "OTHER" },
      ];
    case "FITTER": // FITTER
      return [
        { value: "KS", text: "E WATCHKEEPING" },
        { value: "OT", text: "OTHER" },
      ];
    case "CHIEF COOK": // CHIEF COOK
      return [
        { value: "NA", text: "NONE" },
        { value: "OT", text: "OTHER" },
      ];
    case "MESS BOY": // MESS BOY
      return [
        { value: "NA", text: "NONE" },
        { value: "OT", text: "OTHER" },
      ];
    case "CADET TEHNIK": // CADET TEHNIK
      return [{ value: "NA", text: "NONE" }];
    case "CADET NAUTIC": // CADET NAUTIC
      return [{ value: "NA", text: "NONE" }];
    case "CADET ELECTRICIAN": // CADET ELECTRICIAN
      return [{ value: "NA", text: "NONE" }];
    default:
      return [];
  }
});
</script>

<style scoped>
.maritime-form-container {
  background-color: #f0f8ff;
  min-height: 100vh;
  background-image: url("https://img.freepik.com/free-photo/container-cargo-freight-ship-with-working-crane-bridge-shipyard-twilight-sky_44353-2505.jpg");
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  position: relative;
}

.maritime-form-container::before {
  content: "";
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
  content: "";
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

.document-item,
.training-item,
.experience-item {
  background-color: #fff;
  transition: all 0.3s ease;
}

.document-item:hover,
.training-item:hover,
.experience-item:hover {
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
