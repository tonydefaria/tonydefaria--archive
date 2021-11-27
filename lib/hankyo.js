// Hankyo

// Data EN
import dataProjectEN from "../data/en/project.json"

// Galleries
import dataGalleryIndexEN from "../data/en/galleries/index.json"
import dataGallery00001EN from "../data/en/galleries/00001.json"

export default class hankyo {
  static data(lang) {
    switch (lang) {
      case "en": { return {...dataProjectEN} }
      default: { return {...dataProjectEN} }
    }
  }

  static dataGalleryIndex(lang) {
    switch (lang) {
      case "en": { return {...dataGalleryIndexEN} }
      default: { return {...dataGalleryIndexEN} }
    }
  }

  static dataGallery00001(lang) {
    switch (lang) {
      case "en": { return {...dataGallery00001EN} }
      default: { return {...dataGallery00001EN} }
    }
  }
}
