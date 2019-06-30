var db = require("../models");

module.exports = function(app) {
    // this route should find all contacts in the table and display them as JSON
    app.get("/api/contacts", function(req, res) {
        db.Contact.findAll({  // findAll will always give you an array if it is working correctly "db.Contact" refers to the var "Contact" in contact.js
            // order by last name, then, first name
        }).then(function(contacts) {
            res.json(contacts);
        })
    
    });

    // this route should add a new contact to the table
	app.post("/api/contacts", function(req, res) {
        var newContact ={
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            contactType: req.body.contactType,
            phoneNumber: req.body.phoneNumber,
            emailAddress: req.body.emailAddress
        }

        console.log(newContact);
        //db.Contact.create()
        
    });

    // this route should delete a contact from the table, if the id matches the ':id' url param
	app.delete("/api/contacts/:id", function(req, res) {
        
    });
}