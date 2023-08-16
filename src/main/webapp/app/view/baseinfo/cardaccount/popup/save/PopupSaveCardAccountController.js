/**
 * Created by kamiyun on 2016-05-17.
 */
Ext.define('Ehm.view.baseinfo.cardaccount.popup.save.PopupSaveCardAccountController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.baseinfo_cardaccount_popup_save',

    saveCardAccount: function(button, e){
        var me = this;
        var view = me.getView();

        var frm = me.lookupReference('frm_add_popup').getForm();
        var method = view.method;

        /*f(frm.isValid()) {
            frm.submit({
                url:'/baseinfo/cardaccount/saveCardAccount.do',
                method:'POST',
                params:{
                    mode: 'add'
                },
                success:function(form, result){
                    view.callBackSubmit();
                    view.close();
                },
                failure:function(form, result){

                }
            });
        } else {
            //console.log('validate fail');
        }*/

        view.callBackSubmit();
        view.close();
    }
});