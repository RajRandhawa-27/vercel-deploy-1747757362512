"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { personalData } from "@/data/personalData";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowDown, Download, Mail, Phone } from "lucide-react";
import { socialLinks } from "@/config/social";

export default function HeroSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  if (!personalData) return null;

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

  return (
    <section className="relative min-h-screen flex items-center justify-center py-20 md:py-32 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-background to-background/80" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent" />
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:20px_20px]" />
      </div>

      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="max-w-4xl mx-auto text-center"
        >
          <motion.div variants={itemVariants} className="mb-8">
            <Badge
              variant="outline"
              className="mb-4 px-3 py-1 text-sm border-primary/20 bg-primary/5"
            >
              {personalData.title ?? "Full Stack Developer"}
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
              Hi, I'm{" "}
              <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                {personalData.name ?? "Your Name"}
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8">
              {personalData.description ??
                "I build exceptional digital experiences that make an impact."}
            </p>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            {personalData.email && (
              <Button asChild variant="outline" size="lg" className="gap-2">
                <a href={`mailto:${personalData.email}`}>
                  <Mail className="h-5 w-5" />
                  Email Me
                </a>
              </Button>
            )}
            {personalData.phone && (
              <Button asChild variant="outline" size="lg" className="gap-2">
                <a
                  href={`https://wa.me/${personalData.phone.replace(
                    /\D/g,
                    ""
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Phone className="h-5 w-5" />
                  WhatsApp
                </a>
              </Button>
            )}
            {personalData.resume && (
              <Button asChild size="lg" className="gap-2">
                <a
                  href={personalData.resume}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Download className="h-5 w-5" />
                  Download CV
                </a>
              </Button>
            )}
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="flex justify-center gap-4"
          >
            {socialLinks?.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-muted/50 p-3 rounded-full hover:bg-primary/10 hover:text-primary transition-colors"
                aria-label={link.name}
              >
                <link.icon className="h-5 w-5" />
              </a>
            ))}
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.5 }}
          >
            <a
              href="#about"
              className="flex flex-col items-center text-muted-foreground hover:text-primary transition-colors"
            >
              <span className="text-sm mb-2">Scroll Down</span>
              <ArrowDown className="h-5 w-5 animate-bounce" />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
