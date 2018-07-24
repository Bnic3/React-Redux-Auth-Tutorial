const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const logger = require('morgan'),
cors = require('cors'),  // origins
jwt = require('jsonwebtoken');

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// use it before all route definitions
app.use(cors({origin: '*'}));

app.post('/login',loginFn)

async function loginFn(req,res){
    try {

        let token ={};
    const {username, password} = req.body;
   
    let userPayload = await userExist(username, password)    
    .catch(err=> setTimeout(_=>{res.json({ success: false, message: 'Authentication failed. Wrong password.',token })},2000))
  
             token = jwt.sign(userPayload, "superSecret", {
                expiresIn: "2 days" // expires in 2 days
              });

              //delay response by 2 seconds
              setTimeout(_=>{
                res.json({
                    success: true,
                    message: 'logged in successfully!',
                    token,
                    userPayload
                  });

              },2000 )
      
      

    }
    catch (e) { console.log("something happened")}
        
}

function userExist(username, password){
    return new Promise((resolve,reject)=>{
        if (username != "react" || password != "password"){
            const error = new Error("Authentication failed!!")
            reject(error)
        }else{ resolve ({username: "react", uiid:"111", "avatar":"googl.shrurl" })
            }
    }) //end return
    
    }

 

const PORT = 3010 
app.listen(PORT,_=> console.log(`Login server is listening on port: ${PORT}` ))