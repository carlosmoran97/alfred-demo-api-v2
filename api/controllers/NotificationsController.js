/**
 * NotificationsController
 *
 * @description :: Server-side logic for managing Notifications
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	find: (req, res) => {
        Notification
            .find()
            .populate('senderClient')
            .exec((err, nots) => {
                if(err){
                    sails.log.debug(err);
                    return res.serverError(err);
                }

                return res.json(nots);
            });
    },
    findOne: (req, res) => {
        const id = req.param('id');
        Notification
            .find( id )
            .populate( 'senderClient' )
            .exec((err, not) => {
                if(err){
                    sails.log.debug(err);
                    return res.serverError(err);
                }

                return res.json(not);
            });
    },
    create: (req, res) => {
        const params = req.allParams();
        Notification.create(params).exec((err, not) => {
            if(err){
                sails.log.debug(err);
                return res.serverError(err);
            }

            return res.json(not);
        });
    },
    update: (req, res) => {
        const id = req.param('id');
        const params = req.allParams();

        Notification.update(id, params).exec((err, not) => {
            if(err){
                sails.log.debug(err);
                return res.serverError(err);
            }

            return res.json(not);
        });
    },
    delete: (req, res) => {
        const id = req.param('id');
        Notification.destroy( id ).exec((err) => {
            if (err) {
                return res.negotiate(err);
            }
            sails.log('Notification deleted if exists.');
            return res.ok();
        });
    }
};

