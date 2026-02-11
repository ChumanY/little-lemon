import { useState } from "react";

export default function BookingForm() {
    const [form, setForm] = useState({
        date: "",
        time: "",
        guests: "",
        occasion: ""
    });

    const [errors, setErrors] = useState({});

    function validate() {
        const e = {};
        if (!form.date) e.date = "Required";
        if (!form.time) e.time = "Required";
        if (!form.guests || form.guests < 1 || form.guests > 10)
            e.guests = "Guests must be between 1 and 10";
        return e;
    }

    function handleSubmit(e) {
        e.preventDefault();
        const validationErrors = validate();
        setErrors(validationErrors);

        if (Object.keys(validationErrors).length === 0) {
            alert("Booking successful!");
        }
    }

    function handleChange(e) {
        setForm({ ...form, [e.target.name]: e.target.value });
    }

    return (
        <form onSubmit={handleSubmit} aria-label="Booking Form">
            <label htmlFor="date">Date</label>
            <input
                id="date"
                name="date"
                type="date"
                value={form.date}
                onChange={handleChange}
                aria-invalid={!!errors.date}
            />
            {errors.date && <span>{errors.date}</span>}

            <label htmlFor="time">Time</label>
            <input
                id="time"
                name="time"
                type="time"
                value={form.time}
                onChange={handleChange}
            />
            {errors.time && <span>{errors.time}</span>}

            <label htmlFor="guests">Guests</label>
            <input
                id="guests"
                name="guests"
                type="number"
                value={form.guests}
                onChange={handleChange}
            />
            {errors.guests && <span>{errors.guests}</span>}

            <label htmlFor="occasion">Occasion</label>
            <select name="occasion" onChange={handleChange}>
                <option value="">Select</option>
                <option value="Birthday">Birthday</option>
                <option value="Anniversary">Anniversary</option>
            </select>

            <button type="submit">Reserve</button>
        </form>
    );
}
