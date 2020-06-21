module.exports = (handler) => {
    return async(req, res, next) {
        try{
            await handler(req, res)
        }
        catch (e) {
            next(e)
        }
    }
}



module.exports = (handler) => {
    return async(req, res, next) {
        try{

            await handler(req, res)
        }
        catch(e) {
            next(e)
        }
    }
}







module.exports = (handler) => {
    return async(req, res, next) {
        try {
            
            await handler(req, res)
        } catch (error) {
            next(error)
        }
    }
}