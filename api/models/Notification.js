/**
 * Notification.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    notificationType: {
      type: 'string',
      required: true
    },
    status: {
      type: 'string',
      defaultsTo: 'por hacer',
      required: true
    },
    
    // Association with Client
    senderClient: {
      model: 'client'
    }
  }
};

