import React from "react";
import { getContactList } from "api/contactApi";
import useFetchQuery from "hooks/useFetchQuery";
import ContactCard from "components/home/ContactCard";

const Home = () => {
  const { data, isError, isLoading } = useFetchQuery({
    category: "contact",
    fetchApi: getContactList,
  });

  return (
    <div className="col-start-2 row-start-3 border-[1px] border-black-60">
      <div className="main_list">
        {!isError &&
          !isLoading &&
          data?.map((item) => {
            return <ContactCard {...item} key={item.id} />;
          })}
      </div>
    </div>
  );
};

export default Home;
