// AboutMe.jsx
import Accordion from "./Accordion";

const aboutSections = [
  // Development
  // Research
  // Martial arts
  // Photography
  // Aviation
  // Music
  // Linguistics
  {
    title: "Development",
    content: (
      <p>
        I'm a Brazilian software engineer with a great focus on back-end
        development. My main stack is TypeScript, Node.js, and NestJS. I have
        experience with various SQL databases and MongoDB on the NoSQL side of
        things. I'm also proficient in Python for scripting and web development
        with Django, as well as C/C++ for high-performance applications and Qt.
      </p>
    ),
  },
  {
    title: "Research",
    content: (
      <p>
        In academia, I've built expertise in high-performance computing (HPC)
        and security research. As a member of the Parallel and Distributed
        Processing Group (GPPD) at my alma mater, the Federal University of Rio
        Grande do Sul (UFRGS), I evaluated parallel algorithms performance on
        various CPU clusters by analyzing hardware counters. For my
        undergraduate thesis, I implemented a robust crypto scheme using
        Multi-Authority Attribute-Based Encryption (MA-ABE), providing
        fine-grained attribute-based access control, scalable key management,
        and decentralized policy enforcement for securing hIoT data.
      </p>
    ),
  },
  {
    title: "Martial Arts",
    content: (
      <p>
        Outside the digital realm, I practice Kendō and Iaidō under Sensei
        Hasegawa at Mizuho Dōjō. They are great martial arts and they are great
        to get your body moving and avoid the sedentary lifestyle of a typical
        developer. Kendō's energetic and explosive movements are a great way to
        vent the stress of everyday life, while Iaidō's calm and focused
        movements are a great way to practice mindfulness and meditation. That,
        combined with the discipline and respect for others that Japanese
        martial arts teach, is a great way to improve my life.
      </p>
    ),
  },
  {
    title: "Photography",
    content: (
      <p>
        Photography is also a great passion of mine. From nature to street
        photography, I enjoy capturing the world and eternalizing its most
        beautiful moments. Post-processing to balance colors and composition is
        another creative outlet I cherish.
      </p>
    ),
  },
  {
    title: "Aviation",
    content: (
      <p>
        Aviation has been a lifelong passion. I remember playing Microsoft
        Flight Simulator 2004 as a kid, and in 2022 I finally realized my dream
        and began my flight training at Aeroclube do Rio Grande do Sul. Although
        I haven't yet earned my pilot's license, I remain deeply engaged in
        civil aviation and hope one day to travel around the world in my own
        plane.
      </p>
    ),
  },
  {
    title: "Music",
    content: <p>//TODO: Talk about music</p>,
  },
  {
    title: "Linguistics",
    content: <p>//TODO: Geek about language learning</p>,
  },
];

export default function AboutMe() {
  return <Accordion sections={aboutSections} />;
}
