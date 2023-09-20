import React, { useState } from "react";
import "./cardeldit.scss";

const CardDeldit = ({
  show,
  handleDelete,
  edit,
  list,
  closeCard,
  operation,
  item
}) => {
  const [card, setCard] = useState();

  return (
    <div
      className="card_container"
      style={{ display: show ? "block" : "none" }}
    >
      <form
        className="card_content"
        onSubmit={(e) => {
          closeCard(false);
          console.log("oioioi");
          e.preventDefault();
        }}
      >
        <h2>Deseja {operation ? "editar" : "deletar"} esse item?</h2>
        {operation ? (
          <label className="confirmation_message" name="confirmation">
            <input
              className="card_form_description"
              type="text"
              placeholder="Colocar as descrições da tarefa aqui"
              required
            />
          </label>
        ) : (
          <p className="delet_message">Confirme que deseja excluir a tarefa: <span>{item}</span></p>
        )}
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
    </div>
  );
};

export default CardDeldit;
