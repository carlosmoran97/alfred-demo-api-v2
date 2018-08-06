/**
 * ClientsController
 *
 * @description :: Server-side logic for managing Clients
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	find: (req, res) => {

        Client.find().exec((err, clients) => {

            if (err) { 
                sails.log.debug(err);
                return res.serverError(err); 
            }

            return res.json(clients);
        });
    },
    findOne: (req, res) => {
        const id = req.param('id');

        Client.find( id ).exec((err, clients) => {

            if (err) { 
                sails.log.debug(err);
                return res.serverError(err); 
            }

            return res.json(clients);
        });
    },
    create: (req, res) => {

        Client.create(req.allParams()).exec((err, client) => {

            if (err) { 
                sails.log.debug(err);
                return res.serverError(err); 
            }

            return res.json(client);
        });
    },
    update: (req, res) => {
        const id = req.param('id');
        const params = req.allParams();
        Client.update( id, params ).exec((err, client) => {
            if (err) { 
                sails.log.debug(err);
                return res.serverError(err); 
            }

            return res.json(client);
        });
    },
    delete: (req, res) => {
        const id = req.param('id');
        Client.destroy(id).exec((err) => {
            if (err) {
                return res.negotiate(err);
            }
            sails.log('Client deleted if exists.');
            return res.ok();
        });
    }
};

