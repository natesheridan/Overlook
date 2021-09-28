//IMPORTS
    //JS files
import apiCalls from './js/apiCalls';
import iterate from './js/iterate';
import domUpdates from './js/domUpdates';
import User from './js/user/User'

import '../src/images/turing-logo.png'

    //Styling Files
import './css/styles.scss'
    //Image paths


    
//DOM ELEMENTS
let newBookingDateQuery = document.querySelector('#newTripDateInput')
let usernameInput = document.querySelector('#usernameInput')
let passwordInput = document.querySelector('#passwordInput')
    
    
//EVENT LISTENERS
document.querySelector("#searchNewBookings").addEventListener("click", searchForNewBooking);
document.querySelector(".room-filters").addEventListener('click', filterNewBookingResults);
document.querySelector("#newBookingSearchResults").addEventListener('click', confirmBooking);
document.querySelector("#navNewBooking").addEventListener('click', view);
document.querySelector("#navHome").addEventListener('click', view);
document.querySelector("#submitLoginBtn").addEventListener('click', login);
document.querySelector("#navLogout").addEventListener('click', function() {console.log("make a logoutfunction!")});

//GLOBAL VARIABLES
let currentUserData;
let bookingsData;
let roomData;




//PAGE LOAD FUNCTIONS BEFORE LOGIN PAGE IS MADE
window.addEventListener('load', ()=>{
    getData()
})



//GLOBAL FUNCTIONS
//API functions
let userNumber; 
function getData(userNumber) {
    return Promise.all([apiCalls.getSingleCustomer(userNumber), apiCalls.getAllBookings(), apiCalls.getAllRooms()])
    .then(data => setData(data))
};

function login(){
    if(passwordInput.value==="overlook2021"){
        userNumber = usernameInput.value.split('customer')[1];
        getData(userNumber).then(()=>{
            domUpdates.hide("login")
            domUpdates.show("overlook")
        })
    }
    return
}

function setData(data) {
    currentUserData = new User(data[0].id, data[0].name);
    bookingsData = data[1].bookings;
    roomData = data[2].rooms;
    currentUserData.bookings = bookingsData;
    let userBookings = iterate.findUserBookings(currentUserData.id, bookingsData);
    let totalSpent = iterate.sumUserFundsAccumulated(userBookings, roomData)
    currentUserData.totalSpent = totalSpent;
    domUpdates.populateUserBookings(userBookings)
    domUpdates.updateGreetingMessage(`Hello ${currentUserData.name}, here's a breakdown:`)
    domUpdates.updateUserName(currentUserData.name)
    domUpdates.updateFundsAccumulated(totalSpent)
}

function view(event){
    if (event.target.closest('button').id.split('nav')[1]==="Home"){
        domUpdates.changeViews("home")
        domUpdates.updateGreetingMessage(`Hello ${currentUserData.name}, welcome home:`)
    }
    else if(event.target.closest('button').id.split('nav')[1]==="NewBooking"){
    domUpdates.changeViews("newBooking")
    }
}



let newBookingAvailableRooms;
let searchDate;
function searchForNewBooking(){
    let dateUnparsed = newBookingDateQuery.value
    document.getElementsByName("filters").forEach((element) => element.checked = false)
    let date = dateUnparsed.split('-').join('/')
    let availableRooms = iterate.findAvailableRooms(bookingsData, roomData, date);
    newBookingAvailableRooms = availableRooms;
    searchDate = date
    domUpdates.show("room-filters", "c")
    domUpdates.updateNewBookingRoomSearchResults(availableRooms);
}
function filterNewBookingResults(event){
    if (!event.target.parentElement.class === "room-filters"){
        return;
    }
    let filter = document.querySelector('input[name="filters"]:checked').value;
    let filteredRooms = iterate.filterAvailableRooms(filter, newBookingAvailableRooms);
    domUpdates.updateNewBookingRoomSearchResults(filteredRooms)
}

const buttonState = {};
function confirmBooking(event){
    let roomNum = event.target.closest('.new-booking-result').id.split('-')[1]
    if(!event.target.parentElement.id === "newBookingSearchResults"){
        return
    }
    if(!roomNum){
        return
    }
    if (!buttonState[roomNum] || buttonState[roomNum]===0){
        buttonState[roomNum] = 1;
        domUpdates.hide(`room-${roomNum}`);
        domUpdates.show(`confirmation-${roomNum}`);
    }
    else if(buttonState[roomNum]===1 && event.target.closest('.conf-btn').id==="confTrue"){
        buttonState[roomNum] = 2;
        let postObj = {
            "userID": currentUserData.id,
            "date": searchDate,
            "roomNumber": parseInt(roomNum),
        }
        console.log(postObj);
        apiCalls.postNewBooking(postObj);
        domUpdates.hide(`confirmation-${roomNum}`);
        domUpdates.show(`confirmed-${roomNum}`);
        setTimeout(function(){
            domUpdates.hide(`confirmed-${roomNum}`);
            getData(userNumber);
            domUpdates.changeViews("home")
        }, 5000)
    }
    else if(buttonState[roomNum]===1 && event.target.closest('.conf-btn').id==="confFalse"){
        buttonState[roomNum]=0
        domUpdates.hide(`confirmation-${roomNum}`);
        domUpdates.show(`room-${roomNum}`);
        return;
        
    }
}





//helper functions

function generateNum() {
    let ran = Math.floor(Math.random() * 50) + 1;
    return ran
}