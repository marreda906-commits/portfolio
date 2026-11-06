export type ProjectMedia = { src: string; alt: string; caption: string; width: number; height: number; illustration: boolean; sourceId: number };

export type Project = {
  cover: ProjectMedia;
  gallery: ProjectMedia[];
  background: string;
  outcomes: string;
  status: string;
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


export const projects: Project[] = [
  {
    "slug": "inspection-sertissages",
    "title": "Inspection intelligente des sertissages — YAZAKI",
    "context": "YAZAKI Morocco · PFA",
    "date": "2026",
    "category": "Vision & embarqué",
    "featured": true,
    "visual": "vision",
    "summary": "Inspection des sertissages par vision industrielle, de la détection à la traçabilité.",
    "tags": [
      "YOLOv5",
      "OpenCV",
      "Jetson Orin Nano",
      "PyQt"
    ],
    "objective": "Contrôler la qualité et les dimensions des sertissages à partir d’images.",
    "work": [
      "Déploiement de YOLOv5 sur NVIDIA Jetson Orin Nano.",
      "Segmentation du conducteur et de l’isolant, puis métrologie avec OpenCV.",
      "Développement d’une IHM Python / PyQt : inspection, traçabilité, rapports et comparaison automatique aux tolérances.",
      "Simulation de l’intégration avec un automate programmable Siemens sous TIA Portal."
    ],
    "scope": "Solution de vision déployée sur NVIDIA Jetson Orin Nano, avec interface d’inspection et traçabilité. L’intégration avec l’automate Siemens a été étudiée en simulation sous TIA Portal.",
    "steps": [
      "Image du sertissage",
      "Détection YOLOv5",
      "Segmentation et métrologie OpenCV",
      "Tolérances, IHM et traçabilité"
    ],
    "background": "Dans un contexte de fabrication de faisceaux électriques, le contrôle des sertissages associe identification visuelle, contrôle dimensionnel et traçabilité. Le PFA porte sur la conception de cette chaîne d’inspection.",
    "outcomes": "Une solution de vision sur Jetson et une IHM d’inspection sont documentées. Les captures montrent la segmentation et la métrologie ; elles ne suffisent pas à établir une précision statistique. La liaison Siemens reste simulée.",
    "status": "PFA · solution développée",
    "cover": {
      "src": "/projects/inspection-sertissages/02.webp",
      "caption": "Interface d’inspection : segmentation du sertissage, référence terminal et décision affichée.",
      "alt": "Interface d’inspection : segmentation du sertissage, référence terminal et décision affichée.",
      "width": 1919,
      "height": 1019,
      "illustration": false,
      "sourceId": 2
    },
    "gallery": [
      {
        "src": "/projects/inspection-sertissages/02.webp",
        "caption": "Interface d’inspection : segmentation du sertissage, référence terminal et décision affichée.",
        "alt": "Interface d’inspection : segmentation du sertissage, référence terminal et décision affichée.",
        "width": 1919,
        "height": 1019,
        "illustration": false,
        "sourceId": 2
      },
      {
        "src": "/projects/inspection-sertissages/03.webp",
        "caption": "Vue de métrologie manuelle : placement des repères et mesure de hauteur sur l’image.",
        "alt": "Vue de métrologie manuelle : placement des repères et mesure de hauteur sur l’image.",
        "width": 1919,
        "height": 1017,
        "illustration": false,
        "sourceId": 3
      },
      {
        "src": "/projects/inspection-sertissages/05.webp",
        "caption": "Photographie en atelier YAZAKI : environnement industriel du PFA.",
        "alt": "Photographie en atelier YAZAKI : environnement industriel du PFA.",
        "width": 1920,
        "height": 1440,
        "illustration": false,
        "sourceId": 5
      },
      {
        "src": "/projects/inspection-sertissages/04.webp",
        "caption": "Photographie de contexte chez YAZAKI Morocco.",
        "alt": "Photographie de contexte chez YAZAKI Morocco.",
        "width": 1440,
        "height": 1920,
        "illustration": false,
        "sourceId": 4
      }
    ]
  },
  {
    "slug": "supervision-energetique",
    "title": "Supervision énergétique — ENSAM Meknès",
    "context": "IoT & supervision",
    "date": "2026 · En cours",
    "category": "Énergie & commande",
    "visual": "energy",
    "summary": "Centraliser les mesures électriques pour préparer le suivi énergétique du campus.",
    "tags": [
      "Raspberry Pi",
      "Modbus RTU/TCP",
      "IIoT"
    ],
    "objective": "Concevoir un suivi énergétique à partir des centrales de mesure, onduleurs et transformateurs électriques.",
    "work": [
      "Conception de l’acquisition des données énergétiques du campus.",
      "Interconnexion via Raspberry Pi et Modbus RTU/TCP pour centraliser les données et préparer une supervision en temps réel."
    ],
    "scope": "Projet en cours : conception du suivi énergétique et interconnexion des sources de mesure. La supervision temps réel est en préparation.",
    "steps": [
      "Mesures électriques",
      "Modbus & Raspberry Pi",
      "Préparation de la supervision"
    ],
    "background": "Le projet vise à réunir les données électriques dispersées du campus ENSAM Meknès. L’enjeu est l’interconnexion des équipements avant la mise en place d’une supervision énergétique.",
    "outcomes": "Conception de la collecte et de l’interconnexion via Raspberry Pi et Modbus. Projet en cours : aucune série de mesures validées n’est fournie.",
    "status": "En cours",
    "cover": {
      "src": "/projects/supervision-energetique/06.webp",
      "caption": "Illustration de présentation du campus ENSAM Meknès — provenance non confirmée. Les chiffres à l’écran ne sont pas présentés comme des mesures validées.",
      "alt": "Illustration de présentation du campus ENSAM Meknès — provenance non confirmée. Les chiffres à l’écran ne sont pas présentés comme des mesures validées.",
      "width": 1447,
      "height": 1087,
      "illustration": true,
      "sourceId": 6
    },
    "gallery": [
      {
        "src": "/projects/supervision-energetique/06.webp",
        "caption": "Illustration de présentation du campus ENSAM Meknès — provenance non confirmée. Les chiffres à l’écran ne sont pas présentés comme des mesures validées.",
        "alt": "Illustration de présentation du campus ENSAM Meknès — provenance non confirmée. Les chiffres à l’écran ne sont pas présentés comme des mesures validées.",
        "width": 1447,
        "height": 1087,
        "illustration": true,
        "sourceId": 6
      }
    ]
  },
  {
    "slug": "axe-cnc",
    "title": "Conception électrique d’un axe CNC",
    "context": "Électrotechnique & commande",
    "date": "2026",
    "category": "Énergie & commande",
    "visual": "cnc",
    "summary": "Dimensionner un servomoteur BLAC et concevoir sa chaîne de puissance et de commande.",
    "tags": [
      "BLAC",
      "AutoCAD Electrical",
      "Dimensionnement"
    ],
    "objective": "Dimensionner l’entraînement électrique d’un axe CNC et préparer les schémas associés.",
    "work": [
      "Calcul des inerties, couples d’accélération et de freinage et couple RMS.",
      "Choix du variateur.",
      "Conception des schémas de puissance, de commande et des plans de bornier sous AutoCAD Electrical."
    ],
    "scope": "Étude de dimensionnement de l’entraînement et conception des schémas de puissance, de commande et des plans de bornier.",
    "steps": [
      "Inerties & profil de mouvement",
      "Couples & choix de l’entraînement",
      "Schémas électriques"
    ],
    "background": "La commande d’un axe CNC nécessite de relier le mouvement demandé aux contraintes de l’entraînement. L’étude associe calculs mécaniques, choix du servomoteur et conception électrique.",
    "outcomes": "Dimensionnement du servomoteur BLAC et choix du variateur ; conception des schémas électriques. Les visuels disponibles montrent la CAO mécanique, pas les plans AutoCAD Electrical.",
    "status": "Étude de conception",
    "cover": {
      "src": "/projects/axe-cnc/08.webp",
      "caption": "Vue CAO de l’ensemble moteur, accouplement et axe. Elle accompagne l’étude de dimensionnement électrique.",
      "alt": "Vue CAO de l’ensemble moteur, accouplement et axe. Elle accompagne l’étude de dimensionnement électrique.",
      "width": 1455,
      "height": 899,
      "illustration": false,
      "sourceId": 8
    },
    "gallery": [
      {
        "src": "/projects/axe-cnc/08.webp",
        "caption": "Vue CAO de l’ensemble moteur, accouplement et axe. Elle accompagne l’étude de dimensionnement électrique.",
        "alt": "Vue CAO de l’ensemble moteur, accouplement et axe. Elle accompagne l’étude de dimensionnement électrique.",
        "width": 1455,
        "height": 899,
        "illustration": false,
        "sourceId": 8
      },
      {
        "src": "/projects/axe-cnc/07.webp",
        "caption": "Dessin CAO de l’assemblage : vues de l’entraînement et de la transmission.",
        "alt": "Dessin CAO de l’assemblage : vues de l’entraînement et de la transmission.",
        "width": 1392,
        "height": 834,
        "illustration": false,
        "sourceId": 7
      }
    ]
  },
  {
    "slug": "batterie-ve",
    "title": "Module batterie : thermique & structure",
    "context": "Modélisation multiphysique",
    "date": "2025 – 2026",
    "category": "Mécanique & simulation",
    "visual": "battery",
    "summary": "Étudier le refroidissement et les contraintes mécaniques d’un module batterie de véhicule électrique.",
    "tags": [
      "ANSYS",
      "Thermique",
      "Analyse mécanique"
    ],
    "objective": "Analyser le comportement thermique et mécanique d’un module batterie VE.",
    "work": [
      "Simulation du refroidissement et évaluation de Tmax, Tmin et de l’écart de température ΔT.",
      "Analyse thermo-mécanique des contraintes de Von Mises, des déformations et du facteur de sécurité."
    ],
    "scope": "Étude multiphysique par simulation sous ANSYS, associant l’évaluation du refroidissement à l’analyse thermo-mécanique du module.",
    "steps": [
      "Module batterie",
      "Simulation thermique",
      "Analyse thermo-mécanique"
    ],
    "background": "Le comportement d’un module batterie dépend du refroidissement et des sollicitations thermiques. L’étude combine simulation de température et analyse des conséquences mécaniques.",
    "outcomes": "Les captures documentent des champs de température sous ANSYS. Les conditions aux limites et un rapport complet seraient nécessaires pour comparer quantitativement les résultats.",
    "status": "Étude par simulation",
    "cover": {
      "src": "/projects/batterie-ve/09.webp",
      "caption": "Résultat de simulation ANSYS : distribution de température sur le module batterie, avec son échelle d’origine.",
      "alt": "Résultat de simulation ANSYS : distribution de température sur le module batterie, avec son échelle d’origine.",
      "width": 1430,
      "height": 595,
      "illustration": false,
      "sourceId": 9
    },
    "gallery": [
      {
        "src": "/projects/batterie-ve/09.webp",
        "caption": "Résultat de simulation ANSYS : distribution de température sur le module batterie, avec son échelle d’origine.",
        "alt": "Résultat de simulation ANSYS : distribution de température sur le module batterie, avec son échelle d’origine.",
        "width": 1430,
        "height": 595,
        "illustration": false,
        "sourceId": 9
      },
      {
        "src": "/projects/batterie-ve/10.webp",
        "caption": "Vue ANSYS Fluent : module batterie et champ de température dans l’environnement de simulation.",
        "alt": "Vue ANSYS Fluent : module batterie et champ de température dans l’environnement de simulation.",
        "width": 1600,
        "height": 853,
        "illustration": false,
        "sourceId": 10
      }
    ]
  },
  {
    "slug": "banc-moteur",
    "title": "Banc d’essai moteur asynchrone",
    "context": "Machines électriques",
    "date": "2026",
    "category": "Énergie & commande",
    "visual": "motor",
    "summary": "Mettre en service un moteur asynchrone et étudier son comportement à vide et en charge.",
    "tags": [
      "Moteur asynchrone",
      "Variateur",
      "Essais"
    ],
    "objective": "Étudier les caractéristiques d’un moteur asynchrone associé à un variateur et une charge active.",
    "work": [
      "Câblage, paramétrage et mise en service du banc.",
      "Essais à vide et en charge.",
      "Étude du couple, de la vitesse, du courant, de la puissance et du rendement."
    ],
    "scope": "Mise en service du banc et essais à vide et en charge, avec étude des caractéristiques électriques et mécaniques du moteur.",
    "steps": [
      "Câblage & paramétrage",
      "Essais à vide / en charge",
      "Étude des caractéristiques"
    ],
    "background": "Le banc permet de confronter le fonctionnement d’une machine asynchrone à différentes conditions de charge. Le travail couvre le câblage, la mise en service et les essais.",
    "outcomes": "Banc mis en service et essais à vide et en charge décrits dans le CV. La photo montre le montage ; aucune courbe expérimentale chiffrée n’est fournie.",
    "status": "Mise en service et essais",
    "cover": {
      "src": "/projects/banc-moteur/11.webp",
      "caption": "Banc de machines électriques : moteur, charge, câblage et équipements de mesure visibles.",
      "alt": "Banc de machines électriques : moteur, charge, câblage et équipements de mesure visibles.",
      "width": 1920,
      "height": 1628,
      "illustration": false,
      "sourceId": 11
    },
    "gallery": [
      {
        "src": "/projects/banc-moteur/11.webp",
        "caption": "Banc de machines électriques : moteur, charge, câblage et équipements de mesure visibles.",
        "alt": "Banc de machines électriques : moteur, charge, câblage et équipements de mesure visibles.",
        "width": 1920,
        "height": 1628,
        "illustration": false,
        "sourceId": 11
      }
    ]
  },
  {
    "slug": "suivi-de-voie",
    "title": "Suivi intelligent de voie",
    "context": "Vision embarquée",
    "date": "2025 – 2026",
    "category": "Vision & embarqué",
    "visual": "lane",
    "summary": "Détecter les marquages routiers et développer une logique de correction de trajectoire.",
    "tags": [
      "Python",
      "OpenCV",
      "Traitement d’image"
    ],
    "objective": "Extraire les marquages routiers d’un flux vidéo pour guider une correction de trajectoire.",
    "work": [
      "Détection des marquages routiers avec Python et OpenCV.",
      "Filtrage des détections et développement d’une logique de correction de trajectoire en temps réel."
    ],
    "scope": "Développement du traitement d’image sur flux vidéo et de la logique de correction de trajectoire en temps réel.",
    "steps": [
      "Flux vidéo",
      "Détection & filtrage",
      "Logique de correction"
    ],
    "background": "Le suivi de voie repose sur l’exploitation d’images d’une piste. Le projet associe détection des marquages, filtrage et logique de correction de trajectoire.",
    "outcomes": "Traitement vidéo et logique de correction développés. Les photographies documentent la plateforme et la piste de laboratoire, sans démontrer un niveau de performance autonome.",
    "status": "Développement et essais en laboratoire",
    "cover": {
      "src": "/projects/suivi-de-voie/15.webp",
      "caption": "Plateforme sur une piste balisée en laboratoire, avec poste de supervision.",
      "alt": "Plateforme sur une piste balisée en laboratoire, avec poste de supervision.",
      "width": 740,
      "height": 1320,
      "illustration": false,
      "sourceId": 15
    },
    "gallery": [
      {
        "src": "/projects/suivi-de-voie/15.webp",
        "caption": "Plateforme sur une piste balisée en laboratoire, avec poste de supervision.",
        "alt": "Plateforme sur une piste balisée en laboratoire, avec poste de supervision.",
        "width": 740,
        "height": 1320,
        "illustration": false,
        "sourceId": 15
      },
      {
        "src": "/projects/suivi-de-voie/12.webp",
        "caption": "Interface de commande Adeept et retour caméra sur la piste. La capture fournie est tronquée en partie basse.",
        "alt": "Interface de commande Adeept et retour caméra sur la piste. La capture fournie est tronquée en partie basse.",
        "width": 1919,
        "height": 871,
        "illustration": false,
        "sourceId": 12
      },
      {
        "src": "/projects/suivi-de-voie/14.webp",
        "caption": "Plateforme robotique devant le poste de commande en laboratoire.",
        "alt": "Plateforme robotique devant le poste de commande en laboratoire.",
        "width": 960,
        "height": 1280,
        "illustration": false,
        "sourceId": 14
      },
      {
        "src": "/projects/suivi-de-voie/13.webp",
        "caption": "Visuel de présentation de la plateforme robotique. Provenance à confirmer ; ce visuel ne documente pas un prototype conçu intégralement par moi.",
        "alt": "Visuel de présentation de la plateforme robotique. Provenance à confirmer ; ce visuel ne documente pas un prototype conçu intégralement par moi.",
        "width": 625,
        "height": 491,
        "illustration": true,
        "sourceId": 13
      }
    ]
  },
  {
    "slug": "robot-inspection",
    "title": "Robot d’inspection ferroviaire TGV",
    "context": "Projet technique · SIANA",
    "date": "2025",
    "category": "Mécanique & simulation",
    "visual": "robot",
    "summary": "Concevoir l’assemblage mécanique et étudier les mouvements d’un robot d’inspection.",
    "tags": [
      "CATIA V5",
      "DMU Kinematics",
      "Motoréducteurs"
    ],
    "objective": "Étudier la conception mécanique d’un robot d’inspection ferroviaire TGV.",
    "work": [
      "Modélisation et assemblage mécanique sous CATIA V5.",
      "Dimensionnement des motoréducteurs et étude des mouvements avec DMU Kinematics."
    ],
    "scope": "Projet de conception mécanique : modèle et assemblage sous CATIA V5, dimensionnement des motoréducteurs et étude des mouvements avec DMU Kinematics.",
    "steps": [
      "Modélisation CAO",
      "Dimensionnement",
      "Étude cinématique"
    ],
    "background": "Le projet technique SIANA porte sur la conception mécanique d’un robot d’inspection ferroviaire. Le périmètre documenté concerne la CAO, les motoréducteurs et la cinématique.",
    "outcomes": "Modélisation et assemblage CATIA V5, dimensionnement des motoréducteurs et étude des mouvements. Les fichiers CAO et relevés d’essais ne sont pas fournis ; aucune réalisation physique n’est revendiquée.",
    "status": "Étude de conception",
    "cover": {
      "src": "/projects/robot-inspection/16.webp",
      "caption": "Illustration de présentation du robot ferroviaire — provenance non confirmée. Ce visuel ne constitue pas une preuve de fabrication ou d’essai sur rail.",
      "alt": "Illustration de présentation du robot ferroviaire — provenance non confirmée. Ce visuel ne constitue pas une preuve de fabrication ou d’essai sur rail.",
      "width": 1448,
      "height": 1086,
      "illustration": true,
      "sourceId": 16
    },
    "gallery": [
      {
        "src": "/projects/robot-inspection/16.webp",
        "caption": "Illustration de présentation du robot ferroviaire — provenance non confirmée. Ce visuel ne constitue pas une preuve de fabrication ou d’essai sur rail.",
        "alt": "Illustration de présentation du robot ferroviaire — provenance non confirmée. Ce visuel ne constitue pas une preuve de fabrication ou d’essai sur rail.",
        "width": 1448,
        "height": 1086,
        "illustration": true,
        "sourceId": 16
      }
    ]
  },
  {
    "slug": "elevateur-godets",
    "title": "Élévateur à godets",
    "context": "Dimensionnement mécanique",
    "date": "2024 – 2025",
    "category": "Mécanique & simulation",
    "visual": "gear",
    "summary": "Étudier la transmission mécanique, des puissances et couples aux arbres et engrenages.",
    "tags": [
      "Cinématique",
      "Transmission",
      "Motoréducteur"
    ],
    "objective": "Dimensionner les organes de transmission d’un élévateur à godets.",
    "work": [
      "Étude cinématique et dynamique et calcul des puissances et couples de transmission.",
      "Choix du motoréducteur et dimensionnement des arbres et engrenages."
    ],
    "scope": "Étude cinématique et dynamique de la transmission, choix du motoréducteur et dimensionnement des arbres et engrenages.",
    "steps": [
      "Étude cinématique & dynamique",
      "Puissances & couples",
      "Organes de transmission"
    ],
    "background": "L’élévateur à godets est étudié à travers sa chaîne de transmission. Le dimensionnement relie les besoins en puissance et en couple aux organes mécaniques.",
    "outcomes": "Étude cinématique et dynamique, choix du motoréducteur et dimensionnement des arbres et engrenages. Le dessin et sa présentation illustrent le travail de conception.",
    "status": "Étude de dimensionnement",
    "cover": {
      "src": "/projects/elevateur-godets/18.webp",
      "caption": "Dessin technique photographié : arbres, engrenages et vues d’assemblage. Certaines petites cotes nécessitent le document original.",
      "alt": "Dessin technique photographié : arbres, engrenages et vues d’assemblage. Certaines petites cotes nécessitent le document original.",
      "width": 3474,
      "height": 2466,
      "illustration": false,
      "sourceId": 18
    },
    "gallery": [
      {
        "src": "/projects/elevateur-godets/18.webp",
        "caption": "Dessin technique photographié : arbres, engrenages et vues d’assemblage. Certaines petites cotes nécessitent le document original.",
        "alt": "Dessin technique photographié : arbres, engrenages et vues d’assemblage. Certaines petites cotes nécessitent le document original.",
        "width": 3474,
        "height": 2466,
        "illustration": false,
        "sourceId": 18
      },
      {
        "src": "/projects/elevateur-godets/17.webp",
        "caption": "Présentation du dessin de transmission sur support papier.",
        "alt": "Présentation du dessin de transmission sur support papier.",
        "width": 1440,
        "height": 1920,
        "illustration": false,
        "sourceId": 17
      }
    ]
  }
];
