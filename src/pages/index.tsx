import * as React from 'react';

import Layout from '@/components/layout/Layout';
import UnderlineLink from '@/components/links/UnderlineLink';
import Seo from '@/components/Seo';

export default function HomePage() {
  return (
    <Layout>
      <Seo templateTitle='Tushar' description='Portfolio Landking Page' />

      <main>
        <section>
          <div className='layout flex min-h-screen flex-col items-center justify-center text-center'>
            <footer className='absolute bottom-2 text-gray-700'>
              © {new Date().getFullYear()} By{' '}
              {/* // Todo: Insert Page link below */}
              <UnderlineLink href=''>Tushar</UnderlineLink>
            </footer>
          </div>
        </section>
      </main>
    </Layout>
  );
}
