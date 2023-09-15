import { FC } from "react";
import { personneApi } from "api";
import { PlanifierControleForm } from "./form/PlanifierControleForm";

const PlanifierControle: FC = () => {
  const create = (input: any) => {
    return Promise.resolve();
  };
  return (
    <PlanifierControleForm
      onSave={create}
      title="Ajouter un élève"
      defaultValues={{ type: { value: "adulte" } }}
    />
  );
};

export default PlanifierControle;
