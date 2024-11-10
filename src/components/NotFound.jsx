import React from 'react';

export default function NotFound({
  errorHeading = '404',
  errorSubHeading = 'Not Found',
  errorDescription = `Sorry, we couldn't find what you are looking for :(`
}) {
  return (
    <section className='mt-24'>
      <div class='py-8 px-4 '>
        <div class='mx-auto max-w-screen-sm text-center'>
          <h1 class='mb-4 text-7xl font-extrabold lg:text-9xl  '>{errorHeading}</h1>
          <p class='mb-4 text-3xl  font-bold text-gray-900 md:text-4xl '>{errorSubHeading}</p>
          <p class='mb-4 text-lg font-light text-gray-500 '>{errorDescription}</p>
        </div>
      </div>
    </section>
  );
}
