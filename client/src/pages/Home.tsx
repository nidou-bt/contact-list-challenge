import React from "react";
import { getContactList } from "../api/contactApi";
import useFetchQuery from "../hooks/useFetchQuery";

const Home = () => {
  const { data, isError, isLoading } = useFetchQuery({
    category: "contact",
    fetchApi: getContactList,
  });

  return <div>
    {
      !isError && !isLoading && data?.map((item, i) => {
        return <p key={item.id}>{item.name} </p>
      })
    }
  </div>;
};

export default Home;
