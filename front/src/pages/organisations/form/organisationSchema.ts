import * as yup from "yup";

export const organisationSchema = yup.object({
  nom: yup.string().required(),
  nature: yup.object().required(),
  ville: yup.object().required(),
});

export const organisationMembreSchema = yup.object({
  personne: yup.object().required(),
  fonction: yup.object().required(),
  date_debut: yup.date().required().nullable(),
});
