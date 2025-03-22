import { useApi } from '../composables/useApi';

/**
 * Service for candidate-related API operations
 */
export function useCandidateService() {
  const api = useApi();

  /**
   * Submit a new candidate application
   * @param {FormData} formData - The candidate form data including files
   * @returns {Promise<Object>} The response from the API
   */
  const submitCandidate = async (formData) => {
    try {
      return await api.post('candidates', formData);
    } catch (error) {
      console.error('Error submitting candidate:', error);
      throw error;
    }
  };

  /**
   * Get a candidate by ID
   * @param {string} id - The candidate ID
   * @returns {Promise<Object>} The candidate data
   */
  const getCandidate = async (id) => {
    try {
      return await api.get(`/candidates/${id}`);
    } catch (error) {
      console.error(`Error fetching candidate ${id}:`, error);
      throw error;
    }
  };

  /**
   * Debug form submission
   * @param {FormData} formData - The form data to debug
   * @returns {Promise<Object>} Debug information
   */
  const debugSubmission = async (formData) => {
    try {
      return await api.post('/candidates/debug', formData);
    } catch (error) {
      console.error('Error in debug submission:', error);
      throw error;
    }
  };

  return {
    submitCandidate,
    getCandidate,
    debugSubmission
  };
}