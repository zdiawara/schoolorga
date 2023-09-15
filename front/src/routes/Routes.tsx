import { Suspense, lazy } from "react";
import {
  Outlet,
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import { Layout } from "layout";
import { LINKS } from "utils";
import { ClasseOutlet, PersonneOutlet } from "./FilterOutlet";

const loading = () => <div className=""></div>;

export const Loadable = (Component: any) => (props: any) =>
  (
    <Suspense fallback={loading()}>
      <Component {...props} />
    </Suspense>
  );

const ListClasse = Loadable(
  lazy(() => import("pages/academies/classes/ListClasse"))
);

const ListEtablissement = Loadable(
  lazy(() => import("pages/academies/etablissements/ListEtablissement"))
);

const ListMatiere = Loadable(
  lazy(() => import("pages/academies/matieres/ListMatiere"))
);

const ListAnneeScolaire = Loadable(
  lazy(() => import("pages/academies/annes-scolaires/ListAnneeScolaire"))
);

const ListStudent = Loadable(lazy(() => import("pages/students/ListPersonne")));
const CreateStudent = Loadable(
  lazy(() => import("pages/students/CreatePersonne"))
);

const EmploiDuTemps = Loadable(
  lazy(() => import("pages/emploi-du-temps/EmploiDuTemps"))
);

const ListControle = Loadable(
  lazy(() => import("pages/controles/ListControle"))
);
const PlanifierControle = Loadable(
  lazy(() => import("pages/controles/PlanifierControle"))
);
const NoteControle = Loadable(
  lazy(() => import("pages/controles/NoteControle"))
);

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path={LINKS.classes.base} element={<ClasseOutlet />}>
        <Route index element={<ListClasse />} />
      </Route>
      <Route path={LINKS.etablissements.base} element={<ClasseOutlet />}>
        <Route index element={<ListEtablissement />} />
      </Route>
      <Route path={LINKS.etablissements.base} element={<Outlet />}>
        <Route index element={<ListEtablissement />} />
      </Route>
      <Route path={LINKS.matieres.base} element={<Outlet />}>
        <Route index element={<ListMatiere />} />
      </Route>
      <Route path={LINKS.annees_scolaires.base} element={<Outlet />}>
        <Route index element={<ListAnneeScolaire />} />
      </Route>

      <Route path={LINKS.students.base} element={<PersonneOutlet />}>
        <Route index element={<ListStudent />} />
        <Route path={LINKS.students.create} element={<CreateStudent />} />
      </Route>

      <Route path={LINKS.emploi_du_temps.base} element={<Outlet />}>
        <Route index element={<EmploiDuTemps />} />
      </Route>

      <Route path={LINKS.controles.base} element={<Outlet />}>
        <Route index element={<ListControle />} />
        <Route path={LINKS.controles.create} element={<PlanifierControle />} />
        <Route path={LINKS.controles.note} element={<NoteControle />} />
      </Route>
    </Route>
  )
);
