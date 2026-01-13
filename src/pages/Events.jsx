import { useEffect } from 'react'
import {
  Box,
  Button,
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
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import CheckIcon from '@mui/icons-material/Check'
import CelebrationIcon from '@mui/icons-material/Celebration'
import GroupsIcon from '@mui/icons-material/Groups'
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter'
import { Link as RouterLink } from 'react-router-dom'

import SectionHeading from '../components/SectionHeading'
import CTASection from '../components/CTASection'

const packages = [
  {
    title: 'Family Table',
    icon: <GroupsIcon sx={{ color: 'primary.main' }} />,
    includes: [
      'Flexible seating for families and mixed ages',
      'A balanced spread across Indian • Sri Lankan • Chinese',
      'Mild-to-medium spice defaults (heat on request)',
      'Dessert finish options for the table',
    ],
    topic: 'Family Table',
  },
  {
    title: 'Celebration Set',
    icon: <CelebrationIcon sx={{ color: 'primary.main' }} />,
    includes: [
      'Ideal for birthdays and small gatherings',
      'Welcome drink options (non-alcoholic)',
      'Signature highlights + sharing plates',
      'Private corner seating when available',
    ],
    topic: 'Celebration Set',
  },
  {
    title: 'Corporate Dinner',
    icon: <BusinessCenterIcon sx={{ color: 'primary.main' }} />,
    includes: [
      'Clean, premium ambience for office dinners',
      'Timed service plan for groups',
      'Vegetarian and halal-friendly options (ask)',
      'Customizable menu structure based on preferences',
    ],
    topic: 'Corporate Dinner',
  },
]

export default function Events() {
  useEffect(() => {
    document.title = 'Events & Catering — Layer3 (Jaffna)'
  }, [])

  return (
    <Container sx={{ py: { xs: 6, md: 8 } }}>
      <SectionHeading
        overline="Events & Catering"
        title="Small events, made effortless"
        subtitle="Layer3 is a comfortable choice in Jaffna for birthdays, family gatherings, and office dinners. We keep the planning simple: fresh ingredients, signature spice blends, and a calm, premium setting for dine-in."
      />

      <Grid container spacing={2.2}>
        {packages.map((p) => (
          <Grid key={p.title} item xs={12} md={4}>
            <Card sx={{ height: '100%' }}>
              <CardContent>
                <Stack spacing={1.6}>
                  <Stack direction="row" spacing={1.2} alignItems="center">
                    {p.icon}
                    <Typography variant="h6" sx={{ fontWeight: 900 }}>
                      {p.title}
                    </Typography>
                  </Stack>
                  <List dense>
                    {p.includes.map((line) => (
                      <ListItem key={line} disableGutters>
                        <ListItemIcon sx={{ minWidth: 30 }}>
                          <CheckIcon sx={{ color: 'primary.main' }} />
                        </ListItemIcon>
                        <ListItemText primary={line} />
                      </ListItem>
                    ))}
                  </List>
                  <Button
                    component={RouterLink}
                    to={`/contact?topic=${encodeURIComponent(p.topic)}`}
                    variant="contained"
                    sx={{ mt: 'auto', '&:hover': { transform: 'translateY(-1px)' } }}
                  >
                    Enquire
                  </Button>
                </Stack>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Divider sx={{ my: { xs: 6, md: 8 } }} />

      <SectionHeading
        overline="FAQ"
        title="Quick answers"
        subtitle="A few common questions about groups, customization, and planning."
      />

      <Stack spacing={1.2}>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography sx={{ fontWeight: 800 }}>Do you have parking?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography color="text.secondary">
              Parking availability can vary by time. Share your expected arrival time
              and group size and we’ll guide you with the best option.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography sx={{ fontWeight: 800 }}>Can you customize spice levels?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography color="text.secondary">
              Yes — we can often adjust heat from mild to hot. Let us know your
              preference in advance, especially for larger groups.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography sx={{ fontWeight: 800 }}>Do you offer halal/veg options?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography color="text.secondary">
              We can suggest vegetarian and halal-friendly options (ask to confirm)
              and can plan a balanced spread for mixed groups.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography sx={{ fontWeight: 800 }}>How much notice do you need?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography color="text.secondary">
              For small groups, 24–48 hours is helpful. For larger events, earlier is
              better so we can plan seating and pacing.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </Stack>

      <Box sx={{ mt: { xs: 6, md: 8 } }}>
        <CTASection
          title="Tell us what you’re planning"
          subtitle="Send your date, time, guest count, and cuisine preferences — we’ll reply with the best setup for your group."
          primaryLabel="Enquire via Contact"
          primaryTo="/contact"
        />
      </Box>
    </Container>
  )
}
