import { createContext, ReactNode, useContext, useState } from "react";
import { JobFormProps } from "../types/jobFom.types";

interface IFormsContextData {
  forms: JobFormProps[];
  addJobFormToArray: ((arg0: JobFormProps) => void) | undefined;
}

type FormsProviderProps = {
  children: ReactNode;
};

const addJobForm = (forms: JobFormProps[], formToAdd: JobFormProps) => {
  return [...forms, { ...formToAdd }]
}

export const FormsContext = createContext({} as IFormsContextData);

export function FormsProvider({ children }: FormsProviderProps) {
  const [forms, setForms] = useState<JobFormProps[]>([])

  function addJobFormToArray(formToAdd: JobFormProps) {
    setForms(addJobForm(forms, formToAdd))
  }

  return (
    <FormsContext.Provider value={{ forms, addJobFormToArray }}>
      {children}
    </FormsContext.Provider>
  )
}

export function useJobForms() {
  return useContext(FormsContext);
}
