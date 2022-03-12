let parents = $("#selectMe").parents();
console.log(parents)

let parents2 = $(parents).next();
console.log(parents2)

let child = $(parents2).children()[1];
console.log(child);

$(child).text("Meant for large enterprises looking for an edge.")