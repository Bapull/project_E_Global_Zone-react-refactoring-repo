import { admin } from '../axios';

export const postAdminKorean = async (data) => {
  try {
    const response = await admin.post('korean', data);
    return response.data;
  } catch (error) {
    console.error('Error posting korean: ', error);
    throw error;
  }
};

export const getAdminKorean = async (params) => {
  try {
    const response = await admin.get('korean', { params });
    return response.data;
  } catch (error) {
    console.error('Error getting korean: ', error);
    throw error;
  }
};

export const postAdminKoreanRestrict = async (data) => {
  try {
    const response = await admin.post('korean/restrict', data);
    return response.data;
  } catch (error) {
    console.error('Error posting korean account restrict: ', error);
    throw error;
  }
};

export const patchAdminKoreanRestrict = async (id) => {
  try {
    const response = await admin.patch(`korean/restrict/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error patching korean account restrict: ', error);
    throw error;
  }
};

export const getAdminKoreanAccount = async () => {
  try {
    const response = await admin.get('korean/account');
    return response.data;
  } catch (error) {
    console.error('Error getting korean account: ', error);
    throw error;
  }
};

export const patchAdminKoreanAccount = async (data) => {
  try {
    const response = await admin.patch('korean/account', data);
    return response.data;
  } catch (error) {
    console.error('Error patching korean account: ', error);
    throw error;
  }
};

export const deleteAdminKoreanAccount = async (std_kor_id) => {
  try {
    const response = await admin.delete(`korean/account/${std_kor_id}`);
    return response.data;
  } catch (error) {
    console.error('Error deleting korean account: ', error);
    throw error;
  }
};
