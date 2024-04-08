const fetchAllEvents = async ({ queryKey }) => {
  const apiRes = await fetch("https://raghu-clubs.onrender.com/all-events");

  if (!apiRes.ok) {
    console.log("Couldn't fetch /all-events");
  }

  return apiRes.json();
};

export default fetchAllEvents;
