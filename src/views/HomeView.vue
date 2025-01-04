<template>
    <div>
        <h1>Personal Finance Tracker</h1>
        <div>
            <label>Income: </label>
            <input type="number" v-model="income" @input="updateIncome" />
        </div>
        <div>
            <label>Expenses: </label>
            <input type="number" v-model="expenses" @input="updateExpenses" />
        </div>
        <div>
            <p>Balance: {{ balance }}</p>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, computed } from "vue";
import { useFinanceStore } from "@/store/financeStore";

export default defineComponent({
    name: "HomeView",

    setup() {
        const financeStore = useFinanceStore();

        // Bind store state to component
        const income = computed(() => financeStore.income);
        const expenses = computed(() => financeStore.expenses);
        const balance = computed(() => financeStore.balance);

        // Update store values
        const updateIncome = (event: Event) => {
            financeStore.updateIncome(
                Number((event.target as HTMLInputElement).value)
            );
        };
        const updateExpenses = (event: Event) => {
            financeStore.updateExpenses(
                Number((event.target as HTMLInputElement).value)
            );
        };

        return {
            income,
            expenses,
            balance,
            updateIncome,
            updateExpenses,
        };
    },
});
</script>

<style scoped>
/* Styles for home view */
</style>
