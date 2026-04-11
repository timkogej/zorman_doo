'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Script from 'next/script';
import Link from 'next/link';

const GA_MEASUREMENT_ID = 'G-1DZFV4KP6W';

function getCookie(name: string): string | null {
  if (typeof document === 'undefined') return null;
  const match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'));
  return match ? decodeURIComponent(match[2]) : null;
}

function setCookie(name: string, value: string, days: number) {
  const expires = new Date();
  expires.setTime(expires.getTime() + days * 24 * 60 * 60 * 1000);
  document.cookie = `${name}=${encodeURIComponent(value)};expires=${expires.toUTCString()};path=/;SameSite=Lax`;
}

export default function CookieBanner() {
  const [showBanner, setShowBanner] = useState(false);
  const [consentGiven, setConsentGiven] = useState(false);

  useEffect(() => {
    const consent = getCookie('cookie_consent');
    if (consent === null) {
      setShowBanner(true);
    } else if (consent === 'true') {
      setConsentGiven(true);
    }
  }, []);

  const handleAccept = () => {
    setCookie('cookie_consent', 'true', 365);
    setConsentGiven(true);
    setShowBanner(false);
  };

  const handleDecline = () => {
    setCookie('cookie_consent', 'false', 365);
    setShowBanner(false);
  };

  return (
    <>
      {consentGiven && (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
            strategy="afterInteractive"
          />
          <Script id="google-analytics" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${GA_MEASUREMENT_ID}');
            `}
          </Script>
        </>
      )}

      <AnimatePresence>
        {showBanner && (
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 16 }}
            transition={{ duration: 0.35, ease: 'easeOut' }}
            className="fixed bottom-0 left-0 right-0 z-50 px-4 pb-4 sm:px-6 sm:pb-6"
          >
            <div className="max-w-3xl mx-auto bg-[#0a0a0a] border border-[#222222] rounded-sm px-5 py-4 sm:px-6 sm:py-5 shadow-2xl">
              <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                <div className="flex-1 min-w-0">
                  <p className="text-white text-sm font-medium mb-1">
                    Ta spletna stran uporablja piškotke
                  </p>
                  <p className="text-[#888888] text-xs leading-relaxed">
                    Uporabljamo Google Analytics za analizo obiska spletne strani. Osebnih podatkov ne zbiramo.{' '}
                    <Link
                      href="/politika-zasebnosti"
                      className="text-[#7ecba1] hover:underline transition-colors"
                    >
                      Politika zasebnosti
                    </Link>
                  </p>
                </div>
                <div className="flex gap-3 shrink-0">
                  <button
                    onClick={handleDecline}
                    className="px-4 py-2 text-xs text-[#888888] border border-[#333333] rounded-sm hover:border-[#555555] hover:text-white transition-all duration-200 whitespace-nowrap"
                  >
                    Zavrni
                  </button>
                  <button
                    onClick={handleAccept}
                    className="px-4 py-2 text-xs bg-[#7ecba1] text-[#0a0a0a] font-semibold rounded-sm hover:bg-[#6ab88e] transition-all duration-200 whitespace-nowrap"
                  >
                    Sprejmi vse
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
