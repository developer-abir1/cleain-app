import React from 'react';
import Footer from './Footer';
import Navbar from './Navbar';
import Head from 'next/head';

export default function Layout({ title, children }) {
  return (
    <>
      <Head>
        <title>{title ? title + ' Dry Cleaning' : 'Dry Cleaning'}</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex min-h-screen flex-col justify-between">
        <header>
          <Navbar />
        </header>
        <main className="container m-auto mt-4 px-4">{children}</main>

        <footer className="">
          <Footer />
        </footer>
      </div>
    </>
  );
}
