"use client";
import React, { useState } from 'react';
import Header from "./components/Header";
import Loader from "./components/loader";
import HeroSection from "./sections/heroSection";
import ProjectsSection from "./sections/ProjectsSection";
import AboutSection from './sections/aboutSection';
import ContactSection from './sections/contactSection';

export default function Home() {
  const [loading, setLoading] = useState(true);

  const handleLoaderFinish = () => {
    setLoading(false);
  };

  return (
    <>
      {loading && <Loader onFinish={handleLoaderFinish} />}
      {!loading && (
        <>
          <Header />
          <main>
            <HeroSection />
            <AboutSection />
            <ProjectsSection />
            <ContactSection />
          </main>
        </>
      )}
    </>
  );
}
