export async function fetchProtectedData(
   url: string,
   options?: RequestInit
): Promise<any> {
   const token = localStorage.getItem("token");

   if (!token) {
      throw new Error("Not authenticated");
   }

   const fetchOptions = {
      ...options,
      headers: {
         ...options?.headers,
         Authorization: `Bearer ${token}`,
      },
   };

   try {
      const response = await fetch(url, fetchOptions);

      if (response.status === 401) {
         localStorage.removeItem("token");
         throw new Error("Unauthorized");
      }

      if (!response.ok) {
         throw new Error("Request failed");
      }

      return response.json();
   } catch (error) {
      if ((error as Error).message === "Unauthorized") {
         // Here you might navigate to login page
      }

      throw error;
   }
}
