import { axiosWithAuth } from './axiosWithAuth';

export const getColorsWithAxios = () => {
    return axiosWithAuth().get('/colors')
        .then(res => res)
        .catch(error => error);
  }