import React from 'react';

export default function NotFound({ error = 'Not Found' }) {
  return (
    <section className='mt-24'>
      <div class='py-8 px-4 '>
        <div class='mx-auto max-w-screen-sm text-center'>
          <h1 class='mb-4 text-7xl font-extrabold lg:text-9xl  '>404</h1>
          <p class='mb-4 text-3xl  font-bold text-gray-900 md:text-4xl '>{error}</p>
          <p class='mb-4 text-lg font-light text-gray-500 '>
            Sorry, we can't find the user. Check the username you are trying to find.
          </p>
        </div>
      </div>
    </section>
  );
}
