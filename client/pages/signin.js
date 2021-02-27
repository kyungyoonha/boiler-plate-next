import React, { useState, useCallback } from 'react';
import styled from 'styled-components';

import { Input, Button } from '../components/Form';
import { Container } from '../components/Layout';
import useInputs from '../hooks/useInputs';

const initialState = {
  email: '',
  pw: '',
};

const Signin = () => {
  const { inputs, onChange } = useInputs(initialState);

  const onSubmit = useCallback((e) => {
    console.log('제출');
  }, []);

  return (
    <Container>
      <Form>
        <h1>로그인</h1>
        <Input
          label="이메일"
          name="email"
          value={inputs.email}
          placeholder="이메일를 입력해주세요"
          required
          onChange={onChange}
        />

        <Input
          label="비밀번호"
          name="pw"
          type="password"
          value={inputs.pw}
          placeholder="패스워드를 입력해주세요"
          required
          onChange={onChange}
        />

        <Button onClick={onSubmit} color="blue">
          로그인
        </Button>
      </Form>
    </Container>
  );
};

export default Signin;

const Form = styled.form`
  margin-top: 80px;
  border: 1px solid ${(props) => props.theme.gray[0]};
  border-radius: 1%;
  height: 700px;
  padding: 80px 20px;

  h1 {
    font-weight: 900;
    text-align: center;
    margin-bottom: 30px;
  }

  @media (min-width: 768px) {
    padding: 80 50px;
  }

  @media (min-width: 992px) {
    padding: 80px 100px;
  }
`;
