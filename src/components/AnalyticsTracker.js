import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const AnalyticsTracker = () => {
  const location = useLocation();

  useEffect(() => {
    try {
      // Initialize dataLayer if it doesn't exist
      window.dataLayer = window.dataLayer || [];

      // Push a virtual pageview event for GTM
      window.dataLayer.push({
        event: 'pageview',
        page: {
          path: location.pathname,
          search: location.search,
          url: window.location.href,
          title: document.title
        }
      });

      // Also, trigger Facebook Pixel's PageView if fbq is available
      if (typeof window.fbq === 'function') {
        window.fbq('track', 'PageView');
      }

      // Log for debugging
      console.log('Analytics event pushed:', {
        path: location.pathname,
        search: location.search,
        url: window.location.href
      });
    } catch (error) {
      console.error('Error in AnalyticsTracker:', error);
    }
  }, [location]); // Re-run this effect every time the location changes

  return null; // This component renders nothing
};

export default AnalyticsTracker; 