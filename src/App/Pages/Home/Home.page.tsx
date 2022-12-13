import usePageTitle from "../../hooks/usePageTitle";
import { DefaultLayout } from "../../layouts/Default/Default.layout";
import Metrics from "./Metrics";

export default function Home() {
  usePageTitle('Início')

  return <DefaultLayout>
    <Metrics/>
  </DefaultLayout>
}
