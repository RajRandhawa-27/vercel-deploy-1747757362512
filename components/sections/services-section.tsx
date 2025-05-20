"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { servicesData } from "@/data/servicesData";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function ServicesSection() {
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

  if (!servicesData?.length) return null;

  return (
    <section id="services" className="py-20 md:py-32 bg-muted/10">
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
              Services
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">
              What I Offer
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Specialized services tailored to meet your project needs with
              quality and precision.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {servicesData.map((service, index) => (
              <motion.div
                key={service.title}
                variants={itemVariants}
                custom={index}
                whileHover={{ y: -5 }}
              >
                <Card className="h-full border-border/50 bg-card/50 backdrop-blur-sm hover:shadow-lg transition-all duration-300">
                  <CardHeader>
                    <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                      <span className="text-primary font-bold">
                        {index + 1}
                      </span>
                    </div>
                    <CardTitle>{service.title}</CardTitle>
                    <CardDescription>{service.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {service.features?.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start">
                          <span className="mr-2 text-primary">•</span>
                          <span className="text-muted-foreground">
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
