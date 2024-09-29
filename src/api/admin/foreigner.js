import { admin } from '../axios';

// Function to create a new foreigner account
export const postForeignerAccount = async (data) => {
  try {
    const response = await admin.post('foreigner/account', data);
    return response.data;
  } catch (error) {
    console.error('Error posting foreigner account: ', error);
    throw error;
  }
};

// Function to search for a foreigner account
export const postAdminForeignerSearch = async (data) => {
  try {
    const response = await admin.post('foreigner/search', data);
    return response.data;
  } catch (error) {
    console.error('Error posting foreigner search: ', error);
    throw error;
  }
};

// Function to update an existing foreigner account
export const updateAdminForeignerAccount = async (std_for_id, data) => {
  try {
    const response = await admin.patch(`foreigner/account/update/${std_for_id}`, data);
    return response.data;
  } catch (error) {
    console.error('Error updating foreigner account: ', error);
    throw error;
  }
};

// Function to partially update a foreigner account
export const patchAdminForeignerAccount = async (std_for_id) => {
  try {
    const response = await admin.patch(`foreigner/account/${std_for_id}`);
    return response.data;
  } catch (error) {
    console.error('Error patching foreigner account: ', error);
    throw error;
  }
};

// Function to delete a foreigner account
export const deleteAdminForeignerAccount = async (std_for_id) => {
  try {
    const response = await admin.delete(`foreigner/account/${std_for_id}`);
    return response.data;
  } catch (error) {
    console.error('Error deleting foreigner account: ', error);
    throw error;
  }
};

// Function to get all foreigner accounts with optional query parameters
export const getAdminForeignerAll = async (params) => {
  try {
    const response = await admin.get('foreigner/all', { params });
    return response.data;
  } catch (error) {
    console.error('Error getting all foreigner: ', error);
    throw error;
  }
};

// Function to get foreigner work details my section ID
export const getAdminForeignerWork = async (sect_id) => {
  try {
    const response = await admin.get(`foreigner/work/${sect_id}`);
    return response.data;
  } catch (error) {
    console.error('Error getting foreigner work: ', error);
    throw error;
  }
};

// Function to get special foreigner work details by section ID
export const getAdminForeignerWorkSpecial = async (sect_id, params) => {
  try {
    const response = await admin.get(`foreigner/work/special/${sect_id}`, { params });
    return response.data;
  } catch (error) {
    console.error('Error getting foreigner work special: ', error);
    throw error;
  }
};

// Function to add foreigner work details by section ID
export const postAdminForeignerWork = async (sect_id, data) => {
  try {
    const response = await admin.post(`foreigner/work/${sect_id}`, data);
    return response.data;
  } catch (error) {
    console.error('Error posting foreigner work: ', error);
    throw error;
  }
};

// Function to update foreigner no work by section ID
export const getAdminForeignerNoWork = async (sect_id) => {
  try {
    const response = await admin.get(`foreigner/no_work/${sect_id}`);
    return response.data;
  } catch (error) {
    console.error('Error getting foreigner no work: ', error);
    throw error;
  }
};

// Function to get foreigner account favorite by student ID
export const getAdminForeignerAccountFavorite = async (std_id, favorite_bool) => {
  try {
    const response = await admin.get(`foreigner/account/${std_id}`, { params: { favorite_bool } });
    return response.data;
  } catch (error) {
    console.error('Error getting foreigner account favorite: ', error);
    throw error;
  }
};

// Function to get foreigner data with optional query parameters
export const getAdminForeigner = async (params) => {
  try {
    const response = await admin.get('foreigner', { params });
    return response.data;
  } catch (error) {
    console.error('Error getting foreigner: ', error);
    throw error;
  }
};

// Function to get reservation data by schedule ID
export const getAdminReservation = async (sch_id) => {
  try {
    const response = await admin.get(`foreigner/reservation/${sch_id}`);
    return response.data;
  } catch (error) {
    console.error('Error getting reservation: ', error);
    throw error;
  }
};

// Function to update reservation permission by schedule ID
export const patchAdminReservationPermission = async (sch_id, data) => {
  try {
    const response = await admin.patch(`foreigner/reservation/permission/${sch_id}`, data);
    return response.data;
  } catch (error) {
    console.error('Error patching reservation permission: ', error);
    throw error;
  }
};
