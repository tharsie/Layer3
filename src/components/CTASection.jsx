import { Box, Button, Card, CardContent, Stack, Typography } from '@mui/material'
import { Link as RouterLink } from 'react-router-dom'

export default function CTASection({ title, subtitle, primaryLabel, primaryTo }) {
  return (
    <Card
      sx={{
        overflow: 'hidden',
        position: 'relative',
        border: '1px solid rgba(214,162,74,0.18)',
      }}
    >
      <Box
        sx={{
          position: 'absolute',
          inset: 0,
          background:
            'radial-gradient(900px 260px at 20% 0%, rgba(214,162,74,0.20), transparent 55%), radial-gradient(900px 260px at 80% 100%, rgba(42,140,130,0.18), transparent 55%)',
          pointerEvents: 'none',
        }}
      />
      <CardContent sx={{ position: 'relative' }}>
        <Stack
          direction={{ xs: 'column', md: 'row' }}
          spacing={2}
          alignItems={{ xs: 'flex-start', md: 'center' }}
          justifyContent="space-between"
        >
          <Box>
            <Typography variant="h4" component="h2" sx={{ fontWeight: 900 }}>
              {title}
            </Typography>
            <Typography color="text.secondary" sx={{ mt: 0.8, maxWidth: 720 }}>
              {subtitle}
            </Typography>
          </Box>
          <Button
            component={RouterLink}
            to={primaryTo}
            variant="contained"
            size="large"
            sx={{ width: { xs: '100%', md: 'auto' }, '&:hover': { transform: 'translateY(-1px)' } }}
          >
            {primaryLabel}
          </Button>
        </Stack>
      </CardContent>
    </Card>
  )
}
