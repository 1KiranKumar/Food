const mongoose = require('mongoose');
const url = 'mongodb+srv://Kiran:kiran@cluster0.mf3nwvy.mongodb.net/Food?retryWrites=true&w=majority';

const conn=async()=>{
    await mongoose.connect(url,{useNewUrlParser: true},function(err,result){
      if(err) console.log("--",err)
      else{
        console.log("Connected");
        const fetched_data= mongoose.connection.db.collection("food_items");
        fetched_data.find({}).toArray(async function(err,data){
          const foodCategory=await mongoose.connection.db.collection("foodCategory");
          foodCategory.find({}).toArray(function(err,catdata){
            if(err) console.log(err)
            else{
              global.food_items=data;
              global.foodCategory=catdata;
            }
          })
          if(err) console.log(err)
          else{
            global.food_items=data;
          }
        })
      }
    })
  }
  

module.exports=conn;