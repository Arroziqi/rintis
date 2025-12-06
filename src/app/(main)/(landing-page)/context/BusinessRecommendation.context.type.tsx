// BusinessRecommendationContext.type.ts

import { IGetBusinessRecommendationResponse } from '@/lib/feature/businessRecommendation/presentation/dto/GetBusinessRecommendation.dto';
import { IGetBusinessRecommendationPayload } from '@/lib/feature/businessRecommendation/presentation/schema/GetBusinessRecommendation.schema';
import { UseFormReturn } from 'react-hook-form';

export interface BusinessRecommendationContextType {
  form: UseFormReturn<IGetBusinessRecommendationPayload>;
  data: IGetBusinessRecommendationResponse | null;
  loading: boolean;
  error: string | null;

  onSubmit: (data: IGetBusinessRecommendationPayload) => Promise<void>;
}
