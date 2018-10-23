import { fetchApi } from '../services/api';

const endPoints = {
  scanBusinessCard: '/business-card',
  addPartner: '/partner/add',
  get: '/users',
};

export const scanBusinessCard = payload => fetchApi(endPoints.scanBusinessCard, payload, 'post');
export const addPartner = payload => fetchApi(endPoints.addPartner, payload, 'post');

