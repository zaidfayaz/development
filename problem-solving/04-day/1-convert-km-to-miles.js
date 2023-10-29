/*Write a js code to convert the kilometer into the miles
1km = 0.621371 and miles = km * factor where factor  = 0.621371 */
const convertKmIntoMIles = (km) =>{
    let factor = 0.621371
    let miles = km * factor
    console.log(` ${km}km = ${miles} miles`);

}
convertKmIntoMIles(1000)
