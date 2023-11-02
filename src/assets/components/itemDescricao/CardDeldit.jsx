import React, { useState } from "react";
import "./cardeldit.scss";

const CardDeldit = ({
  showCard,
  handleDelete,
  edit,
  closeCard,
  operation,
  item,
  itemIndex,
}) => {

 const [newTitle, setNewTitle] = useState(undefined)

  return (
    <div
      className="card_container"
      style={{ display: showCard ? "block" : "none" }}

      /*Não consegui pensar melhor jeito para fazer isto. 
      Basicamente irei verificar o tipo de operação (passada pelo operation). Já que só tem duas opções, optei pelo boolean porque eu gastaria menos linhas pra verificar isso do que se fosse o switch ou um if else)
      
      Cada form tem sua característica, o form de editar, você pode realmente editar as tarefas. No form de deletar, além de perguntar se você tem certeza (mecanismo de controle) ele mostra a atividade que você está deletando ao completar aquela ação.*/
    >
      {operation ? (
       
       //FORM DE EDIT

        <form
          className="card_content"
          onSubmit={(e) => {
            closeCard(false);
            edit(itemIndex, newTitle);
            e.preventDefault();
          }}
        >
          <h2>Deseja {operation ? "editar" : "deletar"} esse item?</h2>
          <label className="confirmation_message" name="confirmation">
            <input
              className="card_form_description"
              type="text"
              placeholder="Colocar as descrições da tarefa aqui"

              onChange={e => setNewTitle(e.target.value)}

              required
            />
          </label>
          <div className="button_grid">
            <button
              type="button"
              className="buttonN"
              value={false}
              onClick={() => closeCard(false)}
            >
              Não
            </button>
            <button type="submit" className="buttonY" >
              Sim
            </button>
          </div>
        </form>
      ) : ( 
       
       //FORM DE DELETE

        <form
          className="card_content"
          onSubmit={(e) => {
            closeCard(false);
            handleDelete(itemIndex);
            e.preventDefault();
          }}
        >
          <h2>Deseja {operation ? "editar" : "deletar"} esse item?</h2>
          <p className="delet_message">
            Confirme que deseja excluir a tarefa: <span>{item}</span>
          </p>
          <label className="button_grid">
            <button
              type="button"
              className="buttonN"
              value={false}
              onClick={() => closeCard(false)}
            >
              Não
            </button>
            <button type="submit" className="buttonY">
              Sim
            </button>
          </label>
        </form>
      )}
    </div>
  );
};

export default CardDeldit;
