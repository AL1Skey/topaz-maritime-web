import { defineStore } from 'pinia';
// Import the candidate service
import { useCandidateService } from '../services/candidateService';

export const useFormStore = defineStore('form', {
  state: () => ({
    formData: {
      // Basic fields
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
      height: '',
      weight: '',
      whiteShirt: '',
      bluePants: '',
      overall: '',
      safetyShoes: '',
      winterJacket: '',
      
      // Personal Data
      manningAgent: '',
      nextOfKinName: '',
      nextOfKinAddress: '',
      nextOfKinCity: '',
      nextOfKinZipCode: '',
      nextOfKinPhone: '',
      relationship: '',
      isElementary: false,
      rank: '',
      
      // Documents
      cocType: '',
      docNo: '',
      passport: {
        docNo: '',
        issued: '',
        issuedDate: '',
        expiredDate: '',
      },
      seamen: {
        docNo: '',
        issued: '',
        issuedDate: '',
        expiredDate: '',
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
      
      // Trainings
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
      
      // Experiences
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
    },
    
    // File storage
    files: {
      photo: null,
      certificateDoc: null,
      passportFile: null,
      seamenBookFile: null
    },
    
    // Preview URLs
    previews: {
      photo: null,
      certificate: false
    },
    
    // Current step
    currentStep: 1
  }),
  
  actions: {
    setPhoto(file) {
      this.files.photo = file;
      if (file) {
        const reader = new FileReader();
        reader.onload = (e) => {
          this.previews.photo = e.target.result;
        };
        reader.readAsDataURL(file);
      }
    },
    
    setCertificateDoc(file) {
      this.files.certificateDoc = file;
      this.previews.certificate = !!file;
    },
    
    setPassportFile(file) {
      this.files.passportFile = file;
    },
    
    setSeamenBookFile(file) {
      this.files.seamenBookFile = file;
    },
    
    setCurrentStep(step) {
      if (step >= 1 && step <= 5) {
        this.currentStep = step;
      }
    },
    
    nextStep() {
      if (this.currentStep < 5) {
        this.currentStep++;
      }
    },
    
    prevStep() {
      if (this.currentStep > 1) {
        this.currentStep--;
      }
    },
    
    addExperience() {
      this.formData.experiences.push({
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
    },
    
    removeExperience(index) {
      this.formData.experiences.splice(index, 1);
      if (this.formData.experiences.length === 0) {
        this.addExperience();
      }
    },
    
    // Initialize form with default values
    initForm() {
      const today = new Date();
      const formattedDate = today.toISOString().split('T')[0]; // Format as YYYY-MM-DD
      this.formData.rankApplyDate = formattedDate;
      
      // Parse URL query parameters if in browser environment
      if (typeof window !== 'undefined') {
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
            this.formData.rankToApply = rankMap[applyParam];
          } else {
            // Try to find a partial match
            const lowerParam = applyParam.toLowerCase();
            for (const [key, value] of Object.entries(rankMap)) {
              if (key.toLowerCase().includes(lowerParam) || value.toLowerCase().includes(lowerParam)) {
                this.formData.rankToApply = value;
                break;
              }
            }
          }
        }
      }
    },
    
    // Create FormData object for submission
    createFormData() {
      const formDataObj = new FormData();
      
      // Add basic fields
      for (const [key, value] of Object.entries(this.formData)) {
        // Skip nested objects and arrays
        if (typeof value !== 'object') {
          formDataObj.append(key, value === null ? '' : value);
        }
      }
      
      // Add file uploads
      if (this.files.photo) {
        formDataObj.append('photo', this.files.photo);
      }
      
      if (this.files.certificateDoc) {
        formDataObj.append('certificateDoc', this.files.certificateDoc);
      }
      
      // Add passport details
      formDataObj.append('passport.docNo', this.formData.passport.docNo);
      formDataObj.append('passport.issued', this.formData.passport.issued);
      formDataObj.append('passport.issuedDate', this.formData.passport.issuedDate);
      formDataObj.append('passport.expiredDate', this.formData.passport.expiredDate);
      if (this.files.passportFile) {
        formDataObj.append('passport.file', this.files.passportFile);
      }
      
      // Add seamen book details
      formDataObj.append('seamen.docNo', this.formData.seamen.docNo);
      formDataObj.append('seamen.issued', this.formData.seamen.issued);
      formDataObj.append('seamen.issuedDate', this.formData.seamen.issuedDate);
      formDataObj.append('seamen.expiredDate', this.formData.seamen.expiredDate);
      if (this.files.seamenBookFile) {
        formDataObj.append('seamen.file', this.files.seamenBookFile);
      }
      
      // Add documents array as JSON string
      const documents = [
        {
          docId: "passport",
          docNo: this.formData.passport.docNo,
          issued: this.formData.passport.issued,
          validDate: this.formData.passport.issuedDate,
          expiredDate: this.formData.passport.expiredDate,
          remark: "Passport"
        },
        {
          docId: "seamenBook",
          docNo: this.formData.seamen.docNo,
          issued: this.formData.seamen.issued,
          validDate: this.formData.seamen.issuedDate,
          expiredDate: this.formData.seamen.expiredDate,
          remark: "Seamen Book"
        }
      ];
      
      formDataObj.append('documents', documents);
      
      // Add trainings array as JSON string
      const trainings = this.formData.standardTrainings
        .filter(training => training.qualificationNo || training.issuedDate || training.expiredDate)
        .map(training => ({
          trainingId: training.trainingId,
          referenceId: training.qualificationNo || "",
          certificateNo: training.qualificationNo || "",
          validDate: training.issuedDate,
          expiredDate: training.expiredDate
        }));
      
      formDataObj.append('trainings', trainings);
      
      // Add experiences array as JSON string
      const experiences = this.formData.experiences.map(exp => ({
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
      
      formDataObj.append('experiences', experiences);
      
      return formDataObj;
    },
    
    // Submit the form
    async submitForm() {
      const candidateService = useCandidateService();
      
      try {
        const response = await candidateService.submitCandidate(this.createFormData());
        console.log('Success:', response);
        return { success: true, data: response };
      } catch (error) {
        console.error('Error:', error);
        console.log('Error:', this.createFormData())
        return { success: false, error: error.message };
      }
    }
  }
});