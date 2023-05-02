/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";

export default function TopTracks({ token }) {
  const [topTracks, setTopTracks] = useState([]);

  useEffect(() => {
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
    async function fetchData() {
      const data = await getTopTracks();
      setTopTracks(data);
    }
    async function getTopTracks() {
      return (
        await fetchWebApi(
          "v1/me/top/tracks?time_range=short_term&limit=5",
          "GET"
        )
      ).items;
    }
    fetchData();
  }, [token]);

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
