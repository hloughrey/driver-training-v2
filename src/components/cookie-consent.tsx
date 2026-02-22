'use client'

import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'

export function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent')
    if (!consent) {
      setShowBanner(true)
    } else if (consent === 'accepted') {
      loadGoogleAnalytics()
    }
  }, [])

  const handleAccept = () => {
    localStorage.setItem('cookie-consent', 'accepted')
    setShowBanner(false)
    loadGoogleAnalytics()
  }

  const handleDecline = () => {
    localStorage.setItem('cookie-consent', 'declined')
    setShowBanner(false)
  }

  const loadGoogleAnalytics = () => {
    const gaId = process.env.NEXT_PUBLIC_GA_ID
    if (!gaId) return

    // Load GA script
    const script1 = document.createElement('script')
    script1.async = true
    script1.src = `https://www.googletagmanager.com/gtag/js?id=${gaId}`
    document.head.appendChild(script1)

    // Initialize GA
    const script2 = document.createElement('script')
    script2.innerHTML = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', '${gaId}');
    `
    document.head.appendChild(script2)
  }

  if (!showBanner) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 bg-background/95 backdrop-blur border-t shadow-lg">
      <div className="container max-w-4xl mx-auto">
        <Card>
          <CardContent className="pt-6">
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <div className="flex-1">
                <h3 className="font-semibold mb-1">Cookie Consent</h3>
                <p className="text-sm text-muted-foreground">
                  We use cookies to analyze website traffic and improve your experience.
                  Your data is never sold or shared with third parties beyond analytics.
                </p>
              </div>
              <div className="flex gap-2 w-full sm:w-auto flex-shrink-0">
                <Button
                  onClick={handleDecline}
                  variant="outline"
                  size="sm"
                  className="flex-1 sm:flex-none"
                >
                  Decline
                </Button>
                <Button
                  onClick={handleAccept}
                  size="sm"
                  className="flex-1 sm:flex-none"
                >
                  Accept
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
