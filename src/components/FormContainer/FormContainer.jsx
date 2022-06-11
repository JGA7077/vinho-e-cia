import React, { useState } from "react";
import styled from "styled-components";
import { FlexColumn, LabelInput, SubTitle, TextBoxInput, TextInput } from "../UI";
import { secondaryColor, textColor } from "../UI/variaveis";

const FormWrapper = styled.section`
  ${FlexColumn("center", "center")}
  padding: 0 20px;
`;

const FormTitle = styled(SubTitle)`
  align-self: start;
  color: ${textColor};

  @media (min-width: 768px) and (max-width: 1023px) {
    margin-left: 15px;
  }

  @media (min-width: 1024px) and (max-width: 1279px) {
    margin-left: 30px;
  }

  @media (min-width: 1280px) {
    margin-left: 35px;
  }
`;

const Form = styled.form`
  ${FlexColumn("start", "start")}
`;

const Input = styled(TextInput)``;
const Label = styled(LabelInput)``;
const TextBox = styled(TextBoxInput)``;

const FormButton = styled.button`
  margin: 15px 0;
  width: 70px;
  height: 35px;
  border: none;
`;

const FormMessage = styled.p`
  &.success {
    color: ${secondaryColor};
  }

  &.error {
    color: red;
  }
`;

const FormContainer = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState({
    type: "",
    message: "",
  });

  const valueInput = (e) => setUser({ ...user, [e.target.name]: e.target.value });

  const sendMessage = async (e) => {
    e.preventDefault();

    if (!validate()) return

    const canSendMessage = true;
    if (canSendMessage) {
      setStatus({
        type: "success",
        message: "Mensagem enviada com Sucesso!",
      });
      setUser({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } else {
      setStatus({
        type: "error",
        message: "Erro: Mensagem não enviada!",
      });
    }
  };

  const validate = () => {
    if(!user.name) return setStatus({
      type: 'error',
      message: 'Erro: Necessário preencher o campo Nome!'
    })

    if(!user.email) return setStatus({
      type: 'error',
      message: 'Erro: Necessário preencher o campo E-mail!'
    })

    if(!user.subject) return setStatus({
      type: 'error',
      message: 'Erro: Necessário preencher o campo Assunto!'
    })

    if(!user.message) return setStatus({
      type: 'error',
      message: 'Erro: Necessário preencher o campo Mensagem!'
    })

    return true
  }

  return (
    <FormWrapper>
      <FormTitle>Contato</FormTitle>
      <Form onSubmit={sendMessage}>
        {status.type === "success" ? (
          <FormMessage className="success">{status.message}</FormMessage>
        ) : (
          <FormMessage className="error">{status.message}</FormMessage>
        )}
        {/* {status.type === 'error' ? <FormMessage>{status.message}</FormMessage> : ''} */}

        <Label htmlFor="nameInput">Nome</Label>
        <Input id="nameInput" name="name" onChange={valueInput} value={user.name} />

        <Label htmlFor="mailInput">E-mail</Label>
        <Input id="mailInput" name="email" onChange={valueInput} value={user.email} />

        <Label htmlFor="subjectInput">Assunto</Label>
        <Input id="subjectInput" name="subject" onChange={valueInput} value={user.subject} />

        <Label htmlFor="textBoxInput">Mensagem</Label>
        <TextBox id="textBoxInput" name="message" onChange={valueInput} value={user.message} />

        <FormButton type="submit">Enviar</FormButton>
      </Form>
    </FormWrapper>
  );
};
export default FormContainer;
