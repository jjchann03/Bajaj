const express = require('express');

const app = express();

app.post('/',(req,res)=>{
    let data=req.body.data;
    if(data){
        let alphabets=[];
        let odd=[];
        let even=[]
        for(let i=0;i<data.length;i++){
            if(data[i]!=parseInt(data[i])) alphabets.add(data[i].toUpperCase());
            else{
                if(data[i]%2==0) even.add(data[i]);
                else odd.add(data[i]);
            }
        }                                           
        res.send({
            "is_success": true,
            "user_id": `${req.body.full_name}_${req.body.dob}`, 
            "email": req.body.email,
            "roll_number":req.body.roll_number,
            "odd_numbers":odd,
            "even_numbers":even,
            "alphabets":alphabets
        })
    }
})

app.listen(8080);
