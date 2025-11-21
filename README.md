# 🎫 Pass.in Web - NLW Unite

Uma aplicação web moderna para gerenciamento de participantes de eventos, desenvolvida durante o evento NLW Unite da Rocketseat.

## 📋 Sobre o Projeto

O Pass.in Web é uma interface web para gerenciamento de participantes de eventos. A aplicação permite visualizar, buscar e gerenciar participantes de forma intuitiva, com funcionalidades de paginação e filtros em tempo real.

### ✨ Funcionalidades

- 📊 **Dashboard de Participantes**: Visualização completa da lista de participantes
- 🔍 **Busca em Tempo Real**: Sistema de busca instantânea por nome ou email
- 📄 **Paginação Inteligente**: Navegação eficiente entre páginas de resultados
- ✅ **Status de Check-in**: Visualização do status de check-in dos participantes
- 📱 **Design Responsivo**: Interface adaptável para diferentes dispositivos
- 🎨 **UI Moderna**: Interface clean e intuitiva com Tailwind CSS

## 🛠️ Tecnologias Utilizadas

### Frontend
- **React 19.2.0** - Biblioteca para construção da interface
- **TypeScript** - Tipagem estática para JavaScript
- **Vite** - Build tool moderna e rápida
- **Tailwind CSS 4.1.17** - Framework CSS utilitário

### Bibliotecas e Dependências
- **Lucide React** - Ícones modernos e consistentes
- **Day.js** - Manipulação e formatação de datas
- **Tailwind Merge** - Utilitário para merge de classes CSS
- **@faker-js/faker** - Geração de dados fictícios para desenvolvimento

### Ferramentas de Desenvolvimento
- **ESLint** - Linting e padronização de código
- **PostCSS** - Processamento de CSS
- **TypeScript ESLint** - Regras específicas para TypeScript

## 🚀 Como Executar o Projeto

### Pré-requisitos
- Node.js (versão 18 ou superior)
- npm ou yarn

### Instalação

1. **Clone o repositório**
```bash
git clone <url-do-repositorio>
cd NLW_UNITE
```

2. **Navegue até o diretório do projeto web**
```bash
cd pass-in-web
```

3. **Instale as dependências**
```bash
npm install
```

4. **Execute o projeto em modo de desenvolvimento**
```bash
npm run dev
```

5. **Acesse a aplicação**
   - Abra seu navegador e acesse: `http://localhost:5173`

### Scripts Disponíveis

```bash
# Executar em modo de desenvolvimento
npm run dev

# Fazer build para produção
npm run build

# Executar linting
npm run lint

# Visualizar build de produção
npm run preview
```

## 📁 Estrutura do Projeto

```
pass-in-web/
├── public/
│   └── vite.svg
├── src/
│   ├── assets/
│   │   └── nlw-unite-icon.svg
│   ├── components/
│   │   ├── table/
│   │   │   ├── table.tsx
│   │   │   ├── table-cell.tsx
│   │   │   ├── table-header.tsx
│   │   │   └── table-row.tsx
│   │   ├── attendee-list.tsx
│   │   ├── header.tsx
│   │   ├── icon-button.tsx
│   │   └── nav-link.tsx
│   ├── app.tsx
│   ├── index.css
│   └── main.tsx
├── index.html
├── package.json
├── tailwind.config.js
├── tsconfig.json
├── tsconfig.app.json
├── tsconfig.node.json
└── vite.config.ts
```

## 🎯 Componentes Principais

### AttendeeList
Componente principal que gerencia a lista de participantes com:
- Sistema de busca integrado
- Paginação com navegação completa
- Exibição de status de check-in
- Formatação de datas em português

### Header
Cabeçalho da aplicação com:
- Logo do NLW Unite
- Navegação entre seções

### Table Components
Sistema de tabela modular e reutilizável:
- `Table`: Container principal
- `TableHeader`: Cabeçalhos das colunas
- `TableRow`: Linhas da tabela
- `TableCell`: Células individuais

## 🔧 Configurações

### Tailwind CSS
O projeto utiliza Tailwind CSS v4 com configurações customizadas:
- Plugin de formulários incluído
- Suporte completo a componentes React
- Classes utilitárias otimizadas

### TypeScript
Configuração robusta com:
- Strict mode habilitado
- Suporte a JSX
- Resolução de módulos otimizada

## 🌐 API Integration

A aplicação consome uma API REST local:
- **Base URL**: `http://localhost:3333`
- **Endpoint**: `/events/{eventId}/attendees`
- **Parâmetros**: 
  - `pageIndex`: Índice da página (base 0)
  - `query`: Termo de busca (opcional)

## 🎨 Design System

### Cores Principais
- **Emerald 300**: Elementos de destaque e ícones
- **Orange 400**: Elementos interativos e checkboxes
- **Zinc**: Escala de cinzas para textos e bordas
- **White**: Textos principais e elementos de contraste

### Tipografia
- Fonte padrão do sistema
- Hierarquia clara com tamanhos responsivos
- Peso de fonte variável para hierarquia visual

## 📱 Responsividade

A aplicação é totalmente responsiva com:
- Layout flexível que se adapta a diferentes tamanhos de tela
- Componentes otimizados para mobile
- Navegação touch-friendly

## 🔄 Estado da Aplicação

Gerenciamento de estado com React Hooks:
- **useState**: Para dados locais e UI
- **useEffect**: Para sincronização com API
- **URL State**: Persistência de filtros e paginação na URL

## 🚧 Próximas Funcionalidades

- [ ] Filtros avançados por data de inscrição
- [ ] Exportação de dados em CSV/Excel
- [ ] Sistema de check-in em massa
- [ ] Notificações em tempo real
- [ ] Dashboard com métricas do evento

## 📄 Licença

Este projeto foi desenvolvido durante o NLW Unite da Rocketseat para fins educacionais.

---

<div align="center">
  <p>Desenvolvido com ❤️ durante o <strong>NLW Unite</strong></p>
  <p>
    <a href="https://rocketseat.com.br">
      <img src="https://img.shields.io/badge/Rocketseat-8257E5?style=for-the-badge&logo=rocketseat&logoColor=white" alt="Rocketseat">
    </a>
  </p>
</div>
