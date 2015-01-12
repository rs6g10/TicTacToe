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
			spaceID: "",
			owner: ""
		}
	});
});