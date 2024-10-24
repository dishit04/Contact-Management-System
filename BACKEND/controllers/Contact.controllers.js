const ContactModel = require("../Models/Contact.model")


function formatDate(date) {
   const formattedDate = new Date(date);
   const day = formattedDate.getDate().toString().padStart(2, '0');
   const month = (formattedDate.getMonth() + 1).toString().padStart(2, '0');
   const year = formattedDate.getFullYear().toString();
   return `${month}-${day}-${year}`;
 }
class ContactController{
   static async getAllContacts(req,res){
        try {
         let  Contacts = await ContactModel.find()
               

            const mappedarray = Contacts.map((contact) => {
               return {
                  _id:contact._id,
                 firstName: contact.firstName,
                 lastName: contact.lastName,
                 phoneNumber: contact.phoneNumber,
                 email: contact.email,
                 createDate: formatDate(contact.createDate),
                 code:contact.code 
               };
             });
  
            res.status(200).send({mappedarray})
      

        } catch (error) {
         res.status(503).send({error:error.message,
         "InternetCheck":"Check your Internet Connection if your internet is working properly  referesh it site or close the tab and re-visit the site",
         })
        }
   }
   static async createContact(req,res){
      try {
         const AddContact = new ContactModel(req.body)
         await AddContact.save()
         res.status(200).send({"message":"Contact has been added"})
     } catch (error) {
      res.status(503).send({error:error.message,
      "InternetCheck":"Check your Internet Connection if your internet is working properly  referesh it site or close the tab and re-visit the site",
      })
     }
   }
   static async updateContact(req,res){
      try {
       const {id} = req.params.id
         await ContactModel.findByIdAndUpdate(id,req.body)
         res.status(200).send({"message":"Contact has been updated and saved"})
     } catch (error) {
      res.status(503).send({error:error.message,
      "InternetCheck":"Check your Internet Connection if your internet is working properly  referesh it site or close the tab and re-visit the site",
      })
     }
   }
   static async deleteContact(req,res){
      try {
         const id = req.params.id
         const contact = await ContactModel.findOne({_id:id})
          await ContactModel.findByIdAndDelete(id)
         res.status(200).send({"message":`${contact.firstName} ${contact.lastName} has been deleted`})
     } catch (error) {
      res.status(503).send({error:error.message,
      "InternetCheck":"Check your Internet Connection if your internet is working properly  referesh it site or close the tab and re-visit the site",
      })
     }
   }
   static async serachbyname(req, res) {
      try {
        const {name} = req.query;
        const results = await ContactModel.find({
         $or: [
           { firstName: { $regex: name, $options: 'i' } }, 
           { lastName: { $regex: name, $options: 'i' } }, 
           { email: { $regex: name, $options: 'i' } }, 
           { phoneNumber: { $regex: name} }, 
           {
             $expr: {
               $regexMatch: {
                 input: { $concat: ['$firstName', ' ', '$lastName'] }, 
                 regex: new RegExp(name, 'i'), 
               },
             },
           },
         ],
       });
    
       
       
       let mappedarray = results.map((contact) => {
         return {
            _id:contact._id,
           firstName: contact.firstName,
           lastName: contact.lastName,
           phoneNumber: contact.phoneNumber,
           email: contact.email,
           createDate: formatDate(contact.createDate),
           code:contact.code
         };
       });

      
       res.status(200).send({mappedarray})
      
        
      } catch (error) {
         res.status(503).send({error:error.message,
            "InternetCheck":"Check your Internet Connection if your internet is working properly  referesh it site or close the tab and re-visit the site",
            })
      }
    }
}



module.exports = ContactController