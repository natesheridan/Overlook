
//sort.js takes care of instanciation and also takes care of sorting all the arrays we have

const iterate = {
    findUserBookings(userID, bookingsData){
        let userBookings = bookingsData.filter((booking) => booking.userID === userID)
        return userBookings.reverse();
    },
    sumUserFundsAccumulated(userBookings, roomData){
        let rooms = roomData
        let sum = userBookings.reduce((acc, booking) => {
                let room = rooms.find((room) => room.number === booking.roomNumber);
                acc += room.costPerNight;
            return acc
        }, 0)
        return sum;
    },
    findAvailableRooms(bookingsData, roomData, date){
        let bookingsAtDate = bookingsData.filter((booking) => booking.date === date);
        let roomNumbersBooked = bookingsAtDate.map((booking) => booking.roomNumber)
        let availableRooms = roomData.filter((room) => !roomNumbersBooked.includes(room.number))
        return availableRooms
    },
    filterAvailableRooms(filter, roomsArray){
        let filteredRooms = roomsArray.filter((room) => room.roomType === filter);
        return filteredRooms
    }



}

export default iterate