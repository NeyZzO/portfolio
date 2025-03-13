import { RevealOnScroll } from "../RevealOnScroll";
import { useTranslation } from "react-i18next";
import { Download } from "lucide-react";

export const Home = () => {
  const { t } = useTranslation();
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative"
    >
      <RevealOnScroll>
        <div className="text-center z-10 px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-green-500 to-green-200 bg-clip-text text-transparent leading-right">
            {t("home.hello", {name: "Eliott"})}
          </h1>

          <p className="tex-gray-400 text-lg mb-8 max-w-lg mx-auto">
            {t("home.description")}
          </p>
          <div className="flex justify-center space-x-4">
            <a
              href="#projects"
              className="bg-green-500 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.4)]"
            >
              {t("home.projects_btn")}
            </a>

            <a
              href=""
              className="border border-green-500/50 text-green-500 py-3 px-6 rounded font-medium transition-all duration-200 
             hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.2)] hover:bg-green-500/10"
            >
              <div style={{display: "flex", flexDirection: 'row'}}>
                <Download style={{padding: "5px"}}/> <div>{t("home.cv_btn")}</div>
              </div>
            </a>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
