import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useMemo,
  useState,
} from 'react';
import { useForm } from 'react-hook-form';
import { IGetBusinessRecommendationPayload } from '@/lib/feature/businessRecommendation/presentation/schema/GetBusinessRecommendation.schema';
import { IGetBusinessRecommendationResponse } from '@/lib/feature/businessRecommendation/presentation/dto/GetBusinessRecommendation.dto';
import { BusinessRecommendationContextType } from '@/app/(main)/(landing-page)/context/BusinessRecommendation.context.type';
import { parseAxiosError } from '@/lib/common/error/parseAxiosError';
import { getBusinessRecommendationUsecase } from '@/lib/feature/businessRecommendation/usecase/Get/GetBusinessRecommendation.usecase.instance';

// ---------------------------------------------
// Context
// ---------------------------------------------
const BusinessRecommendationContext = createContext<
  BusinessRecommendationContextType | undefined
>(undefined);

// ---------------------------------------------
// Provider
// ---------------------------------------------
export function BusinessRecommendationProvider({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  const [data, setData] = useState<IGetBusinessRecommendationResponse | null>(
    null
  );
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const usecase = getBusinessRecommendationUsecase;

  // React Hook Form
  const form = useForm<IGetBusinessRecommendationPayload>({
    defaultValues: {
      businessModel: '',
      budget: '',
      hour: '',
      location: '',
    },
  });

  // SUBMIT HANDLER
  const onSubmit = useCallback(
    async (payload: IGetBusinessRecommendationPayload) => {
      setLoading(true);
      setError(null);

      try {
        const result = await usecase.execute(payload);
        setData(result);
      } catch (err: unknown) {
        const parsedError = parseAxiosError(
          err,
          'Gagal memuat rekomendasi bisnis'
        );
        setError(parsedError.message);
      } finally {
        setLoading(false);
      }
    },
    [usecase]
  );

  // Memoized value
  const value = useMemo(
    () => ({
      form,
      data,
      loading,
      error,
      onSubmit,
    }),
    [form, data, loading, error, onSubmit]
  );

  return (
    <BusinessRecommendationContext.Provider value={value}>
      {children}
    </BusinessRecommendationContext.Provider>
  );
}

// ---------------------------------------------
// Hook
// ---------------------------------------------
export function useBusinessRecommendation() {
  const ctx = useContext(BusinessRecommendationContext);
  if (!ctx) {
    throw new Error(
      'useBusinessRecommendation harus digunakan di dalam BusinessRecommendationProvider'
    );
  }
  return ctx;
}
