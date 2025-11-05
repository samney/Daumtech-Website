import { Description } from "@headlessui/react";

const mockJobs = [
  // Data Science Jobs
  {
    id: 1,
    DaumtechAbout: [
      {
        title: {
          type: "Heading",
          content: "A PROPOS DE DAUMTECH",
        },
        Description: {
          type: "text",
          content:
            "AgriEdge est une entreprise AgriTech marocaine dédiée à l'innovation, la durabilité et la transformation numérique dans l'agriculture.",
        },
        media: [
          {
            type: "image",
            content: "/assets/newimport/career/TeamWork.png",
            altText: "WorkTeam",
          },
        ],
      },
    ],
    Title: "Data Science Manager",
    MissionPrincipale: [
      {
        title: {
          type: "text",
          content: "Mission Principale",
        },
        Description: {
          type: "text",
          content:
            "En tant que Data Science Manager, vous consoliderez toutes les activités de gestion de projets DataScience au sein d'AgriEdge.",
        },
      },
    ],
    ProfileRequis: [
      {
        title: {
          type: "text",
          content: "Profile requis",
        },
        Description: {
          titre: {
            type: "text",
            content: "Compétences et Expérience",
          },
          ProfileRequisDetails: {
            type: "text",
            content:
              "Formation en DataScience, 5-10 ans d’expérience en gestion de projets.",
          },
        },
      },
    ],
    MissionEtResponsabilites: [
      {
        title: {
          type: "text",
          content: "Mission et responsabilités",
        },
        Description: {
          type: "text",
          content:
            "Réaliser une veille sur les données agricoles, piloter les contrats avec les fournisseurs de données.",
        },
      },
    ],
    Location: "Ben Guerir",
    Category: "Développement",
    IconCategory: "/assets/newimport/home/lactus.svg",
    Date: "Déc 4, 2024",
    relatedJobs: [2, 3],
  },
  {
    id: 2,
    DaumtechAbout: [
      {
        title: {
          type: "Heading",
          content: "A PROPOS DE DAUMTECH",
        },
        Description: {
          type: "text",
          content:
            "AgriEdge est spécialisée dans l'agriculture de précision et le soutien aux agriculteurs grâce à des solutions numériques.",
        },
        media: [
          {
            type: "image",
            content: "/assets/newimport/career/TeamWork.png",
            altText: "WorkTeam",
          },
        ],
      },
    ],
    Title: "Data Scientist",
    MissionPrincipale: [
      {
        title: {
          type: "text",
          content: "Mission Principale",
        },
        Description: {
          type: "text",
          content:
            "En tant que Data Scientist, vous analyserez les données agricoles et développerez des modèles prédictifs.",
        },
      },
    ],
    ProfileRequis: [
      {
        title: {
          type: "text",
          content: "Profile requis",
        },
        Description: {
          titre: {
            type: "text",
            content: "Compétences et Expérience",
          },
          ProfileRequisDetails: {
            type: "text",
            content:
              "Formation en DataScience, 2-5 ans d’expérience dans un rôle similaire.",
          },
        },
      },
    ],
    MissionEtResponsabilites: [
      {
        title: {
          type: "text",
          content: "Mission et responsabilités",
        },
        Description: {
          type: "text",
          content:
            "Construire des modèles prédictifs pour optimiser la production agricole en fonction des données.",
        },
      },
    ],
    Location: "Ben Guerir",
    Category: "Développement",
    IconCategory: "/assets/newimport/home/lactus.svg",
    Date: "Déc 4, 2024",
    relatedJobs: [1, 3],
  },
  {
    id: 3,
    DaumtechAbout: [
      {
        title: {
          type: "Heading",
          content: "A PROPOS DE DAUMTECH",
        },
        Description: {
          type: "text",
          content:
            "AgriEdge transforme l'agriculture grâce aux données et à l'IA pour améliorer la gestion des cultures.",
        },
        media: [
          {
            type: "image",
            content: "/assets/newimport/career/TeamWork.png",
            altText: "WorkTeam",
          },
        ],
      },
    ],
    Title: "Machine Learning Engineer",
    MissionPrincipale: [
      {
        title: {
          type: "text",
          content: "Mission Principale",
        },
        Description: {
          type: "text",
          content:
            "Développer des algorithmes d'apprentissage automatique pour prédire les besoins agricoles et maximiser l'efficacité des cultures.",
        },
      },
    ],
    ProfileRequis: [
      {
        title: {
          type: "text",
          content: "Profile requis",
        },
        Description: {
          titre: {
            type: "text",
            content: "Compétences et Expérience",
          },
          ProfileRequisDetails: {
            type: "text",
            content:
              "Formation en informatique, 3-5 ans d’expérience en ML et IA.",
          },
        },
      },
    ],
    MissionEtResponsabilites: [
      {
        title: {
          type: "text",
          content: "Mission et responsabilités",
        },
        Description: {
          type: "text",
          content:
            "Implémenter des solutions d'apprentissage automatique pour améliorer les rendements agricoles.",
        },
      },
    ],
    Location: "Ben Guerir",
    Category: "Développement",
    IconCategory: "/assets/newimport/home/lactus.svg",
    Date: "Déc 4, 2024",
    relatedJobs: [1, 2],
  },

  // Agronomy Jobs
  {
    id: 4,
    DaumtechAbout: [
      {
        title: {
          type: "Heading",
          content: "A PROPOS DE DAUMTECH",
        },
        Description: {
          type: "text",
          content:
            "AgriEdge travaille à l'optimisation des pratiques agricoles pour améliorer la productivité et la durabilité.",
        },
        media: [
          {
            type: "image",
            content: "/assets/newimport/career/TeamWork.png",
            altText: "WorkTeam",
          },
        ],
      },
    ],
    Title: "Agronomie Manager",
    MissionPrincipale: [
      {
        title: {
          type: "text",
          content: "Mission Principale",
        },
        Description: {
          type: "text",
          content:
            "Le responsable agronome supervisera l’optimisation des pratiques agricoles et la gestion des projets agricoles.",
        },
      },
    ],
    ProfileRequis: [
      {
        title: {
          type: "text",
          content: "Profile requis",
        },
        Description: {
          titre: {
            type: "text",
            content: "Compétences et Expérience",
          },
          ProfileRequisDetails: {
            type: "text",
            content:
              "Diplôme en agronomie, 5 ans d’expérience dans un rôle similaire.",
          },
        },
      },
    ],
    MissionEtResponsabilites: [
      {
        title: {
          type: "text",
          content: "Mission et responsabilités",
        },
        Description: {
          type: "text",
          content:
            "Analyser les besoins en matières premières agricoles et proposer des solutions adaptées aux agriculteurs.",
        },
      },
    ],
    Location: "Ben Guerir",
    Category: "Agronomie",
    IconCategory: "/assets/newimport/home/lactus.svg",
    Date: "Déc 4, 2024",
    relatedJobs: [5, 6],
  },
  {
    id: 5,
    DaumtechAbout: [
      {
        title: {
          type: "Heading",
          content: "A PROPOS DE DAUMTECH",
        },
        Description: {
          type: "text",
          content:
            "AgriEdge est un leader dans l’agriculture de précision, permettant aux agriculteurs d'optimiser leurs pratiques grâce aux technologies avancées.",
        },
        media: [
          {
            type: "image",
            content: "/assets/newimport/career/TeamWork.png",
            altText: "WorkTeam",
          },
        ],
      },
    ],
    Title: "Field Agronomist",
    MissionPrincipale: [
      {
        title: {
          type: "text",
          content: "Mission Principale",
        },
        Description: {
          type: "text",
          content:
            "Le Field Agronomist gère l'implémentation des technologies agricoles sur le terrain et soutient les agriculteurs dans la mise en œuvre des meilleures pratiques agricoles.",
        },
      },
    ],
    ProfileRequis: [
      {
        title: {
          type: "text",
          content: "Profile requis",
        },
        Description: {
          titre: {
            type: "text",
            content: "Compétences et Expérience",
          },
          ProfileRequisDetails: {
            type: "text",
            content:
              "Diplôme en agronomie, 3-5 ans d’expérience pratique sur le terrain.",
          },
        },
      },
    ],
    MissionEtResponsabilites: [
      {
        title: {
          type: "text",
          content: "Mission et responsabilités",
        },
        Description: {
          type: "text",
          content:
            "Soutenir les agriculteurs sur le terrain dans l'usage de solutions agricoles basées sur des données.",
        },
      },
    ],
    Location: "Ben Guerir",
    Category: "Agronomie",
    IconCategory: "/assets/newimport/home/lactus.svg",
    Date: "Déc 4, 2024",
    relatedJobs: [4, 6],
  },
  {
    id: 6,
    DaumtechAbout: [
      {
        title: {
          type: "Heading",
          content: "A PROPOS DE DAUMTECH",
        },
        Description: {
          type: "text",
          content:
            "Nous travaillons à la création de solutions agricoles intelligentes en utilisant la technologie pour transformer les pratiques agricoles.",
        },
        media: [
          {
            type: "image",
            content: "/assets/newimport/career/TeamWork.png",
            altText: "WorkTeam",
          },
        ],
      },
    ],
    Title: "Agronomy Research Specialist",
    MissionPrincipale: [
      {
        title: {
          type: "text",
          content: "Mission Principale",
        },
        Description: {
          type: "text",
          content:
            "Le chercheur en agronomie se concentrera sur l'étude des pratiques agricoles, avec un accent sur l'innovation et l'amélioration des rendements.",
        },
      },
    ],
    ProfileRequis: [
      {
        title: {
          type: "text",
          content: "Profile requis",
        },
        Description: {
          titre: {
            type: "text",
            content: "Compétences et Expérience",
          },
          ProfileRequisDetails: {
            type: "text",
            content:
              "Master ou Doctorat en agronomie, avec une expérience en recherche appliquée.",
          },
        },
      },
    ],
    MissionEtResponsabilites: [
      {
        title: {
          type: "text",
          content: "Mission et responsabilités",
        },
        Description: {
          type: "text",
          content:
            "Réaliser des recherches pour améliorer les méthodes agricoles utilisées par les agriculteurs locaux.",
        },
      },
    ],
    Location: "Ben Guerir",
    Category: "Agronomie",
    IconCategory: "/assets/newimport/home/lactus.svg",
    Date: "Déc 4, 2024",
    relatedJobs: [4, 5],
  },

  // Business Development Jobs
  {
    id: 7,
    DaumtechAbout: [
      {
        title: {
          type: "Heading",
          content: "A PROPOS DE DAUMTECH",
        },
        Description: {
          type: "text",
          content:
            "AgriEdge propose des solutions digitales pour l’agriculture et travaille pour le développement durable et l’innovation.",
        },
        media: [
          {
            type: "image",
            content: "/assets/newimport/career/TeamWork.png",
            altText: "WorkTeam",
          },
        ],
      },
    ],
    Title: "Business Développement Manager",
    MissionPrincipale: [
      {
        title: {
          type: "text",
          content: "Mission Principale",
        },
        Description: {
          type: "text",
          content:
            "Identifier de nouvelles opportunités commerciales pour AgriEdge et promouvoir la croissance de l'entreprise.",
        },
      },
    ],
    ProfileRequis: [
      {
        title: {
          type: "text",
          content: "Profile requis",
        },
        Description: {
          titre: {
            type: "text",
            content: "Compétences et Expérience",
          },
          ProfileRequisDetails: {
            type: "text",
            content:
              "Diplôme en commerce, avec une expérience en stratégie et développement des affaires.",
          },
        },
      },
    ],
    MissionEtResponsabilites: [
      {
        title: {
          type: "text",
          content: "Mission et responsabilités",
        },
        Description: {
          type: "text",
          content:
            "Établir des partenariats avec des entreprises et des investisseurs pour renforcer la position d’AgriEdge.",
        },
      },
    ],
    Location: "Ben Guerir",
    Category: "Business",
    IconCategory: "/assets/newimport/home/lactus.svg",
    Date: "Déc 4, 2024",
    relatedJobs: [8, 9],
  },
  {
    id: 8,
    DaumtechAbout: [
      {
        title: {
          type: "Heading",
          content: "A PROPOS DE DAUMTECH",
        },
        Description: {
          type: "text",
          content:
            "AgriEdge mène l'innovation numérique pour l’agriculture durable et offre des solutions pratiques aux agriculteurs.",
        },
        media: [
          {
            type: "image",
            content: "/assets/newimport/career/TeamWork.png",
            altText: "WorkTeam",
          },
        ],
      },
    ],
    Title: "Sales Manager",
    MissionPrincipale: [
      {
        title: {
          type: "text",
          content: "Mission Principale",
        },
        Description: {
          type: "text",
          content:
            "Le Sales Manager sera responsable de la gestion des équipes de vente et du développement des revenus.",
        },
      },
    ],
    ProfileRequis: [
      {
        title: {
          type: "text",
          content: "Profile requis",
        },
        Description: {
          titre: {
            type: "text",
            content: "Compétences et Expérience",
          },
          ProfileRequisDetails: {
            type: "text",
            content:
              "Diplôme en gestion des ventes, 3-5 ans d’expérience dans un rôle similaire.",
          },
        },
      },
    ],
    MissionEtResponsabilites: [
      {
        title: {
          type: "text",
          content: "Mission et responsabilités",
        },
        Description: {
          type: "text",
          content:
            "Diriger l'équipe de vente et développer des stratégies pour augmenter les revenus d'AgriEdge.",
        },
      },
    ],
    Location: "Ben Guerir",
    Category: "Business",
    IconCategory: "/assets/newimport/home/lactus.svg",
    Date: "Déc 4, 2024",
    relatedJobs: [7, 9],
  },
  {
    id: 9,
    DaumtechAbout: [
      {
        title: {
          type: "Heading",
          content: "A PROPOS DE DAUMTECH",
        },
        Description: {
          type: "text",
          content:
            "AgriEdge soutient les agriculteurs et les entreprises dans leur transformation digitale, en améliorant l'agriculture à l’échelle mondiale.",
        },
        media: [
          {
            type: "image",
            content: "/assets/newimport/career/TeamWork.png",
            altText: "WorkTeam",
          },
        ],
      },
    ],
    Title: "Business Développement Executive",
    MissionPrincipale: [
      {
        title: {
          type: "text",
          content: "Mission Principale",
        },
        Description: {
          type: "text",
          content:
            "Le Business Développement Executive soutient la stratégie commerciale et crée de nouvelles opportunités pour AgriEdge.",
        },
      },
    ],
    ProfileRequis: [
      {
        title: {
          type: "text",
          content: "Profile requis",
        },
        Description: {
          titre: {
            type: "text",
            content: "Compétences et Expérience",
          },
          ProfileRequisDetails: {
            type: "text",
            content:
              "Diplôme en marketing ou gestion des affaires, avec 3-5 ans d’expérience dans un rôle similaire.",
          },
        },
      },
    ],
    MissionEtResponsabilites: [
      {
        title: {
          type: "text",
          content: "Mission et responsabilités",
        },
        Description: {
          type: "text",
          content:
            "Élaborer et exécuter des stratégies commerciales visant à renforcer la position d'AgriEdge.",
        },
      },
    ],
    Location: "Ben Guerir",
    Category: "Business",
    IconCategory: "/assets/newimport/home/lactus.svg",
    Date: "Déc 4, 2024",
    relatedJobs: [7, 8],
  },
];

export default mockJobs;
