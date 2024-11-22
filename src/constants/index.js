import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  kotlin,
  html,
  css,
  reactjs,
  java,
  tailwind,
  cSharp,
  netcore,
  pgsql,
  spring,
  python,
  ncrvoyix,
  trends,
  ourSecret,
  dll,
  reboundtherapy,
  our_secret,
  meal_in_budget,
  ogre,
  cinemalytics,
  newzup,
  nextjs,
  harnoor,
  armin,
  // melissa,
  grant,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Full Stack Web Development",
    icon: web,
  },
  {
    title: "API Design",
    icon: backend,
  },
  {
    title: "Mobile App Development",
    icon: mobile,
  },
  {
    title: "Machine Learning",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Next JS",
    icon: nextjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Java",
    icon: java,
  },
  {
    name: "Spring",
    icon: spring,
  },
  {
    name: "Python",
    icon: python,
  },
  {
    name: "C#",
    icon: cSharp,
  },
  {
    name: ".NET Core",
    icon: netcore,
  },
  {
    name: "Kotlin",
    icon: kotlin,
  },
  {
    name: "PostgreSQL",
    icon: pgsql,
  },
];

const experiences = [
  {
    title: "Software Engineer Intern",
    company_name: "NCR Voyix",
    icon: ncrvoyix,
    iconBg: "#482e91",
    date: "May 2024 - Aug 2024",
    points: [
      "Developed a full-stack web application to showcase NCR’s RESTful cloud APIs.",
      "Utilized a microservice architecture with Next.js, TypeScript, and Tailwind CSS.",
      "Implemented Apple Pay and Google Wallet API integrations, expanding the team’s capabilities.",
      "Improved code quality and coverage through comprehensive testing, including integration, end-to-end (Cypress), and unit tests (Jest).",
      "Contributed to deployment on GCP using Docker, Kubernetes, and GitHub Actions for CI/CD.",
      "The loyalty demo reduces onboarding times by up to 50%, supporting internal teams while enhancing loyalty program management for businesses and customers.",
    ],
  },
  {
    title: "Machine Learning Research Assistant",
    company_name: "TReNDS Center",
    icon: trends,
    iconBg: "#E6DEDD",
    date: "Aug 2022 - Aug 2024",
    points: [
      "Applied advanced machine learning algorithms to analyze multi-site fMRI datasets(over 500 subjects).",
      "Uncovered significant latent functional networks in motion-related signals which is typically discarded.",
      "Research has potential to identify new treatment pathways for schizophrenia.",
      "Authored a 3-page paper and presented it at several conferences, including the 46th Annual International Conference of the IEEE EMBC and the Undergraduate Research Conference.",
    ],
  },
  {
    title: "Software Engineer Intern",
    company_name: "Our Secret Perfumes",
    icon: ourSecret,
    iconBg: "#E6DEDD",
    date: "Aug 2023 - Present",
    points: [
      "Engineered an e-commerce web application using Next.js, TypeScript, Tailwind CSS and MySQL.",
      "Integrated Razorpay’s RESTful APIs to add secure payment processing and checkout options.",
      "Achieved a significant increase in monthly order volume (from 80 to 310+) and significantly boosted the company’s market presence and sales growth through the new platform.",
    ],
  },
  {
    title: "Technology Intern",
    company_name: "DLL@GSU",
    icon: dll,
    iconBg: "#125eab",
    date: "Oct 2021 - Present",
    points: [
      "Led the design and delivery of beginner friendly programming workshops in Java, Python, and web development (HTML, CSS, JS) for university students and staff, showcasing technical expertise and curriculum development skills.",
      "Implemented innovative engagement strategies, resulting in a 𝟲𝟬% 𝗶𝗻𝗰𝗿𝗲𝗮𝘀𝗲 in attendee retention and participation, demonstrating strong leadership and ability to drive measurable results in educational technology initiatives.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Sam has exhibited a remarkable ability to learn swiftly and consistently demonstrated exceptional problem-solving skills, making him an invaluable addition to my team.",
    name: "Dr. Armin Iraji",
    designation: "Assistant Professor of CS",
    company: "Georgia State University",
    image: armin,
  },
  // {
  //   testimonial:
  //     "Sam is an outstanding instructor and a valuable team member. His extensive knowledge and approachable demeanor make him an indispensable asset. ",
  //   name: "L.M. Spencer",
  //   designation: "Tech Training Specialist",
  //   company: "Georgia State University",
  //   image: melissa,
  // },
  {
    testimonial:
      "Collaborating with Sam on a mobile app project has been truly inspiring. His unwavering dedication to solving challenges with precision, coupled with his curiosity, consistently leads to exceptional solutions to problems.",
    name: "Harnoor Singh",
    designation: "Content Creator@Youtube Software Engineer",
    company: "Microsoft",
    image: harnoor,
  },
  {
    testimonial:
      "Sam was an incredible intern during his time at NCR Voyix. Not only was his past work and schooling impressive, he showed great initiative, eagerness to learn, and ownership of the project he was tasked with completing over the summer. His professional attitude and positive outlook raised my standards for interns and employees alike.",
    name: "Grant Slone",
    designation: "Software Engineer",
    company: "NCR Voyix",
    image: grant,
  },
];

const projects = [
  {
    name: "Our Secret Perfumes",
    description:
      "An e-commerce web application for a small business that resulted in a signicant increase in monthly order volume (from 80 to 210+) and significant enhancements to the company's market presence and sales growth.",
    tags: [
      {
        name: "next.js",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "freelance",
        color: "pink-text-gradient",
      },
    ],
    image: our_secret,
    source_code_link: "https://github.com/Samk104/eMergeHubClient",
  },
  {
    name: "Meal In Budget",
    description:
      "A web application that streamlines meal planning by automating recipe ingredient price comparisons across local supermarkets. Saves up to 30% on groceries and reduces planning time by up to 60%.",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "flask",
        color: "green-text-gradient",
      },
      {
        name: "selenium & beautiful soup",
        color: "pink-text-gradient",
      },
    ],
    image: meal_in_budget,
    source_code_link: "https://github.com/Samk104/Meal-In-Budget",
  },
  {
    name: "OGRE",
    description:
      "An iOS app for GRE preparation, featuring adaptive learning algorithms, personalized study plans, gamification elements like leaderboards and streaks that boosted daily test user engagement by 85% and more ...",
    tags: [
      {
        name: "swift",
        color: "blue-text-gradient",
      },
      {
        name: "swiftui",
        color: "green-text-gradient",
      },
      {
        name: "firebase",
        color: "pink-text-gradient",
      },
    ],
    image: ogre,
    source_code_link: "https://github.com/Rijulmehta531/OGRE",
  },
  {
    name: "Cinemalytics",
    description:
      "A machine learning-driven solution that predicts movie success with 80% accuracy, leveraging a dataset of over 1 million films. Implemented a variety of models.",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "numpy",
        color: "green-text-gradient",
      },
      {
        name: "scikit",
        color: "pink-text-gradient",
      },
    ],
    image: cinemalytics,
    source_code_link: "https://github.com/Samk104/Cinemalytics",
  },
  {
    name: "NewzUp",
    description:
      "Catch up on tech news effortlessly: A news app that presents tech updates with thumbnail previews and headlines, making reading articles a breeze.",
    tags: [
      {
        name: "kotlin",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "android",
        color: "pink-text-gradient",
      },
    ],
    image: newzup,
    source_code_link: "https://github.com/Samk104?tab=repositories",
  },
  {
    name: "Rebound Therapy",
    description:
      "Empower individuals with disabilities: A personalized workout and progress tracking app tailored to individual needs, making fitness accessible to all.",
    tags: [
      {
        name: "flutter",
        color: "blue-text-gradient",
      },
      {
        name: "firebase",
        color: "green-text-gradient",
      },
      {
        name: "hackathon-winner",
        color: "pink-text-gradient",
      },
    ],
    image: reboundtherapy,
    source_code_link: "https://github.com/Samk104?tab=repositories",
  },
];

export { services, technologies, experiences, testimonials, projects };
