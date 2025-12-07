'use client';

import { useEffect, useRef } from 'react';
import { toast } from 'sonner';
import { localStorageFlowUtils } from '@/common/utils/localStorageFlow';
import { localStorageKelolaFlowUtils } from '@/common/utils/localStorageKelolaFlowUtils';

const MAX_RETRIES = 3;

interface RetryCount {
  flow: number;
  kelola: number;
}

export function useFlowExecutor(): void {
  const retryCountRef = useRef<RetryCount>({ flow: 0, kelola: 0 });

  const executeFlow = async (
    flow: unknown,
    toastId: string | number
  ): Promise<void> => {
    console.log('Retrieved flow', flow);
    try {
      const res = await fetch('/api/flow/execute', {
        method: 'POST',
        body: JSON.stringify(flow),
        headers: { 'Content-Type': 'application/json' },
      });

      if (!res.ok) throw new Error('Flow execution failed');

      toast.success('Rekomendasi berhasil diproses!', { id: toastId });
      localStorageFlowUtils.clearFlow();
      retryCountRef.current.flow = 0;

      setTimeout(() => window.location.reload(), 600);
    } catch (error) {
      handleFlowError(flow, toastId);
    }
  };

  const executeKelolaFlow = async (
    kelolaFlow: unknown,
    toastId: string | number
  ): Promise<void> => {
    try {
      const res = await fetch('/api/flow/execute-kelola', {
        method: 'POST',
        body: JSON.stringify(kelolaFlow),
        headers: { 'Content-Type': 'application/json' },
      });

      if (!res.ok) throw new Error('Kelola flow execution failed');

      toast.success('Data kelola berhasil disimpan!', { id: toastId });
      localStorageKelolaFlowUtils.clearFlow();
      retryCountRef.current.kelola = 0;

      setTimeout(() => window.location.reload(), 600);
    } catch (error) {
      handleKelolaError(kelolaFlow, toastId);
    }
  };

  const handleFlowError = (flow: unknown, toastId: string | number): void => {
    const currentRetry = retryCountRef.current.flow;

    if (currentRetry < MAX_RETRIES) {
      const nextRetry = currentRetry + 1;
      toast.error(
        `Server AI sedang banyak request. Coba lagi? (Percobaan ${currentRetry + 1}/${MAX_RETRIES})`,
        {
          id: toastId,
          action: {
            label: 'Retry',
            onClick: () => {
              retryCountRef.current.flow = nextRetry;
              const newToastId = toast.loading(
                'Memproses rekomendasi bisnismu...'
              );
              executeFlow(flow, newToastId);
            },
          },
        }
      );
    } else {
      toast.error(
        'Server AI sedang ramai. Silakan coba lagi nanti atau hubungi support 🙏',
        {
          id: toastId,
        }
      );
    }
  };

  const handleKelolaError = (
    kelolaFlow: unknown,
    toastId: string | number
  ): void => {
    const currentRetry = retryCountRef.current.kelola;

    if (currentRetry < MAX_RETRIES) {
      const nextRetry = currentRetry + 1;
      toast.error(
        `Server AI sedang banyak request. Coba lagi? (Percobaan ${currentRetry + 1}/${MAX_RETRIES})`,
        {
          id: toastId,
          action: {
            label: 'Retry',
            onClick: () => {
              retryCountRef.current.kelola = nextRetry;
              const newToastId = toast.loading(
                'Menyimpan data kelola harian...'
              );
              executeKelolaFlow(kelolaFlow, newToastId);
            },
          },
        }
      );
    } else {
      toast.error(
        'Server AI sedang ramai. Silakan coba lagi nanti atau hubungi support 🙏',
        {
          id: toastId,
        }
      );
    }
  };

  useEffect(() => {
    if ((window as unknown as Record<string, boolean>).__FLOW_EXECUTED__)
      return;
    (window as unknown as Record<string, boolean>).__FLOW_EXECUTED__ = true;

    const flow = localStorageFlowUtils.getFlow();
    const kelolaFlow = localStorageKelolaFlowUtils.getFlow();

    if (flow) {
      const toastId = toast.loading('Memproses rekomendasi bisnismu...');
      executeFlow(flow, toastId);
      return;
    }

    if (kelolaFlow) {
      const toastId = toast.loading('Menyimpan data kelola harian...');
      executeKelolaFlow(kelolaFlow, toastId);
    }
  }, []);
}
