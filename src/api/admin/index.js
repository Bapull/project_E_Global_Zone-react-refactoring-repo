const { adminLogin, adminLogout, instance } = require('../axios');

export const postAdminLogin = async (data) => {
  try {
    const response = await adminLogin.post('', data);
    return response.data;
  } catch (error) {
    console.error('Error during admin login: ', error);
    throw error;
  }
};

export const postAdminLogout = async () => {
  try {
    const response = await adminLogout.post('');
    return response.data;
  } catch (error) {
    console.error('Error during admin logout: ', error);
    throw error;
  }
};

export const postReset = async () => {
  try {
    const response = await instance.post('/reset');
    return response.data;
  } catch (error) {
    console.error('Error during reset: ', error);
    throw error;
  }
};
