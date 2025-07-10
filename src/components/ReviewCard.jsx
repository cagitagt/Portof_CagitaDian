import PropTypes from "prop-types";

const ratings = new Array(5);
ratings.fill({
  icon: "star",
  style: { fontVariationSettings: '"FILL" 1' },
});

const ReviewCard = ({ content, name, imgSrc, company }) => {
  return (
    <div className="bg-zinc-800 p-5 rounded-xl min-w-[280px] w-[280px] lg:min-w-[420px] lg:w-[420px] shrink-0 flex flex-col">
      <div className="flex items-center gap-1 mb-3">
        {ratings.map(({ icon, style }, key) => (
          <span
            className="text-yellow-300 material-symbols-rounded text-[18px]"
            style={style}
            key={key}
          >
            {icon}
          </span>
        ))}
      </div>

      <p className="mb-8 text-zinc-400">{content}</p>

      <div className="flex items-center gap-2 mt-auto">
        <figure className="w-10 h-10 rounded-lg img-box">
          <img
            src={imgSrc}
            alt={name}
            width={10}
            height={10}
            loading="lazy"
            className=" img-cover"
          />
        </figure>

        <div>
          <p>{name}</p>
          <p className="text-xs tracking-wider text-zinc-400">{company}</p>
        </div>
      </div>
    </div>
  );
};

ReviewCard.propTypes = {
  content: PropTypes.string.isRequired,
  imgSrc: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  company: PropTypes.string.isRequired,
};

export default ReviewCard;
