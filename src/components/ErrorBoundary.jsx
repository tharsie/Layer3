import { Component } from 'react'
import { Box, Button, Container, Typography } from '@mui/material'

export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false, error: null }
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error }
  }

  componentDidCatch(error, errorInfo) {
    // Optionally log to a monitoring service
    console.error('ErrorBoundary caught:', error, errorInfo)
  }

  handleReload = () => {
    // Reload the current route to recover after transient failures
    window.location.reload()
  }

  render() {
    if (this.state.hasError) {
      return (
        <Container sx={{ py: 6 }}>
          <Box>
            <Typography variant="h6" sx={{ fontWeight: 900, mb: 1 }}>
              Something went wrong
            </Typography>
            <Typography color="text.secondary" sx={{ mb: 2 }}>
              The page failed to load. This can happen during dependency re-optimization.
              Try reloading. If it persists, restart the dev server.
            </Typography>
            <Button variant="contained" color="primary" onClick={this.handleReload}>
              Reload Page
            </Button>
          </Box>
        </Container>
      )
    }
    return this.props.children
  }
}
