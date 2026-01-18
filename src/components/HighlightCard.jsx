import { Box, Card, CardContent, Chip, Stack, Typography } from '@mui/material'

function spiceChip(spice) {
  if (spice === 'hot') return { label: 'Hot', color: 'error' }
  if (spice === 'medium') return { label: 'Medium', color: 'warning' }
  return { label: 'Mild', color: 'default' }
}

export default function HighlightCard({ item, hover = false }) {
  const spice = spiceChip(item.spice)
  return (
    <Card
      sx={{
        height: '100%',
        transition: 'transform 180ms ease, box-shadow 180ms ease, border-color 180ms ease',
        willChange: 'transform, box-shadow',
        ...(hover && {
          '&:hover': {
            transform: 'translateY(-2px) scale(1.02)',
            boxShadow: '0 14px 28px rgba(0,0,0,0.12)',
            borderColor: 'primary.light',
          },
        }),
      }}
      variant={hover ? 'outlined' : undefined}
    >
      <CardContent>
        <Stack spacing={1.2}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', gap: 2 }}>
            <Typography variant="h6" component="h3" sx={{ fontWeight: 800 }}>
              {item.name}
            </Typography>
            <Chip size="small" label={spice.label} color={spice.color} variant="outlined" />
          </Box>

          <Typography variant="body2" color="text.secondary">
            {item.description}
          </Typography>

          <Stack direction="row" spacing={1} useFlexGap flexWrap="wrap" sx={{ pt: 0.5 }}>
            {item.dietary?.map((tag) => (
              <Chip key={tag} size="small" label={tag} />
            ))}
          </Stack>
        </Stack>
      </CardContent>
    </Card>
  )
}
