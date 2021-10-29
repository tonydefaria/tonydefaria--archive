// Hankyo

// Data EN
import dataProjectEN from "../data/en/project.json"

export default class hankyo {
  static data(lang) {
    switch (lang) {
      case "en": {
        return {...dataProjectEN}
      }
      default: {
        return {...dataProjectEN}
      }
    }
  }
}
