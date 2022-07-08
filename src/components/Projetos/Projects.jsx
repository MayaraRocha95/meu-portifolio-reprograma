import React from 'react';


const Projects = () => {
  const dados = [
    { title: 'Meu diário na Reprograma', gif: 'https://user-images.githubusercontent.com/98711190/177662332-d60b3419-2acd-46bb-9fb2-6b878a19ead0.gif', description: 'Meu primeiro projeto React', link: 'https://github.com/MayaraRocha95/meu-diario-reprograma' },
    { title: 'Projeto api com React', gif: 'https://user-images.githubusercontent.com/98711190/177661201-b2acb548-ab3d-4595-baf1-ebb62a322c00.gif', description: ' Primeiro projeto de api com react, com o tema Rick and Morty', link: 'https://github.com/MayaraRocha95/exercicios-semana2-react-reprograma' },
    { title: 'Projeto Dicas Git', gif: 'https://github.com/MayaraRocha95/sitedicas-git/raw/SiteGit/img/sitedicasgit.gif', description: 'Este projeto foi feito nas primeiras semanas da reprograma, para treinar meu aprendizado em Git, usando HTML,CSS.', link: 'https://site-dicas-git.netlify.app/' },
    { title: 'Projeto todo-list', gif: 'https://user-images.githubusercontent.com/98711190/177662793-5a004539-2d3a-489c-9144-02a6f3461878.gif', description: 'Projeto todo-list (Lista de tarefas) com a finalidade de treinar e consolidar conceitos básico e importantes do javascript, sempre seguindo as boas práticas de programação como pequenas funções e funções puras.', link: 'https://github.com/MayaraRocha95/projeto-todo-list2' },
  ]

  return (
    <>
    <div className="projects-container">
      <h1>4 Projetos que fiz na Reprograma</h1>
      {dados.map((projeto) => {
        
        return(
          <div className="project-card">
          <h2>{projeto.title}</h2>
          <img src={projeto.gif} alt={projeto.title} />
          <p>{projeto.description}</p>
          <a href={projeto.link} target="_blank">⤴ </a>
          </div>
          )
        
      })}
      </div>
    </>
  );
}


export default Projects
