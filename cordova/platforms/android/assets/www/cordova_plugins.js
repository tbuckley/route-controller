cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "file": "plugins/cordova.plugin.Brightness/www/brightness.js",
        "id": "cordova.plugin.Brightness.Brightness",
        "clobbers": [
            "Brightness"
        ]
    },
    {
        "file": "plugins/com.phonegap.plugins.speech/SpeechRecognizer.js",
        "id": "com.phonegap.plugins.speech.SpeechRecognizer",
        "clobbers": [
            "plugins.speechrecognizer"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "cordova.plugin.Brightness": "0.1.0",
    "com.phonegap.plugins.speech": "1.0.0"
}
// BOTTOM OF METADATA
});