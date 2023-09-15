import { useQuery } from "@tanstack/react-query";
import { Columns, ListResult, PageHeader } from "pages/common";
import { FC, useState } from "react";
import { Button } from "react-bootstrap";
import { QUERY_KEY } from "utils/constants";
import { ResourceAction } from "types/common.type";
import { AnneeScolaireModal } from "./AnneeScolaireModal";
import { ClasseResource } from "types/academie.type";

const ListMatiere: FC = () => {
  const { data: results } = useQuery({
    queryKey: [QUERY_KEY.classes],
    queryFn: () =>
      Promise.resolve({
        data: [
          {
            id: "1",
            nom: "2021-2022",
            date_debut: "04/09/2021",
            date_fin: "04/09/2022",
          },
          {
            id: "2",
            nom: "2022-2023",
            date_debut: "04/09/2022",
            date_fin: "04/09/2023",
          },
          {
            id: "3",
            nom: "2023-2024",
            date_debut: "04/09/2023",
            date_fin: "04/09/2024",
          },
        ],
      }),
  });

  const [action, setAction] = useState<
    ResourceAction<ClasseResource> | undefined
  >();

  const columns: Columns<ClasseResource>[] = [
    {
      name: "nom",
      label: "Nom",
      Cell: ({ nom }) => {
        return <span className="text-primary fw-semibold">{nom}</span>;
      },
    },
    {
      name: "date_debut",
      label: "Date de début",
    },
    {
      name: "date_fin",
      label: "Date de fin",
    },
    {
      name: "actions",
      label: "Actions",
      headClassName: "table-action",
      Cell: (selected) => {
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
        title="Année scolaire"
        subtitle="Consulter et gérer les années scolaires"
        className="my-4"
        right={
          <Button onClick={() => setAction({ code: "create" })}>
            Créer une année scolaire
          </Button>
        }
      />
      <ListResult.Container isLoading={false}>
        <ListResult.Table<any> columns={columns} data={results?.data || []} />
      </ListResult.Container>
      {action && (
        <AnneeScolaireModal
          closeModal={() => setAction(undefined)}
          selected={action.selected}
        />
      )}
    </>
  );
};

export default ListMatiere;
