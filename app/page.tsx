import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Features from '@/components/landing-page/Features';
import Testimonials from '@/components/landing-page/Testimonials';
import CallToActionFooter from '@/components/landing-page/CallToActionFooter';
import SearchContainerV2 from '@/components/search/SearchContainerV2';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navigation bar */}
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero section */}
        <section className="relative bg-gradient-to-b from-brand-50 to-white py-12 md:py-20 overflow-hidden">
          <div className="absolute top-20 left-20 w-40 h-40 bg-pink-300 rounded-full opacity-10 blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-60 h-60 bg-brand-300 rounded-full opacity-10 blur-3xl"></div>
          
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Book Your Road Test <span className="bg-gradient-to-r from-brand-600 to-brand-500 bg-clip-text text-transparent">Car & Instructor</span>
              </h1>
            </div>
          </div>
        </section>
        
        {/* Search section */}
        <section className="py-8 -mt-10 mb-16" id="search">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <SearchContainerV2 />
          </div>
        </section>
        
        {/* Features section */}
        <Features />
        
        {/* Testimonials section */}
        <Testimonials />
        
        {/* Call to action */}
        <CallToActionFooter />
      </main>
      
      {/* Footer */}
      <Footer />
    </div>
  );
}