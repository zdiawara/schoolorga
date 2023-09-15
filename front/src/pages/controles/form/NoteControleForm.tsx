import { FC } from "react";
import { Accordion, Card, Col, Row, Stack } from "react-bootstrap";
import { Columns, ListResult, PageHeader } from "pages/common";
import { Select, TextInput } from "components";
import { WrapperProps, withForm } from "hoc";
import { useQuery } from "@tanstack/react-query";

export const NoteControleFormInputs = () => {
  const { data: personnes, isLoading } = useQuery({
    queryKey: ["personnes", {}],
    keepPreviousData: true,
    queryFn: () => {
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
            code: "8999IJ",
            classe: "Teminale",
            date_naissance: "20/01/2019",
            lieu_naissance: "Ouagadougou",
          },
          {
            id: "19",
            nom: "Ouattara",
            prenom: "Alassance",
            code: "19920P",
            classe: "Teminale",
            date_naissance: "20/01/2019",
            lieu_naissance: "Ouagadougou",
          },
          {
            id: "87",
            nom: "Diallo",
            prenom: "Julien",
            code: "298KK",
            classe: "Teminale",
            date_naissance: "20/01/2019",
            lieu_naissance: "Ouagadougou",
          },
          {
            id: "20",
            nom: "Sama",
            prenom: "Stephane",
            code: "POOD90",
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
          <Stack direction="horizontal" className="align-items-center">
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
            <span className="text-primary fw-semibold">
              {personne.prenom} {personne.nom}
            </span>
          </Stack>
        );
      },
    },

    {
      name: "date_naissance",
      label: "Date de naissance",
    },

    {
      name: "code",
      label: "Code",
    },

    {
      name: "note",
      label: "Note",
      Cell: ({ id }, i) => {
        return (
          <>
            <TextInput name={`note.${i}`} placeholder="Note obtenue" />
          </>
        );
      },
    },
  ];

  return (
    <>
      <Accordion defaultActiveKey="0" className="bg-white mb-3" alwaysOpen>
        <Accordion.Item eventKey="0">
          <Accordion.Header className="mt-0">
            Information générale
          </Accordion.Header>
          <Accordion.Body>
            <Card body className="mb-0">
              <Row className="g-3">
                <Col sm={3}>
                  <Select
                    name="etablissement"
                    label="Etablissement"
                    isRequired
                    initialOptions={[
                      { label: "Evangelique 1", value: "1" },
                      { label: "Evangelique 2", value: "3" },
                    ]}
                  />
                </Col>
                <Col sm={3}>
                  <Select
                    name="classe"
                    label="Classe"
                    initialOptions={[
                      { label: "Sixième", value: "1" },
                      { label: "Cinquième", value: "3" },
                      { label: "Quatrième", value: "2" },
                    ]}
                    isRequired
                  />
                </Col>
                <Col sm={3}>
                  <Select
                    name="type"
                    label="Type controle"
                    initialOptions={[
                      { label: "Devoir 1 - Trimestre 1", value: "dev1" },
                      { label: "Devoir 2 - Trimestre 1", value: "dev2" },
                      { label: "Devoir 3 - Trimestre 1", value: "dev3" },
                    ]}
                    isRequired
                  />
                </Col>
                <Col sm={3}>
                  <Select
                    name="matiere"
                    label="Matière"
                    initialOptions={[
                      { label: "Mathématiques", value: "dev1" },
                      { label: "Francais", value: "dev2" },
                      { label: "Physique Chimie", value: "dev3" },
                    ]}
                    isRequired
                  />
                </Col>
              </Row>
            </Card>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>

      <ListResult.Container isLoading={isLoading}>
        <ListResult.Table<any> columns={columns} data={personnes?.data || []} />
      </ListResult.Container>
    </>
  );
};
const FormContainer: FC<WrapperProps> = ({
  renderButtons,
  title,
  subtitle,
}) => {
  return (
    <>
      <PageHeader.List
        title={title!}
        subtitle={subtitle}
        right={renderButtons()}
        className="my-4"
      />
      <NoteControleFormInputs />
    </>
  );
};

// Sous groupe == Saka ==> Nombre max de scouts
// Nom du saka ==> Toto
// Affecter 5 scoutes
// Il reste 27
// Créer un autre saka

export const NoteControleForm = withForm(FormContainer);
