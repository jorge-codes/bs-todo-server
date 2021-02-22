module.exports = {
  friendlyName: 'User tasks',

  description: 'User tasks.',

  inputs: {
    id: {
      type: 'number',
      required: true,
      description: 'user id',
    },
  },

  exits: {
    success: {
      description: 'JSON object (array)',
    },
    notFound: {
      responseType: 'notFound',
      description: 'Invalid user id',
    },
  },

  fn: async function (inputs, exits) {
    const id = inputs.id;
    const tasks = await Task.find({ userId: id });

    // All done.
    return exits.success(tasks);
  },
};
