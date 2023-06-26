export const headers = {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
    'Authorization' : `Bearer ${localStorage.getItem('token')}`
};

export const file_header = {
    'Content-Type': 'multipart/form-data',
    'Authorization' : `Bearer ${localStorage.getItem('token')}`
};