import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Button } from '@/components/ui/button';
import { 
  Laptop, Code, Shield, Cpu, Cloud, Zap,
  DollarSign, ArrowRight, Target, BarChart3,
  Brain, Rocket, ExternalLink, Database
} from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar } from 'recharts';

const growthData = [
  { month: 'Jan', revenue: 18000, projects: 8 },
  { month: 'Feb', revenue: 22000, projects: 12 },
  { month: 'Mar', revenue: 28000, projects: 16 },
  { month: 'Apr', revenue: 35000, projects: 21 },
  { month: 'May', revenue: 42000, projects: 26 },
  { month: 'Jun', revenue: 48000, projects: 32 }
];

const techCapabilities = [
  { subject: 'AI/ML', A: 90, fullMark: 100 },
  { subject: 'Cloud', A: 85, fullMark: 100 },
  { subject: 'Security', A: 92, fullMark: 100 },
  { subject: 'Mobile', A: 78, fullMark: 100 },
  { subject: 'Web Dev', A: 95, fullMark: 100 },
  { subject: 'DevOps', A: 88, fullMark: 100 }
];

const services = [
  {
    icon: Code,
    title: "Software Development",
    description: "Custom applications and enterprise solutions",
    features: ["Full-stack Development", "Mobile Applications", "API Integration", "Database Design"]
  },
  {
    icon: Brain,
    title: "AI Solutions", 
    description: "Machine learning and artificial intelligence implementations",
    features: ["ML Model Development", "Natural Language Processing", "Computer Vision", "Predictive Analytics"]
  },
  {
    icon: Cloud,
    title: "Cloud Services",
    description: "Scalable cloud infrastructure and migration services",
    features: ["Cloud Migration", "Infrastructure Setup", "DevOps Implementation", "Monitoring Systems"]
  },
  {
    icon: Shield,
    title: "Cybersecurity",
    description: "Comprehensive security solutions and implementations",
    features: ["Security Audits", "Penetration Testing", "Compliance Management", "Incident Response"]
  }
];

export default function BMTSection() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-purple-50/30 to-background">
      {/* Cover Section */}
      <div className="relative min-h-screen flex items-center justify-center p-6">
        <div className="relative max-w-6xl w-full">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <Laptop className="h-24 w-24 text-purple-600 mx-auto mb-6 animate-float" />
            <h1 className="text-5xl md:text-6xl font-bold text-primary mb-4">
              Blue Marvel Technologies
            </h1>
            <div className="w-32 h-1 bg-gradient-to-r from-primary to-purple-500 mx-auto mb-6"></div>
            <p className="text-2xl text-muted-foreground mb-8">
              Innovation Through Advanced Technology Solutions
            </p>
          </motion.div>

          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <Card className="bg-gradient-to-r from-primary/10 to-purple-500/10 border-primary/30 shadow-2xl">
              <div className="p-12">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                  <div>
                    <h2 className="text-3xl font-bold text-primary mb-6">Investment Opportunity</h2>
                    <div className="space-y-4">
                      <div className="flex justify-between items-center p-4 bg-background/50 rounded-lg">
                        <span className="text-lg font-semibold">Investment Amount</span>
                        <span className="text-2xl font-bold text-primary">£50,000</span>
                      </div>
                      <div className="flex justify-between items-center p-4 bg-background/50 rounded-lg">
                        <span className="text-lg font-semibold">Equity Offered</span>
                        <span className="text-2xl font-bold text-purple-600">10%</span>
                      </div>
                      <div className="flex justify-between items-center p-4 bg-background/50 rounded-lg">
                        <span className="text-lg font-semibold">Focus</span>
                        <span className="text-lg font-bold text-blue-600">Innovation</span>
                      </div>
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="w-48 h-48 mx-auto mb-6 bg-gradient-to-r from-primary to-purple-500 rounded-full flex items-center justify-center">
                      <Cpu className="h-24 w-24 text-white" />
                    </div>
                    <Badge variant="outline" className="text-purple-600 border-purple-600">
                      <Rocket className="h-4 w-4 mr-2" />
                      Tech-Forward Businesses & Startups
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
              <h2 className="text-4xl font-bold text-primary mb-6">About Blue Marvel Technologies</h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Blue Marvel Technologies delivers cutting-edge technology solutions that drive innovation 
                and digital transformation. We specialize in advanced software development, AI and machine 
                learning solutions, cloud infrastructure services, and comprehensive cybersecurity implementations.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="p-4 bg-primary/5 rounded-lg">
                  <Brain className="h-8 w-8 text-primary mb-2" />
                  <h4 className="font-semibold">AI Innovation</h4>
                  <p className="text-sm text-muted-foreground">Advanced ML Solutions</p>
                </div>
                <div className="p-4 bg-purple-500/5 rounded-lg">
                  <Shield className="h-8 w-8 text-purple-600 mb-2" />
                  <h4 className="font-semibold">Security First</h4>
                  <p className="text-sm text-muted-foreground">Comprehensive Protection</p>
                </div>
              </div>
              <Button className="bg-gradient-to-r from-primary to-purple-500 hover:from-primary-dark hover:to-purple-600">
                <ExternalLink className="h-4 w-4 mr-2" />
                Visit Website
              </Button>
            </div>
            <div className="relative">
              <div className="w-full h-80 bg-gradient-to-br from-primary/20 to-purple-500/20 rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <Database className="h-24 w-24 text-primary mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-primary mb-2">Advanced Tech Stack</h3>
                  <p className="text-muted-foreground">Building the future with cutting-edge technology</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Technology Capabilities Radar */}
      <div className="py-16 px-6 bg-gradient-to-r from-secondary/30 to-purple-50/30">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-primary mb-4">Technology Capabilities</h2>
            <p className="text-xl text-muted-foreground">Our expertise across key technology domains</p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <Card className="p-8">
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <RadarChart data={techCapabilities}>
                    <PolarGrid />
                    <PolarAngleAxis dataKey="subject" />
                    <PolarRadiusAxis angle={30} domain={[0, 100]} />
                    <Radar
                      name="Capabilities"
                      dataKey="A"
                      stroke="#8b5cf6"
                      fill="#8b5cf6"
                      fillOpacity={0.3}
                      strokeWidth={2}
                    />
                  </RadarChart>
                </ResponsiveContainer>
              </div>
            </Card>

            <div className="space-y-6">
              {techCapabilities.map((capability, index) => (
                <motion.div
                  key={index}
                  initial={{ x: 50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="flex items-center justify-between p-4 bg-background/50 rounded-lg border border-border/30"
                >
                  <span className="font-semibold text-foreground">{capability.subject}</span>
                  <div className="flex items-center space-x-4">
                    <Progress value={capability.A} className="w-24 h-2" />
                    <span className="text-sm font-bold text-purple-600">{capability.A}%</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-primary mb-4">Our Services</h2>
            <p className="text-xl text-muted-foreground">Comprehensive technology solutions for modern businesses</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <Card className="p-8 h-full border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-lg">
                  <div className="text-center mb-6">
                    <service.icon className="h-16 w-16 text-purple-600 mx-auto mb-4" />
                    <h3 className="text-2xl font-bold text-primary mb-2">{service.title}</h3>
                    <p className="text-muted-foreground">{service.description}</p>
                  </div>
                  <div className="space-y-3">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center">
                        <div className="w-2 h-2 bg-purple-600 rounded-full mr-3 flex-shrink-0"></div>
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
      <div className="py-16 px-6 bg-gradient-to-r from-secondary/30 to-purple-50/30">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <Card className="bg-gradient-to-r from-primary/10 to-purple-500/10 border-primary/30">
              <div className="p-12">
                <div className="text-center mb-12">
                  <h2 className="text-4xl font-bold text-primary mb-4">Equity Partnership System</h2>
                  <p className="text-xl text-muted-foreground">Innovation-focused investment for technology growth</p>
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
                      <p className="text-3xl font-bold text-green-600 mb-2">£50,000</p>
                      <p className="text-sm text-green-700">For 10% equity stake in BMT innovation and scalability</p>
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
                        <div>• Software Development Projects</div>
                        <div>• AI/ML Solution Licensing</div>
                        <div>• Cloud Infrastructure Services</div>
                        <div>• Cybersecurity Consulting</div>
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
                      <p className="text-2xl font-bold text-purple-600 mb-2">10% Dividends</p>
                      <p className="text-sm text-purple-700">Returns from high-growth technology projects and solutions</p>
                    </div>
                  </motion.div>
                </div>

                {/* Growth Projection Chart */}
                <div className="mt-12">
                  <h3 className="text-2xl font-bold text-primary mb-6 text-center">Project Growth & Revenue</h3>
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
                            stroke="#8b5cf6" 
                            strokeWidth={3}
                            name="Revenue (£)"
                          />
                          <Line 
                            type="monotone" 
                            dataKey="projects" 
                            stroke="#06b6d4" 
                            strokeWidth={3}
                            name="Active Projects"
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

      {/* Innovation Focus */}
      <div className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <Card className="p-8 border-purple-500/20 bg-gradient-to-r from-purple-500/5 to-blue-500/5">
              <div className="text-center mb-8">
                <Zap className="h-16 w-16 text-purple-600 mx-auto mb-4" />
                <h2 className="text-3xl font-bold text-primary mb-4">Innovation & Scalability Focus</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center p-6 bg-background/50 rounded-lg">
                  <div className="text-3xl font-bold text-purple-600 mb-2">AI-First</div>
                  <div className="text-purple-800 font-semibold">Approach</div>
                  <div className="text-sm text-purple-600 mt-2">Machine learning at the core</div>
                </div>
                <div className="text-center p-6 bg-background/50 rounded-lg">
                  <div className="text-3xl font-bold text-blue-600 mb-2">Cloud-Native</div>
                  <div className="text-blue-800 font-semibold">Architecture</div>
                  <div className="text-sm text-blue-600 mt-2">Scalable by design</div>
                </div>
                <div className="text-center p-6 bg-background/50 rounded-lg">
                  <div className="text-3xl font-bold text-green-600 mb-2">Security</div>
                  <div className="text-green-800 font-semibold">By Default</div>
                  <div className="text-sm text-green-600 mt-2">Zero-trust implementation</div>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  );
}