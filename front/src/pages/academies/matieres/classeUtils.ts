import { ClasseResource } from "types/academie.type";
import * as yup from "yup";

const toBody = (data: Record<string, any>) => {
  return {
    nom: data.nom,
  };
};
const toInput = (data: ClasseResource) => {
  return {
    id: data.id,
    nom: data.nom,
  };
};

export const classeConverter = {
  toBody,
  toInput,
};

export const classeSchema = yup.object({
  nom: yup.string().required(),
});
