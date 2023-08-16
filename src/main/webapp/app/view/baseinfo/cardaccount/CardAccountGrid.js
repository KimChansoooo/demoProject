/**
 * Created by kamiyun on 2016-05-17.
 */
Ext.define('Ehm.view.baseinfo.cardaccount.CardAccountGrid', {
    extend: 'Ext.grid.GridPanel',
    alias: 'widget.baseinfo_cardaccount_grid',

    requires: [
        'Ehm.view.baseinfo.cardaccount.CardAccountGridModel',
		'Ehm.view.baseinfo.cardaccount.CardAccountGridController'
    ],

    /*
    Uncomment to give this component an xtype
    xtype: 'cardaccountgrid',
    */

    viewModel: {
        type: 'baseinfo_cardaccount_grid'
    },

    controller: 'baseinfo_cardaccount_grid',

    cls: 'gridpanel',
    bind: {
        store: '{cardAccountList}'
    },

    viewConfig: {
        getRowClass: function(record, rowIndex, rowParams, store) {
            if(record.data.ty_use == 'N')
                return 'grid-row-line-through';
        }
    },

    columns: [
        {
            xtype: 'gridcolumn',
            minWidth: 150,
            text: '카드사',
            dataIndex: 'nm_cardcorp',
            flex: 1.5
        },
        {
            xtype: 'gridcolumn',
            minWidth: 150,
            text: '카드명',
            dataIndex: 'nm_card_account',
            flex: 1.5
        },
        {
            xtype: 'gridcolumn',
            minWidth: 150,
            text: '카드번호',
            dataIndex: 'no_card_account',
            flex: 1.5
        },
        {
            xtype: 'gridcolumn',
            minWidth: 100,
            text: '소지자',
            dataIndex: 'nm_card_holder',
            flex: 1
        },
        {
            xtype: 'gridcolumn',
            minWidth: 100,
            text: '유효기간',
            dataIndex: 'mn_card_validate',
            flex: 1,
            align:'center'
        },
        {
            xtype: 'gridcolumn',
            minWidth: 50,
            text: '결제일',
            dataIndex: 'dd_payment',
            flex: 0.5,
            align:'center'
        },
        {
            xtype: 'gridcolumn',
            minWidth: 100,
            text: '결제은행',
            dataIndex: 'nm_bank_account',
            flex: 1
        },
        {
            xtype: 'numbercolumn',
            minWidth: 100,
            text: '사용한도',
            dataIndex: 'mn_card_limit',
            format: '0,000',
            flex: 1,
            align: 'right'
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
                store: '{cardAccountList}'
            }
        }
    ],

    listeners: {
        rowdblclick: function(){
            var button = this.up('baseinfo_cardaccount_main').lookupReference('btn_cardaccount_modify');
            button.fireHandler();
        }
    }
});