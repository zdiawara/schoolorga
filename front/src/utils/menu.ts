import { MenuItemType } from "../appConstants";
import { LINKS } from "./links";

export const MENU_ITEMS = [
  {
    key: "events",
    label: "Evenements",
    isTitle: false,
    url: "/",
  },

  {
    key: "eleves",
    label: "Eleves",
    isTitle: true,
  },

  {
    key: "eleves-inscription",
    label: "Inscriptions",
    isTitle: false,
    url: LINKS.students.create,
  },
  {
    key: "eleve-rechercher",
    label: "Rechercher",
    isTitle: false,
    url: LINKS.students.base,
  },
  {
    key: "eleve-notes",
    label: "Notes",
    isTitle: false,
    url: "/",
  },
  {
    key: "eleves-bulletins",
    label: "Bulletins",
    isTitle: false,
    url: "/",
  },
  {
    key: "rh",
    label: "Resources humaines",
    isTitle: true,
    url: "/",
  },
  {
    key: "personnels",
    label: "Personnels",
    isTitle: false,
    url: "/",
  },
  {
    key: "salaire",
    label: "Gestion des salaires",
    isTitle: false,
    url: "/",
  },

  {
    key: "frais",
    label: "Gestion des frais",
    isTitle: false,
    url: "/",
  },
  {
    key: "emargement",
    label: "Emargements",
    isTitle: true,
  },

  {
    key: "eleve",
    label: "Eleves",
    isTitle: false,
    url: "/",
  },
  {
    key: "personnel",
    label: "Personnels",
    isTitle: false,
    url: "/",
  },
  {
    key: "enseignant",
    label: "Enseignants",
    isTitle: false,
    url: "/",
  },
  {
    key: "controles",
    label: "Controles",
    isTitle: true,
  },
  {
    key: "all-controle",
    label: "Tous les controles",
    isTitle: false,
    url: LINKS.controles.base,
  },
  {
    key: "planin",
    label: "Planifier un controle",
    isTitle: false,
    url: LINKS.controles.create,
  },
  {
    key: "note-controle",
    label: "Note controles",
    isTitle: false,
    url: LINKS.controles.note,
  },
  {
    key: "academie",
    label: "Academie",
    isTitle: true,
  },
  {
    key: "matiere",
    label: "Gestion matières",
    isTitle: false,
    url: LINKS.matieres.base,
  },
  {
    key: "classe",
    label: "Gestion classes",
    isTitle: false,
    url: LINKS.classes.base,
  },
  {
    key: "etablissements",
    label: "Etablissements",
    isTitle: false,
    url: LINKS.etablissements.base,
  },

  {
    key: "annee",
    label: "Année scolaire",
    isTitle: false,
    url: LINKS.annees_scolaires.base,
  },

  {
    key: "emplois",
    label: "Emplois du temps",
    isTitle: false,
    url: LINKS.emploi_du_temps.base,
  },
  {
    key: "rapport",
    label: "Reporting",
    isTitle: true,
  },
  {
    key: "repport",
    label: "Rapports",
    isTitle: false,
    url: "/",
  },
];

export const getMenuItems = () => {
  // NOTE - You can fetch from server and return here as well
  return MENU_ITEMS;
};

export const findAllParent = (
  menuItems: MenuItemType[],
  menuItem: MenuItemType
): string[] => {
  let parents: string[] = [];
  const parent = findMenuItem(menuItems, menuItem["parentKey"]);

  if (parent) {
    parents.push(parent["key"]);
    if (parent["parentKey"])
      parents = [...parents, ...findAllParent(menuItems, parent)];
  }

  return parents;
};

export const findMenuItem = (
  menuItems: MenuItemType[] | undefined,
  menuItemKey: MenuItemType["key"] | undefined
): MenuItemType | null => {
  if (menuItems && menuItemKey) {
    for (let i = 0; i < menuItems.length; i++) {
      if (menuItems[i].key === menuItemKey) {
        return menuItems[i];
      }
      const found = findMenuItem(menuItems[i].children, menuItemKey);
      if (found) return found;
    }
  }
  return null;
};
