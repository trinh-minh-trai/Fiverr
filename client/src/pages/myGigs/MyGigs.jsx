import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./MyGigs.scss";
import getCurrentUser from "../../utils/getCurrentUser";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import newRequest from "../../utils/newRequest";

function MyGigs() {
  const [currentUser, setCurrentUser] = useState(null);
  const queryClient = useQueryClient();

  useEffect(() => {
    const user = getCurrentUser();
    setCurrentUser(user);
    console.log("Current User:", user); // Kiểm tra currentUser
  }, []);

  const { isLoading, error, data } = useQuery({
    queryKey: ["myGigs", currentUser],
    queryFn: () => {
      if (!currentUser) return Promise.resolve([]);
      const url = `/gigs?userId=${currentUser._id}`;
      console.log("Request URL:", url); // In ra URL
      return newRequest.get(url).then((res) => {
        console.log("API response:", res); // Kiểm tra toàn bộ phản hồi từ API
        console.log("Data:", res.data); // Kiểm tra dữ liệu thực tế
        return res.data;
      });
    },
    enabled: !!currentUser, // Chỉ thực hiện query khi currentUser đã được thiết lập
  });

  const mutation = useMutation({
    mutationFn: (id) => {
      return newRequest.delete(`/gigs/${id}`);
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["myGigs"]);
    },
  });

  const handleDelete = (id) => {
    mutation.mutate(id);
  };

  return (
    <div className="myGigs">
      {isLoading ? (
        "loading"
      ) : error ? (
        "error"
      ) : (
        <div className="container">
          <div className="title">
            <h1>Gigs</h1>
            {currentUser?.isSeller && (
              <Link to="/add">
                <button>Add New Gig</button>
              </Link>
            )}
          </div>
          <table>
            <thead>
              <tr>
                <th>Image</th>
                <th>Title</th>
                <th>Price</th>
                <th>Sales</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {data && data.length === 0 ? (
                <tr>
                  <td colSpan="5">No gigs found.</td>
                </tr>
              ) : (
                data && data.map((gig) => (
                  <tr key={gig._id}>
                    <td>
                      <img className="image" src={gig.cover} alt="" />
                    </td>
                    <td>{gig.title}</td>
                    <td>{gig.price}</td>
                    <td>{gig.sales}</td>
                    <td>
                      <img
                        className="delete"
                        src="./img/delete.png"
                        alt=""
                        onClick={() => handleDelete(gig._id)}
                      />
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default MyGigs;
