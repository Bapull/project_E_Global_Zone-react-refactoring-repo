import { korean } from '../axios';

export const getKoreanReservation = async () => {
  try {
    const response = await korean.get('/reservation');
    return response.data;
  } catch (error) {
    console.error('Error getting korean reservation: ', error);
    throw error;
  }
};

export const postKoreanReservation = async (sch_id) => {
  try {
    const response = await korean.post(`/reservation/${sch_id}`);
    return response.data;
  } catch (error) {
    console.error('Error posting korean reservation: ', error);
    throw error;
  }
};

export const deleteKoreanReservation = async (res_id) => {
  try {
    const response = await korean.delete(`/reservation/${res_id}`);
    return response.data;
  } catch (error) {
    console.error('Error deleting korean reservation: ', error);
    throw error;
  }
};

export const getKoreanReservationResult = async (sect_id, search_month) => {
  try {
    const response = await korean.get('/reservation' + '/result', { params: { sect_id, search_month } });
    return response.data;
  } catch (error) {
    console.error('Error getting korean reservation result: ', error);
    throw error;
  }
};
