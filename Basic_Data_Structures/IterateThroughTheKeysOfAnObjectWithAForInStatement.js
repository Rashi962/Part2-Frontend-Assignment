const users = {
    Alan: {
      online: false
    },
    Jeff: {
      online: true
    },
    Sarah: {
      online: false
    }
  }
  
  function countOnline(usersObj) {
    let counter = 0;
    for (let user in usersObj) {
      if (usersObj[user].online == true) {
        counter++;
      }
    }
    return counter;
  }
  
  console.log(countOnline(users));
  