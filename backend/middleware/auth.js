 const admin = require('../firebase');
 
 const checkFirebaseToken = async (req, res, next) => {
    try {
        // console.log(req.headers.authtoken);
        const token = req.headers.authtoken;
        const decodedToken = await admin.auth().verifyIdToken(token);
        const uid = decodedToken.uid;
        req.user_id = uid; 
          next();
    } catch (error) {
        res.status(422).json({message: "No user authenticated!"})
    }
};
 
module.exports = {checkFirebaseToken};

