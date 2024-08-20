// https://dev.to/franklin030601/building-a-multi-language-app-with-react-js-2och
import React from "react";
import { useTranslation } from "react-i18next";
import { Suspense } from "react";

const MultiLanguage = () => {
  const { t } = useTranslation();
  return (
    <Suspense fallback="loading">
      <div className="mt-20">
        <h1 className="text-red-800 text-4xl font-bold mb-4">
          Multi Language implementation
        </h1>

        <div>
          <ul>
            <li>{t("title")}</li>
            <li>{t("label")}</li>
            <li>{t("about")}</li>
            <li>{t("home")}</li>
            <li>{t("hello", { name: "Bruce Wayne 🦇" })}</li>
          </ul>
        </div>
      </div>
    </Suspense>
  );
};

export default MultiLanguage;
