// Simple local authentication utilities for Career Portfolio Central
// Note: In production, this would be handled by a secure backend with proper encryption

interface UserCredentials {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  registeredAt: string;
}

const STORAGE_KEY = 'cpc_registered_users';

export const authUtils = {
  // Store user credentials when they signup
  registerUser: (userData: {
    email: string;
    password: string;
    firstName: string;
    lastName: string;
  }): void => {
    try {
      const existingUsers = authUtils.getRegisteredUsers();
      
      // Check if user already exists
      const userExists = existingUsers.some(user => user.email === userData.email);
      if (userExists) {
        return; // User already registered
      }
      
      // Add new user
      const newUser: UserCredentials = {
        ...userData,
        registeredAt: new Date().toISOString(),
      };
      
      const updatedUsers = [...existingUsers, newUser];
      localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedUsers));
      
      console.log('User registered successfully:', userData.email);
    } catch (error) {
      console.error('Error registering user:', error);
    }
  },

  // Get all registered users from localStorage
  getRegisteredUsers: (): UserCredentials[] => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      return stored ? JSON.parse(stored) : [];
    } catch (error) {
      console.error('Error retrieving registered users:', error);
      return [];
    }
  },

  // Check if user credentials match a registered user
  validateCredentials: (email: string, password: string): boolean => {
    try {
      const registeredUsers = authUtils.getRegisteredUsers();
      return registeredUsers.some(
        user => user.email === email && user.password === password
      );
    } catch (error) {
      console.error('Error validating credentials:', error);
      return false;
    }
  },

  // Check if email is registered (regardless of password)
  isEmailRegistered: (email: string): boolean => {
    try {
      const registeredUsers = authUtils.getRegisteredUsers();
      return registeredUsers.some(user => user.email === email);
    } catch (error) {
      console.error('Error checking email registration:', error);
      return false;
    }
  },

  // Get user info by email
  getUserByEmail: (email: string): UserCredentials | null => {
    try {
      const registeredUsers = authUtils.getRegisteredUsers();
      return registeredUsers.find(user => user.email === email) || null;
    } catch (error) {
      console.error('Error getting user by email:', error);
      return null;
    }
  },

  // Clear all registered users (for development/testing)
  clearAllUsers: (): void => {
    try {
      localStorage.removeItem(STORAGE_KEY);
      console.log('All registered users cleared');
    } catch (error) {
      console.error('Error clearing users:', error);
    }
  },
};

export default authUtils;
