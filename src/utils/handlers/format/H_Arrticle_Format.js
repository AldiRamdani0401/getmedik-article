const H_Article_Format = {
  date: (dateString) => {
    const monthNames = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];

    const daysOfWeek = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];

    // Parse input date
    const date = new Date(dateString);

    // Extract day, month, and other parts
    const dayOfWeek = date.getDay();
    const day = date.getDate();
    const month = date.getMonth();
    const year = date.getFullYear();
    const hours = date.getHours();
    const minutes = date.getMinutes();

    // Format time
    const formattedTime = `${hours.toString().padStart(2, "0")}:${minutes
      .toString()
      .padStart(2, "0")} WIB`;

    // Construct final string
    return `${daysOfWeek[dayOfWeek]}, ${day} ${monthNames[month]} ${year} ${formattedTime}`;
  },
  status_verification: (value) => {
    const status = {
      1: { status: "ACCEPTED", color: "text-green-600 font-semibold" },
      2: { status: "PENDING", color: "text-yellow-600 font-semibold" },
      3: { status: "REJECTED", color: "text-red-600 font-semibold" },
      4: { status: "REVISION", color: "text-blue-600 font-semibold" },
    };
    return status[value] ?? false;
  },
  status_article: (value) => {
    const status = {
      1: { status: "PUBLISHED", color: "text-green-600 font-semibold" },
      2: { status: "UNPUBLISHED", color: "text-yellow-600 font-semibold" },
      3: { status: "BANNED", color: "text-red-600 font-semibold" },
      4: { status: "DELETED", color: "text-gray-600 font-semibold" },
    };
    return status[value] ?? false;
  },
  object_key: (value) => {
    return value
      .replace(/_/g, " ")
      .replace(/\b\w/g, (char) => char.toUpperCase());
  },
};

export default H_Article_Format;
