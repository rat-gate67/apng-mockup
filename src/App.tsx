import React from 'react';
import { 
  Brain, 
  CheckCircle, 
  Fingerprint, 
  Glasses, 
  GraduationCap, 
  // HandMetal,
  Users,
} from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Hero Section */}
      <header className="container mx-auto px-4 py-16 text-center">
        <div className="mb-8">
          <img src="/images/logo.png" alt="signed-IT logo" className="inline-block h-64 w-64 mb-4" />
        </div>
        <h1 className="text-5xl font-bold text-gray-900 mb-4">
          Communicate Better: <span className="text-blue-600">signed-IT!</span>
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          Tech meets Touch: Breaking Language Barriers
        </p>
        <p className="text-2xl text-gray-700 max-w-2xl mx-auto mb-12">
          Real-time sign language translation app for Deaf and Hard-of-Hearing (DHH) education
        </p>
        <button className="bg-blue-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-blue-700 transition-colors">
          Get Started
        </button>
      </header>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Key Features</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <FeatureCard
              icon={<Brain className="h-8 w-8" />}
              title="AI Sign Language Recognition"
              description="Advanced machine learning algorithms for accurate real-time translation"
            />
            <FeatureCard
              icon={<CheckCircle className="h-8 w-8" />}
              title="Certified Interpreter Verification"
              description="Quality assurance through professional certification"
            />
            <FeatureCard
              icon={<GraduationCap className="h-8 w-8" />}
              title="Interactive Learning Tools"
              description="Engaging educational resources for effective learning"
            />
          </div>
        </div>
      </section>

      {/* Target Audience */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Who It's For</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <AudienceCard
              icon={<Glasses className="h-8 w-8" />}
              title="DHH Students"
              description="Empowering students with accessible communication tools"
            />
            <AudienceCard
              icon={<Users className="h-8 w-8" />}
              title="Educators"
              description="Supporting teachers with innovative teaching resources"
            />
          </div>
        </div>
      </section>

      {/* SDGs Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">Supporting UN SDGs</h2>
          <div className="flex flex-wrap justify-center gap-6">
          {[4, 9, 10, 16, 17].map((sdg) => (
                <div key={sdg} className="flex flex-col items-center">
                <img 
                  src={`/images/Goal ${sdg}/E_WEB_${String(sdg).padStart(2, '0')}.png`} 
                  alt={`SDG ${sdg} icon`} 
                  className="h-20 w-20 mb-3" 
                />
                </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <Fingerprint className="h-8 w-8 mx-auto mb-4" />
          <p className="text-gray-400">© 2025 signed-IT! All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

function FeatureCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  // function FeatureCard({ icon, title, description }) {
  return (
    <div className="bg-gray-50 p-6 rounded-xl text-center hover:shadow-lg transition-shadow">
      <div className="text-blue-600 mb-4 flex justify-center">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

function AudienceCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-md flex items-start gap-4">
      <div className="text-blue-600 flex-shrink-0">{icon}</div>
      <div>
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
}

export default App;