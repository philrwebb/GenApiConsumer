/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from 'axios';
import { PUBLIC_API_BASE_URL } from '$env/static/public';
const api = axios.create({ baseURL: PUBLIC_API_BASE_URL });

export const getPeople = () => api.get('/Person');
export const getPersonById = (id: number) => api.get(`/Person/${id}`);
export const createPerson = (data: any) => api.post('/Person', data);
export const updatePerson = (id: number, data: any) => api.put(`/Person/${id}`, data);
export const deletePerson = (id: number) => api.delete(`/Person/${id}`);

export const getEmployees = () => api.get('/Employee');
export const getEmployeeById = (id: number) => api.get(`/Employee/${id}`);
export const createEmployee = (data: any) => api.post('/Employee', data);
export const updateEmployee = (id: number, data: any) => api.put(`/Employee/${id}`, data);
export const deleteEmployee = (id: number) => api.delete(`/Employee/${id}`);

export const getAddresses = () => api.get('/Address');
export const getAddressById = (id: number) => api.get(`/Address/${id}`);
export const createAddress = (data: any) => api.post('/Address', data);
export const updateAddress = (id: number, data: any) => api.put(`/Address/${id}`, data);
export const deleteAddress = (id: number) => api.delete(`/Address/${id}`);

export const getContacts = () => api.get('/Contact');
export const getContactById = (id: number) => api.get(`/Contact/${id}`);
export const createContact = (data: any) => api.post('/Contact', data);
export const updateContact = (id: number, data: any) => api.put(`/Contact/${id}`, data);
export const deleteContact = (id: number) => api.delete(`/Contact/${id}`);

export const getGenderTypes = () => api.get('/GenderType');
export const getGenderTypeById = (id: number) => api.get(`/GenderType/${id}`);
export const createGenderType = (data: any) => api.post('/GenderType', data);
export const updateGenderType = (id: number, data: any) => api.put(`/GenderType/${id}`, data);
export const deleteGenderType = (id: number) => api.delete(`/GenderType/${id}`);

export const getAddressTypes = () => api.get('/AddressType');
export const getAddressTypeById = (id: number) => api.get(`/AddressType/${id}`);
export const createAddressType = (data: any) => api.post('/AddressType', data);
export const updateAddressType = (id: number, data: any) => api.put(`/AddressType/${id}`, data);
export const deleteAddressType = (id: number) => api.delete(`/AddressType/${id}`);

export const getContactTypes = () => api.get('/ContactType');
export const getContactTypeById = (id: number) => api.get(`/ContactType/${id}`);
export const createContactType = (data: any) => api.post('/ContactType', data);
export const updateContactType = (id: number, data: any) => api.put(`/ContactType/${id}`, data);
export const deleteContactType = (id: number) => api.delete(`/ContactType/${id}`);

export const getDepartments = () => api.get('/Department');
export const getDepartmentById = (id: number) => api.get(`/Department/${id}`);
export const createDepartment = (data: any) => api.post('/Department', data);
export const updateDepartment = (id: number, data: any) => api.put(`/Department/${id}`, data);
export const deleteDepartment = (id: number) => api.delete(`/Department/${id}`);

export const getAccounts = () => api.get('/Account');
export const getAccountById = (id: number) => api.get(`/Account/${id}`);
export const createAccount = (data: any) => api.post('/Account', data);
export const updateAccount = (id: number, data: any) => api.put(`/Account/${id}`, data);
export const deleteAccount = (id: number) => api.delete(`/Account/${id}`);
