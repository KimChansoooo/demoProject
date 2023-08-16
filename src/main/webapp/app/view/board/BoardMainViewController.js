Ext.define('Ehm.view.board.BoardMainViewController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.board_main',

    collapsedFiledSet : function(){
        var fieldset = this.lookupReference('detail_search_fieldset');
        fieldset.items.items.forEach(function(detail_search){
            detail_search.setValue('');
        });
    },


    getBoardPopup: function(button) {

        var me = this;

        var popup = Ext.ComponentQuery.query('popup_board_main_save')[0];
        if (!popup) {
            popup = Ext.widget('popup_board_main_save');
        }

        popup.method = button.method;

        var grid = me.getView().down('grid');
        var store = grid.getStore();

        if(popup.method == 'mod') {
            if(grid.selection == undefined || grid.selection == null) {
                Ext.Msg.alert('알림', '내역을 선택하여 주세요.');
                return;
            } else {
                var popup_frm = popup.lookupReference('frm_add_popup').getForm();
                var record = grid.selection;

                popup_frm.loadRecord(record);
            }
        }

        popup.show();
        popup.completeSubmit(function(data){
            /*store.load({
                callback: function() {
                    Ext.Msg.alert('알림', '저장 완료');
                }
            });*/
            me.searchBoardList();
            popup.close();
        });
    },


    deleteBoard: function() {

        var me = this;

        var grid = me.getView().lookupReference('grid_board_panel');
        var record = grid.getSelection();

        if(record.length == 0) {
            Ext.Msg.alert('알림','선택된 내역이 없습니다.');
            return;
        }

        var arrayList = new Array();
        for(var i in record){
            arrayList.push(record[i].data.sq_board);
        }

        Ext.MessageBox.confirm('게시판', '선택된 내역을 삭제하시겠습니까?', function(btn, text) {
            if (btn == 'yes') {
                Ext.Ajax.request({
                    url: '/board/deleteBoard',
                    method: 'POST',
                    params: {
                        delList: arrayList
                    },
                    jsonData: Ext.util.JSON.encode(arrayList),
                    success: function (result, request) {
                        var retObj = Ext.decode(result.responseText);
                        if (retObj.success) {
                            Ext.Msg.alert('알림', '삭제되었습니다.');
                            me.searchBoardList();
                        } else {
                            Ext.Msg.alert('알림', '삭제되지 않았습니다.');
                        }
                    },
                    failure: function (result, request) {
                        Ext.Msg.alert('삭제실패', '서버 오류가 발생하였습니다. 잠시 후 다시 시도해주세요.');
                    }
                });
            }
        });

    },

    searchBoardList: function() {

        var me = this;

        var store = me.getViewModel().getStore('boardList');
        var proxy = store.getProxy();

        var searchKeyword = me.lookupReference('searchKeyword').getSubmitValue();
        proxy.setExtraParam('searchKeyword', searchKeyword);

        store.load();
    }



});