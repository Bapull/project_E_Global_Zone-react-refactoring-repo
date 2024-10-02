import { foreigner } from '../axios';

export const getForeignerSchedule = async (start_date, end_date) => {
  try {
    const response = await foreigner.get(`${'/schedule'}`, { params: { start_date: start_date, end_date: end_date } });
    return response.data;
  } catch (error) {
    console.error('Error getting foreigner schedule: ', error);
    throw error;
  }
};
