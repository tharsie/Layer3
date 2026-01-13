import { useEffect, useMemo, useState } from 'react'
import {
  Alert,
  Box,
  Button,
  Card,
  CardContent,
  Container,
  Divider,
  Grid,
  Snackbar,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableRow,
  TextField,
  Typography,
} from '@mui/material'
import CallIcon from '@mui/icons-material/Call'
import WhatsAppIcon from '@mui/icons-material/WhatsApp'
import EmailIcon from '@mui/icons-material/Email'
import PlaceIcon from '@mui/icons-material/Place'
import AccessTimeIcon from '@mui/icons-material/AccessTime'
import { useSearchParams } from 'react-router-dom'
import mapPlaceholder from '../assets/hero.jpg'
import SectionHeading from '../components/SectionHeading'

export default function Contact() {
  useEffect(() => {
    document.title = 'Contact — Layer3 (Jaffna)'
  }, [])

  const [params] = useSearchParams()
  const topic = params.get('topic')

  const phoneDisplay = '+94 21 123 4567'
  const phoneDigits = '94211234567'
  const email = 'hello@layer3.lk'

  const reserveText = useMemo(() => {
    const base = 'Hi Layer3, I’d like to reserve a table for [date/time], [guests].'
    if (!topic) return base
    return `Hi Layer3, I’m enquiring about: ${topic}. Date/time: [date/time]. Guests: [guests]. Preferences: [veg/halal/spice].`
  }, [topic])

  const mailto = `mailto:${email}?subject=${encodeURIComponent(
    topic ? `Enquiry — ${topic} (Layer3, Jaffna)` : 'Contact — Layer3 (Jaffna)',
  )}&body=${encodeURIComponent(reserveText)}`
  const whatsapp = `https://wa.me/${phoneDigits}?text=${encodeURIComponent(reserveText)}`
  const tel = `tel:${phoneDisplay.replaceAll(' ', '')}`

  const [values, setValues] = useState({
    name: '',
    phone: '',
    email: '',
    message: topic ? `Hello Layer3, I’m enquiring about: ${topic}.

Date/time: 
Guests: 
Notes: ` : '',
  })
  const [touched, setTouched] = useState({})
  const [snack, setSnack] = useState({ open: false, message: '' })

  const errors = useMemo(() => {
    const e = {}
    if (!values.name.trim()) e.name = 'Please enter your name.'
    if (!values.phone.trim()) e.phone = 'Please enter a phone number.'
    if (!values.email.trim()) e.email = 'Please enter an email.'
    if (values.email && !/^\S+@\S+\.\S+$/.test(values.email)) e.email = 'Please enter a valid email.'
    if (!values.message.trim() || values.message.trim().length < 10)
      e.message = 'Please enter a message (at least 10 characters).'
    return e
  }, [values])

  const canSubmit = Object.keys(errors).length === 0

  const onBlur = (key) => setTouched((t) => ({ ...t, [key]: true }))
  const onChange = (key) => (evt) => setValues((v) => ({ ...v, [key]: evt.target.value }))

  const onSubmit = (evt) => {
    evt.preventDefault()
    setTouched({ name: true, phone: true, email: true, message: true })
    if (!canSubmit) return
    setSnack({ open: true, message: 'Message sent (demo). We’ll get back to you soon.' })
    setValues({ name: '', phone: '', email: '', message: '' })
  }

  return (
    <Container sx={{ py: { xs: 6, md: 8 } }}>
      <SectionHeading
        overline="Contact"
        title="Visit, reserve, or enquire"
        subtitle="Layer3 is a modern, premium, family-friendly dine-in restaurant in Jaffna, Sri Lanka. Reach out for reservations, group dinners, and events — we reply quickly."
      />

      <Grid container spacing={2.2}>
        <Grid item xs={12} md={5}>
          <Card>
            <CardContent>
              <Stack spacing={2}>
                <Stack direction="row" spacing={1.2} alignItems="flex-start">
                  <PlaceIcon sx={{ color: 'primary.main', mt: 0.2 }} />
                  <Box>
                    <Typography sx={{ fontWeight: 900 }}>Address</Typography>
                    <Typography color="text.secondary">Example Street, Jaffna, Sri Lanka</Typography>
                  </Box>
                </Stack>
                <Stack direction="row" spacing={1.2} alignItems="flex-start">
                  <AccessTimeIcon sx={{ color: 'primary.main', mt: 0.2 }} />
                  <Box sx={{ width: '100%' }}>
                    <Typography sx={{ fontWeight: 900 }}>Opening hours</Typography>
                    <Table size="small" aria-label="Opening hours">
                      <TableBody>
                        <TableRow>
                          <TableCell sx={{ borderBottom: 'none', pl: 0, color: 'text.secondary' }}>
                            Mon–Thu
                          </TableCell>
                          <TableCell sx={{ borderBottom: 'none', pr: 0, color: 'text.secondary' }} align="right">
                            12:00–22:30
                          </TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell sx={{ borderBottom: 'none', pl: 0, color: 'text.secondary' }}>
                            Fri–Sun
                          </TableCell>
                          <TableCell sx={{ borderBottom: 'none', pr: 0, color: 'text.secondary' }} align="right">
                            12:00–23:00
                          </TableCell>
                        </TableRow>
                      </TableBody>
                    </Table>
                  </Box>
                </Stack>

                <Divider />

                <Stack direction={{ xs: 'column', sm: 'row' }} spacing={1.2}>
                  <Button
                    component="a"
                    href={tel}
                    startIcon={<CallIcon />}
                    variant="outlined"
                    fullWidth
                    aria-label="Call Layer3"
                  >
                    Call
                  </Button>
                  <Button
                    component="a"
                    href={whatsapp}
                    startIcon={<WhatsAppIcon />}
                    variant="contained"
                    fullWidth
                    aria-label="WhatsApp Layer3"
                  >
                    WhatsApp
                  </Button>
                </Stack>
                <Button
                  component="a"
                  href={mailto}
                  startIcon={<EmailIcon />}
                  variant="outlined"
                  fullWidth
                  aria-label="Email Layer3"
                >
                  Email
                </Button>

                <Typography variant="body2" color="text.secondary">
                  Phone: {phoneDisplay}
                  <br />
                  Email: {email}
                </Typography>
              </Stack>
            </CardContent>
          </Card>

          <Card sx={{ mt: 2.2 }}>
            <CardContent>
              <Typography sx={{ fontWeight: 900, mb: 1 }}>Map</Typography>
              <Box
                component="img"
                src={mapPlaceholder}
                alt="Map placeholder for Layer3 location in Jaffna"
                loading="lazy"
                sx={{ width: '100%', borderRadius: 2, border: '1px solid rgba(0,0,0,0.08)' }}
              />
              <Typography variant="caption" color="text.secondary" sx={{ display: 'block', mt: 1 }}>
                Placeholder map image — replace later with an embedded Google Map iframe.
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={7}>
          <Card>
            <CardContent>
              <Typography variant="h5" sx={{ fontWeight: 900, mb: 1 }}>
                Send a message
              </Typography>
              <Typography color="text.secondary" sx={{ mb: 2 }}>
                Share your preferred date/time, guest count, and any dietary needs.
                This form is a demo — it shows a success message (no backend).
              </Typography>

              {topic ? (
                <Alert severity="info" sx={{ mb: 2 }}>
                  Enquiry topic: <b>{topic}</b>
                </Alert>
              ) : null}

              <Box component="form" onSubmit={onSubmit} noValidate>
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      label="Name"
                      value={values.name}
                      onChange={onChange('name')}
                      onBlur={() => onBlur('name')}
                      error={Boolean(touched.name && errors.name)}
                      helperText={touched.name ? errors.name : ' '}
                      fullWidth
                      required
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      label="Phone"
                      value={values.phone}
                      onChange={onChange('phone')}
                      onBlur={() => onBlur('phone')}
                      error={Boolean(touched.phone && errors.phone)}
                      helperText={touched.phone ? errors.phone : ' '}
                      fullWidth
                      required
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      label="Email"
                      value={values.email}
                      onChange={onChange('email')}
                      onBlur={() => onBlur('email')}
                      error={Boolean(touched.email && errors.email)}
                      helperText={touched.email ? errors.email : ' '}
                      fullWidth
                      required
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      label="Message"
                      value={values.message}
                      onChange={onChange('message')}
                      onBlur={() => onBlur('message')}
                      error={Boolean(touched.message && errors.message)}
                      helperText={touched.message ? errors.message : ' '}
                      fullWidth
                      required
                      multiline
                      minRows={6}
                    />
                  </Grid>
                </Grid>

                <Stack direction={{ xs: 'column', sm: 'row' }} spacing={1.2} sx={{ mt: 1.5 }}>
                  <Button
                    type="submit"
                    variant="contained"
                    disabled={!canSubmit}
                    sx={{ width: { xs: '100%', sm: 'auto' }, '&:hover': { transform: 'translateY(-1px)' } }}
                  >
                    Send (demo)
                  </Button>
                  <Button
                    component="a"
                    href={mailto}
                    variant="outlined"
                    sx={{ width: { xs: '100%', sm: 'auto' }, '&:hover': { transform: 'translateY(-1px)' } }}
                  >
                    Email instead
                  </Button>
                </Stack>
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      <Snackbar
        open={snack.open}
        autoHideDuration={3200}
        onClose={() => setSnack((s) => ({ ...s, open: false }))}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert onClose={() => setSnack((s) => ({ ...s, open: false }))} severity="success" variant="filled">
          {snack.message}
        </Alert>
      </Snackbar>
    </Container>
  )
}
