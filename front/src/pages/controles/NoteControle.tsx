import { FC } from "react";
import { NoteControleForm } from "./form/NoteControleForm";

const NoteControle: FC = () => {
  const create = (input: any) => {
    return Promise.resolve();
  };
  return (
    <NoteControleForm onSave={create} title="Ajouter les notes d'un controle" />
  );
};

export default NoteControle;
