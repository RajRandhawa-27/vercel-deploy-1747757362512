"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { expertiseData } from "@/data/expertiseData";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { Sparkles } from "lucide-react";

export default function ExpertiseSection() {
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

  if (!expertiseData) return null;

  return (
    <section id="expertise" className="py-20 md:py-32 bg-muted/10">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="max-w-5xl mx-auto"
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <Badge
              variant="outline"
              className="mb-4 px-3 py-1 text-sm border-primary/20 bg-primary/5"
            >
              <Sparkles className="mr-1 h-3.5 w-3.5 text-primary" />
              Expertise
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">
              My Specialized Skills
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              With years of experience, I've developed expertise in various
              areas of design and development.
            </p>
          </motion.div>

          <Tabs defaultValue="skills" className="w-full">
            <motion.div
              variants={itemVariants}
              className="flex justify-center mb-8"
            >
              <TabsList className="grid w-full max-w-md grid-cols-3">
                <TabsTrigger value="skills">Skills</TabsTrigger>
                <TabsTrigger value="tools">Tools</TabsTrigger>
                <TabsTrigger value="languages">Languages</TabsTrigger>
              </TabsList>
            </motion.div>

            <TabsContent value="skills" className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {expertiseData.skills?.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    variants={itemVariants}
                    custom={index}
                    className="space-y-2"
                  >
                    <div className="flex justify-between">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-muted-foreground">
                        {skill.level}%
                      </span>
                    </div>
                    <Progress value={skill.level} className="h-2" />
                  </motion.div>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="tools" className="space-y-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {expertiseData.tools?.map((tool, index) => (
                  <motion.div
                    key={tool.name}
                    variants={itemVariants}
                    custom={index}
                  >
                    <Card className="overflow-hidden border-border/50 bg-card/50 backdrop-blur-sm hover:bg-card/80 transition-colors">
                      <CardHeader className="pb-2">
                        <div className="flex items-center">
                          <div className="mr-3 bg-primary/10 p-2 rounded-md">
                            <tool.icon className="h-5 w-5 text-primary" />
                          </div>
                          <CardTitle className="text-lg">{tool.name}</CardTitle>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <CardDescription>{tool.description}</CardDescription>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="languages" className="space-y-8">
              <div className="flex flex-wrap gap-3 justify-center">
                {expertiseData.languages?.map((language, index) => (
                  <motion.div
                    key={language.name}
                    variants={itemVariants}
                    custom={index}
                    whileHover={{ scale: 1.05 }}
                    className="bg-muted/50 hover:bg-primary/10 hover:text-primary px-4 py-3 rounded-lg transition-colors"
                  >
                    <div className="flex flex-col items-center">
                      <language.icon className="h-8 w-8 mb-2" />
                      <span className="font-medium">{language.name}</span>
                      <span className="text-xs text-muted-foreground mt-1">
                        {language.level}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </motion.div>
      </div>
    </section>
  );
}
