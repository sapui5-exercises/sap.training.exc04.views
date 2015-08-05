sap.ui.controller("sap.training.exc04.views.view.MyHTMLView", {

	onCBSelect: function(oEvent) {
		var oCheckBox = this.getView().byId("idCheckBox");
		if (oCheckBox.getSelected()) {
			oCheckBox.setText("Ja");
		} else {
			oCheckBox.setText("Nein");
		}
	}

});