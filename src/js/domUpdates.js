
const domUpdates  ={
    // querySelectors
    bookingSection: document.querySelector('#bookings'),
    populateUserBookings(bookingsArray){
        this.bookingSection.innerHTML = ''
        bookingsArray.forEach(booking => {
            let testFees = 0
            this.greetingMessage.innerHTML = 
            this.bookingSection.innerHTML += `
            <article id="booking-card">
            <p id="bc-date">Date: ${booking.date}</p>
            <p id="bc-date">Room: ${booking.roomNumber}</p>
            <p id="bc-date">Fees: ${testFees}</p>
            </article>`
        })
    },
    greetingMessage: document.querySelector('#greetingMessage'),
    updateGreetingMessage(str){
        this.greetingMessage.innerHTML = str
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
            <article class="new-booking-result" id ="room-${room.number}">
              <p>Room type: ${room.roomType}</p>
              <p>Bed Size: ${room.bedSize}</p> </p>
              <p>Beds: ${room.numBeds}</p>
              <p>Bidet:<i class="fa fa-${bidetFlag}" aria-hidden="true"></i></p>
              <p>Price: $${room.costPerNight}</p>
            </article>
            <article class="new-booking-result conf1 hidden" id="confirmation-${room.number}">
              <p>Are you sure?</p>
              <p>Room type: ${room.roomType}</p>
              <p>Price: $${room.costPerNight}</p>
              <p>Book it!</p>
              <div><p>Nevermind</p></div> 
            </article>
            <article class="new-booking-result conf2 hidden" id="confirmed-${room.number}">
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
    
    



}

export default domUpdates;