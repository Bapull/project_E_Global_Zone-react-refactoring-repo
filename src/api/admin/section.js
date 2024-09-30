const { admin } = require('../axios');

export const getAdminSection = async (params) => {
  try {
    const response = await admin.get('section', { params });
    return response.data;
  } catch (error) {
    console.error('Error getting section: ', error);
    throw error;
  }
};

export const patchAdminSection = async (sect_id, data) => {
  try {
    const response = await admin.patch(`section/${sect_id}`, data);
    return response.data;
  } catch (error) {
    console.error('Error patching section: ', error);
    throw error;
  }
};

export const deleteAdminSection = async (sect_id) => {
  try {
    const response = await admin.delete(`section/${sect_id}`);
    return response.data;
  } catch (error) {
    console.error('Error deleting section: ', error);
    throw error;
  }
};

export const postAdminSection = async (data) => {
  try {
    const response = await admin.post('section', data);
    return response.data;
  } catch (error) {
    console.error('Error posting section: ', error);
    throw error;
  }
};

export const getAdminSectionLastday = async (sect_id) => {
  try {
    const response = await admin.get(`section/lastday/${sect_id}`);
    return response.data;
  } catch (error) {
    console.error('Error getting section lastday: ', error);
    throw error;
  }
};
