const authorise = (req,res,next)=>{
    const {user} = req.query
    if(user==='champ'){
        req.user = {name:'champ',id:18}
    console.log('authorize')
next()
}
else{
    res.status('401').send('jaali hai ')
}
    
next()
}
module.exports=authorise;