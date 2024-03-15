import {
  TranslocoTestingModule,
  TranslocoTestingOptions
} from "@ngneat/transloco";
import en from "../assets/i18n/en.json";
import fr from "../assets/i18n/de.json";
import es from "../assets/i18n/es.json";

export function getTranslocoModule(options: TranslocoTestingOptions = {}) {
  return TranslocoTestingModule.forRoot({
    langs: { fr, en, es },
    translocoConfig: {
      availableLangs: ["fr", "en", "es"],
      defaultLang: "es"
    },
    preloadLangs: true,
    ...options
  });
}
