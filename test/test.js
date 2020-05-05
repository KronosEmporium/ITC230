const expect = require("chai").expect;
const data = require("../data.js");

describe("Data module", () => {
    
 // data.getItem(n)
 it("returns requested item", () => {
   const result = data.getItem(0);
   expect(result).to.deep.equal(
    {   
        "Name" : "Wish You Were Here",
        "Artist" : "Pink Floyd",
        "ReleaseYear" : "1975",
        "Genre" : "Progressive Rock",
        "Length" : "44:17"    
    });
 });
 
 it("fails w/ invalid item to get", () => {
   const result = data.getItem(10);
   expect(result).to.be.undefined;
 });

    
 // data.addItem(n, item)
 it("adds item to albums", () => {
     const result = data.addItem(
     {
         "Name" : "Kid A",
         "Artist" : "Radiohead",
         "ReleaseYear" : "2000",
         "Genre" : "Experimental Rock",
         "Length" : "49:56"
     });
 });
    
 it("fails w/ item not of type object", () => {
     const result = data.addItem("some random non-object");
     expect(result).to.deep.equal("Item Not Object");
 });
    
    
 // data.deleteItem(n)
 it("deletes requested item", () => {
     const result = data.deleteItem(0);
     expect(result).to.deep.equal("successfully deleted");
 });
    
 it("fails w/ invalid item to delete", () => {
     const result = data.deleteItem(10);
     expect(result).to.deep.equal("failed to delete");
 });
});