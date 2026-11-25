
import React from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
} from 'react-native';

import {
  usuarioMock,
  disciplinasMock,
  atividadesMock,
  professoresMock,
} from '../data/mockData';

import { colors, spacing, radius } from '../styles/theme';

function Container({ children }: { children: React.ReactNode }) {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.content}>{children}</View>
    </ScrollView>
  );
}

function Card({ children }: { children: React.ReactNode }) {
  return <View style={styles.card}>{children}</View>;
}

function Title({ children }: { children: string }) {
  return <Text style={styles.title}>{children}</Text>;
}

export function HomeScreen() {
  const pendentes = atividadesMock.filter(
    item => item.status !== 'CONCLUIDA'
  );

  return (
    <Container>
      <Text style={styles.subtitle}>Bem-vindo ao UniAgenda,</Text>
      <Title>{usuarioMock.nome}</Title>

      <Card>
        <Text style={styles.cardTitle}>Resumo acadêmico</Text>
        <Text style={styles.cardText}>
          {pendentes.length} atividades pendentes
        </Text>
        <Text style={styles.cardText}>
          {disciplinasMock.length} disciplinas cadastradas
        </Text>
      </Card>

      <Title>Próximas atividades</Title>

      {pendentes.map(item => (
        <Card key={item.id}>
          <Text style={styles.cardTitle}>{item.titulo}</Text>
          <Text style={styles.cardText}>
            Entrega: {new Date(item.dataEntrega).toLocaleDateString('pt-BR')}
          </Text>
          <Text style={styles.tag}>{item.tipo}</Text>
        </Card>
      ))}
    </Container>
  );
}

export function CalendarScreen() {
  return (
    <Container>
      <Title>Calendário</Title>
      <Text style={styles.subtitle}>
        Atividades organizadas por data
      </Text>

      {atividadesMock.map(item => (
        <Card key={item.id}>
          <Text style={styles.cardTitle}>{item.titulo}</Text>
          <Text style={styles.cardText}>
            {new Date(item.dataEntrega).toLocaleDateString('pt-BR')}
          </Text>
        </Card>
      ))}
    </Container>
  );
}

export function TasksScreen() {
  return (
    <Container>
      <Title>Minhas tarefas</Title>

      {atividadesMock.map(item => (
        <Card key={item.id}>
          <Text style={styles.cardTitle}>{item.titulo}</Text>
          <Text style={styles.cardText}>
            Tipo: {item.tipo.replace('_', ' ')}
          </Text>
          <Text style={styles.cardText}>
            Status: {item.status.replace('_', ' ')}
          </Text>
          <Text style={styles.cardText}>
            Prioridade: {item.prioridade}
          </Text>
        </Card>
      ))}
    </Container>
  );
}

export function SubjectsScreen() {
  return (
    <Container>
      <Title>Disciplinas</Title>

      {disciplinasMock.map(item => {
        const professor = professoresMock.find(
          p => p.id === item.professorId
        );

        return (
          <Card key={item.id}>
            <View
              style={[styles.subjectColor, { backgroundColor: item.cor }]}
            />
            <Text style={styles.cardTitle}>{item.nome}</Text>
            <Text style={styles.cardText}>{item.codigo}</Text>
            <Text style={styles.cardText}>
              {professor?.nome}
            </Text>
            <Text style={styles.cardText}>
              Carga horária: {item.cargaHoraria}h
            </Text>
          </Card>
        );
      })}
    </Container>
  );
}

export function ProfileScreen() {
  return (
    <Container>
      <Title>Meu perfil</Title>

      <Card>
        <Text style={styles.cardTitle}>{usuarioMock.nome}</Text>
        <Text style={styles.cardText}>{usuarioMock.email}</Text>
        <Text style={styles.cardText}>{usuarioMock.instituicao}</Text>
        <Text style={styles.cardText}>{usuarioMock.curso}</Text>
        <Text style={styles.cardText}>
          Período: {usuarioMock.periodo}
        </Text>
      </Card>
    </Container>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  content: {
    padding: spacing.md,
    paddingBottom: spacing.xl,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: colors.text,
    marginBottom: spacing.md,
  },
  subtitle: {
    fontSize: 14,
    color: colors.textSecondary,
    marginBottom: spacing.xs,
  },
  card: {
    backgroundColor: colors.surface,
    padding: spacing.md,
    borderRadius: radius.md,
    marginBottom: spacing.md,
    borderWidth: 1,
    borderColor: colors.border,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: colors.text,
    marginBottom: spacing.xs,
  },
  cardText: {
    fontSize: 14,
    color: colors.textSecondary,
    marginBottom: spacing.xs,
  },
  tag: {
    color: colors.primary,
    fontWeight: 'bold',
    marginTop: spacing.xs,
  },
  subjectColor: {
    width: 35,
    height: 5,
    borderRadius: 5,
    marginBottom: spacing.sm,
  },
});
