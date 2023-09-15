import { HookModalForm, SelectPersonne, TextInput, View } from "components";
import { WrapperV2Props, withMutationForm } from "hoc";
import { FC } from "react";
import { Button, Card, Col, Form, Row } from "react-bootstrap";
import { typeOrganisationApi } from "api";
import { useQueryClient } from "@tanstack/react-query";
import { QUERY_KEY } from "utils/constants";
import { classeConverter, classeSchema } from "./etablissementUtils";
import { EtablissementResource } from "types/academie.type";

/**
 * Formulaire d'ajout et de modification d'une classe
 * @param props
 * @returns
 */
const FormContainer: FC<WrapperV2Props> = (props) => {
  return (
    <HookModalForm
      {...props}
      modalBodyClassName="bg-light p-3"
      onClose={props.onExit}
    >
      <Row className="g-2">
        <Col sm={6}>
          <TextInput label="Nom" name="nom" isRequired />
        </Col>
        <Col sm={6}>
          <SelectPersonne label="Directeur" name="directeur" />
        </Col>
        <Col sm={12}>
          <TextInput label="Adresse" name="adresse" />
        </Col>
      </Row>

      <Card className="mt-4">
        <Card.Body className="p-0">
          <table className="table mb-0">
            <thead className="text-black bg-light">
              <tr>
                <th>Classe</th>
                <th>Effectif maximum</th>
                <th>Frais de scolarité</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>
                  <Form.Group className="position-relative">
                    <Form.Check
                      type="switch"
                      name="sixieme"
                      label="Sixième (6°)"
                    />
                  </Form.Group>
                </td>
                <td>
                  <TextInput name="effectif" placeholder="effectif maximum" />
                </td>
                <td>
                  <TextInput name="frais" placeholder="frais de scolarité" />
                </td>
              </tr>
              <tr>
                <td>
                  <Form.Group className="position-relative">
                    <Form.Check
                      type="switch"
                      name="cinquieme"
                      label="Cinquieme (5°)"
                    />
                  </Form.Group>
                </td>
                <td>
                  <TextInput name="effectif" placeholder="effectif maximum" />
                </td>
                <td>
                  <TextInput name="frais" placeholder="frais de scolarité" />
                </td>
              </tr>
              <tr>
                <td>
                  <Form.Group className="position-relative">
                    <Form.Check
                      type="switch"
                      name="quatrieme"
                      label="Quatrème (4°)"
                    />
                  </Form.Group>
                </td>
                <td>
                  <TextInput name="effectif" placeholder="effectif maximum" />
                </td>
                <td>
                  <TextInput name="frais" placeholder="frais de scolarité" />
                </td>
              </tr>
            </tbody>
          </table>
        </Card.Body>
      </Card>
    </HookModalForm>
  );
};

const EtablissementForm = withMutationForm(FormContainer, classeSchema);

type EtablissementModalProps = {
  closeModal: () => void;
  selected?: EtablissementResource;
};

/**
 * Creer ou modifier une classe
 * @param param0
 * @returns
 */
export const EtablissementModal: FC<EtablissementModalProps> = ({
  closeModal,
  selected,
}) => {
  const query = useQueryClient();

  const save = (data: Record<string, any>) => {
    const body = classeConverter.toBody(data);
    if (selected?.id) {
      return typeOrganisationApi.update(selected.id, body);
    }
    return typeOrganisationApi.create(body);
  };

  const onSuccess = () => {
    query.invalidateQueries([QUERY_KEY.classes]);
    closeModal();
  };

  return (
    <EtablissementForm
      onSave={save}
      title={`${selected?.id ? "Modifier" : "Ajouter"} un établissement`}
      defaultValues={selected?.id ? classeConverter.toInput(selected) : {}}
      onSuccess={onSuccess}
      onExit={closeModal}
      modalProps={{
        animation: false,
        size: "lg",
      }}
    />
  );
};
