let sort ={
    findUserBookings(userID, bookingsData){
        let userBookings = bookingsData.filter((booking) => booking.id === userID)
        return userBookings;
    }
}

export default sort