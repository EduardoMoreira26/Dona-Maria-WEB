import { useEffect, useState } from "react";
import styled from "styled-components";
import MetricCard from "../../components/MetricCard/MetricCard";
import { useJobForms } from "../../context/forms.context";

export default function Metrics() {
  const { forms } = useJobForms();

  return <MetricsWrapper>
    <MetricCard
      color="primary"
      description="Formulários cadastrados"
      value={forms.length}
      isCurrency={true}
    />
    <MetricCard
      color="primary"
      description="Vagas preenchidas"
      value={3}
      isCurrency={true}
    />
    <MetricCard
      color="primary"
      description="Vagas para Pcd"
      value={1}
      isCurrency={true}
    />
    <MetricCard
      color="primary"
      description="Vagas para confeiteira"
      value={1}
      isCurrency={true}
    />
  </MetricsWrapper>
}

const MetricsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;
  margin-top: 40px;
`;
