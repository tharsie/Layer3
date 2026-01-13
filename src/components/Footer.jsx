import {
  Box,
  Container,
  Divider,
  IconButton,
  Link,
  Stack,
  Typography,
} from '@mui/material'
import { Link as RouterLink } from 'react-router-dom'
import FacebookIcon from '@mui/icons-material/Facebook'
import InstagramIcon from '@mui/icons-material/Instagram'
import TikTokIcon from '@mui/icons-material/MusicNote'
import PlaceIcon from '@mui/icons-material/Place'
import AccessTimeIcon from '@mui/icons-material/AccessTime'
import logo from '../assets/logo.jpg'

export default function Footer() {
  return (
    <Box component="footer" sx={{ pt: 6, pb: 4, mt: 6 }}>
      <Container>
        <Divider sx={{ mb: 4 }} />
        <Stack
          direction={{ xs: 'column', md: 'row' }}
          spacing={4}
          justifyContent="space-between"
        >
          <Stack spacing={1.2} sx={{ maxWidth: 420 }}>
            <Stack direction="row" spacing={1.2} alignItems="center">
              <Box
                component="img"
                src={logo}
                alt="Layer3 logo"
                sx={{ width: 44, height: 44, borderRadius: '50%', border: '1px solid rgba(0,0,0,0.14)' }}
              />
              <Box>
                <Typography variant="h6" sx={{ fontWeight: 900 }}>
                  Layer3
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Restaurant • Café • Open-air
                </Typography>
              </Box>
            </Stack>

            <Typography variant="body2" color="text.secondary">
              Three floors, one signature welcome in Jaffna — the main Restaurant for
              Indian • Sri Lankan • Chinese dining, a Café for lighter moments, and an
              open-air floor for relaxed evenings.
            </Typography>

            <Stack direction="row" spacing={1}>
              <IconButton aria-label="Facebook" href="https://facebook.com" target="_blank" rel="noreferrer">
                <FacebookIcon />
              </IconButton>
              <IconButton aria-label="Instagram" href="https://instagram.com" target="_blank" rel="noreferrer">
                <InstagramIcon />
              </IconButton>
              <IconButton aria-label="TikTok" href="https://tiktok.com" target="_blank" rel="noreferrer">
                <TikTokIcon />
              </IconButton>
            </Stack>
          </Stack>

          <Stack spacing={1.1}>
            <Typography sx={{ fontWeight: 900 }}>Quick links</Typography>
            <Link component={RouterLink} to="/about" underline="hover" color="text.secondary">
              About
            </Link>
            <Link component={RouterLink} to="/highlights" underline="hover" color="text.secondary">
              Menu Highlights
            </Link>
            <Link component={RouterLink} to="/gallery" underline="hover" color="text.secondary">
              Gallery
            </Link>
            <Link component={RouterLink} to="/events" underline="hover" color="text.secondary">
              Events & Catering
            </Link>
            <Link component={RouterLink} to="/contact" underline="hover" color="text.secondary">
              Contact
            </Link>
          </Stack>

          <Stack spacing={1.2}>
            <Typography sx={{ fontWeight: 900 }}>Visit</Typography>
            <Stack direction="row" spacing={1} alignItems="flex-start">
              <PlaceIcon sx={{ mt: 0.2, color: 'primary.main' }} />
              <Typography variant="body2" color="text.secondary">
                Example Street, Jaffna, Sri Lanka
              </Typography>
            </Stack>
            <Stack direction="row" spacing={1} alignItems="flex-start">
              <AccessTimeIcon sx={{ mt: 0.2, color: 'primary.main' }} />
              <Typography variant="body2" color="text.secondary">
                Mon–Thu: 12:00–22:30
                <br />
                Fri–Sun: 12:00–23:00
              </Typography>
            </Stack>
          </Stack>
        </Stack>

        <Divider sx={{ mt: 4, mb: 2 }} />
        <Typography variant="caption" color="text.secondary">
          © {new Date().getFullYear()} Layer3, Jaffna. All rights reserved.
        </Typography>
      </Container>
    </Box>
  )
}
