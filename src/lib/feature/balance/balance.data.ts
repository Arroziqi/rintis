'use server';

import { getAuthToken } from '@/lib/auth';
import { API_BASE_URL, API_ENDPOINTS } from '@/core/config/api.config';

export async function fetchBalance(): Promise<number | null> {
  try {
    const token = await getAuthToken();

    if (!token) {
      return null;
    }

    const url = `${API_BASE_URL}${API_ENDPOINTS.BALANCE}`;

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
      console.error(
        'Failed to fetch user balance:',
        response.status,
        errorText
      );
      return null;
    }

    const data = await response.json();
    return data as number;
  } catch (error) {
    console.error('Error fetching balance:', error);
    return null;
  }
}
