/**
 * Created by kamiyun on 2016-05-17.
 */
Ext.define('Ehm.view.baseinfo.cardaccount.popup.save.PopupSaveCardAccount', {
    extend: 'Ext.window.Window',
    alias: 'widget.baseinfo_cardaccount_popup_save',

    requires: [
        'Ehm.view.baseinfo.cardaccount.popup.save.PopupSaveCardAccountModel',
		'Ehm.view.baseinfo.cardaccount.popup.save.PopupSaveCardAccountController'
    ],


    viewModel: {
        type: 'baseinfo_cardaccount_popup_save'
    },

    controller: 'baseinfo_cardaccount_popup_save',

    width: 470,

    title: '신용카드',
    modal: true,
    layout: 'anchor',
    resizable: false,
    method: 'add',

    items: [
        {
            xtype: 'form',
            reference: 'frm_add_popup',
            items: [
                {
                    xtype:'panel',
                    layout: 'column',
                    defaults: {
                        padding: '0 10 10 0',
                        columnWidth: 0.5,
                        labelWidth: 70,
                        labelSeparator: ''
                    },
                    bodyPadding: '10 0 10 10',
                    items:[
                        {
                            xtype: 'hidden',
                            name: 'sq_card_account'
                        },
                        {
                            xtype: 'textfield',
                            category: 'A010',
                            padding: '0 20 10 0',
                            fieldLabel: '카드사 <span style="color:red;">*</span>',
                            name: 'nm_cardcorp',
                            reference: 'nm_cardcorp'
                        },

                        {
                            xtype: 'textfield',
                            fieldLabel: '카드번호',
                            padding: '0 10 10 10',
                            name: 'no_card_account',
                            maxLength: 20,
                            enforceMaxLength: true
                        },
                        {
                            xtype: 'textfield',
                            fieldLabel: '카드명',
                            name: 'nm_card_account',
                            allowBlank: false,
                            columnWidth: 1,
                            maxLength: 100,
                            enforceMaxLength: true
                        },
                        {
                            xtype: 'radiogroup',
                            layout: {
                                type: 'checkboxgroup'
                            },
                            fieldLabel: '카드종류', // A004
                            reference: 'ty_cardkind',
                            columnWidth: 1,
                            allowBlank: false,
                            columns: [90, 120, 110],
                            items: [
                                {
                                    xtype: 'radiofield',
                                    name: 'ty_cardkind',
                                    inputValue: '0',
                                    boxLabel: '일반카드',
                                    checked: true
                                },
                                {
                                    xtype: 'radiofield',
                                    name: 'ty_cardkind',
                                    inputValue: '2',
                                    boxLabel: '사업용 신용카드'
                                },
                                {
                                    xtype: 'radiofield',
                                    name: 'ty_cardkind',
                                    inputValue: '1',
                                    boxLabel: '화물복지카드'
                                }
                            ]
                        },
                        {
                            xtype: 'radiogroup',
                            layout: {
                                type: 'checkboxgroup'
                            },
                            fieldLabel: '사용여부',
                            reference: 'ty_use',
                            columnWidth: 0.7,
                            allowBlank: false,
                            columns: [90, 90],
                            items: [
                                {
                                    xtype: 'radiofield',
                                    name: 'ty_use',
                                    inputValue: 'Y',
                                    boxLabel: '사용',
                                    checked: true
                                },
                                {
                                    xtype: 'radiofield',
                                    name: 'ty_use',
                                    inputValue: 'N',
                                    boxLabel: '사용안함'
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    ],
    dockedItems: [
        {
            xtype: 'toolbar',
            dock: 'bottom',
            layout:{
                type:'hbox',
                pack:'end'
            },
            items: [
                {
                    xtype: 'button',
                    reference: 'btn_save',
                    text: '저장',
                    handler: 'saveCardAccount'
                },
                {
                    xtype: 'button',
                    text: '취소',
                    handler: function(){
                        this.up('window').close();
                    }
                }
            ]
        }
    ],

    listeners: {

    },

    completeSubmit: function(callBackSubmit) {
        var me = this;
        me.callBackSubmit = callBackSubmit;
    }
});