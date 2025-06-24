import React from 'react';
import HeroSection from '../components/sections/HeroSection.jsx';
import AboutSection from '../components/sections/AboutSection.jsx';
import FounderSection from '../components/sections/FounderSection.jsx';
import TransformationSection from '../components/sections/TransformationSection.jsx';
import ProgramsSection from '../components/sections/ProgramsSection.jsx';
import BookSection from '../components/sections/BookSection.jsx';
import SpeakingSection from '../components/sections/SpeakingSection.jsx';
import VisionSection from '../components/sections/VisionSection.jsx';
import ContactSection from '../components/sections/ContactSection.jsx';

const HomePage = () => {
    return (
        <>
            <HeroSection />
            <AboutSection />
            <FounderSection />
            <TransformationSection />
            <ProgramsSection />
            <BookSection />
            <SpeakingSection />
            <VisionSection />
            <ContactSection />
        </>
    );
};

export default HomePage;