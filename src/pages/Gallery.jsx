import { useEffect } from 'react'
import { Container } from '@mui/material'
import SectionHeading from '../components/SectionHeading'
import GalleryGrid from '../components/GalleryGrid'
import { galleryCategories, galleryImages } from '../data/gallery'

export default function Gallery() {
  useEffect(() => {
    document.title = 'Gallery — Layer3 (Jaffna)'
  }, [])

  return (
    <Container sx={{ py: { xs: 6, md: 8 } }}>
      <SectionHeading
        overline="Gallery"
        title="A glimpse of Layer3"
        subtitle="Interiors, dishes, family moments, and small events — clean placeholders today, easy to swap with real photos later. Tap any image to open it."
      />
      <GalleryGrid categories={galleryCategories} images={galleryImages} />
    </Container>
  )
}
