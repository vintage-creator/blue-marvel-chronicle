import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Phone, Mail, MapPin, Globe, ExternalLink,
  Building, Users, Laptop, TrendingUp
} from 'lucide-react';
import blueMarvelLogo from '@/assets/blue-marvel-group-logo.png';
import bmcsLogo from '@/assets/bmcs-logo.png';

const contactInfo = [
  { type: 'phone', value: '+44 7389 761888', icon: Phone },
  { type: 'phone', value: '+44 7368 592244', icon: Phone },
  { type: 'phone', value: '+44 7397 141816', icon: Phone }
];

const companies = [
  {
    name: 'Blue Marvel Group',
    logo: blueMarvelLogo,
    icon: Building,
    investment: '£500,000',
    equity: '35%',
    description: 'Parent company with comprehensive business solutions',
    color: 'from-primary to-blue-500'
  },
  {
    name: 'Blue Marvel Capital Strategies',
    logo: bmcsLogo,
    icon: TrendingUp,
    investment: '£100,000',
    equity: '15%',
    description: 'Technology-driven financial education platform',
    website: 'https://bmc-trading-floor-user-web.vercel.app/',
    color: 'from-blue-500 to-blue-600'
  },
  {
    name: 'Blue Marvel Management',
    icon: Users,
    investment: '£350,000',
    equity: '25%',
    description: 'Strategic management and operational excellence',
    website: 'https://bluemarvelmanagement.vercel.app/',
    color: 'from-green-500 to-green-600'
  },
  {
    name: 'Blue Marvel Technologies',
    icon: Laptop,
    investment: '£50,000',
    equity: '10%',
    description: 'Advanced technology solutions and innovation',
    website: 'https://bluemarveltechnologies.com/',
    color: 'from-purple-500 to-purple-600'
  }
];

const locations = [
  {
    name: 'Blue Marvel Capital Strategies',
    location: 'Dubai, UAE',
    status: 'Global Operations',
    registration: 'UAE Registered'
  }
];

export default function ContactPage() {
  const totalInvestment = companies.reduce((sum, company) => {
    return sum + parseInt(company.investment.replace('£', '').replace(',', ''));
  }, 0);

  const totalEquity = companies.reduce((sum, company) => {
    return sum + parseInt(company.equity.replace('%', ''));
  }, 0);

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-primary/5 to-background p-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <img 
            src={blueMarvelLogo} 
            alt="Blue Marvel Group" 
            className="h-24 mx-auto mb-6 animate-float"
          />
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Contact Blue Marvel Group
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-6"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to invest in the future? Get in touch with our team to discuss investment opportunities
          </p>
        </motion.div>

        {/* Investment Summary */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Card className="mb-12 bg-gradient-to-r from-primary/10 to-accent/10 border-primary/20">
            <div className="p-8">
              <h2 className="text-3xl font-bold text-primary mb-6 text-center">Investment Summary</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                <div>
                  <div className="text-4xl font-bold text-primary mb-2">£{totalInvestment.toLocaleString()}</div>
                  <div className="text-muted-foreground">Total Investment Opportunity</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-accent-foreground mb-2">{totalEquity}%</div>
                  <div className="text-muted-foreground">Total Equity Available</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-green-600 mb-2">4</div>
                  <div className="text-muted-foreground">Investment Opportunities</div>
                </div>
              </div>
            </div>
          </Card>
        </motion.div>

        {/* Contact Information */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
          {/* Contact Details */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Card className="p-8 h-full">
              <h2 className="text-2xl font-bold text-primary mb-6">Get In Touch</h2>
              <div className="space-y-6">
                {contactInfo.map((contact, index) => (
                  <div key={index} className="flex items-center p-4 bg-secondary/30 rounded-lg hover:bg-secondary/50 transition-all duration-300">
                    <contact.icon className="h-6 w-6 text-primary mr-4" />
                    <div>
                      <p className="font-semibold text-foreground">{contact.value}</p>
                      <p className="text-sm text-muted-foreground">Investment Inquiries</p>
                    </div>
                  </div>
                ))}
                
                <div className="mt-8 p-6 bg-gradient-to-r from-primary/5 to-accent/5 rounded-lg border border-primary/20">
                  <h3 className="text-lg font-semibold text-primary mb-3">Ready to Invest?</h3>
                  <p className="text-muted-foreground mb-4">
                    Contact our investment team to discuss opportunities and schedule a detailed presentation.
                  </p>
                  <Button className="w-full bg-gradient-to-r from-primary to-primary-light hover:from-primary-dark hover:to-primary">
                    Schedule Investment Discussion
                  </Button>
                </div>
              </div>
            </Card>
          </motion.div>

          {/* Location Information */}
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Card className="p-8 h-full">
              <h2 className="text-2xl font-bold text-primary mb-6">Global Presence</h2>
              <div className="space-y-6">
                {locations.map((location, index) => (
                  <div key={index} className="p-4 bg-secondary/30 rounded-lg">
                    <div className="flex items-start mb-3">
                      <MapPin className="h-6 w-6 text-primary mr-3 mt-1" />
                      <div>
                        <h3 className="font-semibold text-foreground">{location.name}</h3>
                        <p className="text-muted-foreground">{location.location}</p>
                      </div>
                    </div>
                    <div className="flex space-x-2">
                      <Badge variant="outline" className="border-primary/30 text-primary">
                        {location.status}
                      </Badge>
                      <Badge variant="outline" className="border-green-500/30 text-green-600">
                        {location.registration}
                      </Badge>
                    </div>
                  </div>
                ))}

                <div className="mt-8 p-6 bg-gradient-to-r from-blue-500/5 to-green-500/5 rounded-lg border border-blue-500/20">
                  <div className="flex items-center mb-3">
                    <Globe className="h-6 w-6 text-blue-600 mr-3" />
                    <h3 className="text-lg font-semibold text-blue-600">Expanding Globally</h3>
                  </div>
                  <p className="text-muted-foreground text-sm">
                    Blue Marvel Group is expanding its operations globally, with planned expansions 
                    into Europe and North America markets.
                  </p>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>

        {/* Company Cards */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <h2 className="text-3xl font-bold text-primary mb-8 text-center">Investment Opportunities</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {companies.map((company, index) => (
              <motion.div
                key={index}
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.6, delay: 1 + index * 0.2 }}
              >
                <Card className="p-6 border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-lg">
                  <div className="flex items-center mb-4">
                    {company.logo ? (
                      <img src={company.logo} alt={company.name} className="h-12 w-12 mr-4" />
                    ) : (
                      <company.icon className="h-12 w-12 text-primary mr-4" />
                    )}
                    <div>
                      <h3 className="text-lg font-bold text-primary">{company.name}</h3>
                      <p className="text-sm text-muted-foreground">{company.description}</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div className="text-center p-3 bg-green-50 rounded-lg">
                      <div className="text-lg font-bold text-green-600">{company.investment}</div>
                      <div className="text-xs text-green-700">Investment</div>
                    </div>
                    <div className="text-center p-3 bg-blue-50 rounded-lg">
                      <div className="text-lg font-bold text-blue-600">{company.equity}</div>
                      <div className="text-xs text-blue-700">Equity</div>
                    </div>
                  </div>

                  {company.website && (
                    <Button 
                      variant="outline" 
                      className="w-full border-primary/30 hover:border-primary/50"
                      onClick={() => window.open(company.website, '_blank')}
                    >
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Visit Website
                    </Button>
                  )}
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.8 }}
          className="mt-16"
        >
          <Card className="bg-gradient-to-r from-primary to-primary-light text-primary-foreground">
            <div className="p-12 text-center">
              <h2 className="text-3xl font-bold mb-4">Ready to Join Our Journey?</h2>
              <p className="text-primary-foreground/90 mb-8 text-lg">
                Partner with Blue Marvel Group and be part of the future of innovation, 
                technology, and strategic growth.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Button 
                  variant="secondary" 
                  className="bg-white/10 hover:bg-white/20 border-white/20 text-primary-foreground"
                >
                  Download Detailed Prospectus
                </Button>
                <Button 
                  variant="secondary"
                  className="bg-white/10 hover:bg-white/20 border-white/20 text-primary-foreground"
                >
                  Schedule Investment Call
                </Button>
                <Button 
                  variant="secondary"
                  className="bg-white/10 hover:bg-white/20 border-white/20 text-primary-foreground"
                >
                  Request Due Diligence
                </Button>
              </div>
            </div>
          </Card>
        </motion.div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2 }}
          className="mt-12 text-center text-muted-foreground"
        >
          <p className="mb-2">Blue Marvel Group - Investment Portfolio E-Brochure</p>
          <p className="text-sm">© {new Date().getFullYear()} Blue Marvel Group. All rights reserved.</p>
          <p className="text-xs mt-2">This document contains confidential and proprietary information.</p>
        </motion.div>
      </div>
    </div>
  );
}