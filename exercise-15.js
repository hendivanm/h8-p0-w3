function groupAnimals (animals) {
    animals.sort ()
    var groups = [[]];
  
    if (groups[0][0] === undefined) {
      groups[0].push (animals[0]);
    }
  
    for (var i = 1; i <= animals.length - 1; i++) {
      for (var j = 0; j < groups.length; j++) {
          if (groups.length === 1 && animals[i][0] === groups[j][0][0]) {
              groups[j].push (animals[i]);
              break;
          } else if (groups.length === 1 && animals[i][0] !== groups[j][0][0]) {
              groups.push ([animals[i]]);
              break;
          } else if (groups.length > 1 && animals[i][0] === groups[j][0][0]) {
              groups[j].push ([animals[i]]);
              break;
          } else if (groups.length > 1 && animals[i][0] !== groups[j][0][0]) {
              for (var k = 1; k <= groups.length; k++) {
                  if (groups[k] === undefined) {
                        groups.push ([animals[i]]);
                        break;
                  } else if (animals[i][0] !== groups[k][0][0]) {
                  } else {
                        groups[k].push(animals[i]);
                        break;
                  }
              }
              break;
          }
      }
    }
    return groups;
  }
  
  console.log (groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
  // [['anoa', 'ayam'], ['cacing'], ['kancil', 'kuda']]
  console.log (groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]));
  // [['anoa', 'ayam'],['cacing','cicak'],['kancil', 'kuda'],['unta']]