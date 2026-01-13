import { Box, Container, Stack, Typography } from '@mui/material'

export default function PageHero({
  title,
  subtitle,
  overline,
  imageSrc,
  height = { xs: 320, md: 420 },
}) {
  return (
    <Box
      sx={{
        position: 'relative',
        minHeight: height,
        display: 'flex',
        alignItems: 'center',
        overflow: 'hidden',
      }}
    >
      {imageSrc ? (
        <Box
          component="img"
          src={imageSrc}
          alt="Page hero background"
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
      ) : null}

      <Box
        sx={{
          position: 'absolute',
          inset: 0,
          background:
            'linear-gradient(90deg, rgba(11,13,16,0.92) 0%, rgba(11,13,16,0.72) 55%, rgba(11,13,16,0.20) 100%)',
        }}
      />

      <Container sx={{ position: 'relative', py: { xs: 5, md: 7 } }}>
        <Stack spacing={1.6} sx={{ maxWidth: 860 }}>
          {overline ? (
            <Typography
              variant="overline"
              sx={{ color: 'primary.main', letterSpacing: 3, fontWeight: 900 }}
            >
              {overline}
            </Typography>
          ) : null}
          <Typography
            variant="h2"
            component="h1"
            sx={{
              fontSize: { xs: 34, sm: 40, md: 46 },
              lineHeight: 1.08,
              color: 'common.white',
            }}
          >
            {title}
          </Typography>
          {subtitle ? (
            <Typography
              variant="h6"
              sx={{ fontWeight: 500, color: 'rgba(255,255,255,0.82)' }}
            >
              {subtitle}
            </Typography>
          ) : null}
        </Stack>
      </Container>
    </Box>
  )
}
