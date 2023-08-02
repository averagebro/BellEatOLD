document.addEventListener("DOMContentLoaded", () => {
  const seats = document.querySelectorAll(".seat");
  const numSeatsElement = document.getElementById("numSeats");
  const totalAmountElement = document.getElementById("totalAmount");
  const resetButton = document.getElementById("resetButton");
  // Price map for each deck
  const deckPrices = {
    lower: 120,
    upper: 90,
  };
  let selectedSeats = [];

  seats.forEach((seat) => {
    seat.addEventListener("click", () => {
      seat.classList.toggle("selected");
      const deck = seat.closest(".deck").classList.contains("lower")
        ? "lower"
        : "upper";
      const seatNumber = seat.textContent;

      if (seat.classList.contains("selected")) {
        selectedSeats.push({ deck, seatNumber });
      } else {
        selectedSeats = selectedSeats.filter(
          (item) => item.seatNumber !== seatNumber || item.deck !== deck
        );
      }

      updateTotalPrice();
    });
  });

  resetButton.addEventListener("click", () => {
    seats.forEach((seat) => seat.classList.remove("selected"));
    selectedSeats = [];
    updateTotalPrice();
  });

  function updateTotalPrice() {
    const totalPrice = selectedSeats.reduce(
      (total, seat) => total + deckPrices[seat.deck],
      0
    );
    const numSeats = selectedSeats.length;

    numSeatsElement.textContent = numSeats;
    totalAmountElement.textContent = totalPrice;
  }

  seats.forEach((seat) => {
    const deck = seat.closest(".deck").classList.contains("lower")
      ? "lower"
      : "upper";
    const price = deck === "lower" ? "₹120" : "₹90";
    seat.setAttribute("data-bs-toggle", "tooltip");
    seat.setAttribute("data-bs-placement", "top");
    seat.setAttribute("title", price);
  });

  // Initialize Bootstrap tooltips
  const tooltipTriggerList = [].slice.call(
    document.querySelectorAll('[data-bs-toggle="tooltip"]')
  );
  tooltipTriggerList.map(
    (tooltipTriggerEl) => new bootstrap.Tooltip(tooltipTriggerEl)
  );
});
