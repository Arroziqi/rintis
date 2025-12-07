export interface IGetItemRecommendationRequest {
  business_model: string;
  budget: string;
  hour: string;
  location: string;
}

export interface IGetItemRecommendationResponse {
  data: {
    rekomendasi: IItemRecommendation[];
  };
  response_code: number;
}

export interface IItemRecommendation {
  nama_bisnis: string;
  description: string;
  explanation: string;
  estimasi_modal: number;
  info_lain: IItemDetail;
}

export interface IItemDetail {
  pro: string;
  kontra: string;
  simulasi_roi: string;
  estimasi_omset_harian: number;
  estimasi_hpp: number;
  profit_harian: number;
}
