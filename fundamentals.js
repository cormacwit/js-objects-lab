const aCar = {
    owner : "Joe Bloggs",
    make: "Toyota",
    model:"Corolla",
    cc:1.8,
    registration : {
    year:201,
    county_code:"WD",
    number:1058
    },
    previous_owners: [
      { name: "Pat Smith", address: "1 Main Street" },
      { name: "Sheila Dwyer", address: "2 High Street" }
    ],

  };

  aCar.milage = 10000
  aCar.color = {
    exterior: "red",
    interior: { texture: "leather", shade: "cream" }
  }

  console.log(aCar.owner + ' drives a ' + aCar.make)
  console.log('The cars reg no is ' + aCar.registration.year + "-" + aCar.registration.county_code + "-" + aCar.registration.number);
  console.log(
    "It is a " + aCar.color.exterior + " car, " + aCar.milage + " milage, with " + aCar.color.interior.texture + " interior.");
  console.log('First owner : ' + aCar.previous_owners[0] )
  console.log( "First owner: " +  aCar.previous_owners[0].name +  ' - ' + aCar.previous_owners[0].address)

  for (let i = 0 ; i < aCar.features ; i += 1) {  console.log(aCar.features[i]) ;}

for (let i = 0 ; i < aCar.previous_owners.length ; i += 1) {
  console.log(aCar.previous_owners[i].name);
}