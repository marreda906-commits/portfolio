export type Project = {
  slug: string;
  title: string;
  context: string;
  date: string;
  category: "Vision & embarqué" | "Énergie & commande" | "Mécanique & simulation";
  summary: string;
  tags: string[];
  objective: string;
  work: string[];
  scope: string;
  steps: string[];
  visual: "vision" | "energy" | "motor" | "battery" | "cnc" | "lane" | "robot" | "gear";
  featured?: boolean;
};

// Source: supplied CV. Dates and scope are intentionally kept as documented.
// Add media/repository links only when genuine supporting material is available.
export const projects: Project[] = [
  {
    slug: "inspection-sertissages", title: "Voir le détail. Contrôler la qualité.",
    context: "YAZAKI Morocco · PFA", date: "2026", category: "Vision & embarqué", featured: true, visual: "vision",
    summary: "Inspection des sertissages par vision industrielle, de la détection à la traçabilité.",
    tags: ["YOLOv5", "OpenCV", "Jetson Orin Nano", "PyQt"],
    objective: "Contrôler la qualité et les dimensions des sertissages à partir d’images.",
    work: ["Déploiement de YOLOv5 sur NVIDIA Jetson Orin Nano.", "Segmentation du conducteur et de l’isolant, puis métrologie avec OpenCV.", "Développement d’une IHM Python / PyQt : inspection, traçabilité, rapports et comparaison automatique aux tolérances.", "Simulation de l’intégration avec un automate programmable Siemens sous TIA Portal."],
    scope: "Solution de vision déployée sur NVIDIA Jetson Orin Nano, avec interface d’inspection et traçabilité. L’intégration avec l’automate Siemens a été étudiée en simulation sous TIA Portal.",
    steps: ["Images des sertissages", "Détection & métrologie", "Tolérances & traçabilité"],
  },
  {
    slug: "supervision-energetique", title: "Supervision énergétique du campus", context: "IoT & supervision", date: "2026 · En cours", category: "Énergie & commande", visual: "energy",
    summary: "Centraliser les mesures électriques pour préparer le suivi énergétique du campus.",
    tags: ["Raspberry Pi", "Modbus RTU/TCP", "IIoT"],
    objective: "Concevoir un suivi énergétique à partir des centrales de mesure, onduleurs et transformateurs électriques.",
    work: ["Conception de l’acquisition des données énergétiques du campus.", "Interconnexion via Raspberry Pi et Modbus RTU/TCP pour centraliser les données et préparer une supervision en temps réel."],
    scope: "Projet en cours : conception du suivi énergétique et interconnexion des sources de mesure. La supervision temps réel est en préparation.", steps: ["Mesures électriques", "Modbus & Raspberry Pi", "Préparation de la supervision"],
  },
  {
    slug: "axe-cnc", title: "Conception électrique d’un axe CNC", context: "Électrotechnique & commande", date: "2026", category: "Énergie & commande", visual: "cnc",
    summary: "Dimensionner un servomoteur BLAC et concevoir sa chaîne de puissance et de commande.",
    tags: ["BLAC", "AutoCAD Electrical", "Dimensionnement"],
    objective: "Dimensionner l’entraînement électrique d’un axe CNC et préparer les schémas associés.",
    work: ["Calcul des inerties, couples d’accélération et de freinage et couple RMS.", "Choix du variateur.", "Conception des schémas de puissance, de commande et des plans de bornier sous AutoCAD Electrical."],
    scope: "Étude de dimensionnement de l’entraînement et conception des schémas de puissance, de commande et des plans de bornier.", steps: ["Inerties & profil de mouvement", "Couples & choix de l’entraînement", "Schémas électriques"],
  },
  {
    slug: "batterie-ve", title: "Module batterie : thermique & structure", context: "Modélisation multiphysique", date: "2025 – 2026", category: "Mécanique & simulation", visual: "battery",
    summary: "Étudier le refroidissement et les contraintes mécaniques d’un module batterie de véhicule électrique.",
    tags: ["ANSYS", "Thermique", "Analyse mécanique"],
    objective: "Analyser le comportement thermique et mécanique d’un module batterie VE.",
    work: ["Simulation du refroidissement et évaluation de Tmax, Tmin et de l’écart de température ΔT.", "Analyse thermo-mécanique des contraintes de Von Mises, des déformations et du facteur de sécurité."],
    scope: "Étude multiphysique par simulation sous ANSYS, associant l’évaluation du refroidissement à l’analyse thermo-mécanique du module.", steps: ["Module batterie", "Simulation thermique", "Analyse thermo-mécanique"],
  },
  {
    slug: "banc-moteur", title: "Banc d’essai à charge variable", context: "Machines électriques", date: "2026", category: "Énergie & commande", visual: "motor",
    summary: "Mettre en service un moteur asynchrone et étudier son comportement à vide et en charge.",
    tags: ["Moteur asynchrone", "Variateur", "Essais"],
    objective: "Étudier les caractéristiques d’un moteur asynchrone associé à un variateur et une charge active.",
    work: ["Câblage, paramétrage et mise en service du banc.", "Essais à vide et en charge.", "Étude du couple, de la vitesse, du courant, de la puissance et du rendement."],
    scope: "Mise en service du banc et essais à vide et en charge, avec étude des caractéristiques électriques et mécaniques du moteur.", steps: ["Câblage & paramétrage", "Essais à vide / en charge", "Étude des caractéristiques"],
  },
  {
    slug: "suivi-de-voie", title: "Suivi intelligent de voie", context: "Vision embarquée", date: "2025 – 2026", category: "Vision & embarqué", visual: "lane",
    summary: "Détecter les marquages routiers et développer une logique de correction de trajectoire.",
    tags: ["Python", "OpenCV", "Traitement d’image"],
    objective: "Extraire les marquages routiers d’un flux vidéo pour guider une correction de trajectoire.",
    work: ["Détection des marquages routiers avec Python et OpenCV.", "Filtrage des détections et développement d’une logique de correction de trajectoire en temps réel."],
    scope: "Développement du traitement d’image sur flux vidéo et de la logique de correction de trajectoire en temps réel.", steps: ["Flux vidéo", "Détection & filtrage", "Logique de correction"],
  },
  {
    slug: "robot-inspection", title: "Robot d’inspection ferroviaire TGV", context: "Projet technique · SIANA", date: "2025", category: "Mécanique & simulation", visual: "robot",
    summary: "Concevoir l’assemblage mécanique et étudier les mouvements d’un robot d’inspection.",
    tags: ["CATIA V5", "DMU Kinematics", "Motoréducteurs"],
    objective: "Étudier la conception mécanique d’un robot d’inspection ferroviaire TGV.",
    work: ["Modélisation et assemblage mécanique sous CATIA V5.", "Dimensionnement des motoréducteurs et étude des mouvements avec DMU Kinematics."],
    scope: "Projet de conception mécanique : modèle et assemblage sous CATIA V5, dimensionnement des motoréducteurs et étude des mouvements avec DMU Kinematics.", steps: ["Modélisation CAO", "Dimensionnement", "Étude cinématique"],
  },
  {
    slug: "elevateur-godets", title: "Élévateur à godets", context: "Dimensionnement mécanique", date: "2024 – 2025", category: "Mécanique & simulation", visual: "gear",
    summary: "Étudier la transmission mécanique, des puissances et couples aux arbres et engrenages.",
    tags: ["Cinématique", "Transmission", "Motoréducteur"],
    objective: "Dimensionner les organes de transmission d’un élévateur à godets.",
    work: ["Étude cinématique et dynamique et calcul des puissances et couples de transmission.", "Choix du motoréducteur et dimensionnement des arbres et engrenages."],
    scope: "Étude cinématique et dynamique de la transmission, choix du motoréducteur et dimensionnement des arbres et engrenages.", steps: ["Étude cinématique & dynamique", "Puissances & couples", "Organes de transmission"],
  },
];
