import { DatePicker, HookModalForm, TextInput } from "components";
import { WrapperV2Props, withMutationForm } from "hoc";
import { FC } from "react";
import { Col, Row } from "react-bootstrap";
import { typeOrganisationApi } from "api";
import { useQueryClient } from "@tanstack/react-query";
import { QUERY_KEY } from "utils/constants";
import { classeConverter, classeSchema } from "./anneeScolaireUtils";
import { ClasseResource } from "types/academie.type";

/**
 * Formulaire d'ajout et de modification d'une année scolaire
 * @param props
 * @returns
 */
const Form: FC<WrapperV2Props> = (props) => {
  return (
    <HookModalForm
      {...props}
      modalBodyClassName="bg-light p-3"
      onClose={props.onExit}
    >
      <Row className="g-2">
        <Col xs={12}>
          <TextInput label="Nom" name="nom" isRequired />
        </Col>
        <Col sm={6}>
          <DatePicker useHookForm label="Date début" name="date_debut" />
        </Col>
        <Col sm={6}>
          <DatePicker useHookForm label="Date fin" name="date_fin" />
        </Col>
      </Row>
    </HookModalForm>
  );
};

const AnneeScolaireForm = withMutationForm(Form, classeSchema);

type AnneeScolaireModalProps = {
  closeModal: () => void;
  selected?: ClasseResource;
};

/**
 * Creer ou modifier une année scolaire
 * @param param0
 * @returns
 */
export const AnneeScolaireModal: FC<AnneeScolaireModalProps> = ({
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
    <AnneeScolaireForm
      onSave={save}
      title={`${selected?.id ? "Modifier" : "Ajouter"} une année scolaire`}
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
