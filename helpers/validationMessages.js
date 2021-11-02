const ERROR = { message: 'Ops, ocorreu um erro com a sua requisição!' };

const INVALID_ENTRY = { message: 'Dados(s) inválido(s). Digite novamente!' };

const INVALID_STATUS = { message: 'Status diferente do permitido!' };

const TODO_NOT_FOUND = { message: 'Tarefa não encontrada!' };

const WITHOUT_TODOS = { message: 'Não há nenhuma tarefa adicionada!' };

const DELETED_TODO = { message: 'Tarefa excluída com sucesso!' };

module.exports = {
  ERROR,
  INVALID_ENTRY,
  INVALID_STATUS,
  TODO_NOT_FOUND,
  WITHOUT_TODOS,
  DELETED_TODO,
};