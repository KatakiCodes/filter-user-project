import { IUser } from "../interfaces/user/user.interface";

export const UserDataList: IUser[] = [
  {
    nome: "Ana Silva",
    email: "ana.silva@email.com",
    senha: "Senha@123",
    idade: 28,
    endereco: {
      rua: "Rua das Acácias",
      numero: 120,
      cidade: "Luanda",
      estado: "Luanda",
      pais: "Angola"
    },
    telefone: "244923456789",
    ativo: true,
    funcao: "Analista Financeira",
    dataCadastro: new Date("2025-01-10T00:00:00"),
    status: {
      online: true,
      verificado: true,
      assinaturaAtiva: true,
      ultimoAcesso: new Date("2025-12-17T21:30:00")
    }
  },
  {
    nome: "Carlos Mendes",
    email: "carlos.mendes@email.com",
    senha: "Carlos#456",
    idade: 35,
    endereco: {
      rua: "Av. Principal",
      numero: 45,
      cidade: "Benguela",
      estado: "Benguela",
      pais: "Angola"
    },
    telefone: "912334455",
    ativo: true,
    funcao: "Desenvolvedor Backend",
    dataCadastro: new Date("2024-11-02"),
    status: {
      online: false,
      verificado: true,
      assinaturaAtiva: false,
      ultimoAcesso: new Date("2025-12-15T18:10:00")
    }
  },
  {
    nome: "João Pereira",
    email: "joao.pereira@email.com",
    senha: "Joao@789",
    idade: 22,
    endereco: {
      rua: "Rua do Sol",
      numero: 78,
      cidade: "Huambo",
      estado: "Huambo",
      pais: "Angola"
    },
    telefone: "934112233",
    ativo: true,
    funcao: "Estudante",
    dataCadastro: new Date("2025-03-05"),
    status: {
      online: true,
      verificado: false,
      assinaturaAtiva: false,
      ultimoAcesso: new Date("2025-12-18T19:45:00")
    }
  },
  {
    nome: "Maria Costa",
    email: "maria.costa@email.com",
    senha: "Maria@321",
    idade: 30,
    endereco: {
      rua: "Rua Central",
      numero: 300,
      cidade: "Lubango",
      estado: "Huíla",
      pais: "Angola"
    },
    telefone: "911223344",
    ativo: false,
    funcao: "Gestora de Projetos",
    dataCadastro: new Date("2023-09-20"),
    status: {
      online: false,
      verificado: true,
      assinaturaAtiva: true,
      ultimoAcesso: new Date("2025-10-01T10:00:00")
    }
  },
  {
    nome: "Pedro Rocha",
    email: "pedro.rocha@email.com",
    senha: "Pedro#999",
    idade: 27,
    endereco: {
      rua: "Rua Nova",
      numero: 56,
      cidade: "Malanje",
      estado: "Malanje",
      pais: "Angola"
    },
    telefone: "926778899",
    ativo: true,
    funcao: "Designer UI/UX",
    dataCadastro: new Date("2024-06-18"),
    status: {
      online: true,
      verificado: true,
      assinaturaAtiva: false,
      ultimoAcesso: new Date("2025-12-18T20:10:00")
    }
  },
  {
    nome: "Lucas Almeida",
    email: "lucas.almeida@email.com",
    senha: "Lucas@2025",
    idade: 33,
    endereco: {
      rua: "Av. Independência",
      numero: 10,
      cidade: "Luena",
      estado: "Moxico",
      pais: "Angola"
    },
    telefone: "944556677",
    ativo: true,
    funcao: "Engenheiro de Software",
    dataCadastro: new Date("2022-12-01"),
    status: {
      online: false,
      verificado: true,
      assinaturaAtiva: true,
      ultimoAcesso: new Date("2025-12-10T08:40:00")
    }
  },
  {
    nome: "Fernanda Lopes",
    email: "fernanda.lopes@email.com",
    senha: "Fer@456",
    idade: 26,
    endereco: {
      rua: "Rua Verde",
      numero: 88,
      cidade: "Soyo",
      estado: "Zaire",
      pais: "Angola"
    },
    telefone: "933221100",
    ativo: true,
    funcao: "Marketing Digital",
    dataCadastro: new Date("2024-04-14"),
    status: {
      online: true,
      verificado: false,
      assinaturaAtiva: false,
      ultimoAcesso: new Date("2025-12-18T21:00:00")
    }
  },
  {
    nome: "Rui Matos",
    email: "rui.matos@email.com",
    senha: "Rui@888",
    idade: 41,
    endereco: {
      rua: "Rua Comercial",
      numero: 12,
      cidade: "Ndalatando",
      estado: "Cuanza Norte",
      pais: "Angola"
    },
    telefone: "915667788",
    ativo: false,
    funcao: "Consultor",
    dataCadastro: new Date("2021-08-09"),
    status: {
      online: false,
      verificado: true,
      assinaturaAtiva: false,
      ultimoAcesso: new Date("2025-09-30T14:15:00")
    }
  },
  {
    nome: "Paula Neves",
    email: "paula.neves@email.com",
    senha: "Paula#123",
    idade: 29,
    endereco: {
      rua: "Rua Azul",
      numero: 205,
      cidade: "Sumbe",
      estado: "Cuanza Sul",
      pais: "Angola"
    },
    telefone: "921998877",
    ativo: true,
    funcao: "Contabilista",
    dataCadastro: new Date("2023-02-17"),
    status: {
      online: true,
      verificado: true,
      assinaturaAtiva: true,
      ultimoAcesso: new Date("2025-12-18T22:05:00")
    }
  },
  {
    nome: "André Fonseca",
    email: "andre.fonseca@email.com",
    senha: "Andre@007",
    idade: 24,
    endereco: {
      rua: "Rua Jovem",
      numero: 9,
      cidade: "Caxito",
      estado: "Bengo",
      pais: "Angola"
    },
    telefone: "936445566",
    ativo: true,
    funcao: "Estagiário de TI",
    dataCadastro: new Date("2025-07-01"),
    status: {
      online: true,
      verificado: false,
      assinaturaAtiva: false,
      ultimoAcesso: new Date("2025-12-18T22:30:00")
    }
  }
];
