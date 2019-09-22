import axios from 'axios';
import Cookies from 'js-cookie';

import {getCookieFromReq} from "../helpers/utils";

const setAuthHeader = (req) => {
  const token = req ? getCookieFromReq(req, 'jwt') : Cookies.getJSON('jwt');

  if (token) {
    return {headers: {'authorization': `Bearer ${token}`}}
  }
};

export const getSecretData = async (req) => {
  const url = 'http://localhost:3000/api/v1/secret';
  return await axios.get(url, setAuthHeader(req)).then(response => response.data);
};

export const getPortfolios = async (req) => {
  return await axios.get('http://localhost:3000/api/v1/portfolios', setAuthHeader(req)).then(response => response);
};

