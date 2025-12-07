import {
  IGetBusinessRecommendationRequest,
  IGetBusinessRecommendationResponse,
} from '@/lib/feature/businessRecommendation/presentation/dto/GetBusinessRecommendation.dto';

export interface InsertTransactionRepositoryPort {
  getAll(
    request: IGetBusinessRecommendationRequest
  ): Promise<IGetBusinessRecommendationResponse | null>;
}
