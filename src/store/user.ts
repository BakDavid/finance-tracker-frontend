import { defineStore } from "pinia";

export const useUserStore = defineStore("user", {
    state: () => ({
        isLoggedIn: false,
        user: null as { name: string; email: string } | null,
    }),
    actions: {
        login(user: { name: string; email: string }) {
            this.isLoggedIn = true;
            this.user = user;
        },
        logout() {
            this.isLoggedIn = false;
            this.user = null;
        },
    },
});
