const upperLimit=50;
const lowerLimit=20;
const carspeed=30;
if(carspeed>lowerLimit && carspeed<upperLimit){
    console.log("Safe Driving");
}
else if(carspeed<lowerLimit)
{
    console.log('slow driving');
}
else
{
    console.log("Rash Driving");
}