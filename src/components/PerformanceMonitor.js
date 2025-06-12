import { useEffect } from 'react';

const PerformanceMonitor = () => {
  useEffect(() => {
    // Enhanced LCP tracking function
    const trackLCP = () => {
      if ('PerformanceObserver' in window) {
        try {
          const observer = new PerformanceObserver((entryList) => {
            const entries = entryList.getEntries();
            const lastEntry = entries[entries.length - 1];
            
            if (lastEntry) {
              const lcpValue = lastEntry.startTime;
              console.log('🎯 LCP Measured:', {
                value: Math.round(lcpValue),
                element: lastEntry.element ? lastEntry.element.tagName : 'Unknown',
                url: lastEntry.url || 'N/A',
                loadTime: lastEntry.loadTime || 'N/A',
                renderTime: lastEntry.renderTime || 'N/A'
              });

              // LCP scoring
              let lcpScore = 'POOR';
              if (lcpValue <= 2500) lcpScore = 'GOOD';
              else if (lcpValue <= 4000) lcpScore = 'NEEDS IMPROVEMENT';

              console.log(`📊 LCP Score: ${lcpScore} (${Math.round(lcpValue)}ms)`);

              // Track LCP element details
              if (lastEntry.element) {
                console.log('🎯 LCP Element Details:', {
                  tagName: lastEntry.element.tagName,
                  className: lastEntry.element.className,
                  id: lastEntry.element.id,
                  text: lastEntry.element.textContent ? 
                    lastEntry.element.textContent.substring(0, 50) + '...' : 
                    'No text content'
                });
              }

              // Send to analytics if available
              sendToAnalytics('LCP', lcpValue, {
                score: lcpScore,
                element: lastEntry.element?.tagName,
                url: window.location.href
              });
            }
          });

          observer.observe({ entryTypes: ['largest-contentful-paint'] });
          
          // Cleanup observer
          return () => observer.disconnect();
        } catch (error) {
          console.log('LCP tracking not available:', error.message);
        }
      }
    };

    // Load and track other Web Vitals
    const loadWebVitals = async () => {
      try {
        const { getCLS, getFID, getFCP, getTTFB } = await import('web-vitals');
        
        // First Contentful Paint
        getFCP((metric) => {
          console.log('🎨 FCP:', Math.round(metric.value) + 'ms');
          let fcpScore = 'POOR';
          if (metric.value <= 1800) fcpScore = 'GOOD';
          else if (metric.value <= 3000) fcpScore = 'NEEDS IMPROVEMENT';
          console.log(`📊 FCP Score: ${fcpScore}`);
          sendToAnalytics('FCP', metric.value, { score: fcpScore });
        });

        // Cumulative Layout Shift
        getCLS((metric) => {
          console.log('📐 CLS:', metric.value.toFixed(3));
          let clsScore = 'POOR';
          if (metric.value <= 0.1) clsScore = 'GOOD';
          else if (metric.value <= 0.25) clsScore = 'NEEDS IMPROVEMENT';
          console.log(`📊 CLS Score: ${clsScore}`);
          sendToAnalytics('CLS', metric.value, { score: clsScore });
        });

        // First Input Delay
        getFID((metric) => {
          console.log('⚡ FID:', Math.round(metric.value) + 'ms');
          let fidScore = 'POOR';
          if (metric.value <= 100) fidScore = 'GOOD';
          else if (metric.value <= 300) fidScore = 'NEEDS IMPROVEMENT';
          console.log(`📊 FID Score: ${fidScore}`);
          sendToAnalytics('FID', metric.value, { score: fidScore });
        });

        // Time to First Byte
        getTTFB((metric) => {
          console.log('🌐 TTFB:', Math.round(metric.value) + 'ms');
          let ttfbScore = 'POOR';
          if (metric.value <= 800) ttfbScore = 'GOOD';
          else if (metric.value <= 1800) ttfbScore = 'NEEDS IMPROVEMENT';
          console.log(`📊 TTFB Score: ${ttfbScore}`);
          sendToAnalytics('TTFB', metric.value, { score: ttfbScore });
        });

      } catch (error) {
        console.log('⚠️ Web Vitals tracking skipped - package not installed');
      }
    };

    // Track font loading performance for LCP optimization
    const trackFontLoading = () => {
      if ('fonts' in document) {
        const startTime = performance.now();
        
        document.fonts.ready.then(() => {
          const fontLoadTime = performance.now() - startTime;
          console.log('🔤 Font Load Time:', Math.round(fontLoadTime) + 'ms');
          
          if (fontLoadTime > 100) {
            console.warn('⚠️ Font loading may be impacting LCP. Consider font-display: swap or preloading.');
          }
          
          sendToAnalytics('FontLoad', fontLoadTime);
        });
      }
    };

    // Track critical resource loading
    const trackCriticalResources = () => {
      if ('PerformanceObserver' in window) {
        try {
          const observer = new PerformanceObserver((list) => {
            list.getEntries().forEach((entry) => {
              if (entry.initiatorType === 'css' || entry.initiatorType === 'script') {
                const loadTime = entry.responseEnd - entry.startTime;
                console.log(`📦 Resource: ${entry.name.split('/').pop()} - ${Math.round(loadTime)}ms`);
                
                if (loadTime > 1000) {
                  console.warn(`⚠️ Slow resource detected: ${entry.name}`);
                }
              }
            });
          });
          
          observer.observe({ entryTypes: ['resource'] });
          
          return () => observer.disconnect();
        } catch (error) {
          console.log('Resource tracking not available');
        }
      }
    };

    // Enhanced analytics function
    const sendToAnalytics = (name, value, additionalData = {}) => {
      const data = {
        metric: name,
        value: Math.round(value),
        timestamp: Date.now(),
        url: window.location.href,
        userAgent: navigator.userAgent,
        connection: navigator.connection ? {
          effectiveType: navigator.connection.effectiveType,
          downlink: navigator.connection.downlink
        } : null,
        ...additionalData
      };

      console.log(`📈 Performance Metric - ${name}:`, data);

      // You can send this to your analytics service
      // Example: analytics.track('performance', data);
    };

    // Track lazy loading effectiveness
    const trackLazyLoading = () => {
      const lazyElements = document.querySelectorAll('[data-lazy="true"]');
      console.log(`🚀 Lazy Loading Elements: ${lazyElements.length}`);
      
      if (lazyElements.length > 0) {
        console.log('💡 Lazy loading is helping reduce initial page weight');
      }
    };

    // Track chunk loading times for code splitting analysis
    const trackChunkLoading = () => {
      if ('PerformanceObserver' in window) {
        try {
          const observer = new PerformanceObserver((list) => {
            list.getEntries().forEach((entry) => {
              if (entry.name.includes('chunk') || entry.name.includes('.js')) {
                const loadTime = entry.responseEnd - entry.startTime;
                console.log(`📦 Chunk Load: ${entry.name.split('/').pop()} - ${Math.round(loadTime)}ms`);
              }
            });
          });
          
          observer.observe({ entryTypes: ['resource'] });
        } catch (error) {
          console.log('Chunk tracking not available');
        }
      }
    };

    // Monitor LCP element changes
    const monitorLCPElement = () => {
      let lcpElement = null;
      let lcpTime = 0;

      if ('PerformanceObserver' in window) {
        try {
          const observer = new PerformanceObserver((entryList) => {
            const entries = entryList.getEntries();
            const lastEntry = entries[entries.length - 1];
            
            if (lastEntry && lastEntry.startTime > lcpTime) {
              lcpTime = lastEntry.startTime;
              lcpElement = lastEntry.element;
              
              console.log('🎯 New LCP Element:', {
                tag: lcpElement?.tagName,
                class: lcpElement?.className,
                time: Math.round(lcpTime) + 'ms'
              });
            }
          });

          observer.observe({ entryTypes: ['largest-contentful-paint'] });
        } catch (error) {
          console.log('LCP element monitoring not available');
        }
      }
    };

    // Initialize all tracking
    const cleanupFunctions = [
      trackLCP(),
      trackCriticalResources(),
      monitorLCPElement()
    ].filter(Boolean);

    loadWebVitals();
    trackFontLoading();
    trackLazyLoading();
    trackChunkLoading();

    // Cleanup function
    return () => {
      cleanupFunctions.forEach(cleanup => cleanup && cleanup());
    };
  }, []);

  return null; // This component doesn't render anything
};

export default PerformanceMonitor; 