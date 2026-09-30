import React, { useState } from 'react';
import { Globe, Clock, ArrowUpRight, AlertCircle, MessageCircle } from 'lucide-react';
import { COUNTRIES_LIST, COUNTRY_REGIONS, CountryItem } from '../data/countries';
import { openWhatsApp } from '../utils/whatsapp';
import { AnimatedSection } from './AnimatedSection';

export const CountriesSection: React.FC = () => {
  const [selectedRegion, setSelectedRegion] = useState<string>('Semua');

  const filteredCountries = COUNTRIES_LIST.filter((country) => {
    if (selectedRegion === 'Semua') return true;
    return country.region === selectedRegion;
  });

  const handleCountryConsultation = (country: CountryItem) => {
    const message = `Halo MH Travel Agency Indonesia, saya ingin berkonsultasi mengenai pengurusan visa untuk negara ${country.name}. Mohon informasi persyaratan dokumen terbaru, estimasi durasi, dan prosesnya.`;
    openWhatsApp(message);
  };

  return (
    <section id="negara" className="scroll-mt-16 sm:scroll-mt-20 py-14 sm:py-20 bg-slate-950 text-white border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <AnimatedSection>
          <div className="text-left max-w-3xl mb-8 sm:mb-12">
            <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-amber-400 mb-2">
              <Globe className="w-4 h-4" />
              <span>Destinasi Populer Mancanegara</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-white mb-3">
              Visa Negara Tujuan
            </h2>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              Asistensi pengurusan visa untuk berbagai negara di seluruh benua dengan pemahaman mendalam atas regulasi imigrasi terbaru masing-masing kedutaan.
            </p>
          </div>
        </AnimatedSection>

        {/* Region Filter Buttons */}
        <AnimatedSection delayMs={80}>
          <div className="flex items-center gap-1.5 p-1.5 bg-slate-900 border border-slate-800 rounded-xl overflow-x-auto mb-8 scrollbar-none">
            {COUNTRY_REGIONS.map((region) => (
              <button
                key={region}
                type="button"
                onClick={() => setSelectedRegion(region)}
                className={`px-3.5 py-2 rounded-lg text-xs sm:text-sm font-medium transition-all whitespace-nowrap min-h-[40px] cursor-pointer ${
                  selectedRegion === region
                    ? 'bg-amber-500 text-slate-950 font-bold shadow-sm'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                {region}
              </button>
            ))}
          </div>
        </AnimatedSection>

        {/* Countries Grid */}
        <AnimatedSection delayMs={150}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {filteredCountries.map((country) => (
              <div
                key={country.id}
                className="flex flex-col justify-between p-5 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-slate-700 transition-all text-left group"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2.5">
                      <span className="text-2xl sm:text-3xl" role="img" aria-label={country.name}>
                        {country.flag}
                      </span>
                      <div>
                        <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-amber-400 transition-colors">
                          {country.name}
                        </h3>
                        <span className="text-xs text-slate-400 font-medium">{country.region}</span>
                      </div>
                    </div>
                    <span className="text-xs font-mono text-slate-500 bg-slate-800/80 px-2 py-0.5 rounded text-[11px]">
                      Aktif
                    </span>
                  </div>

                  {/* Processing time */}
                  <div className="flex items-center gap-1.5 text-xs text-amber-300/90 mb-3 bg-amber-500/10 px-2.5 py-1.5 rounded-lg border border-amber-500/20">
                    <Clock className="w-3.5 h-3.5 shrink-0" />
                    <span>Estimasi Proses: {country.processingTime}</span>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-3">
                    {country.highlights}
                  </p>

                  {/* Visa categories available */}
                  <div className="text-[11px] text-slate-400 mb-4">
                    <span className="font-semibold text-slate-300">Tipe Visa:</span>{' '}
                    {country.visaTypes.join(' · ')}
                  </div>
                </div>

                {/* Action Button */}
                <div className="pt-3 border-t border-slate-850">
                  <button
                    type="button"
                    onClick={() => handleCountryConsultation(country)}
                    className="w-full min-h-[44px] px-3.5 py-2.5 rounded-xl bg-slate-800 hover:bg-emerald-600 active:scale-[0.98] text-slate-200 hover:text-white text-xs sm:text-sm font-semibold flex items-center justify-center gap-2 border border-slate-700 hover:border-emerald-500 transition-colors cursor-pointer"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Konsultasi Visa {country.name.split(' ')[0]}</span>
                    <ArrowUpRight className="w-3.5 h-3.5 ml-auto opacity-70" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </AnimatedSection>

        {/* Mandatory Policy & Availability Disclaimer */}
        <div className="mt-8 p-4 rounded-xl bg-slate-900/60 border border-slate-800 flex items-start gap-3 text-left">
          <AlertCircle className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
          <div className="text-xs text-slate-300 leading-relaxed">
            <span className="font-semibold text-white">Catatan Kebijakan Visa: </span>
            Ketersediaan layanan mengikuti jenis visa, kebijakan negara tujuan, dan persyaratan terbaru. MH Travel Agency Indonesia tidak menjamin penerbitan visa karena keputusan sepenuhnya merupakan hak prerogatif kedutaan / instansi imigrasi masing-masing negara.
          </div>
        </div>
      </div>
    </section>
  );
};
