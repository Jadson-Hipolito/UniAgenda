
import {
  Usuario,
  Professor,
  Disciplina,
  Atividade,
  Lembrete,
} from '../models';

export const usuarioMock: Usuario = {
  id: 'u1',
  nome: 'Jadson Hipólito',
  email: 'jadson@uniagenda.com',
  instituicao: 'UFRN',
  curso: 'Sistemas de Informação',
  periodo: 6,
};

export const professoresMock: Professor[] = [
  {
    id: 'p1',
    nome: 'Professor de PDM',
    email: 'pdm@uniagenda.com',
  },
  {
    id: 'p2',
    nome: 'Professor de Redes',
    email: 'redes@uniagenda.com',
  },
  {
    id: 'p3',
    nome: 'Professor de Gestão de Projetos',
    email: 'gestao@uniagenda.com',
  },
];

export const disciplinasMock: Disciplina[] = [
  {
    id: 'd1',
    nome: 'Programação para Dispositivos Móveis',
    codigo: 'DCT1111',
    professorId: 'p1',
    sala: 'Laboratório',
    cor: '#6366F1',
    cargaHoraria: 60,
  },
  {
    id: 'd2',
    nome: 'Redes de Computadores',
    codigo: 'DCT2102',
    professorId: 'p2',
    sala: 'Sala 02',
    cor: '#0EA5E9',
    cargaHoraria: 60,
  },
  {
    id: 'd3',
    nome: 'Gestão de Projetos',
    codigo: 'DCT2303',
    professorId: 'p3',
    sala: 'Sala 03',
    cor: '#10B981',
    cargaHoraria: 60,
  },
];

export const atividadesMock: Atividade[] = [
  {
    id: 'a1',
    titulo: 'Trabalho Unidade II',
    descricao: 'Implementação do modelo e das interfaces do UniAgenda.',
    tipo: 'TRABALHO',
    disciplinaId: 'd1',
    usuarioId: 'u1',
    dataCriacao: '2026-11-25T08:00:00',
    dataEntrega: '2026-11-26T23:59:00',
    prioridade: 'ALTA',
    status: 'EM_ANDAMENTO',
  },
  {
    id: 'a2',
    titulo: 'Análise de Pacotes TCP e UDP',
    descricao: 'Atividade de análise de tráfego de redes.',
    tipo: 'ATIVIDADE',
    disciplinaId: 'd2',
    usuarioId: 'u1',
    dataCriacao: '2026-11-20T08:00:00',
    dataEntrega: '2026-11-27T23:59:00',
    prioridade: 'MEDIA',
    status: 'PENDENTE',
  },
  {
    id: 'a3',
    titulo: 'Revisão do PMBOK',
    descricao: 'Revisar os conceitos de gerenciamento de projetos.',
    tipo: 'PROVA',
    disciplinaId: 'd3',
    usuarioId: 'u1',
    dataCriacao: '2026-11-20T08:00:00',
    dataEntrega: '2026-11-28T16:00:00',
    prioridade: 'ALTA',
    status: 'PENDENTE',
  },
];

export const lembretesMock: Lembrete[] = [
  {
    id: 'l1',
    atividadeId: 'a1',
    dataHora: '2026-11-26T09:00:00',
    mensagem: 'Verificar a entrega do Trabalho Unidade II.',
    ativo: true,
  },
  {
    id: 'l2',
    atividadeId: 'a2',
    dataHora: '2026-11-27T09:00:00',
    mensagem: 'Revisar a atividade de Redes.',
    ativo: true,
  },
];
