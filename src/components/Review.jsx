import ReviewCard from "./ReviewCard";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(useGSAP, ScrollTrigger);

const reviews = [
  {
    content: 'Creative and skilled! Produced a modern, user-friendly site that exceeded expectations. Great communication.',
    name: 'Noah Williams',
    imgSrc: '/images/people-4.jpg',
    company: 'BrightWeb'
  },
  {
    content: "Cagita is someone who can always be relied upon. In every task assigned, she always works professionally and responsibly. Her work is always completed on time, sometimes even ahead of the deadline. In addition, her work is also neat and of high quality. While working together, Cagita is also always communicative, easy to discuss with, and has high initiative. It's a pleasure to work with someone as competent and committed as her.",
    name: 'Sharleen Alicia Surentu',
    imgSrc: '/images/Sharleen.jpeg',
    company: 'Head of Dept External Fordi Mapelar UB'
  },
  {
    content: "Working with Cagita has been a great experience! She's super passionate about web development and always eager to learn more especially when it comes to machine learning. I’ve seen how she takes on challenges with curiosity and determination, whether it's building a clean, responsive website or diving into data and models. She's a fast learner, a great team player, and someone who genuinely enjoys creating cool, useful tech. I'm excited to see where her skills take her next!",
    name: 'Aulia Luthfi Hakim',
    imgSrc: '/images/hakim.jpeg',
    company: 'Information Tech Student'
  },
  {
    content: '"Very professional in working on projects. In addition to his neat and structured work, the way he conveys material to ordinary people is also very clear and easy to understand. His presentations are always well-organized, making people who listen feel comfortable and easily catch the essence of the discussion."',
    name: 'Cania Azzahra',
    imgSrc: '/images/cania.jpeg',
    company: '3Chickflow Owner'
  },
  {
    content: "I recommend Cagita when it comes to teamwork. As one of my colleagues who has worked with Cagita, I have seen firsthand how she is a reliable, diligent developer who is always eager to learn and quickly adapts to both the work environment and the latest technological developments. In addition to her technical skills, Cagita also has a professional, communicative, and cooperative attitude, which greatly supports the creation of solid and effective teamwork.",
    name: 'Nadia Alya Paramitha Erwanto',
    imgSrc: '/images/alya.jpeg',
    company: 'Information Tech Student'
  },
  {
    content: 'Professional work! Delivered on time, with a polished design and smooth user experience. Top-notch developer.',
    name: 'Wildan Azzuhaili',
    imgSrc: '/images/people-5.jpg',
    company: 'PSIK FV UB Intern'
  },
];

const Review = () => {
  useGSAP(() => {
    gsap.to('.scrub-slide', {
      scrollTrigger: {
        trigger: '.scrub-slide',
        scrub: true,
        start: 'top bottom',
        end: 'bottom top',
      },
      x: '-1000',
    });
  });

  return (
    <section className="overflow-hidden section" id="reviews">
      <div className="container px-4 mx-auto">
        <h2 className="mb-8 headline-2 reveal-up">
          What they say
        </h2>

        <div className="overflow-x-auto lg:overflow-visible hide-scrollbar">
          <div className="flex items-stretch gap-3 scrub-slide min-w-max lg:min-w-full">
            {reviews.map(({ content, name, imgSrc, company }, key) => (
              <ReviewCard 
                key={key}
                name={name}
                imgSrc={imgSrc}
                company={company}
                content={content}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Review;
