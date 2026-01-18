import { Card, CardContent, Stack, Typography } from '@mui/material'
import FormatQuoteIcon from '@mui/icons-material/FormatQuote'

export default function TestimonialCard({ quote, name, meta }) {
  return (
    <Card
      sx={{
        height: '100%',
        transition: 'transform 180ms ease, box-shadow 180ms ease',
        willChange: 'transform, box-shadow',
        '&:hover': {
          transform: 'translateY(-2px) scale(1.02)',
          boxShadow: '0 14px 28px rgba(0,0,0,0.12)',
        },
      }}
    >
      <CardContent>
        <Stack spacing={1.4}>
          <FormatQuoteIcon sx={{ color: 'primary.main', opacity: 0.9 }} />
          <Typography variant="body1" sx={{ lineHeight: 1.7 }}>
            {quote}
          </Typography>
          <Stack>
            <Typography variant="subtitle2" sx={{ fontWeight: 800 }}>
              {name}
            </Typography>
            <Typography variant="caption" color="text.secondary">
              {meta}
            </Typography>
          </Stack>
        </Stack>
      </CardContent>
    </Card>
  )
}
