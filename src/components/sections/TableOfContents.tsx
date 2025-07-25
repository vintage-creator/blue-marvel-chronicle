import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { ChevronRight } from 'lucide-react';

const contents = [
  { page: 1, title: "Cover Page", subtitle: "Blue Marvel Group" },
  { page: 2, title: "Table of Contents", subtitle: "Navigation" },
  { page: 3, title: "Introduction", subtitle: "Blue Marvel Group Overview" },
  { page: 4, title: "Company Summaries", subtitle: "BMCS | BMM | BMT" },
  { page: 5, title: "Blue Marvel Capital Strategies", subtitle: "Investment Opportunity - £100,000 for 15%" },
  { page: 6, title: "Blue Marvel Management", subtitle: "Investment Opportunity - £350,000 for 25%" },
  { page: 7, title: "Blue Marvel Technologies", subtitle: "Investment Opportunity - £50,000 for 10%" },
  { page: 8, title: "Contact Information", subtitle: "Get in Touch" },
];

export default function TableOfContents() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-secondary/30 p-6 flex items-center justify-center">
      <div className="max-w-4xl w-full">
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Table of Contents
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-6"></div>
          <p className="text-xl text-muted-foreground">
            Navigate through our comprehensive investment portfolio
          </p>
        </motion.div>

        <Card className="bg-card/50 backdrop-blur-sm border border-border/50 shadow-xl">
          <div className="p-8">
            <div className="space-y-4">
              {contents.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ x: -50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group flex items-center justify-between p-4 rounded-lg border border-border/30 hover:border-primary/30 hover:bg-primary/5 transition-all duration-300 cursor-pointer"
                >
                  <div className="flex items-center space-x-6">
                    <div className="w-12 h-12 bg-gradient-to-r from-primary to-primary-light rounded-full flex items-center justify-center text-primary-foreground font-bold">
                      {item.page}
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-muted-foreground text-sm">
                        {item.subtitle}
                      </p>
                    </div>
                  </div>
                  <ChevronRight className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="mt-12 p-6 bg-gradient-to-r from-primary/10 to-accent/10 rounded-lg border border-primary/20"
            >
              <h3 className="text-lg font-semibold text-primary mb-3">
                Total Investment Opportunity
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <p className="text-2xl font-bold text-primary">£900,000</p>
                  <p className="text-muted-foreground">Total Funding Required</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-primary">70%</p>
                  <p className="text-muted-foreground">Maximum Equity Available</p>
                </div>
              </div>
            </motion.div>
          </div>
        </Card>
      </div>
    </div>
  );
}