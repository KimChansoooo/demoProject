Ext.define('Ehm.view.board.BoardMain', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.board_main',

    requires: [
        'Ehm.view.board.BoardMainViewController',
        'Ehm.view.board.BoardMainViewModel',
        'Ehm.view.board.popup.PopupSaveBoard'
    ],

    viewModel: {
        type: 'board_main'
    },

    controller: 'board_main',

    height: 720,
    width: 1080,
    layout: 'border',
    header: false,

    items: [

        {
            xtype: 'form',
            reference: 'frm_board_search',
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
                /*{
                    xtype: 'fieldset',
                    reference: 'detail_search_fieldset',
                    flex: 1,
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

                    ],
                    listeners: {
                        collapse: 'collapsedFiledSet'
                    }
                }*/
            ],
            dockedItems: [
                {
                    xtype: 'toolbar',
                    dock: 'top',
                    items: [
                        {
                            xtype: 'textfield',
                            emptyText: '제목 or 내용',
                            name: 'searchKeyword',
                            reference: 'searchKeyword',
                            listeners: {
                                specialkey: function(obj, e) {
                                    if(e.keyCode===e.ENTER) {
                                        var me = this;
                                        var panel = me.up('board_main');
                                        panel.getController().searchBoardList();
                                    }
                                }
                            }
                        },
                        {
                            xtype: 'button',
                            text: '검색',
                            handler: 'searchBoardList',
                            chk_auth_select: true
                        },
                        {
                            xtype: 'tbfill'
                        },
                        {
                            xtype: 'button',
                            method: 'add',
                            text: '추가',
                            handler:'getBoardPopup',
                            chk_auth_insert: true
                        },
                        {
                            xtype: 'button',
                            method: 'mod',
                            text: '수정',
                            reference: 'btn_modify',
                            handler:'getBoardPopup',
                            chk_auth_modify: true
                        },
                        {
                            xtype: 'button',
                            text: '삭제',
                            handler:'deleteBoard',
                            chk_auth_delete: true
                        }
                    ],
                    listeners: {
                        specialkey: function(obj, e) {
                            debugger;
                            if(e.keyCode==e.ENTER) {
                                var me = this;

                                var panel = me.up('board_main');
                            }
                        }
                    }
                }
            ]
        },
        {
            xtype: 'gridpanel',
            reference: 'grid_board_panel',
            region: 'center',
            layout: 'fit',
            cls: 'gridpanel',
            bind: {
                store: '{boardList}'
            },
            columns: [
                {
                    xtype: 'gridcolumn',
                    hidden: true,
                    dataIndex: 'sq_board'
                },
                {
                    xtype: 'gridcolumn',
                    minWidth: 150,
                    align: 'left',
                    text: '번호',
                    dataIndex: 'cd_board'
                },
                {
                    xtype: 'gridcolumn',
                    minWidth: 200,
                    align: 'left',
                    text: '제목',
                    dataIndex: 'nm_board'
                },
                {
                    xtype: 'gridcolumn',
                    minWidth: 300,
                    align: 'left',
                    text: '내용',
                    dataIndex: 'ct_board'
                },
                {
                    xtype: 'gridcolumn',
                    minWidth: 150,
                    text: '아이디',
                    dataIndex: 'id_user',
                    style: {
                        'border-right' : '1px solid #c1c1c1',
                        'text-align' : 'center'
                    }
                }
            ],
            selModel: {
                selType: 'checkboxmodel'
            },
            dockedItems: [
                {
                    xtype: 'pagingtoolbar',
                    dock: 'bottom',
                    displayInfo: true,
                    bind: {
                        store: '{boardList}'
                    }
                }
            ],
            listeners: {
                rowdblclick: function(){
                    var button = this.up('board_main').lookupReference('btn_modify');
                    button.fireHandler();
                }
            }
        }
    ]
});