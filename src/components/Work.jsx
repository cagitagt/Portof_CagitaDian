
import ProjectCard from "./ProjectCard";

const works = [
  {
    imgSrc: '/images/batikindo.png',
    title: 'E-Commerce Website',
    tags: ['Frontend', 'Nuxt.js', 'TailwindCSS'],
    projectLink: 'https://batikindonesiaweb.vercel.app/'
  },
  {
    imgSrc: '/images/tictactoe.png',
    title: 'TicTacToe Game',
    tags: ['Frontend', 'JS', 'Native'],
    projectLink: 'https://gmticctactoe.netlify.app/'
  },
  {
    imgSrc: '/images/flixera.png',
    title: 'Streaming Service',
    tags: ['Frontend', 'Vue.js', 'TailwindCSS'],
    projectLink: 'https://flixeraweb.vercel.app/'
  },
  {
    imgSrc: '/images/safaroutes.png',
    title: 'Travel App',
    tags: ['Mobile-design', 'UI/UX', 'Figma'],
    projectLink: 'https://www.figma.com/proto/Yjm4QSDIUhT3j3ZK4f1fs6/Safaroutes?page-id=0%3A1&node-id=4-2603&p=f&viewport=87%2C-333%2C0.28&t=UgrdTSx8rQzRBjUM-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=4%3A2603&show-proto-sidebar=1'
  },
  {
    imgSrc: '/images/feelty.png',
    title: 'Sports App',
    tags: ['Mobile-design', 'UI/UX', 'Figma'],
    projectLink: 'https://www.figma.com/proto/yM7cvJGTNHP8C8ttVUoDfv/Technotion?page-id=20%3A2&node-id=307-1587&viewport=407%2C812%2C0.17&t=TmEMl2AvmomvRiBw-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=335%3A1907&show-proto-sidebar=1'
  },
  {
    imgSrc: '/images/creanomic.png',
    title: 'Promotion Website',
    tags: ['Web-design', 'UI/UX', 'Figma'],
    projectLink: 'https://www.creanomicub.com/'
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

