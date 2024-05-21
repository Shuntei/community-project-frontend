import { io } from 'socket.io-client';
import { API_SERVER } from '@/components/config/api-path';

export const socket = io(API_SERVER);

