import { Box, Button, Container, Stack, Typography } from '@mui/material'
import { Link as RouterLink } from 'react-router-dom'
import heroImg from '../assets/hero.jpg'

export default function Hero() {
  const reserveText =
    'Hi Layer3, I’d like to reserve a table for [date/time], [guests].'
  const mailto = `mailto:reservations@layer3.lk?subject=${encodeURIComponent(
    'Table reservation — Layer3 (Jaffna)',
  )}&body=${encodeURIComponent(reserveText)}`

  return (
    <Box
      sx={{
        position: 'relative',
        minHeight: { xs: 540, md: 640 },
        display: 'flex',
        alignItems: 'center',
        overflow: 'hidden',
      }}
    >
      <Box
        component="img"
        src={heroImg}
        alt="Layer3 hero background"
        loading="lazy"
        sx={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          filter: 'saturate(0.9) contrast(1.05)',
          transform: 'scale(1.03)',
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          inset: 0,
          background:
            'linear-gradient(90deg, rgba(11,13,16,0.92) 0%, rgba(11,13,16,0.72) 55%, rgba(11,13,16,0.18) 100%)',
        }}
      />

      <Container sx={{ position: 'relative', py: { xs: 8, md: 10 } }}>
        <Stack spacing={2.2} sx={{ maxWidth: 820 }}>
          <Typography
            variant="overline"
            sx={{ color: 'primary.main', letterSpacing: 3, fontWeight: 800 }}
          >
            Indian • Sri Lankan • Chinese
          </Typography>
          <Typography
            variant="h2"
            component="h1"
            sx={{
              fontSize: { xs: 38, sm: 44, md: 56 },
              lineHeight: 1.05,
              color: 'common.white',
            }}
          >
            Layer3 — Indian • Sri Lankan • Chinese in the heart of Jaffna
          </Typography>
          <Typography variant="h6" sx={{ fontWeight: 500, color: 'rgba(255,255,255,0.82)' }}>
            A modern, premium dine-in space where familiar flavors meet a clean,
            contemporary finish — crafted with fresh ingredients and signature spice
            blends, always family-friendly.
          </Typography>

          <Stack
            direction={{ xs: 'column', sm: 'row' }}
            spacing={1.5}
            sx={{ pt: 1 }}
          >
            <Button
              component={RouterLink}
              to="/highlights"
              variant="contained"
              size="large"
              sx={{
                width: { xs: '100%', sm: 'auto' },
                boxShadow: '0 14px 28px rgba(214, 162, 74, 0.25)',
                '&:hover': { transform: 'translateY(-1px)' },
              }}
            >
              View Highlights
            </Button>
            <Button
              component="a"
              href={mailto}
              variant="outlined"
              size="large"
              sx={{
                width: { xs: '100%', sm: 'auto' },
                color: 'common.white',
                borderColor: 'rgba(255,255,255,0.45)',
                '&:hover': {
                  transform: 'translateY(-1px)',
                  borderColor: 'rgba(255,255,255,0.70)',
                  backgroundColor: 'rgba(255,255,255,0.08)',
                },
              }}
            >
              Book a Table
            </Button>
          </Stack>
        </Stack>
      </Container>
    </Box>
  )
}
