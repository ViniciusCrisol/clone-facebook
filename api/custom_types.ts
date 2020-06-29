declare namespace Express {
  interface Request {
    userId: number;
    connectedUsers: any;
    io: any;
  }
}
