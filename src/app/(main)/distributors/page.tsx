'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

// Redirect from old distributors page to new dealer locator
export default function DistributorsRedirect() {
  const router = useRouter();
  
  useEffect(() => {
    router.replace('/dealers/locator');
  }, [router]);
  
  return (
    <div style={{ padding: '50px', textAlign: 'center' }}>
      Redirecting to Dealer Locator...
    </div>
  );
}
