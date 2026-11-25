
/**
 * Modelos de dados do UniAgenda
 */

export type AtividadeTipo =
  | 'TRABALHO'
  | 'PROVA'
  | 'SEMINARIO'
  | 'ATIVIDADE'
  | 'OUTRO';

export type Prioridade =
  | 'BAIXA'
  | 'MEDIA'
  | 'ALTA';

export type AtividadeStatus =
  | 'PENDENTE'
  | 'EM_ANDAMENTO'
  | 'CONCLUIDA';

export interface Usuario {
  id: string;
  nome: string;
  email: string;
  instituicao: string;
  curso: string;
  periodo: number;
}

export interface Professor {
  id: string;
  nome: string;
  email: string;
}

export interface Disciplina {
  id: string;
  nome: string;
  codigo: string;
  professorId: string;
  sala: string;
  cor: string;
  cargaHoraria: number;
}

export interface Atividade {
  id: string;
  titulo: string;
  descricao: string;
  tipo: AtividadeTipo;
  disciplinaId: string;
  usuarioId: string;
  dataCriacao: string;
  dataEntrega: string;
  prioridade: Prioridade;
  status: AtividadeStatus;
}

export interface Lembrete {
  id: string;
  atividadeId: string;
  dataHora: string;
  mensagem: string;
  ativo: boolean;
}
