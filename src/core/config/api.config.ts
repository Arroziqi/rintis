export const API_BASE_URL = 'https://rintis.cloud/api';

export const API_ENDPOINTS = {
  AUTH: {
    REGISTER: '/user/auth/register',
    LOGIN: '/user/auth/login',
  },
  USERINFO: '/user/info',
  BALANCE: '/getBalance',
  TRANSAKSI: '/insertTransaksi',
  GETALLTRANSAKSI: '/getAll',
} as const;
