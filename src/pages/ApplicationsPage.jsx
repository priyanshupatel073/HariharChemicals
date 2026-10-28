import React from 'react';
import PageBanner from '../components/PageBanner';
import ApplicationsSection from '../components/ApplicationsSection';
import PackagingLogistics from '../components/PackagingLogistics';
import { Layers, Sparkles } from 'lucide-react';

export default function ApplicationsPage({ onOpenRfq }) {
  return (
    <div>
      <PageBanner
        tag="DIVERSE TEXTILE &amp; PIGMENT SOLUTIONS"
        title="Cellulosic &amp; Industrial Applications"
        subtitle="Explore how Harihar's Naphthols and diazo Fast Bases empower leading global producers of yarn packages, printed fabrics, heavy blankets, towels, and organic azoic pigments."
        onOpenRfq={() => onOpenRfq()}
      />

      {/* Main Applications Section */}
      <ApplicationsSection onSelectApplicationForRfq={onOpenRfq} />

      {/* Packaging & Logistics Integration */}
      <PackagingLogistics onOpenRfq={onOpenRfq} />
    </div>
  );
}

