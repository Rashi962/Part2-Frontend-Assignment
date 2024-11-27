function htmlColorNames(arr) {

    let start = 0;
    let amount = 2;
    arr.splice(start, amount, 'DarkSalmon', 'BlanchedAlmond')
  
    return arr;
  }
  
  console.log(htmlColorNames(['DarkGoldenRod', 'WhiteSmoke', 'LavenderBlush', 'PaleTurquoise', 'FireBrick']));