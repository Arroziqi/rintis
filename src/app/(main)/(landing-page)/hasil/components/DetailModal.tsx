import React from 'react';
import { Modal, ModalProps } from '@/components/modal/Modal';
import { StyledFlex } from '@/components/common/styledFlexDiv/StyledFlexDiv';
import Typography from '@/components/Typography';
import { StyledButton } from '@/components/button/primary/PrimaryButton.styled';
import { IBusinessDetail } from '@/lib/feature/businessRecommendation/presentation/dto/GetBusinessRecommendation.dto';

interface DetailModalProps extends ModalProps {
  data: IBusinessDetail;
}

function DetailModal({ data, ...props }: Readonly<DetailModalProps>) {
  const content = (
    <>
      <StyledFlex justify={'space-between'}>
        <Typography variant={'pixie'}>Omzet Harian</Typography>
        <Typography variant={'pixie'}>{data.estimasi_omset_harian}</Typography>
      </StyledFlex>
      <StyledFlex justify={'space-between'}>
        <Typography variant={'pixie'}>HPP/Modal</Typography>
        <Typography variant={'pixie'}>{data.estimasi_hpp}</Typography>
      </StyledFlex>
      <StyledFlex justify={'space-between'}>
        <Typography variant={'pixie'}>Profit</Typography>
        <Typography variant={'pixie'}>{data.profit_harian}</Typography>
      </StyledFlex>

      {data.pro && <Typography variant={'pixie'}>✅ {data.pro}</Typography>}
      {data.kontra && (
        <Typography variant={'pixie'}>⚠️ {data.kontra}</Typography>
      )}

      <StyledButton
        className={'mt-5 w-fit self-center'}
        style={{ border: '1px solid #C4C4C4' }}
      >
        Pilih Bisnis
      </StyledButton>
    </>
  );

  return (
    <Modal isOpen={props.isOpen} onClose={props.onClose} header={props.header}>
      {content}
    </Modal>
  );
}

// Tambahkan CSS untuk animasi
const styles = `
  @keyframes fade-in {
    from {
      opacity: 0;
      transform: translateY(10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  
  .animate-fade-in {
    animation: fade-in 0.5s ease-out forwards;
  }
`;

// Tambahkan style ke document
if (typeof document !== 'undefined') {
  const styleSheet = document.createElement('style');
  styleSheet.textContent = styles;
  document.head.appendChild(styleSheet);
}

export default DetailModal;
