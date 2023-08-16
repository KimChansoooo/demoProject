/**
 * Created by kamiyun on 2016-05-17.
 */
Ext.define('Ehm.view.baseinfo.cardaccount.CardAccountMainController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.baseinfo_cardaccount_main',


    // 상세검색창 닫을시 : 해당 검색항목값 reset
    collapsedFiledSet : function(){
        var fieldset = this.lookupReference('detail_search_fieldset');
        fieldset.items.items.forEach(function(detail_search){
            detail_search.setValue('');
        });
    },


    getCardAccountGrid: function(){
        var me = this;
        var grid = me.lookupReference('grid_cardaccount');
        return grid;
    },

    getPopupCardAccoundSave: function(){
        var popup = Ext.ComponentQuery.query('baseinfo_cardaccount_popup_save')[0];
        if (!popup) {
            popup = Ext.widget('baseinfo_cardaccount_popup_save');
        }
        return popup;
    },


    /**
     * 검색
     * @param button
     * @param e
     */
    searchCardAccountList: function(button, e){
        var frm = this.lookupReference('frm_cardaccount_search').getForm();
        var grid = this.getView().down('grid');
        var store = grid.getStore();

        store.getProxy().setExtraParams(frm.getFieldValues());

        store.currentPage = 1;
        store.load();
    },


    // 추가/수정창
    saveCardAccountPopup: function(button, e) {
        var me = this;

        var popup = this.getPopupCardAccoundSave();
        popup.method = button.method;

        var grid = me.getCardAccountGrid();
        var store = grid.getStore();

        var popup_frm = popup.lookupReference('frm_add_popup').getForm();

        //상세내역 hidden false : 공통팝업 처리시 사용
        if (button.method == 'mod') {
            if (grid.selection == undefined || grid.selection == null) {
                Ext.MessageBox.show({
                    title: '수정실패',
                    msg: '카드를 선택하여 주시기 바랍니다.',
                    buttons: Ext.MessageBox.OK,
                    icon: Ext.MessageBox.WARNING
                });
                return null;

            } else {
                var record = grid.selection;
                popup_frm.loadRecord(record);
            }
        }


        // 팝업 완료처리시 store load
        popup.completeSubmit(function () {
            if (button.method == 'add') {
                store.insert(0, popup_frm.getValues());
            }
            else if (button.method == 'mod') {
                grid.selection.data = popup_frm.getValues();
                grid.getView().refresh()
            }
            // store.load();
        });
        popup.show();
    },



    /**
     * 삭제
     * @param button
     * @param e
     * @param eOpts
     */
    deleteCardAccount: function(button, e, eOpts){

        var grid = Ext.ComponentQuery.query('baseinfo_cardaccount_grid')[0];
        var store = grid.getStore();

        var selectionData = grid.getSelection();
        if(selectionData.length==0) {
            Ext.Msg.alert('신용카드', '삭제할 신용카드를 선택하여주시기 바랍니다.');
            return null;
        }

        Ext.MessageBox.confirm('신용카드', '신용카드를 삭제하시겠습니까?', function(btn, text){
            if (btn == 'yes'){

                store.remove(selectionData);

                /*if(grid.selection!=undefined && grid.selection!=null) {
                    var data = grid.getSelectionModel().getSelection();
                    var dataArray = [];
                    for(var i=0; i<data.length; i++) {
                        dataArray.push(data[i].data);
                    }

                    Ext.Ajax.request({
                        url : '/baseinfo/cardaccount/deleteCardAccount.do',
                        method: 'POST',
                        jsonData: Ext.util.JSON.encode(dataArray),

                        success: function(result, request){
                            var jsonData = Ext.util.JSON.decode(result.responseText);
                            Ext.Msg.alert('신용카드', jsonData.ret_msg);
                            if(jsonData.success) {
                                store.load();
                            }
                        },
                        failure: function (result) {
                            Ext.Msg.alert('알림', '서버에 오류가 발생하였습니다. 다시 확인하여주시기 바랍니다.');
                        }
                    });
                }*/
            }
        }, this);

    }

});