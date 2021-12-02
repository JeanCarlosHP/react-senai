import React from "react";

import { FiChevronRight } from "react-icons/fi";
import { Link } from "react-router-dom";

import { Title, Form, Repositories } from "./styles";

const Dashboard: React.FC = () => {
  return (
    <>
      <Title>Explore repositórios no GitHub</Title>

      <Form>
        <input placeholder="Digite o nome do repositório" />
        <button type="submit">Pesquisar</button>
      </Form>

      <Repositories>
        <Link to="#">
          <img
            src="https://avatars.githubusercontent.com/u/83890321?v=4"
            alt="Avatar"
            width="100px"
          />
          <div>
            react-senai
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci
              aut eveniet velit magni non consectetur cum iste ipsa quis
              reiciendis, voluptatum ut nihil nostrum enim officiis in est
              expedita a.
            </p>
          </div>
          <FiChevronRight/>
        </Link>
      </Repositories>

      <Repositories>
        <Link to="#">
          <img
            src="https://avatars.githubusercontent.com/u/83890321?v=4"
            alt="Avatar"
            width="100px"
          />
          <div>
            react-senai
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci
              aut eveniet velit magni non consectetur cum iste ipsa quis
              reiciendis, voluptatum ut nihil nostrum enim officiis in est
              expedita a.
            </p>
          </div>
          <FiChevronRight/>
        </Link>
      </Repositories>

      <Repositories>
        <Link to="#">
          <img
            src="https://avatars.githubusercontent.com/u/83890321?v=4"
            alt="Avatar"
            width="100px"
          />
          <div>
            react-senai
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci
              aut eveniet velit magni non consectetur cum iste ipsa quis
              reiciendis, voluptatum ut nihil nostrum enim officiis in est
              expedita a.
            </p>
          </div>
          <FiChevronRight/>
        </Link>
      </Repositories>
    </>
  );
};

export default Dashboard;
