import React, { createContext, useContext, useState, useEffect } from 'react';

interface AuthContextType {
  isAuthenticated: boolean;
  login: (email: string, password: string) => Promise<boolean>;
  logout: () => void;
  user: any | null;
}

// تعريف المستخدمين المسموح لهم بالدخول
const VALID_USERS = [
  { username: 'qusei', password: 'qusei123', firstName: 'Qusei', lastName: 'User' },
  { username: 'rana', password: 'rana1234', firstName: 'Rana', lastName: 'User' }
];

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [user, setUser] = useState<any | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // التحقق من حالة تسجيل الدخول عند تحميل التطبيق
    const checkAuth = async () => {
      const auth = localStorage.getItem('isAuthenticated') === 'true';
      setIsAuthenticated(auth);
      
      if (auth) {
        // استرجاع بيانات المستخدم من التخزين المحلي
        const savedUser = localStorage.getItem('user');
        if (savedUser) {
          setUser(JSON.parse(savedUser));
        }
      }
      
      setIsLoading(false);
    };
    
    checkAuth();
  }, []);

  const login = async (username: string, password: string): Promise<boolean> => {
    // التحقق من صحة بيانات المستخدم
    const foundUser = VALID_USERS.find(
      user => user.username === username && user.password === password
    );
    
    if (foundUser) {
      // تخزين حالة تسجيل الدخول وبيانات المستخدم
      const userData = {
        id: username === 'qusei' ? '1' : '2',
        username: foundUser.username,
        firstName: foundUser.firstName,
        lastName: foundUser.lastName,
        membershipTier: 'premium'
      };
      
      localStorage.setItem('isAuthenticated', 'true');
      localStorage.setItem('user', JSON.stringify(userData));
      
      setIsAuthenticated(true);
      setUser(userData);
      return true;
    }
    
    return false;
  };

  const logout = () => {
    localStorage.removeItem('isAuthenticated');
    localStorage.removeItem('user');
    setIsAuthenticated(false);
    setUser(null);
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout, user }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within AuthProvider');
  }
  return context;
};