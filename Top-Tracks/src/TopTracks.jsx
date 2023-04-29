import { useState, useEffect } from "react";

export default function TopTracks() {
  const token =
    "BQDKWcL0of0qfOgqD0KY27mNzYrjOK-hnfFjxDoR-UQm-71uVPtzwBBi2lKyilr4lA_ic_05mQ60MhDZ05uMio4BljbbN_fmbb-ZrOOx3MJcRJTbETK_9MBBa9a_5Vlao8HqMO936S-no8tZNCouMXBtkC4ZGByEWgntu4RCmvUWR01anEQtM11YpRhNf7bRz4eFSpiG4SbQSAtA0gOOxnNu2SZ_SOxNTSjG10P_bBue-6L5iu5-48hBB5wA-F2-kZ3Ec4UBgbdCiVdLga5C0SjNFpIdVSMA2l5YViA6vC3qEcbOAOI2keYABbAWaZ6roZaaBkikCWWUfaxhZJhS0LFGju1zmRTk7X-fvGl9cwjcAT0";
  const [topTracks, setTopTracks] = useState([]);
  async function fetchWebApi(endpoint, method, body) {
    const res = await fetch(`https://api.spotify.com/${endpoint}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      method,
      body: JSON.stringify(body),
    });
    return await res.json();
  }

  async function getTopTracks() {
    return (
      await fetchWebApi("v1/me/top/tracks?time_range=short_term&limit=5", "GET")
    ).items;
  }

  useEffect(() => {
    async function fetchData() {
      const data = await getTopTracks();
      setTopTracks(data);
    }
    fetchData();
  }, []);

  return (
    <ol>
      {topTracks.map(({ name, artists }) => (
        <li key={name}>
          <div className="Song_list">
            <div className="Song_name">{name}</div>
            <span className="Artist_name">
              {artists.map((artist) => artist.name).join(", ")}
            </span>
          </div>
        </li>
      ))}
    </ol>
  );
}
