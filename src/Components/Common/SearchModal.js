import React, { useState } from 'react';
import useReactRouter from 'use-react-router';
import PropTypes from 'prop-types';
import styled, { keyframes } from 'styled-components';
import { MdClose } from 'react-icons/md';
import searchImg from '../../assets/search.png';

const boxFade = keyframes`
  from {
    opacity: 0;
  } 
  to {
    opacity: 1;
  }
`;

const ModalMask = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1000;
  overflow: auto;
  outline: 0;
  background-color: rgba(0, 0, 0, 0.5);
  animation: ${boxFade} 0.2s ease;
`;

const ModalWarpper = styled.div`
  position: relative;
  top: 10%;
  width: 820px;
  margin: auto;
  @media screen and (max-width: 890px) {
    width: 80%;
  }
`;

const SMdClose = styled(MdClose)`
  position: absolute;
  right: -36px;
  top: 0;
  font-size: 30px;
  cursor: pointer;
`;

const ModalContainer = styled.div`
  width: 100%;
  height: 548px;
  padding: 40px 70px 0;
  background-color: #252525;
  border-radius: 8px;
  overflow: hidden;
  @media screen and (max-width: 450px) {
    padding: 20px 30px;
    height: 70vh;
  }
`;

const Form = styled.form``;

const Input = styled.input`
  width: 100%;
  height: 51px;
  background: url(${searchImg}) no-repeat 0;
  font-family: 'Gmarket Sans';
  font-size: 28px;
  color: #fff;
  border-radius: 0;
  border: none;
  border-bottom: 2px solid #2f2f2f;
  padding-left: 40px;
  outline: 0;
  &:focus {
    border-bottom-color: #fff;
  }

  @media screen and (max-width: 580px) {
    font-size: 18px;
  }
`;

const SearchModal = ({ visible, onVisible }) => {
  const { history, location } = useReactRouter();
  const [title, setTitle] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title) {
      alert('검색어를 입력해주세요.');
      return;
    }
    onVisible();
    // setTitle('');
    if (location.pathname !== '/search') {
      history.push('/search');
    }
  };

  const handleChange = (e) => {
    const {
      target: { value },
    } = e;
    setTitle(value);
  };

  return (
    <>
      <ModalMask visible={visible}>
        <ModalWarpper visible={visible}>
          <SMdClose onClick={() => onVisible()} />
          <ModalContainer>
            <Form onSubmit={handleSubmit}>
              <Input
                placeholder="검색어를 입력하세요."
                value={title}
                onChange={handleChange}
              />
            </Form>
          </ModalContainer>
        </ModalWarpper>
      </ModalMask>
    </>
  );
};

SearchModal.propTypes = {
  visible: PropTypes.bool,
  onVisible: PropTypes.func,
};

export default SearchModal;
