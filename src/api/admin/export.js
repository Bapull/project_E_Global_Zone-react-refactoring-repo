import { admin } from '../axios';

// Decodes a string to make it safe for file download
const decoder = (string) => decodeURIComponent(escape(string));

// Downloads a file from the response
const downloadFile = (response, defaultFileName = 'file') => {
  let filename = '';
  const blob = new Blob([response.data], {
    type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;',
  });

  // Extracts the filename from the response header if present
  if (response.headers['content-disposition']) {
    response.headers['content-disposition'].split(';').forEach((v) => {
      if (v.includes('filename')) {
        filename = v.split('=')[1].replace(/"/g, '');
      }
    });
  }

  const blobURL = window.URL.createObjectURL(blob);
  const tempLink = document.createElement('a');
  tempLink.style.display = 'none';
  tempLink.href = blobURL;
  tempLink.setAttribute('download', decoder(filename || defaultFileName));
  document.body.appendChild(tempLink);
  tempLink.click();
  document.body.removeChild(tempLink);
  window.URL.revokeObjectURL(blobURL);
};

// Fetches and downloads the foreigner data export
export const getAdminExportForeigner = async () => {
  try {
    const response = await admin.get('export/foreigner', { responseType: 'arraybuffer' });
    downloadFile(response);
  } catch (error) {
    console.error('Error exporting foreigner data:', error);
  }
};

// Fetches and downloads the foreigner data export for a specific section
export const getAdminExportForeignerSect = async (sect_id, sect_name) => {
  try {
    const response = await admin.get(`export/foreigner/sect/${sect_id}`, { responseType: 'arraybuffer' });
    downloadFile(response);
  } catch (error) {
    console.error(`Error exporting data for section ${sect_name}:`, error);
  }
};

// Fetches and downloads the result data export for a specific section
export const getAdminExportResult = async (sect_id, sect_name) => {
  try {
    const response = await admin.get(`export/result/${sect_id}`, { responseType: 'arraybuffer' });
    downloadFile(response, `${sect_name} 결과사진.zip`);
  } catch (error) {
    console.error(`Error exporting result data for section ${sect_name}:`, error);
  }
};

// Fetches and downloads the Korean data export
export const getAdminExportKorean = async () => {
  try {
    const response = await admin.get('export/korean', { responseType: 'arraybuffer' });
    downloadFile(response);
  } catch (error) {
    console.error('Error exporting Korean data:', error);
  }
};

// Fetches and downloads the Schedule data export
export const getAdminExportSchedule = async (params) => {
  try {
    const response = await admin.get('export/schedule', { responseType: 'arraybuffer', params });
    downloadFile(response);
  } catch (error) {
    console.error('Error exporting schedule:', error);
  }
};

// Fetches and downloads the reservation data export
export const getAdminExportReservation = async (params) => {
  try {
    const response = await admin.get('export/reservation', { responseType: 'arraybuffer', params });
    downloadFile(response);
  } catch (error) {
    console.error('Error exporting reservation data:', error);
  }
};
