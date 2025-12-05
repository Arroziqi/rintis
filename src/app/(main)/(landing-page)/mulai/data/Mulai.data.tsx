import { MulaiStepType } from '@/app/(main)/(landing-page)/mulai/type/Mulai.type';
import { StyledOutlineInput } from '@/components/input/Input.styled';
import { StyledOption, StyledSelect } from '@/components/select/Select.styled';
import InputTag from '@/app/(main)/(landing-page)/mulai/components/InputTag';

export const MulaiData: MulaiStepType[] = [
  {
    id: 1,
    title: 'Ayo kita mulai,',
    description: 'Pertama, kita perlu tau berapa modal yang siap kamu gunakan',
    content: (
      <StyledOutlineInput
        placeholder={'Pastikan ini bukan uang untuk kebutuhan sehari-hari ya!'}
      />
    ),
  },
  {
    id: 2,
    title: 'Oke, modal sudah aman',
    description:
      'Sekarang soal waktu. Seberapa banyak waktu luang yang bisa kamu sisihkan setiap harinya untuk mengurus bisnis ini?',
    content: (
      <StyledOutlineInput placeholder={'Pertimbangin waktu luang kamu ya!'} />
    ),
  },
  {
    id: 3,
    title: 'Oke,  lanjut',
    description:
      'Bisnis itu harus dinikmati. Kira-kira, kamu lebih enjoy ngerjain yang mana nih?',
    content: <InputTag />,
  },
  {
    id: 4,
    title: 'Terakhir',
    description: 'rencananya kamu mau jalanin bisnis ini di mana?',
    content: (
      <form className={'w-full'}>
        <StyledSelect id={'place'}>
          <StyledOption value={'rumah'}>Di Rumah Saja</StyledOption>
          <StyledOption value={'keliling/mobile'}>
            Keliling / Mobile
          </StyledOption>
          <StyledOption value={'sewa'}>Sewa Lokasi</StyledOption>
          <StyledOption value={'online'}>Full Online</StyledOption>
        </StyledSelect>
      </form>
    ),
  },
];
