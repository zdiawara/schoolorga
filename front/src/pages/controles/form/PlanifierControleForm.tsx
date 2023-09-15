import { FC } from "react";
import { Accordion, Card, Col, Form, Row, Table } from "react-bootstrap";
import { PageHeader } from "pages/common";
import {
  DatePicker,
  Select,
  TextInput,
} from "components";
import { WrapperProps, withForm } from "hoc";

export const PlanifierControleFormInputs = () => {
  return (
    <>
      <Accordion defaultActiveKey="0" className="bg-white" alwaysOpen>
        <Accordion.Item eventKey="0">
          <Accordion.Header className="mt-0">
            Information générale
          </Accordion.Header>
          <Accordion.Body>
            <Card body className="mb-0">
              <Row className="g-3">
                <Col sm={4}>
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
                <Col sm={4}>
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
                <Col sm={4}>
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
              </Row>
            </Card>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>

      <Card className="mt-3">
        <Card.Body className="p-0">
          <Table bordered>
            <thead className="bg-light text-black">
              <tr>
                <th></th>
                <th>Matière</th>
                <th>Date controle</th>
                <th>Heure début</th>
                <th>Heure fin</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>
                  <Form.Check type="switch" className="text-primary" />
                </td>
                <td>
                  <span className="text-primary">Mathématiques</span>
                </td>
                <td>
                  <DatePicker name="date_debut" useHookForm />
                </td>
                <td>
                  <TextInput name="heure_debut" placeholder="10:00" />
                </td>
                <td>
                  <TextInput name="heure_fin" placeholder="12:00" />
                </td>
              </tr>
              <tr>
                <td>
                  <Form.Check type="switch" className="text-primary" />
                </td>
                <td>
                  <span className="text-primary">Francais</span>
                </td>
                <td>
                  <DatePicker name="date_debut" useHookForm />
                </td>
                <td>
                  <TextInput name="heure_debut" placeholder="10:00" />
                </td>
                <td>
                  <TextInput name="heure_fin" placeholder="12:00" />
                </td>
              </tr>
              <tr>
                <td>
                  <Form.Check type="switch" className="text-primary" />
                </td>
                <td>
                  <span className="text-primary">Physique-Chimie</span>
                </td>
                <td>
                  <DatePicker name="date_debut" useHookForm />
                </td>
                <td>
                  <TextInput name="heure_debut" placeholder="10:00" />
                </td>
                <td>
                  <TextInput name="heure_fin" placeholder="12:00" />
                </td>
              </tr>
            </tbody>
          </Table>
        </Card.Body>
      </Card>
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
      <PlanifierControleFormInputs />
    </>
  );
};

// Sous groupe == Saka ==> Nombre max de scouts
// Nom du saka ==> Toto
// Affecter 5 scoutes
// Il reste 27
// Créer un autre saka

export const PlanifierControleForm = withForm(FormContainer);
