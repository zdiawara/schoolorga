import { useQuery } from "@tanstack/react-query";
import { Columns, ListResult, PageHeader } from "pages/common";
import { FC, useState } from "react";
import { Accordion, Button, Card, Col, Row } from "react-bootstrap";
import { QUERY_KEY } from "utils/constants";
import { ResourceAction } from "types/common.type";
import { EtablissementResource } from "types/academie.type";
import { EtablissementModal } from "./EtablissementModal";
import { View } from "components";

const ListEtablissement: FC = () => {
  const { data: results } = useQuery({
    queryKey: [QUERY_KEY.classes],
    queryFn: () =>
      Promise.resolve({
        data: [
          {
            id: "1",
            classe: "Cinquième",
            frais: "10 000 frs",
            effectif: "20",
          },
          {
            id: "2",
            classe: "Sixième",
            frais: "20 000 frs",
            effectif: "30",
          },
        ],
      }),
  });

  const [action, setAction] = useState<
    ResourceAction<EtablissementResource> | undefined
  >();

  const columns: Columns<any>[] = [
    {
      name: "classe",
      label: "Classe",
      Cell: ({ classe }) => {
        return <span className="text-primary fw-semibold">{classe}</span>;
      },
    },
    {
      name: "frais",
      label: "Frais de scolarité",
    },
    {
      name: "effectif",
      label: "Effectif maximum",
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
        title="Etablissements"
        subtitle="Consulter et gérer les établissements sclaires"
        className="my-4"
        right={
          <Button onClick={() => setAction({ code: "create" })}>
            Ajouter un établissement
          </Button>
        }
      />

      <Accordion defaultActiveKey="0" className="bg-white">
        <Accordion.Item eventKey="0">
          <Accordion.Header className="mt-0">Evangélique 1</Accordion.Header>
          <Accordion.Body>
            <Card body>
              <Row>
                <Col>
                  <View.Item label="Nom">Evangélique 1</View.Item>
                </Col>
                <Col>
                  <View.Item label="Code">0911</View.Item>
                </Col>
                <Col>
                  <View.Item label="Adresse">Près du petit marché</View.Item>
                </Col>
              </Row>
            </Card>
            <ListResult.Container isLoading={false}>
              <ListResult.Table<any>
                columns={columns}
                data={results?.data || []}
              />
            </ListResult.Container>
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="1">
          <Accordion.Header className="mt-0">Evangélique 2</Accordion.Header>
          <Accordion.Body>
            <Card body>
              <Row>
                <Col>
                  <View.Item label="Nom">Evangélique 1</View.Item>
                </Col>
                <Col>
                  <View.Item label="Code">0911</View.Item>
                </Col>
                <Col>
                  <View.Item label="Adresse">Près du petit marché</View.Item>
                </Col>
              </Row>
            </Card>
            <ListResult.Container isLoading={false}>
              <ListResult.Table<any>
                columns={columns}
                data={results?.data || []}
              />
            </ListResult.Container>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
      {action && (
        <EtablissementModal
          closeModal={() => setAction(undefined)}
          selected={action.selected}
        />
      )}
    </>
  );
};

export default ListEtablissement;
