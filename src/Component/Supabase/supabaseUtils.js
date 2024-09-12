// import { supabase } from "./supabaseClient";

// export const checkUserExists = async (email) => {
//   try {
//     const encodedEmail = encodeURIComponent(email);
//     const { data, error } = await supabase
//       .from("users")
//       .select("id")
//       .eq("email", email)
//       .single();

//     if (error) {
//       if (error.code === "PGRST116") {
//         // No match found, user doesn't exist
//         return false;
//       }
//       console.error("Error checking user existence:", error);
//       return null; // Return null to indicate an error occurred
//     }

//     return !!data;
//   } catch (error) {
//     console.error("Unexpected error checking user existence:", error);
//     return null; // Return null to indicate an error occurred
//   }
// };

// export const insertUser = async (userData) => {
//   try {
//     const { error } = await supabase.from("users").insert([userData]);

//     if (error) {
//       console.error("Error inserting user data:", error);
//       return false;
//     }

//     return true;
//   } catch (error) {
//     console.error("Unexpected error inserting user data:", error);
//     return false;
//   }
// };
