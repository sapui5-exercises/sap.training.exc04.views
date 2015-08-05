sap.ui.controller("sap.training.exc04.views.view.MyJSONView", {

	onCBSelect: function(oEvent) {
		var oCheckBox = this.getView().byId("idCheckBox");
		if (oCheckBox.getSelected()) {
			oCheckBox.setText("Ja");
		} else {
			oCheckBox.setText("Nein");
		}
	}

});