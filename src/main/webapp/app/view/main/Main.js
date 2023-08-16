/*
 * File: app/view/main/Main.js
 *
 * This file was generated by Sencha Architect version 3.2.0.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Ext JS 5.1.x library, under independent license.
 * License of Sencha Architect does not include license for Ext JS 5.1.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('Ehm.view.main.Main', {
    extend: 'Ext.container.Viewport',
    alias: 'widget.main',

    requires: [
        'Ehm.view.main.MainViewModel',
        'Ehm.view.main.MainNorth',
        'Ehm.view.main.MainCenter',
        'Ehm.view.main.MainWest',
        'Ext.panel.Panel'
    ],

    viewModel: {
        type: 'main'
    },
    layout: 'border',

    items: [
        
        {
            xtype: 'main_center',
            region: 'center'
        },
        {
            xtype: 'main_west',
            width: 245,
            region: 'west'
        }
    ]

});