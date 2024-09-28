const { admin } = require('../axios');

// Get department list
export const getAdminDeptList = async () => {
  try {
    const response = await admin.get('department');
    return response.data;
  } catch (error) {
    console.error('Error fetching department list: ', error);
  }
};

// Post department list
export const postAdminDeptList = async (data) => {
  try {
    const response = await admin.post('department', data);
    return response.data;
  } catch (error) {
    console.error('Error posting department list: ', error);
  }
};

// Patch department list
export const patchAdminDeptList = async (dept_id, data) => {
  try {
    const response = await admin.patch(`department/${dept_id}`, data);
    return response.data;
  } catch (error) {
    console.error('Error patching department list: ', error);
  }
};

// Delete department list
export const deleteAdminDeptList = async (dept_id) => {
  try {
    const response = await admin.delete(`department/${dept_id}`);
    return response.data;
  } catch (error) {
    console.error('Error deleting department list: ', error);
  }
};
