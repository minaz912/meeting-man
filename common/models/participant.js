'use strict';

module.exports = function(Participant) {
  Participant.disableRemoteMethodByName('changePassword', true);
};
