import { motion } from "framer-motion";

import { projectsData } from "../../data/projects";

export default function Projects() {
  return (
    <section
      id="projects"
      className="py-6 sm:py-8 lg:py-10 bg-background overflow-hidden"
    >
      <div className="container-custom mx-auto px-4 sm:px-6 lg:px-8">
        {/* ======================= */}
        {/* 1. SECTION HEADER       */}
        {/* ======================= */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-xl mx-auto mb-10 sm:mb-12 lg:mb-16"
        >
          {/* PASTE YOUR HEADER CODE HERE (e.g., "What we do", "Why us") */}
          <p className="text-primary-dark font-semibold tracking-wide uppercase text-xs sm:text-sm">
            Recent Installations
          </p>
          <h2 className="mt-2 sm:mt-3 text-text text-1xl sm:text-2xl lg:text-3xl font-bold tracking-tight whitespace-nowrap">
            Proven Success Across Diverse Sites
          </h2>
          {/* <p className="mt-3 sm:mt-4 text-text-light text-sm sm:text-base leading-relaxed">
            Browse our latest completed solar deployments to see the quality and
            scale of our structural work.
          </p> */}
        </motion.div>
        {/* ======================= */}
        {/* 2. SECTION CONTENT      */}
        {/* ======================= */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="w-full"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {projectsData.map((project) => (
              <article
                key={project.id}
                className="group overflow-hidden rounded-card bg-surface border border-text/10 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                {/* Image */}
                <div className="relative aspect-4/3 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />

                  {/* Category */}
                  <div className="absolute top-4 left-4">
                    <span className="inline-flex items-center rounded-full bg-primary-dark px-3 py-1 text-xs sm:text-sm font-semibold text-surface">
                      {project.category}
                    </span>
                  </div>

                  {/* Status */}
                  <div className="absolute top-4 right-4">
                    <span className="inline-flex items-center rounded-full bg-surface/90 px-3 py-1 text-xs font-medium text-text">
                      {project.status}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5 sm:p-6">
                  <h3 className="text-text text-lg sm:text-xl font-bold leading-snug">
                    {project.title}
                  </h3>

                  <p className="mt-3 text-text/70 text-sm leading-relaxed line-clamp-3">
                    {project.description}
                  </p>

                  {/* Project Details */}
                  <div className="mt-6 space-y-3 border-t border-text/10 pt-5">
                    <div className="grid grid-cols-[7rem_1fr] gap-3 text-sm">
                      <span className="font-semibold text-text">Client</span>
                      <span className="text-text/70">{project.clientName}</span>
                    </div>

                    <div className="grid grid-cols-[7rem_1fr] gap-3 text-sm">
                      <span className="font-semibold text-text">Location</span>
                      <span className="text-text/70">{project.address}</span>
                    </div>

                    <div className="grid grid-cols-[7rem_1fr] gap-3 text-sm">
                      <span className="font-semibold text-text">
                        System Size
                      </span>
                      <span className="text-text/70">{project.systemSize}</span>
                    </div>

                    <div className="grid grid-cols-[7rem_1fr] gap-3 text-sm">
                      <span className="font-semibold text-text">System</span>
                      <span className="text-text/70">{project.systemType}</span>
                    </div>

                    <div className="grid grid-cols-[7rem_1fr] gap-3 text-sm">
                      <span className="font-semibold text-text">Completed</span>
                      <span className="text-text/70">
                        {project.completionDate}
                      </span>
                    </div>
                  </div>

                  {/* Highlights */}
                  {project.highlights?.length > 0 && (
                    <div className="mt-6 flex flex-wrap gap-2">
                      {project.highlights.slice(0, 3).map((highlight) => (
                        <span
                          key={highlight}
                          className="rounded-full border border-text/10 px-3 py-1 text-xs text-text/70"
                        >
                          {highlight}
                        </span>
                      ))}
                    </div>
                  )}

                  {/* CTA */}
                  <div className="mt-6">
                    <a
                      href="#contact"
                      className="inline-flex items-center text-sm font-semibold text-primary-dark transition-opacity hover:opacity-80"
                    >
                      Get your estimate
                      <span className="ml-2" aria-hidden="true">
                        →
                      </span>
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
