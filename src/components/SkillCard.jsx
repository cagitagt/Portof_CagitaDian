import PropTypes from "prop-types"

const SkillCard = ({ imgSrc, label, desc, classes }) => {
  return (
    <div className={'flex items-center gap-3 ring-2 ring-inset ring-zinc-50/10 rounded-2xl p-3 hover:bg-zinc-800 transition-colors group ' + classes}>
        <figure className="w-12 h-12 p-2 overflow-hidden transition-colors rounded-lg bg-zinc-700/50 group-hover:bg-zinc-900">
            <img src={imgSrc} alt={label} width={32} height={32}/>
        </figure>

        <div>
            <h3>{label}</h3>

            <p className="text-sm text-zinc-400">{desc}</p>
        </div>
    </div>
  )
}

SkillCard.PropTypes = {
    imgSrc: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
    classes: PropTypes.string
}

export default SkillCard