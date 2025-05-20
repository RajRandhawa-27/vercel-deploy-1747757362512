"use client";

import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { projectsData } from "@/data/projectsData";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ExternalLink, Github, ArrowRight } from "lucide-react";

export default function WorkSection() {
  const [filter, setFilter] = useState("all");
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  if (!projectsData?.length) return null;

  // Get unique categories
  const categories = [
    "all",
    ...new Set(projectsData.map((project) => project.category)),
  ];

  // Filter projects based on selected category
  const filteredProjects =
    filter === "all"
      ? projectsData
      : projectsData.filter((project) => project.category === filter);

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
    <section id="work" className="py-20 md:py-32">
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
              Portfolio
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">
              Featured Projects
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Explore my latest work and projects that showcase my skills and
              expertise.
            </p>
          </motion.div>

          {categories.length > 1 && (
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap justify-center gap-2 mb-12"
            >
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={filter === category ? "default" : "outline"}
                  size="sm"
                  onClick={() => setFilter(category)}
                  className="capitalize"
                >
                  {category}
                </Button>
              ))}
            </motion.div>
          )}

          <motion.div
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.title}
                variants={itemVariants}
                custom={index}
                whileHover={{ y: -5 }}
                className={`${project.featured ? "md:col-span-2" : ""}`}
              >
                <Card className="h-full overflow-hidden border-border/50 bg-card/50 backdrop-blur-sm hover:shadow-lg transition-all duration-300">
                  <CardHeader className="pb-2">
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle className="text-xl">
                          {project.title}
                        </CardTitle>
                        <div className="flex flex-wrap gap-1 mt-2">
                          {project.technologies?.map((tech) => (
                            <Badge
                              key={tech}
                              variant="secondary"
                              className="mr-1 mb-1"
                            >
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      {project.featured && (
                        <Badge className="bg-primary/20 text-primary hover:bg-primary/30">
                          Featured
                        </Badge>
                      )}
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      {project.description}
                    </p>
                  </CardContent>
                  <CardFooter className="flex justify-between">
                    {project.demoUrl && (
                      <Button variant="outline" size="sm" asChild>
                        <a
                          href={project.demoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Live Demo <ExternalLink className="ml-2 h-4 w-4" />
                        </a>
                      </Button>
                    )}
                    {project.sourceUrl && (
                      <Button variant="outline" size="sm" asChild>
                        <a
                          href={project.sourceUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Source <Github className="ml-2 h-4 w-4" />
                        </a>
                      </Button>
                    )}
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          {projectsData.length > 6 && (
            <motion.div variants={itemVariants} className="text-center mt-12">
              <Button variant="outline" size="lg">
                View All Projects <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
