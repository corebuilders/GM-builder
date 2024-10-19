import React, { useEffect, useState } from "react";
import axios from "axios";

const Graph = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.post(
          "https://api.studio.thegraph.com/query/75757/gmbuilders/version/latest",
          {
            query: `
            {
                userUpdateds(orderBy: name) {
                  name
                  interest
                  id
                  profileUrl
                  userAddress
                  username
                }
              }
            `,
          }
        );
        setData(response.data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <h1>Data from Subgraph</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
};

export default Graph;
