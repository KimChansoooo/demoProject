/**
 * Created by kamiyun on 2016-05-17.
 */
Ext.define('Ehm.view.baseinfo.cardaccount.CardAccountMain', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.baseinfo_cardaccount_main',

    requires: [
        'Ehm.view.baseinfo.cardaccount.CardAccountMainModel',
		'Ehm.view.baseinfo.cardaccount.CardAccountMainController',
        'Ehm.view.baseinfo.cardaccount.CardAccountGrid',
        'Ehm.view.baseinfo.cardaccount.popup.save.PopupSaveCardAccount'
    ],

    viewModel: {
        type: 'baseinfo_cardaccount_main'
    },

    controller: 'baseinfo_cardaccount_main',


    height: 720,
    width: 1080,
    layout: 'border',
    header: false,

    items: [

        {
            xtype: 'form',
            reference: 'frm_cardaccount_search',
            border: false,
            header: false,
            region: 'north',

            defaults: {
                margin: '0 5 0 0',
                labelSeparator: ''
            },
            bodyPadding: '0 5 0 5',

            layout: 'anchor',

            items: [
                {
                    xtype: 'fieldset',
                    reference: 'detail_search_fieldset',
                    flex: 1,
                    margin: '0 0 5 0',
                    defaults: {
                        padding: '0 10 10 5',
                        labelWidth: 60,
                        labelSeparator:''
                    },
                    layout: 'column',
                    checkboxToggle: true,
                    collapsed: true,
                    collapsible: true,
                    title: '검색조건',
                    items: [
                        {
                            xtype: 'combobox',
                            category: 'A010',
                            fieldLabel: '카드사',
                            reference:'ty_cardcorp',
                            name: 'ty_cardcorp',
                            maxWidth: '200'
                        },
                        {
                            xtype: 'combobox',
                            fieldLabel: '카드종류',
                            reference:'ty_cardkind',
                            name: 'ty_cardkind',
                            maxWidth: '200',
                            category: 'A004',
                            notSelect: true
                        }
                    ],
                    listeners: {
                        collapse: 'collapsedFiledSet'
                    }
                }
            ],
            dockedItems: [
                {
                    xtype: 'toolbar',
                    dock: 'top',
                    items: [
                        {
                            xtype: 'textfield',
                            emptyText: '카드명 or 카드번호',
                            name: 'searchKeyword',
                            reference: 'searchKeyword'
                        },
                        {
                            xtype: 'button',
                            text: '검색',
                            handler: 'searchCardAccountList',
                            chk_auth_select: true
                        },
                        {
                            xtype: 'tbfill'
                        },
                        {
                            xtype: 'button',
                            method: 'add',
                            text: '추가',
                            handler:'saveCardAccountPopup',
                            chk_auth_insert: true
                        },
                        {
                            xtype: 'button',
                            method: 'mod',
                            text: '수정',
                            reference: 'btn_cardaccount_modify',
                            handler:'saveCardAccountPopup',
                            chk_auth_modify: true
                        },
                        {
                            xtype: 'button',
                            text: '삭제',
                            handler:'deleteCardAccount',
                            chk_auth_delete: true
                        }
                    ]
                }
            ]
        },
        {
            xtype: 'baseinfo_cardaccount_grid',
            reference: 'grid_cardaccount',
            region: 'center',
            layout: 'fit'/*,
            margin: '10 0 0 0'*/
        }
    ]
});