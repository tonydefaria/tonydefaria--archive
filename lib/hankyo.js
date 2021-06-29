// Hankyo

// Data EN
import dataProjectEN from "../data/en/project.json"

// Data DE
import dataProjectDE from "../data/de/project.json"

export default class hankyo {
  static data(lang) {
    switch (lang) {
      case "en": {
        return {...dataProjectEN}
      }
      case "de": {
        return {...dataProjectDE}
      }
      default: {
        return {...dataProjectEN}
      }
    }
  }
}
