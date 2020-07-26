import Habits from './habits';

export const habitsResolvers = {
  Query: {
    async habits() {
      try {
        // load all habits
        const habits = await Habits.find();

        return habits;
      } catch (err) {
        console.error(err);
      }
    },
  },
};
