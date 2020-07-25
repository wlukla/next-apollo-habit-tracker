export const habitsResolvers = {
  Query: {
    async habits() {
      console.log('request habits');

      return [{ _id: '1111', name: 'Walk the dog' }];
    },
  },
};
