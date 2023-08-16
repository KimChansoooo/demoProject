Ext.define('Ehm.view.board.popup.PopupSaveBoardViewController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.popup_board_main_save',

    saveBoard: function(button, e){
        var me = this;
        var view = me.getView();

        var frm = me.lookupReference('frm_add_popup').getForm();
        var method = view.method;

        if(frm.isValid()) {
            frm.submit({
                url:'/board/saveBoard',
                method:'POST',
                params:{
                    mode: method
                },
                success:function(result, request){
                    var retObj = request.result;
                    if(retObj.success) {
                        view.callBackSubmit();
                    }
                },
                failure:function(result, request){
                    Ext.Msg.alert('실패', '서버 오류가 발생하였습니다. 잠시 후 다시 시도해주세요.');
                }
            });
        } else {
            console.log('validate fail');
        }

        /*if(frm.isValid()) {
            var values = frm.getValues();
            Ext.Ajax.request({
                url: '/board/saveBoard',
                method: 'POST',
                params: {
                    mode: method,
                    cd_board: values.cd_board,
                    ct_board: values.ct_board,
                    nm_board: values.nm_board
                },
                success: function(request, response) {
                    var responseData = Ext.decode(response.responseText);
                    if(responseData.success) {
                        view.callBackSubmit();
                    }
                },
                failure: function(request, response) {
                    Ext.Msg.alert('실패', '서버 오류가 발생하였습니다. 잠시 후 다시 시도해주세요.');
                }
            });
        } else {
            Ext.Msg.alert('실패', '유효하지 않은 입력형식입니다.');
        }*/
    }
});