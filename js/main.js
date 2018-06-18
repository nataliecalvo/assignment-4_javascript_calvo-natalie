// array
var iceCream = ["Cookies and Cream", "Rocky Road", "Chocolate Chip"];

"Cookie Dough"

//object
var trump = {
  firstName: 'Donald',
  lastName: 'Trump',
  termLength: 1,
  party: 'Republican',
  yearsOfPresidency: [2017, 2018],
}

var obama = {
  firstName = 'Barack',
  lastName = 'Obama',
  termLength = 2,
  party: 'Democrat',
  yearsOfPresidency: [2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017],
}

var bush = {
  firstName = 'George W.',
  lastName = 'Bush',
  termLength = 2,
  party: 'Republican',
  yearsOfPresidency: [2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009],
}

var clinton = {
  firstName = 'Bill',
  lastName = 'Clinton',
  termLength = 2,
  party: 'Democrat',
  yearsOfPresidency: [1993, 1994, 1995, 1996, 1997, 1998, 1999, 2000, 2001],
}

var bushSenior = {
  firstName = 'George H.W.',
  lastName = 'Bush',
  termLength = 1,
  party: 'Republican',
  yearsOfPresidency: [1989, 1990, 1991, 1992, 1993],
}

var presidents = [
  {
    firstName: 'Donald',
    lastName: 'Trump',
    termLength: 1,
    party: 'Republican',
    yearsOfPresidency: [2017, 2018],
  },

  {
    firstName = 'Barack',
    lastName = 'Obama',
    termLength = 2,
    party: 'Democrat',
    yearsOfPresidency: [2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017],
  },

  {
    firstName = 'George W.',
    lastName = 'Bush',
    termLength = 2,
    party: 'Republican',
    yearsOfPresidency: [2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009],
  },

  {
    firstName = 'Bill',
    lastName = 'Clinton',
    termLength = 2,
    party: 'Democrat',
    yearsOfPresidency: [1993, 1994, 1995, 1996, 1997, 1998, 1999, 2000, 2001],
  },

  {
    firstName = 'George H.W.',
    lastName = 'Bush',
    termLength = 1,
    party: 'Republican',
    yearsOfPresidency: [1989, 1990, 1991, 1992, 1993],
  }
];

console.log(presidents[2].firstName + ' ' + presidents[2].lastName);

//functions
function howdy() {
  return 'Natalie Calvo says nice to meet you';
}

console.log( howdy() );

var numba = function(string) {
  if (numba.length < 7) {
    return ("What a short little word!");
  }

  else if (numba.length > 7) {
    return ("I'm sorry, but that's too many to count!");
  }

  else {
    return ("7, what a perfect choice!");
  }
};

numba('7');

numba('seventy');

numba('university');

function inception (display, favMovie) {
  display(favMovie)
};

inception(display, "Parent Trap");

function display {
  console.log(inception + "is a fantastic movie!")
}
