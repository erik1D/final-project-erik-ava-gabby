import { createContext, useEffect, useState, useContext, Children } from "react";
import { supabase } from "../supabaseClient";

const AuthContext = createContext()

export const AuthContextProvider = ({children}) => {
    const [session, setSession] = useState(undefined);

    //Sign Up
    const signUpNewUser = async (email, password, firstName, lastName) => {
        try {
            const {data, error} = await supabase.auth.signUp({
                email: email,
                password: password,
                options: {
                    data: {
                        first_name: firstName,
                        last_name: lastName,
                    }
                }
            })

            if(error) {
                console.error("There was a problem signing up: ", error);
                return { success: false, error };
            }

            // If signup successful and we have user data, create/update profile
            if (data.user) {
                try {
                    const { error: profileError } = await supabase
                        .from('profiles')
                        .upsert({
                            id: data.user.id,
                            first_name: firstName,
                            last_name: lastName,
                            email: email,
                            updated_at: new Date().toISOString(),
                        })

                    if (profileError) {
                        console.error("Error creating profile:", profileError);
                        // Don't fail the signup if profile creation fails
                        // The user metadata will still contain the name info
                    }
                } catch (profileError) {
                    console.error("Profile creation failed:", profileError);
                    // Continue with signup success even if profile creation fails
                }
            }

            return { success: true, data };
        } catch (error) {
            console.error("Unexpected signup error:", error);
            return { success: false, error: { message: "An unexpected error occurred" } };
        }
    };

    //Sign In
    const signInUser = async (email, password) => {
        try {
            const {data, error} = await supabase.auth.signInWithPassword({
                email: email,
                password: password,
            });
            
            if (error) {
                console.error('sign in error occurred: ', error);
                return {success: false, error: error.message };
            }
            
            console.log("sign-in success: ", data);
            return { success: true, data };
        } catch(error) {
            console.error("an error occurred: ", error);
            return { success: false, error: "An unexpected error occurred" };
        }
    };

    useEffect(() => {
        supabase.auth.getSession().then(({data: {session}}) => {
            setSession(session);
        });

        supabase.auth.onAuthStateChange((_event, session) => {
            setSession(session);
        })
    },[])


    //sign out
    const signOut = () => {
        const {error} = supabase.auth.signOut();
        if(error) {
            console.error("there was an error: ", error);
        }
    }
    return(
        <AuthContext.Provider value={{session, signUpNewUser, signInUser, signOut}}>
            {children}
        </AuthContext.Provider>
    )
}


export const UserAuth = () => {
    return useContext(AuthContext)
}