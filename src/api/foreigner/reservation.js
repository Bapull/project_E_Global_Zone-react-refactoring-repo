import { foreigner } from '../axios';

// Get foreigner reservation by schedule ID
export const getForeignerReservation = async (sch_id) => {
  try {
    const response = await foreigner.get(`/reservation/${sch_id}`);
    return response.data;
  } catch (error) {
    console.error('Error getting foreigner reservation: ', error);
    throw error;
  }
};

// Patch foreigner reservation permission
export const patchForeignerReservationPermission = async (sch_id, data) => {
  try {
    const response = await foreigner.patch(`/reservation/permission/${sch_id}`, data);
    return response.data;
  } catch (error) {
    console.error('Error patching foreigner reservation permission: ', error);
    throw error;
  }
};

// Post foreigner reservation result using FormData
export const postForeignerReservationResult = async (sch_id, data, setState) => {
  try {
    const response = await foreigner.post(`/reservation/result/${sch_id}?guard=foreigner`, data, {
      headers: {
        'Content-Type': 'multipart/form-data',
        Authorization: `Bearer ${window.localStorage.getItem('global-zone-foreigner-token')}`,
      },
    });

    if (response.status === 201 || response.status === 202) {
      setState(true);
      alert('결과 입력에 성공하였습니다.');
    }
  } catch (error) {
    console.error('Error posting foreigner reservation result: ', error);
    throw error;
  }
};
