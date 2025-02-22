module.exports = function(sequelize, DataTypes) {
    var Contact = sequelize.define("Contact", { // var "Contact" will equal "contacts" as the table in MySQL: lowercase and plural
        // firstName (VARCHAR, NOT NULL, between 1-30 characters)
        firstName:{
            type: DataTypes.STRING, //VARCHAR
            allowNull: false,
            validate: {
                len: [1,30]
            }
        },

              // lastName (VARCHAR, NOT NULL, between 1-30 characters)

        lastName:{
            type: DataTypes.STRING, //sequelize syntax for VARCHAR
            allowNull: false,
            validate: {
                len: [1,30]
            }
        },

  
        // contactType (VARCHAR, Default value "Personal")  
        contactType:{
            type: DataTypes.STRING,
            defaultValue: "Personal"
        },

        // phoneNumber (VARCHAR, NULL, length 10 characters, numbers only)
        phoneNumber: {
            type: DataTypes.STRING,
            validate:{
                len: [10, 10],
                isNumeric: true

            }
        },
        // emailAddress (VARCHAR, NULL, must be valid email format)
        emailAddress:{
            type: DataTypes.STRING,
            validate: {
                isEmail:true
            }

        }
    });
    // be sure to return the model!
    return Contact;
};
