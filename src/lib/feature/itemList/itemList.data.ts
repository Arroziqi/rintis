'use server';

import { getAuthToken } from '@/lib/auth';
import { API_BASE_URL, API_ENDPOINTS } from '@/core/config/api.config';
import { redirect } from 'next/navigation';
import { cookies } from 'next/headers';
import RecomendedItemTypes from '@/types/ItemListTypes';

export async function fetchItemList() {
  const token = await getAuthToken();

  if (!token) {
    return null;
  }

  try {
    const url = `${API_BASE_URL}${API_ENDPOINTS.GETITEMLIST}`;

    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      cache: 'no-store',
    });
    // If token is invalid/expired (401), clear cookies and redirect to login
    if (response.status === 401) {
      console.log('Token expired or invalid, redirecting to login');
      const cookieStore = await cookies();
      cookieStore.delete('auth_token');
      cookieStore.delete('user_id');
      redirect('/login');
    }

    if (!response.ok) {
      const errorText = await response.text();
      console.error(
        'Failed to fetch items recommendation:',
        response.status,
        errorText
      );
      return null;
    }

    const data = await response.json();
    return data as RecomendedItemTypes[];
  } catch (error) {
    console.error('Error fetching items recommendation:', error);
    return null;
  }
}
