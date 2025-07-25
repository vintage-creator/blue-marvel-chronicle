import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Download, ChevronLeft, ChevronRight, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

// Import all sections
import CoverPage from './sections/CoverPage';
import TableOfContents from './sections/TableOfContents';
import Introduction from './sections/Introduction';
import CompanySummaries from './sections/CompanySummaries';
import BMCSSection from './sections/BMCSSection';
import BMMSection from './sections/BMMSection';
import BMTSection from './sections/BMTSection';
import ContactPage from './sections/ContactPage';

const sections = [
  { id: 'cover', title: 'Cover Page', component: CoverPage },
  { id: 'toc', title: 'Table of Contents', component: TableOfContents },
  { id: 'intro', title: 'Introduction', component: Introduction },
  { id: 'summaries', title: 'Company Summaries', component: CompanySummaries },
  { id: 'bmcs', title: 'Blue Marvel Capital Strategies', component: BMCSSection },
  { id: 'bmm', title: 'Blue Marvel Management', component: BMMSection },
  { id: 'bmt', title: 'Blue Marvel Technologies', component: BMTSection },
  { id: 'contact', title: 'Contact Us', component: ContactPage },
];

export default function EBrochure() {
  const [currentSection, setCurrentSection] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isGeneratingPDF, setIsGeneratingPDF] = useState(false);
  const [pdfProgress, setPdfProgress] = useState(0);
  const brochureRef = useRef<HTMLDivElement>(null);

  const CurrentComponent = sections[currentSection].component;

  const nextSection = () => {
    if (currentSection < sections.length - 1) {
      setCurrentSection(currentSection + 1);
    }
  };

  const prevSection = () => {
    if (currentSection > 0) {
      setCurrentSection(currentSection - 1);
    }
  };

  const goToSection = (index: number) => {
    setCurrentSection(index);
    setIsMenuOpen(false);
  };

  const generatePDF = async () => {
    if (!brochureRef.current) return;
    
    setIsGeneratingPDF(true);
    setPdfProgress(0);

    try {
      const pdf = new jsPDF('p', 'mm', 'a4');
      const pageWidth = 210;
      const pageHeight = 297;

      for (let i = 0; i < sections.length; i++) {
        setPdfProgress((i / sections.length) * 90);
        
        // Temporarily switch to this section
        setCurrentSection(i);
        await new Promise(resolve => setTimeout(resolve, 500)); // Wait for render

        const canvas = await html2canvas(brochureRef.current, {
          scale: 1,
          useCORS: true,
          allowTaint: true,
          logging: false,
          backgroundColor: '#ffffff',
        });

        const imgData = canvas.toDataURL('image/png');
        const imgWidth = pageWidth;
        const imgHeight = (canvas.height * pageWidth) / canvas.width;

        if (i > 0) pdf.addPage();
        pdf.addImage(imgData, 'PNG', 0, 0, imgWidth, Math.min(imgHeight, pageHeight));
      }

      setPdfProgress(100);
      pdf.save('Blue_Marvel_Group_Investment_Brochure.pdf');
    } catch (error) {
      console.error('Error generating PDF:', error);
    } finally {
      setIsGeneratingPDF(false);
      setPdfProgress(0);
    }
  };

  return (
    <div className="min-h-screen bg-background relative">
      {/* Navigation Header */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden"
            >
              {isMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </Button>
          </div>

          <div className="flex items-center space-x-2">
            <span className="text-sm text-muted-foreground hidden sm:block">
              {currentSection + 1} of {sections.length}
            </span>
            <Button
              onClick={generatePDF}
              disabled={isGeneratingPDF}
              className="bg-gradient-to-r from-primary to-primary-light hover:from-primary-dark hover:to-primary"
            >
              {isGeneratingPDF ? (
                <div className="flex items-center space-x-2">
                  <div className="w-4 h-4 border-2 border-primary-foreground border-t-transparent rounded-full animate-spin" />
                  <span>{Math.round(pdfProgress)}%</span>
                </div>
              ) : (
                <>
                  <Download className="h-4 w-4 mr-2" />
                  Download PDF
                </>
              )}
            </Button>
          </div>
        </div>

        {isGeneratingPDF && (
          <div className="px-4 pb-2">
            <Progress value={pdfProgress} className="h-1" />
          </div>
        )}
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed top-16 left-0 bottom-0 w-64 bg-card border-r border-border z-40 md:hidden"
          >
            <div className="p-4">
              <h3 className="font-semibold mb-4">Sections</h3>
              <div className="space-y-2">
                {sections.map((section, index) => (
                  <Button
                    key={section.id}
                    variant={index === currentSection ? 'default' : 'ghost'}
                    className="w-full justify-start"
                    onClick={() => goToSection(index)}
                  >
                    {index + 1}. {section.title}
                  </Button>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Desktop Sidebar */}
      <div className="hidden md:block fixed left-0 top-16 bottom-0 w-64 bg-card border-r border-border z-30">
        <div className="p-4">
          <h3 className="font-semibold mb-4">Sections</h3>
          <div className="space-y-2">
            {sections.map((section, index) => (
              <Button
                key={section.id}
                variant={index === currentSection ? 'default' : 'ghost'}
                className="w-full justify-start"
                onClick={() => goToSection(index)}
              >
                {index + 1}. {section.title}
              </Button>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="md:ml-64 pt-16">
        <div ref={brochureRef} className="min-h-screen">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSection}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <CurrentComponent />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation Buttons */}
        <div className="fixed bottom-6 right-6 flex space-x-2 z-40">
          <Button
            onClick={prevSection}
            disabled={currentSection === 0}
            variant="outline"
            size="icon"
            className="bg-background/90 backdrop-blur-sm"
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Button
            onClick={nextSection}
            disabled={currentSection === sections.length - 1}
            variant="outline"
            size="icon"
            className="bg-background/90 backdrop-blur-sm"
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
}