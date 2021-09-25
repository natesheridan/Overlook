import {getAllCustomers, getAllBookings, getSingleCustomer, getAllRooms, postNewBooking, deleteSingleBooking} from '../apiCalls';



class User{
    constructor(id){
        this.id = id;
        this.name;
        this.bookings;
        this.totalSpent;
    };
    updateUserData(userData, bookingsData){

    }

    updateNameData(name){
        this.name = name
    }
    findAllBookingsByUser(bookingsData){
    }


}


export default User;



/// SCRIPTS ALL API DATA > 