import Habits from './habits';

export const habitsMutations = {
  Mutation: {
    async addHabit(_, { habit }) {
      try {
        const newHabit = Habits.create({ ...habit });

        return newHabit;
      } catch (err) {
        console.error(err);
      }
    },
  },
};
