import React from 'react';
import './projetos.css'

const Projects = () => {
  const dados = [
    { title: 'Meu diário na Reprograma', gif: 'https://user-images.githubusercontent.com/98711190/178161970-3b64239e-4f91-454d-97de-6e75fab3da2a.gif', description: 'Meu primeiro projeto React', link: 'https://github.com/MayaraRocha95/meu-diario-reprograma' },
    { title: 'Projeto api com React', gif: 'https://user-images.githubusercontent.com/98711190/178314691-b84164b7-170c-4540-9cc0-cdf9e29fa166.gif', link: 'https://github.com/MayaraRocha95/exercicios-semana2-react-reprograma' },
    { title: 'Projeto Dicas Git', gif: 'https://github.com/MayaraRocha95/sitedicas-git/raw/SiteGit/img/dicasgit.gif', description: 'Este projeto foi feito nas primeiras semanas da reprograma, para treinar meu aprendizado em Git, usando HTML,CSS.', link: 'https://site-dicas-git.netlify.app/' },
    { title: 'Projeto todo-list', gif: 'https://user-images.githubusercontent.com/98711190/178311237-3af4ea51-955e-48b4-bb6a-5619ece53578.gif', description: 'Projeto todo-list (Lista de tarefas) com a finalidade de treinar e consolidar conceitos básico e importantes do javascript, sempre seguindo as boas práticas de programação como pequenas funções e funções puras.', link: 'https://github.com/MayaraRocha95/projeto-todo-list2' },
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
