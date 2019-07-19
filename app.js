var express=require("express"),
    ejs=require("ejs"),
    path=require("path"),
    app=express();
app.use("/public",express.static("public"));

app.set("view engine","ejs");

app.get("/",function(req,res){
    res.sendFile(path.join(__dirname+"/views/guessthecolor.html"));
});


app.listen(process.env.PORT||5000,process.env.IP,function(){
    console.log("server on...");
});
