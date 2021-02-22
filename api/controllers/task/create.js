// controllers/task/create.js

module.exports = {
  friendlyName: 'Create',

  description: 'Create task.',

  inputs: {
    description: {
      type: 'string',
      required: true,
    },
    userId: {
      type: 'number',
      required: true,
    },
  },

  exits: {
    success: {
      description: 'JSON object',
    },
    notFound: {
      responseType: 'notFound',
      description: 'Invalid user id',
    },
  },

  fn: async function (inputs, exits) {
    const description = inputs.description;
    const state = sails.config.enums.taskState.INCOMPLETE;
    const userId = inputs.userId;

    const user = await User.findOne({ id: userId });

    if (!user) {
      return exits.notFound();
    }

    const task = await Task.create({
      description: description,
      state: state,
      userId: userId,
    }).fetch();

    // All done.
    return exits.success(task);
  },
};
