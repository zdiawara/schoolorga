import { useQuery } from "@tanstack/react-query";
import { Columns, ListResult, PageHeader } from "pages/common";
import { FC, useState } from "react";
import { Badge, Button } from "react-bootstrap";
import { QUERY_KEY } from "utils/constants";
import { ResourceAction } from "types/common.type";
import { ClasseModal } from "./ClasseModal";
import { ClasseResource } from "types/academie.type";

const ListEtablissement: FC = () => {
  const { data: results } = useQuery({
    queryKey: [QUERY_KEY.classes],
    queryFn: () =>
      Promise.resolve({
        data: [
          {
            id: "r",
            nom: "Cinquième",
            code: "cinquieme",
            abreviation: "5°",
            matieres: [
              {
                nom: "Maths",
              },
              {
                nom: "PC",
              },
            ],
          },
          {
            id: "sixieme",
            nom: "Sixième",
            code: "sixiere",
            abreviation: "6°",
            matieres: [
              {
                nom: "Francais",
              },
              {
                nom: "Anglais",
              },
              {
                nom: "Histoire-géographie",
              },
            ],
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
      name: "maiteres",
      label: "Matieres",
      Cell: (selected) => {
        return (
          <>
            <Badge className="bg-secondary">Francais</Badge>&nbsp;
            <Badge className="bg-secondary">PC</Badge>&nbsp;
            <Badge className="bg-secondary">Maths</Badge>
          </>
        );
      },
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
        title="Classes"
        subtitle="Consulter et gérer les classes"
        className="my-4"
        right={
          <Button onClick={() => setAction({ code: "create" })}>
            Ajouter une classe
          </Button>
        }
      />
      {/* <PageFilter.Container>
        <Col sm={12}>
          <PageFilter.Search
            onChange={(v) => {
              //setFilter((prev) => ({ ...prev, search: v }));
            }}
            initialValue=""
          />
        </Col>
      </PageFilter.Container> */}
      <ListResult.Container isLoading={false}>
        <ListResult.Table<ClasseResource>
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

export default ListEtablissement;
