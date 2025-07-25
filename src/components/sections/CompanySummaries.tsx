import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { TrendingUp, Users, Globe, Zap, Building, Laptop } from 'lucide-react';
import bmcsLogo from '@/assets/bmcs-logo.png';

const companies = [
  {
    id: 'bmcs',
    name: 'Blue Marvel Capital Strategies',
    logo: bmcsLogo,
    icon: TrendingUp,
    investment: '£100,000',
    equity: '15%',
    color: 'from-blue-500 to-blue-600',
    description: 'Technology-driven financial education platform offering comprehensive trading education and fund management services.',
    highlights: [
      'Global reach with UAE registration',
      'Machine learning and AI models',
      'Partnership with Equiti (SCA, DIFC, SCB regulated)',
      '£2,000 annual training programs'
    ],
    services: ['Financial Education', 'Fund Management', 'Trading Academy', 'AI-Powered Analytics'],
    target: 'HNWIs, Accredited Investors, Companies',
    aum: '£10,000 minimum fund'
  },
  {
    id: 'bmm',
    name: 'Blue Marvel Management',
    icon: Users,
    investment: '£350,000',
    equity: '25%',
    color: 'from-green-500 to-green-600',
    description: 'Comprehensive management solutions delivering strategic consulting and operational excellence.',
    highlights: [
      'Strategic business consulting',
      'Operational optimization',
      'Digital transformation',
      'Performance management systems'
    ],
    services: ['Strategic Consulting', 'Operations Management', 'Digital Solutions', 'Performance Analytics'],
    target: 'Mid to Large Enterprises',
    growth: 'Scalable solutions across industries'
  },
  {
    id: 'bmt',
    name: 'Blue Marvel Technologies',
    icon: Laptop,
    investment: '£50,000',
    equity: '10%',
    color: 'from-purple-500 to-purple-600',
    description: 'Cutting-edge technology solutions driving innovation and digital transformation.',
    highlights: [
      'Advanced software development',
      'AI and machine learning solutions',
      'Cloud infrastructure services',
      'Cybersecurity implementations'
    ],
    services: ['Software Development', 'AI Solutions', 'Cloud Services', 'Cybersecurity'],
    target: 'Tech-forward businesses and startups',
    focus: 'Innovation and scalability'
  }
];

export default function CompanySummaries() {
  const totalInvestment = companies.reduce((sum, company) => {
    return sum + parseInt(company.investment.replace('£', '').replace(',', ''));
  }, 0);

  const totalEquity = companies.reduce((sum, company) => {
    return sum + parseInt(company.equity.replace('%', ''));
  }, 0);

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-secondary/20 to-background p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Company Summaries
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-6"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Explore our three dynamic divisions offering comprehensive investment opportunities
          </p>
        </motion.div>

        {/* Investment Overview */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Card className="mb-12 bg-gradient-to-r from-primary/10 to-accent/10 border-primary/20">
            <div className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">£500,000</div>
                  <div className="text-muted-foreground">Total Investment</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">{totalEquity}%</div>
                  <div className="text-muted-foreground">Total Equity Available</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">3</div>
                  <div className="text-muted-foreground">Investment Opportunities</div>
                </div>
              </div>
            </div>
          </Card>
        </motion.div>

        {/* Company Cards */}
        <div className="space-y-8">
          {companies.map((company, index) => (
            <motion.div
              key={company.id}
              initial={{ x: index % 2 === 0 ? -50 : 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 + index * 0.2 }}
            >
              <Card className="overflow-hidden border-border/50 hover:border-primary/30 transition-all duration-300">
                <div className="md:flex">
                  {/* Left Section - Company Info */}
                  <div className="md:w-2/3 p-8">
                    <div className="flex items-center mb-6">
                      {company.logo ? (
                        <img src={company.logo} alt={company.name} className="h-12 w-12 mr-4" />
                      ) : (
                        <company.icon className="h-12 w-12 text-primary mr-4" />
                      )}
                      <div>
                        <h2 className="text-2xl font-bold text-primary">{company.name}</h2>
                        <div className="flex items-center space-x-4 mt-2">
                          <Badge variant="outline" className="border-primary/30 text-primary">
                            {company.investment} Investment
                          </Badge>
                          <Badge variant="outline" className="border-accent/30 text-accent-foreground">
                            {company.equity} Equity
                          </Badge>
                        </div>
                      </div>
                    </div>

                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {company.description}
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold text-foreground mb-3">Key Highlights</h4>
                        <ul className="space-y-2">
                          {company.highlights.map((highlight, i) => (
                            <li key={i} className="flex items-start">
                              <div className="w-2 h-2 rounded-full bg-primary mt-2 mr-3 flex-shrink-0"></div>
                              <span className="text-sm text-muted-foreground">{highlight}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h4 className="font-semibold text-foreground mb-3">Services</h4>
                        <div className="flex flex-wrap gap-2">
                          {company.services.map((service, i) => (
                            <Badge key={i} variant="secondary" className="text-xs">
                              {service}
                            </Badge>
                          ))}
                        </div>
                        <div className="mt-4">
                          <h5 className="text-sm font-semibold text-foreground mb-2">Target Market</h5>
                          <p className="text-sm text-muted-foreground">{company.target}</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Right Section - Investment Details */}
                  <div className="md:w-1/3 bg-gradient-to-br from-primary/5 to-accent/5 p-8 border-l border-border/50">
                    <h3 className="text-xl font-bold text-primary mb-6">Investment Details</h3>
                    
                    <div className="space-y-6">
                      <div>
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-sm text-muted-foreground">Investment Amount</span>
                          <span className="text-lg font-bold text-primary">{company.investment}</span>
                        </div>
                        <Progress value={parseInt(company.investment.replace(/[£,]/g, '')) / 5000} className="h-2" />
                      </div>

                      <div>
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-sm text-muted-foreground">Equity Offered</span>
                          <span className="text-lg font-bold text-accent-foreground">{company.equity}</span>
                        </div>
                        <Progress value={parseInt(company.equity.replace('%', ''))} className="h-2" />
                      </div>

                      <div className="pt-4 border-t border-border/30">
                        <h4 className="font-semibold text-foreground mb-2">Growth Potential</h4>
                        <p className="text-sm text-muted-foreground">
                          {company.aum || company.growth || company.focus}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="mt-12"
        >
          <Card className="bg-gradient-to-r from-primary to-primary-light text-primary-foreground">
            <div className="p-8 text-center">
              <h3 className="text-2xl font-bold mb-4">Ready to Invest?</h3>
              <p className="text-primary-foreground/90 mb-6">
                Explore detailed investment opportunities for each division in the following sections
              </p>
              <div className="flex justify-center">
                <Globe className="h-6 w-6 animate-pulse" />
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}