'use client'

import { useEffect } from 'react'

export default function IdentityTokenRedirect() {
  useEffect(() => {
    const hash = window.location.hash

    // Check for any Netlify Identity tokens
    if (hash.includes('invite_token') ||
        hash.includes('confirmation_token') ||
        hash.includes('recovery_token') ||
        hash.includes('email_change_token')) {
      // Redirect to admin with the token
      window.location.href = '/admin/' + hash
    }
  }, [])

  return null
}
