// controllers/task/update.js

module.exports = {


  friendlyName: 'Update',


  description: 'Update task.',


  inputs: {
    id: {
      type: 'number',
      required: true,
      description: 'Task ID'
    },
    description: {
      type: 'string',
      required: false,
      description: 'Task description'
    },
    state: {
      type: 'number',
      required: false,
      description: 'Task state'
    }
  },


  exits: {
    success: {
      description: 'JSON object'
    },
    notFound: {
      responseType:'notFound',
      description: 'Invalid task id'
    }
  },


  fn: async function (inputs, exits) {

    const id = inputs.id;

    let task = await Task.findOne({id: id});
    if (!task) {
      return exits.notFound();
    }

    let description = inputs.description !== undefined ? inputs.description : '';
    description = description !== '' ? description : task.description;

    let state = task.state;
    if (inputs.state !== undefined && sails.helpers.isValidTaskState(inputs.state)) {
      state = inputs.state;
    }

    task = await Task.updateOne({id: id})
    .set({
      state: state,
      description: description,
    });


    // All done.
    return exits.success(task);

  }


};
