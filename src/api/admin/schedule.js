import { admin } from '../axios';

export const getAdminSchedule = async (params) => {
  try {
    const response = await admin.get('schedule', { params });
    return response.data;
  } catch (error) {
    console.error('Error getting schedule: ', error);
    throw error;
  }
};

export const postAdminSchedule = async (data) => {
  try {
    const response = await admin.post('schedule', data);
    return response.data;
  } catch (error) {
    console.error('Error posting schedule: ', error);
    throw error;
  }
};

export const getAdminScheduleImage = async (sch_id) => {
  try {
    const response = await admin.get(`schedule/image/${sch_id}`);
    return response.data;
  } catch (error) {
    console.error('Error getting schedule image: ', error);
    throw error;
  }
};

export const postAdminScheduleAdd = async (sch_id, data) => {
  try {
    const response = await admin.post(`schedule/add/${sch_id}`, data);
    return response.data;
  } catch (error) {
    console.error('Error posting schedule add: ', error);
    throw error;
  }
};

export const postAdminScheduleSome = async (data) => {
  try {
    const response = await admin.post('schedule/some', data);
    return response.data;
  } catch (error) {
    console.error('Error posting schedule some: ', error);
    throw error;
  }
};

export const deleteAdminScheduleAdd = async (sch_id) => {
  try {
    const response = await admin.delete(`schedule/add/${sch_id}`);
    return response.data;
  } catch (error) {
    console.error('Error deleting schedule add: ', error);
    throw error;
  }
};

export const deleteAdminScheduleSome = async (sch_id) => {
  try {
    const response = await admin.delete(`schedule/some/${sch_id}`);
    return response.data;
  } catch (error) {
    console.error('Error deleting schedule some: ', error);
    throw error;
  }
};

export const deleteAdminScheduleDate = async (params) => {
  try {
    const response = await admin.delete('schedule/date', { params });
    return response.data;
  } catch (error) {
    console.error('Error deleting schedule date: ', error);
    throw error;
  }
};

export const deleteAdminSchedule = async (params) => {
  try {
    const response = await admin.delete('/schedule', { params });
    return response.data;
  } catch (error) {
    console.error('Error deleting schedule: ', error);
    throw error;
  }
};

export const getAdminScheduleUnapproved = async (date, sch_state_of_permission) => {
  try {
    const response = await admin.get(`schedule/unapproved/${date}`, { params: { sch_state_of_permission } });
    return response.data;
  } catch (error) {
    console.error('Error getting schedule unapproved: ', error);
    throw error;
  }
};

export const patchAdminScheduleApproval = async (sch_id, data) => {
  try {
    const response = await admin.patch(`schedule/approval/${sch_id}`, data);
    return response.data;
  } catch (error) {
    console.error('Error patching schedule approval: ', error);
    throw error;
  }
};

export const getAdminHoliday = async (params) => {
  try {
    const response = await admin.get('holiday', { params });
    return response.data;
  } catch (error) {
    console.error('Error getting holiday: ', error);
    throw error;
  }
};

export const patchAdminScheduleUpdate = async (sch_id, params) => {
  try {
    const response = await admin.patch(`schedule/update/${sch_id}`, params);
    alert(response.data.message);
    return response.data;
  } catch (error) {
    console.error('Error patching schedule update: ', error);
    throw error;
  }
};
