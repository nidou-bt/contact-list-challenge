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

export const addContact = async ({picture, ...body}: IContact & {picture:any}): Promise<IContact | undefined> => {
  let formData = new FormData();
  formData.append("name",body.name);
  formData.append("emailAddress", body.emailAddress);
  formData.append("phoneNumber", body.phoneNumber.toString());
  formData.append("contactImg", picture);

  try {
    const { data } = await axiosC.post("/api/contact", body);
    console.log('res', data)
    return data.data;
  } catch (err) {
    console.log(err);
  }
};
