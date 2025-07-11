
import ProjectCard from "./ProjectCard";

const works = [
  {
    imgSrc: '/images/batikindo.png',
    title: 'E-Commerce Website',
    tags: ['Vue.js'],
    projectLink: 'https://github.com/cagitagt/fe_rev_batik'
  },
  {
    imgSrc: '/images/tictactoe.png',
    title: 'TicTacToe Game',
    tags: ['JS'],
    projectLink: 'https://gmticctactoe.netlify.app/'
  },
  {
    imgSrc: '/images/flixera.png',
    title: 'Streaming Service',
    tags: ['Development', 'API'],
    projectLink: ''
  },
  {
    imgSrc: '/images/project-4.jpg',
    title: 'Real state website',
    tags: ['Web-design', 'Development'],
    projectLink: 'https://github.com/codewithsadee-org/wealthome'
  },
  {
    imgSrc: '/images/project-5.jpg',
    title: 'eCommerce website',
    tags: ['eCommerce', 'Development'],
    projectLink: 'https://github.com/codewithsadee/anon-ecommerce-website'
  },
  {
    imgSrc: '/images/project-6.jpg',
    title: 'vCard Personal portfolio',
    tags: ['Web-design', 'Development'],
    projectLink: 'https://github.com/codewithsadee/vcard-personal-portfolio'
  },
];

const Work = () => {
  return (
    <section className="section" id="work">
        <div className="container">
            <h2 className="mb-8 headline-2 reveal-up">
                My portfolio
            </h2>

            <div className="grid gap-x-4 gap-y-5 grid-cols-[repeat(auto-fill,_minmax(280px,_1fr))]">
                {works.map(({imgSrc, title, tags, projectLink}, key) => (
                    <ProjectCard key={key} imgSrc={imgSrc} title={title} tags={tags} projectLink={projectLink} classes="reveal-up"/>
                ))}
            </div>
        </div>
    </section>
  )
}

export default Work

