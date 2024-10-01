import { korean, koreanLogin } from '../axios';

/**
 * Fetch a list of sections attended.
 * @returns {Promise} - Axios GET response data for sections.
 */
export const getKoreanSection = async () => {
  try {
    const response = await korean.get('section');
    return response.data;
  } catch (error) {
    console.error('Error getting korean section: ', error);
    throw error;
  }
};

/**
 * Create an account for Korean students.
 * @param {Object} data - Student data {std_kor_id, std_kor_dept, std_kor_name, std_kor_phone, std_kor_mail}.
 * @returns {Promise} - Axios POST response data for account creation.
 */
export const postKoreanAccount = async (data) => {
  try {
    const response = await korean.post('account', data);
    return response.data;
  } catch (error) {
    console.error('Error posting korean account: ', error);
    throw error;
  }
};

/**
 * Fetch a schedule list available for today.
 * @param {String} sch_id - Optional schedule ID.
 * @returns {Promise} - Axios GET response data for schedule.
 */
export const getKoreanSchedule = async (sch_id) => {
  try {
    const response = await korean.get('schedule' + (sch_id ? `/${sch_id}` : ''));
    return response.data;
  } catch (error) {
    console.error('Error getting korean schedule: ', error);
    throw error;
  }
};

/**
 * Fetch ranking information for a specific section.
 * @param {String} sect_id - Section ID.
 * @returns {Promise} - Axios GET response data for section rank.
 */
export const getKoreanSectionRank = async (sect_id) => {
  try {
    const response = await korean.get(`section/rank/${sect_id}`);
    return response.data;
  } catch (error) {
    console.error('Error getting korean section rank: ', error);
    throw error;
  }
};

/**
 * Fetch settings information.
 * @returns {Promise} - Axios GET response data for settings.
 */
export const getKoreanSetting = async (sect_id) => {
  try {
    const response = await korean.get('setting');
    return response.data;
  } catch (error) {
    console.error('Error getting korean setting: ', error);
    throw error;
  }
};

/**
 * Post login request for Korean students.
 * @returns {Promise} - Axios POST response data for login.
 */
export const postKoreanLogin = async () => {
  try {
    const response = await koreanLogin.post();
    return response.data;
  } catch (error) {
    console.error('Error posting korean login: ', error);
    throw error;
  }
};
