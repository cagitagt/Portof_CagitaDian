import { ButtonPrimary } from "./Button";

const sitemap = [
  {
    label: 'Home',
    href: '#home'
  },
  {
    label: 'About',
    href: '#about'
  },
  {
    label: 'Work',
    href: '#work'
  },
  {
    label: 'Reviews',
    href: '#reviews'
  },
  {
    label: 'Contact me',
    href: '#contact'
  }
];

const socials = [
  {
    label: 'GitHub',
    href: 'https://github.com/cagitagt'
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/cagita-dian-a-yunin-828381289/'
  },
  {
    label: 'Email',
    href: 'mailto:cagitadianayunin@gmail.com'
  },
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/caaagt/'
  }
];

const Footer = () => {
  return (
    <footer className="section">
        <div className="container">
            
            <div className="lg:grid lg:grid-cols-2">
                <div className="mb-10">
                    <h2 className="mb-8 headline-1 lg:max-w-[15ch] reveal-up">
                        Let&apos;s work together today!
                    </h2>
                    <ButtonPrimary href="mailto: cagitadianayunin@gmail.com" label="Start Project" icon="chevron_right" classes="reveal-up"/>
                </div>

                <div className="grid grid-cols-2 gap-4 lg:pl-20">
                    <div>
                        <p className="mb-2 reveal-up">Sitemap</p>
                        <ul>
                            {sitemap.map(({label, href}, key) => (
                                <li key={key}>
                                    <a href={href} className="block py-1 text-sm transition-colors text-zinc-400 hover:text-zinc-200 reveal-up">{label}</a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <p className="mb-2 reveal-up">Socials</p>
                        <ul>
                            {socials.map(({label, href}, key) => (
                                <li key={key}>
                                    <a href={href} target="_blank" className="block py-1 text-sm transition-colors text-zinc-400 hover:text-zinc-200 reveal-up">{label}</a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>

            <div className="flex items-center justify-between pt-10 mb-8">
                <a href="/" className="logo reveal-up">
                    <img src="/images/LogoWhiteGt.svg" width={40} height={40} alt="Logo" />
                </a>

                <p className="text-sm reveal-up text-zinc-500">
                    &copy; 2025 <span className="text-zinc-200">Cagita Dian</span>
                </p>
            </div>  
        </div>
    </footer>
  )
}

export default Footer