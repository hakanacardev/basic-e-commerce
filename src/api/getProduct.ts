import { useQuery, useMutation } from '@tanstack/react-query';
import axios from 'axios';


export const getProduct = () => axios.get(`https://5fc9346b2af77700165ae514.mockapi.io/products`)
