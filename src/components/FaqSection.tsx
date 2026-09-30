import React, { useState } from 'react';
import { HelpCircle, ChevronDown, MessageCircle } from 'lucide-react';
import { FAQS_LIST } from '../data/faqAndDocs';
import { openWhatsApp } from '../utils/whatsapp';
import { AnimatedSection } from './AnimatedSection';

export const FaqSection: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>('faq-1');

  const toggleAccordion = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section id="faq" className="scroll-mt-16 sm:scroll-mt-20 py-14 sm:py-20 bg-slate-900 border-t border-slate-800 text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <AnimatedSection>
          <div className="text-left max-w-2xl mb-8 sm:mb-12">
            <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-amber-400 mb-2">
              <HelpCircle className="w-4 h-4" />
              <span>Pertanyaan yang Sering Diajukan</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-white mb-3">
              Tanya Jawab (FAQ)
            </h2>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              Jawaban transparan mengenai legalitas, kebijakan persetujuan visa, dan prosedur pembayaran resmi kami.
            </p>
          </div>
        </AnimatedSection>

        {/* Accordion List */}
        <AnimatedSection delayMs={100}>
          <div className="space-y-3 text-left">
            {FAQS_LIST.map((faq) => {
              const isOpen = openId === faq.id;
              return (
                <div
                  key={faq.id}
                  className="rounded-2xl bg-slate-950 border border-slate-800 overflow-hidden transition-colors"
                >
                  <button
                    type="button"
                    onClick={() => toggleAccordion(faq.id)}
                    aria-expanded={isOpen}
                    className="w-full min-h-[54px] p-4 sm:p-5 flex items-center justify-between gap-4 text-left font-bold text-sm sm:text-base text-white hover:text-amber-400 active:bg-slate-900 transition-colors cursor-pointer"
                  >
                    <span className="leading-snug">{faq.question}</span>
                    <div
                      className={`w-7 h-7 rounded-full bg-slate-900 border border-slate-700/80 flex items-center justify-center shrink-0 text-slate-300 transition-transform duration-200 ${
                        isOpen ? 'rotate-180 text-amber-400 border-amber-500/40' : ''
                      }`}
                    >
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </button>

                  {isOpen && (
                    <div className="px-4 pb-5 sm:px-5 sm:pb-5 pt-0 text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-slate-900">
                      <p className="mt-3">{faq.answer}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </AnimatedSection>

        {/* Still have questions */}
        <AnimatedSection delayMs={150}>
          <div className="mt-10 p-5 rounded-2xl bg-slate-950/70 border border-slate-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-left">
            <div>
              <h4 className="text-sm sm:text-base font-bold text-white">Punya Pertanyaan Lain?</h4>
              <p className="text-xs sm:text-sm text-slate-400 mt-0.5">
                Hubungi konsultan kami langsung melalui WhatsApp untuk jawaban spesifik mengenai kasus Anda.
              </p>
            </div>
            <button
              type="button"
              onClick={() =>
                openWhatsApp(
                  'Halo MH Travel Agency Indonesia, saya memiliki pertanyaan mengenai layanan visa yang belum tercantum di FAQ.'
                )
              }
              className="min-h-[44px] px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 active:scale-98 text-amber-400 text-xs sm:text-sm font-semibold border border-amber-500/30 inline-flex items-center gap-2 transition-colors shrink-0 cursor-pointer"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Tanya via WhatsApp</span>
            </button>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};
