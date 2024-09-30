import { admin } from '../axios';

export const getAdminSettingReset = async () => {
  try {
    const response = await admin.get('setting/reset', { params: { factory_reset: 1 } });
    return response.data;
  } catch (error) {
    console.error('Error getting setting reset: ', error);
    throw error;
  }
};

export const getAdminSetting = async (params) => {
  try {
    const response = await admin.get('setting', { params });
    return response.data;
  } catch (error) {
    console.error('Error getting setting: ', error);
    throw error;
  }
};

export const postAdminSetting = async (data) => {
  try {
    const response = await admin.post('setting', data);
    return response.data;
  } catch (error) {
    console.error('Error posting setting: ', error);
    throw error;
  }
};
