const mongoose = require('mongoose');

const URI = 'mongodb+srv://user_notas:Jp0Sh4oJsrIJ4jYU@cluster0-pjfru.mongodb.net/Comments?retryWrites=true&w=majority'
const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true
}

mongoose.connect(URI, options).then(
    () => { console.log(`Conectado a mongoDB`) },
    err => { console.error(err); }
);

module.exports = mongoose;