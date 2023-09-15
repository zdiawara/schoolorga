const PERSONNES = "/personnes";
const ORGANISATIONS = "/organisations";
const FONCTIONS = "/fonctions";
const TYPES_UNITES = "/types-unites";
const REF_FORMATIONS = "/ref-formations";

const MATIERES = "/matieres";
const CLASSES = "/classes";
const ETABLISSEMENTS = "/etablissements";

const ANNEES_SCOLAIRES = "/annees_scolaires";
const STUDENTS = "/students";

const EMPLOI_DU_TEMPS = "/emploi-du-temps";
const CONTROLES = "/controles";

export const LINKS = {
  personnes: {
    base: PERSONNES,
    view: (id: string) => `${PERSONNES}/${id}`,
    edit: (id: string) => `${PERSONNES}/${id}/edit`,
  },
  organisations: {
    base: ORGANISATIONS,
    view: (id: string) => `${ORGANISATIONS}/${id}`,
    edit: (id: string) => `${ORGANISATIONS}/${id}/edit`,
    create: `${ORGANISATIONS}/create`,
  },
  fonctions: {
    base: FONCTIONS,
  },
  types_unites: {
    base: TYPES_UNITES,
  },
  ref_formations: {
    base: REF_FORMATIONS,
  },
  classes: {
    base: CLASSES,
  },
  etablissements: {
    base: ETABLISSEMENTS,
  },
  matieres: {
    base: MATIERES,
  },
  annees_scolaires: {
    base: ANNEES_SCOLAIRES,
  },
  students: {
    base: STUDENTS,
    create: `${STUDENTS}/create`,
    view: (id: string) => `${STUDENTS}/${id}`,
  },

  emploi_du_temps: {
    base: EMPLOI_DU_TEMPS,
  },

  controles: {
    base: CONTROLES,
    create: `${CONTROLES}/create`,
    note: `${CONTROLES}/notes`,
  },
};
