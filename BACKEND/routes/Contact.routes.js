const express = require("express");
const ContactRouter = express.Router();
const ContactController = require("../controllers/Contact.controllers");
const authMiddleware = require("../middleware/auth"); 

ContactRouter.get("/contacts", authMiddleware, ContactController.getAllContacts);
ContactRouter.post("/contacts", authMiddleware, ContactController.createContact);
ContactRouter.put("/contacts/:id",  ContactController.updateContact);
ContactRouter.delete("/contacts/:id", authMiddleware, ContactController.deleteContact);
ContactRouter.get("/contacts/search", authMiddleware, ContactController.serachbyname);

module.exports = ContactRouter;
