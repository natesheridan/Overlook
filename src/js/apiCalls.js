let apiCalls = {
    getAllCustomers(){
        return fetch('https://overlookbe.herokuapp.com/api/v1/customers')
        .then(response => response.json())
        .then(data => data);
    },
    getSingleCustomer(id){
        return fetch(`https://overlookbe.herokuapp.com/api/v1/customers/${id}`)
        .then(response => response.json())
        .then(data => data);
    },
    getAllRooms(){
        return fetch('https://overlookbe.herokuapp.com/api/v1/rooms')
        .then(response => response.json())
        .then(data => data)
    },
    getAllBookings(){
        return fetch('https://overlookbe.herokuapp.com/api/v1/bookings')
        .then(response => response.json())
        .then(data => data)
    },
    postNewBooking(obj){
        return fetch('https://overlookbe.herokuapp.com/api/v1/bookings',
        {
          method: 'POST',
          body: JSON.stringify(obj),
          //obj: { "userID": 48, "date": "2019/09/23", "roomNumber": 4 }
          headers: {
              "Content-Type":"application/json"
          },
        })
        .then(response => response.json())
        .then(data => data)
    },
    deleteSingleBooking(id){
        return fetch(`https://overlookbe.herokuapp.com/api/v1/bookings/${id}`, 
        {
            method: 'DELETE',
            headers: {'Content-Type':'application/json'}
        })
    },
}

export default apiCalls;




