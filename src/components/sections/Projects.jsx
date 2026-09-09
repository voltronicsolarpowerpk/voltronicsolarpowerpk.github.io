import { projectsData } from "../../data/projects";

export default function Projects() {
  return (
    <section id="projects" className="py-4 bg-background">
      <div className="container-custom">
        <div className="text-center max-w-xl mx-auto">
          <p className="text-primary-dark font-semibold tracking-wide">
            Work done
          </p>
          <h2 className="mt-3 text-text text-3xl sm:text-4xl font-bold leading-tight">
            Recent installations
          </h2>
        </div>

        <div className="mt-12 grid grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {projectsData.map(({ image, title }, index) => (
            <div
              key={title}
              className={`group relative overflow-hidden rounded-card aspect-square ${
                index === 0 ? "col-span-2 lg:col-span-1" : ""
              }`}
            >
              <img
                src={image}
                alt={title}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-linear-to-t from-text/80 via-text/0 to-transparent" />
              <p className="absolute bottom-4 left-4 right-4 text-surface text-sm sm:text-base font-semibold">
                {title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
