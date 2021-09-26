//IMPORTS
    //JS files
import apiCalls from './js/apiCalls';
import sort from './js/sort';
import domUpdates from './js/domUpdates';
import User from './js/user/User'

    //Styling Files
import './css/styles.scss'
    //Image paths



//DOM ELEMENTS


//EVENT LISTENERS

//GLOBAL VARIABLES
let currentUserData;
let allBookings;



//PAGE LOAD FUNCTIONS
window.addEventListener('load', ()=>{
    getData()
})



//GLOBAL FUNCTIONS

    //API functions
function getData() {

    //RANDOM USER -- REMOVE when adding login
    let randomNum = generateNum() ///////////
    /////////////////////////////////////////
    return Promise.all([apiCalls.getSingleCustomer(randomNum), apiCalls.getAllBookings()])
    .then(data => setData(data));
};
function setData(data) {
    //set random user
    currentUserData = data[0];
    allBookings = data[1].bookings;
    let userBookings = sort.findUserBookings(currentUserData.id, allBookings);
    console.log(userBookings)

    //assign all bookings to a variable
}



function generateNum() {
    let ran = Math.floor(Math.random() * 50);
    return ran
  }

    