import { useEffect, useMemo, useState } from 'react'
import {
  Box,
  Container,
  Divider,
  Grid,
  Tab,
  Tabs,
  Typography,
} from '@mui/material'
import SectionHeading from '../components/SectionHeading'
import HighlightCard from '../components/HighlightCard'
import { highlightCategories, highlights } from '../data/highlights'

export default function Highlights() {
  useEffect(() => {
    document.title = 'Menu Highlights — Layer3 (Jaffna)'
  }, [])

  const [tab, setTab] = useState('Indian')

  const items = useMemo(
    () => highlights.filter((h) => h.category === tab),
    [tab],
  )

  return (
    <Container sx={{ py: { xs: 6, md: 8 } }}>
      <SectionHeading
        overline="Menu Highlights"
        title="Curated favorites (display-only)"
        subtitle="Layer3 is not a food ordering site — this is a curated set of highlights that reflects our Indian • Sri Lankan • Chinese identity in Jaffna. Ask our team for today’s specials and seasonal picks."
      />

      <Box sx={{ mb: 2 }}>
        <Tabs
          value={tab}
          onChange={(_, v) => setTab(v)}
          variant="scrollable"
          scrollButtons="auto"
          aria-label="Highlight categories"
        >
          {highlightCategories.map((c) => (
            <Tab key={c.key} label={c.label} value={c.key} />
          ))}
        </Tabs>
      </Box>
      <Divider sx={{ mb: 3 }} />

      <Grid container spacing={2.2}>
        {items.map((item) => (
          <Grid key={item.id} item xs={12} sm={6} md={4}>
            <HighlightCard item={item} />
          </Grid>
        ))}
      </Grid>

      <Typography color="text.secondary" sx={{ mt: 3 }}>
        Tip: Spice levels are a guide — we can often adjust heat. Dietary tags are
        placeholders; please confirm with our team for allergies (nuts, dairy, gluten)
        and halal/veg options.
      </Typography>
    </Container>
  )
}
