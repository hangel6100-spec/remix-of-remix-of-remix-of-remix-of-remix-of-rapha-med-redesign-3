import { Layout } from '@/components/layout/Layout';
import { HeroSection } from '@/components/home/HeroSection';
import { ProductsGrid } from '@/components/home/ProductsGrid';
import { FeaturesSection } from '@/components/home/FeaturesSection';
import { StatsSection } from '@/components/home/StatsSection';
import { GlobalReachSection } from '@/components/home/GlobalReachSection';
import { CertificationsSection } from '@/components/home/CertificationsSection';
import { CTASection } from '@/components/home/CTASection';

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <ProductsGrid />
      <StatsSection />
      <GlobalReachSection />
      <FeaturesSection />
      <CertificationsSection />
      <CTASection />
    </Layout>
  );
};

export default Index;
