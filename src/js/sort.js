
//sort.js takes care of instanciation and also takes care of sorting all the arrays we have

let sort ={
    findUserBookings(userID, bookingsData){
        console.log(bookingsData[1])
        let userBookings = bookingsData.filter((booking) => booking.userID === userID)
        return userBookings;
    }
}

export default sort