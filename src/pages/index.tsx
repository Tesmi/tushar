import * as React from 'react';

import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';

export default function HomePage() {
  return (
    <Layout>
      <Seo templateTitle='Tushar' description='Portfolio Landking Page' />
      <main>
        <section>
          <div className='layout flex min-h-screen flex-col items-center justify-center text-center'>
            <h1 className='font-medium text-sky-50'>
              Website Under Construction...
            </h1>
            <br />
            <h1>⚠️</h1>
          </div>
        </section>
      </main>
    </Layout>
  );
}
