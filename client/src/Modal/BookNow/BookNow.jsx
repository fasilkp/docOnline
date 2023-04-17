import React, { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'
import './BookNow.css'
import Swal from 'sweetalert2'
function BookNow({ daysAvailable, doctor, setShowBookNow }) {
    const [bookDate, setBookDate] = useState('')
    const [bookTimeSlot, setBookTimeSlot] = useState('')
    const [bookingTime, setBookingTime] = useState("")
    const [times, setTimes] = useState([])
    const [name, setName] = useState("")
    const [age, setAge] = useState("")
    useEffect(() => {

    }, [])
    const handleDateChange = (e, index) => {
        setBookDate(e.target.value)
        // console.log(daysAvailable[index].schedule)
        setTimes([...daysAvailable[index].schedule])
        setBookTimeSlot("")
        setBookingTime("")
    }
    const handleTimeSlot = (e, data) => {
        // console.log(e.target.value)
        setBookTimeSlot(e.target.value)
        setBookingTime(data.time)
    }
    const handleBooking = async () => {
        const { data } = await axios.post("/user/payment", {fees:doctor.fees});
        console.log(data)
        if (!data.err) {
            handleRazorPay(data.order);
        }
    }
    const handleRazorPay = (order) => {
        const options = {
            key: "rzp_test_3LXlQwLTdi2Ojz",
            amount: order.amount,
            currency: order.currency,
            name: "Acme Corp",
            description: "Test Transaction",
            order_id: order.id,
            handler: async (response) => {
                const { data } = await axios.post("/user/payment/verify", { response, bookDate, bookTimeSlot,bookingTime,name, age, doctorId: doctor._id, hospitalId: doctor.hospitalId, fees:doctor.fees });
                console.log(data)
                if(data.err){
                    Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: data.message,
                    })
                }else{
                    Swal.fire(
                        'Success!',
                        'Successfully Booked',
                        'success'
                      )
                }
                setShowBookNow(false)
            }
        }
        var rzp1 = new window.Razorpay(options);
        rzp1.open();
        rzp1.on('payment.failed', (response) => {
            console.log(response.error.description)
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: response.error.description,
            })
        })

    }
    const validateForm = () => {
        if (bookDate === "" || bookTimeSlot === "") {
            return true;
        }
        return false;
    }

    useEffect(() => {
        (async function () {

        })()
    }, [])
    console.log(bookDate, bookTimeSlot)

    return (
        <div className="book-now-main">
            <div className="booking-container">
                <div className="booking-row head">
                    <h4>Book Now</h4>

                </div>
                <div className="booking-row">
                    <div className="booking-row-head">
                        Appointment available
                    </div>
                    <div className="booking-row-days">
                        {
                            daysAvailable.map((item, index) => {
                                return <div className="booking-row-day" key={index}>
                                    <input type="radio" id={"d" + index} name='day' value={item.date} onChange={(e) => handleDateChange(e, index)} required />
                                    <label htmlFor={"d" + index}>{new Date(item.date).toLocaleDateString()}</label>
                                </div>
                            })
                        }
                    </div>

                </div>

                <div className="booking-row">
                    <div className="booking-row-head">
                        Time
                    </div>
                    <div className="booking-row-days">
                        {
                            times.map((item, index) => {
                                return <div className="booking-row-day">
                                    <input type="radio" onChange={(e) => handleTimeSlot(e, item)} value={new Date(item.startDate).toLocaleTimeString('en-US') + " - " + new Date(item.endDate).toLocaleTimeString('en-US')} id={"t" + index}
                                     checked={new Date(item.startDate).toLocaleTimeString('en-US') + " - " + new Date(item.endDate).toLocaleTimeString('en-US')==bookTimeSlot}
                                     name='time' required />
                                    <label htmlFor={"t" + index}>
                                        {
                                            new Date(item.startDate).toLocaleTimeString('en-US')
                                            + " - " +
                                            new Date(item.endDate).toLocaleTimeString('en-US')
                                        }
                                    </label>
                                </div>
                            })
                        }

                    </div>

                </div>
                <div className="booking-row">
                    <div className="booking-row-head">
                        Fee
                    </div>
                    <div className="booking-row-days">
                        ₹{doctor.fees}
                    </div>

                </div>
                {
                    bookingTime &&
                    <div className="booking-row">
                        <div className="booking-row-head">
                            Booking Time
                        </div>
                        <div className="booking-row-days">
                            {new Date(bookingTime).toLocaleTimeString()}
                        </div>

                    </div>
                }
                <div className="booking-row">
                <TextField id="outlined-basic" value={name} onChange={(e) => setName(e.target.value)} label="Name" type="text" variant="outlined" fullWidth className='input' />
                </div>
                <div className="booking-row">
                <TextField id="outlined-basic" value={age} onChange={(e) => setAge(e.target.value)} label="Name" type="number" variant="outlined" fullWidth className='input' />
                </div>

                <div className="btn">
                    <button onClick={() => setShowBookNow(false)}>Cancel</button>
                    <button onClick={handleBooking} disabled={validateForm()} >Book Now</button>

                </div>
            </div>
        </div>
    )
}

export default BookNow