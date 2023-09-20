import React, { useState } from "react";
import "./listform.scss";

const ListForm = ({ formHandler, listLength }) => {
  const [tarefa, setTarefa] = useState(null);

  const elementCreate = (value) => {
    const newToDo = {
      id: listLength + 1,
      title: value,
      description: "Adicione uma descrição...",
      complete: false,
    };

    formHandler(newToDo);
  };

  return (
    <div>
      <form
        onSubmit={(e) => {
          console.log(e.target[0]);
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
        />
      </form>
    </div>
  );
};

export default ListForm;
