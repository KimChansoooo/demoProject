
/**
 * The main application class. An instance of this class is created by app.js when it calls
 * Ext.application(). This is the ideal place to handle application launch and initialization
 * details.
 */
Ext.define('Ehm.Application', {
    extend: 'Ext.app.Application',

    name: 'Ehm',
    requires: [
        'Ext.form.*'
    ],
    controllers: [

    ],
    models: [

    ],
    stores: [
        // 'CommonCodeStore'
    ],
    views: [
        'main.Main',
        'widget.*',
        'baseinfo.cardaccount.CardAccountMain',
        'board.BoardMain'
    ],


    launch: function () {
        // TODO - Launch the application

    }
});
