import React from "react";
import "./App.css";

import mail from "./assets/images/note.gif";
import hello from "./assets/images/hello.gif";

export default function BioPanel() {
  return (
    <aside className="column left">
      <h2>About Me</h2>
      <img src={hello} alt="Hello" />
      <br />
      <p>
        I'm a Brazilian software engineer with a great focus on back-end
        development. My main stack is TypeScript, Node.js, and NestJS. I have
        experience with various SQL databases and MongoDB on the NoSQL side of
        things. I'm also proficient in Python for scripting and web development
        with Django, as well as C/C++ for high-performance applications and
        interface building with Qt.
      </p>
      <p>
        In academia, I've built expertise in high-performance computing (HPC)
        and security research. As a member of the Parallel and Distributed
        Processing Group (GPPD) at my alma mater, the Federal University of Rio
        Grande do Sul (UFRGS), I evaluated parallel algorithms perfomance on
        various CPU clusters by analysing hardware counters. For my
        undergraduate thesis, I implemented a robust crypto scheme using
        Multi-Authority Attribute-Based Encryption (MA-ABE), providing
        fine-grained attribute-based access control, scalable key management,
        and decentralized policy enforcement for securing hIoT data.
      </p>
      <p>
        Outside the digital realm, I practice Kendō and Iaidō under Sensei
        Hasegawa at Mizuho Dōjō. They are great martial arts and they are great
        to get your body moving and avoid the sedentary lifestyle of a typical
        developer. Kendō's energetic and explosive movements are a great way to
        vent the stress of everyday life, while Iaidō's calm and focused
        movements are a great way to practice mindfulness and meditation. That,
        combined with the discipline and respect for others that japanese
        martial arts teach, is a great way to improve my life.
      </p>
      <p>
        Photography is also a great passion of mine. From nature to street
        photography, I enjoy capturing the world and eternalizing its most
        beautiful moments. Post-processing to balance colors and composition is
        another creative outlet I cherish.
      </p>
      <p>
        Aviation has been a lifelong passion. I remember playing Microsoft
        Flight Simulator 2004 as a kid, and in 2022 I finally realized my dream
        and began my flight training at Aeroclube do Rio Grande do Sul. Although
        I haven't yet earned my pilot's license, I remain deeply engaged in
        civil aviation and hope one day to travel around the world in my own
        plane.
      </p>
      <p>//TODO: Talk about music</p>
      <p>//TODO: Geek about language learning</p>
      <p>Explore my portfolios to see more about my passions and my work.</p>
      <hr />
      <a href="mailto:hello@felipegraeff.com">
        <img src={mail} width="40%" alt="Email me" />
        <br />
        Contact Me
      </a>
    </aside>
  );
}
