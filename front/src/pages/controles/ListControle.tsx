import { useQuery } from "@tanstack/react-query";
import { Columns, ListResult, PageHeader } from "pages/common";
import { FC, useState } from "react";
import { Button } from "react-bootstrap";
import { QUERY_KEY } from "utils/constants";
import { ResourceAction } from "types/common.type";
import { ClasseResource } from "types/academie.type";

const ListControle: FC = () => {
  const { data: results } = useQuery({
    queryKey: [QUERY_KEY.classes],
    queryFn: () =>
      Promise.resolve({
        data: [
          {
            id: "1",
            nom: "Compo. 1er trimestre 2022",
            type: "Composition",
          },

          {
            id: "2",
            nom: "Devoir 1 - Trimestre 1",
            type: "Devoir",
          },

          {
            id: "3",
            nom: "Devoir 2 - Trimestre 1",
            type: "Devoir",
          },

          {
            id: "4",
            nom: "Compo. 1 - Trimestre 1",
            type: "Composition",
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
      label: "Nom controle",
      Cell: ({ nom }) => {
        return <span className="text-primary fw-semibold">{nom}</span>;
      },
    },
    {
      name: "type",
      label: "Type controle",
    },

    {
      name: "actions",
      label: "Actions",
      headClassName: "text-end",
      Cell: (selected) => {
        return (
          <div className="text-end">
            <Button className="action-icon" variant="link">
              <i className="uil-edit-alt fs-4 text-primary"></i>
            </Button>
            <Button className="action-icon" variant="link">
              <i className=" uil-trash-alt fs-4 text-primary"></i>
            </Button>
          </div>
        );
      },
    },
  ];

  return (
    <>
      <PageHeader.List
        title="Contrôles"
        subtitle="Consulter et gérer les controles (examen, devoir ...)"
        className="my-4"
        right={
          <Button onClick={() => setAction({ code: "create" })}>
            Planifier un controle
          </Button>
        }
      />
      <ListResult.Container isLoading={false}>
        <ListResult.Table<any> columns={columns} data={results?.data || []} />
      </ListResult.Container>
      {/*       {action && (
        <AnneeScolaireModal
          closeModal={() => setAction(undefined)}
          selected={action.selected}
        />
      )} */}
    </>
  );
};

export default ListControle;
