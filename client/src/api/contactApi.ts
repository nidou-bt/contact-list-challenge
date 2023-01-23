import { IContact } from "@/types/type";
import axios from "axios";

const axiosC = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
});

export const getContactList = async (): Promise<IContact[] | undefined> => {
  try {
    const { data } = await axiosC.get("/api/contact");
    return data.data;
  } catch (err) {
    console.log(err);
  }
};
