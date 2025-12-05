import React from 'react';
import Typography from '@/components/Typography';
import Card from '@/components/Card';
import { StyledNote } from '@/components/note/Note.styled';
import { SuggestionItemType } from '@/app/(main)/(landing-page)/hasil/type/Hasil.type';
import { lightPalette } from '@/core/theme/styleGuide/color';
import { StyledFlex } from '@/components/common/styledFlexDiv/StyledFlexDiv';
import { StyledButton } from '@/components/button/primary/PrimaryButton.styled';
import { useModal } from '@/components/modal/hooks/useModal';
import DetailModal from '@/app/(main)/(landing-page)/hasil/components/DetailModal';

interface SuggestionItemProps {
  data: SuggestionItemType;
}

function SuggestionItem({ data }: Readonly<SuggestionItemProps>) {
  const { isOpen, openModal, closeModal } = useModal();

  return (
    <>
      <StyledFlex direction={'column'} gap={'10px'}>
        <Typography
          className={'self-start'}
          variant={'bodySmall'}
          weight={'regular'}
        >
          {data.insight}
        </Typography>
        <Card
          type={'fill'}
          color={lightPalette.background.subtle}
          className={'flex flex-col gap-[15px]'}
        >
          <Typography component={'p'} variant={'caption'} weight={'bold'}>
            {data.businesName}
          </Typography>
          <Typography component={'p'} variant={'caption'} weight={'regular'}>
            {data.description}
          </Typography>
          <Typography component={'p'} variant={'caption'} weight={'regular'}>
            Modal awal Rp ${data.initialCapital}
          </Typography>
          {data.note && <StyledNote>{data.note}</StyledNote>}

          <StyledButton
            onClick={openModal}
            className={'bg-white w-fit self-end'}
          >
            Lihat Rincian
          </StyledButton>
        </Card>
      </StyledFlex>

      <DetailModal
        data={data.details}
        isOpen={isOpen}
        onClose={closeModal}
        header={data.businesName}
      >
        Ini kontennya
      </DetailModal>
    </>
  );
}

export default SuggestionItem;
