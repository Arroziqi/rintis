'use client';

import Typography from '@/components/Typography';
import PrimaryButton from '@/components/button/primary/PrimaryButton';
import { lightPalette } from '@/core/theme/styleGuide/color';
import { StyledTextLink } from '@/components/common/link/TextLink.styled';
import { StyledOutlineInput } from '@/components/input/Input.styled';

export default function LoginPage() {
  return (
    <>
      <Typography variant={'h5'} color={lightPalette.primary.main}>
        Selamat datang 👋
      </Typography>

      <form className={'mb-2'}>
        <Typography variant={'caption'} weight={'regular'}>
          Username
        </Typography>
        <StyledOutlineInput className={'mb-1'} placeholder={'Username'} />

        <Typography variant={'caption'} weight={'regular'}>
          Password
        </Typography>
        <StyledOutlineInput type={'password'} placeholder={'Password'} />
      </form>

      <PrimaryButton href={'/mulai'}>Masuk</PrimaryButton>
      <Typography variant={'caption'} weight={'regular'} align={'center'}>
        Belum punya akun?{' '}
        <StyledTextLink href={'/register'}>Daftar</StyledTextLink>
      </Typography>
    </>
  );
}
