# UniAgenda — Organizador Acadêmico

Aplicativo desenvolvido como projeto acadêmico da disciplina **Programação para Dispositivos Móveis (DCT1111)**, do curso de Bacharelado em Sistemas de Informação da Universidade Federal do Rio Grande do Norte (UFRN), pelo grupo CodeClass.

## 📚 Sobre o projeto

O UniAgenda é um aplicativo de organização acadêmica desenvolvido para auxiliar estudantes universitários no gerenciamento de disciplinas, atividades, trabalhos, provas e prazos.

A proposta é centralizar as informações acadêmicas em um único ambiente, permitindo que o estudante acompanhe seus compromissos, visualize suas tarefas e organize sua rotina de estudos.

## 🎯 Objetivos

- Centralizar informações acadêmicas.
- Organizar atividades, trabalhos e avaliações.
- Facilitar o acompanhamento de prazos.
- Visualizar compromissos acadêmicos em um calendário.
- Acompanhar disciplinas, professores e tarefas.
- Melhorar a organização e o planejamento da rotina universitária.

## ✨ Funcionalidades do protótipo

O protótipo contempla as seguintes telas principais:

- **Início:** resumo acadêmico, quantidade de atividades pendentes e próximas entregas.
- **Calendário:** visualização das atividades organizadas por data.
- **Tarefas:** listagem das atividades, prioridades e seus status.
- **Disciplinas:** visualização das disciplinas cadastradas, códigos, professores e carga horária.
- **Perfil:** apresentação das informações do estudante.

Os dados utilizados nesta versão são simulados (mockados), permitindo demonstrar as interfaces e a navegação sem a necessidade de um backend.

## 🛠️ Tecnologias utilizadas

- [React Native](https://reactnative.dev/) — desenvolvimento de interfaces móveis.
- [Expo](https://expo.dev/) — ambiente e ferramentas para desenvolvimento.
- [TypeScript](https://www.typescriptlang.org/) — tipagem estática.
- [React Navigation](https://reactnavigation.org/) — navegação entre telas.
- [Expo Vector Icons](https://icons.expo.fyi/) — ícones da interface.
- [React Native Web](https://necolas.github.io/react-native-web/) — suporte à execução no navegador.
- [Node.js](https://nodejs.org/) — ambiente de execução.
- npm — gerenciamento de dependências.

## 📱 Navegação

O aplicativo utiliza navegação por abas inferiores (Bottom Tab Navigation), com cinco seções principais:

| Tela | Descrição |
|---|---|
| Início | Resumo e próximas atividades |
| Calendário | Atividades organizadas por data |
| Tarefas | Lista de atividades e seus status |
| Disciplinas | Disciplinas e informações dos professores |
| Perfil | Informações do usuário |

## 📦 Modelagem de dados

O projeto utiliza modelos definidos em TypeScript para representar as entidades do sistema.

### Usuario

Representa o estudante que utiliza o aplicativo.

| Campo | Tipo |
|---|---|
| id | string |
| nome | string |
| email | string |
| instituicao | string |
| curso | string |
| periodo | number |

### Professor

Representa os professores associados às disciplinas.

| Campo | Tipo |
|---|---|
| id | string |
| nome | string |
| email | string |

### Disciplina

Representa uma disciplina acadêmica.

| Campo | Tipo |
|---|---|
| id | string |
| nome | string |
| codigo | string |
| professorId | string |
| sala | string |
| cor | string |
| cargaHoraria | number |

### Atividade

Representa trabalhos, provas, seminários e outras tarefas acadêmicas.

| Campo | Tipo |
|---|---|
| id | string |
| titulo | string |
| descricao | string |
| tipo | AtividadeTipo |
| disciplinaId | string |
| usuarioId | string |
| dataCriacao | string |
| dataEntrega | string |
| prioridade | Prioridade |
| status | AtividadeStatus |

### Lembrete

Representa um lembrete vinculado a uma atividade.

| Campo | Tipo |
|---|---|
| id | string |
| atividadeId | string |
| dataHora | string |
| mensagem | string |
| ativo | boolean |

### Tipos de dados

**AtividadeTipo**
- `TRABALHO`
- `PROVA`
- `SEMINARIO`
- `ATIVIDADE`
- `OUTRO`

**Prioridade**
- `BAIXA`
- `MEDIA`
- `ALTA`

**AtividadeStatus**
- `PENDENTE`
- `EM_ANDAMENTO`
- `CONCLUIDA`

## 📂 Estrutura do projeto

```text
UniAgenda/
├── assets/
│   ├── fonts/
│   ├── icons/
│   └── images/
├── src/
│   ├── components/
│   │   ├── cards/
│   │   ├── common/
│   │   └── navigation/
│   ├── contexts/
│   ├── data/
│   │   └── mockData.ts
│   ├── hooks/
│   ├── models/
│   │   └── index.ts
│   ├── navigation/
│   │   └── AppNavigator.tsx
│   ├── screens/
│   │   └── index.tsx
│   ├── styles/
│   │   └── theme.ts
│   └── utils/
├── App.tsx
├── app.json
├── eas.json
├── package.json
└── README.md
```

## 🚀 Como executar o projeto

### Pré-requisitos

- Node.js versão 22.13.0 ou superior.
- npm.
- Git (opcional, para clonar o repositório).

**Para executar no celular:**
- Aplicativo [Expo Go](https://expo.dev/go) instalado em um dispositivo Android ou iOS.

**Para executar no computador:**
- Navegador atualizado, como Google Chrome, Microsoft Edge ou Firefox.

### 1. Instalação

Clone o repositório:

```bash
git clone https://github.com/Jadson-Hipolito/UniAgenda.git
```

Entre na pasta do projeto:

```bash
cd UniAgenda
```

Instale as dependências:

```bash
npm install
```

### 2. Executar no celular (Expo Go)

Para iniciar o servidor de desenvolvimento:

```bash
npx expo start --tunnel
```

Após a inicialização, um QR Code será exibido no terminal.

1. Abra o Expo Go no celular.
2. Escaneie o QR Code exibido.
3. Aguarde o carregamento do aplicativo.

> O parâmetro `--tunnel` facilita a conexão entre o servidor de desenvolvimento e o dispositivo móvel quando a conexão local (LAN) não funciona adequadamente.

### 3. Executar no navegador (Expo Web)

Para executar o projeto diretamente no navegador, sem precisar instalar o Expo Go:

```bash
npx expo start --web
```

O Expo iniciará o servidor Web e disponibilizará o aplicativo no navegador padrão.

Caso a página não abra automaticamente, acesse o endereço indicado no terminal. Normalmente:

```text
http://localhost:8081
```

Se a porta 8081 estiver ocupada, o Expo poderá utilizar outra porta, como 8082. Nesse caso, utilize o endereço exibido no terminal.

> A execução Web utiliza React Native Web para adaptar os componentes do React Native ao navegador.

## 🧪 Dados simulados

O protótipo utiliza dados simulados definidos em `src/data/mockData.ts`, incluindo:

- Um usuário.
- Professores.
- Disciplinas.
- Atividades acadêmicas.
- Lembretes.

Esses dados são utilizados para preencher as telas e demonstrar o funcionamento da interface.

## 👥 Equipe — CodeClass

- Jadson Hipólito de Almeida
- Integrante 2
- Integrante 3
- Integrante 4

## 🎓 Informações acadêmicas

- **Instituição:** Universidade Federal do Rio Grande do Norte (UFRN)
- **Centro:** Centro de Ensino Superior do Seridó (CERES)
- **Curso:** Bacharelado em Sistemas de Informação
- **Disciplina:** Programação para Dispositivos Móveis (DCT1111)
- **Projeto:** UniAgenda — Organizador Acadêmico
- **Grupo:** CodeClass

## 📌 Status do projeto

O UniAgenda encontra-se em desenvolvimento, com foco na construção do protótipo, modelagem das entidades, implementação das interfaces e navegação entre telas.

Esta versão utiliza dados simulados e não possui integração com backend ou banco de dados remoto.

---

Desenvolvido para fins acadêmicos pelo grupo **CodeClass**.