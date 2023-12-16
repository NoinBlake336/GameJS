/*
 * Reglas:
 * El final de cada nivel debe ser el inicio del siguiente
*/

const emojis = {
  '-': ' ',
  'O': '🚪',
  'X': '💣',
  'I': '🎁',
  'PLAYER': '💀',
  'BOMB_COLLISION': '🔥',
  'GAME_OVER': '👎',
  'WIN': '🏆',
  'HEART': '❤️',
};
  
  const maps = [];
  maps.push(`
    IXXXXXXXXX
    -XXXXXXXXX
    -XXXXXXXXX
    -XXXXXXXXX
    -XXXXXXXXX
    -XXXXXXXXX
    -XXXXXXXXX
    -XXXXXXXXX
    -XXXXXXXXX
    OXXXXXXXXX
  `);
  maps.push(`
    O--XXXXXXX
    X--XXXXXXX
    XX----XXXX
    X--XX-XXXX
    X-XXX--XXX
    X-XXXX-XXX
    XX--XX--XX
    XX--XXX-XX
    XXXX---IXX
    XXXXXXXXXX
    `);
  maps.push(`
    XI----XXXX
    XXXXX-XXXX
    XX----XXXX
    XX-XXXXXXX
    XX-----XXX
    XXXXXX-XXX
    XX-----XXX
    XX-XXXXXXX
    XX-----OXX
    XXXXXXXXXX
  `);


  maps.push(`
  O-----XX-I
  XXXXX-XX-X
  XX----XX-X
  XX-XXXXX-X
  XX-----X-X
  XXXXXX-X-X
  XX-----X-X
  XX-XXXXX-X
  XX-------X
  XXXXXXXXXX
`);

maps.push(`
  O---XXXXXX
  XX-XXXXXX
  X------XX
  X-XXXXXXX
  X-XXXXXXX
  X-XXXXXXX
  X------XX
  X-----XXX
  XXXXX---X
  XXXXXXX-I
`);

maps.push(`
  XX-XXXXXXX
  XI-XXXXXX
  XX------X
  X--XXXXXX
  X-XXXXXXX
  X--XXXXXX
  XX-XXXXXX
  XX--XXXXX
  XX------X
  XXXXXXX-O
`);


