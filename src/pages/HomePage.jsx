import React from 'react';
import HeroSection from '../components/sections/HeroSection';
import AboutSection from '../components/sections/AboutSection';
import FounderSection from '../components/sections/FounderSection';
import TransformationSection from '../components/sections/TransformationSection';
import ProgramsSection from '../components/sections/ProgramsSection';
import BookSection from '../components/sections/BookSection';
import SpeakingSection from '../components/sections/SpeakingSection';
import VisionSection from '../components/sections/VisionSection';
import ContactSection from '../components/sections/ContactSection';

const HomePage = () => {
    return (
        <main>
            <HeroSection />
            <FounderSection />
            <AboutSection />
            <TransformationSection />
            <ProgramsSection />
            <BookSection />
            <SpeakingSection />
            <VisionSection />
            <ContactSection />
        </main>
    );
};

export default HomePage;