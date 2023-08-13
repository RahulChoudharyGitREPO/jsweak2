function calculateDaysUntilEvent(eventStartDate) {
    const currentDate = new Date();
    const startDate = new Date(eventStartDate);

    // Calculate the time difference in milliseconds
    const timeDifference = startDate - currentDate;

    // Convert milliseconds to days
    const daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

    return daysDifference;
}

// Example usage
const eventStartDate = "2023-09-01"; // Replace with the actual event start date in YYYY-MM-DD format
const daysUntilEvent = calculateDaysUntilEvent(eventStartDate);

console.log(`Days until the event: ${daysUntilEvent}`);
