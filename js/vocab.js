// Vocabulaire espagnol organisé par niveau CECRL
// Chaque entrée : { id, es, fr, exEs, exFr, cat, tags }

// ============================================================
//  NIVEAU A1 — Débutant
// ============================================================
const A1 = [
  // --- Saludos y presentaciones ---
  { id:"a1_001", es:"hola", fr:"bonjour / salut", exEs:"¡Hola! ¿Qué tal?", exFr:"Salut ! Comment ça va ?", cat:"saludos", tags:["salutation"] },
  { id:"a1_002", es:"adiós", fr:"au revoir", exEs:"¡Adiós! Hasta mañana.", exFr:"Au revoir ! À demain.", cat:"saludos", tags:["salutation"] },
  { id:"a1_003", es:"buenos días", fr:"bonjour (matin)", exEs:"Buenos días, señora García.", exFr:"Bonjour, madame García.", cat:"saludos", tags:["salutation"] },
  { id:"a1_004", es:"buenas tardes", fr:"bon après-midi / bonsoir", exEs:"Buenas tardes, ¿cómo está usted?", exFr:"Bonsoir, comment allez-vous ?", cat:"saludos", tags:["salutation"] },
  { id:"a1_005", es:"buenas noches", fr:"bonsoir / bonne nuit", exEs:"Buenas noches, que descanses.", exFr:"Bonne nuit, repose-toi bien.", cat:"saludos", tags:["salutation"] },
  { id:"a1_006", es:"por favor", fr:"s'il te/vous plaît", exEs:"Un café, por favor.", exFr:"Un café, s'il vous plaît.", cat:"saludos", tags:["politesse"] },
  { id:"a1_007", es:"gracias", fr:"merci", exEs:"Muchas gracias por tu ayuda.", exFr:"Merci beaucoup pour ton aide.", cat:"saludos", tags:["politesse"] },
  { id:"a1_008", es:"de nada", fr:"de rien", exEs:"—Gracias. —De nada.", exFr:"—Merci. —De rien.", cat:"saludos", tags:["politesse"] },
  { id:"a1_009", es:"lo siento", fr:"je suis désolé(e)", exEs:"Lo siento, llego tarde.", exFr:"Je suis désolé, j'arrive en retard.", cat:"saludos", tags:["politesse"] },
  { id:"a1_010", es:"perdón", fr:"pardon", exEs:"Perdón, ¿puede repetir?", exFr:"Pardon, pouvez-vous répéter ?", cat:"saludos", tags:["politesse"] },
  { id:"a1_011", es:"¿cómo te llamas?", fr:"comment t'appelles-tu ?", exEs:"Hola, ¿cómo te llamas?", exFr:"Salut, comment t'appelles-tu ?", cat:"saludos", tags:["présentation"] },
  { id:"a1_012", es:"me llamo", fr:"je m'appelle", exEs:"Me llamo Pedro, ¿y tú?", exFr:"Je m'appelle Pedro, et toi ?", cat:"saludos", tags:["présentation"] },
  { id:"a1_013", es:"mucho gusto", fr:"enchanté(e)", exEs:"Mucho gusto, soy Ana.", exFr:"Enchantée, je suis Ana.", cat:"saludos", tags:["présentation"] },
  { id:"a1_014", es:"¿cómo estás?", fr:"comment vas-tu ?", exEs:"Hola María, ¿cómo estás?", exFr:"Salut María, comment vas-tu ?", cat:"saludos", tags:["salutation"] },
  { id:"a1_015", es:"bien", fr:"bien", exEs:"Estoy muy bien, gracias.", exFr:"Je vais très bien, merci.", cat:"saludos", tags:["salutation"] },

  // --- Familia ---
  { id:"a1_016", es:"la madre", fr:"la mère", exEs:"Mi madre cocina muy bien.", exFr:"Ma mère cuisine très bien.", cat:"familia", tags:["famille"] },
  { id:"a1_017", es:"el padre", fr:"le père", exEs:"Mi padre trabaja en una oficina.", exFr:"Mon père travaille dans un bureau.", cat:"familia", tags:["famille"] },
  { id:"a1_018", es:"el hermano", fr:"le frère", exEs:"Tengo un hermano mayor.", exFr:"J'ai un frère aîné.", cat:"familia", tags:["famille"] },
  { id:"a1_019", es:"la hermana", fr:"la sœur", exEs:"Mi hermana estudia medicina.", exFr:"Ma sœur étudie la médecine.", cat:"familia", tags:["famille"] },
  { id:"a1_020", es:"el hijo", fr:"le fils", exEs:"Su hijo tiene cinco años.", exFr:"Son fils a cinq ans.", cat:"familia", tags:["famille"] },
  { id:"a1_021", es:"la hija", fr:"la fille (enfant)", exEs:"La hija de María es muy simpática.", exFr:"La fille de María est très sympathique.", cat:"familia", tags:["famille"] },
  { id:"a1_022", es:"el abuelo", fr:"le grand-père", exEs:"Mi abuelo vive en el campo.", exFr:"Mon grand-père vit à la campagne.", cat:"familia", tags:["famille"] },
  { id:"a1_023", es:"la abuela", fr:"la grand-mère", exEs:"Mi abuela hace el mejor pastel.", exFr:"Ma grand-mère fait le meilleur gâteau.", cat:"familia", tags:["famille"] },
  { id:"a1_024", es:"el marido", fr:"le mari", exEs:"Su marido es profesor.", exFr:"Son mari est professeur.", cat:"familia", tags:["famille"] },
  { id:"a1_025", es:"la mujer", fr:"la femme / l'épouse", exEs:"Mi mujer y yo tenemos dos hijos.", exFr:"Ma femme et moi avons deux enfants.", cat:"familia", tags:["famille"] },

  // --- Comida y bebida ---
  { id:"a1_026", es:"el pan", fr:"le pain", exEs:"Compro pan cada mañana.", exFr:"J'achète du pain chaque matin.", cat:"comida", tags:["nourriture"] },
  { id:"a1_027", es:"el agua", fr:"l'eau", exEs:"¿Me das un vaso de agua?", exFr:"Tu me donnes un verre d'eau ?", cat:"comida", tags:["boisson"] },
  { id:"a1_028", es:"la leche", fr:"le lait", exEs:"Tomo leche con cereales.", exFr:"Je prends du lait avec des céréales.", cat:"comida", tags:["boisson"] },
  { id:"a1_029", es:"la carne", fr:"la viande", exEs:"No como mucha carne.", exFr:"Je ne mange pas beaucoup de viande.", cat:"comida", tags:["nourriture"] },
  { id:"a1_030", es:"el pescado", fr:"le poisson", exEs:"El pescado fresco es delicioso.", exFr:"Le poisson frais est délicieux.", cat:"comida", tags:["nourriture"] },
  { id:"a1_031", es:"el arroz", fr:"le riz", exEs:"En España se come mucho arroz.", exFr:"En Espagne on mange beaucoup de riz.", cat:"comida", tags:["nourriture"] },
  { id:"a1_032", es:"la fruta", fr:"le fruit", exEs:"Me gusta comer fruta después de comer.", exFr:"J'aime manger des fruits après le repas.", cat:"comida", tags:["nourriture"] },
  { id:"a1_033", es:"la verdura", fr:"le légume", exEs:"Las verduras son muy sanas.", exFr:"Les légumes sont très sains.", cat:"comida", tags:["nourriture"] },
  { id:"a1_034", es:"el pollo", fr:"le poulet", exEs:"Hoy comemos pollo con patatas.", exFr:"Aujourd'hui on mange du poulet avec des pommes de terre.", cat:"comida", tags:["nourriture"] },
  { id:"a1_035", es:"el huevo", fr:"l'œuf", exEs:"Quiero dos huevos fritos.", exFr:"Je veux deux œufs au plat.", cat:"comida", tags:["nourriture"] },
  { id:"a1_036", es:"el café", fr:"le café", exEs:"Siempre tomo café por la mañana.", exFr:"Je prends toujours un café le matin.", cat:"comida", tags:["boisson"] },
  { id:"a1_037", es:"el queso", fr:"le fromage", exEs:"España tiene quesos muy buenos.", exFr:"L'Espagne a de très bons fromages.", cat:"comida", tags:["nourriture"] },
  { id:"a1_038", es:"la cerveza", fr:"la bière", exEs:"¿Quieres una cerveza?", exFr:"Tu veux une bière ?", cat:"comida", tags:["boisson"] },
  { id:"a1_039", es:"el vino", fr:"le vin", exEs:"Un vino tinto, por favor.", exFr:"Un vin rouge, s'il vous plaît.", cat:"comida", tags:["boisson"] },

  // --- Casa ---
  { id:"a1_040", es:"la casa", fr:"la maison", exEs:"Mi casa está cerca del parque.", exFr:"Ma maison est près du parc.", cat:"casa", tags:["logement"] },
  { id:"a1_041", es:"la cocina", fr:"la cuisine", exEs:"Cocino en la cocina todos los días.", exFr:"Je cuisine dans la cuisine tous les jours.", cat:"casa", tags:["logement"] },
  { id:"a1_042", es:"el baño", fr:"la salle de bain", exEs:"El baño está al fondo del pasillo.", exFr:"La salle de bain est au fond du couloir.", cat:"casa", tags:["logement"] },
  { id:"a1_043", es:"el dormitorio", fr:"la chambre", exEs:"Mi dormitorio es pequeño pero cómodo.", exFr:"Ma chambre est petite mais confortable.", cat:"casa", tags:["logement"] },
  { id:"a1_044", es:"la mesa", fr:"la table", exEs:"Pon los platos en la mesa.", exFr:"Mets les assiettes sur la table.", cat:"casa", tags:["meuble"] },
  { id:"a1_045", es:"la silla", fr:"la chaise", exEs:"Siéntate en la silla.", exFr:"Assieds-toi sur la chaise.", cat:"casa", tags:["meuble"] },
  { id:"a1_046", es:"la puerta", fr:"la porte", exEs:"Cierra la puerta, por favor.", exFr:"Ferme la porte, s'il te plaît.", cat:"casa", tags:["logement"] },
  { id:"a1_047", es:"la ventana", fr:"la fenêtre", exEs:"Abre la ventana, hace calor.", exFr:"Ouvre la fenêtre, il fait chaud.", cat:"casa", tags:["logement"] },
  { id:"a1_048", es:"la cama", fr:"le lit", exEs:"Me voy a la cama, estoy cansado.", exFr:"Je vais au lit, je suis fatigué.", cat:"casa", tags:["meuble"] },

  // --- Cuerpo ---
  { id:"a1_049", es:"la cabeza", fr:"la tête", exEs:"Me duele la cabeza.", exFr:"J'ai mal à la tête.", cat:"cuerpo", tags:["corps"] },
  { id:"a1_050", es:"la mano", fr:"la main", exEs:"Dame la mano.", exFr:"Donne-moi la main.", cat:"cuerpo", tags:["corps"] },
  { id:"a1_051", es:"el ojo", fr:"l'œil", exEs:"Tiene los ojos verdes.", exFr:"Il/Elle a les yeux verts.", cat:"cuerpo", tags:["corps"] },
  { id:"a1_052", es:"la boca", fr:"la bouche", exEs:"Abre la boca.", exFr:"Ouvre la bouche.", cat:"cuerpo", tags:["corps"] },
  { id:"a1_053", es:"la nariz", fr:"le nez", exEs:"Tiene la nariz roja por el frío.", exFr:"Il a le nez rouge à cause du froid.", cat:"cuerpo", tags:["corps"] },
  { id:"a1_054", es:"el brazo", fr:"le bras", exEs:"Me duele el brazo derecho.", exFr:"J'ai mal au bras droit.", cat:"cuerpo", tags:["corps"] },
  { id:"a1_055", es:"la pierna", fr:"la jambe", exEs:"Se rompió la pierna jugando al fútbol.", exFr:"Il s'est cassé la jambe en jouant au foot.", cat:"cuerpo", tags:["corps"] },
  { id:"a1_056", es:"el pie", fr:"le pied", exEs:"Tengo los pies fríos.", exFr:"J'ai les pieds froids.", cat:"cuerpo", tags:["corps"] },
  { id:"a1_057", es:"el pelo", fr:"les cheveux", exEs:"Tiene el pelo largo y rubio.", exFr:"Elle a les cheveux longs et blonds.", cat:"cuerpo", tags:["corps"] },
  { id:"a1_058", es:"la oreja", fr:"l'oreille", exEs:"Lleva un pendiente en cada oreja.", exFr:"Il/Elle porte une boucle à chaque oreille.", cat:"cuerpo", tags:["corps"] },

  // --- Colores ---
  { id:"a1_059", es:"rojo", fr:"rouge", exEs:"Me gusta el coche rojo.", exFr:"J'aime la voiture rouge.", cat:"colores", tags:["couleur","adjectif"] },
  { id:"a1_060", es:"azul", fr:"bleu", exEs:"El cielo está muy azul hoy.", exFr:"Le ciel est très bleu aujourd'hui.", cat:"colores", tags:["couleur","adjectif"] },
  { id:"a1_061", es:"verde", fr:"vert", exEs:"Prefiero la camiseta verde.", exFr:"Je préfère le t-shirt vert.", cat:"colores", tags:["couleur","adjectif"] },
  { id:"a1_062", es:"amarillo", fr:"jaune", exEs:"Los plátanos son amarillos.", exFr:"Les bananes sont jaunes.", cat:"colores", tags:["couleur","adjectif"] },
  { id:"a1_063", es:"negro", fr:"noir", exEs:"Lleva un vestido negro.", exFr:"Elle porte une robe noire.", cat:"colores", tags:["couleur","adjectif"] },
  { id:"a1_064", es:"blanco", fr:"blanc", exEs:"La nieve es blanca.", exFr:"La neige est blanche.", cat:"colores", tags:["couleur","adjectif"] },
  { id:"a1_065", es:"marrón", fr:"marron", exEs:"Tiene los ojos marrones.", exFr:"Il/Elle a les yeux marron.", cat:"colores", tags:["couleur","adjectif"] },
  { id:"a1_066", es:"naranja", fr:"orange", exEs:"Me encanta el color naranja.", exFr:"J'adore la couleur orange.", cat:"colores", tags:["couleur","adjectif"] },

  // --- Verbos básicos ---
  { id:"a1_067", es:"ser", fr:"être (identité)", exEs:"Soy español.", exFr:"Je suis espagnol.", cat:"verbos", tags:["verbe"] },
  { id:"a1_068", es:"estar", fr:"être (état/lieu)", exEs:"Estoy en casa.", exFr:"Je suis à la maison.", cat:"verbos", tags:["verbe"] },
  { id:"a1_069", es:"tener", fr:"avoir", exEs:"Tengo veinte años.", exFr:"J'ai vingt ans.", cat:"verbos", tags:["verbe"] },
  { id:"a1_070", es:"hacer", fr:"faire", exEs:"¿Qué haces este fin de semana?", exFr:"Qu'est-ce que tu fais ce week-end ?", cat:"verbos", tags:["verbe"] },
  { id:"a1_071", es:"ir", fr:"aller", exEs:"Voy al supermercado.", exFr:"Je vais au supermarché.", cat:"verbos", tags:["verbe"] },
  { id:"a1_072", es:"comer", fr:"manger", exEs:"Comemos a las dos.", exFr:"Nous mangeons à deux heures.", cat:"verbos", tags:["verbe"] },
  { id:"a1_073", es:"beber", fr:"boire", exEs:"¿Quieres beber algo?", exFr:"Tu veux boire quelque chose ?", cat:"verbos", tags:["verbe"] },
  { id:"a1_074", es:"hablar", fr:"parler", exEs:"Hablo un poco de español.", exFr:"Je parle un peu espagnol.", cat:"verbos", tags:["verbe"] },
  { id:"a1_075", es:"vivir", fr:"vivre / habiter", exEs:"Vivo en Madrid.", exFr:"J'habite à Madrid.", cat:"verbos", tags:["verbe"] },
  { id:"a1_076", es:"trabajar", fr:"travailler", exEs:"Trabajo de lunes a viernes.", exFr:"Je travaille du lundi au vendredi.", cat:"verbos", tags:["verbe"] },
  { id:"a1_077", es:"estudiar", fr:"étudier", exEs:"Estudio español en la universidad.", exFr:"J'étudie l'espagnol à l'université.", cat:"verbos", tags:["verbe"] },
  { id:"a1_078", es:"querer", fr:"vouloir / aimer", exEs:"Quiero aprender español.", exFr:"Je veux apprendre l'espagnol.", cat:"verbos", tags:["verbe"] },
  { id:"a1_079", es:"poder", fr:"pouvoir", exEs:"¿Puedo sentarme aquí?", exFr:"Je peux m'asseoir ici ?", cat:"verbos", tags:["verbe"] },
  { id:"a1_080", es:"dormir", fr:"dormir", exEs:"Duermo ocho horas cada noche.", exFr:"Je dors huit heures chaque nuit.", cat:"verbos", tags:["verbe"] },
  { id:"a1_081", es:"comprar", fr:"acheter", exEs:"Voy a comprar pan.", exFr:"Je vais acheter du pain.", cat:"verbos", tags:["verbe"] },
  { id:"a1_082", es:"leer", fr:"lire", exEs:"Me gusta leer libros.", exFr:"J'aime lire des livres.", cat:"verbos", tags:["verbe"] },
  { id:"a1_083", es:"escribir", fr:"écrire", exEs:"Escribo un correo a mi amigo.", exFr:"J'écris un e-mail à mon ami.", cat:"verbos", tags:["verbe"] },

  // --- Adjetivos ---
  { id:"a1_084", es:"grande", fr:"grand", exEs:"Madrid es una ciudad grande.", exFr:"Madrid est une grande ville.", cat:"adjetivos", tags:["adjectif"] },
  { id:"a1_085", es:"pequeño", fr:"petit", exEs:"Vivo en un pueblo pequeño.", exFr:"J'habite dans un petit village.", cat:"adjetivos", tags:["adjectif"] },
  { id:"a1_086", es:"bueno", fr:"bon", exEs:"Este restaurante es muy bueno.", exFr:"Ce restaurant est très bon.", cat:"adjetivos", tags:["adjectif"] },
  { id:"a1_087", es:"malo", fr:"mauvais", exEs:"Hace mal tiempo hoy.", exFr:"Il fait mauvais temps aujourd'hui.", cat:"adjetivos", tags:["adjectif"] },
  { id:"a1_088", es:"bonito", fr:"joli / beau", exEs:"¡Qué vestido tan bonito!", exFr:"Quelle jolie robe !", cat:"adjetivos", tags:["adjectif"] },
  { id:"a1_089", es:"nuevo", fr:"nouveau / neuf", exEs:"Tengo un teléfono nuevo.", exFr:"J'ai un nouveau téléphone.", cat:"adjetivos", tags:["adjectif"] },
  { id:"a1_090", es:"viejo", fr:"vieux", exEs:"Es un edificio muy viejo.", exFr:"C'est un très vieux bâtiment.", cat:"adjetivos", tags:["adjectif"] },
  { id:"a1_091", es:"feliz", fr:"heureux", exEs:"Soy muy feliz aquí.", exFr:"Je suis très heureux ici.", cat:"adjetivos", tags:["adjectif"] },
  { id:"a1_092", es:"contento", fr:"content", exEs:"Estoy contento con mi trabajo.", exFr:"Je suis content de mon travail.", cat:"adjetivos", tags:["adjectif"] },
  { id:"a1_093", es:"cansado", fr:"fatigué", exEs:"Estoy cansado después del trabajo.", exFr:"Je suis fatigué après le travail.", cat:"adjetivos", tags:["adjectif"] },

  // --- Números y tiempo ---
  { id:"a1_094", es:"hoy", fr:"aujourd'hui", exEs:"Hoy es lunes.", exFr:"Aujourd'hui c'est lundi.", cat:"tiempo", tags:["temps"] },
  { id:"a1_095", es:"mañana", fr:"demain / matin", exEs:"Mañana vamos a la playa.", exFr:"Demain nous allons à la plage.", cat:"tiempo", tags:["temps"] },
  { id:"a1_096", es:"ayer", fr:"hier", exEs:"Ayer fui al cine.", exFr:"Hier je suis allé au cinéma.", cat:"tiempo", tags:["temps"] },
  { id:"a1_097", es:"ahora", fr:"maintenant", exEs:"Ahora estoy estudiando.", exFr:"Maintenant je suis en train d'étudier.", cat:"tiempo", tags:["temps"] },
  { id:"a1_098", es:"siempre", fr:"toujours", exEs:"Siempre llego a tiempo.", exFr:"J'arrive toujours à l'heure.", cat:"tiempo", tags:["temps"] },
  { id:"a1_099", es:"nunca", fr:"jamais", exEs:"Nunca he estado en México.", exFr:"Je ne suis jamais allé au Mexique.", cat:"tiempo", tags:["temps"] },

  // --- Lugares ---
  { id:"a1_100", es:"la escuela", fr:"l'école", exEs:"Los niños van a la escuela.", exFr:"Les enfants vont à l'école.", cat:"lugares", tags:["lieu"] },
  { id:"a1_101", es:"el restaurante", fr:"le restaurant", exEs:"Cenamos en un restaurante italiano.", exFr:"Nous dînons dans un restaurant italien.", cat:"lugares", tags:["lieu"] },
  { id:"a1_102", es:"la tienda", fr:"le magasin", exEs:"La tienda cierra a las nueve.", exFr:"Le magasin ferme à neuf heures.", cat:"lugares", tags:["lieu"] },
  { id:"a1_103", es:"el parque", fr:"le parc", exEs:"Paseo por el parque cada tarde.", exFr:"Je me promène dans le parc chaque après-midi.", cat:"lugares", tags:["lieu"] },
  { id:"a1_104", es:"el hospital", fr:"l'hôpital", exEs:"El hospital está lejos de aquí.", exFr:"L'hôpital est loin d'ici.", cat:"lugares", tags:["lieu"] },
  { id:"a1_105", es:"la calle", fr:"la rue", exEs:"Vivo en la calle Mayor.", exFr:"J'habite dans la rue Mayor.", cat:"lugares", tags:["lieu"] },

  // --- Mots essentiels ---
  { id:"a1_106", es:"sí", fr:"oui", exEs:"Sí, me gusta mucho.", exFr:"Oui, j'aime beaucoup.", cat:"esenciales", tags:["basique"] },
  { id:"a1_107", es:"no", fr:"non", exEs:"No, gracias.", exFr:"Non, merci.", cat:"esenciales", tags:["basique"] },
  { id:"a1_108", es:"mucho", fr:"beaucoup", exEs:"Te quiero mucho.", exFr:"Je t'aime beaucoup.", cat:"esenciales", tags:["basique"] },
  { id:"a1_109", es:"poco", fr:"peu", exEs:"Hablo poco español.", exFr:"Je parle peu espagnol.", cat:"esenciales", tags:["basique"] },
  { id:"a1_110", es:"muy", fr:"très", exEs:"Es muy interesante.", exFr:"C'est très intéressant.", cat:"esenciales", tags:["basique"] },
  { id:"a1_111", es:"aquí", fr:"ici", exEs:"Ven aquí.", exFr:"Viens ici.", cat:"esenciales", tags:["basique"] },
  { id:"a1_112", es:"allí", fr:"là-bas", exEs:"El banco está allí.", exFr:"La banque est là-bas.", cat:"esenciales", tags:["basique"] },
  { id:"a1_113", es:"también", fr:"aussi", exEs:"Yo también quiero ir.", exFr:"Moi aussi je veux y aller.", cat:"esenciales", tags:["basique"] },
  { id:"a1_114", es:"pero", fr:"mais", exEs:"Es bonito, pero caro.", exFr:"C'est joli, mais cher.", cat:"esenciales", tags:["basique"] },
  { id:"a1_115", es:"y", fr:"et", exEs:"Tengo un perro y un gato.", exFr:"J'ai un chien et un chat.", cat:"esenciales", tags:["basique"] },
  { id:"a1_116", es:"o", fr:"ou", exEs:"¿Quieres té o café?", exFr:"Tu veux du thé ou du café ?", cat:"esenciales", tags:["basique"] },
  { id:"a1_117", es:"con", fr:"avec", exEs:"Voy con mis amigos.", exFr:"J'y vais avec mes amis.", cat:"esenciales", tags:["basique"] },
  { id:"a1_118", es:"sin", fr:"sans", exEs:"Café sin azúcar, por favor.", exFr:"Café sans sucre, s'il vous plaît.", cat:"esenciales", tags:["basique"] },

  // --- Ropa ---
  { id:"a1_119", es:"la camisa", fr:"la chemise", exEs:"Lleva una camisa blanca.", exFr:"Il porte une chemise blanche.", cat:"ropa", tags:["vêtement"] },
  { id:"a1_120", es:"el pantalón", fr:"le pantalon", exEs:"Necesito un pantalón nuevo.", exFr:"J'ai besoin d'un nouveau pantalon.", cat:"ropa", tags:["vêtement"] },
  { id:"a1_121", es:"los zapatos", fr:"les chaussures", exEs:"Estos zapatos son muy cómodos.", exFr:"Ces chaussures sont très confortables.", cat:"ropa", tags:["vêtement"] },
  { id:"a1_122", es:"el vestido", fr:"la robe", exEs:"Compré un vestido rojo.", exFr:"J'ai acheté une robe rouge.", cat:"ropa", tags:["vêtement"] },
  { id:"a1_123", es:"la chaqueta", fr:"la veste", exEs:"Ponte la chaqueta, hace frío.", exFr:"Mets ta veste, il fait froid.", cat:"ropa", tags:["vêtement"] },
  { id:"a1_124", es:"la falda", fr:"la jupe", exEs:"Lleva una falda azul.", exFr:"Elle porte une jupe bleue.", cat:"ropa", tags:["vêtement"] },

  // --- Preguntas ---
  { id:"a1_125", es:"¿qué?", fr:"quoi ? / que ?", exEs:"¿Qué quieres comer?", exFr:"Qu'est-ce que tu veux manger ?", cat:"preguntas", tags:["question"] },
  { id:"a1_126", es:"¿quién?", fr:"qui ?", exEs:"¿Quién es esa persona?", exFr:"Qui est cette personne ?", cat:"preguntas", tags:["question"] },
  { id:"a1_127", es:"¿dónde?", fr:"où ?", exEs:"¿Dónde está el banco?", exFr:"Où est la banque ?", cat:"preguntas", tags:["question"] },
  { id:"a1_128", es:"¿cuándo?", fr:"quand ?", exEs:"¿Cuándo es tu cumpleaños?", exFr:"Quand est ton anniversaire ?", cat:"preguntas", tags:["question"] },
  { id:"a1_129", es:"¿cómo?", fr:"comment ?", exEs:"¿Cómo se dice en español?", exFr:"Comment dit-on en espagnol ?", cat:"preguntas", tags:["question"] },
  { id:"a1_130", es:"¿por qué?", fr:"pourquoi ?", exEs:"¿Por qué estudias español?", exFr:"Pourquoi étudies-tu l'espagnol ?", cat:"preguntas", tags:["question"] },
  { id:"a1_131", es:"¿cuánto?", fr:"combien ?", exEs:"¿Cuánto cuesta esto?", exFr:"Combien ça coûte ?", cat:"preguntas", tags:["question"] },
];

// ============================================================
//  NIVEAU A2 — Élémentaire
// ============================================================
const A2 = [
  // --- Viajes ---
  { id:"a2_001", es:"el avión", fr:"l'avion", exEs:"El avión sale a las ocho.", exFr:"L'avion part à huit heures.", cat:"viajes", tags:["voyage","transport"] },
  { id:"a2_002", es:"el hotel", fr:"l'hôtel", exEs:"Reservé un hotel cerca de la playa.", exFr:"J'ai réservé un hôtel près de la plage.", cat:"viajes", tags:["voyage"] },
  { id:"a2_003", es:"la maleta", fr:"la valise", exEs:"Haz la maleta, nos vamos mañana.", exFr:"Fais ta valise, on part demain.", cat:"viajes", tags:["voyage"] },
  { id:"a2_004", es:"el pasaporte", fr:"le passeport", exEs:"No olvides tu pasaporte.", exFr:"N'oublie pas ton passeport.", cat:"viajes", tags:["voyage"] },
  { id:"a2_005", es:"el billete", fr:"le billet", exEs:"Compré los billetes por internet.", exFr:"J'ai acheté les billets sur internet.", cat:"viajes", tags:["voyage"] },
  { id:"a2_006", es:"la playa", fr:"la plage", exEs:"Vamos a la playa este verano.", exFr:"Nous allons à la plage cet été.", cat:"viajes", tags:["voyage","lieu"] },
  { id:"a2_007", es:"la montaña", fr:"la montagne", exEs:"Me encanta ir a la montaña.", exFr:"J'adore aller à la montagne.", cat:"viajes", tags:["voyage","lieu"] },
  { id:"a2_008", es:"el museo", fr:"le musée", exEs:"Visitamos el museo del Prado.", exFr:"Nous avons visité le musée du Prado.", cat:"viajes", tags:["voyage","lieu"] },
  { id:"a2_009", es:"el mapa", fr:"la carte (géo)", exEs:"¿Tienes un mapa de la ciudad?", exFr:"Tu as un plan de la ville ?", cat:"viajes", tags:["voyage"] },
  { id:"a2_010", es:"la vacación", fr:"les vacances", exEs:"Las vacaciones empiezan en julio.", exFr:"Les vacances commencent en juillet.", cat:"viajes", tags:["voyage"] },

  // --- Compras ---
  { id:"a2_011", es:"el precio", fr:"le prix", exEs:"¿Cuál es el precio de esta camisa?", exFr:"Quel est le prix de cette chemise ?", cat:"compras", tags:["achat"] },
  { id:"a2_012", es:"el dinero", fr:"l'argent", exEs:"No tengo suficiente dinero.", exFr:"Je n'ai pas assez d'argent.", cat:"compras", tags:["achat"] },
  { id:"a2_013", es:"barato", fr:"bon marché / pas cher", exEs:"Este mercado es muy barato.", exFr:"Ce marché est très bon marché.", cat:"compras", tags:["achat","adjectif"] },
  { id:"a2_014", es:"caro", fr:"cher", exEs:"El alquiler es demasiado caro.", exFr:"Le loyer est trop cher.", cat:"compras", tags:["achat","adjectif"] },
  { id:"a2_015", es:"pagar", fr:"payer", exEs:"¿Puedo pagar con tarjeta?", exFr:"Je peux payer par carte ?", cat:"compras", tags:["achat","verbe"] },
  { id:"a2_016", es:"vender", fr:"vendre", exEs:"Venden frutas frescas en el mercado.", exFr:"Ils vendent des fruits frais au marché.", cat:"compras", tags:["achat","verbe"] },
  { id:"a2_017", es:"la oferta", fr:"la promotion / l'offre", exEs:"Hay una oferta especial esta semana.", exFr:"Il y a une promotion spéciale cette semaine.", cat:"compras", tags:["achat"] },
  { id:"a2_018", es:"la tarjeta", fr:"la carte (bancaire)", exEs:"He perdido mi tarjeta de crédito.", exFr:"J'ai perdu ma carte de crédit.", cat:"compras", tags:["achat"] },

  // --- Salud ---
  { id:"a2_019", es:"el médico", fr:"le médecin", exEs:"Tengo cita con el médico.", exFr:"J'ai rendez-vous chez le médecin.", cat:"salud", tags:["santé"] },
  { id:"a2_020", es:"enfermo", fr:"malade", exEs:"Estoy enfermo, no puedo ir a trabajar.", exFr:"Je suis malade, je ne peux pas aller travailler.", cat:"salud", tags:["santé","adjectif"] },
  { id:"a2_021", es:"el dolor", fr:"la douleur", exEs:"Tengo un dolor de espalda terrible.", exFr:"J'ai une terrible douleur au dos.", cat:"salud", tags:["santé"] },
  { id:"a2_022", es:"la fiebre", fr:"la fièvre", exEs:"Tiene fiebre desde ayer.", exFr:"Il/Elle a de la fièvre depuis hier.", cat:"salud", tags:["santé"] },
  { id:"a2_023", es:"la medicina", fr:"le médicament", exEs:"Toma esta medicina tres veces al día.", exFr:"Prends ce médicament trois fois par jour.", cat:"salud", tags:["santé"] },
  { id:"a2_024", es:"la farmacia", fr:"la pharmacie", exEs:"La farmacia está abierta hasta las diez.", exFr:"La pharmacie est ouverte jusqu'à dix heures.", cat:"salud", tags:["santé","lieu"] },
  { id:"a2_025", es:"la receta", fr:"l'ordonnance", exEs:"Necesitas una receta del médico.", exFr:"Tu as besoin d'une ordonnance du médecin.", cat:"salud", tags:["santé"] },

  // --- Trabajo ---
  { id:"a2_026", es:"la oficina", fr:"le bureau", exEs:"Trabajo en una oficina grande.", exFr:"Je travaille dans un grand bureau.", cat:"trabajo", tags:["travail"] },
  { id:"a2_027", es:"el jefe", fr:"le chef / patron", exEs:"Mi jefe es muy exigente.", exFr:"Mon patron est très exigeant.", cat:"trabajo", tags:["travail"] },
  { id:"a2_028", es:"la reunión", fr:"la réunion", exEs:"Tenemos una reunión a las tres.", exFr:"Nous avons une réunion à trois heures.", cat:"trabajo", tags:["travail"] },
  { id:"a2_029", es:"el ordenador", fr:"l'ordinateur", exEs:"Mi ordenador no funciona.", exFr:"Mon ordinateur ne marche pas.", cat:"trabajo", tags:["travail","technologie"] },
  { id:"a2_030", es:"el correo", fr:"le courrier / e-mail", exEs:"Te envío un correo esta tarde.", exFr:"Je t'envoie un e-mail cet après-midi.", cat:"trabajo", tags:["travail"] },
  { id:"a2_031", es:"el sueldo", fr:"le salaire", exEs:"El sueldo no es suficiente.", exFr:"Le salaire n'est pas suffisant.", cat:"trabajo", tags:["travail"] },
  { id:"a2_032", es:"la empresa", fr:"l'entreprise", exEs:"Trabajo en una empresa de tecnología.", exFr:"Je travaille dans une entreprise de technologie.", cat:"trabajo", tags:["travail"] },

  // --- Ciudad ---
  { id:"a2_033", es:"la plaza", fr:"la place", exEs:"Quedamos en la plaza Mayor.", exFr:"On se retrouve sur la place Mayor.", cat:"ciudad", tags:["ville","lieu"] },
  { id:"a2_034", es:"el banco", fr:"la banque", exEs:"Voy al banco a sacar dinero.", exFr:"Je vais à la banque retirer de l'argent.", cat:"ciudad", tags:["ville","lieu"] },
  { id:"a2_035", es:"la iglesia", fr:"l'église", exEs:"La iglesia es del siglo XVI.", exFr:"L'église date du XVIe siècle.", cat:"ciudad", tags:["ville","lieu"] },
  { id:"a2_036", es:"el edificio", fr:"le bâtiment / immeuble", exEs:"Es el edificio más alto de la ciudad.", exFr:"C'est le bâtiment le plus haut de la ville.", cat:"ciudad", tags:["ville"] },
  { id:"a2_037", es:"el semáforo", fr:"le feu (tricolore)", exEs:"Gira a la derecha en el semáforo.", exFr:"Tourne à droite au feu.", cat:"ciudad", tags:["ville"] },
  { id:"a2_038", es:"la esquina", fr:"le coin (de rue)", exEs:"La panadería está en la esquina.", exFr:"La boulangerie est au coin.", cat:"ciudad", tags:["ville"] },
  { id:"a2_039", es:"el barrio", fr:"le quartier", exEs:"Vivo en un barrio tranquilo.", exFr:"J'habite dans un quartier tranquille.", cat:"ciudad", tags:["ville"] },

  // --- Transporte ---
  { id:"a2_040", es:"el coche", fr:"la voiture", exEs:"Voy al trabajo en coche.", exFr:"Je vais au travail en voiture.", cat:"transporte", tags:["transport"] },
  { id:"a2_041", es:"el autobús", fr:"le bus", exEs:"El autobús llega cada diez minutos.", exFr:"Le bus arrive toutes les dix minutes.", cat:"transporte", tags:["transport"] },
  { id:"a2_042", es:"el tren", fr:"le train", exEs:"El tren a Barcelona sale a las seis.", exFr:"Le train pour Barcelone part à six heures.", cat:"transporte", tags:["transport"] },
  { id:"a2_043", es:"el metro", fr:"le métro", exEs:"La estación de metro está cerca.", exFr:"La station de métro est proche.", cat:"transporte", tags:["transport"] },
  { id:"a2_044", es:"la bicicleta", fr:"le vélo", exEs:"Voy a la universidad en bicicleta.", exFr:"Je vais à l'université à vélo.", cat:"transporte", tags:["transport"] },
  { id:"a2_045", es:"conducir", fr:"conduire", exEs:"No sé conducir todavía.", exFr:"Je ne sais pas encore conduire.", cat:"transporte", tags:["transport","verbe"] },
  { id:"a2_046", es:"la estación", fr:"la gare", exEs:"La estación está en el centro.", exFr:"La gare est dans le centre.", cat:"transporte", tags:["transport","lieu"] },
  { id:"a2_047", es:"la parada", fr:"l'arrêt (de bus)", exEs:"Espero en la parada del autobús.", exFr:"J'attends à l'arrêt de bus.", cat:"transporte", tags:["transport","lieu"] },

  // --- Tiempo y clima ---
  { id:"a2_048", es:"el sol", fr:"le soleil", exEs:"Hoy hace mucho sol.", exFr:"Aujourd'hui il y a beaucoup de soleil.", cat:"clima", tags:["météo"] },
  { id:"a2_049", es:"la lluvia", fr:"la pluie", exEs:"La lluvia no para desde ayer.", exFr:"La pluie ne s'arrête pas depuis hier.", cat:"clima", tags:["météo"] },
  { id:"a2_050", es:"la nube", fr:"le nuage", exEs:"Hay muchas nubes en el cielo.", exFr:"Il y a beaucoup de nuages dans le ciel.", cat:"clima", tags:["météo"] },
  { id:"a2_051", es:"el viento", fr:"le vent", exEs:"Hace mucho viento hoy.", exFr:"Il y a beaucoup de vent aujourd'hui.", cat:"clima", tags:["météo"] },
  { id:"a2_052", es:"la nieve", fr:"la neige", exEs:"La nieve cubre las montañas.", exFr:"La neige couvre les montagnes.", cat:"clima", tags:["météo"] },
  { id:"a2_053", es:"la tormenta", fr:"l'orage / la tempête", exEs:"Anoche hubo una tormenta fuerte.", exFr:"La nuit dernière il y a eu un fort orage.", cat:"clima", tags:["météo"] },
  { id:"a2_054", es:"caluroso", fr:"chaud (temps)", exEs:"El verano aquí es muy caluroso.", exFr:"L'été ici est très chaud.", cat:"clima", tags:["météo","adjectif"] },

  // --- Ocio y deportes ---
  { id:"a2_055", es:"el fútbol", fr:"le football", exEs:"Juego al fútbol los domingos.", exFr:"Je joue au football le dimanche.", cat:"ocio", tags:["sport","loisir"] },
  { id:"a2_056", es:"nadar", fr:"nager", exEs:"Me gusta nadar en el mar.", exFr:"J'aime nager dans la mer.", cat:"ocio", tags:["sport","verbe"] },
  { id:"a2_057", es:"correr", fr:"courir", exEs:"Corro cinco kilómetros cada mañana.", exFr:"Je cours cinq kilomètres chaque matin.", cat:"ocio", tags:["sport","verbe"] },
  { id:"a2_058", es:"la película", fr:"le film", exEs:"Vimos una película española muy buena.", exFr:"Nous avons vu un très bon film espagnol.", cat:"ocio", tags:["loisir"] },
  { id:"a2_059", es:"la canción", fr:"la chanson", exEs:"Esta canción es muy famosa.", exFr:"Cette chanson est très célèbre.", cat:"ocio", tags:["loisir"] },
  { id:"a2_060", es:"bailar", fr:"danser", exEs:"Me encanta bailar salsa.", exFr:"J'adore danser la salsa.", cat:"ocio", tags:["loisir","verbe"] },
  { id:"a2_061", es:"cocinar", fr:"cuisiner", exEs:"Los fines de semana me gusta cocinar.", exFr:"Le week-end j'aime cuisiner.", cat:"ocio", tags:["loisir","verbe"] },
  { id:"a2_062", es:"jugar", fr:"jouer", exEs:"Los niños juegan en el parque.", exFr:"Les enfants jouent dans le parc.", cat:"ocio", tags:["loisir","verbe"] },

  // --- Verbos A2 ---
  { id:"a2_063", es:"pensar", fr:"penser", exEs:"Pienso que tienes razón.", exFr:"Je pense que tu as raison.", cat:"verbos", tags:["verbe"] },
  { id:"a2_064", es:"creer", fr:"croire", exEs:"No creo que sea verdad.", exFr:"Je ne crois pas que ce soit vrai.", cat:"verbos", tags:["verbe"] },
  { id:"a2_065", es:"llegar", fr:"arriver", exEs:"Llego a casa a las siete.", exFr:"J'arrive à la maison à sept heures.", cat:"verbos", tags:["verbe"] },
  { id:"a2_066", es:"salir", fr:"sortir", exEs:"Salimos de fiesta los viernes.", exFr:"Nous sortons faire la fête le vendredi.", cat:"verbos", tags:["verbe"] },
  { id:"a2_067", es:"volver", fr:"revenir / rentrer", exEs:"Vuelvo de vacaciones el lunes.", exFr:"Je rentre de vacances lundi.", cat:"verbos", tags:["verbe"] },
  { id:"a2_068", es:"encontrar", fr:"trouver", exEs:"No encuentro mis llaves.", exFr:"Je ne trouve pas mes clés.", cat:"verbos", tags:["verbe"] },
  { id:"a2_069", es:"perder", fr:"perdre", exEs:"He perdido mi cartera.", exFr:"J'ai perdu mon portefeuille.", cat:"verbos", tags:["verbe"] },
  { id:"a2_070", es:"recordar", fr:"se souvenir", exEs:"No recuerdo su nombre.", exFr:"Je ne me souviens pas de son nom.", cat:"verbos", tags:["verbe"] },
  { id:"a2_071", es:"olvidar", fr:"oublier", exEs:"Olvidé comprar leche.", exFr:"J'ai oublié d'acheter du lait.", cat:"verbos", tags:["verbe"] },
  { id:"a2_072", es:"conocer", fr:"connaître", exEs:"¿Conoces a mi hermana?", exFr:"Tu connais ma sœur ?", cat:"verbos", tags:["verbe"] },
  { id:"a2_073", es:"saber", fr:"savoir", exEs:"No sé cómo llegar allí.", exFr:"Je ne sais pas comment y arriver.", cat:"verbos", tags:["verbe"] },
  { id:"a2_074", es:"entender", fr:"comprendre", exEs:"No entiendo esta palabra.", exFr:"Je ne comprends pas ce mot.", cat:"verbos", tags:["verbe"] },
  { id:"a2_075", es:"esperar", fr:"attendre / espérer", exEs:"Espero que vengas a mi fiesta.", exFr:"J'espère que tu viendras à ma fête.", cat:"verbos", tags:["verbe"] },
  { id:"a2_076", es:"ayudar", fr:"aider", exEs:"¿Puedes ayudarme, por favor?", exFr:"Tu peux m'aider, s'il te plaît ?", cat:"verbos", tags:["verbe"] },
  { id:"a2_077", es:"necesitar", fr:"avoir besoin de", exEs:"Necesito más tiempo.", exFr:"J'ai besoin de plus de temps.", cat:"verbos", tags:["verbe"] },
  { id:"a2_078", es:"llevar", fr:"porter / emmener", exEs:"Llevo gafas desde los diez años.", exFr:"Je porte des lunettes depuis l'âge de dix ans.", cat:"verbos", tags:["verbe"] },
  { id:"a2_079", es:"traer", fr:"apporter", exEs:"¿Puedes traer pan?", exFr:"Tu peux apporter du pain ?", cat:"verbos", tags:["verbe"] },
  { id:"a2_080", es:"sentir", fr:"sentir / ressentir", exEs:"Siento mucho frío.", exFr:"J'ai très froid. (Je ressens beaucoup de froid.)", cat:"verbos", tags:["verbe"] },

  // --- Adjetivos A2 ---
  { id:"a2_081", es:"difícil", fr:"difficile", exEs:"El examen fue muy difícil.", exFr:"L'examen était très difficile.", cat:"adjetivos", tags:["adjectif"] },
  { id:"a2_082", es:"fácil", fr:"facile", exEs:"Esta receta es muy fácil.", exFr:"Cette recette est très facile.", cat:"adjetivos", tags:["adjectif"] },
  { id:"a2_083", es:"importante", fr:"important", exEs:"Es importante estudiar cada día.", exFr:"C'est important d'étudier chaque jour.", cat:"adjetivos", tags:["adjectif"] },
  { id:"a2_084", es:"posible", fr:"possible", exEs:"¿Es posible cambiar la fecha?", exFr:"C'est possible de changer la date ?", cat:"adjetivos", tags:["adjectif"] },
  { id:"a2_085", es:"necesario", fr:"nécessaire", exEs:"Es necesario reservar con antelación.", exFr:"Il est nécessaire de réserver à l'avance.", cat:"adjetivos", tags:["adjectif"] },
  { id:"a2_086", es:"tranquilo", fr:"calme / tranquille", exEs:"Busco un lugar tranquilo para leer.", exFr:"Je cherche un endroit calme pour lire.", cat:"adjetivos", tags:["adjectif"] },
  { id:"a2_087", es:"rápido", fr:"rapide", exEs:"El tren es más rápido que el autobús.", exFr:"Le train est plus rapide que le bus.", cat:"adjetivos", tags:["adjectif"] },
  { id:"a2_088", es:"lento", fr:"lent", exEs:"Internet está muy lento hoy.", exFr:"Internet est très lent aujourd'hui.", cat:"adjetivos", tags:["adjectif"] },
  { id:"a2_089", es:"libre", fr:"libre", exEs:"¿Estás libre este sábado?", exFr:"Tu es libre ce samedi ?", cat:"adjetivos", tags:["adjectif"] },
  { id:"a2_090", es:"ocupado", fr:"occupé", exEs:"Estoy ocupado, te llamo luego.", exFr:"Je suis occupé, je te rappelle plus tard.", cat:"adjetivos", tags:["adjectif"] },
];

// ============================================================
//  NIVEAU B1 — Intermédiaire
// ============================================================
const B1 = [
  // --- Sentimientos y emociones ---
  { id:"b1_001", es:"la alegría", fr:"la joie", exEs:"Sintió una gran alegría al verla.", exFr:"Il a ressenti une grande joie en la voyant.", cat:"sentimientos", tags:["émotion"] },
  { id:"b1_002", es:"la tristeza", fr:"la tristesse", exEs:"La tristeza se reflejaba en su cara.", exFr:"La tristesse se reflétait sur son visage.", cat:"sentimientos", tags:["émotion"] },
  { id:"b1_003", es:"el miedo", fr:"la peur", exEs:"Tiene miedo de los perros.", exFr:"Il/Elle a peur des chiens.", cat:"sentimientos", tags:["émotion"] },
  { id:"b1_004", es:"la sorpresa", fr:"la surprise", exEs:"¡Qué sorpresa verte aquí!", exFr:"Quelle surprise de te voir ici !", cat:"sentimientos", tags:["émotion"] },
  { id:"b1_005", es:"el enfado", fr:"la colère", exEs:"Su enfado duró toda la tarde.", exFr:"Sa colère a duré tout l'après-midi.", cat:"sentimientos", tags:["émotion"] },
  { id:"b1_006", es:"la vergüenza", fr:"la honte", exEs:"Siente vergüenza de su error.", exFr:"Il/Elle a honte de son erreur.", cat:"sentimientos", tags:["émotion"] },
  { id:"b1_007", es:"el orgullo", fr:"la fierté", exEs:"Sus padres sienten orgullo por ella.", exFr:"Ses parents sont fiers d'elle.", cat:"sentimientos", tags:["émotion"] },
  { id:"b1_008", es:"la esperanza", fr:"l'espoir", exEs:"No pierdas la esperanza.", exFr:"Ne perds pas espoir.", cat:"sentimientos", tags:["émotion"] },
  { id:"b1_009", es:"la confianza", fr:"la confiance", exEs:"Tengo mucha confianza en ti.", exFr:"J'ai beaucoup confiance en toi.", cat:"sentimientos", tags:["émotion"] },
  { id:"b1_010", es:"preocuparse", fr:"s'inquiéter", exEs:"No te preocupes, todo saldrá bien.", exFr:"Ne t'inquiète pas, tout ira bien.", cat:"sentimientos", tags:["émotion","verbe"] },

  // --- Medios de comunicación ---
  { id:"b1_011", es:"el periódico", fr:"le journal", exEs:"Leo el periódico todas las mañanas.", exFr:"Je lis le journal tous les matins.", cat:"medios", tags:["média"] },
  { id:"b1_012", es:"la noticia", fr:"la nouvelle / l'info", exEs:"Esa noticia me sorprendió mucho.", exFr:"Cette nouvelle m'a beaucoup surpris.", cat:"medios", tags:["média"] },
  { id:"b1_013", es:"la revista", fr:"le magazine / la revue", exEs:"Compro esa revista cada mes.", exFr:"J'achète ce magazine chaque mois.", cat:"medios", tags:["média"] },
  { id:"b1_014", es:"la pantalla", fr:"l'écran", exEs:"Paso demasiado tiempo delante de la pantalla.", exFr:"Je passe trop de temps devant l'écran.", cat:"medios", tags:["média","technologie"] },
  { id:"b1_015", es:"la publicidad", fr:"la publicité", exEs:"Hay demasiada publicidad en internet.", exFr:"Il y a trop de publicité sur internet.", cat:"medios", tags:["média"] },
  { id:"b1_016", es:"la red social", fr:"le réseau social", exEs:"Las redes sociales influyen en la opinión pública.", exFr:"Les réseaux sociaux influencent l'opinion publique.", cat:"medios", tags:["média","technologie"] },

  // --- Medio ambiente ---
  { id:"b1_017", es:"la naturaleza", fr:"la nature", exEs:"Me encanta pasear por la naturaleza.", exFr:"J'adore me promener dans la nature.", cat:"medio_ambiente", tags:["environnement"] },
  { id:"b1_018", es:"el bosque", fr:"la forêt", exEs:"El bosque está lleno de árboles centenarios.", exFr:"La forêt est pleine d'arbres centenaires.", cat:"medio_ambiente", tags:["environnement"] },
  { id:"b1_019", es:"el río", fr:"le fleuve / la rivière", exEs:"El río cruza toda la ciudad.", exFr:"Le fleuve traverse toute la ville.", cat:"medio_ambiente", tags:["environnement"] },
  { id:"b1_020", es:"el mar", fr:"la mer", exEs:"El mar estaba en calma esta mañana.", exFr:"La mer était calme ce matin.", cat:"medio_ambiente", tags:["environnement"] },
  { id:"b1_021", es:"la contaminación", fr:"la pollution", exEs:"La contaminación del aire es un problema grave.", exFr:"La pollution de l'air est un problème grave.", cat:"medio_ambiente", tags:["environnement"] },
  { id:"b1_022", es:"reciclar", fr:"recycler", exEs:"Es importante reciclar el plástico.", exFr:"C'est important de recycler le plastique.", cat:"medio_ambiente", tags:["environnement","verbe"] },
  { id:"b1_023", es:"el clima", fr:"le climat", exEs:"El clima está cambiando rápidamente.", exFr:"Le climat change rapidement.", cat:"medio_ambiente", tags:["environnement"] },
  { id:"b1_024", es:"proteger", fr:"protéger", exEs:"Debemos proteger el medio ambiente.", exFr:"Nous devons protéger l'environnement.", cat:"medio_ambiente", tags:["environnement","verbe"] },

  // --- Educación ---
  { id:"b1_025", es:"la universidad", fr:"l'université", exEs:"Estudié derecho en la universidad.", exFr:"J'ai étudié le droit à l'université.", cat:"educacion", tags:["éducation"] },
  { id:"b1_026", es:"la carrera", fr:"les études / la carrière", exEs:"¿Qué carrera quieres estudiar?", exFr:"Quelles études veux-tu faire ?", cat:"educacion", tags:["éducation"] },
  { id:"b1_027", es:"el examen", fr:"l'examen", exEs:"Tengo un examen la semana que viene.", exFr:"J'ai un examen la semaine prochaine.", cat:"educacion", tags:["éducation"] },
  { id:"b1_028", es:"aprobar", fr:"réussir (un examen)", exEs:"Aprobé todos los exámenes.", exFr:"J'ai réussi tous les examens.", cat:"educacion", tags:["éducation","verbe"] },
  { id:"b1_029", es:"suspender", fr:"échouer (un examen)", exEs:"Suspendí matemáticas en junio.", exFr:"J'ai raté les maths en juin.", cat:"educacion", tags:["éducation","verbe"] },
  { id:"b1_030", es:"la investigación", fr:"la recherche", exEs:"Su investigación es sobre energía solar.", exFr:"Sa recherche porte sur l'énergie solaire.", cat:"educacion", tags:["éducation"] },
  { id:"b1_031", es:"aprender", fr:"apprendre", exEs:"Nunca es tarde para aprender.", exFr:"Il n'est jamais trop tard pour apprendre.", cat:"educacion", tags:["éducation","verbe"] },

  // --- Relaciones ---
  { id:"b1_032", es:"la amistad", fr:"l'amitié", exEs:"Nuestra amistad dura desde la infancia.", exFr:"Notre amitié dure depuis l'enfance.", cat:"relaciones", tags:["relation"] },
  { id:"b1_033", es:"la pareja", fr:"le couple / partenaire", exEs:"Llevan cinco años como pareja.", exFr:"Ils sont en couple depuis cinq ans.", cat:"relaciones", tags:["relation"] },
  { id:"b1_034", es:"la boda", fr:"le mariage (cérémonie)", exEs:"La boda fue en una iglesia pequeña.", exFr:"Le mariage a eu lieu dans une petite église.", cat:"relaciones", tags:["relation"] },
  { id:"b1_035", es:"el vecino", fr:"le voisin", exEs:"Mi vecino es muy amable.", exFr:"Mon voisin est très aimable.", cat:"relaciones", tags:["relation"] },
  { id:"b1_036", es:"el respeto", fr:"le respect", exEs:"El respeto es fundamental en una relación.", exFr:"Le respect est fondamental dans une relation.", cat:"relaciones", tags:["relation"] },
  { id:"b1_037", es:"discutir", fr:"discuter / se disputer", exEs:"Discutieron por un malentendido.", exFr:"Ils se sont disputés à cause d'un malentendu.", cat:"relaciones", tags:["relation","verbe"] },

  // --- Expresiones y conectores ---
  { id:"b1_038", es:"en realidad", fr:"en réalité", exEs:"En realidad, no sé qué hacer.", exFr:"En réalité, je ne sais pas quoi faire.", cat:"expresiones", tags:["connecteur"] },
  { id:"b1_039", es:"sin embargo", fr:"cependant / toutefois", exEs:"Es caro; sin embargo, merece la pena.", exFr:"C'est cher ; cependant, ça vaut le coup.", cat:"expresiones", tags:["connecteur"] },
  { id:"b1_040", es:"por lo tanto", fr:"par conséquent", exEs:"Está enfermo, por lo tanto no puede venir.", exFr:"Il est malade, par conséquent il ne peut pas venir.", cat:"expresiones", tags:["connecteur"] },
  { id:"b1_041", es:"además", fr:"de plus / en outre", exEs:"Además, tenemos que considerar el coste.", exFr:"De plus, nous devons considérer le coût.", cat:"expresiones", tags:["connecteur"] },
  { id:"b1_042", es:"en cambio", fr:"en revanche", exEs:"A él le gusta el frío; en cambio, ella prefiere el calor.", exFr:"Lui aime le froid ; en revanche, elle préfère la chaleur.", cat:"expresiones", tags:["connecteur"] },
  { id:"b1_043", es:"a pesar de", fr:"malgré", exEs:"A pesar de la lluvia, salimos a pasear.", exFr:"Malgré la pluie, nous sommes sortis nous promener.", cat:"expresiones", tags:["connecteur"] },
  { id:"b1_044", es:"de hecho", fr:"en fait / d'ailleurs", exEs:"De hecho, ya he estado allí antes.", exFr:"En fait, j'y suis déjà allé avant.", cat:"expresiones", tags:["connecteur"] },
  { id:"b1_045", es:"por supuesto", fr:"bien sûr", exEs:"Por supuesto que puedes venir.", exFr:"Bien sûr que tu peux venir.", cat:"expresiones", tags:["connecteur"] },
  { id:"b1_046", es:"en cuanto a", fr:"en ce qui concerne", exEs:"En cuanto al proyecto, va bien.", exFr:"En ce qui concerne le projet, ça va bien.", cat:"expresiones", tags:["connecteur"] },

  // --- Verbos B1 ---
  { id:"b1_047", es:"conseguir", fr:"obtenir / réussir à", exEs:"Conseguí un buen trabajo.", exFr:"J'ai obtenu un bon travail.", cat:"verbos", tags:["verbe"] },
  { id:"b1_048", es:"intentar", fr:"essayer", exEs:"Voy a intentar otra vez.", exFr:"Je vais essayer encore une fois.", cat:"verbos", tags:["verbe"] },
  { id:"b1_049", es:"lograr", fr:"réussir à / parvenir à", exEs:"Logró terminar a tiempo.", exFr:"Il a réussi à finir à temps.", cat:"verbos", tags:["verbe"] },
  { id:"b1_050", es:"mantener", fr:"maintenir / garder", exEs:"Es difícil mantener la calma.", exFr:"C'est difficile de garder son calme.", cat:"verbos", tags:["verbe"] },
  { id:"b1_051", es:"desarrollar", fr:"développer", exEs:"Queremos desarrollar nuevas ideas.", exFr:"Nous voulons développer de nouvelles idées.", cat:"verbos", tags:["verbe"] },
  { id:"b1_052", es:"mejorar", fr:"améliorer", exEs:"Quiero mejorar mi español.", exFr:"Je veux améliorer mon espagnol.", cat:"verbos", tags:["verbe"] },
  { id:"b1_053", es:"explicar", fr:"expliquer", exEs:"¿Puedes explicar otra vez?", exFr:"Tu peux expliquer encore une fois ?", cat:"verbos", tags:["verbe"] },
  { id:"b1_054", es:"proponer", fr:"proposer", exEs:"Propongo que nos reunamos mañana.", exFr:"Je propose qu'on se réunisse demain.", cat:"verbos", tags:["verbe"] },
  { id:"b1_055", es:"exigir", fr:"exiger", exEs:"Los trabajadores exigen mejores condiciones.", exFr:"Les travailleurs exigent de meilleures conditions.", cat:"verbos", tags:["verbe"] },
  { id:"b1_056", es:"pertenecer", fr:"appartenir", exEs:"Esta tierra pertenece a mi familia.", exFr:"Cette terre appartient à ma famille.", cat:"verbos", tags:["verbe"] },
  { id:"b1_057", es:"surgir", fr:"surgir / apparaître", exEs:"Surgió un problema inesperado.", exFr:"Un problème inattendu est apparu.", cat:"verbos", tags:["verbe"] },
  { id:"b1_058", es:"suponer", fr:"supposer", exEs:"Supongo que llegarán tarde.", exFr:"Je suppose qu'ils arriveront en retard.", cat:"verbos", tags:["verbe"] },
  { id:"b1_059", es:"resolver", fr:"résoudre", exEs:"Hay que resolver este problema.", exFr:"Il faut résoudre ce problème.", cat:"verbos", tags:["verbe"] },
  { id:"b1_060", es:"elegir", fr:"choisir", exEs:"Elige el que más te guste.", exFr:"Choisis celui que tu préfères.", cat:"verbos", tags:["verbe"] },

  // --- Otros B1 ---
  { id:"b1_061", es:"el éxito", fr:"le succès", exEs:"El éxito no llega de la noche a la mañana.", exFr:"Le succès n'arrive pas du jour au lendemain.", cat:"abstractos", tags:["abstrait"] },
  { id:"b1_062", es:"el fracaso", fr:"l'échec", exEs:"El fracaso es parte del aprendizaje.", exFr:"L'échec fait partie de l'apprentissage.", cat:"abstractos", tags:["abstrait"] },
  { id:"b1_063", es:"el esfuerzo", fr:"l'effort", exEs:"Ha sido un gran esfuerzo.", exFr:"Ça a été un gros effort.", cat:"abstractos", tags:["abstrait"] },
  { id:"b1_064", es:"el resultado", fr:"le résultat", exEs:"Los resultados son positivos.", exFr:"Les résultats sont positifs.", cat:"abstractos", tags:["abstrait"] },
  { id:"b1_065", es:"la ventaja", fr:"l'avantage", exEs:"La ventaja es que es gratis.", exFr:"L'avantage c'est que c'est gratuit.", cat:"abstractos", tags:["abstrait"] },
  { id:"b1_066", es:"la desventaja", fr:"l'inconvénient", exEs:"La desventaja es el precio.", exFr:"L'inconvénient c'est le prix.", cat:"abstractos", tags:["abstrait"] },
  { id:"b1_067", es:"el riesgo", fr:"le risque", exEs:"Es un riesgo que vale la pena correr.", exFr:"C'est un risque qui vaut la peine d'être pris.", cat:"abstractos", tags:["abstrait"] },
  { id:"b1_068", es:"la oportunidad", fr:"l'opportunité", exEs:"No dejes pasar esta oportunidad.", exFr:"Ne laisse pas passer cette opportunité.", cat:"abstractos", tags:["abstrait"] },
  { id:"b1_069", es:"la experiencia", fr:"l'expérience", exEs:"Fue una experiencia inolvidable.", exFr:"Ce fut une expérience inoubliable.", cat:"abstractos", tags:["abstrait"] },
  { id:"b1_070", es:"la decisión", fr:"la décision", exEs:"Tomar decisiones es difícil.", exFr:"Prendre des décisions est difficile.", cat:"abstractos", tags:["abstrait"] },
];

// ============================================================
//  NIVEAU B2 — Avancé
// ============================================================
const B2 = [
  // --- Política y sociedad ---
  { id:"b2_001", es:"el gobierno", fr:"le gouvernement", exEs:"El gobierno aprobó una nueva ley.", exFr:"Le gouvernement a approuvé une nouvelle loi.", cat:"politica", tags:["politique"] },
  { id:"b2_002", es:"la ley", fr:"la loi", exEs:"Todos deben respetar la ley.", exFr:"Tout le monde doit respecter la loi.", cat:"politica", tags:["politique"] },
  { id:"b2_003", es:"el derecho", fr:"le droit", exEs:"Todos tienen derecho a la educación.", exFr:"Tout le monde a droit à l'éducation.", cat:"politica", tags:["politique"] },
  { id:"b2_004", es:"las elecciones", fr:"les élections", exEs:"Las elecciones serán en noviembre.", exFr:"Les élections auront lieu en novembre.", cat:"politica", tags:["politique"] },
  { id:"b2_005", es:"la democracia", fr:"la démocratie", exEs:"La democracia es un valor fundamental.", exFr:"La démocratie est une valeur fondamentale.", cat:"politica", tags:["politique"] },
  { id:"b2_006", es:"el ciudadano", fr:"le citoyen", exEs:"Los ciudadanos tienen derechos y deberes.", exFr:"Les citoyens ont des droits et des devoirs.", cat:"politica", tags:["politique"] },
  { id:"b2_007", es:"el impuesto", fr:"l'impôt", exEs:"Los impuestos subirán el año que viene.", exFr:"Les impôts augmenteront l'année prochaine.", cat:"politica", tags:["politique","économie"] },
  { id:"b2_008", es:"la desigualdad", fr:"l'inégalité", exEs:"La desigualdad social sigue creciendo.", exFr:"L'inégalité sociale continue de croître.", cat:"politica", tags:["politique","société"] },

  // --- Economía ---
  { id:"b2_009", es:"el mercado", fr:"le marché", exEs:"El mercado laboral está en crisis.", exFr:"Le marché de l'emploi est en crise.", cat:"economia", tags:["économie"] },
  { id:"b2_010", es:"la inversión", fr:"l'investissement", exEs:"Es una buena inversión a largo plazo.", exFr:"C'est un bon investissement à long terme.", cat:"economia", tags:["économie"] },
  { id:"b2_011", es:"la deuda", fr:"la dette", exEs:"El país tiene una deuda enorme.", exFr:"Le pays a une dette énorme.", cat:"economia", tags:["économie"] },
  { id:"b2_012", es:"el crecimiento", fr:"la croissance", exEs:"El crecimiento económico se desaceleró.", exFr:"La croissance économique a ralenti.", cat:"economia", tags:["économie"] },
  { id:"b2_013", es:"el desempleo", fr:"le chômage", exEs:"El desempleo afecta a los jóvenes.", exFr:"Le chômage touche les jeunes.", cat:"economia", tags:["économie"] },
  { id:"b2_014", es:"el presupuesto", fr:"le budget", exEs:"Hay que ajustar el presupuesto.", exFr:"Il faut ajuster le budget.", cat:"economia", tags:["économie"] },
  { id:"b2_015", es:"el beneficio", fr:"le bénéfice / profit", exEs:"La empresa obtuvo grandes beneficios.", exFr:"L'entreprise a réalisé de gros bénéfices.", cat:"economia", tags:["économie"] },
  { id:"b2_016", es:"rentable", fr:"rentable", exEs:"El negocio no es rentable todavía.", exFr:"L'affaire n'est pas encore rentable.", cat:"economia", tags:["économie","adjectif"] },

  // --- Expresiones idiomáticas ---
  { id:"b2_017", es:"meter la pata", fr:"gaffer / mettre les pieds dans le plat", exEs:"Metí la pata en la reunión.", exFr:"J'ai gaffé pendant la réunion.", cat:"modismos", tags:["expression"] },
  { id:"b2_018", es:"estar hecho polvo", fr:"être épuisé / lessivé", exEs:"Después del viaje estoy hecho polvo.", exFr:"Après le voyage je suis lessivé.", cat:"modismos", tags:["expression"] },
  { id:"b2_019", es:"no tener ni idea", fr:"n'avoir aucune idée", exEs:"No tengo ni idea de cómo funciona.", exFr:"Je n'ai aucune idée de comment ça marche.", cat:"modismos", tags:["expression"] },
  { id:"b2_020", es:"dar en el clavo", fr:"mettre dans le mille / taper juste", exEs:"Con esa respuesta diste en el clavo.", exFr:"Avec cette réponse tu as tapé dans le mille.", cat:"modismos", tags:["expression"] },
  { id:"b2_021", es:"echar de menos", fr:"manquer (à qqn)", exEs:"Echo de menos a mi familia.", exFr:"Ma famille me manque.", cat:"modismos", tags:["expression"] },
  { id:"b2_022", es:"tomar el pelo", fr:"se moquer / faire marcher", exEs:"¿Me estás tomando el pelo?", exFr:"Tu te moques de moi ?", cat:"modismos", tags:["expression"] },
  { id:"b2_023", es:"valer la pena", fr:"valoir la peine", exEs:"Vale la pena visitar ese pueblo.", exFr:"Ça vaut la peine de visiter ce village.", cat:"modismos", tags:["expression"] },
  { id:"b2_024", es:"dar igual", fr:"être égal / s'en ficher", exEs:"Me da igual dónde comamos.", exFr:"Ça m'est égal où on mange.", cat:"modismos", tags:["expression"] },
  { id:"b2_025", es:"hacerse cargo", fr:"se charger de / prendre en charge", exEs:"Yo me hago cargo de la situación.", exFr:"Je me charge de la situation.", cat:"modismos", tags:["expression"] },
  { id:"b2_026", es:"estar al tanto", fr:"être au courant", exEs:"¿Estás al tanto de las novedades?", exFr:"Tu es au courant des nouveautés ?", cat:"modismos", tags:["expression"] },
  { id:"b2_027", es:"ponerse las pilas", fr:"se bouger / se mettre au boulot", exEs:"Tienes que ponerte las pilas con los estudios.", exFr:"Tu dois te bouger pour les études.", cat:"modismos", tags:["expression"] },
  { id:"b2_028", es:"ir al grano", fr:"aller droit au but", exEs:"Deja de rodeos y ve al grano.", exFr:"Arrête de tourner autour du pot et va droit au but.", cat:"modismos", tags:["expression"] },

  // --- Conectores avanzados ---
  { id:"b2_029", es:"no obstante", fr:"néanmoins / toutefois", exEs:"No obstante, debemos ser prudentes.", exFr:"Néanmoins, nous devons être prudents.", cat:"conectores", tags:["connecteur"] },
  { id:"b2_030", es:"en definitiva", fr:"en définitive", exEs:"En definitiva, fue una buena experiencia.", exFr:"En définitive, ce fut une bonne expérience.", cat:"conectores", tags:["connecteur"] },
  { id:"b2_031", es:"por consiguiente", fr:"par conséquent", exEs:"No estudió, por consiguiente suspendió.", exFr:"Il n'a pas étudié, par conséquent il a échoué.", cat:"conectores", tags:["connecteur"] },
  { id:"b2_032", es:"siempre y cuando", fr:"à condition que / pourvu que", exEs:"Iré siempre y cuando no llueva.", exFr:"J'irai à condition qu'il ne pleuve pas.", cat:"conectores", tags:["connecteur"] },
  { id:"b2_033", es:"a medida que", fr:"à mesure que / au fur et à mesure", exEs:"A medida que avanzas, se pone más difícil.", exFr:"Au fur et à mesure que tu avances, ça devient plus difficile.", cat:"conectores", tags:["connecteur"] },
  { id:"b2_034", es:"dado que", fr:"étant donné que / vu que", exEs:"Dado que no hay presupuesto, cancelamos el proyecto.", exFr:"Vu qu'il n'y a pas de budget, on annule le projet.", cat:"conectores", tags:["connecteur"] },
  { id:"b2_035", es:"a fin de que", fr:"afin que", exEs:"Lo explico otra vez a fin de que todos entiendan.", exFr:"Je l'explique encore afin que tout le monde comprenne.", cat:"conectores", tags:["connecteur"] },

  // --- Verbos avanzados ---
  { id:"b2_036", es:"abordar", fr:"aborder", exEs:"Hay que abordar este tema con cuidado.", exFr:"Il faut aborder ce sujet avec prudence.", cat:"verbos", tags:["verbe"] },
  { id:"b2_037", es:"destacar", fr:"se distinguer / souligner", exEs:"Cabe destacar su excelente trabajo.", exFr:"Il faut souligner son excellent travail.", cat:"verbos", tags:["verbe"] },
  { id:"b2_038", es:"fomentar", fr:"encourager / promouvoir", exEs:"Debemos fomentar la lectura entre los jóvenes.", exFr:"Nous devons encourager la lecture chez les jeunes.", cat:"verbos", tags:["verbe"] },
  { id:"b2_039", es:"impulsar", fr:"impulser / stimuler", exEs:"El gobierno quiere impulsar la economía.", exFr:"Le gouvernement veut stimuler l'économie.", cat:"verbos", tags:["verbe"] },
  { id:"b2_040", es:"matizar", fr:"nuancer", exEs:"Habría que matizar esa afirmación.", exFr:"Il faudrait nuancer cette affirmation.", cat:"verbos", tags:["verbe"] },
  { id:"b2_041", es:"plantear", fr:"poser (question) / soulever", exEs:"Planteo una pregunta fundamental.", exFr:"Je pose une question fondamentale.", cat:"verbos", tags:["verbe"] },
  { id:"b2_042", es:"prescindir", fr:"se passer de", exEs:"No puedo prescindir de mi teléfono.", exFr:"Je ne peux pas me passer de mon téléphone.", cat:"verbos", tags:["verbe"] },
  { id:"b2_043", es:"prevenir", fr:"prévenir", exEs:"Más vale prevenir que curar.", exFr:"Mieux vaut prévenir que guérir.", cat:"verbos", tags:["verbe"] },
  { id:"b2_044", es:"promover", fr:"promouvoir", exEs:"La ONG promueve la igualdad de género.", exFr:"L'ONG promeut l'égalité des sexes.", cat:"verbos", tags:["verbe"] },
  { id:"b2_045", es:"desempeñar", fr:"exercer / jouer (un rôle)", exEs:"Desempeña un papel clave en la empresa.", exFr:"Il/Elle joue un rôle clé dans l'entreprise.", cat:"verbos", tags:["verbe"] },
  { id:"b2_046", es:"abarcar", fr:"englober / couvrir", exEs:"El estudio abarca varios temas.", exFr:"L'étude couvre plusieurs sujets.", cat:"verbos", tags:["verbe"] },
  { id:"b2_047", es:"conllevar", fr:"impliquer / entraîner", exEs:"El puesto conlleva mucha responsabilidad.", exFr:"Le poste implique beaucoup de responsabilités.", cat:"verbos", tags:["verbe"] },

  // --- Mundo profesional ---
  { id:"b2_048", es:"el contrato", fr:"le contrat", exEs:"Firmé un contrato indefinido.", exFr:"J'ai signé un contrat à durée indéterminée.", cat:"profesional", tags:["travail"] },
  { id:"b2_049", es:"el despido", fr:"le licenciement", exEs:"El despido fue completamente inesperado.", exFr:"Le licenciement était complètement inattendu.", cat:"profesional", tags:["travail"] },
  { id:"b2_050", es:"el ascenso", fr:"la promotion", exEs:"Recibió un ascenso después de tres años.", exFr:"Il/Elle a reçu une promotion après trois ans.", cat:"profesional", tags:["travail"] },
  { id:"b2_051", es:"la capacitación", fr:"la formation (pro)", exEs:"La empresa ofrece capacitación continua.", exFr:"L'entreprise offre une formation continue.", cat:"profesional", tags:["travail"] },
  { id:"b2_052", es:"el emprendedor", fr:"l'entrepreneur", exEs:"Es una emprendedora muy exitosa.", exFr:"C'est une entrepreneure très prospère.", cat:"profesional", tags:["travail"] },
  { id:"b2_053", es:"la competencia", fr:"la concurrence / compétence", exEs:"La competencia en el sector es feroz.", exFr:"La concurrence dans le secteur est féroce.", cat:"profesional", tags:["travail","économie"] },
  { id:"b2_054", es:"la estrategia", fr:"la stratégie", exEs:"Necesitamos cambiar de estrategia.", exFr:"Nous devons changer de stratégie.", cat:"profesional", tags:["travail"] },
  { id:"b2_055", es:"gestionar", fr:"gérer", exEs:"Gestiona un equipo de veinte personas.", exFr:"Il/Elle gère une équipe de vingt personnes.", cat:"profesional", tags:["travail","verbe"] },
  { id:"b2_056", es:"negociar", fr:"négocier", exEs:"Hay que negociar las condiciones.", exFr:"Il faut négocier les conditions.", cat:"profesional", tags:["travail","verbe"] },

  // --- Abstractos B2 ---
  { id:"b2_057", es:"el ámbito", fr:"le domaine", exEs:"En el ámbito profesional, todo va bien.", exFr:"Dans le domaine professionnel, tout va bien.", cat:"abstractos", tags:["abstrait"] },
  { id:"b2_058", es:"el enfoque", fr:"l'approche / le point de vue", exEs:"Necesitamos un nuevo enfoque.", exFr:"Nous avons besoin d'une nouvelle approche.", cat:"abstractos", tags:["abstrait"] },
  { id:"b2_059", es:"la trascendencia", fr:"l'importance / la portée", exEs:"Es un evento de gran trascendencia.", exFr:"C'est un événement d'une grande portée.", cat:"abstractos", tags:["abstrait"] },
  { id:"b2_060", es:"la vigencia", fr:"la validité / vigueur", exEs:"La ley sigue en vigencia.", exFr:"La loi est toujours en vigueur.", cat:"abstractos", tags:["abstrait"] },
  { id:"b2_061", es:"el reto", fr:"le défi", exEs:"El cambio climático es un gran reto.", exFr:"Le changement climatique est un grand défi.", cat:"abstractos", tags:["abstrait"] },
  { id:"b2_062", es:"el compromiso", fr:"l'engagement / le compromis", exEs:"Tenemos un compromiso con la calidad.", exFr:"Nous avons un engagement envers la qualité.", cat:"abstractos", tags:["abstrait"] },
  { id:"b2_063", es:"el planteamiento", fr:"l'approche / la façon de poser", exEs:"Tu planteamiento es interesante.", exFr:"Ton approche est intéressante.", cat:"abstractos", tags:["abstrait"] },
  { id:"b2_064", es:"la coyuntura", fr:"la conjoncture", exEs:"La coyuntura económica es complicada.", exFr:"La conjoncture économique est compliquée.", cat:"abstractos", tags:["abstrait"] },
  { id:"b2_065", es:"el matiz", fr:"la nuance", exEs:"Hay un matiz importante en esa frase.", exFr:"Il y a une nuance importante dans cette phrase.", cat:"abstractos", tags:["abstrait"] },
];

// ============================================================
//  Catégories par niveau (pour l'affichage)
// ============================================================
const CATEGORIES = {
  A1: {
    saludos: "Salutations",
    familia: "Famille",
    comida: "Nourriture & Boissons",
    casa: "Maison",
    cuerpo: "Corps",
    colores: "Couleurs",
    verbos: "Verbes de base",
    adjetivos: "Adjectifs",
    tiempo: "Temps",
    lugares: "Lieux",
    esenciales: "Mots essentiels",
    ropa: "Vêtements",
    preguntas: "Questions"
  },
  A2: {
    viajes: "Voyages",
    compras: "Achats",
    salud: "Santé",
    trabajo: "Travail",
    ciudad: "Ville",
    transporte: "Transport",
    clima: "Météo",
    ocio: "Loisirs & Sports",
    verbos: "Verbes",
    adjetivos: "Adjectifs"
  },
  B1: {
    sentimientos: "Sentiments",
    medios: "Médias",
    medio_ambiente: "Environnement",
    educacion: "Éducation",
    relaciones: "Relations",
    expresiones: "Expressions & Connecteurs",
    verbos: "Verbes",
    abstractos: "Concepts abstraits"
  },
  B2: {
    politica: "Politique & Société",
    economia: "Économie",
    modismos: "Expressions idiomatiques",
    conectores: "Connecteurs avancés",
    verbos: "Verbes avancés",
    profesional: "Monde professionnel",
    abstractos: "Concepts abstraits"
  }
};

// Exporte toutes les données
const VOCAB = { A1, A2, B1, B2 };

export { VOCAB, CATEGORIES };
