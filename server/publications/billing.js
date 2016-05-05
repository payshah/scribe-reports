Meteor.publish('billing', function () {
	return Billing.find();
});
