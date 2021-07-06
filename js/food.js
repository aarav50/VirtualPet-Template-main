class qq{
constructor(){}
display(){
var button,button1
button=createButton("buy car  ")
button.position(500,200)
button1=createButton("eat car  ")

button1.position(100,200)
ba()
if(milk1<12){
    button.mousePressed(function(){
        database.ref("dog/food").set({ 'food': milk1+1 })
        milk1=milk1+1
        ba()
    })
}else{
    fill("white")
    text("you have reach storage max capastey",200,200)
}


if(milk1>0){
    button1.mousePressed(function(){
        database.ref("dog/food").set({ 'food': milk1- 1})
        milk1=milk1-1
        ba()
        
            
            
        
        
    })
}else{
    fill("white")
    text("you dont have any cars buy some more",200,200)
}




















function ba() {
    if(milk1==1){
       b1.visible=true
       b2.visible=false
       b3.visible=false 
       b4.visible=false
       b5.visible=false
       b6.visible=false
       b7.visible=false
       b8.visible=false
       b9.visible=false
       b10.visible=false
       b11.visible=false
       b12.visible=false
    }
    if(milk1==2){
        b1.visible=true
        b2.visible=true
        b3.visible=false 
        b4.visible=false
        b5.visible=false
        b6.visible=false
        b7.visible=false
        b8.visible=false
        b9.visible=false
        b10.visible=false
        b11.visible=false
        b12.visible=false
     }
     if(milk1==3){
        b1.visible=true
        b2.visible=true
        b3.visible=true 
        b4.visible=false
        b5.visible=false
        b6.visible=false
        b7.visible=false
        b8.visible=false
        b9.visible=false
        b10.visible=false
        b11.visible=false
        b12.visible=false
     }
     if(milk1==4){
        b1.visible=true
        b2.visible=true
        b3.visible=true 
        b4.visible=true
        b5.visible=false
        b6.visible=false
        b7.visible=false
        b8.visible=false
        b9.visible=false
        b10.visible=false
        b11.visible=false
        b12.visible=false
     }
     if(milk1==5){
        b1.visible=true
        b2.visible=true
        b3.visible=true 
        b4.visible=true
        b5.visible=true
        b6.visible=false
        b7.visible=false
        b8.visible=false
        b9.visible=false
        b10.visible=false
        b11.visible=false
        b12.visible=false
     }
     
     if(milk1==6){
        b1.visible=true
        b2.visible=true
        b3.visible=true 
        b4.visible=true
        b5.visible=true
        b6.visible=true
        b7.visible=false
        b8.visible=false
        b9.visible=false
        b10.visible=false
        b11.visible=false
        b12.visible=false
     }
     if(milk1==7){
        b1.visible=true
        b2.visible=true
        b3.visible=true 
        b4.visible=true
        b5.visible=true
        b6.visible=true
        b7.visible=true
        b8.visible=false
        b9.visible=false
        b10.visible=false
        b11.visible=false
        b12.visible=false
     }
     if(milk1==8){
        b1.visible=true
        b2.visible=true
        b3.visible=true 
        b4.visible=true
        b5.visible=true
        b6.visible=true
        b7.visible=true
        b8.visible=true
        b9.visible=false
        b10.visible=false
        b11.visible=false
        b12.visible=false
     }
     if(milk1==9){
        b1.visible=true
        b2.visible=true
        b3.visible=true 
        b4.visible=true
        b5.visible=true
        b6.visible=true
        b7.visible=true
        b8.visible=true
        b9.visible=true
        b10.visible=false
        b11.visible=false
        b12.visible=false
     }
     if(milk1==10){
        b1.visible=true
        b2.visible=true
        b3.visible=true 
        b4.visible=true
        b5.visible=true
        b6.visible=true
        b7.visible=true
        b8.visible=true
        b9.visible=true
        b10.visible=true
        b11.visible=false
        b12.visible=false
     }
     if(milk1==11){
        b1.visible=true
        b2.visible=true
        b3.visible=true 
        b4.visible=true
        b5.visible=true
        b6.visible=true
        b7.visible=true
        b8.visible=true
        b9.visible=true
        b10.visible=true
        b11.visible=true
        b12.visible=false
     }
     if(milk1==12){
        b1.visible=true
        b2.visible=true
        b3.visible=true 
        b4.visible=true
        b5.visible=true
        b6.visible=true
        b7.visible=true
        b8.visible=true
        b9.visible=true
        b10.visible=true
        b11.visible=true
        b12.visible=true
     }
     
     
     
     
}

























































































}
}