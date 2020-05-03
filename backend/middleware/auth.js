 const admin = require('../firebase');
 
 const checkFirebaseToken = async (req, res, next) => {
    try {
        const { token } = req.body;
        const decodedToken = await admin.auth().verifyIdToken(token);
        const uid = decodedToken.uid;
          next();
    } catch (error) {
        console.log("hello")
        res.status(422).json({message: "No user authenticated!"})
    }
};
 
module.exports = {checkFirebaseToken};