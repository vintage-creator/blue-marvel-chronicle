import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Target, Lightbulb, Award, Globe, TrendingUp, Users } from 'lucide-react';
import blueMarvelLogo from '@/assets/blue-marvel-group-logo.png';

const values = [
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "We relentlessly pursue innovative solutions that drive transformative change"
  },
  {
    icon: Globe,
    title: "Sustainability", 
    description: "Driving responsible growth with a focus on long-term environmental and social impact"
  },
  {
    icon: Award,
    title: "Excellence",
    description: "Upholding the highest standards to consistently exceed expectations"
  }
];

const stats = [
  { number: "500K", label: "Blue Marvel Group Investment", description: "35% Equity Partnership" },
  { number: "350K", label: "Blue Marvel Management", description: "25% Equity Partnership" },
  { number: "50K", label: "Blue Marvel Technologies", description: "10% Equity Partnership" },
  { number: "3", label: "Dynamic Divisions", description: "Comprehensive Portfolio" }
];

export default function Introduction() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-secondary/20 to-background p-6">
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
            className="h-20 mx-auto mb-8 animate-float"
          />
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-6"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Empowering businesses and individuals through innovative solutions across 
            Capital, Management, and Technology divisions
          </p>
        </motion.div>

        {/* Our Company Section */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Card className="mb-12 bg-gradient-to-r from-card to-secondary/30 border-primary/20">
            <div className="p-8">
              <div className="flex items-center mb-6">
                <Target className="h-8 w-8 text-primary mr-3" />
                <h2 className="text-3xl font-bold text-primary">Our Company</h2>
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                At Blue Marvel Group, we are committed to delivering innovative solutions through our 
                Capital, Management, and Technology divisions, empowering businesses and individuals 
                to achieve their goals with cutting-edge strategies and technology-driven excellence.
              </p>
              <Badge variant="secondary" className="text-primary bg-primary/10">
                Established Investment Opportunity
              </Badge>
            </div>
          </Card>
        </motion.div>

        {/* Values Section */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <Card className="mb-12">
            <div className="p-8">
              <h2 className="text-3xl font-bold text-primary mb-8 text-center">Our Core Values</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {values.map((value, index) => (
                  <motion.div
                    key={index}
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.6 + index * 0.2 }}
                    className="text-center p-6 rounded-lg bg-gradient-to-b from-primary/5 to-transparent border border-primary/10 hover:border-primary/20 transition-all duration-300"
                  >
                    <value.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                    <h3 className="text-xl font-semibold text-primary mb-3">{value.title}</h3>
                    <p className="text-muted-foreground">{value.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </Card>
        </motion.div>

        {/* Vision Section */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <Card className="mb-12 bg-gradient-to-r from-primary/5 to-accent/5 border-primary/20">
            <div className="p-8">
              <div className="flex items-center mb-6">
                <TrendingUp className="h-8 w-8 text-primary mr-3" />
                <h2 className="text-3xl font-bold text-primary">Our Vision</h2>
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Our vision at Blue Marvel Group is to become a global leader in empowering businesses 
                and individuals by seamlessly integrating innovation, technology, and strategic expertise, 
                driving sustainable growth and creating lasting impact in the industries we serve.
              </p>
            </div>
          </Card>
        </motion.div>

        {/* Investment Overview */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <Card className="bg-gradient-to-r from-primary/10 to-accent/10 border-primary/30">
            <div className="p-8">
              <div className="flex items-center mb-8">
                <Users className="h-8 w-8 text-primary mr-3" />
                <h2 className="text-3xl font-bold text-primary">Investment Overview</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {stats.map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.6, delay: 1 + index * 0.1 }}
                    className="text-center p-6 bg-background/50 rounded-lg border border-border/50 hover:border-primary/30 transition-all duration-300"
                  >
                    <div className="text-3xl font-bold text-primary mb-2">£{stat.number}</div>
                    <div className="text-sm font-semibold text-foreground mb-1">{stat.label}</div>
                    <div className="text-xs text-muted-foreground">{stat.description}</div>
                  </motion.div>
                ))}
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}