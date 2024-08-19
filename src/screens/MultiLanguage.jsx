// https://dev.to/franklin030601/building-a-multi-language-app-with-react-js-2och
import React from "react";
import { useTranslation } from "react-i18next";
import { LANGUAGES } from "../lang/languages";
import i18n from "../lang/i18n";
import { Suspense } from "react";

const MultiLanguage = () => {
  const { t } = useTranslation();
  const onChangeLang = (e) => {
    const lang_code = e.target.value;
    i18n.changeLanguage(lang_code);
  };
  return (
    <Suspense fallback="loading">
      <div className="mt-20">
        <h1 className="text-red-800 text-4xl font-bold mb-4">
          Multi Language implementation
        </h1>
        <div>
          <select defaultValue={i18n.language} onChange={onChangeLang}>
            {LANGUAGES.map(({ code, label }) => (
              <option key={code} value={code}>
                {label}
              </option>
            ))}
          </select>
        </div>
        <div>
          <ul>
            <li>{t("title")}</li>
            <li>{t("label")}</li>
            <li>{t("about")}</li>
            <li>{t("home")}</li>
          </ul>
        </div>
      </div>
    </Suspense>
  );
};

export default MultiLanguage;
