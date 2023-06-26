import axios from 'axios';
import ProfileBody from '../../../../Components/Employee/Onboarding/Profile/ProfileBody';
import { file_header, headers } from '../../header';
import {ApiConfig} from "../../../../utilities/apiconfig";

export const profileUpdate = (profile) =>
  ApiConfig().put(`api/profile`, profile);

export const adminProfileUpdate = (profile, userId) =>
  ApiConfig().put(`admin/employee/${userId}`, profile);

export const roles = () =>
  axios.get(`${process.env.REACT_APP_BASEURL}admin/role`, { headers: headers });

export const adminGetUserProfile = (userId) => ApiConfig().get(`admin/employee/${userId}`);

export const userProfile = () => ApiConfig().get('api/profile');

export const company_branch = () =>
  axios.get(`${process.env.REACT_APP_BASEURL}admin/company`, {
    headers: headers,
  });

export const global_settings = () =>
  axios.get(`${process.env.REACT_APP_BASEURL}utils/settings`, { headers: headers });

export const position = () =>
  axios.get(`${process.env.REACT_APP_BASEURL}admin/position`, {
    headers: headers,
  });

export const profile = () =>
  axios.get(`${process.env.REACT_APP_BASEURL}api/profile`, {
    headers: headers,
  });

export const upoladPassport = (formData) =>
  axios.post(`${process.env.REACT_APP_BASEURL}utils/upload-file`, formData, {
    headers: file_header,
  });

// export const upoladPassport = (passportImage) => axios.post(
//     "http://127.0.0.1:8000/api/passport-image",
//     passportImage,
//     {headers : file_header}
// )
