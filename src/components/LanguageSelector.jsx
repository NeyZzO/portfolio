import {FlagIcon} from "react-flag-kit";
import { useTranslation } from "react-i18next";

export default function LanguageSelector() {
    const { i18n } = useTranslation();

    const changeLanguage = () => {
        i18n.changeLanguage(i18n.language == "en" ? "fr" : "en");
    }
    return (
        <a className="cursor-pointer" onClick={changeLanguage} >
            {i18n.language == "en" ? <FlagIcon code="FR" /> : <FlagIcon code="GB" />}
        </a>
    );
}