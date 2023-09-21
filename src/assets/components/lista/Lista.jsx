import React, { useEffect, useState } from "react";

import { IoMdCheckboxOutline, IoMdTrash } from "react-icons/io";
import { MdCheckBoxOutlineBlank } from "react-icons/md";
import { HiMiniPencilSquare } from "react-icons/hi2";

import "./lista.scss";
import ListForm from "../listForm/ListForm";
import CardDeldit from "../itemDescricao/CardDeldit";

const Lista = ({ data }) => { 

  // FEATURE: LOCAL STORAGE
  const storedToDoList = JSON.parse(localStorage.getItem('storedToDoList'));

  //carrega a lista do mock
  const [toDos, setToDos] = useState(storedToDoList || data);


  useEffect(() => {
    localStorage.setItem('storedToDoList', JSON.stringify(toDos));    

  }, [toDos] )  


  const toDoHandler = (newToDo) => {
    setToDos([...toDos, newToDo]);    

    //adiciona à lista atual a lista anterior + a tarefa nova

    //esta função será passada como método ao list form onde trato do formulário que recebe a informação
    
  };

  //altera o status na lista e renderiza a página
  const handleStatus = (status, index) => {
    //função responsável por pegar o valor do input e setar a lista.  Depois a função irá chamar o setTodos pra renderizar a página com o novo status
    toDos[index].completed = status;

    setToDos([...toDos]);
  };

  //Set the card Edit and del to display it
  const [card, setCard] = useState(undefined);
  const [itemCalled, setItemCalled] = useState(undefined);
  const [cardOperation, setCardOperation] = useState(undefined);
  const [idCalled, setIdCalled] = useState(undefined);

  const callCard = (value, edit, item, itemIndex) => {
    setItemCalled(item);
    setCard(value);
    setCardOperation(edit);
    setIdCalled(itemIndex);
  };

  //deleta o item da lista e renderiza a página

  const handleDelete = (index) => {
    toDos.splice(index, 1);

    setToDos([...toDos]);
  };

  //edita o item da página
  const handleEdit = (index, newTitle) => {    
    toDos[index].title = newTitle;

    setToDos([...toDos]);
  };



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
              <tr key={item.id + index}>
                <td className="col1">{item.title}</td>
                <td className="col2">
                  {/* Nesta parte temos um label com o listener onChange que escuta a as mudanças do input checkbox. Dependendo od status do checkbox ele irá chamar a função de handleStatus para corrigir o ícone na tela */}
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
                      <IoMdCheckboxOutline size={30} />
                    ) : (
                      <MdCheckBoxOutlineBlank size={30} />
                    )}
                  </label>
                </td>
                <td className="col3">
                  <button
                    onClick={() => callCard(true, true, item.title, index)}
                  >
                    <HiMiniPencilSquare size={30} color="white" />
                  </button>
                  <button
                    onClick={() => callCard(true, false, item.title, index)}
                  >
                    <IoMdTrash size={30} color="white" />
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
        <tfoot></tfoot>
      </table>
      {/* Nesta etapa eu passo o método criado deste componente para o outro. Eu envio também o toDos.length para dar ao form o tamanho da lista e assim conseguir criar itens com a key ID correta, mas eu poderia passar também uma Todo[Todo.length-1].id que enviaria o valor da key ID caso as IDs tivessem um valor totalmente diferente */}
      <ListForm formHandler={toDoHandler} listLength={toDos.length} />

      <CardDeldit
        showCard={card}
        closeCard={callCard}
        handleDelete={handleDelete}
        edit={handleEdit}
        operation={cardOperation}
        item={itemCalled}
        itemIndex={idCalled}
      />
    </div>
  );
};

export default Lista;
