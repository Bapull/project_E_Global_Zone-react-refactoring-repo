const { admin } = require('../axios');

export const postAdminNotice = async (data) => {
  try {
    const response = await admin.post('notice', data);
    return response.data;
  } catch (error) {
    console.error('Error posting notice: ', error);
    throw error;
  }
};

export const deleteAdminNotice = async (noti_id) => {
  try {
    const response = await admin.delete(`notice/${noti_id}`);
  } catch (error) {
    console.error('Error deleting notice: ', error);
    throw error;
  }
};
