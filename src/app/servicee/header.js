export const headers = {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
    'Authorization' : `Bearer ${localStorage.getItem('token')}`
}