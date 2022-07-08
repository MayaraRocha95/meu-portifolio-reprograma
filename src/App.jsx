import Header from './components/Header/Header'
import Titulo from './components/Titulo/Titulo'
import Imagem from './components/Imagem/Imagem'
import Apresentacao from './components/Apresentação/Apresentacao'
import Footer from './Footer/Footer'
import './App.css'
import Repositorios from './components/Repositorios/Repositorios'
import Projects from './components/Projetos/Projects'

function App() {
 

  return (
  <> 
  <header>
  <Header>Meu Portifólio da Reprograma</Header>
  </header>
  <nav className="navbar">
    <Imagem image="https://i.picasion.com/pic92/7ed949395b718fa94155b37df4490576.gif" alt="imagem da desenvolvedora do site" />
    <Titulo title="Olá eu sou a Mayara" />
  </nav>  
  <section>
    <Apresentacao>Sou aluna na reprograma, Comecei a estudar programação em casa e me apaixonei , além de ser uma  Geek que ama a tecnologia. Meu objetivo na tecnologia é deixar os códigos com acessibilidade. </Apresentacao>
    <hr/>
  </section>
 <section>
  <Projects/>
  </section>
  <hr/>
  <article>
      < Repositorios/>
  </article>
  <footer>
  <Footer> Feito com muito carinho por Mayara Rocha | Turma On17 | 2022</Footer>
  </footer>
  </>
  )
}

export default App
