import { useEffect, useState } from 'react'
import { Fab, Zoom } from '@mui/material'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp'

export default function BackToTop() {
  const [show, setShow] = useState(false)

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 700)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <Zoom in={show}>
      <Fab
        color="primary"
        size="medium"
        aria-label="Back to top"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        sx={{ position: 'fixed', right: 18, bottom: 18, zIndex: 1200 }}
      >
        <KeyboardArrowUpIcon />
      </Fab>
    </Zoom>
  )
}
