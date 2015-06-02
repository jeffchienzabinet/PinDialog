var exec = require('cordova/exec');


module.exports = {

	prompt: function(message, resultCallback, title, buttonLabels, maxlength) {
        var _message = (message || "Message");
        var _title = (title || "Title");
        var _buttonLabels = (buttonLabels || ["OK","Cancel"]);
        var _maxlength = (maxlength || 0);
        cordova.exec(resultCallback, null, "PinDialog", "prompt", [_message, _title, _buttonLabels, _maxlength]);
    }

};
