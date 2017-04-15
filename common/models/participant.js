'use strict';

module.exports = function(Participant) {
  Participant.disableRemoteMethod('changePassword', true);
};
