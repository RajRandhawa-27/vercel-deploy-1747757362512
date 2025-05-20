import { Suspense } from "react";
import type { Metadata } from "next";
import MainLayout from "@/components/layouts/main-layout";
import HeroSection from "@/components/sections/hero-section";
import ExpertiseSection from "@/components/sections/expertise-section";
import WorkSection from "@/components/sections/work-section";
import ServicesSection from "@/components/sections/services-section";
import ProcessSection from "@/components/sections/process-section";
import TestimonialsSection from "@/components/sections/testimonials-section";
import ContactSection from "@/components/sections/contact-section";
import { personalData } from "@/data/personalData";
import { siteConfig } from "@/config/site";
import LoadingSpinner from "@/components/ui/loading-spinner";
import { expertiseData } from "@/data/expertiseData";
import { projectsData } from "@/data/projectsData";
import { servicesData } from "@/data/servicesData";
import { processData } from "@/data/processData";
import { contactData } from "@/data/contactData";

export const metadata: Metadata = {
  title: `${siteConfig.name} | Creative Portfolio`,
  description: siteConfig.description,
};

export default function HomePage() {
  return (
    <MainLayout>
      <Suspense fallback={<LoadingSpinner />}>
        <HeroSection />
        {expertiseData?.skills?.length > 0 && <ExpertiseSection />}
        {projectsData?.length > 0 && <WorkSection />}
        {servicesData?.length > 0 && <ServicesSection />}
        {processData?.length > 0 && <ProcessSection />}
        {personalData.testimonials?.enabled &&
          personalData.testimonials?.items?.length > 0 && (
            <TestimonialsSection />
          )}
        {contactData?.required && <ContactSection />}
      </Suspense>
    </MainLayout>
  );
}
