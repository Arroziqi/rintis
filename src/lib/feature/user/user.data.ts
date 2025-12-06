'use server';

import { getAuthToken } from '@/lib/auth';
import { API_BASE_URL, API_ENDPOINTS } from '@/core/config/api.config';
import { UserInfo } from '@/types/UserInfoTypes';

export async function fetchUserInfo(): Promise<UserInfo | null> {
  try {
    const token = await getAuthToken();

    if (!token) {
      return null;
    }

    const url = `${API_BASE_URL}${API_ENDPOINTS.USERINFO}`;

    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      cache: 'no-store',
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error('Failed to fetch user info:', response.status, errorText);
      return null;
    }

    const data = await response.json();
    return data as UserInfo;
  } catch (error) {
    console.error('Error fetching user info:', error);
    return null;
  }
}
