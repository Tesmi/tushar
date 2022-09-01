import * as React from 'react';
import UnderlineLink from '@/components/links/UnderlineLink';

export default function Layout({ children }: { children: React.ReactNode }) {
  // Put Header or Footer Here
  return (
    <>
      {children}
      <div className='flex items-center justify-center'>
        <footer className='absolute bottom-2 text-gray-700 '>
          © {new Date().getFullYear()} By{' '}
          {/* // Todo: Insert Page link below */}
          <UnderlineLink href=''>Tesmi</UnderlineLink>
        </footer>
      </div>
    </>
  );
}
