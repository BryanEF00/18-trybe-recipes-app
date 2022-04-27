const li = `/ /foods /drinks /foods/:id /drinks/:id /foods/:id/in-progress
 /drinks/:id/in-progress /explore /explore/foods /explore/drinks
 /explore/foods/ingredients /explore/drinks/ingredients /explore/foods/nationalities
 /profile /done-recipes /favorite-recipes`;

const list = li.split(' ');

list.forEach((path) => {
  console.log(`<Route exact path="${path}" component={}/>`);
});
