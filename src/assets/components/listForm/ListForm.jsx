import React, { useState } from "react";
import "./listform.scss";

import { AiOutlinePlusSquare } from "react-icons/ai";

const ListForm = ({ formHandler, listLength }) => {
  const [tarefa, setTarefa] = useState(null);

  //esta função tem por objetivo pegar os dados digitados e criar um objeto. Este objeto será pusheado para dentro da lista todos por meio do método formHandler. Por fim o input será limpo

  const elementCreate = (value) => {
    const newToDo = {
      id: listLength + 1,
      title: value,
      description: "Adicione uma descrição...",
      completed: false,
    };

    formHandler(newToDo);
    setTarefa(null)
  };

  return (
    <div className="form_container">
      <form className="listForm"
        onSubmit={(e) => {          
          elementCreate(tarefa);

          e.target[0].value = "";
          e.preventDefault();

        }}
      >
        <input
          placeholder="Nova tarefa..."
          type="text"
          name="novatarefa"
          onChange={(e) => setTarefa(e.target.value)}
          required
        />
        <button>
          <AiOutlinePlusSquare color="white" size={35} />
        </button>
      </form>
    </div>
  );
};

export default ListForm;
