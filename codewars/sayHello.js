function sayHello( name, city, state ) {
  return `Hello, ${name.join(' ')}! Welcome to ${city}, ${state}!`;
};

console.log(sayHello(['Wallace','Russel','Osbourne'],'Albany','New York'));