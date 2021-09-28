import {getAllCustomers, getAllBookings, getSingleCustomer, getAllRooms, postNewBooking, deleteSingleBooking} from '../apiCalls';



class User{
    constructor(id, name = "nullName"){
        this.id = id;
        this.name = name;
        this.bookings;
        this.totalSpent;
    };


}


export default User;



/// SCRIPTS ALL API DATA > 