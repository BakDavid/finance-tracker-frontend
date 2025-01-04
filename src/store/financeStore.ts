import { defineStore } from "pinia";

interface FinanceState {
    income: number;
    expenses: number;
    balance: number;
}

export const useFinanceStore = defineStore("finance", {
    state: (): FinanceState => ({
        income: 0,
        expenses: 0,
        balance: 0,
    }),

    actions: {
        updateIncome(newIncome: number) {
            this.income = newIncome;
            this.updateBalance();
        },
        updateExpenses(newExpenses: number) {
            this.expenses = newExpenses;
            this.updateBalance();
        },
        updateBalance() {
            this.balance = this.income - this.expenses;
        },
    },
});
