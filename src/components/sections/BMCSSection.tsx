import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Button } from '@/components/ui/button';
import { 
  TrendingUp, Globe, Users, BookOpen, Shield, 
  DollarSign, ArrowRight, Target, BarChart3,
  Brain, Award, Handshake, ExternalLink
} from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import bmcsLogo from '@/assets/bmcs-logo.png';
import bmcsHero from '@/assets/bmcs-hero.webp';
import bmcsAcademy from '@/assets/bmcs-academy.webp';
import bmcsMentorship from '@/assets/bmcs-mentorship.webp';

const growthData = [
  { month: 'Jan', revenue: 45000, students: 120 },
  { month: 'Feb', revenue: 52000, students: 145 },
  { month: 'Mar', revenue: 61000, students: 178 },
  { month: 'Apr', revenue: 68000, students: 203 },
  { month: 'May', revenue: 76000, students: 234 },
  { month: 'Jun', revenue: 85000, students: 267 }
];

const serviceData = [
  { name: 'Trading Academy', value: 45, color: '#2563eb' },
  { name: 'Fund Management', value: 35, color: '#16a34a' },
  { name: 'AI Analytics', value: 20, color: '#dc2626' }
];

const milestones = [
  { title: 'Technical Analysis', duration: '1 Month', description: 'Master chart patterns and technical indicators' },
  { title: 'Fundamental Analysis', duration: '1 Month', description: 'Understand market fundamentals and economics' },
  { title: 'Risk Management', duration: '1 Month', description: 'Learn essential risk management strategies' },
  { title: 'Practical Trading', duration: '9 Months', description: 'Apply knowledge in real trading scenarios' }
];

export default function BMCSSection() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-blue-50/30 to-background">
      {/* Cover Section */}
      <div className="relative min-h-screen flex items-center justify-center p-6">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-10"
          style={{ backgroundImage: `url(${bmcsHero})` }}
        />
        <div className="relative max-w-6xl w-full">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <img src={bmcsLogo} alt="BMCS" className="h-24 mx-auto mb-6 animate-float" />
            <h1 className="text-5xl md:text-6xl font-bold text-primary mb-4">
              Blue Marvel Capital Strategies
            </h1>
            <div className="w-32 h-1 bg-gradient-to-r from-primary to-blue-400 mx-auto mb-6"></div>
            <p className="text-2xl text-muted-foreground mb-8">
              Technology-Driven Financial Education Platform
            </p>
          </motion.div>

          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <Card className="bg-gradient-to-r from-primary/10 to-blue-500/10 border-primary/30 shadow-2xl">
              <div className="p-12">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                  <div>
                    <h2 className="text-3xl font-bold text-primary mb-6">Investment Opportunity</h2>
                    <div className="space-y-4">
                      <div className="flex justify-between items-center p-4 bg-background/50 rounded-lg">
                        <span className="text-lg font-semibold">Investment Amount</span>
                        <span className="text-2xl font-bold text-primary">£100,000</span>
                      </div>
                      <div className="flex justify-between items-center p-4 bg-background/50 rounded-lg">
                        <span className="text-lg font-semibold">Equity Offered</span>
                        <span className="text-2xl font-bold text-blue-600">15%</span>
                      </div>
                      <div className="flex justify-between items-center p-4 bg-background/50 rounded-lg">
                        <span className="text-lg font-semibold">Minimum Fund</span>
                        <span className="text-xl font-bold text-green-600">£10,000</span>
                      </div>
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="w-48 h-48 mx-auto mb-6 bg-gradient-to-r from-primary to-blue-500 rounded-full flex items-center justify-center">
                      <TrendingUp className="h-24 w-24 text-white" />
                    </div>
                    <Badge variant="outline" className="text-blue-600 border-blue-600">
                      <Globe className="h-4 w-4 mr-2" />
                      Global Reach - UAE Registered
                    </Badge>
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>

      {/* About Us Section */}
      <div className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          >
            <div>
              <h2 className="text-4xl font-bold text-primary mb-6">About BMCS</h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Blue Marvel Capital Strategies is a Technology-driven financial education platform. 
                We offer both educational and financial management services. Since Freedom is an 
                intrinsic value of our company, clients are always given the total choice to select 
                among the wide range of solutions we provide.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="p-4 bg-primary/5 rounded-lg">
                  <BookOpen className="h-8 w-8 text-primary mb-2" />
                  <h4 className="font-semibold">Education</h4>
                  <p className="text-sm text-muted-foreground">Comprehensive Trading Programs</p>
                </div>
                <div className="p-4 bg-blue-500/5 rounded-lg">
                  <Shield className="h-8 w-8 text-blue-600 mb-2" />
                  <h4 className="font-semibold">Fund Management</h4>
                  <p className="text-sm text-muted-foreground">Professional Asset Management</p>
                </div>
              </div>
              <Button className="bg-gradient-to-r from-primary to-blue-500 hover:from-primary-dark hover:to-blue-600">
                <ExternalLink className="h-4 w-4 mr-2" />
                Visit Platform
              </Button>
            </div>
            <div className="relative">
              <img 
                src={bmcsAcademy} 
                alt="BMCS Trading Academy" 
                className="rounded-lg shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent rounded-lg"></div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Services Section */}
      <div className="py-16 px-6 bg-gradient-to-r from-secondary/30 to-blue-50/30">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-primary mb-4">Our Services</h2>
            <p className="text-xl text-muted-foreground">Comprehensive financial education and management solutions</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {/* Education Services */}
            <Card className="p-8 border-primary/20 hover:border-primary/40 transition-all duration-300">
              <div className="text-center mb-6">
                <BookOpen className="h-16 w-16 text-primary mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-primary mb-2">Trading Academy</h3>
                <Badge variant="outline" className="border-primary/30 text-primary">12 Month Program</Badge>
              </div>
              <div className="space-y-4">
                {milestones.map((milestone, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground text-sm font-bold">
                      {index + 1}
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">{milestone.title}</h4>
                      <p className="text-sm text-muted-foreground">{milestone.description}</p>
                      <Badge variant="secondary" className="text-xs mt-1">{milestone.duration}</Badge>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-6 p-4 bg-primary/5 rounded-lg">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">£2,000</div>
                  <div className="text-sm text-muted-foreground">Annual Training Fee</div>
                </div>
              </div>
            </Card>

            {/* Fund Management */}
            <Card className="p-8 border-blue-500/20 hover:border-blue-500/40 transition-all duration-300">
              <div className="text-center mb-6">
                <TrendingUp className="h-16 w-16 text-blue-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-blue-600 mb-2">Fund Management</h3>
                <Badge variant="outline" className="border-blue-500/30 text-blue-600">Professional Service</Badge>
              </div>
              <div className="space-y-4 mb-6">
                <div className="p-3 bg-blue-50 rounded-lg">
                  <h4 className="font-semibold text-blue-800">Strategies</h4>
                  <p className="text-sm text-blue-600">Equity Long/Short, Event Driven, Global Macro, Algo Trading</p>
                </div>
                <div className="p-3 bg-green-50 rounded-lg">
                  <h4 className="font-semibold text-green-800">Target Clients</h4>
                  <p className="text-sm text-green-600">HNWIs, Accredited Investors, Companies</p>
                </div>
                <div className="p-3 bg-purple-50 rounded-lg">
                  <h4 className="font-semibold text-purple-800">AI Integration</h4>
                  <p className="text-sm text-purple-600">Machine Learning optimization models</p>
                </div>
              </div>
              <div className="mt-6 p-4 bg-blue-500/5 rounded-lg">
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">£10,000</div>
                  <div className="text-sm text-muted-foreground">Minimum Fund Requirement</div>
                </div>
              </div>
            </Card>
          </div>

          {/* Revenue Distribution Chart */}
          <Card className="p-8">
            <h3 className="text-2xl font-bold text-primary mb-6 text-center">Service Revenue Distribution</h3>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={serviceData}
                      cx="50%"
                      cy="50%"
                      outerRadius={80}
                      dataKey="value"
                      label={({ name, value }) => `${name}: ${value}%`}
                    >
                      {serviceData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </div>
              <div className="space-y-4">
                {serviceData.map((service, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-secondary/30 rounded-lg">
                    <div className="flex items-center">
                      <div 
                        className="w-4 h-4 rounded-full mr-3" 
                        style={{ backgroundColor: service.color }}
                      ></div>
                      <span className="font-medium">{service.name}</span>
                    </div>
                    <span className="font-bold" style={{ color: service.color }}>{service.value}%</span>
                  </div>
                ))}
              </div>
            </div>
          </Card>
        </div>
      </div>

      {/* Equity Partnership Section */}
      <div className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <Card className="bg-gradient-to-r from-primary/10 to-blue-500/10 border-primary/30">
              <div className="p-12">
                <div className="text-center mb-12">
                  <h2 className="text-4xl font-bold text-primary mb-4">Equity Partnership System</h2>
                  <p className="text-xl text-muted-foreground">Understanding your investment journey</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {/* Input */}
                  <motion.div
                    initial={{ x: -50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="text-center"
                  >
                    <div className="w-24 h-24 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                      <DollarSign className="h-12 w-12 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-primary mb-4">Input</h3>
                    <div className="p-6 bg-green-50 rounded-lg border border-green-200">
                      <h4 className="text-lg font-semibold text-green-800 mb-2">Equity Investment</h4>
                      <p className="text-3xl font-bold text-green-600 mb-2">£100,000</p>
                      <p className="text-sm text-green-700">For 15% equity stake in BMCS operations and growth</p>
                    </div>
                  </motion.div>

                  {/* Process */}
                  <motion.div
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="text-center"
                  >
                    <div className="w-24 h-24 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                      <BarChart3 className="h-12 w-12 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-primary mb-4">Process</h3>
                    <div className="p-6 bg-blue-50 rounded-lg border border-blue-200">
                      <h4 className="text-lg font-semibold text-blue-800 mb-4">Revenue Generation</h4>
                      <div className="space-y-2 text-sm text-blue-700">
                        <div>• Trading Academy Fees</div>
                        <div>• Fund Management Commissions</div>
                        <div>• AI Analytics Subscriptions</div>
                        <div>• Partnership Revenue Sharing</div>
                      </div>
                    </div>
                  </motion.div>

                  {/* Output */}
                  <motion.div
                    initial={{ x: 50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    className="text-center"
                  >
                    <div className="w-24 h-24 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                      <Target className="h-12 w-12 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-primary mb-4">Output</h3>
                    <div className="p-6 bg-purple-50 rounded-lg border border-purple-200">
                      <h4 className="text-lg font-semibold text-purple-800 mb-2">Profit Distribution</h4>
                      <p className="text-2xl font-bold text-purple-600 mb-2">15% Dividends</p>
                      <p className="text-sm text-purple-700">Quarterly profit sharing based on performance metrics</p>
                    </div>
                  </motion.div>
                </div>

                {/* Growth Projection Chart */}
                <div className="mt-12">
                  <h3 className="text-2xl font-bold text-primary mb-6 text-center">Growth Projection</h3>
                  <Card className="p-6">
                    <div className="h-64">
                      <ResponsiveContainer width="100%" height="100%">
                        <LineChart data={growthData}>
                          <CartesianGrid strokeDasharray="3 3" />
                          <XAxis dataKey="month" />
                          <YAxis />
                          <Tooltip />
                          <Line 
                            type="monotone" 
                            dataKey="revenue" 
                            stroke="#2563eb" 
                            strokeWidth={3}
                            name="Revenue (£)"
                          />
                          <Line 
                            type="monotone" 
                            dataKey="students" 
                            stroke="#16a34a" 
                            strokeWidth={3}
                            name="Students"
                          />
                        </LineChart>
                      </ResponsiveContainer>
                    </div>
                  </Card>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>

      {/* Key Partnership */}
      <div className="py-16 px-6 bg-gradient-to-r from-secondary/30 to-blue-50/30">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <Card className="p-8 border-blue-500/20">
              <div className="text-center mb-8">
                <Handshake className="h-16 w-16 text-blue-600 mx-auto mb-4" />
                <h2 className="text-3xl font-bold text-primary mb-4">Key Partnership</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-bold text-blue-600 mb-4">Equiti Partnership</h3>
                  <p className="text-muted-foreground mb-6">
                    Equiti is one of our key partners. With its brokerage activity, this International 
                    and renowned entity backs our Trading desk and is in charge of our client's full compliance.
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-center">
                      <Shield className="h-5 w-5 text-green-600 mr-3" />
                      <span>SCA, DIFC, SCB Regulated</span>
                    </div>
                    <div className="flex items-center">
                      <Globe className="h-5 w-5 text-blue-600 mr-3" />
                      <span>Global and Renowned Entity</span>
                    </div>
                    <div className="flex items-center">
                      <Award className="h-5 w-5 text-purple-600 mr-3" />
                      <span>Low Risk Profile</span>
                    </div>
                  </div>
                </div>
                <div className="text-center">
                  <img 
                    src={bmcsMentorship} 
                    alt="BMCS Mentorship" 
                    className="rounded-lg shadow-lg mx-auto"
                  />
                  <Badge variant="outline" className="mt-4 border-blue-500/30 text-blue-600">
                    One-on-One Mentorship Program
                  </Badge>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  );
}