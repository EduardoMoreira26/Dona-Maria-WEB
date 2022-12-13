import * as VD from './MetricCard.styles'

export interface MetricCardProps {
  description: string
  value: number
  color: 'primary' | 'default'
  isCurrency?: boolean
}

export default function MetricCard (props: MetricCardProps) {


  return <VD.Wrapper>
    <span className="Description">{ props.description }:</span>
    <div>
      <span className="Value">
        { props.value }
      </span>
    </div>
  </VD.Wrapper>
}
