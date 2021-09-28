
const domUpdates  ={
    // querySelectors
    bookingSection: document.querySelector('#bookings'),
    populateUserBookings(bookingsArray){
        this.bookingSection.innerHTML = ''
        bookingsArray.forEach(booking => {
            this.greetingMessage.innerHTML = 
            this.bookingSection.innerHTML += `
            <article id="booking-card">
            <img src="https://exp.cdn-hotels.com/hotels/1000000/30000/24400/24321/18efc43d_z.jpg?impolicy=fcrop&w=500&h=333&q=medium" alt="room image">
            <br>
            <p id="bc-date">Date: ${booking.date}</p>
            <p id="bc-room">Room: R${booking.roomNumber}</p>
            </article>`
        })
    },
    greetingMessage: document.querySelector('#greetingMessage'),
    updateGreetingMessage(str){
        this.greetingMessage.innerHTML = str
    },
    userInfoName: document.querySelector('#userName'),
    updateUserName(name){
        this.userInfoName.innerHTML = name
    },
    accumulatedFunds: document.querySelector('#accumulatedFunds'),
    updateFundsAccumulated(num){
        let str = new Intl.NumberFormat('en-US', {style: 'currency', currency:'USD'}).format(num)
        this.accumulatedFunds.innerHTML = str
    },
    newBookingResults: document.querySelector('#newBookingSearchResults'),
    updateNewBookingRoomSearchResults(arrOfRooms){
        this.newBookingResults.innerHTML = "";
        if (arrOfRooms.length===0){
            this.newBookingResults.innerHTML = `
            <p>No rooms are available on that date! Please search using another date! (or change your search filters)</p>
            `
        }
        arrOfRooms.forEach((room) => {
            let bidetFlag = "times"
            if (room.bidet){
                bidetFlag = "check"
            }
            this.newBookingResults.innerHTML += `
            <button class="new-booking-result" id ="room-${room.number}">
              <img src="https://exp.cdn-hotels.com/hotels/1000000/30000/24400/24321/18efc43d_z.jpg?impolicy=fcrop&w=500&h=333&q=medium" alt="room image">
              <br>
              <p>Room type: ${room.roomType}</p>
              <p>Bed Size: ${room.bedSize}</p> </p>
              <p>Beds: ${room.numBeds}</p>
              <p>Bidet:<i class="fa fa-${bidetFlag}" aria-hidden="true"></i></p>
              <p>Price: $${room.costPerNight}</p>
            </button>
            <article class="new-booking-result conf1 hidden" id="confirmation-${room.number}">
              <img src="https://exp.cdn-hotels.com/hotels/1000000/30000/24400/24321/18efc43d_z.jpg?impolicy=fcrop&w=500&h=333&q=medium" alt="room image">
              <br>
              <p>Are you sure?</p>
              <p>Room type: ${room.roomType}</p>
              <p>Price: $${room.costPerNight}</p>
              <div>
                <button id="confTrue" class="conf-btn btn btn-green">Book it!</button>
                <button id="confFalse" class="conf-btn btn btn-red">Nevermind</button>
              </div> 
            </article>
            <article class="new-booking-result conf2 hidden" id="confirmed-${room.number}">
              <img src="https://exp.cdn-hotels.com/hotels/1000000/30000/24400/24321/18efc43d_z.jpg?impolicy=fcrop&w=500&h=333&q=medium" alt="room image">
              <br>
              <p>Your booking is confirmed!</p>
              <p>Your room number is:</p>
              <p>R${room.number}</p>
              <p>An email will be sent shortly!</p>
              <p>Thanks for booking!</p>
            </article>
            `
            // this.hide(`confirmation-${room.number}`)
            // this.hide(`confirmed-${room.number}`)
        })

    },

    show(element, type ='id'){
        let t;
        if(type=== 'id'){t='#'}
        if(type=== 'c'){t='.'}
        document.querySelector(`${t}${element}`).classList.remove('hidden')
    },
    
    hide(element, type ='id'){
        let t;
        if(type=== 'id'){t='#'}
        if(type=== 'c'){t='.'}
        document.querySelector(`${t}${element}`).classList.add('hidden')
    },
    //views:
    
    changeViews(view){

        if (view ==="home"){
            this.hide("new-bookings-container", "c")
            this.show("bookings-container", "c")
            this.updateGreetingMessage("Home")
        };
        if (view==="newBooking"){
            this.hide("bookings-container", "c")
            this.show("new-bookings-container", "c")
            this.updateGreetingMessage("Create a new booking:")

        };
    },
    



}

export default domUpdates;