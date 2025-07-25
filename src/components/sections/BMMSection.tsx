import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { 
  TrendingUp, 
  Home, 
  Users, 
  Target, 
  CheckCircle, 
  ArrowRight,
  Building,
  Calendar,
  PoundSterling
} from 'lucide-react';
import bmmLogo from '@/assets/bmm-logo.png';
import bmmHero from '@/assets/bmm-hero.webp';
import bmmPortfolio1 from '@/assets/bmm-portfolio-1.jpg';
import bmmPortfolio2 from '@/assets/bmm-portfolio-2.jpg';
import bmmPortfolio3 from '@/assets/bmm-portfolio-3.jpg';

export default function BMMSection() {
  const stats = [
    { icon: Building, label: 'Properties Transformed', value: '10+' },
    { icon: Users, label: 'Happy Investors', value: '5' },
    { icon: Calendar, label: 'Years Experience', value: '2' }
  ];

  const services = [
    {
      title: 'Sourcing High-Yield Properties',
      description: 'Off-market, below-market-value deals tailored to your goals.'
    },
    {
      title: 'HMO & BTL Design & Refurbishment',
      description: 'From fire strategies to full structural work, we turn standard properties into licensable, cash-flowing HMO & BTL properties.'
    },
    {
      title: 'Hands-Off Property Management',
      description: 'We handle everything from tenanting and licensing to maintenance and compliance.'
    },
    {
      title: 'Refinance & Exit Planning',
      description: 'Unlock equity post-refurb. We coordinate valuations, brokers, and ongoing portfolio expansion.'
    }
  ];

  const portfolio = [
    {
      image: bmmPortfolio1,
      title: 'House in Multiple Occupation (HMO)',
      location: 'Birmingham Jewellery Quarter',
      investment: '£195,000',
      yield: '13% Yield'
    },
    {
      image: bmmPortfolio2,
      title: 'House in Multiple Occupation (HMO)',
      location: 'Manchester City Centre',
      investment: '£287,600',
      yield: '98% ROI'
    },
    {
      image: bmmPortfolio3,
      title: 'House in Multiple Occupation (HMO)',
      location: 'Leeds City Centre',
      investment: '£220,500',
      yield: '£1,650 PCM'
    }
  ];

  const process = [
    { step: 1, title: 'Strategy & Investor Readiness', description: 'Discovery call, define goals, verify funds & strategy.' },
    { step: 2, title: 'Deal Sourcing & Analysis', description: 'Source properties, provide financials and exit strategy.' },
    { step: 3, title: 'Offer & Legal Process', description: 'Negotiate offers, liaise with all parties for smooth progress.' },
    { step: 4, title: 'Due Diligence & Surveys', description: 'Manage valuations, structural surveys and refurb quotes.' },
    { step: 5, title: 'Exchange & Completion', description: 'Handle contracts exchange, funds transfer and key collection.' },
    { step: 6, title: 'Management & Exit Strategy', description: 'Project management, tenanting or resale coordination.' }
  ];

  return (
    <div className="min-h-screen relative">
      {/* Background Image */}
      <div 
        className="fixed inset-0 bg-cover bg-center bg-no-repeat opacity-10 z-0"
        style={{ backgroundImage: `url(${bmmHero})` }}
      />
      
      <div className="relative z-10 bg-background/95 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-16">
          {/* Header */}
          <div className="text-center mb-12">
            <img 
              src={bmmLogo} 
              alt="BMM Logo" 
              className="mx-auto mb-8 w-24 h-24 object-contain"
            />
            <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-primary-light bg-clip-text text-transparent">
              Blue Marvel Management
            </h1>
            <p className="text-xl text-muted-foreground mb-6">
              Transform Properties into Profitable BTL & HMO Investments
            </p>
            <p className="text-lg">
              We handle sourcing, refurbishment and management so you can invest with confidence and clarity.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {stats.map((stat, index) => (
              <Card key={index} className="text-center p-6 bg-gradient-to-br from-primary/10 to-primary-light/10 border-primary/20">
                <stat.icon className="h-8 w-8 mx-auto mb-3 text-primary" />
                <div className="text-3xl font-bold text-primary mb-2">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </Card>
            ))}
          </div>

          {/* About & Mission */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Building className="h-5 w-5 mr-2 text-primary" />
                  About Blue Marvel Management
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  We specialise in sourcing, refurbishing, and managing HMO & BTL properties that maximise rental yield and long-term asset value.
                </p>
                <p className="text-muted-foreground">
                  Our mission is to transform assets into profitable, value-driven investments through innovation, compliance, and a client-first approach.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Target className="h-5 w-5 mr-2 text-primary" />
                  Investment Opportunity
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="font-medium">Funding Target:</span>
                    <span className="text-2xl font-bold text-primary">£350,000</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-medium">Equity Offered:</span>
                    <span className="text-2xl font-bold text-primary">25%</span>
                  </div>
                  <Badge variant="outline" className="w-full justify-center py-2">
                    Property Investment & Management
                  </Badge>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Why Invest */}
          <Card className="mb-16">
            <CardHeader>
              <CardTitle>Why Invest with Us?</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <CheckCircle className="h-12 w-12 mx-auto mb-4 text-primary" />
                  <h3 className="font-semibold mb-2">Turnkey, End-to-End Service</h3>
                  <p className="text-sm text-muted-foreground">We do the heavy lifting. You receive a fully-let, compliant HMO & BTL asset.</p>
                </div>
                <div className="text-center">
                  <Target className="h-12 w-12 mx-auto mb-4 text-primary" />
                  <h3 className="font-semibold mb-2">Risk-Managed Process</h3>
                  <p className="text-sm text-muted-foreground">Clear phase-gates for compliance, finance and legal due diligence.</p>
                </div>
                <div className="text-center">
                  <TrendingUp className="h-12 w-12 mx-auto mb-4 text-primary" />
                  <h3 className="font-semibold mb-2">Proven ROI & Yield</h3>
                  <p className="text-sm text-muted-foreground">Transparent deal breakdowns showing real returns.</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Sample Deal */}
          <Card className="mb-16 bg-gradient-to-r from-primary/10 to-primary-light/10 border-primary/20">
            <CardHeader>
              <CardTitle>Sample Deal Summary</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <div>
                  <div className="text-sm text-muted-foreground mb-1">Purchase Price</div>
                  <div className="text-2xl font-bold">£190,000</div>
                </div>
                <div>
                  <div className="text-sm text-muted-foreground mb-1">Cash Required</div>
                  <div className="text-2xl font-bold">£64,547</div>
                </div>
                <div>
                  <div className="text-sm text-muted-foreground mb-1">Net Rent PA</div>
                  <div className="text-2xl font-bold text-green-600">£19,072</div>
                </div>
                <div>
                  <div className="text-sm text-muted-foreground mb-1">Development Value</div>
                  <div className="text-2xl font-bold text-primary">£357,264</div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Services */}
          <Card className="mb-16">
            <CardHeader>
              <CardTitle>What We Do</CardTitle>
              <p className="text-muted-foreground">From sourcing to management, we handle every aspect of your HMO & BTL investment journey.</p>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {services.map((service, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <ArrowRight className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold mb-2">{service.title}</h3>
                      <p className="text-muted-foreground">{service.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Portfolio */}
          <Card className="mb-16">
            <CardHeader>
              <CardTitle>Our Portfolio</CardTitle>
              <p className="text-muted-foreground">See some of our completed HMO transformations and successful investments.</p>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {portfolio.map((property, index) => (
                  <div key={index} className="bg-muted/50 rounded-lg overflow-hidden">
                    <img 
                      src={property.image} 
                      alt={property.title}
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-4">
                      <h3 className="font-semibold mb-2">{property.title}</h3>
                      <p className="text-sm text-muted-foreground mb-2">{property.location}</p>
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium">Investment: {property.investment}</span>
                        <Badge variant="secondary">{property.yield}</Badge>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Process */}
          <Card>
            <CardHeader>
              <CardTitle>Our 6-Stage Process</CardTitle>
              <p className="text-muted-foreground">A proven, systematic approach that transforms raw properties into cash-flowing HMO & BTL assets.</p>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {process.map((step, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold">
                      {step.step}
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">{step.title}</h3>
                      <p className="text-muted-foreground">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}