import { IContact } from "../types/type";
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

export const deleteContact = async ({id}: {id: number}): Promise<IContact | undefined> => {
  try {
    const { data } = await axiosC.delete(`/api/contact/${id}`);
    return data.data;
  } catch (err) {
    console.log(err);
  }
};

export const addContact = async (body: IContact): Promise<IContact | undefined> => {
  try {
    const { data } = await axiosC.post("/api/contact", body);
    return data.data;
  } catch (err) {
    console.log(err);
  }
};
