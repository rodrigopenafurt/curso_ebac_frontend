const alunos = [
    { nome: 'Roberto', notaAluno: 7 },
    { nome: 'Ana', notaAluno: 5 },
    { nome: 'Pedro', notaAluno: 8 },
    { nome: 'Caio', notaAluno: 4 },
    { nome: 'Rose', notaAluno: 6.5 }
  ];

  const verificaAlunosAprovados = (alunos) => alunos.filter((aluno) => aluno.notaAluno >= 6);
  const alunosAprovados = verificaAlunosAprovados(alunos);
  
  console.log(alunosAprovados);
  