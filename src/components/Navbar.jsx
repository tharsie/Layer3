import { useMemo, useState } from 'react'
import {
  AppBar,
  Box,
  Button,
  Container,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItemButton,
  ListItemText,
  Stack,
  Toolbar,
  Typography,
} from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import RestaurantIcon from '@mui/icons-material/Restaurant'
import { Link as RouterLink, NavLink, useLocation } from 'react-router-dom'
import logo from '../assets/logo.jpg'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const location = useLocation()

  const nav = useMemo(
    () => [
      { label: 'Home', to: '/' },
      { label: 'About', to: '/about' },
      { label: 'Menu Highlights', to: '/highlights' },
      { label: 'Gallery', to: '/gallery' },
      { label: 'Events', to: '/events' },
      { label: 'Contact', to: '/contact' },
    ],
    [],
  )

  const reserveMessage =
    'Hi Layer3, I’d like to reserve a table for [date/time], [guests].'
  const mailto = `mailto:reservations@layer3.lk?subject=${encodeURIComponent(
    'Table reservation — Layer3 (Jaffna)',
  )}&body=${encodeURIComponent(reserveMessage)}`

  return (
    <AppBar position="sticky" elevation={0}>
      <Toolbar disableGutters>
        <Container sx={{ py: 1.1 }}>
          <Stack direction="row" alignItems="center" justifyContent="space-between">
            <Stack
              direction="row"
              alignItems="center"
              spacing={1.2}
              component={RouterLink}
              to="/"
              aria-label="Go to Layer3 home"
              sx={{ textDecoration: 'none', color: 'inherit' }}
            >
              <Box
                component="img"
                src={logo}
                alt="Layer3 logo"
                sx={{ width: 36, height: 36, borderRadius: '50%', border: '1px solid rgba(0,0,0,0.14)' }}
              />
              <Box>
                <Typography variant="subtitle1" sx={{ fontWeight: 900, letterSpacing: 0.4 }}>
                  Layer3
                </Typography>
                <Typography variant="caption" color="text.secondary" sx={{ display: 'block', mt: -0.3 }}>
                  Jaffna, Sri Lanka
                </Typography>
              </Box>
            </Stack>

            <Stack direction="row" alignItems="center" spacing={1.2}>
              <Stack
                direction="row"
                alignItems="center"
                spacing={0.5}
                sx={{ display: { xs: 'none', md: 'flex' } }}
              >
                {nav.map((item) => (
                  <Button
                    key={item.to}
                    component={NavLink}
                    to={item.to}
                    color="inherit"
                    sx={{
                      px: 1.1,
                      opacity: location.pathname === item.to ? 1 : 0.8,
                      '&:hover': { opacity: 1, transform: 'translateY(-1px)' },
                    }}
                  >
                    {item.label}
                  </Button>
                ))}
              </Stack>

              <Button
                component="a"
                href={mailto}
                variant="contained"
                startIcon={<RestaurantIcon />}
                sx={{ display: { xs: 'none', sm: 'inline-flex' }, '&:hover': { transform: 'translateY(-1px)' } }}
              >
                Reserve
              </Button>

              <IconButton
                aria-label="Open menu"
                onClick={() => setOpen(true)}
                sx={{ display: { xs: 'inline-flex', md: 'none' } }}
              >
                <MenuIcon />
              </IconButton>
            </Stack>
          </Stack>
        </Container>
      </Toolbar>

      <Drawer anchor="right" open={open} onClose={() => setOpen(false)}>
        <Box sx={{ width: 290, p: 2 }} role="presentation">
          <Stack direction="row" alignItems="center" spacing={1} sx={{ mb: 1.5 }}>
            <Box
              component="img"
              src={logo}
              alt="Layer3 logo"
              sx={{ width: 40, height: 40, borderRadius: '50%', border: '1px solid rgba(0,0,0,0.14)' }}
            />
            <Box>
              <Typography sx={{ fontWeight: 900 }}>Layer3</Typography>
              <Typography variant="caption" color="text.secondary">
                Restaurant • Café • Open-air
              </Typography>
            </Box>
          </Stack>
          <Divider sx={{ mb: 1 }} />
          <List>
            {nav.map((item) => (
              <ListItemButton
                key={item.to}
                component={RouterLink}
                to={item.to}
                onClick={() => setOpen(false)}
              >
                <ListItemText primary={item.label} />
              </ListItemButton>
            ))}
          </List>
          <Divider sx={{ my: 1 }} />
          <Button
            fullWidth
            component="a"
            href={mailto}
            variant="contained"
            startIcon={<RestaurantIcon />}
            sx={{ '&:hover': { transform: 'translateY(-1px)' } }}
          >
            Reserve
          </Button>
        </Box>
      </Drawer>
    </AppBar>
  )
}
