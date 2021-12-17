import jwt from 'jsonwebtoken'

//custom middleware
export const auth = (request, response, next) => {
    try {

        const token = request.header("x-auth-token");
        jwt.verify(token, process.env.SECRET_KEY);
        console.log("token", token);
        //token names differs as per company here x-auth token
        next();
    } catch (err) {
        response.send({ error: err.message });
    }
}