import { useMemo, useState } from 'react'
import {
  Box,
  Chip,
  Dialog,
  DialogContent,
  DialogTitle,
  Divider,
  ImageList,
  ImageListItem,
  Stack,
  Typography,
  useMediaQuery,
} from '@mui/material'
import { useTheme } from '@mui/material/styles'

export default function GalleryGrid({ categories, images }) {
  const theme = useTheme()
  const isSm = useMediaQuery(theme.breakpoints.down('sm'))

  const [active, setActive] = useState('All')
  const [open, setOpen] = useState(false)
  const [selected, setSelected] = useState(null)

  const filtered = useMemo(() => {
    if (active === 'All') return images
    return images.filter((img) => img.category === active)
  }, [active, images])

  const cols = isSm ? 2 : 3

  return (
    <Box>
      <Stack direction="row" spacing={1} useFlexGap flexWrap="wrap" sx={{ mb: 2 }}>
        {categories.map((c) => (
          <Chip
            key={c}
            label={c}
            onClick={() => setActive(c)}
            color={active === c ? 'primary' : 'default'}
            variant={active === c ? 'filled' : 'outlined'}
            sx={{ transition: 'transform 140ms ease', '&:hover': { transform: 'translateY(-1px)' } }}
          />
        ))}
      </Stack>

      <ImageList variant={isSm ? 'standard' : 'masonry'} cols={cols} gap={12}>
        {filtered.map((img) => (
          <ImageListItem
            key={img.id}
            onClick={() => {
              setSelected(img)
              setOpen(true)
            }}
            sx={{
              cursor: 'pointer',
              borderRadius: 2,
              overflow: 'hidden',
              border: '1px solid rgba(0,0,0,0.08)',
              transition: 'transform 140ms ease, box-shadow 140ms ease',
              '&:hover': { transform: 'translateY(-2px)', boxShadow: '0 12px 24px rgba(0,0,0,0.35)' },
            }}
          >
            <Box
              component="img"
              src={img.src}
              alt={img.alt}
              loading="lazy"
              sx={{ width: '100%', height: '100%', display: 'block' }}
            />
          </ImageListItem>
        ))}
      </ImageList>

      <Dialog open={open} onClose={() => setOpen(false)} maxWidth="md" fullWidth>
        {selected ? (
          <>
            <DialogTitle sx={{ fontWeight: 800 }}>{selected.category}</DialogTitle>
            <Divider />
            <DialogContent>
              <Box
                component="img"
                src={selected.src}
                alt={selected.alt}
                sx={{ width: '100%', borderRadius: 2, border: '1px solid rgba(0,0,0,0.08)' }}
              />
              <Typography color="text.secondary" sx={{ mt: 1.5 }}>
                {selected.caption}
              </Typography>
            </DialogContent>
          </>
        ) : null}
      </Dialog>
    </Box>
  )
}
