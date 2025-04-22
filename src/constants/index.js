import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  aws,
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
  freelance,
  ncrvoyix,
  trends,
  // ourSecret,
  dll,
  reboundtherapy,
  // our_secret,
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
    title: "Cloud Engineering",
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
    name: "AWS",
    icon: aws,
  },
  {
    name: "PostgreSQL",
    icon: pgsql,
  },
];

const experiences = [
  {
    title: "Software Engineer",
    company_name: "Buzzaro",
    icon: freelance,
    iconBg: "#482e91",
    date: "March 2023 - March 2025",
    points: [
    "Co-developed a 𝗳𝘂𝗹𝗹-𝘀𝘁𝗮𝗰𝗸 𝗦𝗮𝗮𝗦 platform enabling small-medium businesses to launch customizable online storefronts — boosting 𝗿𝗲𝘃𝗲𝗻𝘂𝗲 𝗯𝘆 𝟱𝟳% for 𝟮𝟭+ 𝗯𝘂𝘀𝗶𝗻𝗲𝘀𝘀𝗲𝘀 using Next.js, Node.js, Tailwind CSS, and TypeScript",
    "Migrated backend from TiDB to AWS RDS (PostgreSQL) and transitioned frontend from Vercel Cloud to AWS (S3, CloudFront, EC2, CloudWatch), reducing compute costs and improving system performance and deployment control",
    "Improved seller efficiency by ∼𝟰𝟱% by building RESTful APIs for the seller portal, using Kafka to handle inventory, order tracking, and sales analytics through decoupled event processing",
    "Enhanced security and user access by building a 𝗝𝗪𝗧-based 𝗮𝘂𝘁𝗵𝗲𝗻𝘁𝗶𝗰𝗮𝘁𝗶𝗼𝗻 𝗺𝗶𝗰𝗿𝗼𝘀𝗲𝗿𝘃𝗶𝗰𝗲 using Java and Spring Boot, integrating OAuth2.0 for third-party sign-in (Google, Facebook)",
    "Built secure checkout workflows and integrated Razorpay’s APIs, processing $𝟮𝟳𝟬𝗞+ in transactions for thousands of active users",
    ]
  },
  {
    title: "Software Engineer Intern",
    company_name: "NCR Voyix",
    icon: ncrvoyix,
    iconBg: "#482e91",
    date: "May 2024 - Aug 2024",
    points: [
    "Developed a 𝘄𝗲𝗯 𝗮𝗽𝗽 to showcase diverse use-cases of cloud microservices by layering demo APIs, boosting 𝗮𝗱𝗼𝗽𝘁𝗶𝗼𝗻 𝗿𝗮𝘁𝗲 by ∼𝟯𝟯%, using Next.js, TypeScript, and Tailwind CSS",
    "Enabled seamless mobile loyalty and gift card management by integrating Apple pay, Google wallet APIs and developing a Java, Spring Boot service that issues mobile-ready digital gift cards",
    "Achieved 𝟵𝟲% 𝘁𝗲𝘀𝘁 𝗰𝗼𝘃𝗲𝗿𝗮𝗴𝗲 through comprehensive integration, unit (Jest), and e2e (Cypress) testing",
    "Deployed the app on AWS by leveraging Docker, Kubernetes, and GitHub Actions for CI/CD",
    ],
  },
  {
    title: "Machine Learning Research Assistant",
    company_name: "TReNDS Center",
    icon: trends,
    iconBg: "#E6DEDD",
    date: "Aug 2022 - May 2024",
    points: [
      "Applied 𝗮𝗱𝘃𝗮𝗻𝗰𝗲𝗱 𝗺𝗮𝗰𝗵𝗶𝗻𝗲 𝗹𝗲𝗮𝗿𝗻𝗶𝗻𝗴 𝗮𝗹𝗴𝗼𝗿𝗶𝘁𝗵𝗺𝘀 to multi-site 𝗳𝗠𝗥𝗜 datasets (over 𝟱𝟬𝟬 𝘀𝘂𝗯𝗷𝗲𝗰𝘁𝘀) discovering 𝗹𝗮𝘁𝗲𝗻𝘁 𝗶𝗻𝗳𝗼𝗿𝗺𝗮𝘁𝗶𝗼𝗻 in typically 𝗱𝗶𝘀𝗰𝗮𝗿𝗱𝗲𝗱 data signals, potentially identifying new 𝘁𝗿𝗲𝗮𝘁𝗺𝗲𝗻𝘁 𝗽𝗮𝘁𝗵𝘄𝗮𝘆𝘀 𝗳𝗼𝗿 𝘀𝗰𝗵𝗶𝘇𝗼𝗽𝗵𝗿𝗲𝗻𝗶𝗮",
      "Authored a 𝗿𝗲𝘀𝗲𝗮𝗿𝗰𝗵 𝗽𝗮𝗽𝗲𝗿 and presented it at several conferences, including the 𝟰𝟲𝘁𝗵 𝗔𝗻𝗻𝘂𝗮𝗹 𝗜𝗻𝘁𝗲𝗿𝗻𝗮𝘁𝗶𝗼𝗻𝗮𝗹 𝗖𝗼𝗻𝗳𝗲𝗿𝗲𝗻𝗰𝗲 𝗼𝗳 𝘁𝗵𝗲 𝗜𝗘𝗘𝗘 𝗘𝗠𝗕𝗖 and the Undergraduate Research Conference",
    ],
  },

  {
    title: "Technology Intern",
    company_name: "DLL@GSU",
    icon: dll,
    iconBg: "#125eab",
    date: "Oct 2021 - May 2024",
    points: [
      "Led the development and delivery of beginner-friendly programming workshops in 𝗝𝗮𝘃𝗮, 𝗣𝘆𝘁𝗵𝗼𝗻, 𝗮𝗻𝗱 𝘄𝗲𝗯 𝗱𝗲𝘃𝗲𝗹𝗼𝗽𝗺𝗲𝗻𝘁 (𝗛𝗧𝗠𝗟, 𝗖𝗦𝗦, 𝗝𝗦) for over 𝟰𝟬𝟬𝟬 𝘂𝗻𝗶𝘃𝗲𝗿𝘀𝗶𝘁𝘆 𝘀𝘁𝘂𝗱𝗲𝗻𝘁𝘀 𝗮𝗻𝗱 𝘀𝘁𝗮𝗳𝗳, resulting in a 𝟳𝟱% 𝗶𝗻𝗰𝗿𝗲𝗮𝘀𝗲 𝗶𝗻 𝗮𝘁𝘁𝗲𝗻𝗱𝗲𝗲 𝗿𝗲𝘁𝗲𝗻𝘁𝗶𝗼𝗻 and a 𝟲𝟬% 𝗯𝗼𝗼𝘀𝘁 𝗶𝗻 𝗮𝗰𝘁𝗶𝘃𝗲 𝗽𝗮𝗿𝘁𝗶𝗰𝗶𝗽𝗮𝘁𝗶𝗼𝗻, by implementing hands-on coding exercises, live demonstrations, and real-world project simulations",
      "Cultivated a diverse learning environment, attracting participants from 𝟭𝟱 𝗱𝗶𝗳𝗳𝗲𝗿𝗲𝗻𝘁 𝗮𝗰𝗮𝗱𝗲𝗺𝗶𝗰 𝗱𝗲𝗽𝗮𝗿𝘁𝗺𝗲𝗻𝘁𝘀 and achieving a 𝟵𝟯% 𝘀𝗮𝘁𝗶𝘀𝗳𝗮𝗰𝘁𝗶𝗼𝗻 𝗿𝗮𝘁𝗲 among workshop attendees, by developing an inclusive curriculum and conducting post-session surveys for continuous improvement",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Sam was an incredible intern during his time at NCR Voyix. Not only was his past work and schooling impressive, he showed great initiative, eagerness to learn, and ownership of the project he was tasked with completing over the summer. His professional attitude and positive outlook raised my standards for interns and employees alike.",
    name: "Grant Slone",
    designation: "Software Engineer",
    company: "NCR Voyix",
    image: grant,
  },
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
];

const projects = [
  // {
  //   name: "Our Secret Perfumes",
  //   description:
  //     "An e-commerce web application for a small business that resulted in a signicant increase in monthly order volume (from 80 to 210+) and significant enhancements to the company's market presence and sales growth.",
  //   tags: [
  //     {
  //       name: "next.js",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "restapi",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "freelance",
  //       color: "pink-text-gradient",
  //     },
  //   ],
  //   image: our_secret,
  //   source_code_link: "https://github.com/Samk104/eMergeHubClient",
  // },
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
