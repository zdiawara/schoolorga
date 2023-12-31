export const QUERY_KEY = {
  personnes: "personnes",
  organisations: "organisations",
  attributions: "attributions",
  attribution_active: "attribution_active",
  fonctions: "fonctions",
  refFormations: "ref-formations",
  typesUnites: "types-unites",
  natures: "natures",

  classes: "classes",
};

export const MASK = {
  telephone: [/\d/, /\d/, " ", /\d/, /\d/, " ", /\d/, /\d/, " ", /\d/, /\d/],
  number: [/^\d+/],
};

export const NATURE = {
  unite: "unite",
  groupe: "groupe",
  region: "region",
  national: "national",
};
