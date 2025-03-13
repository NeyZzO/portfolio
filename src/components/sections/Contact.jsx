import { useState } from "react";
import { RevealOnScroll } from "../RevealOnScroll";
import emailjs from "emailjs-com";
import { useTranslation } from "react-i18next";
import { FaGithub, FaLinkedin } from "react-icons/fa6"

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const { t } = useTranslation();

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        e.target,
        import.meta.env.VITE_PUBLIC_KEY
      )
      .then((result) => {
        alert("Message Sent!");
        setFormData({ name: "", email: "", message: "" });
      })
      .catch(() => alert("Oops! Something went wrong. Please try again."));
  };
  
  const onSocialClick = (social) => {
    window.open(social, '_blank');
  }

  return (
    <section
      id="contact"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="px-4 w-full min-w-[300px] md:w-[500px] sm:w-2/3 p-6">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-green-500 to-green-200 bg-clip-text text-transparent text-center">
            {t("contact.title")}
          </h2>
          <div className="grid grid-cols-1 gap-6">
            <div className="p-6 rounded-xl border border-white/10 flex justify-center h-auto flex-col gap-5">
              <h3 className="text-xl font-bold mb-2 text-center align-middle">{t('contact.socials')}</h3>
              <div className="flex justify-center gap-10">
                <FaGithub className="text-5xl cursor-pointer hover:text-amber-400 hover:-translate-y-1 transition" onClick={() => onSocialClick('https://github.com/NeyZzO')}/>
                <FaLinkedin className="text-5xl cursor-pointer hover:text-[#0E76A8] hover:-translate-y-1 transition" onClick={() => onSocialClick('https://www.linkedin.com/in/eliott-dagostinoz/')}/>
              </div>
            </div>
            <div className="p-6 rounded-xl border border-white/10">
              <h3 className="text-xl font-bold mb-2">{t('contact.mail')}</h3>
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="relative">
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-green-500 focus:bg-green-500/5"
                    placeholder={`${t('contact.name')}...`}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        name: e.target.value,
                      })
                    }
                  />
                </div>

                <div className="relative">
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-green-500 focus:bg-green-500/5"
                    placeholder="example@gmail.com"
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        email: e.target.value,
                      })
                    }
                  />
                </div>

                <div className="relative">
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-green-500 focus:bg-green-500/5"
                    placeholder={`${t('contact.message')}...`}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        message: e.target.value,
                      })
                    }
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-green-500 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)] cursor-pointer"
                >
                  Send Message
                </button>
              </form>
            </div>
           
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
