import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import blueMarvelLogo from '@/assets/blue-marvel-group-logo.png';

export default function CoverPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-dark via-primary to-primary-light flex items-center justify-center p-6">
      <Card className="max-w-4xl w-full bg-background/95 backdrop-blur-sm shadow-2xl border-0">
        <div className="p-12 md:p-16 text-center">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <img 
              src={blueMarvelLogo} 
              alt="Blue Marvel Group" 
              className="h-32 md:h-40 mx-auto mb-8 animate-float"
            />
          </motion.div>

          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold text-primary mb-4">
              BLUE MARVEL GROUP
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-6"></div>
            <h2 className="text-2xl md:text-3xl font-light text-muted-foreground mb-8">
              Investment Portfolio E-Brochure
            </h2>
          </motion.div>

          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-lg p-8 mb-8"
          >
            <h3 className="text-xl font-semibold text-primary mb-4">
              Empowering Innovation Through Strategic Investment
            </h3>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Discover comprehensive investment opportunities across our three dynamic divisions: 
              Capital Strategies, Management Solutions, and Technology Innovation.
            </p>
          </motion.div>

          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center"
          >
            <div className="bg-primary/5 rounded-lg p-6">
              <h4 className="text-lg font-semibold text-primary mb-2">£500,000</h4>
              <p className="text-muted-foreground">Blue Marvel Group</p>
              <p className="text-sm text-muted-foreground">35% Equity</p>
            </div>
            <div className="bg-primary/5 rounded-lg p-6">
              <h4 className="text-lg font-semibold text-primary mb-2">£350,000</h4>
              <p className="text-muted-foreground">Blue Marvel Management</p>
              <p className="text-sm text-muted-foreground">25% Equity</p>
            </div>
            <div className="bg-primary/5 rounded-lg p-6">
              <h4 className="text-lg font-semibold text-primary mb-2">£50,000</h4>
              <p className="text-muted-foreground">Blue Marvel Technologies</p>
              <p className="text-sm text-muted-foreground">10% Equity</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
            className="mt-12 text-sm text-muted-foreground"
          >
            <p>Confidential Investment Document</p>
            <p className="mt-2">{new Date().getFullYear()}</p>
          </motion.div>
        </div>
      </Card>
    </div>
  );
}