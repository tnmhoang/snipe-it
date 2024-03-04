
import axios from 'axios';
import {AppConfig} from '../AppConfig.ts';
// import AsyncStorage from '@react-native-community/async-storage';

export enum Method {
  GET = 'GET',
  PUT = 'PUT',
  POST = 'POST',
  PATCH = 'PATCH',
  DELETE = 'DELETE',
}

export const request = axios.create({
  baseURL: AppConfig.apiUrl,
});

request.interceptors.request.use(
 (config) => {
    const token =
      'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwianRpIjoiNjEzNGM2OWNjNmMzNDNmMzgwYmZiMGQ2ZmQwNGIzNjhiNjgzMTM4NTQwZGMzNDNkY2Q0Y2EyMzhiYjcyYWVmN2ZkYjM5N2ZlZGM0NGJiMGQiLCJpYXQiOjE3MDkzNzQ5MzQuNzY0OTg3LCJuYmYiOjE3MDkzNzQ5MzQuNzY0OTksImV4cCI6MjE4MjY3NDEzNC43MDg1MDYsInN1YiI6IjEiLCJzY29wZXMiOltdfQ.fOK_7nOBKIZzcis2aCTOhqU8xiaJ8srhmXw_TUh8g-Hlnyk3p7f4GPYD69et-0VLxtgu5e6n0cXQAQ-qVscbIDYisnMLx-I1N_pZzdeEWJPOKCbAcNWd4TroN__RHCPytzLwKmgCCWGpEkMVzYkh-R09RpTks3lwZToojEpHGmUGAP1AbmFfAojrFj275oMp00c25fRuvvxZDizR2pkHT8w-K1Zl9KuhZNIfyn_C3hbOPKJ6BhHHytuPMN_WrkLrYqetTL7z4Hp7u-TPLaEIzO9JarozH3Gn2cZqlf_znQMLXDW0zlu7v1Z2RdT16VXa2Vp-jD3gn3Rfi2p3tILwvOfmNqsvk5UtIpEvTijcBrC52pDuJJAZ4J-9PVhdCzCOPN0zcjDLjaCfCz5CrclgnVfllANQ-Kz4m2SQyZ9LOLrNFpEh1pKTD7jV_xUZ6xPtgGbZyY5dA86N8uVEt6dC9cDLlw140srL8I1-vcJqcMu13w6Y9XCBZbnqsvxzPsJ7q9c0IBajkbKWQG_MPSC46-bwnvddVGqZ0pGfZktDIxDmyyEVlVJoavykweN9uUDV5WlLR0rIDoVX0vrJT4teaZCO_BVP1x3JeAaD37c56hvbc-wqBlnugtJTiflZvGeBqzyNHbuLV8wACfP-5Mqg1fSGuwuzsMeaqOqtbInZosY';
    config.headers.Accept = 'application/json';
    config.headers['Content-Type'] = 'application/json';
    config.headers.Authorization = `Bearer ${token}`;
    return config;
  },
  error => Promise.reject(error),
);
