export interface Country{
    name: {
      common: string
      official: string
      nativeName: {
        rus: {
          official: string
          common: string
        }
        uzb: {
          official: string
          common: string
        }
      }
    }
    tld: Array<string>
    cca2: string
    ccn3: string
    cca3: string
    cioc: string
    independent: boolean
    status: string
    unMember: boolean
    currencies: {
      UZS: {
        name: string
        symbol: string
      }
    }
    idd: {
      root: string
      suffixes: Array<string>
    }
    capital: Array<string>
    altSpellings: Array<string>
    region: string
    subregion: string
    languages: {
      rus: string
      uzb: string
    }
    translations: {
      ara: {
        official: string
        common: string
      }
      bre: {
        official: string
        common: string
      }
      ces: {
        official: string
        common: string
      }
      cym: {
        official: string
        common: string
      }
      deu: {
        official: string
        common: string
      }
      est: {
        official: string
        common: string
      }
      fin: {
        official: string
        common: string
      }
      fra: {
        official: string
        common: string
      }
      hrv: {
        official: string
        common: string
      }
      hun: {
        official: string
        common: string
      }
      ita: {
        official: string
        common: string
      }
      jpn: {
        official: string
        common: string
      }
      kor: {
        official: string
        common: string
      }
      nld: {
        official: string
        common: string
      }
      per: {
        official: string
        common: string
      }
      pol: {
        official: string
        common: string
      }
      por: {
        official: string
        common: string
      }
      rus: {
        official: string
        common: string
      }
      slk: {
        official: string
        common: string
      }
      spa: {
        official: string
        common: string
      }
      srp: {
        official: string
        common: string
      }
      swe: {
        official: string
        common: string
      }
      tur: {
        official: string
        common: string
      }
      urd: {
        official: string
        common: string
      }
      zho: {
        official: string
        common: string
      }
    }
    latlng: Array<number>
    landlocked: boolean
    borders: Array<string>
    area: number
    demonyms: {
      eng: {
        f: string
        m: string
      }
      fra: {
        f: string
        m: string
      }
    }
    flag: string
    maps: {
      googleMaps: string
      openStreetMaps: string
    }
    population: number
    gini: {
      "2003": number
    }
    fifa: string
    car: {
      signs: Array<string>
      side: string
    }
    timezones: Array<string>
    continents: Array<string>
    flags: {
      png: string
      svg: string
      alt: string
    }
    coatOfArms: {
      png: string
      svg: string
    }
    startOfWeek: string
    capitalInfo: {
      latlng: Array<number>
    }
    postalCode: {
      format: string
      regex: string
    }
  }
  