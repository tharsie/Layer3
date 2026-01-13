import { Box, Stack, Typography } from '@mui/material'

export default function SectionHeading({
  overline,
  title,
  subtitle,
  align = 'left',
  action,
}) {
  return (
    <Stack
      direction={{ xs: 'column', md: 'row' }}
      alignItems={{ xs: 'flex-start', md: 'flex-end' }}
      justifyContent="space-between"
      spacing={2}
      sx={{ mb: 3, textAlign: { xs: align, md: align } }}
    >
      <Box>
        {overline ? (
          <Typography
            variant="overline"
            sx={{
              color: 'primary.main',
              letterSpacing: 2.4,
              fontWeight: 800,
            }}
          >
            {overline}
          </Typography>
        ) : null}
        <Typography variant="h3" component="h2" sx={{ mt: 0.5 }}>
          {title}
        </Typography>
        {subtitle ? (
          <Typography variant="body1" color="text.secondary" sx={{ mt: 1, maxWidth: 760 }}>
            {subtitle}
          </Typography>
        ) : null}
      </Box>
      {action ? <Box sx={{ flexShrink: 0 }}>{action}</Box> : null}
    </Stack>
  )
}
