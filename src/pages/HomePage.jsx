import React from 'react';
import { Hero } from '../components/Hero';
import { TargetAudience } from '../components/TargetAudience';
import { HowItWorks } from '../components/HowItWorks';
import { AIOutreach } from '../components/AIOutreach';
import { CompleteSystem } from '../components/CompleteSystem';
import { ProfileSection } from '../components/ProfileSection';
import { CompanyPageAndContent } from '../components/CompanyPageAndContent';
import { AdsAndABM } from '../components/AdsAndABM';
import { MetricsAndFit } from '../components/MetricsAndFit';
import { OnboardingAndHumanAI } from '../components/OnboardingAndHumanAI';
import { Calculator } from '../components/Calculator';
import { SolutionsSection } from '../components/SolutionsSection';
import { BlogSection } from '../components/BlogSection';
import { AboutSection } from '../components/AboutSection';
import { FAQSection } from '../components/FAQSection';
import { CTABanner } from '../components/CTABanner';

export const HomePage = ({ lang, t, onOpenModal, onNavigate }) => {
  return (
    <>
      <Hero t={t} onOpenModal={onOpenModal} />
      <TargetAudience t={t} onOpenModal={onOpenModal} />
      <HowItWorks t={t} onOpenModal={onOpenModal} />
      <AIOutreach t={t} onOpenModal={onOpenModal} />
      <CompleteSystem t={t} onOpenModal={onOpenModal} onNavigate={onNavigate} />
      <ProfileSection t={t} onOpenModal={onOpenModal} />
      <CompanyPageAndContent t={t} onOpenModal={onOpenModal} />
      <AdsAndABM t={t} onOpenModal={onOpenModal} />
      <MetricsAndFit t={t} onOpenModal={onOpenModal} />
      <OnboardingAndHumanAI t={t} onOpenModal={onOpenModal} />
      <Calculator t={t} onOpenModal={onOpenModal} />
      <SolutionsSection lang={lang} t={t} onOpenModal={onOpenModal} />
      <BlogSection lang={lang} t={t} onOpenModal={onOpenModal} />
      <AboutSection t={t} onOpenModal={onOpenModal} />
      <FAQSection t={t} />
      <CTABanner t={t} onOpenModal={onOpenModal} />
    </>
  );
};
