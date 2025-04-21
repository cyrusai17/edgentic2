import Header from '@/components/Header';
import Hero from '@/components/Hero';
import WhyEdgentic from '@/components/WhyEdgentic';
import SignaturePrograms from '@/components/SignaturePrograms';
import ForUniversities from '@/components/ForUniversities';
import ForExecutives from '@/components/ForExecutives';
import Boardroom from '@/components/Boardroom';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <WhyEdgentic />
      <SignaturePrograms />
      <ForUniversities />
      <ForExecutives />
      <Boardroom />
      <Footer />
    </main>
  );
}
