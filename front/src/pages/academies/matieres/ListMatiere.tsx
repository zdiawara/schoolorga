import { useQuery } from "@tanstack/react-query";
import { Columns, ListResult, PageHeader } from "pages/common";
import { FC, useState } from "react";
import { Button } from "react-bootstrap";
import { QUERY_KEY } from "utils/constants";
import { ResourceAction } from "types/common.type";
import { ClasseModal } from "./MatiereModal";
import { ClasseResource, MatiereResource } from "types/academie.type";

const ListMatiere: FC = () => {
  const { data: results } = useQuery({
    queryKey: [QUERY_KEY.classes],
    queryFn: () =>
      Promise.resolve({
        data: [
          {
            id: "r",
            nom: "Mathématiques",
            code: "maths",
            abreviation: "Maths",
          },
          {
            id: "d",
            nom: "Physique-Chimie",
            code: "pc",
            abreviation: "PC",
          },
          {
            id: "13",
            nom: "Anglais",
            code: "ang",
            abreviation: "Ang",
          },
          {
            id: "fr",
            nom: "Francais",
            code: "fr",
            abreviation: "FR",
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
      name: "abreviation",
      label: "Abréviation",
    },
    {
      name: "code",
      label: "Code",
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
        title="Matières"
        subtitle="Consulter et gérer les matières"
        className="my-4"
        right={
          <Button onClick={() => setAction({ code: "create" })}>
            Ajouter une matière
          </Button>
        }
      />
      <ListResult.Container isLoading={false}>
        <ListResult.Table<MatiereResource>
          columns={columns}
          data={results?.data || []}
        />
      </ListResult.Container>
      {action && (
        <ClasseModal
          closeModal={() => setAction(undefined)}
          selected={action.selected}
        />
      )}
    </>
  );
};

export default ListMatiere;
