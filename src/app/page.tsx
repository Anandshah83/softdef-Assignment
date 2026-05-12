import Navbar from '@/components/Navbar';
import HeroBanner from '@/components/HeroBanner';
import TrendingPlants from '@/components/TrendingPlants';
import TopSellingPlants from '@/components/TopSellingPlants';
import CustomerReviews from '@/components/CustomerReviews';
import O2Plants from '@/components/O2Plants';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroBanner />
      <TrendingPlants />
      <TopSellingPlants />
      <CustomerReviews />
      <O2Plants />
      <Footer />
    </main>
  );
}
