const adminLogin = async (password: string): Promise<Response> => {
   return fetch("https://api.libros.codigomate.com/api/auth/token", {
      method: "POST",
      headers: {
         "Content-Type": "application/json",
      },
      body: JSON.stringify({ password }),
   });
};

export { adminLogin };
