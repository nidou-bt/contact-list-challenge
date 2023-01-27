import { IContact } from "../types/type";
import axios from "axios";
import path from "path";

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

export const deleteContact = async ({
  id,
}: {
  id: number;
}): Promise<IContact | undefined> => {
  try {
    const { data } = await axiosC.delete(`/api/contact/${id}`);
    return data.data;
  } catch (err) {
    console.log(err);
  }
};

export const addContact = async ({
  file,
  ...body
}: IContact & { file?: File }): Promise<IContact | undefined> => {
  let formData = new FormData();
  formData.append("name", body.name);
  formData.append("emailAddress", body.emailAddress);
  formData.append("phoneNumber", body.phoneNumber.toString());
  if (!!file) {
    formData.append("contactImg", file);
  }
  console.log(Object.fromEntries(formData));

  try {
    const { data } = await axiosC.post("/api/contact", formData);
    return data.data;
  } catch (err) {
    console.log(err);
  }
};
export const updateContact = async ({
  file,
  ...body
}: IContact & { file?: File }): Promise<IContact | undefined> => {
  let formData = new FormData();
  if (body.name) {
    formData.append("name", body.name);
  }
  if (body.emailAddress) {
    formData.append("emailAddress", body.emailAddress);
  }
  if (body.phoneNumber) {
    formData.append("phoneNumber", body.phoneNumber.toString());
  }
  if (file) {
    formData.append("contactImg", file)
  } else if (body.picture === "") {
    formData.append("picture", "")
  }
  // console.log(Object.fromEntries(formData));
  try {
    const { data } = await axiosC.put(`/api/contact/${body.id}`, formData);
    return data.data;
  } catch (err) {
    console.log(err);
  }
};
