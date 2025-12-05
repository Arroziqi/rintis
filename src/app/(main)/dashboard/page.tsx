'use client';

import Card from '@/components/Card';
import { MultipleLineChart } from '@/components/chart/MultipleLineChart';
import { Chip } from '@/components/Chip';
import { StyledFlex } from '@/components/common/styledFlexDiv/StyledFlexDiv';
import { StyledLabel } from '@/components/input/InputLabel.styled';
import Typography from '@/components/Typography';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Checkbox } from '@/components/ui/checkbox';
import { lightPalette } from '@/core/theme/styleGuide/color';
import {
  Brain,
  EllipsisVertical,
  PlusIcon,
  TrendingDown,
  TrendingUp,
} from 'lucide-react';

export default function DashboardPage() {
  return (
    <>
      <StyledFlex justify="space-between" align="center">
        <StyledFlex direction="column">
          <Typography variant={'h5'} color={lightPalette.primary.main}>
            Hallo, Jane Doe
          </Typography>
          <Typography variant={'caption'} color={lightPalette.text.disabled}>
            Yuk, kita kelola keuanganmu hari ini!
          </Typography>
        </StyledFlex>
        <Avatar className="w-15 h-15">
          <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </StyledFlex>

      <Card type="fill" color="#B29CFF" className="mt-5">
        <StyledFlex direction="column" gap={5}>
          <Typography variant={'caption'} color={lightPalette.text.inverse}>
            Kamu punya,
          </Typography>
          <Typography variant={'h5'} color={lightPalette.text.inverse}>
            Rp 5.000.000
          </Typography>
        </StyledFlex>
      </Card>

      <StyledFlex direction="column" gap={5} className="mt-5">
        <Typography variant={'caption'} color={lightPalette.text.primary}>
          Daftar item yang wajib untuk jualanmu
        </Typography>
        <StyledFlex justify="space-between">
          <Chip
            labelWeight="bold"
            type="badge"
            label="Tambah Item"
            iconLeft={<PlusIcon />}
          />
          <StyledFlex align="center" gap={5} className="mr-5">
            <StyledLabel htmlFor="select-all">Pilih Semua</StyledLabel>
            <Checkbox id="select-all" />
          </StyledFlex>
        </StyledFlex>
        <Card type="outlined">
          <StyledFlex align="center" justify="space-between">
            <StyledFlex align="center" gap={10}>
              <EllipsisVertical />
              <StyledFlex direction="column">
                <Typography
                  weight="bold"
                  variant={'caption'}
                  color={lightPalette.text.primary}
                >
                  Booth Portable / Meja
                </Typography>
                <Typography
                  variant={'caption'}
                  color={lightPalette.text.primary}
                >
                  Est. Harga: Rp 800.000
                </Typography>
              </StyledFlex>
            </StyledFlex>
            <Checkbox id="item" />
          </StyledFlex>
        </Card>
      </StyledFlex>

      <StyledFlex justify="space-between" className="mt-5" gap={20}>
        <Card type="fill" color="#F0EEFA" className="w-full">
          <StyledFlex
            gap={5}
            align="center"
            justify="space-evenly"
            height="100%"
          >
            <TrendingUp size={24} color={lightPalette.primary.main} />
            <Typography
              weight="bold"
              variant={'caption'}
              color={lightPalette.text.primary}
            >
              Catat <br /> Pemasukan
            </Typography>
          </StyledFlex>
        </Card>
        <Card type="fill" color="#F0EEFA" className="w-full">
          <StyledFlex
            gap={5}
            align="center"
            justify="space-evenly"
            height="100%"
          >
            <TrendingDown size={24} color={lightPalette.primary.main} />
            <Typography
              weight="bold"
              variant={'caption'}
              color={lightPalette.text.primary}
            >
              Catat <br /> Pengeluaran
            </Typography>
          </StyledFlex>
        </Card>
      </StyledFlex>

      <Card type="outlined" className="w-full mt-5">
        <MultipleLineChart />
      </Card>

      <div className="overflow-x-auto flex space-x-4 mt-5">
        <Card type="fill" color="#F0EEFA" className="shrink-0 w-80">
          <StyledFlex direction="column" gap={10}>
            <StyledFlex justify="space-between" align="center">
              <Typography
                variant={'bodyMedium'}
                weight="bold"
                color={lightPalette.primary.main}
              >
                Potensi bocor halus
              </Typography>
              <Chip
                type="badge"
                label="AI Insight"
                iconLeft={<Brain size={20} />}
              />
            </StyledFlex>
            <Typography variant={'caption'} weight="regular">
              “Minggu ini biaya belanja bahan kamu 60% dari penjualan lho.
              Normalnya cuma 40%”
            </Typography>
            <Typography variant={'pixie'} weight="regular">
              <b>Coba cek: </b>
              Apakah harga pasar naik? Atau takaran porsi kamu kebanyakan? Yuk
              evaluasi biar gak kerja bakti.
            </Typography>
          </StyledFlex>
        </Card>
        <Card type="fill" color="#F0EEFA" className="shrink-0 w-80">
          <StyledFlex direction="column" gap={10}>
            <StyledFlex justify="space-between" align="center">
              <Typography
                variant={'bodyMedium'}
                weight="bold"
                color={lightPalette.primary.main}
              >
                Potensi bocor halus
              </Typography>
              <Chip
                type="badge"
                label="AI Insight"
                iconLeft={<Brain size={20} />}
              />
            </StyledFlex>
            <Typography variant={'caption'} weight="regular">
              “Minggu ini biaya belanja bahan kamu 60% dari penjualan lho.
              Normalnya cuma 40%”
            </Typography>
            <Typography variant={'pixie'} weight="regular">
              <b>Coba cek: </b>
              Apakah harga pasar naik? Atau takaran porsi kamu kebanyakan? Yuk
              evaluasi biar gak kerja bakti.
            </Typography>
          </StyledFlex>
        </Card>
        <Card type="fill" color="#F0EEFA" className="shrink-0 w-80">
          <StyledFlex direction="column" gap={10}>
            <StyledFlex justify="space-between" align="center">
              <Typography
                variant={'bodyMedium'}
                weight="bold"
                color={lightPalette.primary.main}
              >
                Potensi bocor halus
              </Typography>
              <Chip
                type="badge"
                label="AI Insight"
                iconLeft={<Brain size={20} />}
              />
            </StyledFlex>
            <Typography variant={'caption'} weight="regular">
              “Minggu ini biaya belanja bahan kamu 60% dari penjualan lho.
              Normalnya cuma 40%”
            </Typography>
            <Typography variant={'pixie'} weight="regular">
              <b>Coba cek: </b>
              Apakah harga pasar naik? Atau takaran porsi kamu kebanyakan? Yuk
              evaluasi biar gak kerja bakti.
            </Typography>
          </StyledFlex>
        </Card>
      </div>
    </>
  );
}
