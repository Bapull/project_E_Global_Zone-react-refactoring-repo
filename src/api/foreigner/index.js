import { foreigner, foreignerLogin, foreignerLogout } from '../axios';

export const patchPassword = async (data) => {
  try {
    const response = await foreigner.patch('/password', data);
    return response.data;
  } catch (error) {
    console.error('Error patching password: ', error);
    throw error;
  }
};

export const postForeignerLogout = async () => {
  try {
    const response = await foreignerLogout.post('');
    return response.data;
  } catch (error) {
    console.error('Error during foreigner logout: ', error);
    throw error;
  }
};

export const postForeignerLogin = async (data) => {
  try {
    const response = await foreignerLogin.post('', data);
    return response.data;
  } catch (error) {
    console.error('Error during foreigner login: ', error);
    throw error;
  }
};
