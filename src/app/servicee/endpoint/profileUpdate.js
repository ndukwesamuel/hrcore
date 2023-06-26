import axios from 'axios'
import { headers } from '../header'

export const profileUpdate = (profile) => axios.put(
    `${process.env.REACT_APP_BASEURL}api/profile`, 
    profile,
    {headers : headers}
)