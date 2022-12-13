import * as SC from './SessionCard.styles'

export interface SessionCardProps {
  name: string;
  description: string;
}

export function SessionCard (props: SessionCardProps) {
  return <SC.Wrapper>
    <SC.Avatar src="https://thumbs.dreamstime.com/b/ilustra%C3%A7%C3%A3o-do-vetor-da-cara-da-av%C3%B3-71448666.jpg" />
    <SC.Name>
      { props.name }
    </SC.Name>
    <SC.Description>
      { props.description }
    </SC.Description>
  </SC.Wrapper>
}
