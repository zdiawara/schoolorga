import { PersonneResource } from "./personne.type";
import { Filter } from "./request.type";

export type ClasseResource = {
  id: string;
  nom: string;
  code: string;
};
export interface ClasseFilter extends Filter {
  search?: string;
}

export type MatiereResource = {
  id: string;
  nom: string;
  code: string;
};

export type AnneeScolaireResource = {
  id: string;
  nom: string;
  debut: string;
  fin?: string;
};

export type EtablissementResource = {
  id: string;
  nom: string;
  code: string;
  directeur?: PersonneResource;
};
