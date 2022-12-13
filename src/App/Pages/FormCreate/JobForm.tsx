import { useCallback, useState } from "react"
import styled from "styled-components"
import Button from "../../components/Button/Button"
import Input from "../../components/Input/Input"
import { useJobForms } from "../../context/forms.context"
import { JobFormProps } from "../../types/jobFom.types"
import { generateFile } from "../../utils/generateFile"

const initialValues = {
  id: '',
  title: '',
  wage: 0,
  activities: '',
  benefits: '',
  processSteps: '',
  skills: '',
  requirements: '',
  date: '',
}

export default function JobForm() {
  const { addJobFormToArray } = useJobForms()
  const [form, setForm] = useState<JobFormProps>(initialValues);
  const [loading, setLoading] = useState(false)

  async function handleFormSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setLoading(true)

    const newForm: JobFormProps = {
      ...form,
      id: (Math.random() * 100).toString(),
      date: (new Date()).toDateString(),
    }

    addJobFormToArray!(newForm)

    setLoading(false)
    setForm(initialValues)
  }

  const handleInputChange = useCallback(
    (e: React.FormEvent<HTMLInputElement>) => {
      setForm({
        ...form,
        [e.currentTarget.name]: e.currentTarget.value,
      });
    },
    [form]
  );

  console.log('form changed', form)

  return <PostFormWrapper onSubmit={handleFormSubmit}>
    <Input
      label="título"
      placeholder="Título do cargo"
      value={form.title}
      onChange={handleInputChange}
      name="title"
      required
    />
    <Input
      label="salário"
      onChange={handleInputChange}
      value={form.wage}
      name= "wage"
      prefix="R$"
      placeholder="ex: 1.200,00"
      required
    />
    <Input
      label="atividades do cargo"
      placeholder="Atividades do cargo"
      value={form.activities}
      onChange={handleInputChange}
      name="activities"
      required
    />
    <Input
      label="benefícios"
      placeholder="Benefícios"
      value={form.benefits}
      onChange={handleInputChange}
      name="benefits"
      required
    />
    <Input
      label="etapas do processo"
      placeholder="Etapas do processo"
      value={form.processSteps}
      onChange={handleInputChange}
      name="processSteps"
      required
    />
    <Input
      label="habilidades necessárias"
      placeholder="Habilidades necessárias"
      value={form.skills}
      onChange={handleInputChange}
      name="skills"
      required
    />
    <Input
      label="experiência necessária"
      placeholder="Experiência necessária"
      value={form.requirements}
      onChange={handleInputChange}
      name="requirements"
      required
    />
    <PostFormSubmitWrapper>
      <Button onClick={() => setForm(initialValues)} variant="danger" label="Limpar formulário" />
      <Button disabled={loading || form.wage === 0} variant="primary" label="Salvar" type="submit" />
      <Button disabled={loading || form.wage === 0} onClick={() => generateFile(form)} variant="primary" label="Salvar e exportar" type="submit" />
    </PostFormSubmitWrapper>
  </PostFormWrapper>
}

const PostFormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  margin-top: 40px;
  gap: 24px;
  justify-content: center;
  align-items: center;
`

const PostFormSubmitWrapper = styled.div`
  display: flex;
  gap: 10px;
`
