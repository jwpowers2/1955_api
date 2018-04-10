let Person = require("mongoose").model("Person");


class PersonController{

  all(req,res){

    Person.find({},(err,arr)=>{
      //var arr = ["test","testing"];
      if(err){
				
        res.json({people:"errors"});
			
      }else{
	console.log(arr[0]);			
        res.json({people:arr});
			
      }

    })

  }
  new_person(req,res){

    let person = new Person({name:req.params.name});
    //console.log(req.params.name);
    person.save((err)=>{

      if(err){

        res.json({error:"error"});
      } else {

        res.json({"message":"nice work"});
      }

    })

  }
  remove_person(req,res){

    Person.findOne({name:req.params.name},(err,person)=>{
    //console.log(req.params.name);

      if(err){console.log("error");} 

      Person.remove({name:req.params.name},(err)=>{
        if(err){console.log(err);}
        res.json({"message":"nice work deleting"});
      })

    })

  }
  person(req,res){

    Person.findOne({name:req.params.name},(err,person)=>{
      //var arr = ["test","testing"];
      if(err){
				
        res.json({people:"errors"});
			
      }else{
	console.log(person);			
        res.json({person:person});
			
      }

    })

  }

}

module.exports = new PersonController();
