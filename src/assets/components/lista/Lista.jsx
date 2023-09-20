import React, { useState } from "react";

import { IoMdCheckboxOutline } from "react-icons/io";
import { MdCheckBoxOutlineBlank } from "react-icons/md";

import "./lista.scss";
import ListForm from "../listForm/ListForm";

const Lista = ({ data }) => {
  //carrega a lista do mock
  const [toDos, setToDos] = useState(data);

  const toDoHandler = (newToDo) => {
    setToDos([...toDos, newToDo]);

    //adiciona à lista atual a lista anterior + a tarefa nova

    //esta função será passada como método ao list form onde trato do formulário que recebe a informação
  };

  const handleStatus = (status, index) => {
   //função responsável por pegar o valor do input e setar a lista.  Depois a função irá chamar o setTodos pra renderizar a página com o novo status
    toDos[index].completed = status;

    setToDos([...toDos]);
  };

  console.log(toDos);
  return (
    <div className="lista_container">
      <table>
        <thead>
          <tr className="caption">
            <th className="col1">Tarefa</th>
            <th className="col2">Status</th>
            <th className="col3">Opções</th>
          </tr>
        </thead>
        <tbody>          
          {toDos.map((item, index) => {
            return (
              <tr key={item.id}>
                <td className="col1">{item.title}</td>
                <td className="col2">
                  {
                   /* Nesta parte temos um label com o listener onChange que escuta a as mudanças do input checkbox. Dependendo od status do checkbox ele irá chamar a função de handleStatus para corrigir o ícone na tela */}
                    <label
                    onChange={(e) => {
                     handleStatus(e.target.checked, index);
                   }}
                    >
                     {/* Nesta parte adicionei um ternário para verificar se o input deverá ser criado já checkado ou não. Tive dificuldade nessa parte porque estava dando erro no checked quando na verdade eu deveria botar defaultChecked que é o nativo do React */}
                      {item.completed ? (
                        <input
                          type="checkbox"
                          name={item.title}
                          style={{ display: "none" }}
                          id={item.title + item.id + index}
                          defaultChecked
                        />
                      ) : (
                        <input
                          type="checkbox"
                          name={item.title}
                          style={{ display: "none" }}
                          id={item.title + item.id + index}
                        />
                      )}

                      {/* Esta parte é um if ternário para conferir qual ícone será renderizado. Veja que até agora não tinhamos mudado o ícone, apenas mexido no statuso da tarefa. Aqui é o fim que de fato o ícone correto é mostrado na tela. */}
                      {item.completed ? (
                        <IoMdCheckboxOutline />
                      ) : (
                        <MdCheckBoxOutlineBlank />
                      )}
                    </label>
                  
                </td>
                <td className="col3">Delete | Edit</td>
              </tr>
            );
          })}
        </tbody>
        <tfoot></tfoot>
      </table>
      {/* Nesta etapa eu passo o método criado deste componente para o outro. Eu envio também o toDos.length para dar ao form o tamanho da lista e assim conseguir criar itens com a key ID correta, mas eu poderia passar também uma Todo[Todo.length-1].id que enviaria o valor da key ID caso as IDs tivessem um valor totalmente diferente */}
      <ListForm formHandler={toDoHandler} listLength={toDos.length} />
    </div>
  );
};

export default Lista;
