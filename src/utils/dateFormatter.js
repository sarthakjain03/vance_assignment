export const formatDate = (dateString) => {
    const date = new Date(dateString);
  
    // Get the year, month, and day
    const year = date.getFullYear();
    // Months are 0 indexed, so add 1 to get the correct month
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const day = date.getDate().toString().padStart(2, '0');
  
    // Format the date as yyyy-mm-dd
    return `${year}-${month}-${day}`;
  };