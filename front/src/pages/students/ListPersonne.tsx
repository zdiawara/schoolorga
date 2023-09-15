import { FC, useContext } from "react";
import { Button, ButtonGroup, Col, Stack } from "react-bootstrap";
import { Link } from "react-router-dom";
import {
  Columns,
  ICONS,
  ListResult,
  PageFilter,
  PageHeader,
} from "pages/common";
import { LINKS } from "utils";
import { useQuery } from "@tanstack/react-query";
import { PersonneFilter, RequestParam } from "types/request.type";
import { FilterContext } from "context/FIlterContext";

const ListPersonne: FC = () => {
  const { filter, setFilter } = useContext(FilterContext);
  const { etat, search } = filter as PersonneFilter;

  const { data: personnes, isLoading } = useQuery({
    queryKey: ["personnes", filter],
    keepPreviousData: true,
    queryFn: ({ queryKey }) => {
      const params = { ...(queryKey[1] as RequestParam) };
      params.etat = params.etat === "tous" ? null : params.etat;
      return Promise.resolve({
        data: [
          {
            id: "1",
            nom: "DIAWARA",
            prenom: "Zakaridia",
            code: "0302M",
            classe: "Cinquième",
            date_naissance: "20/01/2019",
            lieu_naissance: "Bobo dioulasso",
          },
          {
            id: "2",
            nom: "Traoré",
            prenom: "Moussa",
            code: "0302M",
            classe: "Teminale",
            date_naissance: "20/01/2019",
            lieu_naissance: "Ouagadougou",
          },
        ],
      });
    },
  });

  const columns: Columns<any>[] = [
    {
      name: "nom",
      label: "Nom",
      Cell: (personne: any, i) => {
        return (
          <Link
            to={LINKS.students.view(personne.id)}
            className="table-user d-flex"
          >
            <div className="avatar-sm me-2">
              {personne.photo ? (
                <img
                  src={personne.photo}
                  alt=""
                  className="rounded-circle"
                  style={{
                    width: "100%",
                    height: "100%",
                    textAlign: "center",
                    objectFit: "cover",
                    color: "transparent",
                    textIndent: "10000px",
                  }}
                />
              ) : (
                <span className="avatar-title bg-secondary-lighten text-secondary fs-4 rounded-circle">
                  {personne.prenom[0]}
                  {personne.nom[0]}
                </span>
              )}
            </div>
            <Stack>
              <span className="text-primary fw-semibold">
                {personne.prenom} {personne.nom}
              </span>
              <span className="text-muted text-capitalize">
                {personne.code}
              </span>
            </Stack>
          </Link>
        );
      },
    },
    {
      name: "classe",
      label: "Classe",
    },
    {
      name: "date_naissance",
      label: "Date nais.",
    },
    {
      name: "lieu_naissance",
      label: "Lieu nais.",
    },
    {
      name: "actions",
      label: "Actions",
      headClassName: "table-action",
      Cell: ({ id }) => {
        return (
          <>
            <Button
              className="action-icon"
              variant="link"
              //onClick={() => setAction({ code: "edit", selected })}
            >
              <i className="uil-edit-alt fs-4 text-primary"></i>
            </Button>
            <Button
              className="action-icon"
              variant="link"
              //onClick={() => setAction({ code: "edit", selected })}
            >
              <i className=" uil-trash-alt fs-4 text-primary"></i>
            </Button>
          </>
        );
      },
    },
  ];

  return (
    <>
      <PageHeader.List
        title="Elèves"
        subtitle="Consulter et gérer les élèves"
        icon={ICONS.personne}
        right={
          <Link to={LINKS.students.create} className="btn btn-primary">
            Ajouter élève
          </Link>
        }
        className="my-4"
      />

      <PageFilter.Container>
        <Col sm={4}>
          <PageFilter.Search
            onChange={(v) => {
              setFilter((prev: any) => ({ ...prev, search: v }));
            }}
            initialValue={search}
          />
        </Col>
        <Col>
          <div className="text-sm-end">
            <ButtonGroup>
              <Button
                variant={etat === "tous" ? "secondary" : "light"}
                onClick={() => setFilter((prev) => ({ ...prev, etat: "tous" }))}
              >
                Tous
              </Button>
              <Button
                variant={etat === "1" ? "secondary" : "light"}
                onClick={() => setFilter((prev) => ({ ...prev, etat: "1" }))}
              >
                Actif
              </Button>
              <Button
                variant={etat === "0" ? "secondary" : "light"}
                onClick={() => setFilter((prev) => ({ ...prev, etat: "0" }))}
              >
                Inactif
              </Button>
            </ButtonGroup>

            <Button variant="secondary" className="ms-2">
              <i className="uil-filter"></i> Filtre avancé
            </Button>
          </div>
        </Col>
      </PageFilter.Container>

      <ListResult.Container isLoading={isLoading}>
        <ListResult.Table<any> columns={columns} data={personnes?.data || []} />
      </ListResult.Container>
    </>
  );
};

export default ListPersonne;
