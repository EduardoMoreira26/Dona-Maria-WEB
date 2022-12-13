import usePageTitle from "../../hooks/usePageTitle";
import { DefaultLayout } from "../../layouts/Default/Default.layout";
import Table from "./Table";

export default function FormsTable() {
  usePageTitle('Formulários')

  return <DefaultLayout>
    <Table />
  </DefaultLayout>
}
