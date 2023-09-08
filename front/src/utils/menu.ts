import { MenuItemType } from "../appConstants";

export const MENU_ITEMS = [
  {
    key: "events",
    label: "Evenements",
    isTitle: false,
    url: "/",
  },
  {
    key: "personnes",
    label: "Elèves",
    isTitle: false,
    url: "/",
    children: [
      {
        key: "eleves-inscription",
        label: "Inscriptions",
        isTitle: false,
        url: "/",
      },
      {
        key: "eleve-recherche",
        label: "Recherche",
        isTitle: false,
        url: "/",
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
    ],
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
    key: "emplois",
    label: "Emplois du temps",
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
    isTitle: false,
    url: "/",
    children: [
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
    ],
  },
  {
    key: "controle",
    label: "Contrôles",
    isTitle: false,
    url: "/",
    children: [
      {
        key: "create",
        label: "Tous",
        isTitle: false,
        url: "/",
      },
      {
        key: "planin",
        label: "Planifier",
        isTitle: false,
        url: "/",
      },
      {
        key: "assigner",
        label: "Résultat",
        isTitle: false,
        url: "/",
      },
    ],
  },
  {
    key: "academie",
    label: "Academie",
    isTitle: false,
    url: "/",
    children: [
      {
        key: "classe",
        label: "Classes",
        isTitle: false,
        url: "/",
      },
      {
        key: "matiere",
        label: "Matières",
        isTitle: false,
        url: "/",
      },
      {
        key: "assiger",
        label: "Assignement",
        isTitle: false,
        url: "/",
      },
      {
        key: "annee",
        label: "Année scolaire",
        isTitle: false,
        url: "/",
      },
    ],
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
