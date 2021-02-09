module.exports = {

  sync: true,

  friendlyName: 'Is valid task state',


  description: '',


  inputs: {
    state: {
      type: 'number',
      required: true,
      description: 'Task state'
    }
  },


  exits: {

    success: {
      description: 'All done.',
    },

  },


  fn: function (inputs) {
    const taskState = sails.config.enums.taskState;
    let answer;

    switch (inputs.state) {
      // Add more validation states if needed in the future
      case taskState.INCOMPLETE:
      case taskState.DONE:
        answer = true;
        break;
      default:
        answer = false;
        break;
    }

    // All done.
    return answer;
  }


};

