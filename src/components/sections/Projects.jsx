import { RevealOnScroll } from "../RevealOnScroll";
import { useTranslation } from "react-i18next";

export const Projects = () => {
  const {t} = useTranslation();
  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-green-500 to-green-200 bg-clip-text text-transparent text-center">
            {" "}
            {t('projects.title')}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-green-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
              <h3 className="text-xl font-bold mb-2"> {t("projects.1.name")}</h3>
              <p className="text-gray-400 mb-4">
                {t("projects.1.description")}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["EJS", "Node.js", "Sequelize", "Socket.IO", "Express"].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-green-500/10 text-green-500 py-1 px-3 rounded-full text-sm hover:bg-green-500/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all
                    "
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex justify-between items-center">
                <a
                  href="https://github.com/NeyZzO/livechat"
                  target="_blank"
                  className="text-green-400 hover:text-green-300 transition-colors my-4"
                >
                  {t('projects.more')} →
                </a>
              </div>
            </div>
            <div
              className="
              glass p-6 rounded-xl border border-white/10 
              hover:-translate-y-1 hover:border-green-500/30
              hover:shadow-[0_4px_20px_rgba(59,130,246,0.1)]
              transition-all
            "
            >
              <h3 className="text-xl font-bold mb-2">{t('projects.2.name')}</h3>
              <p className="text-gray-400 mb-4">
                {t('projects.2.description')}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["React", "Node.js", "JWT", "Sequelize"].map((tech, key) => (
                  <span
                    key={key}
                    className="
                      bg-green-500/10 text-green-500 py-1 px-3 
                      rounded-full text-sm
                      transition
                      hover:bg-green-500/20 hover:-translate-y-0.5
                      hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]
                    "
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center">
                <a
                  href="https://github.com/NeyZzO/oauth-server"
                  target="_blank"
                  className="text-green-400 hover:text-green-300 transition-colors my-4"
                >
                  {t('projects.more')} →
                </a>
              </div>
            </div>

            <div
              className="
              glass p-6 rounded-xl border border-white/10 
              hover:-translate-y-1 hover:border-green-500/30
              hover:shadow-[0_4px_20px_rgba(59,130,246,0.1)]
              transition-all
            "
            >
              <h3 className="text-xl font-bold mb-2">{t('projects.3.name')}</h3>
              <p className="text-gray-400 mb-4">
                {t('projects.3.description')}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["Python", "PyGame"].map(
                  (tech) => (
                    <span
                      key={tech}
                      className="
                      bg-green-500/10 text-green-500 py-1 px-3 
                      rounded-full text-sm
                      transition
                      hover:bg-green-500/20 hover:-translate-y-0.5
                      hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]
                    "
                    >
                      {tech}
                    </span>
                  )
                )}
              </div>
              <div className="flex justify-between items-center">
                <a
                  href="https://github.com/NeyZzO/python-snake"
                  target="_blank"
                  className="text-green-400 hover:text-green-300 transition-colors my-4"
                >
                  {t('projects.more')} →
                </a>
              </div>
            </div>

            <div
              className="
              glass p-6 rounded-xl border border-white/10 
              hover:-translate-y-1 hover:border-green-500/30
              hover:shadow-[0_4px_20px_rgba(59,130,246,0.1)]
              transition-all
            "
            >
              <h3 className="text-xl font-bold mb-2">{t('projects.4.name')}</h3>
              <p className="text-gray-400 mb-4">
                {t('projects.4.description')}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["Vanilla JS", "P5.js", "HTML"].map((tech, key) => (
                  <span
                    key={key}
                    className="
                      bg-green-500/10 text-green-500 py-1 px-3 
                      rounded-full text-sm
                      transition
                      hover:bg-green-500/20 hover:-translate-y-0.5
                      hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]
                    "
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center ">
                <a
                  href="https://github.com/NeyZzO/gameoflifea"
                  target="_blank"
                  className="text-green-400 hover:text-green-300 transition-colors my-4"
                >
                  {t('projects.more')} →
                </a>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
