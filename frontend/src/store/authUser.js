import axios from "axios";
import toast from "react-hot-toast";
import { create } from "zustand";

// creaing hook

export const useAuthStore = create((set) => ({
    user: null,
    isSigningUp: false,
    signup: async(credentials) => { 
        set({isSigningUp: true})
        try {
            const response = await axios.post(" /api/v1/auth/signup", credentials)
            set({user:response.data.user, isSigningUp: false})
            toast.success("Account Created Successfully");
        } catch (error) {
            toast.error(error.response.data.message || "An error occured");
            set({isSigningUp: false, user:null})
        }
    },
    login: () => { },
    logout: () => { },

    authCheck: () => { },

}))