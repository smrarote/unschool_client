type UserStore = {
  token: string;
  user_id: string;
  user_name: string;
  createdAt: string;
};
export default class StorageManager {
  constructor() {}
  public setUser(data: UserStore): void {
    localStorage.setItem('user', JSON.stringify(data));
  }
  public getUser(): UserStore | null {
    const userData = localStorage.getItem('user');
    if (!userData) {
      return null;
    }
    try {
      const user = JSON.parse(userData);
      return user as UserStore;
    } catch (error: unknown) {
      console.log('Failed to parse data');
    }
    return null;
  }
  public getToken(): string | null {
    try {
      const user = this.getUser();
      if (user) {
        return user.token;
      }
    } catch (error: unknown) {
      console.log('failed to retrive token');
    }
    return null;
  }
}
