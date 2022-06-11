import React from 'react';
import styled from 'styled-components';
import { FlexColumn, LabelInput, SubTitle, TextBoxInput, TextInput } from '../UI';
import { textColor } from '../UI/variaveis';

const FormWrapper = styled.section`
  ${FlexColumn('center', 'center')}
  padding: 0 20px;
`

const FormTitle = styled(SubTitle)`
  align-self: start;
  color:  ${textColor};
`

const Form = styled.form`
  ${FlexColumn('start', 'start')}
`

const Input = styled(TextInput)``
const Label = styled(LabelInput)``
const TextBox = styled(TextBoxInput)``

const FormButton = styled.button`
  margin: 15px 0;
  width: 70px;
  height: 35px;
  border: none;
`

const FormContainer = () => {
  
  return(
    <FormWrapper>
      <FormTitle>Contato</FormTitle>
      <Form>
        <Label htmlFor="nameInput">Nome</Label>
        <Input required id="nameInput" />

        <Label htmlFor="mailInput">E-mail</Label>
        <Input required id="mailInput" />

        <Label htmlFor="subjectInput">Assunto</Label>
        <Input required id="subjectInput" />

        <Label htmlFor="textBoxInput">Mensagem</Label>
        <TextBox required id="textBoxInput" />

        <FormButton type='submit' >Enviar</FormButton>
      </Form>
    </FormWrapper>
  )
}
export default FormContainer