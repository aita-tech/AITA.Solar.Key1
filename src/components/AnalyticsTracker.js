import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const AnalyticsTracker = () => {
  const location = useLocation();

  useEffect(() => {
    // Initialize dataLayer if it doesn't exist
    window.dataLayer = window.dataLayer || [];

    // Push a virtual pageview event for GTM
    window.dataLayer.push({
      event: 'pageview',
      page: {
        path: location.pathname,
        search: location.search,
        url: window.location.href
      }
    });

    // Also, trigger Facebook Pixel's PageView if fbq is available
    if (window.fbq) {
      window.fbq('track', 'PageView');
    }

  }, [location]); // Re-run this effect every time the location changes

  return null; // This component renders nothing
};

export default AnalyticsTracker; 