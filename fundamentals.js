const aCar = {
    owner : "Joe Bloggs",
    make: "Toyota",
    model:"Corolla",
    cc:1.8,
    registration : {
    year:201,
    county_code:"WD",
    number:1058
    }
  };
  console.log(aCar.owner + ' drives a ' + aCar.make)
  console.log('The cars reg no is ' + aCar.registration.year + "-" + aCar.registration.county_code + "-" + aCar.registration.number);
  