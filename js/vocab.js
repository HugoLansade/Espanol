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

  // --- Animales ---
  { id:"a1_132", es:"el perro", fr:"le chien", exEs:"Mi perro se llama Rex.", exFr:"Mon chien s'appelle Rex.", cat:"animales", tags:["animal"] },
  { id:"a1_133", es:"el gato", fr:"le chat", exEs:"El gato duerme en el sofá.", exFr:"Le chat dort sur le canapé.", cat:"animales", tags:["animal"] },
  { id:"a1_134", es:"el pájaro", fr:"l'oiseau", exEs:"Los pájaros cantan por la mañana.", exFr:"Les oiseaux chantent le matin.", cat:"animales", tags:["animal"] },
  { id:"a1_135", es:"el pez", fr:"le poisson (vivant)", exEs:"Hay muchos peces en el río.", exFr:"Il y a beaucoup de poissons dans la rivière.", cat:"animales", tags:["animal"] },
  { id:"a1_136", es:"el caballo", fr:"le cheval", exEs:"Me gusta montar a caballo.", exFr:"J'aime monter à cheval.", cat:"animales", tags:["animal"] },
  { id:"a1_137", es:"la vaca", fr:"la vache", exEs:"Las vacas están en el campo.", exFr:"Les vaches sont dans le champ.", cat:"animales", tags:["animal"] },
  { id:"a1_138", es:"el ratón", fr:"la souris", exEs:"El gato persigue al ratón.", exFr:"Le chat poursuit la souris.", cat:"animales", tags:["animal"] },
  { id:"a1_139", es:"el conejo", fr:"le lapin", exEs:"Los niños tienen un conejo blanco.", exFr:"Les enfants ont un lapin blanc.", cat:"animales", tags:["animal"] },
  { id:"a1_140", es:"la mariposa", fr:"le papillon", exEs:"La mariposa vuela por el jardín.", exFr:"Le papillon vole dans le jardin.", cat:"animales", tags:["animal"] },
  { id:"a1_141", es:"el león", fr:"le lion", exEs:"El león es el rey de la selva.", exFr:"Le lion est le roi de la jungle.", cat:"animales", tags:["animal"] },
  { id:"a1_142", es:"el mono", fr:"le singe", exEs:"Los monos viven en los árboles.", exFr:"Les singes vivent dans les arbres.", cat:"animales", tags:["animal"] },
  { id:"a1_143", es:"la tortuga", fr:"la tortue", exEs:"La tortuga camina muy despacio.", exFr:"La tortue marche très lentement.", cat:"animales", tags:["animal"] },

  // --- Números ---
  { id:"a1_144", es:"uno", fr:"un (1)", exEs:"Solo quiero uno.", exFr:"Je n'en veux qu'un.", cat:"numeros", tags:["nombre"] },
  { id:"a1_145", es:"dos", fr:"deux (2)", exEs:"Tengo dos hermanos.", exFr:"J'ai deux frères.", cat:"numeros", tags:["nombre"] },
  { id:"a1_146", es:"tres", fr:"trois (3)", exEs:"Son las tres de la tarde.", exFr:"Il est trois heures de l'après-midi.", cat:"numeros", tags:["nombre"] },
  { id:"a1_147", es:"cuatro", fr:"quatre (4)", exEs:"Hay cuatro estaciones.", exFr:"Il y a quatre saisons.", cat:"numeros", tags:["nombre"] },
  { id:"a1_148", es:"cinco", fr:"cinq (5)", exEs:"Tengo cinco dedos en cada mano.", exFr:"J'ai cinq doigts à chaque main.", cat:"numeros", tags:["nombre"] },
  { id:"a1_149", es:"seis", fr:"six (6)", exEs:"Trabajo seis horas al día.", exFr:"Je travaille six heures par jour.", cat:"numeros", tags:["nombre"] },
  { id:"a1_150", es:"siete", fr:"sept (7)", exEs:"La semana tiene siete días.", exFr:"La semaine a sept jours.", cat:"numeros", tags:["nombre"] },
  { id:"a1_151", es:"ocho", fr:"huit (8)", exEs:"Me levanto a las ocho.", exFr:"Je me lève à huit heures.", cat:"numeros", tags:["nombre"] },
  { id:"a1_152", es:"nueve", fr:"neuf (9)", exEs:"Faltan nueve días para Navidad.", exFr:"Il reste neuf jours avant Noël.", cat:"numeros", tags:["nombre"] },
  { id:"a1_153", es:"diez", fr:"dix (10)", exEs:"Cuenta hasta diez.", exFr:"Compte jusqu'à dix.", cat:"numeros", tags:["nombre"] },
  { id:"a1_154", es:"veinte", fr:"vingt (20)", exEs:"Tengo veinte años.", exFr:"J'ai vingt ans.", cat:"numeros", tags:["nombre"] },
  { id:"a1_155", es:"cien", fr:"cent (100)", exEs:"Cuesta cien euros.", exFr:"Ça coûte cent euros.", cat:"numeros", tags:["nombre"] },
  { id:"a1_156", es:"mil", fr:"mille (1000)", exEs:"Viven a mil kilómetros de aquí.", exFr:"Ils vivent à mille kilomètres d'ici.", cat:"numeros", tags:["nombre"] },
  { id:"a1_157", es:"primero", fr:"premier", exEs:"Es la primera vez que vengo.", exFr:"C'est la première fois que je viens.", cat:"numeros", tags:["nombre","adjectif"] },
  { id:"a1_158", es:"último", fr:"dernier", exEs:"Es el último día de vacaciones.", exFr:"C'est le dernier jour de vacances.", cat:"numeros", tags:["nombre","adjectif"] },

  // --- Más comida ---
  { id:"a1_159", es:"la ensalada", fr:"la salade", exEs:"Quiero una ensalada mixta.", exFr:"Je veux une salade composée.", cat:"comida", tags:["nourriture"] },
  { id:"a1_160", es:"la sopa", fr:"la soupe", exEs:"La sopa está muy caliente.", exFr:"La soupe est très chaude.", cat:"comida", tags:["nourriture"] },
  { id:"a1_161", es:"el postre", fr:"le dessert", exEs:"¿Quieres un postre?", exFr:"Tu veux un dessert ?", cat:"comida", tags:["nourriture"] },
  { id:"a1_162", es:"el azúcar", fr:"le sucre", exEs:"¿Cuánto azúcar quieres?", exFr:"Combien de sucre tu veux ?", cat:"comida", tags:["nourriture"] },
  { id:"a1_163", es:"la sal", fr:"le sel", exEs:"Pásame la sal, por favor.", exFr:"Passe-moi le sel, s'il te plaît.", cat:"comida", tags:["nourriture"] },
  { id:"a1_164", es:"la patata", fr:"la pomme de terre", exEs:"Las patatas fritas son mi comida favorita.", exFr:"Les frites sont mon plat préféré.", cat:"comida", tags:["nourriture"] },
  { id:"a1_165", es:"el tomate", fr:"la tomate", exEs:"Necesito tomates para la ensalada.", exFr:"J'ai besoin de tomates pour la salade.", cat:"comida", tags:["nourriture"] },
  { id:"a1_166", es:"la manzana", fr:"la pomme", exEs:"Una manzana al día es muy sano.", exFr:"Une pomme par jour c'est très sain.", cat:"comida", tags:["nourriture"] },
  { id:"a1_167", es:"el plátano", fr:"la banane", exEs:"Me como un plátano después del deporte.", exFr:"Je mange une banane après le sport.", cat:"comida", tags:["nourriture"] },
  { id:"a1_168", es:"el helado", fr:"la glace (crème glacée)", exEs:"En verano como mucho helado.", exFr:"En été je mange beaucoup de glace.", cat:"comida", tags:["nourriture"] },
  { id:"a1_169", es:"la mantequilla", fr:"le beurre", exEs:"Pon mantequilla en el pan.", exFr:"Mets du beurre sur le pain.", cat:"comida", tags:["nourriture"] },
  { id:"a1_170", es:"el aceite", fr:"l'huile", exEs:"El aceite de oliva es muy bueno.", exFr:"L'huile d'olive est très bonne.", cat:"comida", tags:["nourriture"] },

  // --- Más casa ---
  { id:"a1_171", es:"el jardín", fr:"le jardin", exEs:"Tenemos un jardín pequeño.", exFr:"Nous avons un petit jardin.", cat:"casa", tags:["logement"] },
  { id:"a1_172", es:"el salón", fr:"le salon", exEs:"Vemos la televisión en el salón.", exFr:"Nous regardons la télé dans le salon.", cat:"casa", tags:["logement"] },
  { id:"a1_173", es:"la escalera", fr:"l'escalier", exEs:"Sube por la escalera.", exFr:"Monte par l'escalier.", cat:"casa", tags:["logement"] },
  { id:"a1_174", es:"el piso", fr:"l'appartement / l'étage", exEs:"Vivo en un piso en el centro.", exFr:"J'habite dans un appartement dans le centre.", cat:"casa", tags:["logement"] },
  { id:"a1_175", es:"el espejo", fr:"le miroir", exEs:"Se mira en el espejo.", exFr:"Il/Elle se regarde dans le miroir.", cat:"casa", tags:["meuble"] },
  { id:"a1_176", es:"la lámpara", fr:"la lampe", exEs:"Enciende la lámpara, está oscuro.", exFr:"Allume la lampe, il fait sombre.", cat:"casa", tags:["meuble"] },
  { id:"a1_177", es:"el sofá", fr:"le canapé", exEs:"Me siento en el sofá a leer.", exFr:"Je m'assois sur le canapé pour lire.", cat:"casa", tags:["meuble"] },
  { id:"a1_178", es:"la nevera", fr:"le réfrigérateur", exEs:"Pon la leche en la nevera.", exFr:"Mets le lait dans le réfrigérateur.", cat:"casa", tags:["meuble"] },

  // --- Más verbos ---
  { id:"a1_179", es:"abrir", fr:"ouvrir", exEs:"Abre el libro por la página diez.", exFr:"Ouvre le livre à la page dix.", cat:"verbos", tags:["verbe"] },
  { id:"a1_180", es:"cerrar", fr:"fermer", exEs:"Cierra los ojos.", exFr:"Ferme les yeux.", cat:"verbos", tags:["verbe"] },
  { id:"a1_181", es:"dar", fr:"donner", exEs:"Te doy un regalo.", exFr:"Je te donne un cadeau.", cat:"verbos", tags:["verbe"] },
  { id:"a1_182", es:"decir", fr:"dire", exEs:"¿Qué quieres decir?", exFr:"Qu'est-ce que tu veux dire ?", cat:"verbos", tags:["verbe"] },
  { id:"a1_183", es:"poner", fr:"mettre / poser", exEs:"Pon el libro en la mesa.", exFr:"Pose le livre sur la table.", cat:"verbos", tags:["verbe"] },
  { id:"a1_184", es:"llamar", fr:"appeler", exEs:"Te llamo esta noche.", exFr:"Je t'appelle ce soir.", cat:"verbos", tags:["verbe"] },
  { id:"a1_185", es:"mirar", fr:"regarder", exEs:"Mira ese pájaro.", exFr:"Regarde cet oiseau.", cat:"verbos", tags:["verbe"] },
  { id:"a1_186", es:"escuchar", fr:"écouter", exEs:"Escucha esta canción.", exFr:"Écoute cette chanson.", cat:"verbos", tags:["verbe"] },
  { id:"a1_187", es:"tocar", fr:"toucher / jouer (instrument)", exEs:"No toques eso.", exFr:"Ne touche pas ça.", cat:"verbos", tags:["verbe"] },
  { id:"a1_188", es:"cantar", fr:"chanter", exEs:"Le gusta cantar en la ducha.", exFr:"Il aime chanter sous la douche.", cat:"verbos", tags:["verbe"] },
  { id:"a1_189", es:"subir", fr:"monter", exEs:"Sube al segundo piso.", exFr:"Monte au deuxième étage.", cat:"verbos", tags:["verbe"] },
  { id:"a1_190", es:"bajar", fr:"descendre", exEs:"Baja las escaleras despacio.", exFr:"Descends les escaliers doucement.", cat:"verbos", tags:["verbe"] },
  { id:"a1_191", es:"caminar", fr:"marcher", exEs:"Camino al trabajo cada día.", exFr:"Je marche au travail chaque jour.", cat:"verbos", tags:["verbe"] },
  { id:"a1_192", es:"sentarse", fr:"s'asseoir", exEs:"Siéntate aquí, por favor.", exFr:"Assieds-toi ici, s'il te plaît.", cat:"verbos", tags:["verbe"] },
  { id:"a1_193", es:"lavarse", fr:"se laver", exEs:"Me lavo las manos antes de comer.", exFr:"Je me lave les mains avant de manger.", cat:"verbos", tags:["verbe"] },
  { id:"a1_194", es:"vestirse", fr:"s'habiller", exEs:"Me visto rápido por la mañana.", exFr:"Je m'habille vite le matin.", cat:"verbos", tags:["verbe"] },
  { id:"a1_195", es:"jugar", fr:"jouer", exEs:"Los niños juegan en el parque.", exFr:"Les enfants jouent dans le parc.", cat:"verbos", tags:["verbe"] },
  { id:"a1_196", es:"cortar", fr:"couper", exEs:"Corta el pan, por favor.", exFr:"Coupe le pain, s'il te plaît.", cat:"verbos", tags:["verbe"] },

  // --- Más adjetivos ---
  { id:"a1_197", es:"alto", fr:"grand (taille) / haut", exEs:"Mi hermano es muy alto.", exFr:"Mon frère est très grand.", cat:"adjetivos", tags:["adjectif"] },
  { id:"a1_198", es:"bajo", fr:"petit (taille) / bas", exEs:"La mesa es demasiado baja.", exFr:"La table est trop basse.", cat:"adjetivos", tags:["adjectif"] },
  { id:"a1_199", es:"gordo", fr:"gros", exEs:"El gato está un poco gordo.", exFr:"Le chat est un peu gros.", cat:"adjetivos", tags:["adjectif"] },
  { id:"a1_200", es:"delgado", fr:"mince / maigre", exEs:"Es alto y delgado.", exFr:"Il est grand et mince.", cat:"adjetivos", tags:["adjectif"] },
  { id:"a1_201", es:"largo", fr:"long", exEs:"El viaje es muy largo.", exFr:"Le voyage est très long.", cat:"adjetivos", tags:["adjectif"] },
  { id:"a1_202", es:"corto", fr:"court", exEs:"Lleva el pelo corto.", exFr:"Il/Elle a les cheveux courts.", cat:"adjetivos", tags:["adjectif"] },
  { id:"a1_203", es:"caliente", fr:"chaud", exEs:"La sopa está muy caliente.", exFr:"La soupe est très chaude.", cat:"adjetivos", tags:["adjectif"] },
  { id:"a1_204", es:"frío", fr:"froid", exEs:"El agua está fría.", exFr:"L'eau est froide.", cat:"adjetivos", tags:["adjectif"] },
  { id:"a1_205", es:"fuerte", fr:"fort", exEs:"Es un hombre muy fuerte.", exFr:"C'est un homme très fort.", cat:"adjetivos", tags:["adjectif"] },
  { id:"a1_206", es:"joven", fr:"jeune", exEs:"Es una chica joven.", exFr:"C'est une jeune fille.", cat:"adjetivos", tags:["adjectif"] },
  { id:"a1_207", es:"simpático", fr:"sympathique", exEs:"Tu amigo es muy simpático.", exFr:"Ton ami est très sympathique.", cat:"adjetivos", tags:["adjectif"] },
  { id:"a1_208", es:"inteligente", fr:"intelligent", exEs:"Es una persona muy inteligente.", exFr:"C'est une personne très intelligente.", cat:"adjetivos", tags:["adjectif"] },
  { id:"a1_209", es:"feo", fr:"laid / moche", exEs:"Ese cuadro es bastante feo.", exFr:"Ce tableau est assez moche.", cat:"adjetivos", tags:["adjectif"] },
  { id:"a1_210", es:"limpio", fr:"propre", exEs:"La casa está muy limpia.", exFr:"La maison est très propre.", cat:"adjetivos", tags:["adjectif"] },
  { id:"a1_211", es:"sucio", fr:"sale", exEs:"Tienes las manos sucias.", exFr:"Tu as les mains sales.", cat:"adjetivos", tags:["adjectif"] },
  { id:"a1_212", es:"enfadado", fr:"en colère / fâché", exEs:"Está enfadado conmigo.", exFr:"Il est fâché contre moi.", cat:"adjetivos", tags:["adjectif"] },

  // --- Más ropa ---
  { id:"a1_213", es:"el abrigo", fr:"le manteau", exEs:"Ponte el abrigo, hace mucho frío.", exFr:"Mets ton manteau, il fait très froid.", cat:"ropa", tags:["vêtement"] },
  { id:"a1_214", es:"las botas", fr:"les bottes", exEs:"Necesito botas para la lluvia.", exFr:"J'ai besoin de bottes pour la pluie.", cat:"ropa", tags:["vêtement"] },
  { id:"a1_215", es:"la camiseta", fr:"le t-shirt", exEs:"Lleva una camiseta azul.", exFr:"Il porte un t-shirt bleu.", cat:"ropa", tags:["vêtement"] },
  { id:"a1_216", es:"las gafas", fr:"les lunettes", exEs:"Sin gafas no veo nada.", exFr:"Sans lunettes je ne vois rien.", cat:"ropa", tags:["vêtement"] },
  { id:"a1_217", es:"el bolso", fr:"le sac", exEs:"He dejado el bolso en el coche.", exFr:"J'ai laissé mon sac dans la voiture.", cat:"ropa", tags:["vêtement"] },
  { id:"a1_218", es:"el jersey", fr:"le pull", exEs:"Ponte un jersey de lana.", exFr:"Mets un pull en laine.", cat:"ropa", tags:["vêtement"] },

  // --- Más tiempo ---
  { id:"a1_219", es:"la semana", fr:"la semaine", exEs:"Esta semana estoy muy ocupado.", exFr:"Cette semaine je suis très occupé.", cat:"tiempo", tags:["temps"] },
  { id:"a1_220", es:"el mes", fr:"le mois", exEs:"El mes de agosto es muy caluroso.", exFr:"Le mois d'août est très chaud.", cat:"tiempo", tags:["temps"] },
  { id:"a1_221", es:"el año", fr:"l'année / l'an", exEs:"El año pasado viajé a España.", exFr:"L'année dernière j'ai voyagé en Espagne.", cat:"tiempo", tags:["temps"] },
  { id:"a1_222", es:"la hora", fr:"l'heure", exEs:"¿Qué hora es?", exFr:"Quelle heure est-il ?", cat:"tiempo", tags:["temps"] },
  { id:"a1_223", es:"temprano", fr:"tôt", exEs:"Me levanto temprano.", exFr:"Je me lève tôt.", cat:"tiempo", tags:["temps"] },
  { id:"a1_224", es:"tarde", fr:"tard / l'après-midi", exEs:"Llegas tarde.", exFr:"Tu arrives en retard.", cat:"tiempo", tags:["temps"] },
  { id:"a1_225", es:"pronto", fr:"bientôt", exEs:"Nos vemos pronto.", exFr:"On se voit bientôt.", cat:"tiempo", tags:["temps"] },
  { id:"a1_226", es:"despacio", fr:"lentement / doucement", exEs:"Habla más despacio, por favor.", exFr:"Parle plus lentement, s'il te plaît.", cat:"tiempo", tags:["temps"] },

  // --- Más esenciales ---
  { id:"a1_227", es:"todo", fr:"tout", exEs:"Todo está bien.", exFr:"Tout va bien.", cat:"esenciales", tags:["basique"] },
  { id:"a1_228", es:"nada", fr:"rien", exEs:"No quiero nada.", exFr:"Je ne veux rien.", cat:"esenciales", tags:["basique"] },
  { id:"a1_229", es:"algo", fr:"quelque chose", exEs:"¿Quieres algo de beber?", exFr:"Tu veux quelque chose à boire ?", cat:"esenciales", tags:["basique"] },
  { id:"a1_230", es:"alguien", fr:"quelqu'un", exEs:"Alguien llama a la puerta.", exFr:"Quelqu'un frappe à la porte.", cat:"esenciales", tags:["basique"] },
  { id:"a1_231", es:"nadie", fr:"personne", exEs:"No hay nadie en casa.", exFr:"Il n'y a personne à la maison.", cat:"esenciales", tags:["basique"] },
  { id:"a1_232", es:"otro", fr:"autre", exEs:"Dame otro vaso.", exFr:"Donne-moi un autre verre.", cat:"esenciales", tags:["basique"] },
  { id:"a1_233", es:"mismo", fr:"même", exEs:"Tenemos el mismo coche.", exFr:"Nous avons la même voiture.", cat:"esenciales", tags:["basique"] },
  { id:"a1_234", es:"cada", fr:"chaque", exEs:"Cada día aprendo algo nuevo.", exFr:"Chaque jour j'apprends quelque chose de nouveau.", cat:"esenciales", tags:["basique"] },
  { id:"a1_235", es:"porque", fr:"parce que", exEs:"No voy porque estoy cansado.", exFr:"Je n'y vais pas parce que je suis fatigué.", cat:"esenciales", tags:["basique"] },
  { id:"a1_236", es:"cuando", fr:"quand / lorsque", exEs:"Cuando llueve, me quedo en casa.", exFr:"Quand il pleut, je reste à la maison.", cat:"esenciales", tags:["basique"] },
  { id:"a1_237", es:"donde", fr:"où", exEs:"Ese es el lugar donde nací.", exFr:"C'est l'endroit où je suis né.", cat:"esenciales", tags:["basique"] },
  { id:"a1_238", es:"entre", fr:"entre", exEs:"Está entre la mesa y la silla.", exFr:"C'est entre la table et la chaise.", cat:"esenciales", tags:["basique"] },

  // --- Más lugares ---
  { id:"a1_239", es:"la biblioteca", fr:"la bibliothèque", exEs:"Estudio en la biblioteca.", exFr:"J'étudie à la bibliothèque.", cat:"lugares", tags:["lieu"] },
  { id:"a1_240", es:"el cine", fr:"le cinéma", exEs:"Vamos al cine esta noche.", exFr:"On va au cinéma ce soir.", cat:"lugares", tags:["lieu"] },
  { id:"a1_241", es:"el supermercado", fr:"le supermarché", exEs:"Voy al supermercado a comprar comida.", exFr:"Je vais au supermarché acheter de la nourriture.", cat:"lugares", tags:["lieu"] },
  { id:"a1_242", es:"la piscina", fr:"la piscine", exEs:"Los niños nadan en la piscina.", exFr:"Les enfants nagent dans la piscine.", cat:"lugares", tags:["lieu"] },
  { id:"a1_243", es:"el aeropuerto", fr:"l'aéroport", exEs:"El aeropuerto está a treinta kilómetros.", exFr:"L'aéroport est à trente kilomètres.", cat:"lugares", tags:["lieu"] },
  { id:"a1_244", es:"el mercado", fr:"le marché", exEs:"Compro fruta en el mercado.", exFr:"J'achète des fruits au marché.", cat:"lugares", tags:["lieu"] },
  { id:"a1_245", es:"la iglesia", fr:"l'église", exEs:"La iglesia está en la plaza.", exFr:"L'église est sur la place.", cat:"lugares", tags:["lieu"] },
  { id:"a1_246", es:"el río", fr:"la rivière", exEs:"Hay un río cerca de mi pueblo.", exFr:"Il y a une rivière près de mon village.", cat:"lugares", tags:["lieu"] },
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

  // --- Tecnología ---
  { id:"a2_091", es:"el teléfono", fr:"le téléphone", exEs:"He olvidado el teléfono en casa.", exFr:"J'ai oublié le téléphone à la maison.", cat:"tecnologia", tags:["technologie"] },
  { id:"a2_092", es:"el móvil", fr:"le portable", exEs:"Mi móvil no tiene batería.", exFr:"Mon portable n'a plus de batterie.", cat:"tecnologia", tags:["technologie"] },
  { id:"a2_093", es:"internet", fr:"internet", exEs:"No tengo conexión a internet.", exFr:"Je n'ai pas de connexion internet.", cat:"tecnologia", tags:["technologie"] },
  { id:"a2_094", es:"la contraseña", fr:"le mot de passe", exEs:"No recuerdo mi contraseña.", exFr:"Je ne me souviens pas de mon mot de passe.", cat:"tecnologia", tags:["technologie"] },
  { id:"a2_095", es:"la aplicación", fr:"l'application", exEs:"Descarga esta aplicación en el móvil.", exFr:"Télécharge cette application sur le portable.", cat:"tecnologia", tags:["technologie"] },
  { id:"a2_096", es:"el mensaje", fr:"le message", exEs:"Te he enviado un mensaje.", exFr:"Je t'ai envoyé un message.", cat:"tecnologia", tags:["technologie"] },
  { id:"a2_097", es:"la foto", fr:"la photo", exEs:"Voy a hacer una foto.", exFr:"Je vais prendre une photo.", cat:"tecnologia", tags:["technologie"] },
  { id:"a2_098", es:"buscar", fr:"chercher", exEs:"Busca la dirección en internet.", exFr:"Cherche l'adresse sur internet.", cat:"tecnologia", tags:["technologie","verbe"] },

  // --- Más viajes ---
  { id:"a2_099", es:"la habitación", fr:"la chambre (hôtel)", exEs:"He reservado una habitación doble.", exFr:"J'ai réservé une chambre double.", cat:"viajes", tags:["voyage"] },
  { id:"a2_100", es:"el equipaje", fr:"les bagages", exEs:"¿Dónde puedo dejar el equipaje?", exFr:"Où puis-je laisser mes bagages ?", cat:"viajes", tags:["voyage"] },
  { id:"a2_101", es:"el vuelo", fr:"le vol", exEs:"El vuelo tiene dos horas de retraso.", exFr:"Le vol a deux heures de retard.", cat:"viajes", tags:["voyage"] },
  { id:"a2_102", es:"la guía", fr:"le guide", exEs:"Compramos una guía turística.", exFr:"Nous avons acheté un guide touristique.", cat:"viajes", tags:["voyage"] },
  { id:"a2_103", es:"el recuerdo", fr:"le souvenir (objet)", exEs:"Compré un recuerdo para mi madre.", exFr:"J'ai acheté un souvenir pour ma mère.", cat:"viajes", tags:["voyage"] },
  { id:"a2_104", es:"la frontera", fr:"la frontière", exEs:"Cruzamos la frontera en coche.", exFr:"Nous avons traversé la frontière en voiture.", cat:"viajes", tags:["voyage"] },

  // --- Más salud ---
  { id:"a2_105", es:"la cita", fr:"le rendez-vous", exEs:"Tengo una cita con el dentista.", exFr:"J'ai un rendez-vous chez le dentiste.", cat:"salud", tags:["santé"] },
  { id:"a2_106", es:"el resfriado", fr:"le rhume", exEs:"Tengo un resfriado terrible.", exFr:"J'ai un rhume terrible.", cat:"salud", tags:["santé"] },
  { id:"a2_107", es:"la tos", fr:"la toux", exEs:"La tos no me deja dormir.", exFr:"La toux m'empêche de dormir.", cat:"salud", tags:["santé"] },
  { id:"a2_108", es:"mareado", fr:"avoir le vertige / nauséeux", exEs:"Estoy un poco mareado.", exFr:"J'ai un peu le vertige.", cat:"salud", tags:["santé","adjectif"] },
  { id:"a2_109", es:"la herida", fr:"la blessure", exEs:"La herida no es grave.", exFr:"La blessure n'est pas grave.", cat:"salud", tags:["santé"] },
  { id:"a2_110", es:"curar", fr:"guérir / soigner", exEs:"El médico puede curar esa enfermedad.", exFr:"Le médecin peut guérir cette maladie.", cat:"salud", tags:["santé","verbe"] },
  { id:"a2_111", es:"la alergia", fr:"l'allergie", exEs:"Tengo alergia al polen.", exFr:"Je suis allergique au pollen.", cat:"salud", tags:["santé"] },

  // --- Más trabajo ---
  { id:"a2_112", es:"el horario", fr:"l'emploi du temps / l'horaire", exEs:"Mi horario de trabajo es de 9 a 5.", exFr:"Mon horaire de travail est de 9h à 17h.", cat:"trabajo", tags:["travail"] },
  { id:"a2_113", es:"el compañero", fr:"le collègue / camarade", exEs:"Mi compañero de trabajo es muy amable.", exFr:"Mon collègue de travail est très aimable.", cat:"trabajo", tags:["travail"] },
  { id:"a2_114", es:"la experiencia", fr:"l'expérience", exEs:"No tengo experiencia en este campo.", exFr:"Je n'ai pas d'expérience dans ce domaine.", cat:"trabajo", tags:["travail"] },
  { id:"a2_115", es:"el cliente", fr:"le client", exEs:"El cliente siempre tiene razón.", exFr:"Le client a toujours raison.", cat:"trabajo", tags:["travail"] },
  { id:"a2_116", es:"la factura", fr:"la facture", exEs:"¿Me puede dar la factura?", exFr:"Pouvez-vous me donner la facture ?", cat:"trabajo", tags:["travail"] },
  { id:"a2_117", es:"ganar", fr:"gagner", exEs:"Gana un buen sueldo.", exFr:"Il gagne un bon salaire.", cat:"trabajo", tags:["travail","verbe"] },

  // --- Emociones básicas ---
  { id:"a2_118", es:"contento", fr:"content / satisfait", exEs:"Estoy muy contento con los resultados.", exFr:"Je suis très content des résultats.", cat:"emociones", tags:["émotion","adjectif"] },
  { id:"a2_119", es:"triste", fr:"triste", exEs:"Está triste porque se va su amigo.", exFr:"Il/Elle est triste parce que son ami s'en va.", cat:"emociones", tags:["émotion","adjectif"] },
  { id:"a2_120", es:"nervioso", fr:"nerveux", exEs:"Estoy nervioso antes del examen.", exFr:"Je suis nerveux avant l'examen.", cat:"emociones", tags:["émotion","adjectif"] },
  { id:"a2_121", es:"aburrido", fr:"ennuyé / ennuyeux", exEs:"La película fue muy aburrida.", exFr:"Le film était très ennuyeux.", cat:"emociones", tags:["émotion","adjectif"] },
  { id:"a2_122", es:"asustado", fr:"effrayé", exEs:"El niño está asustado por la tormenta.", exFr:"L'enfant est effrayé par l'orage.", cat:"emociones", tags:["émotion","adjectif"] },
  { id:"a2_123", es:"emocionado", fr:"ému / enthousiaste", exEs:"Estoy emocionado por el viaje.", exFr:"Je suis enthousiaste pour le voyage.", cat:"emociones", tags:["émotion","adjectif"] },
  { id:"a2_124", es:"preocupado", fr:"inquiet", exEs:"Estoy preocupado por mi examen.", exFr:"Je suis inquiet pour mon examen.", cat:"emociones", tags:["émotion","adjectif"] },

  // --- Más ciudad ---
  { id:"a2_125", es:"el puente", fr:"le pont", exEs:"El puente cruza el río.", exFr:"Le pont traverse la rivière.", cat:"ciudad", tags:["ville"] },
  { id:"a2_126", es:"la acera", fr:"le trottoir", exEs:"Camina por la acera.", exFr:"Marche sur le trottoir.", cat:"ciudad", tags:["ville"] },
  { id:"a2_127", es:"el ayuntamiento", fr:"la mairie", exEs:"El ayuntamiento está en la plaza.", exFr:"La mairie est sur la place.", cat:"ciudad", tags:["ville","lieu"] },
  { id:"a2_128", es:"la fuente", fr:"la fontaine", exEs:"Los niños juegan cerca de la fuente.", exFr:"Les enfants jouent près de la fontaine.", cat:"ciudad", tags:["ville"] },
  { id:"a2_129", es:"el aparcamiento", fr:"le parking", exEs:"No encuentro aparcamiento.", exFr:"Je ne trouve pas de parking.", cat:"ciudad", tags:["ville"] },
  { id:"a2_130", es:"el centro", fr:"le centre-ville", exEs:"Vamos al centro a dar un paseo.", exFr:"On va en centre-ville se promener.", cat:"ciudad", tags:["ville"] },

  // --- Más verbos A2 ---
  { id:"a2_131", es:"cambiar", fr:"changer", exEs:"Quiero cambiar de trabajo.", exFr:"Je veux changer de travail.", cat:"verbos", tags:["verbe"] },
  { id:"a2_132", es:"decidir", fr:"décider", exEs:"No puedo decidir qué comer.", exFr:"Je ne peux pas décider quoi manger.", cat:"verbos", tags:["verbe"] },
  { id:"a2_133", es:"recibir", fr:"recevoir", exEs:"He recibido tu mensaje.", exFr:"J'ai reçu ton message.", cat:"verbos", tags:["verbe"] },
  { id:"a2_134", es:"enviar", fr:"envoyer", exEs:"Voy a enviar el paquete mañana.", exFr:"Je vais envoyer le colis demain.", cat:"verbos", tags:["verbe"] },
  { id:"a2_135", es:"empezar", fr:"commencer", exEs:"La clase empieza a las nueve.", exFr:"Le cours commence à neuf heures.", cat:"verbos", tags:["verbe"] },
  { id:"a2_136", es:"terminar", fr:"finir / terminer", exEs:"¿A qué hora terminas de trabajar?", exFr:"À quelle heure finis-tu de travailler ?", cat:"verbos", tags:["verbe"] },
  { id:"a2_137", es:"pasar", fr:"passer / se passer", exEs:"¿Qué pasa?", exFr:"Qu'est-ce qui se passe ?", cat:"verbos", tags:["verbe"] },
  { id:"a2_138", es:"quedar", fr:"rester / se retrouver", exEs:"¿Quedamos a las ocho?", exFr:"On se retrouve à huit heures ?", cat:"verbos", tags:["verbe"] },
  { id:"a2_139", es:"seguir", fr:"suivre / continuer", exEs:"Sigue recto y gira a la izquierda.", exFr:"Continue tout droit et tourne à gauche.", cat:"verbos", tags:["verbe"] },
  { id:"a2_140", es:"parecer", fr:"sembler / paraître", exEs:"Parece que va a llover.", exFr:"Il semble qu'il va pleuvoir.", cat:"verbos", tags:["verbe"] },
  { id:"a2_141", es:"apagar", fr:"éteindre", exEs:"Apaga la luz antes de salir.", exFr:"Éteins la lumière avant de sortir.", cat:"verbos", tags:["verbe"] },
  { id:"a2_142", es:"encender", fr:"allumer", exEs:"Enciende la televisión.", exFr:"Allume la télévision.", cat:"verbos", tags:["verbe"] },
  { id:"a2_143", es:"preguntar", fr:"demander (question)", exEs:"Quiero preguntar algo.", exFr:"Je veux demander quelque chose.", cat:"verbos", tags:["verbe"] },
  { id:"a2_144", es:"responder", fr:"répondre", exEs:"No ha respondido a mi correo.", exFr:"Il n'a pas répondu à mon e-mail.", cat:"verbos", tags:["verbe"] },
  { id:"a2_145", es:"gustar", fr:"plaire / aimer", exEs:"Me gusta mucho la música latina.", exFr:"J'aime beaucoup la musique latine.", cat:"verbos", tags:["verbe"] },
  { id:"a2_146", es:"preferir", fr:"préférer", exEs:"Prefiero el café al té.", exFr:"Je préfère le café au thé.", cat:"verbos", tags:["verbe"] },
  { id:"a2_147", es:"intentar", fr:"essayer", exEs:"Voy a intentar otra vez.", exFr:"Je vais essayer encore une fois.", cat:"verbos", tags:["verbe"] },
  { id:"a2_148", es:"funcionar", fr:"fonctionner / marcher", exEs:"El ascensor no funciona.", exFr:"L'ascenseur ne marche pas.", cat:"verbos", tags:["verbe"] },

  // --- Más ocio ---
  { id:"a2_149", es:"el deporte", fr:"le sport", exEs:"Practico deporte tres veces por semana.", exFr:"Je fais du sport trois fois par semaine.", cat:"ocio", tags:["sport"] },
  { id:"a2_150", es:"el partido", fr:"le match", exEs:"¿Viste el partido de ayer?", exFr:"Tu as vu le match d'hier ?", cat:"ocio", tags:["sport"] },
  { id:"a2_151", es:"ganar", fr:"gagner (match)", exEs:"Mi equipo ganó el partido.", exFr:"Mon équipe a gagné le match.", cat:"ocio", tags:["sport","verbe"] },
  { id:"a2_152", es:"el paseo", fr:"la promenade", exEs:"Damos un paseo por el parque.", exFr:"On fait une promenade dans le parc.", cat:"ocio", tags:["loisir"] },
  { id:"a2_153", es:"descansar", fr:"se reposer", exEs:"Los domingos descanso en casa.", exFr:"Le dimanche je me repose à la maison.", cat:"ocio", tags:["loisir","verbe"] },
  { id:"a2_154", es:"el concierto", fr:"le concert", exEs:"Fuimos a un concierto increíble.", exFr:"On est allés à un concert incroyable.", cat:"ocio", tags:["loisir"] },

  // --- Más adjetivos A2 ---
  { id:"a2_155", es:"seguro", fr:"sûr / en sécurité", exEs:"¿Estás seguro de eso?", exFr:"Tu es sûr de ça ?", cat:"adjetivos", tags:["adjectif"] },
  { id:"a2_156", es:"peligroso", fr:"dangereux", exEs:"Conducir rápido es peligroso.", exFr:"Conduire vite est dangereux.", cat:"adjetivos", tags:["adjectif"] },
  { id:"a2_157", es:"divertido", fr:"amusant / drôle", exEs:"La fiesta fue muy divertida.", exFr:"La fête était très amusante.", cat:"adjetivos", tags:["adjectif"] },
  { id:"a2_158", es:"interesante", fr:"intéressant", exEs:"El libro es muy interesante.", exFr:"Le livre est très intéressant.", cat:"adjetivos", tags:["adjectif"] },
  { id:"a2_159", es:"diferente", fr:"différent", exEs:"Cada país es diferente.", exFr:"Chaque pays est différent.", cat:"adjetivos", tags:["adjectif"] },
  { id:"a2_160", es:"igual", fr:"pareil / égal", exEs:"Somos iguales ante la ley.", exFr:"Nous sommes égaux devant la loi.", cat:"adjetivos", tags:["adjectif"] },
  { id:"a2_161", es:"extranjero", fr:"étranger", exEs:"Hay muchos turistas extranjeros.", exFr:"Il y a beaucoup de touristes étrangers.", cat:"adjetivos", tags:["adjectif"] },
  { id:"a2_162", es:"agradable", fr:"agréable", exEs:"Es un lugar muy agradable.", exFr:"C'est un endroit très agréable.", cat:"adjetivos", tags:["adjectif"] },
  { id:"a2_163", es:"horrible", fr:"horrible", exEs:"El tráfico es horrible.", exFr:"Le trafic est horrible.", cat:"adjetivos", tags:["adjectif"] },
  { id:"a2_164", es:"perfecto", fr:"parfait", exEs:"El tiempo es perfecto para la playa.", exFr:"Le temps est parfait pour la plage.", cat:"adjetivos", tags:["adjectif"] },
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

  // --- Más sentimientos ---
  { id:"b1_071", es:"la envidia", fr:"l'envie / la jalousie", exEs:"La envidia es un sentimiento destructivo.", exFr:"L'envie est un sentiment destructeur.", cat:"sentimientos", tags:["émotion"] },
  { id:"b1_072", es:"la culpa", fr:"la culpabilité / la faute", exEs:"Siente culpa por lo que dijo.", exFr:"Il/Elle se sent coupable de ce qu'il/elle a dit.", cat:"sentimientos", tags:["émotion"] },
  { id:"b1_073", es:"la nostalgia", fr:"la nostalgie", exEs:"Siente nostalgia de su país.", exFr:"Il/Elle a la nostalgie de son pays.", cat:"sentimientos", tags:["émotion"] },
  { id:"b1_074", es:"la ternura", fr:"la tendresse", exEs:"Mira al bebé con ternura.", exFr:"Il/Elle regarde le bébé avec tendresse.", cat:"sentimientos", tags:["émotion"] },
  { id:"b1_075", es:"emocionarse", fr:"s'émouvoir", exEs:"Se emocionó al ver a su familia.", exFr:"Il s'est ému en voyant sa famille.", cat:"sentimientos", tags:["émotion","verbe"] },
  { id:"b1_076", es:"arrepentirse", fr:"regretter / se repentir", exEs:"Se arrepiente de no haber estudiado.", exFr:"Il regrette de ne pas avoir étudié.", cat:"sentimientos", tags:["émotion","verbe"] },
  { id:"b1_077", es:"odiar", fr:"détester / haïr", exEs:"Odio levantarme temprano.", exFr:"Je déteste me lever tôt.", cat:"sentimientos", tags:["émotion","verbe"] },
  { id:"b1_078", es:"extrañar", fr:"manquer (ressentir l'absence)", exEs:"Extraño mucho a mis amigos.", exFr:"Mes amis me manquent beaucoup.", cat:"sentimientos", tags:["émotion","verbe"] },

  // --- Más medios ---
  { id:"b1_079", es:"el documental", fr:"le documentaire", exEs:"Vi un documental sobre la selva.", exFr:"J'ai vu un documentaire sur la jungle.", cat:"medios", tags:["média"] },
  { id:"b1_080", es:"la serie", fr:"la série", exEs:"Estoy viendo una serie muy buena.", exFr:"Je regarde une très bonne série.", cat:"medios", tags:["média"] },
  { id:"b1_081", es:"el podcast", fr:"le podcast", exEs:"Escucho podcasts en español.", exFr:"J'écoute des podcasts en espagnol.", cat:"medios", tags:["média"] },
  { id:"b1_082", es:"la entrevista", fr:"l'interview / l'entretien", exEs:"Lei una entrevista con el director.", exFr:"J'ai lu une interview avec le réalisateur.", cat:"medios", tags:["média"] },
  { id:"b1_083", es:"informar", fr:"informer", exEs:"Los medios informan sobre la crisis.", exFr:"Les médias informent sur la crise.", cat:"medios", tags:["média","verbe"] },
  { id:"b1_084", es:"la censura", fr:"la censure", exEs:"La censura limita la libertad de expresión.", exFr:"La censure limite la liberté d'expression.", cat:"medios", tags:["média"] },

  // --- Más medio ambiente ---
  { id:"b1_085", es:"el planeta", fr:"la planète", exEs:"Debemos cuidar nuestro planeta.", exFr:"Nous devons prendre soin de notre planète.", cat:"medio_ambiente", tags:["environnement"] },
  { id:"b1_086", es:"la energía", fr:"l'énergie", exEs:"La energía solar es el futuro.", exFr:"L'énergie solaire est l'avenir.", cat:"medio_ambiente", tags:["environnement"] },
  { id:"b1_087", es:"los residuos", fr:"les déchets", exEs:"Hay que reducir los residuos plásticos.", exFr:"Il faut réduire les déchets plastiques.", cat:"medio_ambiente", tags:["environnement"] },
  { id:"b1_088", es:"la sequía", fr:"la sécheresse", exEs:"La sequía afecta a los cultivos.", exFr:"La sécheresse affecte les cultures.", cat:"medio_ambiente", tags:["environnement"] },
  { id:"b1_089", es:"la inundación", fr:"l'inondation", exEs:"Las inundaciones causaron muchos daños.", exFr:"Les inondations ont causé beaucoup de dégâts.", cat:"medio_ambiente", tags:["environnement"] },
  { id:"b1_090", es:"sostenible", fr:"durable / soutenable", exEs:"Necesitamos un desarrollo sostenible.", exFr:"Nous avons besoin d'un développement durable.", cat:"medio_ambiente", tags:["environnement","adjectif"] },
  { id:"b1_091", es:"la especie", fr:"l'espèce", exEs:"Muchas especies están en peligro.", exFr:"Beaucoup d'espèces sont en danger.", cat:"medio_ambiente", tags:["environnement"] },

  // --- Más educación ---
  { id:"b1_092", es:"la beca", fr:"la bourse (études)", exEs:"Recibió una beca para estudiar en el extranjero.", exFr:"Il/Elle a reçu une bourse pour étudier à l'étranger.", cat:"educacion", tags:["éducation"] },
  { id:"b1_093", es:"el título", fr:"le diplôme", exEs:"Tiene un título en ingeniería.", exFr:"Il a un diplôme en ingénierie.", cat:"educacion", tags:["éducation"] },
  { id:"b1_094", es:"el conocimiento", fr:"la connaissance / le savoir", exEs:"El conocimiento es poder.", exFr:"Le savoir c'est le pouvoir.", cat:"educacion", tags:["éducation"] },
  { id:"b1_095", es:"enseñar", fr:"enseigner", exEs:"Le gusta enseñar a los niños.", exFr:"Il/Elle aime enseigner aux enfants.", cat:"educacion", tags:["éducation","verbe"] },
  { id:"b1_096", es:"el alumno", fr:"l'élève", exEs:"Los alumnos preparan el examen.", exFr:"Les élèves préparent l'examen.", cat:"educacion", tags:["éducation"] },
  { id:"b1_097", es:"la formación", fr:"la formation", exEs:"La formación continua es esencial.", exFr:"La formation continue est essentielle.", cat:"educacion", tags:["éducation"] },

  // --- Más relaciones ---
  { id:"b1_098", es:"el divorcio", fr:"le divorce", exEs:"El divorcio fue amistoso.", exFr:"Le divorce s'est fait à l'amiable.", cat:"relaciones", tags:["relation"] },
  { id:"b1_099", es:"la infancia", fr:"l'enfance", exEs:"Tuve una infancia feliz.", exFr:"J'ai eu une enfance heureuse.", cat:"relaciones", tags:["relation"] },
  { id:"b1_100", es:"enamorarse", fr:"tomber amoureux", exEs:"Se enamoró de ella en la universidad.", exFr:"Il est tombé amoureux d'elle à l'université.", cat:"relaciones", tags:["relation","verbe"] },
  { id:"b1_101", es:"separarse", fr:"se séparer", exEs:"Decidieron separarse después de diez años.", exFr:"Ils ont décidé de se séparer après dix ans.", cat:"relaciones", tags:["relation","verbe"] },
  { id:"b1_102", es:"el compromiso", fr:"l'engagement / les fiançailles", exEs:"El compromiso es la base de toda relación.", exFr:"L'engagement est la base de toute relation.", cat:"relaciones", tags:["relation"] },
  { id:"b1_103", es:"convivir", fr:"vivre ensemble / cohabiter", exEs:"Conviven desde hace tres años.", exFr:"Ils vivent ensemble depuis trois ans.", cat:"relaciones", tags:["relation","verbe"] },

  // --- Más expresiones ---
  { id:"b1_104", es:"según", fr:"selon", exEs:"Según el periódico, mañana lloverá.", exFr:"Selon le journal, demain il pleuvra.", cat:"expresiones", tags:["connecteur"] },
  { id:"b1_105", es:"mientras", fr:"pendant que / tandis que", exEs:"Mientras yo cocino, tú pones la mesa.", exFr:"Pendant que je cuisine, toi tu mets la table.", cat:"expresiones", tags:["connecteur"] },
  { id:"b1_106", es:"aunque", fr:"bien que / même si", exEs:"Aunque llueva, iré a correr.", exFr:"Même s'il pleut, j'irai courir.", cat:"expresiones", tags:["connecteur"] },
  { id:"b1_107", es:"por eso", fr:"c'est pourquoi / pour ça", exEs:"Estaba enfermo, por eso no vino.", exFr:"Il était malade, c'est pourquoi il n'est pas venu.", cat:"expresiones", tags:["connecteur"] },
  { id:"b1_108", es:"es decir", fr:"c'est-à-dire", exEs:"Llega el viernes, es decir, pasado mañana.", exFr:"Il arrive vendredi, c'est-à-dire après-demain.", cat:"expresiones", tags:["connecteur"] },
  { id:"b1_109", es:"en primer lugar", fr:"en premier lieu", exEs:"En primer lugar, debemos analizar el problema.", exFr:"En premier lieu, nous devons analyser le problème.", cat:"expresiones", tags:["connecteur"] },
  { id:"b1_110", es:"por otra parte", fr:"d'autre part", exEs:"Por otra parte, el proyecto tiene ventajas.", exFr:"D'autre part, le projet a des avantages.", cat:"expresiones", tags:["connecteur"] },

  // --- Más verbos B1 ---
  { id:"b1_111", es:"compartir", fr:"partager", exEs:"Compartimos el apartamento entre tres.", exFr:"Nous partageons l'appartement à trois.", cat:"verbos", tags:["verbe"] },
  { id:"b1_112", es:"influir", fr:"influencer", exEs:"La publicidad influye en nuestras decisiones.", exFr:"La publicité influence nos décisions.", cat:"verbos", tags:["verbe"] },
  { id:"b1_113", es:"depender", fr:"dépendre", exEs:"Todo depende del presupuesto.", exFr:"Tout dépend du budget.", cat:"verbos", tags:["verbe"] },
  { id:"b1_114", es:"aceptar", fr:"accepter", exEs:"Acepto tu invitación con mucho gusto.", exFr:"J'accepte ton invitation avec plaisir.", cat:"verbos", tags:["verbe"] },
  { id:"b1_115", es:"rechazar", fr:"refuser / rejeter", exEs:"Rechazó la oferta de trabajo.", exFr:"Il/Elle a refusé l'offre d'emploi.", cat:"verbos", tags:["verbe"] },
  { id:"b1_116", es:"opinar", fr:"donner son avis", exEs:"¿Qué opinas sobre este tema?", exFr:"Quel est ton avis sur ce sujet ?", cat:"verbos", tags:["verbe"] },
  { id:"b1_117", es:"demostrar", fr:"démontrer / prouver", exEs:"Hay que demostrar que funciona.", exFr:"Il faut prouver que ça fonctionne.", cat:"verbos", tags:["verbe"] },
  { id:"b1_118", es:"reducir", fr:"réduire", exEs:"Debemos reducir el consumo de plástico.", exFr:"Nous devons réduire la consommation de plastique.", cat:"verbos", tags:["verbe"] },
  { id:"b1_119", es:"aumentar", fr:"augmenter", exEs:"Los precios aumentan cada año.", exFr:"Les prix augmentent chaque année.", cat:"verbos", tags:["verbe"] },
  { id:"b1_120", es:"evitar", fr:"éviter", exEs:"Intento evitar el estrés.", exFr:"J'essaie d'éviter le stress.", cat:"verbos", tags:["verbe"] },
  { id:"b1_121", es:"permitir", fr:"permettre", exEs:"No me permiten entrar.", exFr:"Ils ne me permettent pas d'entrer.", cat:"verbos", tags:["verbe"] },
  { id:"b1_122", es:"obligar", fr:"obliger", exEs:"No me puedes obligar a ir.", exFr:"Tu ne peux pas m'obliger à y aller.", cat:"verbos", tags:["verbe"] },
  { id:"b1_123", es:"cumplir", fr:"accomplir / respecter", exEs:"Hay que cumplir las reglas.", exFr:"Il faut respecter les règles.", cat:"verbos", tags:["verbe"] },
  { id:"b1_124", es:"merecer", fr:"mériter", exEs:"Te mereces unas vacaciones.", exFr:"Tu mérites des vacances.", cat:"verbos", tags:["verbe"] },
  { id:"b1_125", es:"aprovechar", fr:"profiter de", exEs:"Aprovecha el buen tiempo para salir.", exFr:"Profite du beau temps pour sortir.", cat:"verbos", tags:["verbe"] },

  // --- Más abstractos ---
  { id:"b1_126", es:"la igualdad", fr:"l'égalité", exEs:"Luchamos por la igualdad de derechos.", exFr:"Nous luttons pour l'égalité des droits.", cat:"abstractos", tags:["abstrait"] },
  { id:"b1_127", es:"la libertad", fr:"la liberté", exEs:"La libertad de expresión es un derecho.", exFr:"La liberté d'expression est un droit.", cat:"abstractos", tags:["abstrait"] },
  { id:"b1_128", es:"la justicia", fr:"la justice", exEs:"La justicia debe ser igual para todos.", exFr:"La justice doit être égale pour tous.", cat:"abstractos", tags:["abstrait"] },
  { id:"b1_129", es:"el desarrollo", fr:"le développement", exEs:"El desarrollo económico es importante.", exFr:"Le développement économique est important.", cat:"abstractos", tags:["abstrait"] },
  { id:"b1_130", es:"la solución", fr:"la solution", exEs:"Hay que encontrar una solución.", exFr:"Il faut trouver une solution.", cat:"abstractos", tags:["abstrait"] },
  { id:"b1_131", es:"el problema", fr:"le problème", exEs:"El problema principal es la falta de tiempo.", exFr:"Le problème principal est le manque de temps.", cat:"abstractos", tags:["abstrait"] },
  { id:"b1_132", es:"la causa", fr:"la cause", exEs:"Desconocemos la causa del accidente.", exFr:"Nous ignorons la cause de l'accident.", cat:"abstractos", tags:["abstrait"] },
  { id:"b1_133", es:"la consecuencia", fr:"la conséquence", exEs:"Hay que asumir las consecuencias.", exFr:"Il faut assumer les conséquences.", cat:"abstractos", tags:["abstrait"] },
  { id:"b1_134", es:"la opinión", fr:"l'opinion / l'avis", exEs:"En mi opinión, es una buena idea.", exFr:"À mon avis, c'est une bonne idée.", cat:"abstractos", tags:["abstrait"] },
  { id:"b1_135", es:"el objetivo", fr:"l'objectif", exEs:"Mi objetivo es hablar español con fluidez.", exFr:"Mon objectif est de parler espagnol couramment.", cat:"abstractos", tags:["abstrait"] },
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

  // --- Ciencia y tecnología ---
  { id:"b2_066", es:"el descubrimiento", fr:"la découverte", exEs:"Fue un descubrimiento revolucionario.", exFr:"Ce fut une découverte révolutionnaire.", cat:"ciencia", tags:["science"] },
  { id:"b2_067", es:"el experimento", fr:"l'expérience (scientifique)", exEs:"El experimento confirmó la hipótesis.", exFr:"L'expérience a confirmé l'hypothèse.", cat:"ciencia", tags:["science"] },
  { id:"b2_068", es:"la hipótesis", fr:"l'hypothèse", exEs:"Debemos verificar la hipótesis.", exFr:"Nous devons vérifier l'hypothèse.", cat:"ciencia", tags:["science"] },
  { id:"b2_069", es:"el dato", fr:"la donnée", exEs:"Los datos confirman la tendencia.", exFr:"Les données confirment la tendance.", cat:"ciencia", tags:["science"] },
  { id:"b2_070", es:"el avance", fr:"l'avancée / le progrès", exEs:"Los avances en medicina son impresionantes.", exFr:"Les avancées en médecine sont impressionnantes.", cat:"ciencia", tags:["science"] },
  { id:"b2_071", es:"la inteligencia artificial", fr:"l'intelligence artificielle", exEs:"La inteligencia artificial cambiará muchos empleos.", exFr:"L'intelligence artificielle changera beaucoup d'emplois.", cat:"ciencia", tags:["science","technologie"] },
  { id:"b2_072", es:"investigar", fr:"enquêter / faire de la recherche", exEs:"Investigaron las causas del accidente.", exFr:"Ils ont enquêté sur les causes de l'accident.", cat:"ciencia", tags:["science","verbe"] },
  { id:"b2_073", es:"el algoritmo", fr:"l'algorithme", exEs:"El algoritmo detecta patrones de comportamiento.", exFr:"L'algorithme détecte des schémas de comportement.", cat:"ciencia", tags:["science","technologie"] },
  { id:"b2_074", es:"la innovación", fr:"l'innovation", exEs:"La innovación es clave para el progreso.", exFr:"L'innovation est la clé du progrès.", cat:"ciencia", tags:["science"] },

  // --- Más política ---
  { id:"b2_075", es:"el partido", fr:"le parti (politique)", exEs:"El partido ganó las elecciones.", exFr:"Le parti a remporté les élections.", cat:"politica", tags:["politique"] },
  { id:"b2_076", es:"la corrupción", fr:"la corruption", exEs:"La corrupción es un problema grave.", exFr:"La corruption est un problème grave.", cat:"politica", tags:["politique"] },
  { id:"b2_077", es:"la manifestación", fr:"la manifestation", exEs:"Hubo una manifestación contra la reforma.", exFr:"Il y a eu une manifestation contre la réforme.", cat:"politica", tags:["politique"] },
  { id:"b2_078", es:"el debate", fr:"le débat", exEs:"El debate fue muy polémico.", exFr:"Le débat a été très polémique.", cat:"politica", tags:["politique"] },
  { id:"b2_079", es:"la reforma", fr:"la réforme", exEs:"Proponen una reforma del sistema educativo.", exFr:"Ils proposent une réforme du système éducatif.", cat:"politica", tags:["politique"] },
  { id:"b2_080", es:"la libertad de prensa", fr:"la liberté de la presse", exEs:"La libertad de prensa es fundamental.", exFr:"La liberté de la presse est fondamentale.", cat:"politica", tags:["politique"] },
  { id:"b2_081", es:"votar", fr:"voter", exEs:"Es importante votar en las elecciones.", exFr:"C'est important de voter aux élections.", cat:"politica", tags:["politique","verbe"] },
  { id:"b2_082", es:"gobernar", fr:"gouverner", exEs:"Gobernar un país es una gran responsabilidad.", exFr:"Gouverner un pays est une grande responsabilité.", cat:"politica", tags:["politique","verbe"] },

  // --- Más economía ---
  { id:"b2_083", es:"la inflación", fr:"l'inflation", exEs:"La inflación ha subido mucho este año.", exFr:"L'inflation a beaucoup augmenté cette année.", cat:"economia", tags:["économie"] },
  { id:"b2_084", es:"la competitividad", fr:"la compétitivité", exEs:"La competitividad del sector ha mejorado.", exFr:"La compétitivité du secteur s'est améliorée.", cat:"economia", tags:["économie"] },
  { id:"b2_085", es:"el consumidor", fr:"le consommateur", exEs:"Los consumidores exigen más calidad.", exFr:"Les consommateurs exigent plus de qualité.", cat:"economia", tags:["économie"] },
  { id:"b2_086", es:"el PIB", fr:"le PIB", exEs:"El PIB creció un 2% este trimestre.", exFr:"Le PIB a augmenté de 2% ce trimestre.", cat:"economia", tags:["économie"] },
  { id:"b2_087", es:"la recesión", fr:"la récession", exEs:"El país entró en recesión.", exFr:"Le pays est entré en récession.", cat:"economia", tags:["économie"] },
  { id:"b2_088", es:"la subvención", fr:"la subvention", exEs:"Recibió una subvención del gobierno.", exFr:"Il a reçu une subvention du gouvernement.", cat:"economia", tags:["économie"] },
  { id:"b2_089", es:"cotizar", fr:"coter / cotiser", exEs:"La empresa cotiza en bolsa.", exFr:"L'entreprise est cotée en bourse.", cat:"economia", tags:["économie","verbe"] },

  // --- Más expresiones idiomáticas ---
  { id:"b2_090", es:"tirar la toalla", fr:"jeter l'éponge", exEs:"No tires la toalla, sigue intentándolo.", exFr:"Ne jette pas l'éponge, continue d'essayer.", cat:"modismos", tags:["expression"] },
  { id:"b2_091", es:"tener madera de", fr:"avoir l'étoffe de", exEs:"Tiene madera de líder.", exFr:"Il a l'étoffe d'un leader.", cat:"modismos", tags:["expression"] },
  { id:"b2_092", es:"estar en las nubes", fr:"être dans les nuages / rêvasser", exEs:"Siempre estás en las nubes.", exFr:"Tu es toujours dans les nuages.", cat:"modismos", tags:["expression"] },
  { id:"b2_093", es:"no dar abasto", fr:"ne pas arriver à suivre", exEs:"Con tanto trabajo no doy abasto.", exFr:"Avec autant de travail je n'arrive pas à suivre.", cat:"modismos", tags:["expression"] },
  { id:"b2_094", es:"costar un ojo de la cara", fr:"coûter les yeux de la tête", exEs:"Ese coche cuesta un ojo de la cara.", exFr:"Cette voiture coûte les yeux de la tête.", cat:"modismos", tags:["expression"] },
  { id:"b2_095", es:"llover sobre mojado", fr:"c'est le comble / en rajouter", exEs:"Perdió el trabajo y luego el coche: llovía sobre mojado.", exFr:"Il a perdu son travail puis sa voiture : c'était le comble.", cat:"modismos", tags:["expression"] },
  { id:"b2_096", es:"ser pan comido", fr:"être du gâteau / très facile", exEs:"Este examen es pan comido.", exFr:"Cet examen est du gâteau.", cat:"modismos", tags:["expression"] },
  { id:"b2_097", es:"dar la lata", fr:"casser les pieds / embêter", exEs:"Deja de dar la lata.", exFr:"Arrête de casser les pieds.", cat:"modismos", tags:["expression"] },
  { id:"b2_098", es:"quedarse en blanco", fr:"avoir un blanc / un trou de mémoire", exEs:"Me quedé en blanco durante el examen.", exFr:"J'ai eu un trou de mémoire pendant l'examen.", cat:"modismos", tags:["expression"] },
  { id:"b2_099", es:"matar dos pájaros de un tiro", fr:"faire d'une pierre deux coups", exEs:"Con este plan matamos dos pájaros de un tiro.", exFr:"Avec ce plan on fait d'une pierre deux coups.", cat:"modismos", tags:["expression"] },

  // --- Más conectores ---
  { id:"b2_100", es:"en lugar de", fr:"au lieu de / à la place de", exEs:"En lugar de quejarte, actúa.", exFr:"Au lieu de te plaindre, agis.", cat:"conectores", tags:["connecteur"] },
  { id:"b2_101", es:"con respecto a", fr:"en ce qui concerne / par rapport à", exEs:"Con respecto a tu propuesta, estoy de acuerdo.", exFr:"En ce qui concerne ta proposition, je suis d'accord.", cat:"conectores", tags:["connecteur"] },
  { id:"b2_102", es:"dicho de otro modo", fr:"autrement dit", exEs:"Dicho de otro modo, no hay solución.", exFr:"Autrement dit, il n'y a pas de solution.", cat:"conectores", tags:["connecteur"] },
  { id:"b2_103", es:"a raíz de", fr:"à la suite de / en raison de", exEs:"A raíz de la pandemia, todo cambió.", exFr:"À la suite de la pandémie, tout a changé.", cat:"conectores", tags:["connecteur"] },
  { id:"b2_104", es:"de cara a", fr:"en vue de", exEs:"De cara al futuro, debemos planificar.", exFr:"En vue de l'avenir, nous devons planifier.", cat:"conectores", tags:["connecteur"] },
  { id:"b2_105", es:"pese a", fr:"en dépit de / malgré", exEs:"Pese a las dificultades, lo consiguieron.", exFr:"En dépit des difficultés, ils y sont parvenus.", cat:"conectores", tags:["connecteur"] },
  { id:"b2_106", es:"en la medida en que", fr:"dans la mesure où", exEs:"Te ayudaré en la medida en que pueda.", exFr:"Je t'aiderai dans la mesure où je pourrai.", cat:"conectores", tags:["connecteur"] },

  // --- Más verbos B2 ---
  { id:"b2_107", es:"asumir", fr:"assumer", exEs:"Hay que asumir las consecuencias.", exFr:"Il faut assumer les conséquences.", cat:"verbos", tags:["verbe"] },
  { id:"b2_108", es:"carecer", fr:"manquer de", exEs:"El informe carece de datos fiables.", exFr:"Le rapport manque de données fiables.", cat:"verbos", tags:["verbe"] },
  { id:"b2_109", es:"emprender", fr:"entreprendre", exEs:"Decidió emprender un negocio propio.", exFr:"Il a décidé d'entreprendre sa propre affaire.", cat:"verbos", tags:["verbe"] },
  { id:"b2_110", es:"generar", fr:"générer", exEs:"La empresa genera muchos empleos.", exFr:"L'entreprise génère beaucoup d'emplois.", cat:"verbos", tags:["verbe"] },
  { id:"b2_111", es:"garantizar", fr:"garantir", exEs:"No puedo garantizar el resultado.", exFr:"Je ne peux pas garantir le résultat.", cat:"verbos", tags:["verbe"] },
  { id:"b2_112", es:"implementar", fr:"mettre en œuvre / implémenter", exEs:"Vamos a implementar un nuevo sistema.", exFr:"Nous allons mettre en œuvre un nouveau système.", cat:"verbos", tags:["verbe"] },
  { id:"b2_113", es:"vincular", fr:"lier / rattacher", exEs:"Los expertos vinculan el problema al cambio climático.", exFr:"Les experts lient le problème au changement climatique.", cat:"verbos", tags:["verbe"] },
  { id:"b2_114", es:"subestimar", fr:"sous-estimer", exEs:"No debes subestimar al adversario.", exFr:"Tu ne dois pas sous-estimer l'adversaire.", cat:"verbos", tags:["verbe"] },
  { id:"b2_115", es:"aportar", fr:"apporter / contribuer", exEs:"Cada uno aporta su experiencia.", exFr:"Chacun apporte son expérience.", cat:"verbos", tags:["verbe"] },
  { id:"b2_116", es:"alertar", fr:"alerter", exEs:"Los científicos alertan sobre el calentamiento global.", exFr:"Les scientifiques alertent sur le réchauffement climatique.", cat:"verbos", tags:["verbe"] },
  { id:"b2_117", es:"trasladar", fr:"transférer / déplacer", exEs:"Trasladaron la empresa a otra ciudad.", exFr:"Ils ont transféré l'entreprise dans une autre ville.", cat:"verbos", tags:["verbe"] },

  // --- Más profesional ---
  { id:"b2_118", es:"la jornada", fr:"la journée de travail", exEs:"Tengo jornada completa.", exFr:"J'ai une journée de travail complète.", cat:"profesional", tags:["travail"] },
  { id:"b2_119", es:"el convenio", fr:"la convention / l'accord", exEs:"Firmaron un convenio colectivo.", exFr:"Ils ont signé une convention collective.", cat:"profesional", tags:["travail"] },
  { id:"b2_120", es:"el sindicato", fr:"le syndicat", exEs:"El sindicato convocó una huelga.", exFr:"Le syndicat a appelé à la grève.", cat:"profesional", tags:["travail"] },
  { id:"b2_121", es:"la huelga", fr:"la grève", exEs:"Los trabajadores están en huelga.", exFr:"Les travailleurs sont en grève.", cat:"profesional", tags:["travail"] },
  { id:"b2_122", es:"el rendimiento", fr:"le rendement / la performance", exEs:"Su rendimiento ha mejorado mucho.", exFr:"Sa performance s'est beaucoup améliorée.", cat:"profesional", tags:["travail"] },
  { id:"b2_123", es:"la sede", fr:"le siège (d'entreprise)", exEs:"La sede central está en Madrid.", exFr:"Le siège social est à Madrid.", cat:"profesional", tags:["travail"] },
  { id:"b2_124", es:"la plantilla", fr:"l'effectif / le personnel", exEs:"La plantilla de la empresa se ha reducido.", exFr:"L'effectif de l'entreprise a été réduit.", cat:"profesional", tags:["travail"] },
  { id:"b2_125", es:"liderar", fr:"diriger / mener", exEs:"Lidera un equipo de investigación.", exFr:"Il/Elle dirige une équipe de recherche.", cat:"profesional", tags:["travail","verbe"] },

  // --- Más abstractos B2 ---
  { id:"b2_126", es:"la índole", fr:"la nature (type)", exEs:"Es un problema de índole económica.", exFr:"C'est un problème de nature économique.", cat:"abstractos", tags:["abstrait"] },
  { id:"b2_127", es:"la idiosincrasia", fr:"l'idiosyncrasie / la particularité", exEs:"Cada pueblo tiene su propia idiosincrasia.", exFr:"Chaque peuple a sa propre particularité.", cat:"abstractos", tags:["abstrait"] },
  { id:"b2_128", es:"el paradigma", fr:"le paradigme", exEs:"Estamos ante un cambio de paradigma.", exFr:"Nous sommes face à un changement de paradigme.", cat:"abstractos", tags:["abstrait"] },
  { id:"b2_129", es:"la tendencia", fr:"la tendance", exEs:"La tendencia es al alza.", exFr:"La tendance est à la hausse.", cat:"abstractos", tags:["abstrait"] },
  { id:"b2_130", es:"la perspectiva", fr:"la perspective", exEs:"Debemos analizar desde otra perspectiva.", exFr:"Nous devons analyser depuis une autre perspective.", cat:"abstractos", tags:["abstrait"] },
  { id:"b2_131", es:"el criterio", fr:"le critère", exEs:"¿Cuáles son los criterios de selección?", exFr:"Quels sont les critères de sélection ?", cat:"abstractos", tags:["abstrait"] },
  { id:"b2_132", es:"la incertidumbre", fr:"l'incertitude", exEs:"La incertidumbre económica preocupa.", exFr:"L'incertitude économique inquiète.", cat:"abstractos", tags:["abstrait"] },
  { id:"b2_133", es:"la paradoja", fr:"le paradoxe", exEs:"Es la paradoja de nuestro tiempo.", exFr:"C'est le paradoxe de notre époque.", cat:"abstractos", tags:["abstrait"] },
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
    animales: "Animaux",
    numeros: "Nombres",
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
    tecnologia: "Technologie",
    emociones: "Émotions",
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
    ciencia: "Science & Technologie",
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
