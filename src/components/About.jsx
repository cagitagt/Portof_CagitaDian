
const aboutItems = [
    {
        label: 'Project done',
        number: 5
    },
    // {
    //     label: 'Years of Experience',
    //     number: 1
    // }
];

const About = () => {
  return (
    <section className="section" id="about">
        <div className="container">
            <div className="bg-zinc-800/50 p-7 rounded-2xl md:p-12 reveal-up">
                <p className="mb-4 text-zinc-300 md:mb-8 md:text-xl ">
                    I am a 4th semester student of Information Technology major at Brawijaya University who is passionate about IT, especially in web development and machine learning. I actively seek opportunities to learn and develop my skills through small projects, online courses, bootcamps, and getting involved in campus and off-campus organizations. I am ready to contribute in teams and projects to achieve satisfactory and innovative results.
                </p>

                <div className="flex flex-wrap items-center gap-4 md:gap-7">
                    {
                        aboutItems.map(({ label, number }, key) => (
                            <div key={key}>
                                <div className="flex items-center md:mb-2">
                                    <span className="text-2xl font-semibold md:text-4xl">{number}</span>
                                    <span className="font-semibold text-white md:text-3xl">+</span>
                                </div>

                                <p className="text-sm text-zinc-400">{label}</p>
                            </div>
                        ))
                    }

                    <img src="/images/LogoWhiteGt.svg" alt="Logo" width={30} height={30} className="ml-auto md:w-[40px] md:h-[40px]"/>
                </div>
            </div>
        </div>
    </section>
  )
}

export default About