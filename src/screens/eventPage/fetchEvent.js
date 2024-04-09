const fetchEvent = async ({ queryKey }) => {
  const id = queryKey[1];
  const apiRes = await fetch(`https://raghu-clubs.onrender.com/event/${id}`);

  if (!apiRes.ok) {
    console.log(`Couldn't fetch event/${id}`);
  }

  return apiRes.json();
};

export default fetchEvent;
