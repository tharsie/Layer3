import { useEffect, useMemo } from 'react'
import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Chip,
  Container,
  Divider,
  Grid,
  Stack,
  Typography,
} from '@mui/material'
import { Link as RouterLink } from 'react-router-dom'
import WhatshotIcon from '@mui/icons-material/Whatshot'
import RiceBowlIcon from '@mui/icons-material/RiceBowl'
import RamenDiningIcon from '@mui/icons-material/RamenDining'
import PlaceIcon from '@mui/icons-material/Place'
import AccessTimeIcon from '@mui/icons-material/AccessTime'
import LocalCafeIcon from '@mui/icons-material/LocalCafe'
import BakeryDiningIcon from '@mui/icons-material/BakeryDining'
import LocalBarIcon from '@mui/icons-material/LocalBar'
import IcecreamIcon from '@mui/icons-material/Icecream'
import CoffeeIcon from '@mui/icons-material/Coffee'
import LocalDrinkIcon from '@mui/icons-material/LocalDrink'
import BreakfastDiningIcon from '@mui/icons-material/BreakfastDining'

import Hero from '../components/Hero'
import SectionHeading from '../components/SectionHeading'
import HighlightCard from '../components/HighlightCard'
import TestimonialCard from '../components/TestimonialCard'
import CTASection from '../components/CTASection'
import { highlights } from '../data/highlights'
import { testimonials } from '../data/testimonials'
import { galleryImages } from '../data/gallery'

export default function Home() {
  useEffect(() => {
    document.title = 'Layer3 — Jaffna | Indian • Sri Lankan • Chinese'
  }, [])

  const signature = useMemo(() => highlights.slice(0, 6), [])
  const atmosphere = useMemo(
    () => galleryImages.filter((g) => g.category === 'Interiors').slice(0, 4),
    [],
  )

  return (
    <Box>
      <Hero />

      <Container sx={{ py: { xs: 6, md: 8 }, width: "100%" }}>
        <Grid container spacing={3} alignItems="stretch">
          <Grid >
            <SectionHeading
              overline="Our Story"
              title="Three floors, one Layer3 experience"
              subtitle="Layer3 is built for Jaffna: a main Restaurant floor for Indian • Sri Lankan • Chinese dining, a Café for slower sips and sweet bites, and an open-air floor for breezy evenings. Premium, minimal, and always welcoming."
              action={
                <Button
                  component={RouterLink}
                  to="/about"
                  variant="outlined"
                  sx={{ width: { xs: '100%', md: 'auto' }, '&:hover': { transform: 'translateY(-1px)' } }}
                >
                  Read the full story
                </Button>
              }
            />
            <Card >
              <CardContent>
                <Stack spacing={1.2}>
                  <Typography variant="h5" sx={{ fontWeight: 900 }}>
                    Dine-in, family-friendly, and always fresh
                  </Typography>
                  <Typography color="text.secondary">
                    Whether it’s a quiet lunch, a family dinner, or a celebration with
                    friends, Layer3 is designed for comfort. Our kitchen focuses on
                    fresh ingredients, signature spice blends, and consistency — so
                    your favorites taste just right, every time.
                  </Typography>
                  <Stack direction="row" spacing={1} useFlexGap flexWrap="wrap" sx={{ pt: 0.5 }}>
                    <Chip label="Jaffna" color="primary" />
                    <Chip label="Dine-in" variant="outlined" />
                    <Chip label="Family-friendly" variant="outlined" />
                    <Chip label="3 floors" variant="outlined" />
                    <Chip label="Restaurant • Café • Open-air" variant="outlined" />
                    <Chip label="Fresh ingredients" variant="outlined" />
                    <Chip label="Signature spice blends" variant="outlined" />
                  </Stack>
                </Stack>
              </CardContent>
            </Card>
            <Grid item xs={12} md={12} pt={12}>
            <SectionHeading
              overline="Cuisine Trio"
              title="Indian • Sri Lankan • Chinese"
              subtitle="Three cuisines, one clean Layer3 approach — bold, balanced, and made for sharing."
            />
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Card>
                  <CardContent>
                    <Stack direction="row" spacing={1.4} alignItems="flex-start">
                      <WhatshotIcon sx={{ color: 'primary.main', mt: 0.4 }} />
                      <Box>
                        <Typography sx={{ fontWeight: 900 }}>Indian</Typography>
                        <Typography variant="body2" color="text.secondary">
                          Comfort classics refined — creamy gravies, tandoor-inspired
                          roasts, and fragrant rice.
                        </Typography>
                      </Box>
                    </Stack>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={12}>
                <Card>
                  <CardContent>
                    <Stack direction="row" spacing={1.4} alignItems="flex-start">
                      <RiceBowlIcon sx={{ color: 'primary.main', mt: 0.4 }} />
                      <Box>
                        <Typography sx={{ fontWeight: 900 }}>Sri Lankan</Typography>
                        <Typography variant="body2" color="text.secondary">
                          Locally grounded favorites — roast masala depth, coconut
                          warmth, and Jaffna-style heat.
                        </Typography>
                      </Box>
                    </Stack>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={12}>
                <Card>
                  <CardContent>
                    <Stack direction="row" spacing={1.4} alignItems="flex-start">
                      <RamenDiningIcon sx={{ color: 'primary.main', mt: 0.4 }} />
                      <Box>
                        <Typography sx={{ fontWeight: 900 }}>Chinese</Typography>
                        <Typography variant="body2" color="text.secondary">
                          Wok heat and clean sauces — glossy, crisp, and balanced for
                          the table.
                        </Typography>
                      </Box>
                    </Stack>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </Grid>
          </Grid>

          
        </Grid>

        <Divider sx={{ my: { xs: 6, md: 8 } }} />

        <SectionHeading
          overline="Café"
          title="Coffee, mojitos, waffles — sweet breaks"
          subtitle="A lighter Layer3 moment: Italian coffees (cappuccino, latte), non-alcoholic mojitos, fresh waffles and pancakes, milkshakes, rolled ice creams, and daily pastries. Perfect for catch-ups and quiet pauses."
        />
        <Grid container spacing={2.2}>
          <Grid item xs={12} md={6}>
            <Card sx={{ height: '100%' }}>
              <CardContent>
                <Stack spacing={1.2}>
                  <Stack direction="row" spacing={1.2} alignItems="flex-start">
                    <LocalCafeIcon sx={{ color: 'primary.main', mt: 0.2 }} />
                    <CoffeeIcon sx={{ color: 'primary.main', mt: 0.2 }} />
                    <Box>
                      <Typography sx={{ fontWeight: 900 }}>Italian coffees & warm sips</Typography>
                      <Typography variant="body2" color="text.secondary">
                        Espresso, cappuccino, latte, creamy hot chocolate, iced coffee — slow sips without the full-meal commitment.
                      </Typography>
                    </Box>
                  </Stack>
                  <Stack direction="row" spacing={1} useFlexGap flexWrap="wrap">
                    <Chip label="Cappuccino" variant="outlined" />
                    <Chip label="Latte" variant="outlined" />
                    <Chip label="Italian coffees" variant="outlined" />
                    <Chip label="Hot chocolate" variant="outlined" />
                    <Chip label="Iced coffee" variant="outlined" />
                  </Stack>
                  <Typography variant="caption" color="primary.main" sx={{ fontWeight: 800 }}>
                    Hours: Mon–Sun 08:00–21:00
                  </Typography>
                </Stack>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={6}>
            <Card sx={{ height: '100%' }}>
              <CardContent>
                <Stack spacing={1.2}>
                  <Stack direction="row" spacing={1.2} alignItems="flex-start">
                    <BakeryDiningIcon sx={{ color: 'primary.main', mt: 0.2 }} />
                    <Box>
                      <Typography sx={{ fontWeight: 900 }}>Fresh pastries, waffles & desserts</Typography>
                      <Typography variant="body2" color="text.secondary">
                        Daily bakes, layered cakes, signature desserts, waffles, and pancakes — perfect for mid-morning breaks and afternoon treats.
                      </Typography>
                    </Box>
                  </Stack>
                  <Stack direction="row" spacing={1} useFlexGap flexWrap="wrap">
                    <Chip label="Pastries" variant="outlined" />
                    <Chip label="Signature cakes" variant="outlined" />
                    <Chip label="Waffles" variant="outlined" />
                    <Chip label="Pancakes" variant="outlined" />
                    <Chip label="Light sandwiches" variant="outlined" />
                    <Chip label="Salads" variant="outlined" />
                  </Stack>
                </Stack>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12}>
            <Card>
              <CardContent>
                <Stack spacing={1.2}>
                  <Stack direction="row" spacing={1.2} alignItems="flex-start">
                    <LocalBarIcon sx={{ color: 'primary.main', mt: 0.2 }} />
                    <LocalDrinkIcon sx={{ color: 'primary.main', mt: 0.2 }} />
                    <IcecreamIcon sx={{ color: 'primary.main', mt: 0.2 }} />
                    <Box>
                      <Typography sx={{ fontWeight: 900 }}>Mojitos, milkshakes & rolled ice creams</Typography>
                      <Typography variant="body2" color="text.secondary">
                        Non-alcoholic mojitos in fruity twists, classic milkshakes, and rolled ice creams made to order. Ask for seasonal flavors.
                      </Typography>
                    </Box>
                  </Stack>
                  <Stack direction="row" spacing={1} useFlexGap flexWrap="wrap">
                    <Chip label="Mojitos (non-alcoholic)" variant="outlined" />
                    <Chip label="Fruit mojitos" variant="outlined" />
                    <Chip label="Milkshakes" variant="outlined" />
                    <Chip label="Smoothies" variant="outlined" />
                    <Chip label="Rolled ice creams" variant="outlined" />
                  </Stack>
                </Stack>
              </CardContent>
            </Card>
          </Grid>
        </Grid>

        <Divider sx={{ my: { xs: 6, md: 8 } }} />

        <SectionHeading
          overline="Signature Highlights"
          title="A curated preview"
          subtitle="This is a taste of what we’re known for — display-only, no ordering. Ask our team for today’s specials and seasonal favorites."
          action={
            <Button
              component={RouterLink}
              to="/highlights"
              variant="contained"
              sx={{ width: { xs: '100%', md: 'auto' }, '&:hover': { transform: 'translateY(-1px)' } }}
            >
              View all highlights
            </Button>
          }
        />
        <Grid container spacing={2.2}>
          {signature.map((item) => (
            <Grid key={item.id} item xs={12} sm={6} md={4}>
              <HighlightCard item={item} />
            </Grid>
          ))}
        </Grid>

        <Divider sx={{ my: { xs: 6, md: 8 } }} />

        <SectionHeading
          overline="Atmosphere"
          title="Warm lighting, family seating, private corners"
          subtitle="Layer3 is designed to feel premium without feeling distant — a calm space for everyday meals and special moments."
        />
        <Grid container spacing={2.2}>
          {atmosphere.map((img) => (
            <Grid key={img.id} item xs={12} sm={6} md={3}>
              <Card sx={{ height: '100%' }}>
                <CardMedia component="img" height="190" image={img.src} alt={img.alt} loading="lazy" />
                <CardContent>
                  <Typography variant="subtitle2" sx={{ fontWeight: 800 }}>
                    {img.caption}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        <Divider sx={{ my: { xs: 6, md: 8 } }} />

        <SectionHeading
          overline="Testimonials"
          title="What guests say"
          subtitle="Real-sounding notes from guests who came for the food — and stayed for the comfort."
        />
        <Grid container spacing={2.2}>
          {testimonials.slice(0, 4).map((t) => (
            <Grid key={t.name} item xs={12} sm={6} md={3}>
              <TestimonialCard {...t} />
            </Grid>
          ))}
        </Grid>

        <Divider sx={{ my: { xs: 6, md: 8 } }} />

        <Card sx={{ mb: { xs: 6, md: 8 } }}>
          <CardContent>
            <Grid container spacing={2} alignItems="center">
              <Grid item xs={12} md={6}>
                <Stack direction="row" spacing={1.2} alignItems="flex-start">
                  <PlaceIcon sx={{ color: 'primary.main', mt: 0.2 }} />
                  <Box>
                    <Typography sx={{ fontWeight: 900 }}>Location</Typography>
                    <Typography color="text.secondary">
                      Example Street, Jaffna, Sri Lanka
                    </Typography>
                  </Box>
                </Stack>
              </Grid>
              <Grid item xs={12} md={6}>
                <Stack direction="row" spacing={1.2} alignItems="flex-start">
                  <AccessTimeIcon sx={{ color: 'primary.main', mt: 0.2 }} />
                  <Box>
                    <Typography sx={{ fontWeight: 900 }}>Hours</Typography>
                    <Typography color="text.secondary">
                      Mon–Thu: 12:00–22:30 · Fri–Sun: 12:00–23:00
                    </Typography>
                    <Typography color="text.secondary">
                      Café: Mon–Sun: 08:00–21:00
                    </Typography>
                  </Box>
                </Stack>
              </Grid>
            </Grid>
          </CardContent>
        </Card>

        <CTASection
          title="Planning a dinner in Jaffna?"
          subtitle="Reserve a table for dine-in — tell us your date/time and number of guests. We’ll confirm quickly."
          primaryLabel="Contact & Reserve"
          primaryTo="/contact"
        />
      </Container>
    </Box>
  )
}
