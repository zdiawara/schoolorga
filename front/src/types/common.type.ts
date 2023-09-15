export type ResourceAction<T> = {
  code: "create" | "edit";
  selected?: T;
};
