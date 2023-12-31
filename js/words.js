'use strict';
const WORDS = [
  {
    id: 1,
    day: 1,
    english: 'able',
    spanish: 'capaz',
    example: 'She is able to walk for hours.',
  },
  {
    id: 2,
    day: 2,
    english: 'absolutely',
    spanish: 'absolutamente',
    example: 'It is absolutely necessary to eat healthy food.',
  },
  {
    id: 3,
    day: 3,
    english: 'act',
    spanish: 'actuar',
    example: 'I should act as you advise.',
  },
  {
    id: 4,
    day: 4,
    english: 'actually',
    spanish: 'en realidad',
    example: "I'm not sure if this actually happened.",
  },
  {
    id: 5,
    day: 5,
    english: 'afraid',
    spanish: 'temerozo/temeroza',
    example: "She's afraid of spiders.",
  },
  {
    id: 6,
    day: 6,
    english: 'again',
    spanish: 'otra vez',
    example: 'You should try it again.',
  },
  {
    id: 7,
    day: 7,
    english: 'ago',
    spanish: 'hace',
    example: 'I went to New York a month ago.',
  },
  {
    id: 8,
    day: 8,
    english: 'agree',
    spanish: 'estar de acuerdo',
    example: "The workers agree with the company's new policy.",
  },
  {
    id: 9,
    day: 9,
    english: 'ahead',
    spanish: 'adelante',
    example: 'Go ahead and take a seat.',
  },
  {
    id: 10,
    day: 10,
    english: 'air',
    spanish: 'aire',
    example: 'I like fresh air.',
  },
  {
    id: 11,
    day: 11,
    english: 'alive',
    spanish: 'vivo/viva',
    example: "I'm glad to be alive.",
  },
  {
    id: 12,
    day: 12,
    english: 'allow',
    spanish: 'permitir',
    example: "They don't allow pets.",
  },
  {
    id: 13,
    day: 13,
    english: 'almost',
    spanish: 'casi',
    example: 'It is almost dark.',
  },
  { id: 14, day: null, english: 'alone', spanish: 'solo/sola', example: '' },
  { id: 15, day: null, english: 'already', spanish: 'ya', example: '' },
  { id: 16, day: null, english: 'alright', spanish: 'bien', example: '' },
  { id: 17, day: null, english: 'also', spanish: 'además', example: '' },
  { id: 18, day: null, english: 'always', spanish: 'siempre', example: '' },
  { id: 19, day: null, english: 'amaze', spanish: 'asombrar', example: '' },
  { id: 20, day: null, english: 'animal', spanish: 'animal', example: '' },
  {
    id: 21,
    day: 1,
    english: 'answer',
    spanish: 'respuesta',
    example: "The student doesn't know the answer.",
  },
  {
    id: 22,
    day: 2,
    english: 'answer',
    spanish: 'responder/contestar (verb)',
    example: 'Can you answer the phone?',
  },
  {
    id: 23,
    day: 3,
    english: 'anymore',
    spanish: 'nunca más',
    example: "I didn't see him anymore.",
  },
  {
    id: 24,
    day: 4,
    english: 'anyway',
    spanish: 'de todos modos',
    example: "I'll go anyway.",
  },
  {
    id: 25,
    day: null,
    english: 'apartment',
    spanish: 'departamento',
    example: '',
  },
  {
    id: 26,
    day: null,
    english: 'apologize',
    spanish: 'pedir disculpas',
    example: '',
  },
  {
    id: 27,
    day: null,
    english: 'appreciate',
    spanish: 'apreciar',
    example: '',
  },
  { id: 28, day: null, english: 'arm', spanish: 'brazo', example: '' },
  { id: 29, day: null, english: 'art', spanish: 'arte', example: '' },
  {
    id: 30,
    day: null,
    english: 'ask',
    spanish: 'preguntar/pedir',
    example: '',
  },
  { id: 31, day: null, english: 'attention', spanish: 'atención', example: '' },
  { id: 32, day: null, english: 'away', spanish: 'lejos', example: '' },
  {
    id: 33,
    day: null,
    english: 'awesome',
    spanish: 'asombroso/asombrosa',
    example: '',
  },
  { id: 34, day: null, english: 'baby', spanish: 'bebé', example: '' },
  { id: 35, day: null, english: 'back', spanish: 'atrás', example: '' },
  {
    id: 36,
    day: null,
    english: 'back',
    spanish: 'espalda (noun)',
    example: '',
  },
  { id: 37, day: null, english: 'bad', spanish: 'malo/mala', example: '' },
  {
    id: 38,
    day: null,
    english: 'bag',
    spanish: 'bolsa/mochila/bolso',
    example: '',
  },
  { id: 39, day: null, english: 'ball', spanish: 'pelota', example: '' },
  { id: 40, day: null, english: 'band', spanish: 'banda', example: '' },
  {
    id: 41,
    day: 1,
    english: 'bar',
    spanish: 'bar',
    example: 'The bar was really crowded.',
  },
  {
    id: 42,
    day: 2,
    english: 'bathroom',
    spanish: 'baño',
    example: 'The house has three bathrooms.',
  },
  {
    id: 43,
    day: 3,
    english: 'be',
    spanish: 'ser/estar',
    example: "Let's be friends.",
  },
  {
    id: 44,
    day: 4,
    english: 'bear',
    spanish: 'soportar',
    example: "I can't bear this heat.",
  },
  { id: 45, day: null, english: 'beat', spanish: 'golpear', example: '' },
  {
    id: 46,
    day: null,
    english: 'beautiful',
    spanish: 'bello/bella/hermoso/hermosa',
    example: '',
  },
  { id: 47, day: null, english: 'become', spanish: 'convertirse', example: '' },
  { id: 48, day: null, english: 'bed', spanish: 'cama', example: '' },
  { id: 49, day: null, english: 'beer', spanish: 'cerveza', example: '' },
  { id: 50, day: null, english: 'begin', spanish: 'comenzar', example: '' },
  { id: 51, day: null, english: 'believe', spanish: 'creer', example: '' },
  { id: 52, day: null, english: 'bet', spanish: 'apostar', example: '' },
  { id: 53, day: null, english: 'big', spanish: 'gran/grande', example: '' },
  {
    id: 54,
    day: null,
    english: 'birthday',
    spanish: 'cumpleaños',
    example: '',
  },
  { id: 55, day: null, english: 'bite', spanish: 'morder', example: '' },
  { id: 56, day: null, english: 'black', spanish: 'negro/negra', example: '' },
  { id: 57, day: null, english: 'blood', spanish: 'sangre', example: '' },
  { id: 58, day: null, english: 'blow', spanish: 'soplar', example: '' },
  { id: 59, day: null, english: 'blue', spanish: 'azul', example: '' },
  { id: 60, day: null, english: 'boat', spanish: 'bote', example: '' },
  {
    id: 61,
    day: 1,
    english: 'body',
    spanish: 'cuerpo',
    example: 'How can we make our body healthy?',
  },
  {
    id: 62,
    day: 2,
    english: 'book',
    spanish: 'libro',
    example: 'The library has a huge amount of books.',
  },
  {
    id: 63,
    day: 3,
    english: 'boss',
    spanish: 'jefe/jefa',
    example: 'My boss is very kind.',
  },
  {
    id: 64,
    day: 4,
    english: 'box',
    spanish: 'caja',
    example: 'The toys are in the box.',
  },
  { id: 65, day: null, english: 'boy', spanish: 'niño', example: '' },
  { id: 66, day: null, english: 'boyfriend', spanish: 'novio', example: '' },
  { id: 67, day: null, english: 'brain', spanish: 'cerebro', example: '' },
  { id: 68, day: null, english: 'break', spanish: 'romper', example: '' },
  { id: 69, day: null, english: 'bring', spanish: 'traer', example: '' },
  { id: 70, day: null, english: 'brother', spanish: 'hermano', example: '' },
  { id: 71, day: null, english: 'buddy', spanish: 'amigo', example: '' },
  { id: 72, day: null, english: 'build', spanish: 'construir', example: '' },
  { id: 73, day: null, english: 'bunch', spanish: 'grupo', example: '' },
  { id: 74, day: null, english: 'burn', spanish: 'arder', example: '' },
  { id: 75, day: null, english: 'bus', spanish: 'autobús', example: '' },
  { id: 76, day: null, english: 'business', spanish: 'negocio', example: '' },
  {
    id: 77,
    day: null,
    english: 'busy',
    spanish: 'ocupado/ocupada',
    example: '',
  },
  { id: 78, day: null, english: 'buy', spanish: 'comprar', example: '' },
  { id: 79, day: null, english: 'cake', spanish: 'pastel/torta', example: '' },
  { id: 80, day: null, english: 'call', spanish: 'llamar (verb)', example: '' },
  {
    id: 81,
    day: 1,
    english: 'call',
    spanish: 'llamada',
    example: 'I took an urgent call.',
  },
  {
    id: 82,
    day: 2,
    english: 'can',
    spanish: 'poder',
    example: 'They can play the guitar.',
  },
  {
    id: 83,
    day: 3,
    english: 'candy',
    spanish: 'caramelo',
    example: 'Strawberry candies are my favorite.',
  },
  {
    id: 84,
    day: 4,
    english: 'captain',
    spanish: 'capitán/capitana',
    example: "The ship's captain looked worried.",
  },
  {
    id: 85,
    day: null,
    english: 'car',
    spanish: 'coche/carro/auto',
    example: '',
  },
  { id: 86, day: null, english: 'card', spanish: 'tarjeta', example: '' },
  { id: 87, day: null, english: 'care', spanish: 'importar', example: '' },
  { id: 88, day: null, english: 'case', spanish: 'caso', example: '' },
  { id: 89, day: null, english: 'cat', spanish: 'gato', example: '' },
  {
    id: 90,
    day: null,
    english: 'catch',
    spanish: 'alcanzar algo o a alguien',
    example: '',
  },
  { id: 91, day: null, english: 'chair', spanish: 'silla', example: '' },
  { id: 92, day: null, english: 'chance', spanish: 'oportunidad', example: '' },
  { id: 93, day: null, english: 'change', spanish: 'cambiar', example: '' },
  { id: 94, day: null, english: 'check', spanish: 'revisar', example: '' },
  { id: 95, day: null, english: 'chicken', spanish: 'pollo', example: '' },
  { id: 96, day: null, english: 'child', spanish: 'niño/niña', example: '' },
  { id: 97, day: null, english: 'choice', spanish: 'elección', example: '' },
  { id: 98, day: null, english: 'choose', spanish: 'elegir', example: '' },
  { id: 99, day: null, english: 'city', spanish: 'ciudad', example: '' },
  { id: 100, day: null, english: 'class', spanish: 'clase', example: '' },
  {
    id: 101,
    day: 1,
    english: 'clean',
    spanish: 'limpiar',
    example: 'We must clean the house every day.',
  },
  {
    id: 102,
    day: 2,
    english: 'clear',
    spanish: 'claro/clara',
    example: 'The instructions are clear.',
  },
  {
    id: 103,
    day: 3,
    english: 'close',
    spanish: 'cerca/cercano/cercana',
    example: 'The store is close.',
  },
  {
    id: 104,
    day: 4,
    english: 'close',
    spanish: 'cerrar',
    example: 'May I close the window?',
  },
  { id: 105, day: null, english: 'clothes', spanish: 'ropa', example: '' },
  {
    id: 106,
    day: null,
    english: 'club',
    spanish: 'club/asociación',
    example: '',
  },
  { id: 107, day: null, english: 'coffee', spanish: 'café', example: '' },
  { id: 108, day: null, english: 'cold', spanish: 'frío', example: '' },
  { id: 109, day: null, english: 'college', spanish: 'facultad', example: '' },
  { id: 110, day: null, english: 'come', spanish: 'venir', example: '' },
  { id: 111, day: null, english: 'company', spanish: 'compañía', example: '' },
  {
    id: 112,
    day: null,
    english: 'completely',
    spanish: 'completamente',
    example: '',
  },
  { id: 113, day: null, english: 'cookie', spanish: 'galleta', example: '' },
  { id: 114, day: null, english: 'cool', spanish: 'genial', example: '' },
  { id: 115, day: null, english: 'count', spanish: 'contar', example: '' },
  { id: 116, day: null, english: 'country', spanish: 'país', example: '' },
  { id: 117, day: null, english: 'couple', spanish: 'pareja', example: '' },
  { id: 118, day: null, english: 'course', spanish: 'curso', example: '' },
  { id: 119, day: null, english: 'cover', spanish: 'cubrir', example: '' },
  { id: 120, day: null, english: 'crazy', spanish: 'loco/loca', example: '' },
  {
    id: 121,
    day: 1,
    english: 'cream',
    spanish: 'crema',
    example: 'Beat the cream until it takes consistency.',
  },
  {
    id: 122,
    day: 2,
    english: 'cry',
    spanish: 'llorar',
    example: 'Some little kids cry on the first day of school.',
  },
  {
    id: 123,
    day: 3,
    english: 'cut',
    spanish: 'cortar',
    example: 'I need a sharp knife to cute these carrots.',
  },
  {
    id: 124,
    day: 4,
    english: 'cute',
    spanish: 'lindo/linda',
    example: 'Her pet is so cute.',
  },
  { id: 125, day: null, english: 'dad', spanish: 'papá', example: '' },
  { id: 126, day: null, english: 'dance', spanish: 'bailar', example: '' },
  { id: 127, day: null, english: 'date', spanish: 'fecha', example: '' },
  {
    id: 128,
    day: null,
    english: 'date',
    spanish: 'salir con (alguien)',
    example: '',
  },
  { id: 129, day: null, english: 'daughter', spanish: 'hija', example: '' },
  { id: 130, day: null, english: 'day', spanish: 'día', example: '' },
  {
    id: 131,
    day: null,
    english: 'dead',
    spanish: 'muerto/muerta',
    example: '',
  },
  { id: 132, day: null, english: 'deal', spanish: 'trato', example: '' },
  {
    id: 133,
    day: null,
    english: 'dear',
    spanish: 'querido/querida',
    example: '',
  },
  { id: 134, day: null, english: 'death', spanish: 'muerte', example: '' },
  { id: 135, day: null, english: 'decide', spanish: 'decidir', example: '' },
  {
    id: 136,
    day: null,
    english: 'definitely',
    spanish: 'definitivamente',
    example: '',
  },
  { id: 137, day: null, english: 'die', spanish: 'morir', example: '' },
  {
    id: 138,
    day: null,
    english: 'different',
    spanish: 'diferente',
    example: '',
  },
  { id: 139, day: null, english: 'dinner', spanish: 'cena', example: '' },
  { id: 140, day: null, english: 'do', spanish: 'hacer', example: '' },
  {
    id: 141,
    day: 1,
    english: 'doctor',
    spanish: 'doctor/doctora',
    example: 'My cousin is a doctor.',
  },
  {
    id: 142,
    day: 2,
    english: 'dog',
    spanish: 'perro',
    example: 'The dog is eating some meat.',
  },
  {
    id: 143,
    day: 3,
    english: 'dollar',
    spanish: 'dólar',
    example: 'This cost 100 dollars.',
  },
  {
    id: 144,
    day: 4,
    english: 'door',
    spanish: 'puerta',
    example: 'The postman is at the door.',
  },
  { id: 145, day: null, english: 'down', spanish: 'abajo', example: '' },
  { id: 146, day: null, english: 'dream', spanish: 'sueño', example: '' },
  { id: 147, day: null, english: 'dress', spanish: 'vestirse', example: '' },
  { id: 148, day: null, english: 'drink', spanish: 'beber', example: '' },
  { id: 149, day: null, english: 'drink', spanish: 'bebida', example: '' },
  { id: 150, day: null, english: 'drive', spanish: 'conducir', example: '' },
  { id: 151, day: null, english: 'drop', spanish: 'soltar', example: '' },
  { id: 152, day: null, english: 'drug', spanish: 'medicina', example: '' },
  { id: 153, day: null, english: 'dude', spanish: 'amigo', example: '' },
  { id: 154, day: null, english: 'early', spanish: 'temprano', example: '' },
  { id: 155, day: null, english: 'easy', spanish: 'fácil', example: '' },
  { id: 156, day: null, english: 'eat', spanish: 'comer', example: '' },
  { id: 157, day: null, english: 'egg', spanish: 'huevo', example: '' },
  { id: 158, day: null, english: 'else', spanish: 'más', example: '' },
  {
    id: 159,
    day: null,
    english: 'embarrass',
    spanish: 'avergonzar',
    example: '',
  },
  {
    id: 160,
    day: 1,
    english: 'end',
    spanish: 'finalizar/terminar',
    example: "This can't be the end.",
  },
  {
    id: 161,
    day: null,
    english: 'end',
    spanish: 'final',
    example: '',
  },
  {
    id: 162,
    day: 2,
    english: 'enjoy',
    spanish: 'disfrutar',
    example: 'She enjoys going out with friends.',
  },
  {
    id: 163,
    day: 3,
    english: 'entire',
    spanish: 'completo/completa',
    example: 'The entire class lasted 3 hours.',
  },
  {
    id: 164,
    day: 4,
    english: 'even',
    spanish: 'incluso',
    example: 'Her day got even worse.',
  },
  { id: 165, day: null, english: 'evening', spanish: 'noche', example: '' },
  { id: 166, day: null, english: 'ever', spanish: 'algna vez', example: '' },
  {
    id: 167,
    day: null,
    english: 'exactly',
    spanish: 'exactamente',
    example: '',
  },
  { id: 168, day: null, english: 'excite', spanish: 'emocionar', example: '' },
  { id: 169, day: null, english: 'excuse', spanish: 'justificar', example: '' },
  { id: 170, day: null, english: 'expect', spanish: 'esperar', example: '' },
  { id: 171, day: null, english: 'explain', spanish: 'explicar', example: '' },
  { id: 172, day: null, english: 'eye', spanish: 'ojo', example: '' },
  { id: 173, day: null, english: 'face', spanish: 'cara', example: '' },
  { id: 174, day: null, english: 'face', spanish: 'enfrentar', example: '' },
  { id: 175, day: null, english: 'fact', spanish: 'hecho', example: '' },
  { id: 176, day: null, english: 'fair', spanish: 'justo/justa', example: '' },
  { id: 177, day: null, english: 'fall', spanish: 'caer', example: '' },
  { id: 178, day: null, english: 'family', spanish: 'familia', example: '' },
  { id: 179, day: null, english: 'far', spanish: 'lejos', example: '' },
  {
    id: 180,
    day: null,
    english: 'fast',
    spanish: 'rápido/rápida',
    example: '',
  },
  {
    id: 181,
    day: 1,
    english: 'fat',
    spanish: 'gordo/gorda',
    example: 'My dog is getting a bit fat.',
  },
  {
    id: 182,
    day: 2,
    english: 'father',
    spanish: 'padre',
    example: 'Her father is a good businessman.',
  },
  {
    id: 183,
    day: 3,
    english: 'fault',
    spanish: 'culpa',
    example: 'Sorry, it was my fault.',
  },
  {
    id: 184,
    day: 4,
    english: 'favor',
    spanish: 'favor',
    example: 'Can I ask you a favor?',
  },
  {
    id: 185,
    day: null,
    english: 'favorite',
    spanish: 'favorito/favorita',
    example: '',
  },
  { id: 186, day: null, english: 'feel', spanish: 'sentir', example: '' },
  {
    id: 187,
    day: null,
    english: 'feeling',
    spanish: 'sentimiento',
    example: '',
  },
  { id: 188, day: null, english: 'fight', spanish: 'luchar', example: '' },
  { id: 189, day: null, english: 'fight', spanish: 'lucha', example: '' },
  { id: 190, day: null, english: 'figure', spanish: 'imaginar', example: '' },
  { id: 191, day: null, english: 'fill', spanish: 'llenar', example: '' },
  {
    id: 192,
    day: null,
    english: 'finally',
    spanish: 'finalmente',
    example: '',
  },
  { id: 193, day: null, english: 'find', spanish: 'encontrar', example: '' },
  { id: 194, day: null, english: 'fine', spanish: 'bien', example: '' },
  { id: 195, day: null, english: 'finger', spanish: 'dedo', example: '' },
  { id: 196, day: null, english: 'finish', spanish: 'terminar', example: '' },
  { id: 197, day: null, english: 'fire', spanish: 'disparar', example: '' },
  { id: 198, day: null, english: 'fire', spanish: 'fuego', example: '' },
  { id: 199, day: null, english: 'fish', spanish: 'pez/pescado', example: '' },
  { id: 200, day: null, english: 'fix', spanish: 'arreglar', example: '' },
  { id: 201, day: null, english: 'floor', spanish: 'piso', example: '' },
  { id: 202, day: null, english: 'fly', spanish: 'volar', example: '' },
  { id: 203, day: null, english: 'follow', spanish: 'seguir', example: '' },
  { id: 204, day: null, english: 'food', spanish: 'comida', example: '' },
  { id: 205, day: null, english: 'foot', spanish: 'pie', example: '' },
  {
    id: 206,
    day: null,
    english: 'forever',
    spanish: 'por siempre',
    example: '',
  },
  { id: 207, day: null, english: 'forget', spanish: 'olvidar', example: '' },
  { id: 208, day: null, english: 'freak', spanish: 'enloquecer', example: '' },
  { id: 209, day: null, english: 'free', spanish: 'gratis', example: '' },
  {
    id: 210,
    day: null,
    english: 'friend',
    spanish: 'amigo/amiga',
    example: '',
  },
  { id: 211, day: null, english: 'front', spanish: 'frente', example: '' },
  { id: 212, day: null, english: 'full', spanish: 'lleno', example: '' },
  { id: 213, day: null, english: 'fun', spanish: 'diversión', example: '' },
  {
    id: 214,
    day: null,
    english: 'funny',
    spanish: 'graciosa/garcioso',
    example: '',
  },
  { id: 215, day: null, english: 'future', spanish: 'futuro', example: '' },
  { id: 216, day: null, english: 'game', spanish: 'juego', example: '' },
  {
    id: 217,
    day: null,
    english: 'gentleman',
    spanish: 'caballero',
    example: '',
  },
  {
    id: 218,
    day: null,
    english: 'get',
    spanish: 'conseguir/obtener',
    example: '',
  },
  { id: 219, day: null, english: 'gift', spanish: 'regalo', example: '' },
  { id: 220, day: null, english: 'girl', spanish: 'niña/chica', example: '' },
  { id: 221, day: null, english: 'girlfriend', spanish: 'novia', example: '' },
  { id: 222, day: null, english: 'give', spanish: 'dar', example: '' },
  {
    id: 223,
    day: null,
    english: 'glad',
    spanish: 'contenta/contento',
    example: '',
  },
  { id: 224, day: null, english: 'go', spanish: 'ir', example: '' },
  { id: 225, day: null, english: 'God', spanish: 'Dios', example: '' },
  { id: 226, day: null, english: 'good', spanish: 'buena/bueno', example: '' },
  {
    id: 227,
    day: null,
    english: 'grab',
    spanish: 'agarrar/coger',
    example: '',
  },
  { id: 228, day: null, english: 'great', spanish: 'genial', example: '' },
  { id: 229, day: null, english: 'group', spanish: 'grupo', example: '' },
  { id: 230, day: null, english: 'grow', spanish: 'crecer', example: '' },
  { id: 231, day: null, english: 'guess', spanish: 'adivinar', example: '' },
  { id: 232, day: null, english: 'gun', spanish: 'arma', example: '' },
  { id: 233, day: null, english: 'guy', spanish: 'tipo/chico', example: '' },
  { id: 234, day: null, english: 'hair', spanish: 'pelo/cabello', example: '' },
  { id: 235, day: null, english: 'hand', spanish: 'mano', example: '' },
  { id: 236, day: null, english: 'hand', spanish: 'dar (verb)', example: '' },
  { id: 237, day: null, english: 'handle', spanish: 'manejar', example: '' },
  { id: 238, day: null, english: 'hang', spanish: 'colgar', example: '' },
  { id: 239, day: null, english: 'happen', spanish: 'suceder', example: '' },
  { id: 240, day: null, english: 'happy', spanish: 'feliz', example: '' },
  { id: 241, day: null, english: 'hard', spanish: 'difícil', example: '' },
  { id: 242, day: null, english: 'hat', spanish: 'sombrero', example: '' },
  { id: 243, day: null, english: 'hate', spanish: 'odiar', example: '' },
  { id: 244, day: null, english: 'have', spanish: 'tener', example: '' },
  { id: 245, day: null, english: 'head', spanish: 'cabeza', example: '' },
  { id: 246, day: null, english: 'hear', spanish: 'escuchar', example: '' },
  { id: 247, day: null, english: 'heart', spanish: 'corazón', example: '' },
  { id: 248, day: null, english: 'hell', spanish: 'infierno', example: '' },
  {
    id: 249,
    day: null,
    english: 'help',
    spanish: 'ayudar (verb)',
    example: '',
  },
  { id: 250, day: null, english: 'help', spanish: 'ayuda', example: '' },
  { id: 251, day: null, english: 'here', spanish: 'aquí', example: '' },
  { id: 252, day: null, english: 'hide', spanish: 'esconder', example: '' },
  { id: 253, day: null, english: 'high', spanish: 'alto', example: '' },
  { id: 254, day: null, english: 'history', spanish: 'historia', example: '' },
  { id: 255, day: null, english: 'hit', spanish: 'golpear', example: '' },
  { id: 256, day: null, english: 'hold', spanish: 'tener', example: '' },
  { id: 257, day: null, english: 'home', spanish: 'casa/hogar', example: '' },
  { id: 258, day: null, english: 'honey', spanish: 'miel/cariño', example: '' },
  { id: 259, day: null, english: 'hope', spanish: 'esperar', example: '' },
  { id: 260, day: null, english: 'horrible', spanish: 'horrible', example: '' },
  { id: 261, day: null, english: 'hospital', spanish: 'hospital', example: '' },
  {
    id: 262,
    day: null,
    english: 'hot',
    spanish: 'caliente/caluroso',
    example: '',
  },
  { id: 263, day: null, english: 'hour', spanish: 'hora', example: '' },
  {
    id: 264,
    day: null,
    english: 'house',
    spanish: 'casa/vivienda',
    example: '',
  },
  { id: 265, day: null, english: 'how', spanish: 'como', example: '' },
  { id: 266, day: null, english: 'huge', spanish: 'enorme', example: '' },
  {
    id: 267,
    day: null,
    english: 'human',
    spanish: 'humana/humano',
    example: '',
  },
  { id: 268, day: null, english: 'hurt', spanish: 'lastimar', example: '' },
  {
    id: 269,
    day: null,
    english: 'husband',
    spanish: 'esposo/marido',
    example: '',
  },
  { id: 270, day: null, english: 'ice', spanish: 'hielo', example: '' },
  { id: 271, day: null, english: 'idea', spanish: 'idea', example: '' },
  { id: 272, day: null, english: 'imagine', spanish: 'imaginar', example: '' },
  {
    id: 273,
    day: null,
    english: 'important',
    spanish: 'importante',
    example: '',
  },
  { id: 274, day: null, english: 'instead', spanish: 'en cambio', example: '' },
  {
    id: 275,
    day: null,
    english: 'interesting',
    spanish: 'interesante',
    example: '',
  },
  { id: 276, day: null, english: 'invite', spanish: 'invitar', example: '' },
  { id: 277, day: null, english: 'job', spanish: 'trabajo', example: '' },
  { id: 278, day: null, english: 'join', spanish: 'unirse', example: '' },
  { id: 279, day: null, english: 'joke', spanish: 'broma', example: '' },
  { id: 280, day: null, english: 'jump', spanish: 'saltar', example: '' },
  { id: 281, day: null, english: 'just', spanish: 'solo', example: '' },
  {
    id: 282,
    day: null,
    english: 'keep',
    spanish: 'mantener/seguir',
    example: '',
  },
  { id: 283, day: null, english: 'key', spanish: 'llave/clave', example: '' },
  { id: 284, day: null, english: 'kick', spanish: 'patear', example: '' },
  { id: 285, day: null, english: 'kid', spanish: 'niña/niño', example: '' },
  {
    id: 286,
    day: null,
    english: 'kid',
    spanish: 'bromear (verb)',
    example: '',
  },
  { id: 287, day: null, english: 'kill', spanish: 'matar', example: '' },
  { id: 288, day: null, english: 'kind', spanish: 'tipo', example: '' },
  { id: 289, day: null, english: 'king', spanish: 'rey', example: '' },
  { id: 290, day: null, english: 'kiss', spanish: 'beso', example: '' },
  { id: 291, day: null, english: 'knock', spanish: 'golpear', example: '' },
  {
    id: 292,
    day: null,
    english: 'know',
    spanish: 'conocer/saber',
    example: '',
  },
  { id: 293, day: null, english: 'lady', spanish: 'señora', example: '' },
  { id: 294, day: null, english: 'last', spanish: 'durar', example: '' },
  { id: 295, day: null, english: 'late', spanish: 'tarde', example: '' },
  { id: 296, day: null, english: 'laugh', spanish: 'reir', example: '' },
  { id: 297, day: null, english: 'law', spanish: 'ley', example: '' },
  { id: 298, day: null, english: 'learn', spanish: 'aprender', example: '' },
  { id: 299, day: null, english: 'leave', spanish: 'dejar/salir', example: '' },
  { id: 300, day: null, english: 'leg', spanish: 'pierna/pata', example: '' },
  {
    id: 301,
    day: null,
    english: 'let',
    spanish: 'dejar/permitir',
    example: '',
  },
  { id: 302, day: null, english: 'lie', spanish: 'mentir', example: '' },
  { id: 303, day: null, english: 'life', spanish: 'vida', example: '' },
  { id: 304, day: null, english: 'light', spanish: 'luz', example: '' },
  {
    id: 305,
    day: null,
    english: 'like',
    spanish: 'gustar (verb)',
    example: '',
  },
  {
    id: 306,
    day: null,
    english: 'like',
    spanish: 'aproximadamente',
    example: '',
  },
  { id: 307, day: null, english: 'line', spanish: 'línea', example: '' },
  { id: 308, day: null, english: 'list', spanish: 'lista', example: '' },
  { id: 309, day: null, english: 'listen', spanish: 'escuchar', example: '' },
  {
    id: 310,
    day: null,
    english: 'little',
    spanish: 'pequeña/pequeño',
    example: '',
  },
  { id: 311, day: null, english: 'live', spanish: 'vivir', example: '' },
  { id: 312, day: null, english: 'long', spanish: 'mucho', example: '' },
  { id: 313, day: null, english: 'long', spanish: 'larga/largo', example: '' },
  { id: 314, day: null, english: 'look', spanish: 'mirar (verb)', example: '' },
  { id: 315, day: null, english: 'look', spanish: 'apariencia', example: '' },
  { id: 316, day: null, english: 'lord', spanish: 'señor', example: '' },
  { id: 317, day: null, english: 'lose', spanish: 'perder', example: '' },
  { id: 318, day: null, english: 'lot', spanish: 'mucha/mucho', example: '' },
  { id: 319, day: null, english: 'love', spanish: 'amar (verb)', example: '' },
  { id: 320, day: null, english: 'love', spanish: 'amor', example: '' },
  { id: 321, day: null, english: 'luck', spanish: 'suerte', example: '' },
  {
    id: 322,
    day: null,
    english: 'lucky',
    spanish: 'afortunada/afortunado',
    example: '',
  },
  { id: 323, day: null, english: 'lunch', spanish: 'almuerzo', example: '' },
  { id: 324, day: null, english: 'machine', spanish: 'máquina', example: '' },
  {
    id: 325,
    day: null,
    english: 'mad',
    spanish: 'enojada/enojado',
    example: '',
  },
  { id: 326, day: null, english: 'make', spanish: 'hacer', example: '' },
  { id: 327, day: null, english: 'man', spanish: 'hombre', example: '' },
  //{ id: , day: null, english: '', spanish: '', example: '' }
];

export const getNumberDays = () => {
  let numberDays = 0;
  for (const obj of WORDS) if (obj.day > numberDays) numberDays = obj.day;
  return numberDays;
};

export const getAllWords = () => {
  return WORDS.filter((word) => word.day);
};

export const getDayWords = (day) => {
  return WORDS.filter((word) => word.day === day);
};
