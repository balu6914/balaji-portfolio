import HeroSection from '@/components/HeroSection';
import SkillsSection from '@/components/SkillsSection';
import ProjectsSection from '@/components/ProjectsSection';
import ExperienceSection from '@/components/ExperienceSection';
import CertificationsSection from '@/components/CertificationsSection';
import ContactSection from '@/components/ContactSection';

export const metadata = {
  title: 'Balaji Chintam | Senior Blockchain Developer',
  description: 'Senior Blockchain Developer with 12+ years in tech. Specializing in Web3, Smart Contracts, DeFi, and Full-Stack Development.',
};

export default function Home() {
  return (
    <main>
      <HeroSection />
      <SkillsSection />
      <ProjectsSection />
      <ExperienceSection />
      <CertificationsSection />
      <ContactSection />
    </main>
  );
}
