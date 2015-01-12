/**
 * Created by Rahul on 11/01/2015.
 */
define([
	"backbone"
],
function (Backbone) {
	"use strict";

	return Backbone.Model.extend({

		defaults: {
			waiting: true,
			gameOver: false,
			yourTurn: true,
			otherPlayerXO: "O",
			xScore: 0,
			oScore: 0
		}
	});
});