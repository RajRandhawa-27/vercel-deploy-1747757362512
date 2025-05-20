"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { processData } from "@/data/processData";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function ProcessSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  };

  if (!processData?.length) return null;

  return (
    <section id="process" className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <Badge
              variant="outline"
              className="mb-4 px-3 py-1 text-sm border-primary/20 bg-primary/5"
            >
              Process
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">
              How I Work
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              My structured approach ensures efficient delivery and exceptional
              results for every project.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Connecting line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-0.5 bg-border/50" />

              {processData.map((step, index) => (
                <motion.div
                  key={step.title}
                  variants={itemVariants}
                  custom={index}
                  className="relative mb-12 last:mb-0"
                >
                  <div
                    className={`flex items-center ${
                      index % 2 === 0 ? "flex-row" : "flex-row-reverse"
                    }`}
                  >
                    <div
                      className={`w-1/2 ${
                        index % 2 === 0 ? "pr-8 text-right" : "pl-8"
                      }`}
                    >
                      <Card className="border-border/50 bg-card/50 backdrop-blur-sm hover:shadow-lg transition-all duration-300">
                        <CardHeader>
                          <CardTitle className="flex items-center gap-2">
                            <div className="bg-primary/10 w-8 h-8 rounded-full flex items-center justify-center text-primary font-bold">
                              {index + 1}
                            </div>
                            {step.title}
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="text-muted-foreground">
                            {step.description}
                          </p>
                        </CardContent>
                      </Card>
                    </div>

                    <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center justify-center">
                      <div className="w-12 h-12 rounded-full bg-primary/10 border-4 border-background flex items-center justify-center">
                        <span className="text-primary font-bold">
                          {index + 1}
                        </span>
                      </div>
                    </div>

                    <div className="w-1/2" />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
