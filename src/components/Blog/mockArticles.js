// Style configurations
const styleConfigs = {
  lActus: {
    icon: "/assets/newimport/home/lactus.svg",
    color: "bg-color3/15",
    textColor: "text-color3",
    borderColor: "border-color3/30",
    hoverBg: "hover:bg-color3/10",
  },
  articles: {
    icon: "/assets/newimport/home/iconArticles.svg",
    color: "bg-color2/15",
    textColor: "text-color2",
    borderColor: "border-color2/30",
    hoverBg: "hover:bg-color2/10",
  },
  resources: {
    icon: "/assets/newimport/home/iconResource.svg",
    color: "bg-color1/15",
    textColor: "text-color1",
    borderColor: "border-color1s/30",
    hoverBg: "hover:bg-color3/10",
  },
};

// Content type templates
const contentTypes = {
  text: (content) => ({
    type: "text",
    content,
  }),
  image: (src) => ({
    type: "image",
    content: src,
  }),
  link: (url, text) => ({
    type: "link",
     url, text 
  }),
};

const mockArticles = [
  {
    id: 1,
    title: "Présentation de CarboEdge au Bridge Africa Summit",
    date: "Nov 15, 2024",
    category: "L'actus",
    image: "/assets/newimport/blog/photoArticles/article1.jpeg",
    ...styleConfigs.lActus,
    slug: "carboedge-bridge-africa-summit",
    content: [
      contentTypes.text(
        "Lors du prestigieux Bridge Africa Summit organisé à l'Université Mohammed VI Polytechnique (UM6P), nous avons présenté CarboEdge, notre solution innovante dédiée à la transition écologique du secteur agricole. Cette plateforme accompagne agriculteurs et entreprises agroalimentaires dans la mesure précise de leur empreinte carbone, tout en proposant des stratégies concrètes pour la réduire."
      ),
      contentTypes.image("/assets/newimport/blog/photoArticles/article1.jpeg"),
      // Split the text and the link for proper rendering
      contentTypes.text(
        "CarboEdge facilite ainsi une gestion durable des exploitations en intégrant des recommandations personnalisées visant à optimiser les pratiques agricoles tout en assurant la rentabilité économique. Découvrez tous ses avantages sur "
      ),
      contentTypes.link("https://carboedge.agriedge.ma/", "www.carboedge.agriedge.ma"),
      contentTypes.text("."),
    ],
    
  },
  {
    id: 2,
    title: "DAUMTech au SOM2024 à l'UM6P",
    date: "Feb 20, 2024",
    category: "Articles",
    image: "/assets/newimport/blog/photoArticles/article2.png",
    ...styleConfigs.articles,
    slug: "som2024-carboedge-participation",
    content: [
      contentTypes.text(
        "DAUMTech a activement participé au SOM2024 à l'UM6P, mettant en lumière CarboEdge, une plateforme numérique avancée conçue pour mesurer et réduire les émissions de gaz à effet de serre dans l'agriculture marocaine. Notre objectif est de promouvoir une agriculture durable et respectueuse de l'environnement."
      ),
      contentTypes.image("/assets/newimport/blog/photoArticles/article2.png"),
      contentTypes.text(
        "Cet événement rassemble des experts et acteurs du secteur autour de solutions innovantes visant à transformer les pratiques agricoles traditionnelles en modèles plus durables et performants."
      ),
    ],
  },
  {
    id: 3,
    title: "CarboEdge au GITEX AFRICA",
    date: "May 29, 2024",
    category: "L'actus",
    image: "/assets/newimport/blog/photoArticles/article3.png",
    ...styleConfigs.lActus,
    slug: "carboedge-gitex-africa",
    content: [
      contentTypes.text(
        "Lors du GITEX AFRICA, nous avons présenté CarboEdge, une plateforme innovante qui joue un rôle clé dans la transition bas-carbone de l'agriculture. Cette solution technologique aide les agriculteurs à mesurer précisément leurs émissions de gaz à effet de serre et à identifier les leviers efficaces de décarbonation."
      ),
      contentTypes.image("/assets/newimport/blog/photoArticles/article3.png"),
      contentTypes.text(
        "Grâce à CarboEdge, les exploitants agricoles peuvent adopter des pratiques plus durables, améliorer leur impact environnemental tout en maintenant leur productivité et compétitivité sur le marché."
      ),
    ],
  },
  {
    id: 4,
    title: "DAUMTech labellisée Green Start-Up par UM6P",
    date: "Jan 10, 2024",
    category: "Articles",
    image: "/assets/newimport/blog/photoArticles/article4.jpg",
    ...styleConfigs.articles,
    slug: "daumtech-green-startup-um6p",
    content: [
      contentTypes.text(
        "Nous sommes fiers d’annoncer que DAUMTech a reçu le label Green Start-Up décerné par l'UM6P, une reconnaissance officielle de notre engagement en faveur d'une agriculture durable et responsable. Ce label témoigne de la pertinence et de l'impact positif de nos solutions sur le secteur agricole."
      ),
      contentTypes.image("/assets/newimport/blog/photoArticles/article4.jpg"),
      contentTypes.text(
        "Cette distinction renforce notre ambition d'accompagner la transition vers des pratiques agricoles bas-carbone, en combinant innovation technologique et respect de l’environnement."
      ),
    ],
  },
  {
    id: 5,
    title: "CarboEdge : Outil numérique pour l'agriculture durable",
    date: "Oct 10, 2024",
    category: "Resources",
    image: "/assets/newimport/blog/photoArticles/article5.jpeg",
    ...styleConfigs.resources,
    slug: "carboedge-outil-agriculture-durable",
    content: [
      contentTypes.text(
        "CarboEdge est une solution numérique tout-en-un conçue pour aider les acteurs agricoles à surveiller, analyser et réduire leur empreinte environnementale. Elle intègre des outils de simulation avancés et des recommandations personnalisées pour promouvoir des pratiques agricoles durables."
      ),
      contentTypes.image("/assets/newimport/blog/photoArticles/article5.jpeg"),
      contentTypes.text(
        "Cette plateforme permet aux utilisateurs d’adopter des stratégies efficaces pour préserver les ressources naturelles tout en améliorant la productivité et la qualité des récoltes."
      ),
    ],
  },
  {
    id: 6,
    title: "AgTech au service de l'innovation agricole",
    date: "Sep 15, 2024",
    category: "L'actus",
    image: "/assets/newimport/blog/photoArticles/article6.jpeg",
    ...styleConfigs.lActus,
    slug: "agtech-innovation-agriculture",
    content: [
      contentTypes.text(
        "L'AgTech révolutionne le secteur agricole grâce à l’intégration de technologies numériques telles que la digitalisation, l’intelligence artificielle (IA), l’Internet des objets (IoT) et des plateformes comme CarboEdge. Ces innovations offrent un suivi en temps réel des exploitations et facilitent des prises de décisions plus éclairées."
      ),
      contentTypes.image("/assets/newimport/blog/photoArticles/article6.jpeg"),
      contentTypes.text(
        "Chez DAUMTech, nous sommes déterminés à intégrer ces avancées technologiques pour favoriser une gestion durable et optimisée des fermes, répondant ainsi aux défis environnementaux actuels."
      ),
    ],
  },
  {
    id: 7,
    title: "Décarbonation des filières agricoles : un enjeu stratégique",
    date: "Aug 22, 2024",
    category: "Articles",
    image: "/assets/newimport/blog/photoArticles/article7.jpeg",
    ...styleConfigs.articles,
    slug: "decarbonation-filiere-agricole",
    content: [
      contentTypes.text(
        "La réduction de l’empreinte carbone des filières agricoles représente un enjeu stratégique majeur face aux défis climatiques mondiaux et à la compétitivité des marchés. Cela nécessite une transformation profonde des pratiques et des chaînes de valeur agricoles."
      ),
      contentTypes.image("/assets/newimport/blog/photoArticles/article7.jpeg"),
      contentTypes.text(
        "CarboEdge accompagne cette évolution en proposant des outils de mesure précis et des solutions de pilotage basées sur l’analyse de données, permettant aux acteurs agricoles d’adopter des stratégies de décarbonation efficaces et durables."
      ),
    ],
  },
  {
    id: 8,
    title: "Retour sur notre démonstration au SIAM 2024",
    date: "Apr 25, 2024",
    category: "L'actus",
    image: "/assets/newimport/blog/photoArticles/article8.jpeg",
    ...styleConfigs.lActus,
    slug: "daumtech-siam-2024",
    content: [
      contentTypes.text(
        "Lors du Salon International de l'Agriculture au Maroc (SIAM) 2024, nous avons eu le plaisir de présenter nos technologies innovantes de mesure carbone ainsi que notre vision d’une agriculture durable et responsable. Cet événement a été une opportunité unique pour échanger avec les professionnels du secteur."
      ),
      contentTypes.image("/assets/newimport/blog/photoArticles/article8.jpeg"),
      contentTypes.text(
        "Nous remercions chaleureusement tous les visiteurs et partenaires pour leur intérêt, leurs retours enrichissants et leurs échanges inspirants lors de ce salon."
      ),
    ],
  },
  {
    id: 9,
    title: "CarboEdge sur la scène internationale",
    date: "Mar 12, 2024",
    category: "Articles",
    image: "/assets/newimport/blog/photoArticles/article9.jpeg",
    ...styleConfigs.articles,
    slug: "carboedge-scene-internationale",
    content: [
      contentTypes.text(
        "CarboEdge est désormais reconnu comme une solution clé dans la transition bas-carbone au niveau international, présenté lors de nombreux événements majeurs. Cette reconnaissance souligne la pertinence et la portée de notre plateforme."
      ),
      contentTypes.image("/assets/newimport/blog/photoArticles/article9.jpeg"),
      contentTypes.text(
        "Nous sommes fiers de contribuer, grâce à l’innovation numérique, à bâtir un avenir agricole plus résilient, durable et compétitif pour les générations futures."
      ),
    ],
  },
  {
    id: 10,
    title: "DAUMTech X LaStartupStation : Innovation verte",
    date: "Jun 18, 2024",
    category: "L'actus",
    image: "/assets/newimport/blog/photoArticles/article10.jpeg",
    ...styleConfigs.lActus,
    slug: "daumtech-lastartupstation-green-innovation",
    content: [
      contentTypes.text(
        "En collaboration avec LaStartupStation, DAUMTech accélère l’innovation verte dans le secteur agricole grâce à CarboEdge. Cette synergie renforce notre capacité à développer des solutions intelligentes, connectées et durables."
      ),
      contentTypes.image("/assets/newimport/blog/photoArticles/article10.jpeg"),
      contentTypes.text(
        "Ce partenariat marque une étape importante vers une agriculture moderne, respectueuse de l’environnement et technologiquement avancée."
      ),
    ],
  },
];


export default mockArticles;
