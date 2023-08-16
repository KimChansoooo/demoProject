Ext.define('Ehm.view.board.popup.PopupSaveBoard', {
    extend: 'Ext.window.Window',
    alias: 'widget.popup_board_main_save',

    requires: [
        'Ehm.view.board.popup.PopupSaveBoardViewModel',
        'Ehm.view.board.popup.PopupSaveBoardViewController'
    ],


    viewModel: {
        type: 'popup_board_main_save'
    },

    controller: 'popup_board_main_save',

    width: 470,

    title: '게시판',
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
                        padding: '0 10 5 0',
                        columnWidth: 0.5,
                        labelWidth: 70,
                        labelSeparator: ''
                    },
                    bodyPadding: '10 0 0 10',
                    items:[
                        {
                            xtype: 'hidden',
                            name: 'sq_board'
                        },
                        {
                            xtype: 'textfield',
                            padding: '0 20 10 0',
                            fieldLabel: '제목 <span style="color:red;">*</span>',
                            name: 'nm_board',
                            reference: 'nm_board',
                            allowBlank: false
                        },
                        {
                            xtype: 'textfield',
                            fieldLabel: '번호',
                            padding: '0 10 10 10',
                            name: 'cd_board',
                            maxLength: 20,
                            enforceMaxLength: true
                        },
                        {
                            xtype: 'textareafield',
                            name: 'ct_board',
                            reference: 'ct_board',
                            fieldLabel: '내용 <span style="color:red;">*</span>',
                            columnWidth: 1,
                            maxLength: 400,
                            enforceMaxLength: true,
                            height: 80,
                            allowBlank: false,
                            fieldStyle: 'height:80px'
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
                    method: 'add',
                    handler: 'saveBoard'
                },
                {
                    xtype: 'button',
                    text: '취소',
                    method: 'mod',
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