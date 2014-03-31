cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "file": "plugins/com.phonegap.plugins.speech/SpeechRecognizer.js",
        "id": "com.phonegap.plugins.speech.SpeechRecognizer",
        "clobbers": [
            "plugins.speechrecognizer"
        ]
    },
    {
        "file": "plugins/com.toluhta.immersify/www/ImmersiveModePlugin.js",
        "id": "com.toluhta.immersify.Immersify",
        "clobbers": [
            "Immersify"
        ]
    },
    {
        "file": "plugins/cordova.plugin.Brightness/www/brightness.js",
        "id": "cordova.plugin.Brightness.Brightness",
        "clobbers": [
            "Brightness"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "com.phonegap.plugins.speech": "1.0.0",
    "com.toluhta.immersify": "0.1.0",
    "cordova.plugin.Brightness": "0.1.0"
}
// BOTTOM OF METADATA
});