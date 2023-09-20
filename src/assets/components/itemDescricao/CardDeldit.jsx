import React, { useState } from "react";
import "./cardeldit.scss";

const CardDeldit = ({
  showCard,
  handleDelete,
  edit,
  closeCard,
  operation,
  item,
  itemIndex
}) => {
  

  return (
    <div
      className="card_container"
      style={{ display: showCard ? "block" : "none" }}
    >
      <form
        className="card_content"
        onSubmit={(e) => {
          closeCard(false);
          handleDelete(itemIndex)
          e.preventDefault();
        }}
      >
        <h2>Deseja {operation ? "editar" : "deletar"} esse item?</h2>
        {operation ? (
          <div className="formField-and-confirmation">
            <label className="confirmation_message" name="confirmation">
              <input
                className="card_form_description"
                type="text"
                placeholder="Colocar as descrições da tarefa aqui"
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
              <button type="submit" className="buttonY">
                Sim
              </button>
            </div>
          </div>
        ) : (
          <div>
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
          </div>
        )}
      </form>
    </div>
  );
};

export default CardDeldit;
