import { render, screen, fireEvent } from "@testing-library/react";
import BookingForm from "../components/BookingForm";

test("renders booking form", () => {
    render(<BookingForm />);
    expect(screen.getByLabelText(/date/i)).toBeInTheDocument();
});

test("shows validation errors when submitting empty form", () => {
    render(<BookingForm />);
    fireEvent.click(screen.getByRole("button", { name: /reserve/i }));

    // Hay 2 campos requeridos: date y time
    expect(screen.getAllByText("Required")).toHaveLength(2);

    // Y además el error de guests
    expect(screen.getByText(/Guests must be between 1 and 10/i)).toBeInTheDocument();
});
