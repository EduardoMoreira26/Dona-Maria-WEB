import usePageTitle from "../../hooks/usePageTitle";
import { DefaultLayout } from "../../layouts/Default/Default.layout";
import JobForm from "./JobForm";

export default function FormCreate() {
  usePageTitle('Novo formulário')

  return <DefaultLayout>
     <JobForm />
  </DefaultLayout>
}
