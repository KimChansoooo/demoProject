Ext.define('Ehm.view.board.BoardMainViewModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.board_main',

    stores: {
        boardList : {
            autoLoad: true,
            pageSize: 30,
            config:{
                proxy: {
                    type:'ajax',
                    url:'/board/getBoardList',
                    reader: {
                        type:'json',
                        rootProperty: 'boardList',
                        totalProperty: 'totCnt'
                    },
                    extraParams: {

                    }
                }
            },

            fields: [
                { name: 'sq_user'},
                { name: 'sq_board'},
                { name: 'cd_board'},
                { name: 'nm_board'},
                { name: 'ct_board'},
                { name: 'id_user'},
                { name: 'ty_status'}
            ]
        }
    }
});