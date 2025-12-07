'use client';

import { StyledFlex } from '@/components/common/styledFlexDiv/StyledFlexDiv';
import Typography from '@/components/Typography';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { lightPalette } from '@/core/theme/styleGuide/color';

interface UserHeaderProps {
  name: string;
  username: string;
}

export function UserHeader({ name, username }: UserHeaderProps) {
  return (
    <StyledFlex justify="space-between" align="center">
      <StyledFlex direction="column">
        <Typography variant={'h5'} color={lightPalette.primary.main}>
          Hallo, {name}
        </Typography>
        <Typography variant={'caption'} color={lightPalette.text.disabled}>
          Yuk, kita kelola keuanganmu hari ini!
        </Typography>
      </StyledFlex>
      <Avatar className="w-15 h-15">
        <AvatarImage src="https://github.com/shadcn.png" alt={username} />
        <AvatarFallback>{name.charAt(0).toUpperCase()}</AvatarFallback>
      </Avatar>
    </StyledFlex>
  );
}
