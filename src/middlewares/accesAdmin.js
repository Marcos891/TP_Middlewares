let admins = ['Greta','Ada','Tim','Vim','Marcos'];

module.exports = (req,res,next) => {
    if(admins.includes(req.query.user)){
        next()
    } else {
        res.redirect('/')
    }
}