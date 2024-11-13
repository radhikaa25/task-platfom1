export const signUp = (req, res) => {
    // Logic for user sign-up
    res.status(201).json({ message: 'User signed up' });
  };
  
  export const login = (req, res) => {
    // Logic for user login
    res.status(200).json({ message: 'User logged in' });
  };
  
  export const logout = (req, res) => {
    // Logic for user logout
    res.status(200).json({ message: 'User logged out' });
  };
  