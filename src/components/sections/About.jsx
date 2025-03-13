import { RevealOnScroll } from "../RevealOnScroll";
import { useTranslation, Trans } from "react-i18next";

export const About = () => {
  const frontendSkills = [
    "React",
    "SCSS",
    "TailwindCSS",
  ];

  const backendSkills = ["Node.js", "PostgreSQL", "ExpressJS", 'PHP'];

  const languages = ['Java', 'C#', 'C++', 'PHP', "SQL", "JavaScript", "TypeScript", "Python"];

  const learningSkills = ['Next.js', 'Godot' ];

  const { t } = useTranslation();

  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-green-500 to-green-200 bg-clip-text text-transparent text-center">
            {" "}
            {t('about.title')}
          </h2>

          <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
            <p className="text-gray-300 mb-6">
              {t('about.description')}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4"> Frontend</h3>
                <div className="flex flex-wrap gap-2">
                  {frontendSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-green-500/10 text-green-500 py-1 px-3 rounded-full text-sm hover:bg-green-500/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition
                    "
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4"> Backend</h3>
                <div className="flex flex-wrap gap-2">
                  {backendSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-green-500/10 text-green-500 py-1 px-3 rounded-full text-sm hover:bg-green-500/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition
                    "
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4"> {t('about.languages')} </h3>
                <div className="flex flex-wrap gap-2">
                  {languages.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-orange-400/10 text-orange-400 py-1 px-3 rounded-full text-sm hover:bg-orange-400/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition
                    "
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4"> {t('about.learning')} </h3>
                <div className="flex flex-wrap gap-2">
                  {learningSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-orange-400/10 text-orange-400 py-1 px-3 rounded-full text-sm hover:bg-orange-400/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition
                    "
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4"> 🏫 {t('about.education.title')} </h3>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>
                  <Trans i18nKey="about.education.but">
                  <strong>Bachelor's degree in Computer Science</strong> - Orsay's IUT, Université Paris Saclay (2024 - 2027)
                  </Trans>
                </li>
                <li>
                  <strong>Udemy course</strong> - The Complete Web Developer A to Z by <a href="https://www.udemy.com/course/formation-developpeur-web/" target='_blank' className="underline text-green-500">John Taieb</a>
                </li>
              </ul>
            </div>
            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4"> 💼 {t('about.work.title')} </h3>
              <div className="space-y-4 text-gray-300">
                {/* <div>
                  <h4 className="font-semibold">
                    {" "}
                    Software Engineer at ABC Corp (2020 - Present){" "}
                  </h4>
                  <p>
                    Developed and maintained microservices for cloud-based
                    applications.
                  </p>
                </div> */}

                <em><strong>{t("about.work.looking")}</strong></em>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
