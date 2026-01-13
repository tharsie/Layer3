import { useEffect } from 'react'
import {
  Box,
  Card,
  CardContent,
  Container,
  Divider,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Stack,
  Typography,
} from '@mui/material'
import CheckCircleIcon from '@mui/icons-material/CheckCircle'
import SpaIcon from '@mui/icons-material/Spa'
import FavoriteIcon from '@mui/icons-material/Favorite'
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium'
import VerifiedIcon from '@mui/icons-material/Verified'
import RestaurantIcon from '@mui/icons-material/Restaurant'
import LocalCafeIcon from '@mui/icons-material/LocalCafe'
import DeckIcon from '@mui/icons-material/Deck'

import SectionHeading from '../components/SectionHeading'
import PageHero from '../components/PageHero'
import heroImg from '../assets/hero.jpg'

export default function About() {
  useEffect(() => {
    document.title = 'About — Layer3 (Jaffna)'
  }, [])

  return (
    <Box>
      <PageHero
        overline="About Layer3"
        title="A modern restaurant rooted in Jaffna"
        subtitle="Layer3 is a three-floor dine-in destination in Jaffna, Sri Lanka: a main Restaurant serving Indian • Sri Lankan • Chinese, a Café for lighter moments, and an open-air restaurant for relaxed evenings — all tied together by warm hospitality and consistent craft."
        imageSrc={heroImg}
        height={{ xs: 300, md: 420 }}
      />

      <Container sx={{ py: { xs: 6, md: 8 } }}>
        <Grid container spacing={2.2}>
        <Grid item xs={12} md={7}>
          <Card>
            <CardContent>
              <Stack spacing={1.4}>
                <Typography variant="h5" sx={{ fontWeight: 900 }}>
                  Why “Layer3”?
                </Typography>
                <Typography color="text.secondary">
                  “Layer3” is literal: three floors, three ways to enjoy the same brand.
                  Start with the main Restaurant — our core identity — serving Indian •
                  Sri Lankan • Chinese dishes built around fresh ingredients and
                  signature spice blends.
                </Typography>
                <Typography color="text.secondary">
                  Then there’s the Café for quiet catch-ups and sweet breaks, and the
                  open-air floor for breezy evenings in Jaffna. Across every floor,
                  you’ll find the same modern, minimal premium feel — with
                  family-friendly warmth.
                </Typography>
              </Stack>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={5}>
          <Card sx={{ height: '100%' }}>
            <CardContent>
              <Stack spacing={1.6}>
                <Typography variant="h6" sx={{ fontWeight: 900 }}>
                  Our values
                </Typography>
                <Stack spacing={1.2}>
                  <Stack direction="row" spacing={1.2}>
                    <SpaIcon sx={{ color: 'primary.main', mt: 0.2 }} />
                    <Box>
                      <Typography sx={{ fontWeight: 800 }}>Freshness</Typography>
                      <Typography variant="body2" color="text.secondary">
                        Fresh ingredients, clean prep, and thoughtful finishing.
                      </Typography>
                    </Box>
                  </Stack>
                  <Stack direction="row" spacing={1.2}>
                    <FavoriteIcon sx={{ color: 'primary.main', mt: 0.2 }} />
                    <Box>
                      <Typography sx={{ fontWeight: 800 }}>Hospitality</Typography>
                      <Typography variant="body2" color="text.secondary">
                        Premium ambience with a friendly, Jaffna-warm welcome.
                      </Typography>
                    </Box>
                  </Stack>
                  <Stack direction="row" spacing={1.2}>
                    <WorkspacePremiumIcon sx={{ color: 'primary.main', mt: 0.2 }} />
                    <Box>
                      <Typography sx={{ fontWeight: 800 }}>Craft</Typography>
                      <Typography variant="body2" color="text.secondary">
                        Signature spice blends and careful technique in every dish.
                      </Typography>
                    </Box>
                  </Stack>
                  <Stack direction="row" spacing={1.2}>
                    <VerifiedIcon sx={{ color: 'primary.main', mt: 0.2 }} />
                    <Box>
                      <Typography sx={{ fontWeight: 800 }}>Consistency</Typography>
                      <Typography variant="body2" color="text.secondary">
                        Reliable flavors and service you can trust, visit after visit.
                      </Typography>
                    </Box>
                  </Stack>
                </Stack>
              </Stack>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      <Divider sx={{ my: { xs: 6, md: 8 } }} />

      <SectionHeading
        overline="Floor Guide"
        title="Three floors, three experiences"
        subtitle="Each floor offers its own vibe, but the same premium, minimal Layer3 feel — modern, welcoming, and consistent."
      />
      <Grid container spacing={2.2}>
        <Grid item xs={12} md={4}>
          <Card sx={{ height: '100%' }}>
            <CardContent>
              <Stack spacing={1.6}>
                <Stack direction="row" spacing={1.2} alignItems="center">
                  <RestaurantIcon sx={{ color: 'primary.main', fontSize: 32 }} />
                  <Typography variant="h5" sx={{ fontWeight: 900 }}>
                    Main Restaurant
                  </Typography>
                </Stack>
                <Typography color="text.secondary">
                  Our core identity. The main Restaurant floor serves <strong>Indian • Sri Lankan • Chinese</strong> dishes built around fresh ingredients and signature spice blends.
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Think comfort classics refined: creamy gravies, roast masala depth, wok heat, and clean sauces. Whether it's a family dinner, celebration, or quick lunch — this is where the heart of Layer3 lives.
                </Typography>
                <Typography variant="caption" color="primary.main" sx={{ fontWeight: 800 }}>
                  Hours: Mon–Thu 12:00–22:30 · Fri–Sun 12:00–23:00
                </Typography>
              </Stack>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={4}>
          <Card sx={{ height: '100%' }}>
            <CardContent>
              <Stack spacing={1.6}>
                <Stack direction="row" spacing={1.2} alignItems="center">
                  <LocalCafeIcon sx={{ color: 'primary.main', fontSize: 32 }} />
                  <Typography variant="h5" sx={{ fontWeight: 900 }}>
                    Café
                  </Typography>
                </Stack>
                <Typography color="text.secondary">
                  A lighter Layer3 moment. The Café is for quiet catch-ups, sweet breaks, and slower sips — premium coffee, fresh pastries, signature desserts, and light bites.
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Whether it's a mid-morning espresso, an afternoon slice of cake, or a late evening creamy hot chocolate — the Café is designed for comfort without the full-meal commitment.
                </Typography>
                <Typography variant="caption" color="text.secondary" sx={{ fontWeight: 700 }}>
                  Offerings: Specialty coffee, fresh pastries, signature cakes, smoothies, light sandwiches, salads
                </Typography>
                <Typography variant="caption" color="primary.main" sx={{ fontWeight: 800 }}>
                  Hours: Mon–Sun 08:00–21:00
                </Typography>
              </Stack>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={4}>
          <Card sx={{ height: '100%' }}>
            <CardContent>
              <Stack spacing={1.6}>
                <Stack direction="row" spacing={1.2} alignItems="center">
                  <DeckIcon sx={{ color: 'primary.main', fontSize: 32 }} />
                  <Typography variant="h5" sx={{ fontWeight: 900 }}>
                    Open-air Restaurant
                  </Typography>
                </Stack>
                <Typography color="text.secondary">
                  The breezy Layer3. Our open-air floor is perfect for relaxed evenings in Jaffna — fresh air, soft lighting, and the full restaurant menu in a laid-back setting.
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Ideal for groups who want to dine without walls, or for guests who prefer the warmth of Jaffna's evening breeze. Same consistent kitchen, same signature hospitality — just outdoors.
                </Typography>
                <Typography variant="caption" color="primary.main" sx={{ fontWeight: 800 }}>
                  Hours: Mon–Sun 17:00–23:00 (weather permitting)
                </Typography>
              </Stack>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      <Divider sx={{ my: { xs: 6, md: 8 } }} />

      <Grid container spacing={2.2}>
        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Stack spacing={1.2}>
                <Typography variant="h5" sx={{ fontWeight: 900 }}>
                  Our Kitchen Team
                </Typography>
                <Typography color="text.secondary">
                  We don’t chase trends — we chase balance. Our kitchen team is built
                  around discipline, prep, and timing: roasting spices, tasting sauces,
                  and keeping the finish clean. That’s how we keep Indian comfort,
                  Sri Lankan depth, and Chinese wok heat all feeling like Layer3.
                </Typography>
              </Stack>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Stack spacing={1.2}>
                <Typography variant="h5" sx={{ fontWeight: 900 }}>
                  Local sourcing (light, thoughtful)
                </Typography>
                <Typography color="text.secondary">
                  When possible, we source produce and spices locally around Jaffna
                  and across Sri Lanka. It keeps ingredients fresh and supports the
                  community — without compromising quality.
                </Typography>
              </Stack>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      <Divider sx={{ my: { xs: 6, md: 8 } }} />

      <SectionHeading
        overline="Why guests love us"
        title="Premium, but friendly"
        subtitle="The details that keep guests returning — for quick lunches and long family dinners."
      />
      <Card>
        <CardContent>
          <List>
            {[
              'A calm, modern ambience that still feels welcoming',
              'Indian • Sri Lankan • Chinese choices for every table',
              'Fresh ingredients and signature spice blends prepared in-house',
              'Family-friendly seating and attentive service',
              'Consistent flavors — your favorites taste right, every time',
              'Great for small celebrations and group dinners (ask about events)',
            ].map((text) => (
              <ListItem key={text} disableGutters>
                <ListItemIcon sx={{ minWidth: 36 }}>
                  <CheckCircleIcon sx={{ color: 'primary.main' }} />
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
        </CardContent>
      </Card>
      </Container>
    </Box>
  )
}
