/* eslint-disable @typescript-eslint/no-empty-object-type */
// src/lib/types.ts

export interface Person
{
  id: number;
  active?: boolean;
  givenNames: string;
  lastName: string;
  dob: string;
  GenderTypeid: number;
}
export interface Employee
{
  id: number;
  active?: boolean;
  givenNames: string;
  lastName: string;
  dob: string;
  GenderTypeid: number;
  Departmentid: number;
}
export interface Address
{
  id: number;
  active?: boolean;
  addressLine1: string;
  addressLine2: string;
  addressLine3: string;
  suburb: string;
  postcode: string;
  state: string;
  AddressTypeid: number;
}
export interface Contact
{
  id: number;
  active?: boolean;
  details: string;
  ContactTypeid: number;
}
export interface GenderType
{
  id: number;
  active?: boolean;
  effFrom: string;
  effTo: string;
  typeShortDescription: string;
  typeLongDescription: string;
  code: string;
}
export interface AddressType
{
  id: number;
  active?: boolean;
  effFrom: string;
  effTo: string;
  typeShortDescription: string;
  typeLongDescription: string;
  code: string;
}
export interface ContactType
{
  id: number;
  active?: boolean;
  effFrom: string;
  effTo: string;
  typeShortDescription: string;
  typeLongDescription: string;
  code: string;
}
export interface Department
{
  id: number;
  active?: boolean;
  departmentName: string;
}
export interface Account
{
  id: number;
  active?: boolean;
  effFrom: string;
  effTo: string;
  Personid: number;
}
