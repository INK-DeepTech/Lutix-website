import React from 'react';

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-[#F1F7F9] py-24 px-6">
      <div className="max-w-[1200px] mx-auto text-center">
        <h1 className="text-5xl font-extrabold text-[#07326A] mb-16 font-serif">About Lutix DeepTech</h1>
        
        <h2 className="text-3xl font-bold text-[#0A61C9] mb-8">Our Mission</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-20 text-left">
          <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100">
            <h3 className="font-bold text-[#07326A] text-xl mb-3">Develop Intelligent Technologies</h3>
            <p className="text-[#567C8D]">Create intelligent and innovative technologies that turn ideas into practical solutions.</p>
          </div>
          <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100">
            <h3 className="font-bold text-[#07326A] text-xl mb-3">Build Sustainable Solutions</h3>
            <p className="text-[#567C8D]">Develop sustainable products and solutions that address present and future needs.</p>
          </div>
          <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100">
            <h3 className="font-bold text-[#07326A] text-xl mb-3">Solve Real-World Challenges</h3>
            <p className="text-[#567C8D]">Solve meaningful real-world problems through effective, scalable, and impactful solutions.</p>
          </div>
          <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100">
            <h3 className="font-bold text-[#07326A] text-xl mb-3">Create Lasting Value</h3>
            <p className="text-[#567C8D]">Deliver lasting value to people, businesses, organizations, and society.</p>
          </div>
        </div>

        <h2 className="text-3xl font-bold text-[#0A61C9] mb-8">Core Values</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20 text-left">
          <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100">
            <h3 className="font-bold text-[#07326A] mb-3 text-lg">Innovation</h3>
            <p className="text-[#567C8D] text-sm">We build technology that solves meaningful real-world problems.</p>
          </div>
          <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100">
            <h3 className="font-bold text-[#07326A] mb-3 text-lg">Integrity</h3>
            <p className="text-[#567C8D] text-sm">We act with honesty, transparency and accountability.</p>
          </div>
          <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100">
            <h3 className="font-bold text-[#07326A] mb-3 text-lg">Customer-First</h3>
            <p className="text-[#567C8D] text-sm">We listen, understand and build around real customer needs.</p>
          </div>
          <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100">
            <h3 className="font-bold text-[#07326A] mb-3 text-lg">Sustainability</h3>
            <p className="text-[#567C8D] text-sm">We create solutions designed for lasting economic, social and environmental impact.</p>
          </div>
        </div>

        <h2 className="text-3xl font-bold text-[#0A61C9] mb-12">The minds driving our innovation</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
           <div className="bg-white p-8 rounded-3xl shadow-sm">
              <img src="/ceo.jpg" alt="Iswarya" className="w-40 h-40 rounded-full mx-auto object-cover mb-6 shadow-md" />
              <h3 className="font-bold text-xl text-[#07326A]">Iswarya</h3>
              <p className="text-[#0A61C9] font-medium">CEO & Co-Founder</p>
           </div>
           <div className="bg-white p-8 rounded-3xl shadow-sm">
              <img src="/cto.jpg" alt="Nithishkumar" className="w-40 h-40 rounded-full mx-auto object-cover mb-6 shadow-md" />
              <h3 className="font-bold text-xl text-[#07326A]">Nithishkumar</h3>
              <p className="text-[#0A61C9] font-medium">CTO & Co-Founder</p>
           </div>
           <div className="bg-white p-8 rounded-3xl shadow-sm">
              <img src="/coo.jpg" alt="Karthik Balaji" className="w-40 h-40 rounded-full mx-auto object-cover mb-6 shadow-md" />
              <h3 className="font-bold text-xl text-[#07326A]">Karthik Balaji</h3>
              <p className="text-[#0A61C9] font-medium">COO</p>
           </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
