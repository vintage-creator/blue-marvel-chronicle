import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Button } from '@/components/ui/button';
import { 
  Users, Building, TrendingUp, Target, Settings, 
  DollarSign, ArrowRight, BarChart3, Cog,
  CheckCircle, ExternalLink, Briefcase, Globe
} from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, AreaChart, Area } from 'recharts';

const growthData = [
  { month: 'Jan', revenue: 75000, clients: 45 },
  { month: 'Feb', revenue: 82000, clients: 52 },
  { month: 'Mar', revenue: 91000, clients: 61 },
  { month: 'Apr', revenue: 98000, clients: 68 },
  { month: 'May', revenue: 106000, clients: 76 },
  { month: 'Jun', revenue: 115000, clients: 85 }
];

const services = [
  {
    icon: Target,
    title: "Strategic Consulting",
    description: "Comprehensive business strategy development and implementation",
    features: ["Market Analysis", "Competitive Intelligence", "Growth Planning", "Risk Assessment"]
  },
  {
    icon: Settings,
    title: "Operations Management", 
    description: "Streamlining processes and optimizing operational efficiency",
    features: ["Process Optimization", "Supply Chain Management", "Quality Control", "Performance Metrics"]
  },
  {
    icon: BarChart3,
    title: "Digital Solutions",
    description: "Technology-driven transformation and digital innovation",
    features: ["Digital Strategy", "System Integration", "Automation", "Data Analytics"]
  },
  {
    icon: Cog,
    title: "Performance Analytics",
    description: "Data-driven insights for continuous improvement",
    features: ["KPI Development", "Dashboard Creation", "Reporting Systems", "Predictive Analytics"]
  }
];

export default function BMMSection() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-green-50/30 to-background">
      {/* Cover Section */}
      <div className="relative min-h-screen flex items-center justify-center p-6">
        <div className="relative max-w-6xl w-full">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <Users className="h-24 w-24 text-green-600 mx-auto mb-6 animate-float" />
            <h1 className="text-5xl md:text-6xl font-bold text-primary mb-4">
              Blue Marvel Management
            </h1>
            <div className="w-32 h-1 bg-gradient-to-r from-primary to-green-500 mx-auto mb-6"></div>
            <p className="text-2xl text-muted-foreground mb-8">
              Strategic Management Solutions & Operational Excellence
            </p>
          </motion.div>

          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <Card className="bg-gradient-to-r from-primary/10 to-green-500/10 border-primary/30 shadow-2xl">
              <div className="p-12">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                  <div>
                    <h2 className="text-3xl font-bold text-primary mb-6">Investment Opportunity</h2>
                    <div className="space-y-4">
                      <div className="flex justify-between items-center p-4 bg-background/50 rounded-lg">
                        <span className="text-lg font-semibold">Investment Amount</span>
                        <span className="text-2xl font-bold text-primary">£350,000</span>
                      </div>
                      <div className="flex justify-between items-center p-4 bg-background/50 rounded-lg">
                        <span className="text-lg font-semibold">Equity Offered</span>
                        <span className="text-2xl font-bold text-green-600">25%</span>
                      </div>
                      <div className="flex justify-between items-center p-4 bg-background/50 rounded-lg">
                        <span className="text-lg font-semibold">Target Market</span>
                        <span className="text-lg font-bold text-blue-600">Enterprise</span>
                      </div>
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="w-48 h-48 mx-auto mb-6 bg-gradient-to-r from-primary to-green-500 rounded-full flex items-center justify-center">
                      <Building className="h-24 w-24 text-white" />
                    </div>
                    <Badge variant="outline" className="text-green-600 border-green-600">
                      <Briefcase className="h-4 w-4 mr-2" />
                      Mid to Large Enterprises
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
              <h2 className="text-4xl font-bold text-primary mb-6">About Blue Marvel Management</h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Blue Marvel Management delivers comprehensive management solutions focused on strategic 
                consulting and operational excellence. We help organizations transform their operations 
                through innovative strategies, digital transformation, and performance optimization.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="p-4 bg-primary/5 rounded-lg">
                  <Target className="h-8 w-8 text-primary mb-2" />
                  <h4 className="font-semibold">Strategic Focus</h4>
                  <p className="text-sm text-muted-foreground">Long-term Business Growth</p>
                </div>
                <div className="p-4 bg-green-500/5 rounded-lg">
                  <Settings className="h-8 w-8 text-green-600 mb-2" />
                  <h4 className="font-semibold">Operational Excellence</h4>
                  <p className="text-sm text-muted-foreground">Process Optimization</p>
                </div>
              </div>
              <Button className="bg-gradient-to-r from-primary to-green-500 hover:from-primary-dark hover:to-green-600">
                <ExternalLink className="h-4 w-4 mr-2" />
                Learn More
              </Button>
            </div>
            <div className="relative">
              <div className="w-full h-80 bg-gradient-to-br from-primary/20 to-green-500/20 rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <Building className="h-24 w-24 text-primary mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-primary mb-2">Enterprise Solutions</h3>
                  <p className="text-muted-foreground">Transforming businesses through strategic excellence</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Services Section */}
      <div className="py-16 px-6 bg-gradient-to-r from-secondary/30 to-green-50/30">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-primary mb-4">Our Services</h2>
            <p className="text-xl text-muted-foreground">Comprehensive management solutions for modern enterprises</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <Card className="p-8 h-full border-primary/20 hover:border-primary/40 transition-all duration-300">
                  <div className="text-center mb-6">
                    <service.icon className="h-16 w-16 text-primary mx-auto mb-4" />
                    <h3 className="text-2xl font-bold text-primary mb-2">{service.title}</h3>
                    <p className="text-muted-foreground">{service.description}</p>
                  </div>
                  <div className="space-y-3">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-green-600 mr-3 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
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
            <Card className="bg-gradient-to-r from-primary/10 to-green-500/10 border-primary/30">
              <div className="p-12">
                <div className="text-center mb-12">
                  <h2 className="text-4xl font-bold text-primary mb-4">Equity Partnership System</h2>
                  <p className="text-xl text-muted-foreground">Strategic investment for sustainable growth</p>
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
                      <p className="text-3xl font-bold text-green-600 mb-2">£350,000</p>
                      <p className="text-sm text-green-700">For 25% equity stake in BMM operations and expansion</p>
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
                        <div>• Strategic Consulting Fees</div>
                        <div>• Project Management Services</div>
                        <div>• Digital Transformation Projects</div>
                        <div>• Ongoing Support Contracts</div>
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
                      <p className="text-2xl font-bold text-purple-600 mb-2">25% Dividends</p>
                      <p className="text-sm text-purple-700">Quarterly returns from growing enterprise client base</p>
                    </div>
                  </motion.div>
                </div>

                {/* Growth Projection Chart */}
                <div className="mt-12">
                  <h3 className="text-2xl font-bold text-primary mb-6 text-center">Revenue & Client Growth</h3>
                  <Card className="p-6">
                    <div className="h-64">
                      <ResponsiveContainer width="100%" height="100%">
                        <AreaChart data={growthData}>
                          <CartesianGrid strokeDasharray="3 3" />
                          <XAxis dataKey="month" />
                          <YAxis />
                          <Tooltip />
                          <Area 
                            type="monotone" 
                            dataKey="revenue" 
                            stackId="1"
                            stroke="#2563eb" 
                            fill="#2563eb"
                            fillOpacity={0.3}
                            name="Revenue (£)"
                          />
                          <Area 
                            type="monotone" 
                            dataKey="clients" 
                            stackId="2"
                            stroke="#16a34a" 
                            fill="#16a34a"
                            fillOpacity={0.3}
                            name="Clients"
                          />
                        </AreaChart>
                      </ResponsiveContainer>
                    </div>
                  </Card>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>

      {/* Market Opportunity */}
      <div className="py-16 px-6 bg-gradient-to-r from-secondary/30 to-green-50/30">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <Card className="p-8 border-green-500/20">
              <div className="text-center mb-8">
                <Globe className="h-16 w-16 text-green-600 mx-auto mb-4" />
                <h2 className="text-3xl font-bold text-primary mb-4">Market Opportunity</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center p-6 bg-blue-50 rounded-lg">
                  <div className="text-3xl font-bold text-blue-600 mb-2">£45B</div>
                  <div className="text-blue-800 font-semibold">UK Management Consulting Market</div>
                  <div className="text-sm text-blue-600 mt-2">Growing at 5.2% annually</div>
                </div>
                <div className="text-center p-6 bg-green-50 rounded-lg">
                  <div className="text-3xl font-bold text-green-600 mb-2">78%</div>
                  <div className="text-green-800 font-semibold">Digital Transformation Demand</div>
                  <div className="text-sm text-green-600 mt-2">Enterprises seeking solutions</div>
                </div>
                <div className="text-center p-6 bg-purple-50 rounded-lg">
                  <div className="text-3xl font-bold text-purple-600 mb-2">92%</div>
                  <div className="text-purple-800 font-semibold">Client Retention Rate</div>
                  <div className="text-sm text-purple-600 mt-2">Long-term partnerships</div>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  );
}