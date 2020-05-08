import React from 'react';
import { FiChevronRight } from 'react-icons/fi';

import logoImg from '../../assets/logo.svg';

import { Title, Form, Repositories } from './styles';
import Repository from '../Repository';

const Dashboard: React.FC = () => {
  return (
    <>
      <img src={logoImg} alt="GitHubExplorer" />
      <Title>Explore repositórios no Github</Title>

      <Form>
        <input placeholder="digite o nome do repositório" />
        <button type="submit">Pesquisar</button>
      </Form>

      <Repositories>
        <a href="teste">
          <img
            src="https://avatars1.githubusercontent.com/u/47502493?s=460&u=263f37008e2d937700b51c275640f0855cde843e&v=4"
            alt="Ricardo Picinatto"
          />
          <div>
            <strong>picinatto/unform</strong>
            <p>Descasdhauisdhuaish asuidhauishduiiashdas</p>
          </div>

          <FiChevronRight size={20} />
        </a>
        <a href="teste">
          <img
            src="https://avatars1.githubusercontent.com/u/47502493?s=460&u=263f37008e2d937700b51c275640f0855cde843e&v=4"
            alt="Ricardo Picinatto"
          />
          <div>
            <strong>picinatto/unform</strong>
            <p>Descasdhauisdhuaish asuidhauishduiiashdas</p>
          </div>

          <FiChevronRight size={20} />
        </a>
        <a href="teste">
          <img
            src="https://avatars1.githubusercontent.com/u/47502493?s=460&u=263f37008e2d937700b51c275640f0855cde843e&v=4"
            alt="Ricardo Picinatto"
          />
          <div>
            <strong>picinatto/unform</strong>
            <p>Descasdhauisdhuaish asuidhauishduiiashdas</p>
          </div>

          <FiChevronRight size={20} />
        </a>
      </Repositories>
    </>
  );
};

export default Dashboard;
